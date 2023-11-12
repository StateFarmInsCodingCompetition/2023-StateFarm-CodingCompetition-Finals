import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('claim')
export class Claim extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

}
