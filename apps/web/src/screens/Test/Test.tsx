import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  GridColumn,
  GridContainer,
  GridRow,
  Tag,
  Text,
} from '../../components/island-ui/core/src';
import { FormStepper, Header, Step } from '../../components';

import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

const steps = [
  { title: 'Gagnasöfnun', number: 1 },
  { title: 'Persónu\u00ADupplýsingar', number: 2 },
  { title: 'Staða á vinnumarkaði', number: 3 },
  { title: 'Starfsóskir og starfsgeta', number: 4 },
  { title: 'Reynsla og þekking', number: 5 },
  { title: 'Greiðslu\u00ADupplýsingar', number: 6 },
  { title: 'Yfirlit umsóknar', number: 7 },
];

const StyledPageWrapper = styled.div`
  background: #f8f5fa;
  min-height: 100vh;
  padding-top: 130px;

  @media (max-width: 767px) {
    padding-top: 80px;
  }
`;

const StyledGridRow = styled(GridRow)`
  div& {
    @media (max-width: 767px) {
      display: block;
    }
  }
`;

const StyledSavedWrapper = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 250px;
  }
`;

const StyledMainWrapper = styled.div`
  @media (max-width: 767px) {
    margin: 0 -30px;
  }
`;

export const Test: NextPage = () => {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);

  // TODO: save formData to session periodically, display notification if mismatch was detected
  // TODO: on window close detect mismatch in session vs formData and display prompt
  const [formData, _setFormData] = useState({
    gagnasofnun: false,
    orlof: false,
    atvinnurekstur: false,
    stadaVinnumarkadi: 'ekki-i-vinnu',
    lokUppsagnarfrests: new Date(2021, 7, 15).toISOString(),
    astaedaAtvinnuleysis: '',
    salary: 0,
  });

  const [savedAt, setSavedAt] = useState(new Date());
  const [lastChanged, setLastChanged] = useState(null);
  const [saveState, setSaveState] = useState('saved');
  const [concent, setConcent] = useState(false);

  const setFormData = (data: any) => {
    _setFormData(data);
    setSaveState('changed');
    //setLastChanged(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (saveState === 'changed') {
        console.log(lastChanged);
        /*if (Date.now() - lastChanged.getTime() > 3000) {
          fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify({ ...formData, step: currentStep }),
          });
          setSaveState('saving');
        }*/
      }
      if (saveState === 'saving') {
        setSaveState('saved');
        setSavedAt(new Date());
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [saveState, lastChanged, currentStep]);

  const step = useMemo(
    () =>
      steps.find(
        (step) => step.number === (currentStep === 4 ? 7 : currentStep),
      ),
    [currentStep],
  );

  const nextStep = () => {
    if (currentStep === 4) {
      fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify({
          step: currentStep,
          completed: true,
          ...formData,
        }),
      }).then(() => router.push('/umsokn/yfirlit'));
    } else {
      setCurrentStep(currentStep + 1);
    }
    setSaveState('changed');
    // setLastChanged(new Date());
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    setSaveState('changed');
    //setLastChanged(new Date());
  };

  return (
    <>
      <Head>
        <title>Ísland.is | Umsókn um atvinnuleysisbætur</title>
      </Head>
      <Header />
      {
        <StyledPageWrapper>
          <GridContainer>
            <StyledGridRow>
              <Box
                display="flex"
                flexDirection={['columnReverse', 'columnReverse', 'row']}
                flexGrow={1}
              >
                <GridColumn span={['12/12', '12/12', '9/12']}>
                  <StyledMainWrapper>
                    <Box
                      background="white"
                      paddingY={8}
                      paddingX={[4, 4, 6, 12]}
                      marginRight={[0, 0, 2]}
                      borderRadius="large"
                    >
                      <Text variant="h2">{step?.title}</Text>
                      <Step
                        number={currentStep}
                        formData={formData}
                        setFormData={setFormData}
                        nextStep={nextStep}
                        previousStep={previousStep}
                      />
                    </Box>
                  </StyledMainWrapper>
                </GridColumn>
                <GridColumn span={['12/12', '12/12', '3/12']}>
                  <Box display={['none', 'none', 'block']}>
                    <Text variant="h4" marginTop={4}>
                      Umsókn um atvinnuleysisbætur
                    </Text>
                  </Box>
                  <FormStepper
                    steps={steps}
                    current={currentStep === 4 ? 7 : currentStep}
                  />
                  <StyledSavedWrapper>
                    <Box
                      marginTop={[0, 0, 4]}
                      display="flex"
                      alignItems="center"
                      justifyContent="spaceBetween"
                      padding={2}
                      borderRadius="large"
                      borderWidth="standard"
                      borderColor="blue200"
                      background="white"
                    >
                      <Box marginLeft={1} display="flex">
                        <Text variant="eyebrow">
                          {saveState === 'saving' && 'Vista gögn'}
                          {savedAt &&
                            saveState !== 'saving' &&
                            'Drög vistuð ' + format(savedAt, 'HH:mm')}
                        </Text>
                        {saveState === 'saving' && (
                          <Box marginLeft={1}>Loader</Box>
                        )}
                      </Box>
                      {saveState === 'saved' ? (
                        <Tag variant="darkerBlue">Vistað</Tag>
                      ) : (
                        <Tag variant="red">Breytt</Tag>
                      )}
                    </Box>
                  </StyledSavedWrapper>
                  <Box marginTop={6} display={['none', 'none', 'block']}>
                    <img src="/image/merki-skattsins.png" alt="Skatturinn" />
                  </Box>
                </GridColumn>
              </Box>
            </StyledGridRow>
          </GridContainer>
        </StyledPageWrapper>
      }
    </>
  );
};
