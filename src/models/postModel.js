const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
var slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const PostSchema = new mongoose.Schema(
  {
    // Owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "account",
    // },
    title: {
      type: String,
      default: "",
    },
    image: { type: String, default: "defaultPost.png" },
    imageContent: [{ type: String, default: "" }],
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
        default: "coder",
      },
    ],
    commentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
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
module.exports = mongoose.model("posts", PostSchema);
