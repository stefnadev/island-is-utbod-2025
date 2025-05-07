import { ApiProperty } from '@nestjs/swagger';
import { IncomesDto } from './incomes';
import { AssetsDto } from './assets';
import { DebtsDto } from './debts';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { TaxReport } from '../db/models/tax-report.model';

export enum TaxReportStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
}

export class TaxReportDto {
  @ApiProperty({
    format: 'uuid',
  })
  @IsString()
  id!: string;

  @ApiProperty({
    format: 'uuid',
  })
  @IsString()
  userId!: string;

  @ApiProperty({
    type: IncomesDto,
    nullable: true,
    required: false,
  })
  @IsObject()
  incomes?: IncomesDto;

  @ApiProperty({
    type: AssetsDto,
    nullable: true,
    required: false,
  })
  @IsObject()
  assets?: AssetsDto;

  @ApiProperty({
    type: DebtsDto,
    nullable: true,
    required: false,
  })
  @IsObject()
  debts?: DebtsDto;

  @ApiProperty()
  @IsNumber()
  year!: number;

  @ApiProperty({
    enum: ['draft', 'submitted'],
  })
  @IsString()
  status!: TaxReportStatus;

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

  public static getFromModel(taxReport: TaxReport) {
    const dto = new TaxReportDto();
    dto.id = taxReport.id;
    dto.userId = taxReport.userId;
    dto.status = taxReport.status as TaxReportStatus;
    dto.incomes = taxReport.incomes
      ? IncomesDto.getFromModel(taxReport.incomes)
      : undefined;
    dto.assets = taxReport.assets
      ? AssetsDto.getFromModel(taxReport.assets)
      : undefined;
    dto.debts = taxReport.debts
      ? DebtsDto.getFromModel(taxReport.debts)
      : undefined;
    dto.createdAt = taxReport.createdAt;
    dto.updatedAt = taxReport.updatedAt;
    return dto;
  }
}
