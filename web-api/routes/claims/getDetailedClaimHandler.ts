import { Request, Response } from 'express';
import { getSession } from '../../utils/getSession';
import { Agent, Claim, ClaimHandler } from '../../db/entities';

export default async function getDetailedClaimedHander(req: Request, res: Response) {
    const user = await getSession(req);
    if (!user) {
        return res.status(401).json({
            success: false,
            reason: 'ur not jake'
        })
    }

    const agent = await ClaimHandler.findOne({
        where: {
            id: parseInt(req.params.agentId)
        }
    });

    if (!agent) {
        return res.status(404).json({
            success: false,
            reason: 'Agent not found',
            aid: req.params.agentId || ''
        })
    }

    const claims = await Claim.find({
        where: {
            claim_handler_assigned_id: agent?.id
        }
    })

    return res.json({
        agent,
        claims,
    });
}
