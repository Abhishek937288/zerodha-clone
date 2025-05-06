
import Holding from "../models/holdingsModel.js";
 
 export const getHoldings = async (req,res)=>{
    const holding = await Holding.find({userId:req.userId});
    res.status(200).json({
        message:"holding fetched successfully",
        data : holding,
        success :true
    });
 };



