import Head from 'next/head';
import {
  Box,
  Button,
  GridContainer,
  Icon,
  Text,
} from '@/components/island-ui/core/src';
import type { GetTaxReportDetailsQuery } from '@/grapql/graphql';
import { ApplicationHeader } from '@/components/ApplicationHeader/ApplicationHeader';
import { useEffect, useState } from 'react';
import { LocalStorageKeys } from '@/constants';
import { IncomeStep } from './steps/IncomeStep';

interface ConcentScreenProps {
  confirm: () => void;
}

const ConcentScreen = ({ confirm }: ConcentScreenProps) => {
  return (
    <Box display="flex" flexDirection="column" rowGap={3}>
      <Text variant="h1">Gagnaöflun</Text>
      <Box display="flex" columnGap={3}>
        <Icon type="external" />
        <Text variant="h4">
          Eftirfarandi gögn verða sótt rafrænt með þínu samþykki.
        </Text>
      </Box>
      <Box>
        <Button
          onClick={() => {
            confirm();
          }}
        >
          Staðfesta
        </Button>
      </Box>
    </Box>
  );
};

interface TaxReportDetailsProps {
  taxReportDetails: NonNullable<GetTaxReportDetailsQuery['taxReportDetails']>;
}

export const TaxReportDetails = ({
  taxReportDetails,
}: TaxReportDetailsProps) => {
  const [concent, setConcent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setConcent(Boolean(localStorage.getItem(LocalStorageKeys.CONCENT)));
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <Head>
        <title>Skattframtal</title>
      </Head>
      <ApplicationHeader
        nameOfUser="Jökull Þórðarson"
        organizationTitle="Skatturinn"
        title="Skattframtal"
      />
      <GridContainer>
        {!concent && (
          <ConcentScreen
            confirm={() => {
              setConcent(true);
              localStorage.setItem(LocalStorageKeys.CONCENT, 'true');
            }}
          />
        )}
      </GridContainer>
      <IncomeStep />
    </div>
  );
};
