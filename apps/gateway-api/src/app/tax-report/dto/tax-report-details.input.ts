import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TaxReportDetailsInput {
  @Field(() => String)
  id!: string;
}
