import { api } from "..";
import getAgents from "./agents/getAgents";
import getDetailedAgent from "./agents/getDetailedAgent";
import checkUserSession from "./auth/getSession";
import login from "./auth/login";
import getClaimById from "./claims/getClaimById";
import getClaimHandlers from "./claims/getClaimHandlers";
import getClaims from "./claims/getClaims";
import getDetailedClaimedHander from "./claims/getDetailedClaimHandler";
import getDisasterById from "./disasters/getClaimById";
import getDisasters from "./disasters/getDisasters";

export default function apiRouteRegister() {
    api.post('/auth/login', login)
    api.get('/auth/user', checkUserSession)

    //Agents
    api.get('/agents', getAgents);
    api.get('/agents/:agentId', getDetailedAgent)

    //Disasters
    api.get('/disasters', getDisasters);
    api.get('/disasters/id/:disasterId', getDisasterById)


    //Claims
    api.get('/claims', getClaims);
    api.get('/claims/id/:id', getClaimById);

    //Claim Handlers
    api.get('/claims/handlers', getClaimHandlers);
    api.get('/claims/handlers/id/:agentId', getDetailedClaimedHander)
}
