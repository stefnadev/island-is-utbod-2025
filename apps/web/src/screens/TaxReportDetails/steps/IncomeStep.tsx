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

export const IncomeStep = ({ previousStep, nextStep }: StepProps) => {
  return (
    <>
      <Text variant="h4">Launatekjur og starfstengdargreiðslur</Text>
      <Text>
        Fjárhæðin eru heildartekjur þínar hjá vinnuveitanda áður en tekið er
        tillit til greiddra skatta í staðgreiðslu og iðgjalds í lífeyrissjóð.
        Því kann fjárhæðin að vera hærri en útgreidd laun.
      </Text>
      <Stack space={8}>
        <Stack space={3}>
          <GridRow rowGap={2}>
            <GridColumn span={['1/1', '1/4']}>
              <Input
                name="1"
                size="xs"
                label="Kennitala"
                value={'120389-4564'}
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/2']}>
              <Input
                name="2"
                size="xs"
                label="Nafn launagreiðanda"
                value="Norðurljós Software ehf."
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/4']}>
              <Input
                name="launatekjur"
                size="xs"
                label="Launatekjur"
                value="9.360.000"
                disabled
              />
            </GridColumn>
          </GridRow>
          <GridRow rowGap={2}>
            <GridColumn span={['1/1', '1/4']}>
              <Input
                name="fastanumer-eignar"
                size="xs"
                label="Kennitala"
                value={'120389-4569'}
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/2']}>
              <Input
                name="nafn-launagreidanda"
                size="xs"
                label="Nafn launagreiðanda"
                value="Mús & Merki ehf."
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/4']}>
              <Input
                name="launatekjur"
                size="xs"
                label="Launatekjur"
                value="900.000"
                disabled
              />
            </GridColumn>
          </GridRow>
        </Stack>

        <GridRow>
          <GridColumn span="3/4" />
          <GridColumn span="1/4">
            <Input
              name="samtals"
              size="xs"
              label="Samtals launatekjur"
              value="10.260.000"
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
