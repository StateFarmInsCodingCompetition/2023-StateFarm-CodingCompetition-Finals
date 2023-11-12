import { api } from "..";
import checkUserSession from "./auth/getSession";
import login from "./auth/login";

export default function apiRouteRegister() {
    api.post('/auth/login', login)
    api.get('/auth/user', checkUserSession)
}