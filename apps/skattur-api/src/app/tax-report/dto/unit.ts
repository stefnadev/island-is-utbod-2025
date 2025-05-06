import { ApiProperty } from '@nestjs/swagger';

export class UnitDto {
    @ApiProperty()
    description!: string;

    @ApiProperty()
    amount!: number;
}

export class UnitCollection {
    items!: UnitDto[];
}