import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    genero!: string;

    @Column()
    edad!: number;

    @Column()
    correoelectronico!: string;

    @Column()
    contraseña!: string;

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
}
