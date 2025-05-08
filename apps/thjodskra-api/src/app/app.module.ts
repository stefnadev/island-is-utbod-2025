import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThjodskraController } from './thjodskra/thjodskra.controller';
import { ThjodskraModule } from './thjodskra/thjodskra.module';

@Module({
  imports: [ThjodskraModule],
  controllers: [AppController, ThjodskraController],
  providers: [AppService],
})
export class AppModule {}
