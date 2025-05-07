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
        nullable: true,
        required: false,
    })
    @IsObject()
    realEstates?: RealEstateCollection;

    @ApiProperty({
        type: RealEstateCollection,
        description: 'Bifreiðir',
        nullable: true,
        required: false,
    })
    @IsObject()
    vehicles?: VehicleCollection;

    @ApiProperty({
        format: 'date-time',
    })
    @IsString()
    createdOn!: string;

    @ApiProperty({
        format: 'date-time',
        nullable: true,
        required: false,
    })
    @IsString()
    modifiedOn?: string;
}