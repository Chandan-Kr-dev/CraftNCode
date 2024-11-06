const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
    const translatedLang = await axios.post(
      "https://deep-translator-api.azurewebsites.net/google",
      {
        source: "auto",
        target: "en",
        text: text,
        proxies: [],
      }
    );

    return translatedLang.data.translation;
  } catch (error) {
    console.error(error);
  }
};

const factCheckClaim = async (claim) => {
  try {
    // const response = await axios.get(
    //   'https://factchecktools.googleapis.com/v1alpha1/claims:search',
    //   {
    //     params: {
    //       query: claim,
    //       key: process.env.REACT_APP_GOOGLE_FACT_CHECK_API_KEY,
    //     },
    //   }
    // );
    const prompt = `Is the statement "${claim}" true? Please provide the response in the following JSON format:
   {
      "fact": "real fact",
      "sources": [
        "source_url_1",
        "source_url_2"
      ]
    } just the object and no extra text or special character in response`;
    const response1 = await model.generateContent(prompt);
    console.log(response1.response.text());

    const responseData = JSON.parse(response1.response.text());
    console.log(responseData.fact);

    return responseData;
  } catch (error) {
    console.error("Error fetching fact check data:", error);
    return error.message;
  }
};

module.exports = { detectLanguage, translateToEnglish, factCheckClaim };
