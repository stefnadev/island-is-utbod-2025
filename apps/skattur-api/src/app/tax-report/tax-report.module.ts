import { Module } from '@nestjs/common';
import { TaxReportController } from './tax-report.controller';
import { TaxReportService } from './tax-report.service';

@Module({
  controllers: [TaxReportController],
  providers: [TaxReportService],
  exports: [TaxReportService]
})
export class TaxReportModule {}
