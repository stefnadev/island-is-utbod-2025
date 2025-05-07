import type { GetServerSideProps } from 'next';
import { TaxReportList } from '@/screens/TaxReportList/TaxReportList';
import { createApolloClient } from '@/utils/apolloClient';
import { GetTaxReportListDocument } from '@/grapql/graphql';

export default TaxReportList;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: GetTaxReportListDocument,
  });

  console.log(data);

  return {
    props: {
      taxReportList: data.taxReportList,
    },
  };
};
