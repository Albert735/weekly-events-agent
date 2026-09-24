import { tool } from "@openai/agents";
import { z } from "zod";
import type { Event } from "../types/event.js";

export const getCurrentWeekEvents = tool({
  name: "get_current_week_events",

  description: "Get events happening this week in a particular location.",

  parameters: z.object({
    location: z.string().describe("The city where events should be found."),
  }),

  async execute({ location }): Promise<Event[]> {
    console.log(`Tool called: get_current_week_events`);
    console.log(`Location: ${location}`);

    return [
      {
        id: "event-001",
        name: "Tech Meetup",
        organization: "Accra Developers",
        category: "Technology",
        location,
        date: "2026-09-25",
        startTime: "18:00",
        endTime: "21:00",
        description:
          "A technology meetup where developers and technology enthusiasts meet, learn, and network.",
        source: "Mock Data",
      },
      {
        id: "event-002",
        name: "Startup Networking Night",
        organization: "Ghana Startup Community",
        category: "Entrepreneurship",
        location,
        date: "2026-09-26",
        startTime: "19:00",
        endTime: "22:00",
        description:
          "A networking event for startup founders, entrepreneurs, and people interested in the Ghanaian startup ecosystem.",
        source: "Mock Data",
      },
    ];
  },
});
