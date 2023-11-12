import { Request, Response } from 'express';
import { getSession } from '../../utils/getSession';
import { Agent, Claim, Disaster } from '../../db/entities';

export default async function getDisasterById(req: Request, res: Response) {
    const user = await getSession(req);
    if (!user) {
        return res.status(401).json({
            success: false,
            reason: 'ur not jake'
        })
    }

    const disaster = await Disaster.findOne({
        where: {
            id: parseInt(req.params.disasterId)
        }
    });

    if (!disaster) {
        return res.status(404).json({
            success: false,
            reason: 'Disaster not found',
            aid: req.params.agentId || ''
        })
    }

    const claims = await Claim.find({ where: { disaster_id: disaster.id } })

    return res.json({
        disaster,
        claims
    });
}
