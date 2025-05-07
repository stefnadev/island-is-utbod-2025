import { ApiProperty } from '@nestjs/swagger';
import { IncomesDto } from './incomes';
import { AssetsDto } from './assets';
import { DebtsDto } from './debts';
import { IsNumber, IsObject, IsString } from 'class-validator'

export enum TaxReportStatus {
    DRAFT = 'Draft',
    SUBMITTED = 'Submitted',
}

export class TaxReportDto {
    @ApiProperty({
        format: 'uuid'
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
        enum: ['draft','submitted']
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
        nullable: true,
        required: false,
    })
    @IsString()
    modifiedOn?: string;
}