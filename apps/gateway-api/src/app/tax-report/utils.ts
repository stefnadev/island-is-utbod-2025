import type {
  TaxReportBasicDto,
  TaxReportDto,
} from '../../clients/skattur-api';
import { TaxReportDetails } from './dto/tax-report-details';
import { TaxReportListItem } from './dto/tax-report-list-item';
import { TaxReportStatus } from './dto/tax-report-status';

export const mapTaxReportStatus = (status: TaxReportBasicDto['status']) => {
  if (status === 'draft') return TaxReportStatus.DRAFT;
  if (status === 'submitted') return TaxReportStatus.SUBMITTED;
  if (status === 'deleted') return TaxReportStatus.DELETED;
  return TaxReportStatus.DRAFT;
};

export const mapTaxReportListItem = (
  item: TaxReportBasicDto,
): TaxReportListItem => {
  return {
    status: mapTaxReportStatus(item.status),
    year: item.year,
    id: item.id,
  };
};

export const mapTaxReportDetails = (item: TaxReportDto): TaxReportDetails => {
  return {
    id: item.id,
    status: mapTaxReportStatus(item.status),
    year: item.year,
    assets: item.assets,
    debts: item.debts,
    incomes: item.incomes,
  };
};
