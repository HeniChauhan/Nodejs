const mongoose = require('mongoose');
var validator = require("email-validator");

var studentSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: 'This field is required'
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
})

// custom validation for email

studentSchema.path('email').validate((val) => {
    return validator.validate(val);
},'Invalid Email');

mongoose.model('Student',studentSchema);