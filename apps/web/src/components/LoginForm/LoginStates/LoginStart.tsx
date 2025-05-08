import {
  Box,
  Button,
  Checkbox,
  Input,
  Text,
} from '@/components/island-ui/core/src';

import * as styles from './LoginStart.css';

type LoginStartProps = {
  errorMessage?: string;
  initialPhonenumber?: string | number;
};

export const LoginStart = ({
  errorMessage,
  initialPhonenumber,
}: LoginStartProps) => {
  return (
    <div>
      <Box textAlign="left" marginBottom={2} marginTop={2}>
        <Input
          name="phonenumber"
          inputMode="numeric"
          type="tel"
          label="Símanúmer"
          backgroundColor="blue"
          placeholder="000-0000"
          size="sm"
          defaultValue={initialPhonenumber}
          errorMessage={errorMessage}
        />
      </Box>
      <Box display="flex" textAlign="left" marginBottom={3}>
        <Checkbox label="Muna símanúmer" labelVariant="medium" />
      </Box>
      <Button id="submit" size="medium" fluid type="submit">
        Auðkenna
      </Button>
      <Box className={styles.dividerBackground} marginTop={4} marginBottom={4}>
        <div className={styles.dividerText}>
          <Text variant="eyebrow" fontWeight="regular">
            Eða skráðu þig inn með
          </Text>
        </div>
      </Box>
      <Box marginBottom={2}>
        <Button id="audkennisappid" variant="ghost" size="small" fluid>
          Auðkennisappinu
        </Button>
      </Box>
      <Button id="skilriki-a-korti" variant="ghost" size="small" fluid>
        Skilríki á korti
      </Button>
    </div>
  );
};
export default LoginStart;
