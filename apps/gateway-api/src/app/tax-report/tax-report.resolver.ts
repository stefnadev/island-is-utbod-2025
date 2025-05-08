import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { TaxReportListResponse } from './dto/tax-report-list-item';
import { TaxReportService } from './tax-report.service';
import { TaxReportDetails } from './dto/tax-report-details';
import { TaxReportDetailsInput } from './dto/tax-report-details.input';

@Resolver()
export class TaxReportResolver {
  constructor(private readonly taxReportService: TaxReportService) {}

  @Query(() => TaxReportListResponse)
  taxReportList(): Promise<TaxReportListResponse> {
    return this.taxReportService.getTaxReportList();
  }

  @Query(() => TaxReportDetails, { nullable: true })
  taxReportDetails(
    @Args('input') input: TaxReportDetailsInput,
  ): Promise<TaxReportDetails | null> {
    return this.taxReportService.getTaxReportById(input.id);
  }
}
