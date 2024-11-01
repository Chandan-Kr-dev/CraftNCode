const mongoose = require("mongoose");

const factsSchema = new mongoose.Schema(
  {
    OriginalFact: {
      type: String,
      required: true,
    },
    translatedFact: { type: String },
    Language: { type: String },
    Result: { type: Object },
    Source: { type: String },
  },
  { timestamps: true }
);

const Facts = mongoose.model("Facts", factsSchema);
module.exports = Facts;
