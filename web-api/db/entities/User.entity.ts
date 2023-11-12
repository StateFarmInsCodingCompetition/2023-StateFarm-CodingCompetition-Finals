import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    created: Date;

}
