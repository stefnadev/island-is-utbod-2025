import { registerEnumType } from '@nestjs/graphql';

export enum TaxReportStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
}

registerEnumType(TaxReportStatus, {
  name: 'TaxReportStatus',
});
