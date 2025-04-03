import { z } from "zod";

export const userPaymentSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(100, "O nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .email("O email deve ser válido")
    .max(100, "O email deve ter no máximo 100 caracteres"),
  phone: z
    .string()
    .min(9, "O telefone deve ter pelo menos 9 caracteres")
    .max(15, "O telefone deve ter no máximo 15 caracteres"),
  termsAndConditions: z.boolean().default(false),
  termsLGPD: z.boolean().default(false),
});
export type UserPaymentSchema = z.infer<typeof userPaymentSchema>;
