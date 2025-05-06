import { ApiProperty } from '@nestjs/swagger';
import { UnitCollection } from './unit';
import { CompensationCollection } from './compensation';

export class IncomesDto {
    @ApiProperty()
    id!: string;

    @ApiProperty()
    taxReportId!: string;

    @ApiProperty()
    salaries!: UnitCollection;

    @ApiProperty()
    benefits!: UnitCollection;

    @ApiProperty()
    compensations!: CompensationCollection;

    @ApiProperty()
    createdOn!: string;

    @ApiProperty()
    modifiedOn!: string;
}