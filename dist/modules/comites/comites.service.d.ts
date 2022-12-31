import { Comites } from 'src/entities/comites.entity';
import { Repository } from 'typeorm';
export declare class ComitesService {
    private comitesRepository;
    constructor(comitesRepository: Repository<Comites>);
    getComites(): Promise<Comites[]>;
    createComite(comite: Comites): Promise<Comites>;
    updateComiteByID(id: number, comites: Comites): Promise<Comites>;
    editEstado(id: number, estado: boolean): Promise<Comites>;
}
