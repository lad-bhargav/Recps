const mongoose=require('mongoose')
const { type } = require('os')

const UserSchema=mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})