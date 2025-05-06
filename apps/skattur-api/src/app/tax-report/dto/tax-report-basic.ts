import { ApiProperty } from '@nestjs/swagger';
import { TaxReportStatus } from './tax-report';

export class TaxReportBasicDto {
    @ApiProperty()
    id!: string;

    @ApiProperty()
    applicationId!: string;

    @ApiProperty()
    year!: number;

    @ApiProperty()
    status!: TaxReportStatus;
}

export class TaxReportsBasicCollection {
    items!: TaxReportBasicDto[];
}