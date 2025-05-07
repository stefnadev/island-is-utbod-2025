import { ApiProperty } from '@nestjs/swagger';
import { RealEstateChargesDto } from './real-estate-charges';
import { DebtCollection } from './debt';
import { IsObject, IsString } from 'class-validator';
import { Debts } from '../db/models/debts.model';

export class DebtsDto {
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
    type: RealEstateChargesDto,
    description: 'Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota',
    nullable: true,
    required: false,
  })
  @IsObject()
  realEstateCharges?: RealEstateChargesDto;

  @ApiProperty({
    type: DebtCollection,
    description: 'Aðrar skuldir og vaxtagjöld',
    nullable: true,
    required: false,
  })
  @IsObject()
  otherDebts?: DebtCollection;

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

  public static getFromModel(debts: Debts) {
    const dto = new DebtsDto();
    dto.id = debts.id;
    dto.taxReportId = debts.taxReportId;
    dto.realEstateCharges = debts.realEstateCharges
      ? (JSON.parse(debts.realEstateCharges) as RealEstateChargesDto)
      : undefined;
    dto.otherDebts = debts.otherDebts
      ? (JSON.parse(debts.otherDebts) as DebtCollection)
      : undefined;
    dto.createdAt = debts.createdAt;
    dto.updatedAt = debts.updatedAt;
    return dto;
  }
}
