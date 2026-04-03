import { useState } from "react";
import MathInput from "../components/MathInput";
import { analyzeResponse } from "../utils/openai.js";


export default function Playground() {
  const [currentLatex, setCurrentLatex] = useState("");
  const [aiResult, setAiResult] = useState("");

  const handleMathChange = (latex) => {
    console.log("MathLive output:", latex);
    setCurrentLatex(latex);
};

const handleAnalyze = async () => {
  const result = await analyzeResponse(currentLatex);
  setAiResult(result);
};


return (
    <div style={{ padding: "2rem" }}>
      <h1>Playground</h1>
      <p>This is your sandbox for testing MathLive + OpenAI.</p>

      <MathInput onChange={handleMathChange} />

      <button onClick={handleAnalyze} style={{ marginTop: "20px" }}>
        Submit
      </button>
        {aiResult && (
            <div style={{ marginTop: "20px", padding: "1rem", border: "1px solid #ccc" }}>
                <h3>AI Response:</h3>
                <p>{aiResult}</p>
            </div>
            )
        }

    </div>
  );
}