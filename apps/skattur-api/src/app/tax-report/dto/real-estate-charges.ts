import { ApiProperty } from '@nestjs/swagger';

export class RealEstateChargesDto {
    @ApiProperty()
    yearOfPurchase!: number;

    @ApiProperty()
    destination!: string;

    @ApiProperty()
    lender!: number;

    @ApiProperty()
    lenderSsn!: string;

    @ApiProperty()
    loanNumber!: string;

    @ApiProperty()
    loanDate!: string;

    @ApiProperty()
    loanTotalNumberOfYears!: number;

    @ApiProperty()
    totalPaymentAmountOfYear!: number;

    @ApiProperty()
    totalPaymentOfNominalValue!: number;

    @ApiProperty()
    interestChargesAmount!: number;

    @ApiProperty()
    remainingDebtsAmount!: number;
}

export class RealEstateChargesCollection {
    items!: RealEstateChargesDto[];
}