import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        ){}
        private readonly user: {username: string, password: string}[] = [
            {
                username: 'admin',
                password: 'admin',
            },
        ];
        //login
        login(loginDto: {username: string, password: string}) {
            const user = this.user.find(u => u.username === loginDto.username);
            if (user && user.password === loginDto.password) {
              return {
                success: true,
                message: 'Successfully logged in',
              };
            } else {
              return {
                success: false,
                message: 'Invalid username or password',
              };
            }
          }

            //registro
            async register(data: {username: string, password: string}) {
                const user = new User();
                user.nombre = data.username;
                user.password = data.password;
                await this.userRepository.save(user);
                return user;
                }


        async getUsers(): Promise<User[]> {
            return await this.userRepository.find();
          }

        
        



}
