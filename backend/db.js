const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Snehal:Snehal27@cluster0.ow4lqxn.mongodb.net/paytm");
//model define for users
const userSchema=new mongoose.Schema({
    username:{type:String,require:true},
    firstName:{type:String,require:true},
    secondName:{type:String,require:true},
    password:{type:String,require:true},
})
models.export('User',userSchema);