import "dotenv/config";

import { run } from "@openai/agents";
import { eventsAgent } from "./agent.js";

async function main() {
  console.log("Starting Weekly Events Agent...\n");

  const result = await run(
    eventsAgent,
    "What organizations are active in Accra?",
  );

  console.log("Agent response:\n");
  console.log(result.finalOutput);
}

main().catch((error) => {
  console.error("Agent failed:");
  console.error(error);
});
