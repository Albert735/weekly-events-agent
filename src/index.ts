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

  for (const item of response.output) {
    if (item.type === "function_call") {
      console.log("Tool requested:", item.name);
      console.log("Arguments:", item.arguments);

      if (item.name === "get_current_week_events") {
        const args = JSON.parse(item.arguments);

        const result = getCurrentWeekEvents(args.location);

        console.log("Tool result:");
        console.log(result);
      }
    }
  }
}

main().catch(console.error);
