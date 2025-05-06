import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {
    @ApiProperty()
    plateNumber!: string;

    @ApiProperty()
    yearOfPurchase!: number;

    @ApiProperty()
    purchasePrice!: number;
}

export class VehicleCollection {
    items!: VehicleDto[];
}