const mongoose=require('mongoose');
// mongoose.connect("mongodb+srv://Snehal:Snehal27@cluster0.ow4lqxn.mongodb.net/paytm");
//model define for users
mongoose.connect("mongodb+srv://Snehal:Snehal27@cluster0.ow4lqxn.mongodb.net/paytm")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

const userSchema=new mongoose.Schema({
    username:{type:String,require:true, unique: true},
    firstName:{type:String,require:true},
    secondName:{type:String,require:true},
    password:{type:String,require:true},
})
const accountSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        balance:{
            type:Number,
            required:true
        }
    }
);
const Account=mongoose.model('Account',accountSchema);
const User=mongoose.model('User',userSchema);

module.exports={
    User,
    Account,
};