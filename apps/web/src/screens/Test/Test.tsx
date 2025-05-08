import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { is } from 'date-fns/locale/is';
import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
  Tag,
  Text,
} from '../../components/island-ui/core/src';
import { FormStepper, Step, ApplicationHeader } from '../../components';

import { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';

import * as styles from './Test.css';
import { stepTitles } from './steps/constants';

export const Test: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, _setFormData] = useState({
    gagnasofnun: false,
    orlof: false,
    atvinnurekstur: false,
    stadaVinnumarkadi: 'ekki-i-vinnu',
    lokUppsagnarfrests: new Date(2021, 7, 15).toISOString(),
    astaedaAtvinnuleysis: '',
    salary: 0,
    email: 'jokull.thordarson@email.is',
    mobilephone: '772-8391',
  });

  const [savedAt, setSavedAt] = useState(new Date());
  const [lastChanged, setLastChanged] = useState<Date | null>(null);
  const [saveState, setSaveState] = useState('saved');

  const setFormData = (data: any) => {
    _setFormData(data);
    setSaveState('changed');
    setLastChanged(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (saveState === 'changed' && lastChanged !== null) {
        if (Date.now() - lastChanged.getTime() > 3000) {
          // fetch('/api/save', {
          //   method: 'POST',
          //   body: JSON.stringify({ ...formData, step: currentStep }),
          // });
          setSaveState('saving');
        }
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
    () => stepTitles.find((step) => step.number === currentStep),
    [currentStep],
  );

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setSaveState('changed');
    setLastChanged(new Date());
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    setSaveState('changed');
    setLastChanged(new Date());
  };

  const onFinalStep = !(step && step.number <= stepTitles.length);

  return (
    <>
      <Head>
        <title>Skattframtal</title>
      </Head>
      <ApplicationHeader />
      {
        <div className={styles.StyledPageWrapper}>
          <GridContainer>
            <GridRow>
              <Box
                display="flex"
                flexDirection={['columnReverse', 'columnReverse', 'row']}
                flexGrow={1}
              >
                <GridColumn span={['12/12', '12/12', '9/12']}>
                  <div className={styles.StyledMainWrapper}>
                    <Box
                      background="white"
                      paddingY={8}
                      paddingX={[4, 4, 6, 12]}
                      marginRight={[0, 0, 2]}
                      borderRadius="large"
                    >
                      {!onFinalStep ? (
                        <>
                          <Text variant="h2">{step?.title}</Text>
                          <Step
                            number={currentStep}
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                            previousStep={previousStep}
                          />
                        </>
                      ) : (
                        <Stack space={3}>
                          <Text variant="h2">Skattframtal móttekið</Text>
                          <Text>
                            Skattframtal 2025 var skilað{' '}
                            {format(new Date(), 'd. MMMM yyyy', {
                              locale: is,
                            })}{' '}
                            klukkan{' '}
                            {format(new Date(), 'HH:MM', {
                              locale: is,
                            })}
                          </Text>
                          <Box display="flex" justifyContent="flexEnd">
                            <Button
                              onClick={() => {
                                window.location.href = '/';
                              }}
                              icon="arrowForward"
                            >
                              Skoða upplýsingasíðu
                            </Button>
                          </Box>
                        </Stack>
                      )}
                    </Box>
                  </div>
                </GridColumn>
                <GridColumn span={['12/12', '12/12', '3/12']}>
                  <Box display={['none', 'none', 'block']}>
                    <Text variant="h4" marginTop={4}>
                      Skattframtal 2025
                    </Text>
                  </Box>
                  <FormStepper steps={stepTitles} current={currentStep} />
                  {!onFinalStep && step.number > 1 && (
                    <div className={styles.StyledSavedWrapper}>
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
                            {saveState === 'saving' && 'Vista gögn...'}
                            {savedAt &&
                              saveState !== 'saving' &&
                              'Drög vistuð ' + format(savedAt, 'HH:mm')}
                          </Text>
                        </Box>
                        {saveState === 'saved' ? (
                          <Tag variant="darkerBlue">Vistað</Tag>
                        ) : (
                          <Tag variant="red">Breytt</Tag>
                        )}
                      </Box>
                    </div>
                  )}

                  <Box marginTop={6} display={['none', 'none', 'block']}>
                    <Image
                      width={300}
                      height={300}
                      src="/images/merki-skatturinn-med-texta.svg"
                      alt=""
                    />
                  </Box>
                </GridColumn>
              </Box>
            </GridRow>
          </GridContainer>
        </div>
      }
    </>
  );
};
