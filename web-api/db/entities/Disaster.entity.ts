import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('disaster')
export class Disaster extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;
    @Column()
    id: number;
    @Column()
    type: string;
    @Column()
    state: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    start_date: Date;
    @Column()
    end_date: Date;
    @Column()
    declared_date: Date;
    @Column()
    lat: number;
    @Column()
    long: number;
    @Column()
    radius_miles: number;
}
