import { Module } from '@nestjs/common';
import { TaxReportController } from './tax-report.controller';
import { TaxReportService } from './tax-report.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReport } from './db/models/tax-report.model';
import { TaxReportSequilizeModule } from './db/tax-report.sequelize.module';
import { TaxReportRepository } from './db/repositories/tax-report-repository';

@Module({
  controllers: [TaxReportController],
  providers: [TaxReportService, TaxReportRepository],
  exports: [TaxReportService],
  imports: [SequelizeModule.forFeature([TaxReport]), TaxReportSequilizeModule],
})
export class TaxReportModule {}
