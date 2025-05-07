import { ApiProperty } from '@nestjs/swagger';
import { TaxReportStatus } from './tax-report';
import { IsArray, IsNumber, IsString } from 'class-validator'

export class TaxReportBasicDto {
    @ApiProperty({
        format: 'uuid',
    })
    @IsString()
    id!: string;

    @ApiProperty({
        format: 'uuid',
    })
    userId!: string;

    @ApiProperty()
    @IsNumber()
    year!: number;

    @ApiProperty({
        enum: ['draft','submitted','deleted']
    })
    @IsString()
    status!: TaxReportStatus;
}

export class TaxReportsBasicCollection {
    @ApiProperty({
        type: TaxReportBasicDto,
        isArray: true,
    })
    @IsArray()
    items!: TaxReportBasicDto[];
}