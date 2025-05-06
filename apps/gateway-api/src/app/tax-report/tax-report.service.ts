import { Injectable } from '@nestjs/common';
import {
  TaxReportListItemStatus,
  TaxReportListResponse,
} from './models/tax-report.model';

@Injectable()
export class TaxReportService {
  getTaxReportList(): TaxReportListResponse {
    return {
      items: [
        {
          year: 2025,
          status: TaxReportListItemStatus.DRAFT,
        },
        {
          year: 2024,
          status: TaxReportListItemStatus.SUBMITTED,
        },
        {
          year: 2023,
          status: TaxReportListItemStatus.REVIEWED,
        },
      ],
    };
  }
}
