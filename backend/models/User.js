const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: String,
      default: "user",
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
    discriminatorKey: "role",
    collection: "Users",
  }
);

User.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

User.methods.ComparePassword = function (passwordEntered) {
  return bcrypt.compareSync(passwordEntered, this.password);
};

User.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES,
  });
};
module.exports = mongoose.model["Users"] || mongoose.model("Users", User);
