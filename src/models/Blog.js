const { Schema, ObjectId } = require("mongoose");
const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Blog",
  new Schema({
    id: { type: ObjectId },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
      default: Date.now,
    },
  })
);
