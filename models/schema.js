const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  subtitle: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  imageURL: {
    type: String,
    require: true,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
