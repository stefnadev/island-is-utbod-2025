import { Module } from '@nestjs/common';
import { TaxReportResolver } from './tax-report.resolver';
import { TaxReportService } from './tax-report.service';

@Module({
  providers: [TaxReportResolver, TaxReportService],
})
export class TaxReportModule {}
