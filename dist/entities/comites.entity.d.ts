import { Socios } from "./socios.entity";
import { User } from "./user.entity";
export declare class Comites {
    id: number;
    rut: string;
    razon: string;
    estado: boolean;
    direccion: string;
    comuna: string;
    fecha: Date;
    usuario_id: number;
    user: User;
    socios: Socios[];
}
