export async function analyzeResponse(latex) {
  const res = await fetch("http://localhost:3001/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ latex }),
  });

  if (!res.ok) {
    throw new Error("Network error");
  }

  const data = await res.json();
  return data.result;
}
