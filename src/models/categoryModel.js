const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const CategorySchema = new mongoose.Schema(
  {
    name:
      {
        type: String,
        default: "Other",
      },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
CategorySchema.plugin(mongoosePaginate);
module.exports = mongoose.model("categories", CategorySchema);
