import { 
    Entity,
    Column,
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    description!: string
    
    @Column("boolean", {default: false})
    isCompleted!: boolean

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

}