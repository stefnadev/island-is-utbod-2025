import React from 'react';

import { Box, Text, LinkV2, Logo } from '../island-ui/core/src/index';
import * as styles from './LoginForm.css';
import LoginStart from './LoginStates/LoginStart';

interface LoginFormProps {
  errorMessage?: string;
  phonenumber?: string;
  securityCode?: string;
}

export const LoginForm = ({
  errorMessage,
  phonenumber: initialPhonenumber,
  securityCode,
}: LoginFormProps) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginFormWrapper}>
        <div className={styles.loginFormWidth}>
          <form className={styles.text} action="/api/login" method="get">
            <Box border="standard" borderRadius="large" paddingTop={8}>
              <div className={styles.logo}>
                <Logo width={160} />
              </div>

              <Box
                marginBottom={5}
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
                <LoginStart
                  errorMessage={errorMessage}
                  initialPhonenumber={initialPhonenumber}
                />
              </Box>
            </Box>
          </form>
          <Box
            display="flex"
            justifyContent="spaceBetween"
            marginTop={1}
            marginX={1}
          >
            <LinkV2 href={''}>
              <Text variant="small" color="blue600" fontWeight="medium">
                Skilmálar
              </Text>
            </LinkV2>
            <Box display="flex">
              <LinkV2 href={''}>
                <Text variant="small" color="blue600" fontWeight="medium">
                  English
                </Text>
              </LinkV2>
              <Box marginX={1}>
                <Text variant="small" color="blue600">
                  |
                </Text>
              </Box>
              <LinkV2 href={''}>
                <Text variant="small" color="blue600" fontWeight="medium">
                  Aðstoð
                </Text>
              </LinkV2>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};
