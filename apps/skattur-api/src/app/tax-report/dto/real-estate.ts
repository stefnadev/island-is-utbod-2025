import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class RealEstateDto {
  @ApiProperty({
    description: 'Fastanúmer',
  })
  @IsString()
  number!: string;

  @ApiProperty()
  @IsString()
  address!: string;

  @ApiProperty({
    description: 'Fasteignamat',
  })
  @IsNumber()
  appraisal!: number;
}

export class RealEstateCollection {
  @ApiProperty({
    type: RealEstateDto,
    isArray: true,
  })
  @IsArray()
  items!: RealEstateDto[];
}
