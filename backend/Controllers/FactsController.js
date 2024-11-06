const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");



const detectLanguage = async (text) => {
  console.log(text);
  try {
    const response = await axios.post(`${process.env.PYTHON_SERVER}predict`, {
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
    
    const translatedLang = await axios.post('https://deep-translator-api.azurewebsites.net/google',
      {
        "source": "auto",
        "target": "en",
        "text": text,
        "proxies": []
      }
    )

  
    return translatedLang.data.translation;
  } catch (error) {
    console.error(error);
  }
};

const factCheckClaim = async (claim) => {
  try {
    const response = await axios.get(
      'https://factchecktools.googleapis.com/v1alpha1/claims:search',
      {
        params: {
          query: claim,
          key: process.env.REACT_APP_GOOGLE_FACT_CHECK_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching fact check data:", error.message);
    return error.message
  }
};

module.exports = { detectLanguage, translateToEnglish, factCheckClaim };
