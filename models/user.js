const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   firstName: {
       type: String, 
       required: true
   },
   nameName: {
       type: String,
       required: true,
   },
   userName: {
       type: String,
       required: true,
   },
   password: {
       type: String,
       required: true
   }
})

const User = mongoose.model("User", userSchema);

module.exports = Book;