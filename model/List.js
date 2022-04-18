const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is must!"],
  },
 
  date: {
    type: Date,
    required: [true, "Date is must!"],
  }

});

const List = mongoose.model("todo", ListSchema);

module.exports = List;
