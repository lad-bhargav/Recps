
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

export const UserModel = mongoose.model("users", UserSchema);

// const mongoose=require('mongoose')
// const { type } = require('os')

// const UserSchema=mongoose.Schema({
//     username:{type:String,require:true},
//     email:{type:String,require:true},
//     password:{type:String,require:true}
// })