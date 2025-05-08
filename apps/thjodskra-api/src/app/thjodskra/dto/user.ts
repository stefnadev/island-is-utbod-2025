import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from '../db/models/user.model';

export class UserDto {
  @ApiProperty({
    format: 'uuid',
  })
  @IsString()
  id!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  ssn!: string;

  @ApiProperty()
  address!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  phone!: string;

  @ApiProperty({
    format: 'date-time',
  })
  @IsString()
  createdAt!: string;

  @ApiProperty({
    format: 'date-time',
    nullable: true,
    required: false,
  })
  @IsString()
  updatedAt?: string;

  public static getFromModel(user: User) {
    const dto = new UserDto();
    dto.id = user.id;
    dto.name = user.name;
    dto.ssn = user.ssn;
    dto.address = user.address;
    dto.email = user.email;
    dto.phone = user.phone;
    dto.createdAt = user.createdAt;
    dto.updatedAt = user.updatedAt;
    return dto;
  }
}
