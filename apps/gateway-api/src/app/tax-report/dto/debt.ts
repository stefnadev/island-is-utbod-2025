import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('TaxReportDebtRealEstateCharges')
class RealEstateCharges {
  @Field(() => Int)
  yearOfPurchase!: number;

  @Field(() => String)
  destination!: string;

  @Field(() => String)
  lender!: string;

  @Field(() => String)
  lenderSsn!: string;

  @Field(() => String)
  loanNumber!: string;

  @Field(() => String)
  loanDate!: string;

  @Field(() => Int)
  loanTotalNumberOfYears!: number;

  @Field(() => Int)
  totalPaymentAmountOfYear!: number;

  @Field(() => Int)
  totalPaymentOfNominalValue!: number;

  @Field(() => Int)
  interestChargesAmount!: number;

  @Field(() => Int)
  remainingDebtsAmount!: number;
}

@ObjectType('TaxReportAssetDebtCollectionItem')
class Debt {
  @Field(() => String)
  description!: string;

  @Field(() => Int)
  interestCharges!: number;

  @Field(() => Int)
  remainingDebtsAmount!: number;
}

@ObjectType('TaxReportAssetDebtCollection')
class DebtCollection {
  @Field(() => [Debt])
  items!: Debt[];
}

@ObjectType('TaxReporDebts')
export class Debts {
  @Field(() => ID)
  id!: string;

  @Field(() => RealEstateCharges, { nullable: true })
  realEstateCharges?: RealEstateCharges | null;

  @Field(() => DebtCollection, { nullable: true })
  otherDebts?: DebtCollection | null;
}
