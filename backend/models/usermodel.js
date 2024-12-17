const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "Frist name must be at least 3 characters"],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [3, "Last name must be at least 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "email must be at least 5 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});
userSchema.methods.genetateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};
userSchema.methods.comparePassword = async function (password) {
  return await bcrpt.compare(password, this.password);
};
userSchema.statics.hashPassword = async function (password) {
  return await bcrpt.hash(password, 10);
};

const User = mongoose.model("user", userSchema);
module.exports = User;
