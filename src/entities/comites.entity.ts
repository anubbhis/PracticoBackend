import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Socios } from "./socios.entity";
import { User } from "./user.entity";

@Entity()
export class Comites{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rut: string;

    @Column()
    razon: string;

    @Column()
    estado: boolean;

    @Column()
    direccion: string;

    @Column()
    comuna: string;

    @Column()
    fecha: Date;

    @Column()
    usuario_id: number;

    @ManyToOne(type => User, user => user.friends)
    user: User;

    @OneToMany(type => Socios , socio => socio.comite)
    socios: Socios[];
    

}