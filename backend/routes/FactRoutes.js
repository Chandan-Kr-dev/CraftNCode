const express = require("express");

const FactRouter = express.Router();

const FactsController = require("../Controllers/FactsController.js");
const Facts = require("../models/Facts.models.js");

FactRouter.post('/detect',FactsController.detectLanguage)
FactRouter.post('/translate',FactsController.translateToEnglish)


module.exports = FactRouter;
