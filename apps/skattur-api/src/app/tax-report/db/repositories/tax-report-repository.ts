import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaxReport } from '../models/tax-report.model';
import { Incomes } from '../models/incomes.model';
import { Assets } from '../models/assets.model';
import { Debts } from '../models/debts.model';

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

  async create(taxReport: TaxReport): Promise<TaxReport> {
    taxReport.isNewRecord = true;
    await taxReport.save();
    return taxReport;
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      return;
    }
    await user.destroy();
  }

  async update(taxReport: TaxReport): Promise<void> {
    await taxReport.save();
  }
}
