import { Request, Response } from 'express';
import { getSession } from '../../utils/getSession';
import { Agent, Claim } from '../../db/entities';

export default async function getDetailedAgent(req: Request, res: Response) {
    const user = await getSession(req);
    if (!user) {
        return res.status(401).json({
            success: false,
            reason: 'ur not jake'
        })
    }

    const agent = await Agent.findOne({
        where: {
            id: req.query.agentId
        }
    });

    if (!agent) {
        return res.status(404).json({
            success: false,
            reason: 'Agent not found'
        })
    }

    const claims = await Claim.find({
        where: {
            agent_assigned_id: agent?.id
        }
    })

    return res.json({
        agent,
        claims
    });
}
