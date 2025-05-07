import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Debts } from '../models/debts.model';

@Injectable()
export class DebtsRepository {
  constructor(
    @InjectModel(Debts)
    private debts: typeof Debts,
  ) {}

  async findByTaxReport(taxReportId: string): Promise<Debts | null> {
    return this.debts.findOne({
      where: {
        taxReportId,
      },
    });
  }

  findOne(id: string): Promise<Debts | null> {
    return this.debts.findOne({
      where: {
        id,
      },
    });
  }

  async create(debts: Debts): Promise<Debts> {
    debts.isNewRecord = true;
    await debts.save();
    return debts;
  }

  async update(debts: Debts): Promise<void> {
    await debts.save();
  }
}
