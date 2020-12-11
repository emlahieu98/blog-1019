const mongoose = require("mongoose");
const uris = "mongodb://localhost:27017/blog-1019";
try {
  mongoose.connect(uris, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connect DB success');
} catch (error) {
  console.log("Connect fail");
}
