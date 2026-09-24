import { tool } from "@openai/agents";
import { z } from "zod";
export const getEventDetails = tool({
    name: "get_event_details",
    description: "Get detailed information about a specific event using its name.",
    parameters: z.object({
        eventName: z
            .string()
            .describe("The name of the event to retrieve details for."),
    }),
    async execute({ eventName }) {
        console.log(`Tool called: get_event_details`);
        console.log(`Event name: ${eventName}`);
        const events = {
            "Tech Meetup": {
                name: "Tech Meetup",
                organization: "Accra Developers",
                location: "Accra",
                date: "2026-09-25",
                startTime: "18:00",
                endTime: "21:00",
                description: "A technology meetup where developers and technology enthusiasts meet, learn, and network.",
            },
            "Startup Networking Night": {
                name: "Startup Networking Night",
                organization: "Ghana Startup Community",
                location: "Accra",
                date: "2026-09-26",
                startTime: "19:00",
                endTime: "22:00",
                description: "A networking event for startup founders, entrepreneurs, and people interested in the Ghanaian startup ecosystem.",
            },
        };
        const event = events[eventName];
        if (!event) {
            return {
                found: false,
                message: `No detailed information was found for "${eventName}".`,
            };
        }
        return {
            found: true,
            event,
        };
    },
});
//# sourceMappingURL=getEventDetails.js.map