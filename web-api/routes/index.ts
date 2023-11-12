import { api } from "..";
import login from "./auth/login";

export default function apiRouteRegister() {
    api.post('/auth/login', login)
}