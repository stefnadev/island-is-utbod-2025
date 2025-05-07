import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('TaxReportAssetRealEstate')
class RealEstate {
  @Field(() => String)
  number!: string;

  @Field(() => String)
  address!: string;

  @Field(() => Int)
  appraisal!: number;
}

@ObjectType('TaxReportAssetRealEstateCollection')
class RealEstateCollection {
  @Field(() => [RealEstate])
  items!: RealEstate[];
}

@ObjectType('TaxReportAssets')
export class Assets {
  @Field(() => ID)
  id!: string;

  @Field(() => RealEstateCollection, { nullable: true })
  realEstates?: RealEstateCollection | null;

  @Field(() => RealEstateCollection, { nullable: true })
  vehicles?: RealEstateCollection | null;
}
