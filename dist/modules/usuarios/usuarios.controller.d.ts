import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<import("../../entities/user.entity").User[]>;
    login(loginDto: {
        username: string;
        password: string;
    }): {
        success: boolean;
        message: string;
    };
    register(data: {
        username: string;
        password: string;
    }): Promise<import("../../entities/user.entity").User>;
}
