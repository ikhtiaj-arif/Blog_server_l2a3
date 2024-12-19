import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, { message: "First name cannot be more than 20 characters" })
    .regex(/^[A-Z][a-z]*$/, {
      message: "First name must be in capitalize format",
    }),
  lastName: z
    .string()
    .trim()
    .max(20, { message: "Last name cannot be more than 20 characters" })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: "Last name must contain only alphabetic characters",
    }),
});

const createUserValidationSchema = z.object({
  body: z.object({
    name: userNameValidationSchema,
    password: z.string({ required_error: " Password is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Email must be a valid email address" }),
  }),
  role:z.enum(["admin", "user"]).default("user"),
  isBlocked: z.boolean().optional().default(false),
});

export const userValidations = {
    createUserValidationSchema
}
