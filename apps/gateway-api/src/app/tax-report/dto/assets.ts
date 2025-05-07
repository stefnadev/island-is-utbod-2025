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

@ObjectType('TaxReportAssetVehicle')
class Vehicle {
  @Field(() => String)
  plateNumber!: string;

  @Field(() => Int)
  yearOfPurchase!: number;

  @Field(() => Int)
  purchasePrice!: number;
}

@ObjectType('TaxReportAssetVehicleCollection')
class VehicleCollection {
  @Field(() => [Vehicle])
  items!: Vehicle[];
}

@ObjectType('TaxReportAssets')
export class Assets {
  @Field(() => ID)
  id!: string;

  @Field(() => RealEstateCollection, { nullable: true })
  realEstates?: RealEstateCollection | null;

  @Field(() => VehicleCollection, { nullable: true })
  vehicles?: VehicleCollection | null;
}
