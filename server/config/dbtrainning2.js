const mongoose=require("mongoose");

const connect=()=>{
    mongoose
    .connect("mongodb://127.0.0.1:27017/trainning2")
    .then(()=>{console.log("connnexion réussite")})
    .catch((e)=>{console.log(e); process.exit(1)})
}

module.exports.connect=connect