import React from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Input, Text, LinkV2 } from '../island-ui/core/src/index';
import * as styles from './LoginForm.css';

export const LoginForm = () => {
  const router = useRouter();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginFormWrapper}>
        <div className={styles.loginFormWidth}>
          <form className={styles.text} action="/api/login" method="get">
            <Box border="standard" borderRadius="large" paddingTop={8}>
              <div className={styles.logo}>Mynd hérna</div>

              <Box
                marginBottom={10}
                textAlign="center"
                marginLeft={2}
                marginRight={2}
              >
                <Text variant={'eyebrow'} color={'blue400'} marginBottom={1}>
                  Rafræn skilríki í síma
                </Text>
                <Text variant="h2" marginBottom={1}>
                  Skráðu þig inn
                </Text>
                <Text variant={'eyebrow'} fontWeight="light" marginBottom={1}>
                  á þjónustuvef Skattsins
                </Text>

                <Input
                  name="phonenumber"
                  inputMode="numeric"
                  type="tel"
                  label="Símanúmer"
                  backgroundColor="blue"
                  placeholder="000-0000"
                  size="sm"
                  errorMessage={
                    router.query?.invalidLogin
                      ? 'Símanúmer finnst ekki'
                      : undefined
                  }
                />

                <Button id="submit" size="small" fluid type="submit">
                  Auðkenna
                </Button>
                <Box
                  className={styles.dividerBackground}
                  marginTop={4}
                  marginBottom={4}
                >
                  <div className={styles.dividerText}>
                    <Text variant="eyebrow">Eða skráðu þig inn með</Text>
                  </div>
                </Box>
                <Box marginBottom={2}>
                  <Button
                    id="audkennisappid"
                    variant="ghost"
                    size="small"
                    fluid
                  >
                    Auðkennisappinu
                  </Button>
                </Box>
                <Button
                  id="skilriki-a-korti"
                  variant="ghost"
                  size="small"
                  fluid
                >
                  Skilríki á korti
                </Button>
              </Box>
            </Box>
          </form>
          <Box display="flex" justifyContent="spaceBetween">
            <LinkV2 href={''} color="blue600">
              Skilmálar
            </LinkV2>
            <Box display="flex">
              <LinkV2 href={''} color="blue600">
                English
              </LinkV2>
              |
              <LinkV2 href={''} color="blue600">
                Aðstoð
              </LinkV2>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};
