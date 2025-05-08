import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { TaxReportService } from './tax-report.service';
import { TaxReportDto } from './dto/tax-report';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TaxReportsBasicCollection } from './dto/tax-report-basic';
import { CreateTaxReportInput } from './dto/inputs/create-tax-report-input';

@ApiTags('TaxReports')
@Controller('tax-reports')
export class TaxReportController {
  constructor(private readonly taxReportService: TaxReportService) {}

  @Get('/search/:userId')
  @ApiResponse({
    description: 'ok',
    type: TaxReportsBasicCollection,
  })
  @ApiOperation({
    operationId: 'getTaxReports',
    summary: 'Get tax reports',
  })
  getData(@Param('userId') userId: string) {
    return this.taxReportService.getTaxReports(userId);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'ok',
    type: TaxReportDto,
  })
  @ApiOperation({
    operationId: 'viewTaxReport',
    summary: 'View tax report',
  })
  findOne(@Param('id') id: string): Promise<TaxReportDto | null> {
    return this.taxReportService.getTaxReport(id);
  }

  @Post()
  @ApiOkResponse({
    description: 'ok',
    type: TaxReportDto,
  })
  @ApiOperation({
    operationId: 'createTaxReport',
    summary: 'Create tax report',
  })
  create(
    @Body() createTaxReportInput: CreateTaxReportInput,
  ): Promise<TaxReportDto> {
    return this.taxReportService.createTaxReport(createTaxReportInput.userId);
  }

  @Put()
  @ApiOkResponse({
    description: 'ok',
    type: TaxReportDto,
  })
  @ApiOperation({
    operationId: 'updateTaxReport',
    summary: 'Update tax report',
  })
  update(@Body() taxReport: TaxReportDto): Promise<TaxReportDto> {
    return this.taxReportService.updateTaxReport(taxReport);
  }

  @Delete(':id')
  @ApiResponse({
    description: 'ok',
    status: 204,
  })
  @ApiOperation({
    operationId: 'deleteTaxReport',
    summary: 'Delete tax report',
  })
  delete(@Param('id') id: string): void {
    return this.taxReportService.deleteTaxReport(id);
  }
}
