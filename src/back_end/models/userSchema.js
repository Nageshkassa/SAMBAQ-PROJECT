const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
 

    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
    },
  },
);
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });

module.exports = mongoose.model("Sambaq", userSchema);
