const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

const { translate } = require("@vitalets/google-translate-api");

const { GoogleGenerativeAI } = require("@google/generative-ai");

const detectLanguage = async (text) => {
  console.log(text);
  try {
    const response = await axios.post("http://localhost:5000/predict", {
      input: text,
    });
    console.log(response.data.prediction);
    return response.data.prediction;
  } catch (error) {
    console.error(error);
  }
};

// Translate to English
const translateToEnglish = async (text) => {
  try {
    const translatedLang = await translate(text, {
      to: "en",
    });

    return translatedLang.text;
  } catch (error) {
    console.error(error);
  }
};

const factCheckClaim = async (claim) => {
  const response = await axios.post("https://serpapi.com/search", {
    engine:"google",
    q:claim,
    api_key:process.env.SEARCH_API_KEY,
  });
  console.log(response.message)
  return response.message;
};

module.exports = { detectLanguage, translateToEnglish, factCheckClaim };
