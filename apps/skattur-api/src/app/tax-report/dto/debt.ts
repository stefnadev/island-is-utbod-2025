import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class DebtDto {
  @ApiProperty()
  @IsString()
  description!: string;

  @ApiProperty({
    description: 'Vaxtagjöld',
  })
  @IsNumber()
  interestCharges!: number;

  @ApiProperty({
    description: 'Eftirstöðvar skulda',
  })
  @IsNumber()
  remainingDebtsAmount!: number;
}

export class DebtCollection {
  @ApiProperty({
    type: DebtDto,
    isArray: true,
  })
  @IsArray()
  items!: DebtDto[];
}
