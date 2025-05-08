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
import { parseSalary } from '../../../utils/numberFormat';

export const IncomeStep = ({
  formData,
  setFormData,
  previousStep,
  nextStep,
}: StepProps) => {
  const launatekjur1 = parseSalary(formData.launatekjur1 ?? '9.360.000');
  const launatekjur2 = parseSalary(formData.launatekjur2 ?? '900.000');

  const totalLaunatekjur = launatekjur1 + launatekjur2;
  return (
    <Box paddingTop={3}>
      <Stack space={3}>
        <Text variant="h4">Launatekjur og starfstengdar greiðslur</Text>
        <Text>
          Fjárhæðin eru heildartekjur þínar hjá vinnuveitanda áður en tekið er
          tillit til greiddra skatta í staðgreiðslu og iðgjalds í lífeyrissjóð.
          Því kann fjárhæðin að vera hærri en útgreidd laun.
        </Text>
        <Stack space={8}>
          <Stack space={8}>
            <GridRow rowGap={2}>
              <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
                <Input
                  name="1"
                  size="xs"
                  label="Kennitala"
                  value={'120389-4564'}
                  disabled
                />
              </GridColumn>
              <GridColumn span={['1/1', '1/2', '1/1', '1/1', '1/2']}>
                <Input
                  name="2"
                  size="xs"
                  label="Nafn launagreiðanda"
                  value="Norðurljós Software ehf."
                  disabled
                />
              </GridColumn>
              <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
                <Input
                  name="launatekjur1"
                  size="xs"
                  label="Launatekjur"
                  defaultValue="9.360.000"
                  value={formData.launatekjur1}
                  onChange={(e) =>
                    setFormData({ ...formData, launatekjur1: e.target.value })
                  }
                />
              </GridColumn>
            </GridRow>
            <GridRow rowGap={2}>
              <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
                <Input
                  name="fastanumer-eignar"
                  size="xs"
                  label="Kennitala"
                  value={'120389-4569'}
                  disabled
                />
              </GridColumn>
              <GridColumn span={['1/1', '1/2', '1/1', '1/1', '1/2']}>
                <Input
                  name="nafn-launagreidanda"
                  size="xs"
                  label="Nafn launagreiðanda"
                  value="Mús & Merki ehf."
                  disabled
                />
              </GridColumn>
              <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
                <Input
                  name="launatekjur2"
                  size="xs"
                  label="Launatekjur"
                  defaultValue="900.000"
                  value={formData.launatekjur2}
                  type="number"
                  onChange={(e) =>
                    setFormData({ ...formData, launatekjur2: e.target.value })
                  }
                />
              </GridColumn>
            </GridRow>
          </Stack>

          <GridRow>
            <GridColumn span={['1/1', '3/4', '1/1', '1/1', '3/4']} />
            <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
              <Input
                name="samtals"
                size="xs"
                label="Samtals launatekjur"
                value={totalLaunatekjur.toLocaleString('is-IS')}
                disabled
              />
            </GridColumn>
          </GridRow>
        </Stack>

        <Box marginTop={5}>
          <Text variant="h4">Ökutækjastyrkur. Dagpeningar. Hlunnindi</Text>
        </Box>
        <GridRow>
          <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
            <Input
              name="Dagpeningar"
              size="xs"
              label="Dagpeningar"
              value="120.000"
              disabled
            />
          </GridColumn>
        </GridRow>

        <Box marginTop={5}>
          <Text variant="h4">
            Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar
            bótagreiðslur, styrkir o.fl.
          </Text>
        </Box>
        <Stack space={6}>
          <GridRow rowGap={1}>
            <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
              <Input
                name="1"
                size="xs"
                label=" "
                value={'Norðurljós Software ehf.'}
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/2', '1/1', '1/1', '1/2']}>
              <Input
                name="2"
                size="xs"
                label=" "
                value="Íþróttastyrkur"
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
              <Input
                name="launatekjur"
                size="xs"
                label=" "
                value="75.000"
                disabled
              />
            </GridColumn>
          </GridRow>
          <GridRow rowGap={1}>
            <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
              <Input
                name="fastanumer-eignar"
                size="xs"
                label=" "
                value={'VR'}
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/2', '1/1', '1/1', '1/2']}>
              <Input
                name="nafn-launagreidanda"
                size="xs"
                label=" "
                value="Starfsmenntastyrkur"
                disabled
              />
            </GridColumn>
            <GridColumn span={['1/1', '1/4', '1/1', '1/1', '1/4']}>
              <Input
                name="launatekjur"
                size="xs"
                label=" "
                value="130.000"
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
