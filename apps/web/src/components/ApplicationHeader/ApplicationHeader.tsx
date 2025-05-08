import {
  Box,
  ContentBlock,
  Logo,
  LinkV2 as Link,
  DropdownMenu,
  Text,
  Hidden,
} from '@/components/island-ui/core/src';
import * as styles from './ApplicationHeader.css';

export const ApplicationHeader = () => {
  return (
    <>
      <header>
        <Box width="full" paddingY={4}>
          <ContentBlock>
            <Box
              display="flex"
              justifyContent="spaceBetween"
              alignItems="center"
              height="full"
              background="white"
              paddingX={[2, 2, 4, 4, 6]}
            >
              <Box display="flex" alignItems="center">
                <Link href="/">
                  <Hidden above="sm">
                    <Logo width={40} iconOnly />
                  </Hidden>
                  <Hidden below="md">
                    <Logo width={160} />
                  </Hidden>
                </Link>
                <div
                  className={styles.textContainer}
                  style={{
                    borderLeft: '2px solid #f8f5fa',
                  }}
                >
                  <Text variant="eyebrow">Skatturinn</Text>
                  <Text>Skattframtal</Text>
                </div>
              </Box>
              <Box display="flex" alignItems="center" flexWrap="nowrap">
                <DropdownMenu
                  items={[
                    {
                      onClick: async () => {
                        await fetch('/api/logout', {
                          credentials: 'include',
                        });
                        window.location.href = '/';
                      },
                      title: 'Útskrá',
                    },
                  ]}
                  title="Jökull Þórðarson"
                />
              </Box>
            </Box>
          </ContentBlock>
        </Box>
      </header>
    </>
  );
};
