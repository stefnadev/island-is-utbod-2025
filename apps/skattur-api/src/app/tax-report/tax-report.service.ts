import { Injectable } from '@nestjs/common';
import { TaxReportsBasicCollection } from './dto/tax-report-basic';
import { TaxReportDto, TaxReportStatus } from './dto/tax-report';
import { TaxReportRepository } from './db/repositories/tax-report-repository';
import { IncomesMockService } from './mock/incomes.mock.service';
import { AssetMockService } from './mock/assets.mock.service';
import { DebtsMockService } from './mock/debts.mock.service';

@Injectable()
export class TaxReportService {
  constructor(
    private taxReportRepository: TaxReportRepository,
    private incomesService: IncomesMockService,
    private assetsService: AssetMockService,
    private debtsService: DebtsMockService,
  ) {}

  async getTaxReports(userId: string): Promise<TaxReportsBasicCollection> {
    const textReports = await this.taxReportRepository.findAll(userId);
    const textReportsBasicCollection = new TaxReportsBasicCollection();
    textReportsBasicCollection.items = [];
    textReports.forEach((textReport) => {
      textReportsBasicCollection.items.push({
        id: textReport.id,
        userId: textReport.userId,
        year: textReport.year,
        status: textReport.status as TaxReportStatus,
      });
    });

    return textReportsBasicCollection;
  }

  async getTaxReport(id: string): Promise<TaxReportDto | null> {
    const textReport = await this.taxReportRepository.findOne(id);
    if (!textReport) {
      return null;
    }
    return TaxReportDto.getFromModel(textReport);
  }

  async createTaxReport(userId: string): Promise<TaxReportDto> {
    const thisYearTaxReport =
      await this.taxReportRepository.findThisYearTaxReport(userId);
    if (thisYearTaxReport) {
      return TaxReportDto.getFromModel(thisYearTaxReport);
    }

    const dto = new TaxReportDto();
    dto.userId = userId;
    dto.status = TaxReportStatus.DRAFT;
    dto.year = new Date().getFullYear();
    dto.incomes = this.incomesService.getIncomes();
    dto.assets = this.assetsService.getAssets();
    dto.debts = this.debtsService.getDebts();
    const newTaxReport = await this.taxReportRepository.create(dto);
    return TaxReportDto.getFromModel(newTaxReport);
  }

  async updateTaxReport(taxReportDto: TaxReportDto): Promise<TaxReportDto> {
    const updatedTaxReport = await this.taxReportRepository.update(
      taxReportDto,
    );
    return TaxReportDto.getFromModel(updatedTaxReport);
  }

  deleteTaxReport(taxReportId: string): void {
    this.taxReportRepository.remove(taxReportId);
  }
}
