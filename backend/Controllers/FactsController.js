import express from "express";

import axios from "axios";
import { Facts } from "../models/Facts.models.js";


const LINGVA_API_URL = process.env.LINGVA_API_URL;

const detectLanguage = async (text) => {
    
    try {
        const response = await axios.get(`${LINGVA_API_URL}/api/v1/detect/${encodeURIComponent(text)}`);
        console.log(response)
        if(response.data &&response.data.language){

            return response.data.language;  // Returns the language code
        }
        else{
            res.status(500).json({message:"Language cannot be detected"})
        }
      } catch (error) {
        console.error("Error detecting language:", error);
        throw error;
      }
};




const translateToEnglish = async (text,sourceLang) => {
    try {
        const response = await axios.get(`${LINGVA_API_URL}/api/v1/${sourceLang}/en/${encodeURIComponent(text)}`);
        return response.data.translation;
      } catch (error) {
        console.error("Error translating text:", error);
        throw error;
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

export default { detectLanguage, translateToEnglish, factCheckClaim };
