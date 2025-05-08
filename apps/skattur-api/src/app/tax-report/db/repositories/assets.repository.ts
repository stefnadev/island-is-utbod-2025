import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Assets } from '../models/assets.model';

@Injectable()
export class AssetsRepository {
  constructor(
    @InjectModel(Assets)
    private assets: typeof Assets,
  ) {}

  async findByTaxReport(taxReportId: string): Promise<Assets | null> {
    return this.assets.findOne({
      where: {
        taxReportId,
      },
    });
  }

  findOne(id: string): Promise<Assets | null> {
    return this.assets.findOne({
      where: {
        id,
      },
    });
  }

  async create(assets: Assets): Promise<Assets> {
    assets.isNewRecord = true;
    await assets.save();
    return assets;
  }

  async update(assets: Assets): Promise<void> {
    await assets.save();
  }
}
