import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    match: /[\w\s]+/,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    enum: ["Fantasy", "Action", "History"],
    default: "Action",
  },
  year: {
    type: Number,
    required: true,
  },
  favourite: {
    type: Boolean,
    required: false,
    default: false,
  },
}, { timestamps: true});

export default mongoose.model("Book", bookSchema);
