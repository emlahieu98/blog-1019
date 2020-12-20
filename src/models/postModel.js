const mongoose = require("mongoose");

var slug = require('mongoose-slug-updater');
const mongoosePaginate = require("mongoose-paginate-v2");
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
    slug: {
      type: String,
      slug: 'title',
      unique: true,
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
        default: "code",
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
module.exports = mongoose.model("posts", PostSchema);
