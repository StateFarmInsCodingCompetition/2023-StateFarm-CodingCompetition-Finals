import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('claim_handler')
export class ClaimHandler extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;

}
