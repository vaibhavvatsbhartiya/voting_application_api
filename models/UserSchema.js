const mongoose = require("mongoose");
const { type } = require("os");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },

  phoneNumber: {
    type: String,
    required: true,  
    minlength: 10,  
    maxlength: 15, 
  },

  email: {
    type: String,
    unique: true, 
    match: [/.+\@.+\..+/, 'Please enter a valid email address'], // Regex for basic email validation
  },

  password: {
    type: String,
    required: true, 
  },

  age: {
    type: Number,
    required: true, 
  },

  address: {
    type: String,
    required: true
  },

  aadhaarNumber: {
    type: String,
    unique: true, 
    required: true, 
    minlength: 12, 
    maxlength: 12, 
  },

  role: {
    type : String,
    enum: ['voter', 'admin'],
    default: "voter"
  },

  isVoted:{
    type: Boolean,
    default: false
  }
});

// may be I want to add an index for fast lookup by aadhaarNumber or phoneNumber
// UserSchema.index({ aadhaarNumber: 1 });
// UserSchema.index({ phoneNumber: 1 });

const User = mongoose.model("User", UserSchema);

module.exports = User;
