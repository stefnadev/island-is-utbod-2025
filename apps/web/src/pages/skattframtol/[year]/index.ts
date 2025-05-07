import type { GetServerSideProps } from 'next';
import { TaxReportDetails } from '@/screens/TaxReportDetails/TaxReportDetails';

export default TaxReportDetails;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      year: query.year,
    },
  };
};
