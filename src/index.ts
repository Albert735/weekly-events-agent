import "dotenv/config";

import { run } from "@openai/agents";
import { eventsAgent } from "./agent.js";

import { getCurrentWeekRange } from "./utils/week.js";

const week = getCurrentWeekRange();

console.log("Week starts:", week.start);
console.log("Week ends:", week.end);

async function main() {
  console.log("Starting Weekly Events Agent...\n");

  const result = await run(
    eventsAgent,
    "What events are happening in Accra this week? Give me the details.",
  );

  console.log("Agent response:\n");
  console.log(result.finalOutput);
}

main().catch((error) => {
  console.error("Agent failed:");
  console.error(error);
});
