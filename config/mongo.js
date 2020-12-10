const mongoose = require("mongoose");
const uris = "mongodb://localhost:27017/blog-1019";
try {
  mongoose.connect(uris, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
  handleError(error);
}
