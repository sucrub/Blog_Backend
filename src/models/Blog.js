const { Schema, ObjectId } = require("mongoose");
const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Blog",
  new Schema(
    {
      id: { type: ObjectId },
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  )
);
