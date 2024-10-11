const express=require("express");
const User=require('../db')
const app=express();
const zod=require("zod");
const JWT_SECRET = require("../config");
const router=express.Router();
const signupSchema=zod.object({
  username:zod.string(),
  password:zod.string(),
  firstName:zod.string(),
  password:zod.string()
})
router.post("/signup",async function(req,res)
{
    const body=req.body;
    const {success}=signupSchema.safeParse(req.body);
    if(!success)
    { 
        return res.json(
            {
            message:"Not sucess try again"
    })
    }
    const user=User.findOne(
        {
          userame:body.username
        }
    )
    if(user._id)
    {
        return res.json(
            {
                message:"Not succed"
            }
        )
    }
    const newUser=User.create(body);
    const token=wt.sign(
        {
            userId:newUser._id
        },JWT_SECRET
    )
    res.json(
        {
            message:"user created successfully",
            token:token
        }
    )


})




module.exports=router;
