const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");
const Joi = require('joi');
const jwt = require("jsonwebtoken");


const signupValidationSchema = Joi.object({
    username: Joi.string().alphanum().max(255).required().min(3),
    email : Joi.string().email().required(),
    password : Joi.string().required().min(6)
})

module.exports.Signup = async (req, res, next) => {
    try {
        const {body} = req;
        const {error,value} = signupValidationSchema.validate(body)
        if(error){
            return res.json({message: error.details[0].message,data: null, success: false}).status(400)
        }
        const {email,username,password} = value
        const existingUser = await User.findOne({ email });
        const genSalt = await bcrypt.genSalt(10)
        const hasedPassword = await bcrypt.hash(password, genSalt)
        if (existingUser) {
            return res.json({ message: "User already exists",data:null, success: false }).status(400);
        }
        const user = await User.create({ email, password: hasedPassword, username });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,      
            maxAge: 15 * 24 * 60 * 60 * 1000
        });
        return res
            .status(201)
            .json({ message: "User signed in successfully",data:{
                email: user.email,
                username: user.username,
                _id: user._id,
                createdAt: user.createdAt
            }, success: true })
    } catch (error) {
        res.json({message: "internal server error", success: false,data: null})
        console.error(error);
    }
};

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect password or email' });
        }
        const isCorrectPassowrd = await bcrypt.compare(password, user.password);
        if (!isCorrectPassowrd) {
            return res.json({ message: 'Incorrect password or email' });
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, { 
            httpOnly: true,    
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: "strict" // CSRF
        })
        return res.status(200).json({ message: "User logged in successfully", success: true,data:{
            email: user.email,
            username: user.username,
            _id: user._id,
            createdAt: user.createdAt
        } } );
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal Server error", error: error.message , data: null}); 
    }
};

module.exports.Logout = (req,res)=>{
   // clear the cookie
   res.clearCookie("token",{httpOnly: true});
   res.status(200).json({ message: "logout sucessfull", error: null , data: null}); 
}


module.exports.Me = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({message: "Unauthorized", success: false, data: null});
        const decoded =  jwt.verify(token, process.env.TOKEN_KEY);
        if (!decoded) return res.status(401).json({message: "Unauthorized", success: false, data: null});
        const user = await User.findById(decoded.id);
        if (!user) return res.status(404).json({message: "usern not found", success: false, data: null});
        return res
        .status(200)
        .json({ data:{
            email: user.email,
            username: user.username,
            _id: user._id,
            createdAt: user.createdAt
        }, success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", error: error.message }); 
    }
};

