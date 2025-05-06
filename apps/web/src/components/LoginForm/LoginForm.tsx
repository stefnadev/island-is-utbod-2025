import React, { useState } from 'react';
/*import {
  Box,
  Button,
  Input,
  Link,
  Logo,
  Text,
} from '@island.is/island-ui/core';*/
import { Box, Button, Input, Text, LinkV2 } from '../island-ui/core/src/index';
import * as styles from './LoginForm.css';
//import { useForm } from 'react-hook-form';
//import useUser from '../../lib/useUser';
//import fetchJson from '../../lib/fetchJson';

export const LoginForm = () => {
  // Check if the user is already logged in and redirect forward if that's the case.
  /*const { mutateUser } = useUser({
    // TODO: Replace hardcoded redirect URL with a reference to known URLs.
    // TODO: Add support for "next" query parameter, so that we can redirect the user to the originally requested URL, in the case where the User is not authenticated and trying to load a restricted page.
    redirectTo: '/umsokn',
    redirectIfFound: true,
  });

  const { register, errors, trigger, setError } = useForm();
  const [buttonIsDisabled, setButtonDisabled] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState(
    'Símanúmerið var rangt skráð',
  );
  const [pageState, setPageState] = useState(0);
  const [securityCode, setSecurityCode] = useState('1234');

  const handleLogin = () => {
    trigger(['phone']).then((isValid: any) => {
      if (isValid) {
        const body = {
          phoneNumber: phoneNumber.replace('-', ''),
        };

        fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
          .then((data: any) => {
            setSecurityCode(
              Math.floor(Math.random() * (9999 - 1000) + 1000).toString(),
            );
            setPageState(1);
            let n: ReturnType<typeof setTimeout>;
            n = setTimeout(() => {
              mutateUser(data);
            }, 2000);
          })
          .catch((error: { message: React.SetStateAction<string> }) => {
            setPageState(0);
            setError('phone', error);
            setPhoneErrorMessage(error.message);
          });
      }
    });
  };

  const handleInputKeyDown = (e) => {
    if (e.target.value.length === 3 && e.code !== 'Backspace') {
      e.target.value = e.target.value + '-';
    }
    if (e.code === 'Enter') {
      handleLogin();
    }
  };

  const handleInputChange = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9\-]/g, '')
      .replace(/[\-]+/g, '-');
    const value = e.target.value;
    if (value.length === 7 && value.indexOf('-') === -1) {
      e.target.value = value.substr(0, 3) + '-' + value.substr(3, value.length);
    }
    setButtonDisabled(e.target.value.length !== 8);
    setPhoneNumber(value);
  };*/
  const [buttonIsDisabled, setButtonDisabled] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pageState, setPageState] = useState(0);
  const [securityCode, setSecurityCode] = useState('1234');

  const handleInputKeyDown = (e: {
    target: { value: string | any[] };
    code: string;
  }) => {
    if (e.target.value.length === 3 && e.code !== 'Backspace') {
      e.target.value = e.target.value + '-';
    }
    if (e.code === 'Enter') {
      //handleLogin();
    }
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    e.target.value = e.target.value
      .replace(/[^0-9\-]/g, '')
      .replace(/[\-]+/g, '-');
    const value = e.target.value;
    if (value.length === 7 && value.indexOf('-') === -1) {
      e.target.value = value.substr(0, 3) + '-' + value.substr(3, value.length);
    }
    setButtonDisabled(e.target.value.length !== 8);
    setPhoneNumber(value);
  };
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginFormWrapper}>
        <div className={styles.loginFormWidth}>
          <div className={styles.text}>
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
                  name={'login-phonenumber'}
                  inputMode="numeric"
                  type="tel"
                  label="Símanúmer"
                  backgroundColor="blue"
                  placeholder="000-0000"
                  size="sm"
                />

                <Button
                  id="submit"
                  size="small"
                  disabled={buttonIsDisabled}
                  fluid
                >
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
          </div>
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

  /*return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.loginFormWrapper}>
          <Box
            border="standard"
            borderRadius="large"
            paddingTop={8}
            marginBottom={4}
          >
            <div className={styles.logo}>
              <Logo width={160} />
            </div>
            <div className={styles.loginFormWidth}>
              <div className={styles.text}>
                <Text variant={'eyebrow'} color={'blue400'} marginBottom={1}>
                  Rafræn skilríki í síma
                </Text>
                {pageState === 0 && (
                  <>
                    <Text variant="h2" marginBottom={1}>
                      Skráðu þig inn
                    </Text>
                    <Text variant="intro" marginBottom={5}>
                      á Mínar síður Ísland.is
                    </Text>
                  </>
                )}
                {pageState === 1 && (
                  <>
                    <Box
                      background="blue100"
                      paddingY={2}
                      marginTop={10}
                      marginBottom={6}
                    >
                      <Text variant="intro">Öryggistalan þín er:</Text>
                      <Text variant="h1">{securityCode}</Text>
                    </Box>

                    <Text marginBottom={2}>
                      Staðfestu auðkenninguna ef öryggistalan er sú sama og
                      birtist á símanum þínum.
                    </Text>
                    <Text marginBottom={10}>
                      Ath. að öryggistalan er ekki PIN-númerið á skilríkjunum
                      þínum.
                    </Text>
                  </>
                )}
              </div>
              {pageState === 0 && (
                <>
                  <Box marginBottom={4} className="cypress-input-phone-number">
                    <Input
                      label="Símanúmer"
                      id="phone"
                      name="phone"
                      placeholder="000-0000"
                      backgroundColor="blue"
                      type="tel"
                      maxLength={8}
                      onChange={handleInputChange}
                      onKeyDown={handleInputKeyDown}
                      ref={register({
                        required: true,
                        pattern: /^[0-9]+(-[0-9]+)+$/,
                        minLength: 8,
                      })}
                      hasError={errors.phone !== undefined}
                      errorMessage={phoneErrorMessage}
                    />
                  </Box>
                  <Box
                    marginBottom={10}
                    textAlign="center"
                    className="cypress-submit-login"
                  >
                    <Button
                      id="submit"
                      onClick={handleLogin}
                      disabled={buttonIsDisabled}
                    >
                      Auðkenna
                    </Button>
                  </Box>
                </>
              )}
            </div>
          </Box>

          <Link href="https://island.is/innskraningarthjonusta">
            <Text variant="eyebrow" color="blue400">
              Þarftu aðstoð?
            </Text>
          </Link>
        </div>
      </div>
    </>
  );*/
};
