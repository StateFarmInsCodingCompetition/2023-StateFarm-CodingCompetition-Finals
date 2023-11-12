import { DataSource } from 'typeorm';
import { Agent, Claim, ClaimHandler, Disaster, User, AuthSession } from './entities';
import { Config } from '../config';


export function createDataSource(): DataSource {
    return new DataSource({
        type: 'mongodb',
        url: Config.MONGODB_URL,
        database: 'statefarm',
        dropSchema: false,
        synchronize: false,
        entities: [
            Agent,
            Claim,
            ClaimHandler,
            Disaster,
            User,
            AuthSession
        ],
    });
}

export const dataSource = createDataSource();
