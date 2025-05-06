import { Controller, Get } from '@nestjs/common';
import { TaxReportService } from './tax-report.service';

@Controller('tax-reports')
export class TaxReportController {
  constructor(private readonly taxReportService: TaxReportService) {}

  @Get()
  getData() {
    return this.taxReportService.GetTaxReports();
  }
}
