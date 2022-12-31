import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
import { ComitesService } from './comites.service';
import { Comites } from 'src/entities/comites.entity';
import path from 'path';

 
  
@Controller('comites')
export class ComitesController {
        constructor( private comitesService: ComitesService ) {}
        //obtener comites
        @Get()
        findAll() {
            return this.comitesService.getComites();
        }
        //crear comite
        @Post()
        async createComite(@Body() body: any) {
            console.log(body);
            const {rut,razon, direccion, comuna, fecha, usuario_id} = body;
            const comite = new Comites();
            comite.rut = rut;
            comite.razon = razon;
            comite.direccion = direccion;
            comite.comuna = comuna;
            comite.fecha = fecha;
            comite.estado = true;
            comite.usuario_id = usuario_id;
            console.log(body);
            return this.comitesService.createComite(comite);
        }
        //editar comite
        @Patch('/:id')
        async editComite(@Param('id') id: number, @Body() body: any) {
            const {rut,razon, direccion, comuna, fecha} = body;
            const comite = new Comites();
            comite.rut = rut;
            comite.razon = razon;
            comite.direccion = direccion;
            comite.comuna = comuna;
            comite.fecha = fecha;
            return this.comitesService.updateComiteByID(id, comite);
        }
        //editar estado comite
        @Patch('/:id/:estado')
        async editEstado(@Param('id') id: number, @Param('estado') estado: boolean) {
            return this.comitesService.editEstado(id, estado);
        }

    }

