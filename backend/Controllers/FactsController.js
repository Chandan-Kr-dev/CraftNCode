const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

const { translate } = require("@vitalets/google-translate-api");
const {HttpProxyAgent}=require('http-proxy-agent');

const agent = new HttpProxyAgent('http://5.9.238.29:80');



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
    
    const translatedLang = await translate(text, {
      to: "en",
      fetchOptions:{agent}
    });

    return translatedLang.text;
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
