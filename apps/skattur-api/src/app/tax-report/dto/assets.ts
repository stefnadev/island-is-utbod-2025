import { ApiProperty } from '@nestjs/swagger';
import { RealEstateCollection } from './real-estate';
import { VehicleCollection } from './vehicle';
import { IsObject, IsString } from 'class-validator'

export class AssetsDto {
    @ApiProperty({
        format: 'uuid',
    })
    @IsString()
    id!: string;

    @ApiProperty({
        format: 'uuid',
    })
    @IsString()
    taxReportId!: string;

    @ApiProperty({
        type: RealEstateCollection,
        description: 'Innlendar fasteignir',
    })
    @IsObject()
    realEstates!: RealEstateCollection;

    @ApiProperty({
        type: RealEstateCollection,
        description: 'Bifreiðir',
    })
    @IsObject()
    vehicles!: VehicleCollection;

    @ApiProperty({
        format: 'date-time',
    })
    @IsString()
    createdOn!: string;

    @ApiProperty({
        format: 'date-time',
    })
    @IsString()
    modifiedOn!: string;
}