import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxReportModule } from './tax-report/tax-report.module';
import { TaxReportController } from './tax-report/tax-report.controller';

@Module({
  imports: [TaxReportModule],
  controllers: [AppController,TaxReportController],
  providers: [AppService],
})
export class AppModule {}
