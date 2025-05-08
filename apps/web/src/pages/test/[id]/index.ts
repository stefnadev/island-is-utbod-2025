import { GetTaxReportDetailsDocument } from '@/grapql/graphql';
import { TaxReportDetails } from '@/screens/TaxReportDetailsTest/TaxReportDetails';
import { createApolloClient } from '@/utils/apolloClient';
import { GetServerSideProps } from 'next';

export default TaxReportDetails;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: GetTaxReportDetailsDocument,
    variables: {
      input: {
        id: query.id as string,
      },
    },
  });

  if (!data.taxReportDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      taxReportDetails: data.taxReportDetails,
    },
  };
};
