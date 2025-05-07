import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { TaxReportListResponse } from './dto/tax-report-list-item';
import { TaxReportService } from './tax-report.service';

@Resolver()
export class TaxReportResolver {
  constructor(private readonly taxReportService: TaxReportService) {}

  @Query(() => TaxReportListResponse)
  taxReportList() {
    return this.taxReportService.getTaxReportList();
  }
}
