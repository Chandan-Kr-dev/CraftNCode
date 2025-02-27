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
    console.log(claim);
    const prompt = `Provide a JSON response , The JSON should have two fields: 'fact' and 'sources'. The 'fact' field should contain a concise summary of the origin. The 'sources' field should be an array of URLs supporting the fact.

Example JSON output:
{
  "fact": "...",
  "sources": [
    "...",
    "..."
  ]
}

Question: "${claim}"`;
    const response1 = await model.generateContent(prompt);
    console.log(response1.response.text());

    function cleanJsonResponse(response) {
      let cleanedResponse = response.replace(/```json\s*/, ""); // Remove ```json and any whitespace after it
      cleanedResponse = cleanedResponse.replace(/```\s*$/, ""); // remove ``` and any whitespace before the end of the string.
      cleanedResponse = cleanedResponse.trim(); // Remove leading/trailing whitespace
      return cleanedResponse;
    }
    const trimmedResponse = cleanJsonResponse(response1.response.text());

    const responseData = JSON.parse(trimmedResponse);
    console.log(responseData.fact);

    return responseData;
  } catch (error) {
    console.error("Error fetching fact check data:", error);
    return error.message;
  }
};

module.exports = { detectLanguage, translateToEnglish, factCheckClaim };
