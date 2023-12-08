import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductosEnPromocion {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    descripcion!: string;

    @Column()
    endescuento!: boolean;

    @Column()
    descuento!: number;

    @Column()
    precio!: number;

    @Column()
    precioenpromocion!: number;

    @Column()
    fechadeiniciodelapromocion!: string;

    @Column()
    fechadefinalizaciondelapromocion!: string;

    @Column()
    activo!: boolean;
}
