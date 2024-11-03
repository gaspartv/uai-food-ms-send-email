import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "testing", "homologation", "production"]),

    DATABASE_URL: z.string(),

    SMTP_HOST: z.string(),
    SMTP_PORT: z.coerce.number(),
    SMTP_USER: z.string(),
    SMTP_PASSWORD: z.string(),

    RABBITMQ_URL: z.string(),
    RABBITMQ_RECEIVE: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.error("❌ Invalid environment variables", _env.error.format());

    throw new Error("Invalid environment variables.");
}

const env = _env.data;

export { env };
