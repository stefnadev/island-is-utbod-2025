import { StepProps } from '../Step/Step';
import {
  Box,
  Button,
  DatePicker,
  RadioButton,
  Stack,
  Text,
} from '../../island-ui/core/src';
import { formLabels } from '../../utils/formOptions';

export const VinnumarkadurStep = ({
  formData,
  setFormData,
  nextStep,
  previousStep,
}: StepProps) => (
  <>
    <Text marginTop={6} marginBottom={2} variant="h3">
      Hefur þú verið með eigin atvinnurekstur síðastliðna 36 mánuði?
    </Text>
    <Stack space={1}>
      <RadioButton
        id="yes1"
        label="Já"
        checked={formData.atvinnurekstur === true}
        onChange={(e) => setFormData({ ...formData, atvinnurekstur: true })}
      />
      <RadioButton
        id="no1"
        label="Nei"
        checked={formData.atvinnurekstur === false}
        onChange={(e) => setFormData({ ...formData, atvinnurekstur: false })}
      />
    </Stack>
    <Text marginTop={4} marginBottom={2} variant="h3">
      Staða á vinnumarkaði í dag
    </Text>
    <Stack space={1}>
      <RadioButton
        id="ekki-i-vinnu"
        label={formLabels.stadaVinnumarkadi['ekki-i-vinnu']}
        checked={formData.stadaVinnumarkadi === 'ekki-i-vinnu'}
        onChange={(e) =>
          setFormData({ ...formData, stadaVinnumarkadi: 'ekki-i-vinnu' })
        }
      />
      <RadioButton
        id="hlutastarf"
        label={formLabels.stadaVinnumarkadi['hlutastarf']}
        checked={formData.stadaVinnumarkadi === 'hlutastarf'}
        onChange={(e) =>
          setFormData({ ...formData, stadaVinnumarkadi: 'hlutastarf' })
        }
      />
      <RadioButton
        id="tilfallandi-vinna"
        label={formLabels.stadaVinnumarkadi['tilfallandi-vinna']}
        checked={formData.stadaVinnumarkadi === 'tilfallandi-vinna'}
        onChange={(e) =>
          setFormData({ ...formData, stadaVinnumarkadi: 'tilfallandi-vinna' })
        }
      />
    </Stack>
    <Text marginTop={4} marginBottom={2} variant="h3">
      Uppgjör frá launagreiðanda
    </Text>
    <Text marginY={2}>Áttu ótekið orlof við starfslok?</Text>
    <Stack space={1}>
      <RadioButton
        id="yes2"
        label="Já"
        checked={formData.orlof === true}
        onChange={(e) => setFormData({ ...formData, orlof: true })}
      />
      <RadioButton
        id="no2"
        label="Nei"
        checked={formData.orlof === false}
        onChange={(e) => setFormData({ ...formData, orlof: false })}
      />
    </Stack>
    <Text marginTop={4} marginBottom={2} variant="h3">
      Hvenær lýkur uppsagnarfresti
    </Text>
    <Box marginY={4}>
      <DatePicker
        label="Dagsetning"
        locale="is"
        placeholderText="Veldu dagsetningu"
        selected={new Date(formData.lokUppsagnarfrests)}
        required
        handleChange={(date: { toISOString: () => any }) =>
          setFormData({ ...formData, lokUppsagnarfrests: date.toISOString() })
        }
      />
    </Box>
    <Text marginTop={4} marginBottom={2} variant="h3">
      Ástæða atvinnuleysis
    </Text>
    <Box marginY={4}></Box>
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
