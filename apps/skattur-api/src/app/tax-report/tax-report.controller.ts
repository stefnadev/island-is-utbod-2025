import { Controller, Get, Param } from '@nestjs/common';
import { TaxReportService } from './tax-report.service';
import { TaxReportDto } from './dto/tax-report';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TaxReportsBasicCollection } from './dto/tax-report-basic';

@ApiTags('TaxReports')
@Controller('tax-reports')
export class TaxReportController {
  constructor(private readonly taxReportService: TaxReportService) {}

  @Get()
  @ApiOkResponse({
    description: 'ok',
    type: TaxReportsBasicCollection,
  })
  @ApiOperation({
    operationId: 'getTaxReports',
    summary: 'Get tax reports',
  })
  getData() {
    return this.taxReportService.GetTaxReports();
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
    return this.taxReportService.GetTaxReport(id);
  }
}
