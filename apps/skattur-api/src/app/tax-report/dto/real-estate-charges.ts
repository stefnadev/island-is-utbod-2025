import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class RealEstateChargesDto {
  @ApiProperty({
    description: 'Kaupár',
  })
  @IsNumber()
  yearOfPurchase!: number;

  @ApiProperty({
    description: 'Staðsetning íbúðarhúsnæðis',
  })
  @IsString()
  destination!: string;

  @ApiProperty({
    description: 'Lánveitandi',
  })
  @IsString()
  lender!: string;

  @ApiProperty({
    description: 'Kennitala lánveitanda',
  })
  lenderSsn!: string;
  @IsString()
  @ApiProperty({
    description: 'Lánsnúmer',
  })
  @IsString()
  loanNumber!: string;

  @ApiProperty({
    description: 'Lántökudagur',
    format: 'date-time',
  })
  @IsString()
  loanDate!: string;

  @ApiProperty({
    description: 'Lánstími í árum',
  })
  @IsNumber()
  loanTotalNumberOfYears!: number;

  @ApiProperty({
    description: 'Heildargreiðslur ársins',
  })
  @IsNumber()
  totalPaymentAmountOfYear!: number;

  @ApiProperty({
    description: 'Afborgun á nafnverði',
  })
  @IsNumber()
  totalPaymentOfNominalValue!: number;

  @ApiProperty({
    description: 'Vaxtagjöld',
  })
  @IsNumber()
  interestChargesAmount!: number;

  @ApiProperty({
    description: 'Eftirstöðvar skulda',
  })
  remainingDebtsAmount!: number;
}

export class RealEstateChargesCollection {
  @ApiProperty({
    type: RealEstateChargesDto,
    isArray: true,
  })
  @IsArray()
  items!: RealEstateChargesDto[];
}
