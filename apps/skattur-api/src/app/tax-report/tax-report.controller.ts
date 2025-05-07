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

@ApiTags('TaxReports')
@Controller('tax-reports')
export class TaxReportController {
  constructor(private readonly taxReportService: TaxReportService) {}

  @Get()
  @ApiResponse({
    description: 'ok',
    type: TaxReportsBasicCollection,
  })
  @ApiOperation({
    operationId: 'getTaxReports',
    summary: 'Get tax reports',
  })
  getData() {
    console.log('EREE');
    return this.taxReportService.getTaxReports();
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
  findOne(@Param('id') id: string): TaxReportDto {
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
  create(@Body() taxReport: TaxReportDto): TaxReportDto {
    return this.taxReportService.createTaxReport(taxReport);
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
  update(@Body() taxReport: TaxReportDto): TaxReportDto {
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
  delete(@Param('id') id: string): TaxReportDto {
    return this.taxReportService.deleteTaxReport(id);
  }
}
