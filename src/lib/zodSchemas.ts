import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  twitter: z.string().optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
