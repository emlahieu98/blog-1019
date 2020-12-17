const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const AccountSchema = new mongoose.Schema(
  {
    email: { type: String, default: "" },
    fullName: { type: String, default: "" },
    password: { type: String, default: "" },
    role: { type: String, default: "user" },
    avatar: { type: String, default: "defaultAcc.jpg" },
    phoneNumber: { type: Number },
    address: { type: String, default: ""},
    gender: { type: String, enum: ["male", "female"], default: "male" },
  },
  {
    timestamps: true,
  }
);

AccountSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("accounts", AccountSchema);
