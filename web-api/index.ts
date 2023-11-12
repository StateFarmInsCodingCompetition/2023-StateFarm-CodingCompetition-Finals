import "reflect-metadata"
import { dataSource } from "./db/mongo";
import * as express from 'express';
import { Config } from "./config";
import apiRouteRegister from "./routes";
import { User } from "./db/entities";
export const api = express();
import * as argon2 from "argon2";
import * as cors from 'cors';

async function main() {
    await dataSource.initialize();

    api.use(cors());
    api.use(express.json());

    apiRouteRegister();

    // const user = new User();
    // user.name = 'admin'
    // user.password = await argon2.hash('password');
    // user.created = new Date();
    // await user.save();

    api.listen(Config.API_PORT, () => {
        console.log('Api is listening')
    })
}

main();