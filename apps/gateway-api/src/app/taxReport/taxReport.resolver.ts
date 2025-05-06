import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { TaxReportListResponse } from './models/taxReport.model';
import { TaxReportService } from './taxReport.service';

@Resolver()
export class TaxReportResolver {
  constructor(private readonly taxReportService: TaxReportService) {}

  @Query(() => TaxReportListResponse)
  taxReportList() {
    return this.taxReportService.getTaxReportList();
  }
}
