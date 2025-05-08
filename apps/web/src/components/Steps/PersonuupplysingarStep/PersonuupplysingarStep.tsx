import { StepProps } from '../Step/Step';
import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Input,
  Text,
} from '../../island-ui/core/src';

export const PersonuupplysingarStep = ({
  formData,
  setFormData,
  nextStep,
}: StepProps) => (
  <>
    <Box marginY={3}>
      <Box marginBottom={3}>
        <Text>
          Svo við getum sent þér ábendingar eða haft samband, ef þess þarf.
        </Text>
      </Box>
    </Box>
    <Box marginY={4}>
      <Input
        id="email"
        name={'value'}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        label={'Netfang'}
        type="text"
        disabled
      />
    </Box>
    <GridContainer>
      <GridRow>
        <GridColumn span="6/12">
          <Input
            id="homephone"
            name={'value'}
            value={formData.homephone}
            label={'Heimasími'}
            type="text"
            disabled
          />
        </GridColumn>
        <GridColumn span="6/12">
          <Input
            id="mobilephone"
            name={'value'}
            value={formData.mobilephone}
            label={'Farsími'}
            type="text"
            disabled
          />
        </GridColumn>
      </GridRow>
    </GridContainer>

    <Box marginTop={8} display="flex" justifyContent="flexEnd" marginBottom={4}>
      <Button icon="arrowForward" onClick={nextStep}>
        Áfram í næsta skref
      </Button>
    </Box>
  </>
);
