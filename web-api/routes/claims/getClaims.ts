import { Request, Response } from 'express';
import { getSession } from '../../utils/getSession';
import { Agent, Claim } from '../../db/entities';

export default async function getClaims(req: Request, res: Response) {
    const user = await getSession(req);
    if (!user) {
        return res.status(401).json({
            success: false,
            reason: 'ur not jake'
        })
    }
    return res.json(await Claim.find({}));
}
