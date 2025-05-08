import { StepProps } from '../Step/Step';
import { Box, Button, Checkbox, Stack, Text } from '../../island-ui/core/src';

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
      <Box paddingY={2}>
        <Stack space={3}>
          <Box>
            <Text variant="h5" color="blue400">
              Skatturinn
            </Text>
            <Text>Upplýsingar um tekjur, eignir og skuldir.</Text>
          </Box>
          <Box>
            <Text variant="h5" color="blue400">
              Húsnæðis- og mannvirkjastofnun
            </Text>
            <Text>Upplýsingar um mat fasteigna í lok árs.</Text>
          </Box>
          <Box>
            <Text variant="h5" color="blue400">
              Þjóðskrá
            </Text>
            <Text>Upplýsingar um þig og fjölskylduhagi þína.</Text>
          </Box>
          <Box>
            <Text variant="h5" color="blue400">
              Samgöngustofa
            </Text>
            <Text>Upplýsingar um ökutæki sem skráð eru á þig.</Text>
          </Box>
        </Stack>
      </Box>
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
