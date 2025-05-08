import { Module } from '@nestjs/common';
import { ThjodskraService } from './thjodskra.service';
import { UserRepository } from './db/repositories/user.repository';
import { ThjodskraController } from './thjodskra.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './db/models/user.model';
import { ThjodskraSequilizeModule } from './db/thjodskra.sequelize.module';

@Module({
  controllers: [ThjodskraController],
  providers: [ThjodskraService, UserRepository],
  exports: [ThjodskraService],
  imports: [SequelizeModule.forFeature([User]), ThjodskraSequilizeModule],
})
export class ThjodskraModule {}
