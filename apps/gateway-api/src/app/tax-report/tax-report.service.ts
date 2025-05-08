import { Injectable } from '@nestjs/common';
import { TaxReportListResponse } from './dto/tax-report-list-item';
import { getTaxReports, viewTaxReport } from '../../clients/skattur-api';
import { mapTaxReportDetails, mapTaxReportListItem } from './utils';
import { TaxReportDetails } from './dto/tax-report-details';
import { client } from '../../clients/skattur-api/client.gen';

@Injectable()
export class TaxReportService {
  constructor() {
    client.setConfig({
      baseUrl: process.env.SKATTUR_API,
    });
  }

  async getTaxReportList(): Promise<TaxReportListResponse> {
    const response = await getTaxReports({ client });
    return {
      items: (response.data?.items ?? []).map(mapTaxReportListItem),
    };
  }

  async getTaxReportById(id: string): Promise<TaxReportDetails | null> {
    const response = await viewTaxReport({ path: { id }, client });
    if (!response.data) {
      return null;
    }
    return mapTaxReportDetails(response.data);
  }
}
