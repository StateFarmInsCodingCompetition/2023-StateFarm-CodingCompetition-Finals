import { api } from "..";
import getAgents from "./agents/getAgents";
import checkUserSession from "./auth/getSession";
import login from "./auth/login";
import getClaimHandlers from "./claims/getClaimHandlers";
import getClaims from "./claims/getClaims";
import getDisasters from "./disasters/getDisasters";

export default function apiRouteRegister() {
    api.post('/auth/login', login)
    api.get('/auth/user', checkUserSession)

    api.get('/agents', getAgents);
    api.get('/disasters', getDisasters);
    api.get('/claims', getClaims);
    api.get('/claims/handlers', getClaimHandlers);
}