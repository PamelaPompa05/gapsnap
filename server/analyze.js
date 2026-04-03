import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });
console.log("Loaded key:", process.env.OPENAI_API_KEY);
const DEV_MODE = true; // set to false when you want real OpenAI


const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/analyze", async (req, res) => {
  try {
    const { latex } = req.body;

    // --- DEV MODE: return mock response ---
    if (DEV_MODE) {
      return res.json({
        result: `Mock analysis for: ${latex}`
      });
    }

    // --- REAL MODE: call OpenAI ---
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: `Analyze this math expression: ${latex}`
        }
      ]
    });

    res.json({ result: response.output_text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});



