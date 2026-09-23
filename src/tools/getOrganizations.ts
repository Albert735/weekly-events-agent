import { tool } from "@openai/agents";
import { z } from "zod";

export const getOrganizations = tool({
  name: "get_organizations",

  description: "Get organizations that are active in a particular location.",

  parameters: z.object({
    location: z
      .string()
      .describe("The city where organizations should be found."),
  }),

  async execute({ location }) {
    console.log(`Tool called: get_organizations`);
    console.log(`Location: ${location}`);

    return [
      {
        name: "Accra Developers",
        category: "Technology",
        location,
        description:
          "A community for developers, engineers, and technology enthusiasts.",
      },
      {
        name: "Ghana Startup Community",
        category: "Entrepreneurship",
        location,
        description:
          "A community connecting startups, founders, and entrepreneurs.",
      },
      {
        name: "Ghana Tech Lab",
        category: "Technology",
        location,
        description:
          "An organization focused on technology education and innovation.",
      },
    ];
  },
});
