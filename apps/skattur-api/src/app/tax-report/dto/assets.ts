import { ApiProperty } from '@nestjs/swagger';
import { RealEstateCollection } from './real-estate';
import { VehicleCollection } from './vehicle';
import { IsObject, IsString } from 'class-validator';
import { Assets } from '../db/models/assets.model';

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
    type: VehicleCollection,
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
  createdAt!: string;

  @ApiProperty({
    format: 'date-time',
    nullable: true,
    required: false,
  })
  @IsString()
  updatedAt?: string;

  public static getFromModel(assets: Assets) {
    const dto = new AssetsDto();
    dto.id = assets.id;
    dto.taxReportId = assets.taxReportId;
    dto.realEstates = assets.realEstates
      ? (JSON.parse(assets.realEstates) as RealEstateCollection)
      : undefined;
    dto.vehicles = assets.vehicles
      ? (JSON.parse(assets.vehicles) as VehicleCollection)
      : undefined;
    dto.createdAt = assets.createdAt;
    dto.updatedAt = assets.updatedAt;
    return dto;
  }
}
