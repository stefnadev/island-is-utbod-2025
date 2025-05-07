import { DATE, JSON, UUIDV4 } from 'sequelize';
import {
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { TaxReport } from './tax-report.model';

@Table
export class Incomes extends Model {
  @PrimaryKey
  @Column(UUIDV4)
  override id!: string;

  @ForeignKey(() => TaxReport)
  @Column(UUIDV4)
  taxReportId!: string;

  @Column(JSON)
  salaries?: string;

  @Column(JSON)
  benefits?: string;

  @Column(JSON)
  compensations?: string;

  @Column(DATE)
  override createdAt!: string;

  @Column(DATE)
  override updatedAt?: string;
}
