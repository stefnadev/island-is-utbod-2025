import { Text } from '@/components/island-ui/core/src';
import Head from 'next/head';

interface TaxReportDetailsProps {
  year: string;
}

export const TaxReportDetails = ({ year }: TaxReportDetailsProps) => {
  const title = `Skattframtal ${year}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Text variant="h1">{title}</Text>
    </div>
  );
};
