import { Text } from '@/components/island-ui/core/src';
import { TaxReportListResponse } from '@/grapql/graphql';
import Head from 'next/head';

interface TaxRepostListProps {
  taxReportList: TaxReportListResponse;
}

export const TaxReportList = ({ taxReportList }: TaxRepostListProps) => {
  return (
    <div>
      <Head>
        <title>Skattframtöl</title>
      </Head>
      <Text variant="h1">Skattframtöl</Text>
      <div>
        {taxReportList.items.map((item) => {
          return (
            <div key={item.year}>
              {item.status} {item.year}
            </div>
          );
        })}
      </div>
    </div>
  );
};
