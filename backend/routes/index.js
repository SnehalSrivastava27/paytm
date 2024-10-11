// /api/v1/user
// /api/v1/transaction
const express=require("express");
const app=express();
const router=express.Router();
// router.get("/",function(req,res,next)
// {
//     console.log("hi");
// })
router.use('/user',userRouter)
module.exports=router;
