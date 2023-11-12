import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('disaster')
export class Disaster extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

}
