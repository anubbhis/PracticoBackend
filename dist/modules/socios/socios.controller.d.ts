import { Socios } from 'src/entities/socios.entity';
import { SociosService } from './socios.service';
export declare class SociosController {
    private sociosService;
    constructor(sociosService: SociosService);
    findAll(): Promise<Socios[]>;
    createSocio(body: any): Promise<Socios>;
    editSocio(id: number, body: any): Promise<Socios>;
    editEstado(id: number, estado: boolean): Promise<Socios>;
}
