import { ApiProperty } from '@nestjs/swagger';

export class RealEstateDto {
    @ApiProperty()
    number!: string;

    @ApiProperty()
    address!: string;

    @ApiProperty()
    appraisal!: number;
}

export class RealEstateCollection {
    items!: RealEstateDto[];
}