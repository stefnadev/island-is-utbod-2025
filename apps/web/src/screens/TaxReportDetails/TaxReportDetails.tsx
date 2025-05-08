import Head from 'next/head';
import { Text } from '@/components/island-ui/core/src';
import type { GetTaxReportDetailsQuery } from '@/grapql/graphql';

interface TaxReportDetailsProps {
  taxReportDetails: NonNullable<GetTaxReportDetailsQuery['taxReportDetails']>;
}

export const TaxReportDetails = ({
  taxReportDetails,
}: TaxReportDetailsProps) => {
  const title = `Skattframtal ${taxReportDetails.id}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Text variant="h1">{title}</Text>
      {taxReportDetails.status}
      {taxReportDetails.year}
    </div>
  );
};
