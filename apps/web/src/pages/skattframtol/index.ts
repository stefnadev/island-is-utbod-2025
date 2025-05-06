import { TaxReportList } from '@/screens/TaxReportList/TaxReportList';
import { createApolloClient } from '@/utils/apolloClient';
import { GetTaxReportListDocument } from '@/grapql/graphql';

export default TaxReportList;

export const getServerSideProps = async () => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: GetTaxReportListDocument,
  });

  return {
    props: {
      taxReportList: data.taxReportList,
    },
  };
};
