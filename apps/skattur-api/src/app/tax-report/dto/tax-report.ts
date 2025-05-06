import { ApiProperty } from '@nestjs/swagger';
import { IncomesDto } from './incomes';
import { AssetCollection } from './assets';
import { DebtCollection } from './debt';

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
    incomes!: IncomesDto;

    @ApiProperty()
    assets!: AssetCollection;

    @ApiProperty()
    debts!: DebtCollection;

    @ApiProperty()
    year!: number;

    @ApiProperty()
    status!: TaxReportStatus;

    @ApiProperty()
    createdOn!: string;

    @ApiProperty()
    modifiedOn!: string;
}