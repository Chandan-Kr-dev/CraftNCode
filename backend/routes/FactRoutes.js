import express from 'express';

const FactRouter=express.Router();

import FactsController from '../Controllers/FactsController.js';


FactRouter.post('/factscheck', async (req, res) => {
    console.log(req.body)
    try {
      const { factText } = req.body;
      const language = await FactsController.detectLanguage(factText);
      let factTextInEnglish = factText;
  
      if (language !== 'en') {
        factTextInEnglish = await FactsController.translateToEnglish(factText,language);
      }
  
      const factCheckResult = await FactsController.factCheckfactText(factTextInEnglish);
      res.status(200).json({ originalfactText: factText, translatedfactText: factTextInEnglish, factCheckResult });
    } catch (error) {
      console.error("Error in factText submission:", error);
      res.status(500).json({ message: "Error processing factText." });
    }
  });

export default FactRouter;