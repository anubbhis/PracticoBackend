import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { Socios } from 'src/entities/socios.entity';
import { SociosService } from './socios.service';

@Controller('socios')
export class SociosController {
    constructor( private sociosService: SociosService ) {}
    
    //obtner todos los socios
    @Get()
    findAll() {
      return this.sociosService.getSocios();
    }
    //crear socio   
    @Post()
    async createSocio(@Body() body: any) {
      console.log(body);
      const {comite,rut,nombre, direccion, comuna} = body;
      const socio = new Socios();
      socio.comite = comite;
      socio.rut = rut;
      socio.nombre = nombre;
      socio.direccion = direccion;
      socio.comuna = comuna;
      socio.estado = true;
      return this.sociosService.createSocios(socio);
    }

    //editar socio
    @Patch('/:id')
    async editSocio(@Param('id') id: number, @Body() body: any) {
      const { rut, nombre, direccion, comuna} = body;
      const socio = new Socios();
      socio.rut = rut;
      socio.nombre = nombre;
      socio.direccion = direccion;
      socio.comuna = comuna;
      return this.sociosService.updateSociosById(id, socio);
    }

    //editar estado socio
    @Patch('/:id/:estado')
    async editEstado(@Param('id') id: number, @Param('estado') estado: boolean) {
      return this.sociosService.editEstado(id, estado);
    }

  }
