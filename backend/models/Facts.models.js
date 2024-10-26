import mongoose from "mongoose";

const factsSchema = new mongoose.Schema(
  {
    OriginalFact: {
      type: String,
      required: true,
    },
    translatedFact: { type: String },
    Language: { type: String },
    Result: { type: Object },
  },
  { timestamps: true }
);

export const Facts = mongoose.model("Facts", factsSchema);