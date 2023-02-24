const mongoose = require('mongoose');
const ReactFormData = new mongoose.Schema({
    EventName:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Venue:{
        type:String,
        required:true
    }
})

const FormData = new mongoose.model('FormData',ReactFormData)
module.exports = FormData