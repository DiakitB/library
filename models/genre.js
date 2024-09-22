const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 100 },
});

genreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
}); // this._id is the genre id
const Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre;
