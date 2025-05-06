import { Module } from '@nestjs/common';
import { TaxReportResolver } from './taxReport.resolver';
import { TaxReportService } from './taxReport.service';

@Module({
  providers: [TaxReportResolver, TaxReportService],
})
export class TaxReportModule {}
