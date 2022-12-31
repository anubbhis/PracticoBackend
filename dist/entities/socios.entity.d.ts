import { Comites } from "./comites.entity";
export declare class Socios {
    id: number;
    rut: string;
    nombre: string;
    estado: boolean;
    direccion: string;
    comuna: String;
    comite: number;
    comites: Comites;
}
