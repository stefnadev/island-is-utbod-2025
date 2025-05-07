import {
  Box,
  LinkV2,
  Logo,
  Stack,
  Text,
} from '@/components/island-ui/core/src';

import LoadingDots from '@/components/island-ui/core/src/lib/LoadingDots/LoadingDots';
import * as styles from '../LoginForm.css';

type LoginConfirmProp = {
  securityCode?: string;
};

export const LoginConfirm = ({ securityCode }: LoginConfirmProp) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginFormWrapper}>
        <div className={styles.loginFormWidth}>
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

              <Stack space={2}>
                <Box
                  background="backgroundBrandMinimal"
                  padding={2}
                  borderRadius="standard"
                >
                  <Stack space={1}>
                    <Text variant="eyebrow" fontWeight="light">
                      Öryggistalan þín er:
                    </Text>
                    <Text as="p" variant="h2">
                      {securityCode}
                    </Text>
                  </Stack>
                </Box>

                <LoadingDots />
                <Text variant="small" fontWeight="light">
                  Staðfestu auðkenninguna ef öryggistalan er sú sama og birtist
                  á símanum þínum.
                </Text>
                <Text variant="small" fontWeight="light">
                  Athugið að öryggistalan er ekki PIN-númerið á skilríkjunum
                  þínum.
                </Text>
              </Stack>
            </Box>
          </Box>

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
export default LoginConfirm;
