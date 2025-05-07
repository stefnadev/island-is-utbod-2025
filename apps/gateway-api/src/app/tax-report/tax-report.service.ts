import { Injectable } from '@nestjs/common';
import { TaxReportListResponse } from './dto/tax-report-list-item';
import { getTaxReports, viewTaxReport } from '../../clients/skattur-api';
import { mapTaxReportDetails, mapTaxReportListItem } from './utils';
import { TaxReportDetails } from './dto/tax-report-details';

@Injectable()
export class TaxReportService {
  async getTaxReportList(): Promise<TaxReportListResponse> {
    const response = await getTaxReports();
    return {
      items: (response.data?.items ?? []).map(mapTaxReportListItem),
    };
  }

  async getTaxReportById(id: string): Promise<TaxReportDetails | null> {
    const response = await viewTaxReport({ path: { id } });
    if (!response.data) {
      return null;
    }
    return mapTaxReportDetails(response.data);
  }
}
