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

export const DebtStep = ({ previousStep, nextStep }: StepProps) => {
  return (
    <Box paddingTop={3}>
      <Stack space={3}>
        <Text variant="h4">Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota</Text>
        <GridRow>
          <GridColumn span="1/2">
            <Box>
              <Text variant="small">Staðsetning íbúðarhúsnæðis</Text>
              <Text variant="h4">Bláfjallagata 12</Text>
            </Box>
          </GridColumn>
          <GridColumn span="1/2">
            <Box>
              <Text variant="small">Kaupár</Text>
              <Text variant="h4">2021</Text>
            </Box>
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span="1/2">
            <Input
              name="fastanumer-eignar"
              size="xs"
              label="Lánsveitandi"
              value={'Íslandsbanki hf.'}
              disabled
            />
          </GridColumn>
          <GridColumn span="1/2">
            <Input
              name="fastanumer-eignar"
              size="xs"
              label="Kennitala lánsveitanda"
              value={'491008-0160'}
              disabled
            />
          </GridColumn>
        </GridRow>

        <GridRow rowGap={2}>
          <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
            <Input
              name="fastanumer-eignar"
              size="xs"
              label="Lántökudagur"
              value={'15.06.2021'}
              disabled
            />
          </GridColumn>
          <GridColumn span={['1/1', '1/2', '1/1', '1/1', '1/2']}>
            <Input
              name="nafn-launagreidanda"
              size="xs"
              label="Lánstími í árum"
              value="30"
              disabled
            />
          </GridColumn>
          <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
            <Input
              name="launatekjur"
              size="xs"
              label="Yfirtökudagur"
              value=""
              disabled
            />
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span="1/2">
            <Input
              name="fastanumer-eignar"
              size="xs"
              label="Heildargreiðslur ársins"
              value={'2.280.000'}
              disabled
            />
          </GridColumn>
          <GridColumn span="1/2">
            <Input
              name="fastanumer-eignar"
              size="xs"
              label="Afborgun á nafnverði"
              value={'1.360.000'}
              disabled
            />
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span="1/2">
            <Input
              name="fastanumer-eignar"
              size="xs"
              label="Vaxtagjöld"
              value={'920.000'}
              disabled
            />
          </GridColumn>
          <GridColumn span="1/2">
            <Input
              name="fastanumer-eignar"
              size="xs"
              label="Eftirstöðvar skulda"
              value={'28.540.000'}
              disabled
            />
          </GridColumn>
        </GridRow>

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
