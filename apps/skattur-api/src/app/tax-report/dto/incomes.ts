import { ApiProperty } from '@nestjs/swagger';
import { UnitCollection } from './unit';
import { CompensationCollection } from './compensation';
import { IsObject, IsString } from 'class-validator'

export class IncomesDto {
    @ApiProperty({
        format: 'uuid'
    })
    @IsString()
    id!: string;

    @ApiProperty({
        format: 'uuid'
    })
    @IsString()
    taxReportId!: string;

    @ApiProperty({
        type: UnitCollection,
        description: 'Launatekjur og starfstengdar greiðslur',
    })
    @IsObject()
    salaries!: UnitCollection;

    @ApiProperty({
        type: UnitCollection,
        description: 'Ökutækjastyrkur. Dagpeningar. Hlunnindi',
    })
    benefits!: UnitCollection;

    @ApiProperty({
        type: CompensationCollection,
        description: 'Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl.',
    })
    compensations!: CompensationCollection;

    @ApiProperty({
        format: 'date-time',
    })
    @IsString()
    createdOn!: string;

    @ApiProperty({
        format: 'date-time',
    })
    @IsString()
    modifiedOn!: string;
}