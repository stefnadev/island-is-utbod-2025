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
        nullable: true,
        required: false,
    })
    @IsObject()
    salaries?: UnitCollection;

    @ApiProperty({
        type: UnitCollection,
        description: 'Ökutækjastyrkur. Dagpeningar. Hlunnindi',
        nullable: true,
        required: false,
    })
    benefits?: UnitCollection;

    @ApiProperty({
        type: CompensationCollection,
        description: 'Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl.',
        nullable: true,
        required: false,
    })
    compensations?: CompensationCollection;

    @ApiProperty({
        format: 'date-time',
    })
    @IsString()
    createdOn!: string;

    @ApiProperty({
        format: 'date-time',
        nullable: true,
        required: false,
    })
    @IsString()
    modifiedOn?: string;
}