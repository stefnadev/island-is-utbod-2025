import { ApiProperty } from '@nestjs/swagger';
import { UnitCollection } from './unit';
import { CompensationCollection } from './compensation';
import { IsObject, IsString } from 'class-validator';
import { Incomes } from '../db/models/incomes.model';

export class IncomesDto {
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
    type: UnitCollection,
    description: 'Launatekjur og starfstengdar greiðslur',
    nullable: true,
    required: false,
  })
  @IsObject()
  salaries?: UnitCollection;

  @ApiProperty({
    type: UnitCollection,
    description: 'Ökutækjastyrkur. Dagpeningar. Hlunnindi',
    nullable: true,
    required: false,
  })
  benefits?: UnitCollection;

  @ApiProperty({
    type: CompensationCollection,
    description:
      'Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl.',
    nullable: true,
    required: false,
  })
  compensations?: CompensationCollection;

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

  public static getFromModel(incomes: Incomes) {
    const dto = new IncomesDto();
    dto.id = incomes.id;
    dto.taxReportId = incomes.taxReportId;
    dto.salaries = incomes.salaries
      ? (JSON.parse(incomes.salaries) as UnitCollection)
      : undefined;
    dto.benefits = incomes.benefits
      ? (JSON.parse(incomes.benefits) as UnitCollection)
      : undefined;
    dto.compensations = incomes.compensations
      ? (JSON.parse(incomes.compensations) as CompensationCollection)
      : undefined;
    dto.createdAt = incomes.createdAt;
    dto.updatedAt = incomes.updatedAt;
    return dto;
  }
}
