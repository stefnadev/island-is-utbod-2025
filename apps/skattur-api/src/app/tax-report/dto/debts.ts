import { ApiProperty } from '@nestjs/swagger';
import { RealEstateChargesDto } from './real-estate-charges';
import { DebtCollection } from './debt';
import { IsObject, IsString } from 'class-validator'

export class DebtsDto {
     @ApiProperty({
        format: 'uuid',
    })
    @IsString()
    id!: string;

    @ApiProperty({
        format: 'uuid',
    })
    @IsString()
    taxReportId!: string;

    @ApiProperty({
        type: RealEstateChargesDto,
        description: 'Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota'
    })
    @IsObject()
    realEstateCharges!: RealEstateChargesDto;

    @ApiProperty({
        type: DebtCollection,
        description: 'Aðrar skuldir og vaxtagjöld',
    })
    @IsObject()
    otherDebts!: DebtCollection;

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