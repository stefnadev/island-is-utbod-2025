import { StepProps } from '../Step/Step';
import { Box, Button, Text } from '../../../components/island-ui/core/src';

import { format } from 'date-fns';

export const YfirlitStep = ({
  formData,
  setFormData,
  nextStep,
  previousStep,
}: StepProps) => {
  return (
    <Box>
      <Text marginTop={6} marginBottom={2} variant="h3" color="blue600">
        Persónuupplýsingar
      </Text>
      <Text>
        <b>Nafn:</b>
        {formData.fullName}
      </Text>
      <Text>
        <b>Heimili:</b>
        {formData.addressStreet}
      </Text>
      <Text>
        <b>Póstnúmer:</b>
        {formData.addressPostalCode}
      </Text>
      <Text>
        <b>Staður:</b>
        {formData.addressCity}
      </Text>
      <Text>
        <b>Kennitala:</b>
        {formData.nationalIdentificationNumber}
      </Text>
      <Text>
        <b>Netfang:</b>
        {formData.email}
      </Text>
      <Text>
        <b>Símanúmer:</b>
        {formData.phoneNumber}
      </Text>
      <Text>
        <b>Börn á framfæri:</b>
        {formData.children.length}
      </Text>
      <hr style={{ opacity: 0.4, marginTop: '3em' }} />
      <Text marginTop={6} marginBottom={2} variant="h3" color="blue600">
        Staða á vinnumarkaði
      </Text>
      <Text>
        <b>Hefur þú verið með eigin atvinnurekstur síðastliðna 36 mánuði:</b>
        {formData.atvinnurekstur ? 'Já' : 'Nei'}
      </Text>
      <Text>
        <b>Staða á vinnumarkaði:</b>
        {formData.stadaVinnumarkadi}
      </Text>
      <Text>
        <b>Áttu ótekið orlof:</b>
        {formData.otekidOrlof ? 'Já' : 'Nei'}
      </Text>
      <Text>
        <b>Hvenær lýkur uppsagnarfresti:</b>
        {format(new Date(formData.lokUppsagnarfrests), 'dd. MMMM yyyy', {})}
      </Text>
      <Text>
        <b>Ástæða atvinnuleysis:</b>
        {formData.astaedaAtvinnuleysis}
      </Text>
      <hr style={{ opacity: 0.4, marginTop: '3em' }} />
      <Text marginTop={6} marginBottom={2} variant="h3" color="blue600">
        Áætluð mánaðarleg útborgun
      </Text>
      <Box
        display={'inlineBlock'}
        padding={2}
        borderWidth="standard"
        borderStyle="solid"
        borderColor="blue200"
        borderRadius="large"
        background="blue100"
      >
        <Text variant="h2" color="blue400">
          {'0 kr.'}
        </Text>
      </Box>
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
          Senda umsókn
        </Button>
      </Box>
    </Box>
  );
};
