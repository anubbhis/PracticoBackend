import { Socios } from 'src/entities/socios.entity';
import { Repository } from 'typeorm';
export declare class SociosService {
    private sociosRepository;
    constructor(sociosRepository: Repository<Socios>);
    getSocios(): Promise<Socios[]>;
    createSocios(socios: Socios): Promise<Socios>;
    updateSociosById(id: number, socios: Socios): Promise<Socios>;
    editEstado(id: number, estado: boolean): Promise<Socios>;
}
