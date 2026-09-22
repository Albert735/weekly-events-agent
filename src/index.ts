import OpenAI from "openai";
import "dotenv/config";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await client.responses.create({
    model: "gpt-5.6-luna",
    input: "What is an AI agent? Explain it in one simple paragraph.",
  });

  console.log(response.output_text);
}

main();
