import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comites } from 'src/entities/comites.entity';
import { ComitesController } from './comites.controller';
import { ComitesService } from './comites.service';

@Module({
    imports: [TypeOrmModule.forFeature([Comites])],
    providers: [ComitesService],
    controllers: [ComitesController],
})
export class ComitesModule {}
