const express = require("express");

const FactRouter = express.Router();

const FactsController = require("../Controllers/FactsController.js");
const Facts = require("../models/Facts.models.js");

FactRouter.post("/detect", async (req, res) => {
  const { factText } = req.body;
  console.log(factText);

  const language = await FactsController.detectLanguage(factText);
  console.log(language);

 
    const translatedtoEnglish = await FactsController.translateToEnglish(
      factText
    );
    console.log(translatedtoEnglish);
  

  const response = await FactsController.factCheckClaim(translatedtoEnglish);
  console.log(response);
  // console.log(response.claims)
  res.json(response);
});

module.exports = FactRouter;
