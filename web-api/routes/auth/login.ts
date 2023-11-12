import { AuthSession, User } from "../../db/entities";
import { Request, Response } from 'express';
import * as argon2 from "argon2";
import { generateSecureString } from "../../utils/crypto";

export default async function login(req: Request, res: Response) {
    const { name, password } = req.body as unknown as { [key: string]: string };
    if (!name || !password) {
        return res.status(400).json({
            success: false,
            reason: 'Bad request'
        })
    }

    const foundUser = await User.findOne({
        where: {
            name
        }
    })
    if (!foundUser) {
        return res.status(400).json({
            success: false,
            reason: 'Check your credentials then try again.'
        })
    }

    if ((await argon2.verify(foundUser.password, password)) == false) {
        return res.status(400).json({
            success: false,
            reason: 'Check your credentials then try again.'
        })
    }

    const token = await generateSecureString(); // This is probably not good for security in reality... but it'll work... i'd do jwts but time is very limited... and im just now noticing this an hour in./
    const session = new AuthSession();
    session.sessionId = token;
    session.userId = foundUser._id;
    session.created = new Date();
    await session.save();

    return res.json({
        success: true,
        token
    })
}
