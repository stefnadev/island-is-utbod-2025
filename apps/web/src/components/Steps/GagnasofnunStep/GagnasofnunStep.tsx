import { StepProps } from '../Step/Step';
import { Box, Button, Checkbox, Text } from '../../island-ui/core/src';

export const GagnasofnunStep = ({
  formData,
  setFormData,
  nextStep,
  previousStep,
}: StepProps) => (
  <>
    <Box marginY={4}>
      <Text marginY={2} variant="h3">
        Eftirfarandi gögn um þig verða sótt rafrænt til að einfalda
        umsóknarferlið.
      </Text>
      <Box paddingY={2}></Box>
    </Box>
    <Box
      background="blue100"
      padding={3}
      borderRadius="large"
      borderWidth="standard"
      borderStyle="solid"
      borderColor="blue200"
      className="cypress-concent-data-gathering"
    >
      <Checkbox
        id="gagnasofnun"
        label={'Ég skil að ofangreindra gagna verður aflað í umsóknarferlinu'}
        checked={formData.gagnasofnun}
        onChange={(e) =>
          setFormData({ ...formData, gagnasofnun: e.target.checked })
        }
      />
    </Box>
    <Box
      marginTop={8}
      display="flex"
      flexDirection="rowReverse"
      className="cypress-next-step"
      marginBottom={4}
    >
      <Button
        icon="arrowForward"
        onClick={nextStep}
        disabled={!formData.gagnasofnun}
      >
        Áfram í næsta skref
      </Button>
    </Box>
  </>
);
