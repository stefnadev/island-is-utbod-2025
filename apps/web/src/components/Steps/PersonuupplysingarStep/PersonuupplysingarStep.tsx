import { StepProps } from '../Step/Step';
import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Input,
} from '../../island-ui/core/src';

export const PersonuupplysingarStep = ({
  formData,
  setFormData,
  nextStep,
  previousStep,
}: StepProps) => (
  <>
    <Box marginY={4} className="cypress-personal-data-full-name">
      <Input
        id="fullName"
        name={'value'}
        value={formData.fullName}
        label={'Nafn'}
        type="text"
        disabled
        required
      />
    </Box>
    <Box marginY={4}>
      <Input
        id="addressStreet"
        name={'value'}
        value={formData.addressStreet}
        label={'Heimili'}
        type="text"
        disabled
        required
      />
    </Box>
    <GridContainer>
      <GridRow>
        <GridColumn span="5/12">
          <Input
            id="addressPostalCode"
            name={'value'}
            value={formData.addressPostalCode}
            label={'Póstnúmer'}
            type="text"
            disabled
            required
          />
        </GridColumn>
        <GridColumn span="7/12">
          <Input
            id="addressCity"
            name={'value'}
            value={formData.addressCity}
            label={'Staður'}
            type="text"
            disabled
            required
          />
        </GridColumn>
      </GridRow>
    </GridContainer>
    <Box marginY={4}>
      <Input
        id="nationalIdentificationNumber"
        name={'value'}
        value={formData.nationalIdentificationNumber}
        label={'Kennitala'}
        type="text"
        disabled
        required
      />
    </Box>
    <Box marginY={4}>
      <Input
        id="email"
        name={'value'}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        label={'Netfang'}
        type="text"
        required
      />
    </Box>
    <Box marginY={4}>
      <Input
        id="phoneNumber"
        name={'value'}
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
        label={'Símanúmer'}
        type="text"
        required
      />
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
        Áfram í næsta skref
      </Button>
    </Box>
  </>
);
