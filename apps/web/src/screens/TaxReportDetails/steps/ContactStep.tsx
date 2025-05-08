import { Box, Button, Text } from '@/components/island-ui/core/src';
import type { StepProps } from './types';

export const ContactStep = ({ previousStep, nextStep }: StepProps) => {
  return (
    <>
      <Text>
        Svo við getum sent þér ábendingar eða haft samband, ef þess þarf.
      </Text>

      <Box
        marginTop={8}
        display="flex"
        justifyContent="spaceBetween"
        marginBottom={4}
      >
        <Button preTextIcon="arrowBack" variant="ghost" onClick={previousStep}>
          Til baka
        </Button>
        <Button icon="arrowForward" onClick={nextStep}>
          Áfram í næsta skref
        </Button>
      </Box>
    </>
  );
};
