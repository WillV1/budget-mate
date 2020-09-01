const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoalSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },

  goal: {
    type: String,
    unique: true
  }
});

module.exports = Goal = mongoose.model("goal", GoalSchema);
