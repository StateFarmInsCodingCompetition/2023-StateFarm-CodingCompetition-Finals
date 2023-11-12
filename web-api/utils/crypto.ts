import { randomBytes } from "crypto";

export async function generateSecureString(bytes = 64): Promise<string> {
    return randomBytes(bytes).toString('hex');
}
