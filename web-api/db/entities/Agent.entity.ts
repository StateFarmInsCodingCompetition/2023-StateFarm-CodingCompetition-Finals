import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('agent')
export class Agent extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    id: number;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    state: string;
    @Column()
    primary_language: string;
    @Column()
    secondary_language: string;
    @Column()
    years_active: number;

}
