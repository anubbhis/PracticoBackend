import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsuariosService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    private readonly user;
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
    }): Promise<User>;
    getUsers(): Promise<User[]>;
}
