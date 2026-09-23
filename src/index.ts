import OpenAI from "openai";
import "dotenv/config";

import { getCurrentWeekEvents } from "./tools/getCurrentWeekEvents.js";

console.log("Program started");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const tools = [
  {
    type: "function" as const,
    name: "get_current_week_events",
    description: "Get events happening this week in a particular location.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The city where events should be found.",
        },
      },
      required: ["location"],
      additionalProperties: false,
    },
    strict: true,
  },
];

async function main() {
  console.log("Initiating API call...");

  const response = await client.responses.create({
    model: "gpt-5.6-luna",
    input: "What events are happening in Accra this week?",
    tools,
  });

  console.log("Model output:");
  console.log(response.output);
}

main().catch(console.error);
