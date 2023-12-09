    import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
    // import { DetalleDeCompra } from "../entity/DetalladoCompra";

    @Entity()
    export class Compras {
        @PrimaryGeneratedColumn()
        id!: number;

        @Column()
        descripcion!: string;

        @Column()
        nombredelcliente!: string;

        @Column()
        preciototal!: number;

        @Column()
        totaldeproductos!: number;

        @CreateDateColumn()
        fechadecreacion!: Date;

        @Column()
        usuariodecreacion!: string;

        @UpdateDateColumn()
        fechadeactualizacion!: Date;

        @Column()
        usuariodeactualizacion!: string;

        @Column()
        activo!: boolean;

        // @OneToMany(() => DetalleDeCompra, detallesCompra => detallesCompra.compra)
        // detalladodecompra!: DetalleDeCompra[];
    }

