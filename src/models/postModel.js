const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("mongoose-slug-generator");
const PostSchema = new mongoose.Schema(
  {
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "account",
    },
    title: {
      type: String,
      unique: true,
      default: "",
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    image: { type: String, default: "avatar.jpg" },
    imageContent: [{ type: String, default: "avatar.jpg" }],
    status: {
      type: String,
      enum: ["waiting", "approved", "success", "fail"],
      default: "approved",
    },
    content: {
      type: String,
      default: "",
    },
    tags: [
      {
        type: String,
        default: "#coder",
      },
    ],
    commentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
PostSchema.plugin(mongoosePaginate);
PostSchema.plugin(slug);
module.exports = mongoose.model("posts", PostSchema);
