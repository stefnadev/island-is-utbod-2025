import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Incomes } from '../models/incomes.model';

@Injectable()
export class IncomesRepository {
  constructor(
    @InjectModel(Incomes)
    private incomes: typeof Incomes,
  ) {}

  async findByTaxReport(taxReportId: string): Promise<Incomes | null> {
    return this.incomes.findOne({
      where: {
        taxReportId,
      },
    });
  }

  findOne(id: string): Promise<Incomes | null> {
    return this.incomes.findOne({
      where: {
        id,
      },
    });
  }

  async create(incomes: Incomes): Promise<Incomes> {
    incomes.isNewRecord = true;
    await incomes.save();
    return incomes;
  }

  async update(incomes: Incomes): Promise<void> {
    await incomes.save();
  }
}
