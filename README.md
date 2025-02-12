# 🌍 AI Travel Planner

Deployed Link : https://github.com/akhulisumit/Safar-2.0

**A smart travel planning web app that provides AI-generated itineraries, real-time weather updates, and stunning destination images.**  

🔒 **Now with a secure backend hosted on Render!** 🔒  

---

## 📌 Features

✅ **AI-Generated Travel Plans** using **Gemini API**  
✅ **Real-time Weather Updates** using **OpenWeather API**  
✅ **Beautiful Destination Images** from **Unsplash API**  
✅ **Secure Backend** to hide API keys  

---

## 🚀 Live Demo

- **Frontend:** `[YOUR_FRONTEND_URL_HERE]`  
- **Backend (Render):** [https://safar-2-0-backend.onrender.com](https://safar-2-0-backend.onrender.com)  

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **APIs Used:**
  - 🌍 **Gemini API** - AI-generated travel plans  
  - 🌤️ **OpenWeather API** - Real-time weather updates  
  - 🏞 **Unsplash API** - High-quality travel images  

---

## 🔹 Installation Guide (Local Setup)

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/travel-backend.git
cd travel-backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Create a `.env` File**
```sh
touch .env
```
Add the following environment variables:
```ini
UNSPLASH_ACCESS_KEY=your-unsplash-api-key
WEATHER_API_KEY=your-weather-api-key
GEMINI_API_KEY=your-gemini-api-key
```

### **4️⃣ Start the Server**
```sh
npm start
```
Your backend will run at **`http://localhost:5000`**.

---

## 🔹 Deploy to Render

### **1️⃣ Push Your Code to GitHub**
```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/travel-backend.git
git push -u origin main
```

### **2️⃣ Deploy on Render**
1. Go to **[Render](https://render.com/)**  
2. Click **"New Web Service"**  
3. Connect your **GitHub repository**  
4. **Set Build Command:**  
   ```sh
   npm install
   ```
5. **Set Start Command:**  
   ```sh
   npm start
   ```
6. **Add Environment Variables**:
   ```
   UNSPLASH_ACCESS_KEY = your-unsplash-api-key
   WEATHER_API_KEY = your-weather-api-key
   GEMINI_API_KEY = your-gemini-api-key
   ```
7. Click **Deploy!** 🎉  

---

## 🔹 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/weather?destination=Paris` | **GET** | Fetches real-time weather for the given destination |
| `/api/images?destination=Paris` | **GET** | Fetches high-quality images of the destination |
| `/api/generate-plan` | **POST** | Generates an AI-based travel itinerary |

---

## 🖥️ Frontend Integration

### **🔹 Fetch Weather Data**
```javascript
async function fetchWeather(destination) {
  const response = await fetch(`https://safar-2-0-backend.onrender.com/api/weather?destination=${destination}`);
  const data = await response.json();
  console.log(data);
}
```

### **🔹 Fetch Destination Images**
```javascript
async function fetchImages(destination) {
  const response = await fetch(`https://safar-2-0-backend.onrender.com/api/images?destination=${destination}`);
  const data = await response.json();
  console.log(data.results);
}
```

### **🔹 Generate AI-Based Travel Plan**
```javascript
async function generateTravelPlan(data) {
  const response = await fetch(`https://safar-2-0-backend.onrender.com/api/generate-plan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);
}
```

---

## 📜 License

This project is **open-source**. Feel free to contribute!  

---

## 🙌 Contributing

1️⃣ **Fork the repo**  
2️⃣ **Create a new branch** (`feature-branch`)  
3️⃣ **Commit your changes**  
4️⃣ **Push to your fork & submit a PR**  

---

## 📞 Contact

💬 **Need help?** Connect with me:  
📧 **Email:** `your-email@example.com`  
🔗 **GitHub:** [YOUR_GITHUB_LINK_HERE]  

---

## 🎯 Final Thoughts

✅ **Now your AI Travel Planner is fully functional & secure!** 🔥  
✅ **No more exposed API keys!** 🔒  
✅ **Scalable backend deployed on Render!** 🚀  

**Let me know if you need any improvements!** 😊✨

