import { tool } from "@openai/agents";
import { z } from "zod";

export const getCurrentWeekEvents = tool({
  name: "get_current_week_events",

  description: "Get events happening this week in a particular location.",

  parameters: z.object({
    location: z.string().describe("The city where events should be found."),
  }),

  async execute({ location }) {
    return [
      {
        name: "Tech Meetup",
        organization: "Accra Developers",
        location,
        date: "2026-09-25",
      },
      {
        name: "Startup Networking Night",
        organization: "Ghana Startup Community",
        location,
        date: "2026-09-26",
      },
    ];
  },
});
