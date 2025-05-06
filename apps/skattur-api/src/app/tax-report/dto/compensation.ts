import { ApiProperty } from '@nestjs/swagger';
import { UnitCollection } from './unit';
import { IsArray } from 'class-validator';

export class CompensationDto {
    @ApiProperty()
    company!: string;

    @ApiProperty()
    compensations!: UnitCollection;
}

export class CompensationCollection {
    @ApiProperty({
        type: CompensationDto, 
        isArray: true,
    })
    @IsArray()
    items!: CompensationDto[];
}