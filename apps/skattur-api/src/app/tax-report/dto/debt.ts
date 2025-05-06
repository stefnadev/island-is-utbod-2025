import { ApiProperty } from '@nestjs/swagger';

export class DebtDto {
    @ApiProperty()
    description!: string;

    @ApiProperty()
    interestCharges!: number;

    @ApiProperty()
    remainingDebtsAmount!: number;
}

export class DebtCollection {
    items!: DebtDto[];
}