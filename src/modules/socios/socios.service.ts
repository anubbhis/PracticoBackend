import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socios } from 'src/entities/socios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SociosService {
    constructor(
        @InjectRepository(Socios) private sociosRepository: Repository<Socios>,
        ){}

        async getSocios(): Promise<Socios[]> {
            return await this.sociosRepository.find();
            
        }
        async createSocios(socios: Socios): Promise<Socios> {
            return await this.sociosRepository.save(socios);
        }
        async updateSociosById(id: number, socios: Socios): Promise<Socios> {
            const socio = await this.sociosRepository.findOne({ where: { id: id}});
            if (!socio) {
                throw new NotFoundException();
            }
            return await this.sociosRepository.save(socio);
        }
        async editEstado(id: number, estado: boolean): Promise<Socios> {
            const socio = await this.sociosRepository.findOne({ where: { id: id}});
            if (!socio) {
                throw new NotFoundException();
            }
            socio.estado = estado;
            return await this.sociosRepository.save(socio);
        }



}
    

    