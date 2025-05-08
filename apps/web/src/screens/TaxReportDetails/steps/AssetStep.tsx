import {
  Box,
  Button,
  GridColumn,
  GridRow,
  Input,
  Stack,
  Text,
} from '@/components/island-ui/core/src';
import type { StepProps } from './types';

export const AssetStep = ({ previousStep, nextStep }: StepProps) => {
  return (
    <Box paddingTop={3}>
      <Stack space={3}>
        <Text>
          Upplýsingar frá Húsnæðis- og mannvirkjastofnun um mat fasteigna í
          árslok 2024 eru áritaðar á framtalið.
        </Text>
        <Text variant="h4">Innlendar fasteignir samkvæmt fasteignamati.</Text>
        <Stack space={8}>
          <GridRow rowGap={2}>
            <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
              <Input
                name="fastanumer-eignar"
                size="xs"
                label="Fastanúmer eignar"
                value={2109876}
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/2', '1/1', '1/1', '1/2']}>
              <Input
                name="nafn-launagreidanda"
                size="xs"
                label="Nafn launagreiðanda"
                value="Bláfjallagata 12"
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
              <Input
                name="launatekjur"
                size="xs"
                label="Fasteignamat"
                value="52.000.000"
                disabled
              />
            </GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn span={['1/1', '3/4', '1/1', '1/1', '3/4']} />
            <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
              <Input
                name="samtals"
                size="xs"
                label="Samtals "
                value="52.000.000"
                disabled
              />
            </GridColumn>
          </GridRow>
        </Stack>

        <Box
          marginTop={8}
          display="flex"
          justifyContent="spaceBetween"
          marginBottom={4}
        >
          <Button
            preTextIcon="arrowBack"
            variant="ghost"
            onClick={previousStep}
          >
            Til baka
          </Button>
          <Button icon="arrowForward" onClick={nextStep}>
            Áfram í næsta skref
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
