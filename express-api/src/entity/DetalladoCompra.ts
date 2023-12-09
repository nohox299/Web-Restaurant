import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
// import { Compras } from "../entity/Compras";

@Entity()
export class DetalleDeCompra {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    producto!: string;

    @Column()
    orden!: number;

    @Column()
    usuariodecreacion!: string;

    @UpdateDateColumn()
    fechadeactualizacion!: Date;

    // @ManyToOne(type => Compras, compra => compra.detalladodecompra)
    // @JoinColumn()
    // compra!: Compras;
}