import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator'

export class VehicleDto {
    @ApiProperty({
        description: 'Númer',
    })
    @IsString()
    plateNumber!: string;

    @ApiProperty({
        description: 'Kaupár',
    })
    @IsNumber()
    yearOfPurchase!: number;

    @ApiProperty({
        description: 'Kaupverð',
    })
    @IsNumber()
    purchasePrice!: number;
}

export class VehicleCollection {
    @ApiProperty({
        type: VehicleDto,
        isArray: true,
    })
    @IsArray()
    items!: VehicleDto[];
}