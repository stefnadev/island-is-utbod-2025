import { ApiProperty } from '@nestjs/swagger';
import { RealEstateChargesDto } from './real-estate-charges';
import { DebtCollection } from './debt';

export class DebtsDto {
    @ApiProperty()
    id!: string;

    @ApiProperty()
    taxReportId!: string;

    @ApiProperty()
    interestCharges!: RealEstateChargesDto;

    @ApiProperty()
    otherDebts!: DebtCollection;

    @ApiProperty()
    createdOn!: string;

    @ApiProperty()
    modifiedOn!: string;
}