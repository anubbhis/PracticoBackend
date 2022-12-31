import Connection from "mysql2/typings/mysql/lib/Connection";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Comites } from "./comites.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Entity()
export class Socios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rut: string;

    @Column()
    nombre: string;

    @Column()
    estado: boolean;

    @Column()
    direccion: string;

    @Column()
    comuna: String;

    @Column()
    comite: number;

    @ManyToOne(type => Comites, comite => comite.socios)
    comites: Comites;


}

