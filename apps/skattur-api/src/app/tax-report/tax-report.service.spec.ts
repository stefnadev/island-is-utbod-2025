import { Test } from '@nestjs/testing';
import { TaxReportService } from './tax-report.service';

describe('TaxReportService', () => {
  let service: TaxReportService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [TaxReportService],
    }).compile();

    service = app.get<TaxReportService>(TaxReportService);
  });
});
