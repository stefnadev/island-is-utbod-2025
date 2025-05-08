import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { TaxReportStatus } from './tax-report-status';

@ObjectType()
export class TaxReportListItem {
  @Field(() => ID)
  id!: string;

  @Field(() => Int)
  year!: number;

  @Field(() => TaxReportStatus)
  status!: TaxReportStatus;
}

@ObjectType()
export class TaxReportListResponse {
  @Field(() => [TaxReportListItem])
  items!: TaxReportListItem[];
}
