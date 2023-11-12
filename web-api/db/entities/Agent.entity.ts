import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('agent')
export class Agent extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

}
