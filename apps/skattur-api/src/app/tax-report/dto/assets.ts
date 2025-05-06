import { ApiProperty } from '@nestjs/swagger';
import { RealEstateCollection } from './real-estate';
import { VehicleCollection } from './vehicle';

export class AssetsDto {
    @ApiProperty()
    id!: string;

    @ApiProperty()
    taxReportId!: string;

    @ApiProperty()
    reaEstates!: RealEstateCollection;

    @ApiProperty()
    vehicles!: VehicleCollection;

    @ApiProperty()
    createdOn!: string;

    @ApiProperty()
    modifiedOn!: string;
}

export class AssetCollection {
    items!: AssetsDto[];
}