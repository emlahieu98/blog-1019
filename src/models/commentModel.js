const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const CommentSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    name:
    {
      type: String,
      default: "user",
    },
    postId:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
CommentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("comments", CommentSchema);
