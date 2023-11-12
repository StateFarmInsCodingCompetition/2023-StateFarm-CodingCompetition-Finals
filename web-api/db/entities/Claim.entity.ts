import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('claim')
export class Claim extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId;
    @Column()
    id: number;
    @Column()
    disaster_id: number;
    @Column()
    status: string;
    @Column()
    total_loss: boolean;
    @Column()
    loss_of_life: boolean;
    @Column()
    type: string;
    @Column()
    severity_rating: number;
    @Column()
    estimate_cost: number;
    @Column()
    agent_assigned_id: number;
    @Column()
    claim_handler_assigned_id: number;

}
