import { ApiProperty } from '@nestjs/swagger';

export enum TaxReportStatus {
    DRAFT = 'Draft',
    SUBMITTED = 'Submitted',
    DELETED = 'deleted',
  }

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

export class TaxReportsBasicResponse {
    items!: TaxReportBasicDto[];
}