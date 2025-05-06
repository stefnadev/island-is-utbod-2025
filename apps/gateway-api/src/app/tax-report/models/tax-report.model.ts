import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum TaxReportListItemStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  REVIEWED = 'REVIEWED',
}

registerEnumType(TaxReportListItemStatus, {
  name: 'TaxReportListItemStatus',
});

@ObjectType()
export class TaxReportListItem {
  @Field(() => Int)
  year!: number;

  @Field(() => TaxReportListItemStatus)
  status!: TaxReportListItemStatus;
}

@ObjectType()
export class TaxReportListResponse {
  @Field(() => [TaxReportListItem])
  items!: TaxReportListItem[];
}
