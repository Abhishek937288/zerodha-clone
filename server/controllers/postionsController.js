import Position from "../models/positionsModel.js";

export const getPosition = async (req,res)=>{
    const positon = await Position.find({uerId:req.userId});
    res.status(200).json({
        message : "postions fetched succesfully",
        data:positon,
        success : true
    });
};