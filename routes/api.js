const express = require("express");
const axios = require("axios");
const router = express.Router();

// 🔑 Load API Keys
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// 📸 Fetch Destination Images (Unsplash)
router.get("/images", async (req, res) => {
  const { destination } = req.query;
  
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${destination}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=10&orientation=landscape`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

// 🌤 Fetch Weather Data (OpenWeather)
router.get("/weather", async (req, res) => {
  const { destination } = req.query;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${destination}&units=metric&appid=${WEATHER_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

// 🤖 Generate AI Travel Plan (Gemini API)
router.post("/generate-plan", async (req, res) => {
  const { from, destination, duration, budget, interests, specialRequirements } = req.body;

  const prompt = `
    Generate a structured travel itinerary for a trip from **${from}** to **${destination}** for **${duration} days**. 

    - **Budget**: ${budget} INR per person  
    - **Preferences**: ${interests || "None"}  
    - **Special Requirements**: ${specialRequirements || "None"}  

    **Return response in HTML format**
  `;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate travel plan" });
  }
});

module.exports = router;
