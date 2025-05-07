import { IsString } from 'class-validator';

export class CreateTaxReportInput {
  @IsString()
  userId!: string;
}
