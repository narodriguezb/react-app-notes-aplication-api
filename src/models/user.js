const mongoose = require("mongoose");

//crear el modelo de datos que quiero crear
const userSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth:{
    type: Date,
    required:false,
  },
},{
    timestamps:true,
});

module.exports = mongoose.model("User", userSchema);
