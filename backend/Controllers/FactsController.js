const { Translate } = require("@google-cloud/translate").v2;
const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

const detectLanguage = async (req, res) => {
  const {factText}=req.body;
  console.log(factText)

  try {
    const response=await axios.post('http://localhost:5000/predict',{
      input:factText
    });
    console.log(response.data)
  } catch (error) {
    console.error(error)

  }
};

// Translate to English
const translateToEnglish = async (req, res) => {
  const { text, sourceLang } = req.body;

  try {
    const response = await axios.post(
      "https://deep-translate1.p.rapidapi.com/language/translate/v2",
      {
        q: text,
        source: sourceLang,
        target: "en",
      },
      {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
        },
      }
    );

    res.json({
      translatedText: response.data.data.translations.translatedText,
    });
  } catch (error) {
    console.error("Translation API error:", error.message);
    res.status(500).json({ error: "Translation failed" });
  }
};

const factCheckClaim = async (claim) => {
  const apiKey = process.env.GOOGLE_FACT_CHECK_API_KEY;
  const encodedClaim = encodeURIComponent(claim);
  const response = await axios.get(
    `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodedClaim}&key=${apiKey}`
  );
  return response.data;
};

module.exports = { detectLanguage, translateToEnglish, factCheckClaim };
