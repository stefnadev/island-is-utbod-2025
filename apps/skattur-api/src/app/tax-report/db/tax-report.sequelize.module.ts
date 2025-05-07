import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReport } from './models/tax-report.model';
import { Incomes } from './models/incomes.model';
import { Debts } from './models/debts.model';
import { Assets } from './models/assets.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB,
      models: [TaxReport, Incomes, Debts, Assets],
    }),
  ],
})
export class TaxReportSequilizeModule {}
