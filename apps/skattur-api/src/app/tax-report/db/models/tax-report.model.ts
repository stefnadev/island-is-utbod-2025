import { DATE, ENUM, UUIDV4 } from 'sequelize';
import { Column, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Incomes } from './incomes.model';
import { Assets } from './assets.model';
import { Debts } from './debts.model';

@Table
export class TaxReport extends Model {
  @PrimaryKey
  @Column(UUIDV4)
  override id!: string;

  @Column(UUIDV4)
  userId!: string;

  @Column
  year!: number;

  @Column(ENUM('draft', 'submitted'))
  status!: string;

  @Column(DATE)
  override createdAt!: string;

  @Column(DATE)
  override updatedAt?: string;

  @HasOne(() => Incomes, { onDelete: 'cascade' })
  incomes?: Incomes;

  @HasOne(() => Assets, { onDelete: 'cascade' })
  assets?: Assets;

  @HasOne(() => Debts, { onDelete: 'cascade' })
  debts?: Debts;
}
