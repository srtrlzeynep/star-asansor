import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7).max(30),
  message: z.string().trim().min(10).max(2000),
  consent: z.literal(true),
});

export type ContactInput = z.infer<typeof contactSchema>;
