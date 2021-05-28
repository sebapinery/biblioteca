import { Schema, model } from "mongoose";

const authorSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  deletedAt: { type: Date, required: false, default: null}
});

const Author = model("Author", authorSchema);

export default Author;
