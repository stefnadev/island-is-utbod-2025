import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ThjodskraService } from './thjodskra.service';
import { UserDto } from './dto/user';

@ApiTags('Thjodskra')
@Controller('thjodskra')
export class ThjodskraController {
  constructor(private readonly thjodskraService: ThjodskraService) {}

  @Get('/users/:ssn')
  @ApiOkResponse({
    description: 'ok',
    type: UserDto,
  })
  @ApiOperation({
    operationId: 'viewUser',
    summary: 'View user',
  })
  findOne(@Param('ssn') ssn: string): Promise<UserDto | null> {
    return this.thjodskraService.getUserBySsn(ssn);
  }
}
