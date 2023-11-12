import { api } from "..";
import getAgents from "./agents/getAgents";
import getDetailedAgent from "./agents/getDetailedAgent";
import checkUserSession from "./auth/getSession";
import login from "./auth/login";
import getClaimHandlers from "./claims/getClaimHandlers";
import getClaims from "./claims/getClaims";
import getDisasters from "./disasters/getDisasters";

export default function apiRouteRegister() {
    api.post('/auth/login', login)
    api.get('/auth/user', checkUserSession)

    //Agents
    api.get('/agents', getAgents);
    api.get('/agents/:agentId', getDetailedAgent)

    //Disasters
    api.get('/disasters', getDisasters);


    //Claims
    api.get('/claims', getClaims);

    //Claim Handlers
    api.get('/claims/handlers', getClaimHandlers);
}