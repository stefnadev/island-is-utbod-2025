import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class UnitDto {
  @ApiProperty()
  description!: string;

  @ApiProperty({
    nullable: true,
    required: false,
  })
  amount?: number;
}

export class UnitCollection {
  @ApiProperty({
    type: UnitDto,
    isArray: true,
  })
  @IsArray()
  items!: UnitDto[];
}
