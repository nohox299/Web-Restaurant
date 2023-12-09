import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Productos {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    descripcion!: string;

    @Column()
    precio!: number;

    @Column()
    categoria!: string;

    @Column()
    fabricante!: string;

    @Column()
    cantidadenexistencia!: number;

    @Column()
    unidaddemedidad!: string;

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

    @Column()
    ingredientes!: string;

    @Column()
    vegano!: boolean;
}
