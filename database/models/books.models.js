import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  dateReleased: { type: Date },
  isbn: { type: String },
});

const Book = model("Book", bookSchema);

export default Book;
