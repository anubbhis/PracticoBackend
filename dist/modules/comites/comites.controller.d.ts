import { ComitesService } from './comites.service';
import { Comites } from 'src/entities/comites.entity';
export declare class ComitesController {
    private comitesService;
    constructor(comitesService: ComitesService);
    findAll(): Promise<Comites[]>;
    createComite(body: any): Promise<Comites>;
    editComite(id: number, body: any): Promise<Comites>;
    editEstado(id: number, estado: boolean): Promise<Comites>;
}
