import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('TaxReportDetailsIncomeUnit')
export class Unit {
  @Field(() => String)
  description!: string;

  @Field(() => Int)
  amount!: number;
}

@ObjectType('TaxReportDetailsIncomeUnitCollection')
export class UnitCollection {
  @Field(() => [Unit])
  items!: Unit[];
}

@ObjectType('TaxReportDetailsIncomeCompensation')
export class Compensation {
  @Field(() => String)
  company!: string;

  @Field(() => UnitCollection)
  compensations!: UnitCollection;
}

@ObjectType('TaxReportDetailsIncomeCompensationCollection')
export class CompensationCollection {
  @Field(() => [Compensation])
  items!: Compensation[];
}

@ObjectType('TaxReportDetailsIncome')
export class Income {
  @Field(() => ID)
  id!: string;

  @Field(() => UnitCollection, { nullable: true })
  salaries?: UnitCollection | null;

  @Field(() => UnitCollection, { nullable: true })
  benefits?: UnitCollection | null;

  @Field(() => CompensationCollection, { nullable: true })
  compensations?: CompensationCollection | null;
}
