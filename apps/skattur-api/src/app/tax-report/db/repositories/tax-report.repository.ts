import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaxReport } from '../models/tax-report.model';
import { Incomes } from '../models/incomes.model';
import { Assets } from '../models/assets.model';
import { Debts } from '../models/debts.model';
import { TaxReportDto } from '../../dto/tax-report';
import { uuid } from 'uuidv4';

@Injectable()
export class TaxReportRepository {
  constructor(
    @InjectModel(TaxReport)
    private taxReport: typeof TaxReport,
  ) {}

  async findAll(userId: string): Promise<TaxReport[]> {
    return this.taxReport.findAll({
      where: {
        userId,
      },
    });
  }

  findOne(id: string): Promise<TaxReport | null> {
    return this.taxReport.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Incomes,
        },
        {
          model: Assets,
        },
        {
          model: Debts,
        },
      ],
    });
  }

  findThisYearTaxReport(userId: string): Promise<TaxReport | null> {
    const year = new Date().getFullYear();
    return this.taxReport.findOne({
      where: {
        userId,
        year,
      },
      include: [
        {
          model: Incomes,
        },
        {
          model: Assets,
        },
        {
          model: Debts,
        },
      ],
    });
  }

  async create(taxReportDto: TaxReportDto): Promise<TaxReport> {
    return await this.CreateOrUpdate(taxReportDto, true);
  }

  async remove(id: string): Promise<void> {
    const taxReport = await this.findOne(id);
    if (!taxReport) {
      return;
    }

    try {
      if (taxReport.incomes) {
        await taxReport.incomes.destroy({
          force: true,
        });
      }
      if (taxReport.assets) {
        await taxReport.assets.destroy({
          force: true,
        });
      }
      if (taxReport.debts) {
        await taxReport.debts.destroy({
          force: true,
        });
      }

      await taxReport.destroy({
        force: true,
      });
    } catch (e) {
      console.log('exception', e);
    }
  }

  async update(taxReportDto: TaxReportDto): Promise<TaxReport> {
    return await this.CreateOrUpdate(taxReportDto, false);
  }

  private async CreateOrUpdate(
    taxReportDto: TaxReportDto,
    create: boolean,
  ): Promise<TaxReport> {
    let taxReport = new TaxReport();

    if (create) {
      taxReport.isNewRecord = true;
      taxReport.id = uuid();
      taxReport.createdAt = new Date().toDateString();
    } else {
      taxReport.isNewRecord = false;
      taxReport.id = taxReportDto.id;
      taxReport.createdAt = taxReportDto.createdAt;
    }

    taxReport.userId = taxReportDto.userId;
    taxReport.year = taxReportDto.year;
    taxReport.status = taxReportDto.status as string;
    taxReport = await taxReport.save();

    if (taxReportDto.incomes) {
      let incomes = new Incomes();

      if (create) {
        incomes.isNewRecord = create;
        incomes.id = uuid();
        incomes.createdAt = new Date().toDateString();
      } else {
        incomes.isNewRecord = false;
        incomes.id = taxReportDto.incomes.id;
        incomes.createdAt = taxReportDto.incomes.createdAt;
      }
      incomes.taxReportId = taxReport.id;
      incomes.salaries = taxReportDto.incomes.salaries
        ? JSON.stringify(taxReportDto.incomes.salaries)
        : undefined;
      incomes.benefits = taxReportDto.incomes.benefits
        ? JSON.stringify(taxReportDto.incomes.benefits)
        : undefined;
      incomes.compensations = taxReportDto.incomes.compensations
        ? JSON.stringify(taxReportDto.incomes.compensations)
        : undefined;

      incomes = await incomes.save();
      taxReport.incomes = incomes;
    }

    if (taxReportDto.assets) {
      let assets = new Assets();

      if (create) {
        assets.isNewRecord = true;
        assets.id = uuid();
        assets.createdAt = new Date().toDateString();
      } else {
        assets.isNewRecord = false;
        assets.id = taxReportDto.assets.id;
        assets.createdAt = taxReportDto.assets.createdAt;
      }
      assets.taxReportId = taxReport.id;
      assets.realEstates = taxReportDto.assets.realEstates
        ? JSON.stringify(taxReportDto.assets.realEstates)
        : undefined;
      assets.vehicles = taxReportDto.assets.vehicles
        ? JSON.stringify(taxReportDto.assets.vehicles)
        : undefined;

      assets = await assets.save();
      taxReport.assets = assets;
    }

    if (taxReportDto.debts) {
      let debts = new Debts();

      if (create) {
        debts.isNewRecord = true;
        debts.id = uuid();
        debts.createdAt = new Date().toDateString();
      } else {
        debts.isNewRecord = false;
        debts.id = taxReportDto.debts.id;
        debts.createdAt = taxReportDto.debts.createdAt;
      }
      debts.taxReportId = taxReport.id;
      debts.realEstateCharges = taxReportDto.debts.realEstateCharges
        ? JSON.stringify(taxReportDto.debts.realEstateCharges)
        : undefined;
      debts.otherDebts = taxReportDto.debts.otherDebts
        ? JSON.stringify(taxReportDto.debts.otherDebts)
        : undefined;

      debts = await debts.save();
      taxReport.debts = debts;
    }

    return taxReport;
  }
}
