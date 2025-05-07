import Head from 'next/head';
import { Text } from '@/components/island-ui/core/src';
import type { GetTaxReportListQuery } from '@/grapql/graphql';

import * as styles from './TaxReportList.css';

interface TaxRepostListProps {
  taxReportList: GetTaxReportListQuery['taxReportList'];
}

export const TaxReportList = ({ taxReportList }: TaxRepostListProps) => {
  return (
    <div>
      <Head>
        <title>Skattframtöl</title>
      </Head>
      <Text variant="h1">Skattframtöl</Text>
      <div className={styles.container}>
        {taxReportList.items.map((item) => {
          return (
            <a href={`/skattframtol/${item.id}`} key={item.year}>
              {item.status} {item.year}
            </a>
          );
        })}
      </div>
    </div>
  );
};
