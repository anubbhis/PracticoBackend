import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';


@Controller('usuarios')
export class UsuariosController {
    constructor( private usuariosService: UsuariosService ) {}
    
    @Get()
    findAll() {
      return this.usuariosService.getUsers();
    }     
    //crear login de usuario
    @Post('login')
    login(@Body() loginDto: {username: string, password: string}) {
      return this.usuariosService.login(loginDto);
    }
    //registro de usuario
    @Post('register')
    async register(@Body() data: {username: string, password: string}) {
      return this.usuariosService.register(data);
    }
    

}


