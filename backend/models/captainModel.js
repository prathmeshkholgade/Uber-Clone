const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const bcrpt = require("bcrypt");

const captainSchema = new Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "FirstName must be atleast 3 characters"],
    },
    lastName: {
      type: String,
      minLength: [3, "LastName must be atleast 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [4, "Password must be atleast 8 characters"],
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "color must be atleast 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, "plate must be atleast 3 characters long"],
    },
    capacity: {
      type: String,
      required: true,
      min: [3, "plate must be atleast 3 characters long"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location: {
    lat: {
      type: String,
    },
    lng: {
      type: String,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};
captainSchema.methods.comparePassword = async function (password) {
  return await bcrpt.compare(password, this.password);
};
captainSchema.statics.hashPassword = async function (password) {
  return await bcrpt.hash(password, 10);
};

const Captain = mongoose.model("Captain", captainSchema);
module.exports = Captain;
