import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { usuariosModule } from './modules/usuarios/usuarios.module';
import { ComitesModule } from './modules/comites/comites.module';
import { Comites } from './entities/comites.entity';
import { SociosModule } from './modules/socios/socios.module';
import { Socios } from './entities/socios.entity';




@Module({
  imports: [ 
    TypeOrmModule.forRoot({
                          type: 'mysql',
                          host: 'localhost',
                          port: 3306,
                          username: 'root',
                          password: '',
                          database: 'mydb',
                          entities: [User,Comites,Socios],
                          synchronize: true,
  }), usuariosModule, ComitesModule,SociosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
