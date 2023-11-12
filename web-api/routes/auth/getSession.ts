import { Request, Response } from 'express';
import { getSession } from '../../utils/getSession';

export default async function checkUserSession(req: Request, res: Response) {
    const user = await getSession(req);
    if (!user) {
        return res.status(401).json({
            success: false,
            reason: 'ur not jake'
        })
    }
    return res.json(user);
}