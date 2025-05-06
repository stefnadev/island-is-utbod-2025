import { Injectable } from '@nestjs/common';
import { TaxReportsBasicResponse, TaxReportStatus } from './dto/tax-report-basic';

@Injectable()
export class TaxReportService {
  GetTaxReports(): TaxReportsBasicResponse {
    return {
      items: [
        {
          id: 'e42e927b-389b-466b-a393-c6fc13557fb3',
          applicationId: '533f6612-c195-4ce0-aa87-5503ab7f33b0',
          year: 2025,
          status: TaxReportStatus.DRAFT,
        },
        {
          id: 'afed3cd8-18b7-42bc-9d0a-aafa5a9c123f',
          applicationId: '1b8944d3-3e5a-46a3-b490-b1385c778633',
          year: 2024,
          status: TaxReportStatus.SUBMITTED,
        },
        {
          id: 'f559ea87-4bc8-48be-95bf-10031832f870',
          applicationId: '102555c9-1f8f-45d6-9941-b4a0f2c3a7f2',
          year: 2023,
          status: TaxReportStatus.SUBMITTED,
        },
        {
          id: '0ad24a1b-29d6-4060-8682-aa62300600db',
          applicationId: '766da527-f283-40f0-91fa-431833bbb020',
          year: 2023,
          status: TaxReportStatus.DELETED,
        }
      ]
    }
  }
}
