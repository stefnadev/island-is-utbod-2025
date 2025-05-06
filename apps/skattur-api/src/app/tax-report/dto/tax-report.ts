import { ApiProperty } from '@nestjs/swagger';
import { IncomesDto } from './incomes';
import { AssetsDto } from './assets';
import { DebtsDto } from './debts';
import { IsNumber, IsObject, IsString } from 'class-validator'

export enum TaxReportStatus {
    DRAFT = 'Draft',
    SUBMITTED = 'Submitted',
    DELETED = 'deleted',
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
    applicationId!: string;

    @ApiProperty({
        type: IncomesDto
    })
    @IsObject()
    incomes!: IncomesDto;

    @ApiProperty({
        type: AssetsDto
    })
    @IsObject()
    assets!: AssetsDto;

    @ApiProperty({
        type: DebtsDto
    })
    @IsObject()
    debts!: DebtsDto;

    @ApiProperty()
    @IsNumber()
    year!: number;

    @ApiProperty({
        enum: ['draft','submitted','deleted']
    })
    @IsString()
    status!: TaxReportStatus;

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