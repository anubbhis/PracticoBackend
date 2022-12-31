import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SociosService } from './socios.service';
import { SociosController } from './socios.controller';
import { Socios } from 'src/entities/socios.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Socios])],
    providers: [SociosService],
    controllers: [SociosController],
})
export class SociosModule {}
