import { Request, Response } from 'express';
import { getSession } from '../../utils/getSession';
import { Agent, Claim, ClaimHandler, Disaster } from '../../db/entities';

export default async function getClaimById(req: Request, res: Response) {
    const user = await getSession(req);
    if (!user) {
        return res.status(401).json({
            success: false,
            reason: 'ur not jake'
        })
    }

    const claim = await Claim.findOne({
        where: {
            id: parseInt(req.params.claimId)
        }
    });

    if (!claim) {
        return res.status(404).json({
            success: false,
            reason: 'Claim not found',
            aid: req.params.claimId || ''
        })
    }

    const agent = await Agent.findOne({
        where: {
            id: claim.agent_assigned_id,
        }
    })
    const claimHandler = await ClaimHandler.findOne({
        where: {
            id: claim.claim_handler_assigned_id,
        }
    })
    const disaster = await Disaster.findOne({ where: { id: claim.disaster_id } })

    return res.json({
        claim,
        agent,
        claimHandler,
        disaster
    });
}
