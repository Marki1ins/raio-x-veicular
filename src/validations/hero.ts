import { z } from "zod";

export const heroSchema = z.object({
  carPlate: z
    .string()
    .min(7, "A placa deve ter 7 caracteres")
    .max(7, "A placa deve ter 7 caracteres"),
});
export type HeroSchema = z.infer<typeof heroSchema>;
