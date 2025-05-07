import { registerEnumType } from '@nestjs/graphql';

export enum TaxReportStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  DELETED = 'deleted',
}

registerEnumType(TaxReportStatus, {
  name: 'TaxReportStatus',
});
