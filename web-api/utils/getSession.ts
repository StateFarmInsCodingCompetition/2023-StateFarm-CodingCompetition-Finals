import Request from 'express';
import { AuthSession, User } from '../db/entities';

export async function getSession(req: Request) {
    if (!req.headers.auth) {
        return false;
    }

    const foundSession = await AuthSession.findOne({ where: { sessionId: req.headers.auth } });
    if (!foundSession) {
        return false;
    }

    const foundUser = await User.findOne({ where: { _id: foundSession.userId } });
    if (!foundSession) {
        return false;
    }
    return foundUser;
}