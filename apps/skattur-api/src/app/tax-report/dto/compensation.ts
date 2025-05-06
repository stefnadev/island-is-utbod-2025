import { ApiProperty } from '@nestjs/swagger';
import { UnitCollection } from './unit';

export class CompensationDto {
    @ApiProperty()
    company!: string;

    @ApiProperty()
    compensations!: UnitCollection;
}

export class CompensationCollection {
    items!: CompensationDto[];
}