import { Comites } from './comites.entity';
export declare class User {
    id: number;
    nombre: string;
    password: string;
    friends: Comites[];
}
