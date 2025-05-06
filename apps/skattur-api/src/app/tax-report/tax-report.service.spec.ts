import { Test } from '@nestjs/testing';
import { TaxReportService } from './tax-report.service';
import { TaxReportsBasicResponse } from './dto/tax-report-basic';

describe('TaxReportService', () => {
  let service: TaxReportService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [TaxReportService],
    }).compile();

    service = app.get<TaxReportService>(TaxReportService);
  });

  describe('getData', () => {
    it('should return a tax report basic response', () => {
      expect(service.GetTaxReports()).toBeInstanceOf(TaxReportsBasicResponse);
    });
  });
});
