import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('auth_session')
export class AuthSession extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    userId: any;
    @Column()
    sessionId: string;
    @Column()
    created: Date;

}
