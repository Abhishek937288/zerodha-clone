
import Holding from "../models/holdingsModel.js";
import { orderValidation } from "../validations/ordersValidation.js";
import Order from "../models/ordersModel.js";


export const getOrders = async(req,res)=>{
 const orders = await Order.find({userId : req.userId});
 
 return res.status(200).json({
    message : "orders got successfully",
    data : orders,
    success : true
 });
}



export const buy = async (req,res)=>{
  const body = req.body;
  const {error,value} = orderValidation.validate(body);
  if(error){
    return res.status(400).json({
        message:"error.detail[0].message",
        data:null,
        success:false
    })
  }
 const {name,qty,price,mode}=value;
 const newOrder = await new Order({
    name,
    qty,
    price,
    mode,
    userId:req.userId
 }).save();

 let holding = await Holding.findById( req.userId);
 if(!holding){
   await new Holding({
        name,
        qty,
        avg : price,
        price,
        net : "0",
        day : "0",
        userId : req.userId
    }).save();
 };
 
 if(holding){
  const totalQty = holding.qty + qty;
 holding.avg = (holding.avg * holding.qty + price * qty) / totalQty;
 holding.qty = totalQty;
 holding.price = price;
 await holding.save();
 }
  
 return res.status(200).json({
    message : "stock purchased succesfully",
    data : null,
    success:true
 })

};

export const sell = async (req,res)=>{
    const body = req.body;
    const {error ,value}= orderValidation.validate(body);
    if(error){
        return res.status(400).json({
            message:"error.detail[0].message",
            data : null,
            success :false
        })};

        const {name,qty,price,mode}=value;
        const newOrder = await new Order({
           name,
           qty,
           price,
           mode,
           userId:req.userId
        }).save();
        
        let holding = await Holding.findById(req.userId);
        if(!holding){
            return res.status(400).json({
                message:"we dont have this stock to sell",
                data : null,
                success:false,
            });
        };
        if (holding.qty < qty) {
            return res.status(400).json({
              message: "Not enough quantity to sell.",
              success: false,
              data: null,
            });
          }
        
          holding.qty -= qty;
        
          if (holding.qty === 0) {
            await Holding.deleteOne({ name, userId: req.userId });
            return res.json({
              message: "Stock sold and removed from holdings.",
              success: true,
              data: null,
            });
          }
        
          await holding.save();
          return res.json({
            message: "Stock sold",
            data: holding,
            success: true,
          });
}