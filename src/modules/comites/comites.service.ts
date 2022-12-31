import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Comites } from 'src/entities/comites.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComitesService {

    constructor(
        @InjectRepository(Comites) private comitesRepository: Repository<Comites>,
        
    ) {}
    async getComites(): Promise<Comites[]> {
        return await this.comitesRepository.find();
    }

    async createComite(comite: Comites): Promise<Comites> {
        return await this.comitesRepository.save(comite);
    }

    async updateComiteByID(id: number, comites: Comites): Promise<Comites> {
        console.log(id);
        const comite = await this.comitesRepository.findOne({ where: { id: id}});
        if (!comite) {
            throw new NotFoundException();
        }
        return await this.comitesRepository.save(comite);

    }
  async editEstado(id: number, estado: boolean): Promise<Comites> {
        const comite = await this.comitesRepository.findOne({ where: { id: id}});
        if (!comite) {
            throw new NotFoundException();
        }
        comite.estado = estado;
        return await this.comitesRepository.save(comite);
    }

    
    

}
