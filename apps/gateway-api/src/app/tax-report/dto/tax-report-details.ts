import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { TaxReportStatus } from './tax-report-status';
import { Income } from './income';
import { Assets } from './assets';
import { Debts } from './debt';

@ObjectType()
export class TaxReportDetails {
  @Field(() => ID)
  id!: string;

  @Field(() => TaxReportStatus)
  status!: TaxReportStatus;

  @Field(() => Int)
  year!: number;

  @Field(() => Income, { nullable: true })
  incomes?: Income | null;

  @Field(() => Assets, { nullable: true })
  assets?: Assets | null;

  @Field(() => Debts, { nullable: true })
  debts?: Debts | null;
}
