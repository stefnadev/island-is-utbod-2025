import Head from 'next/head';
import SidebarLayout from '../SidebarLayout';
import { shouldLinkBeAnAnchorTag } from '../../shared/utils';
import {
  Box,
  Button,
  Breadcrumbs,
  Blockquote,
  LinkV2,
  Stack,
  Navigation,
  Text,
  Hyphen,
} from '@/components/island-ui/core/src';
import { useRouter } from 'next/router';
import Sticky from '@/components/Sticky/Sticky';
import NextLink from 'next/link';
import Image from 'next/image';
import { ProcessEntry } from '@/components/island-ui/contentful/src';

interface BreadCrumbItem {
  title: string;
  href?: string;
  slug?: string[];
  typename?: string;
  isTag?: boolean;
  isCurrentPage?: boolean;
}

export const MainWrapper = () => {
  const router = useRouter();
  const breadcrumbItems: BreadCrumbItem[] = [
    { title: 'Ísland.is', href: '#' },
    { title: 'Fjármál og skattar', href: '/' },
    { title: 'Skattframtal', href: '/' },
  ];

  const navigationData = {
    title: 'Efnisyfirlit',
    href: '#',
    items: [
      {
        title: 'Skattframtal',
        href: '/',
        active: router.asPath === '/',
      },
      {
        title: 'Skattframtal barns',
        href: '/',
      },

      {
        title: 'Verktakagreiðslur',
        href: '/',
      },
      {
        title: 'Fasteignir',
        href: '/',
      },
      {
        title: 'Erlendar tekjur',
        href: '/',
      },
      {
        title: 'Leigutekjur',
        href: '/',
      },
      {
        title: 'Útreikningur og niðurstaða',
        href: '/',
      },
      {
        title: 'Mótmæla niðurstöðu',
        href: '/',
      },
    ],
  };

  const relatedLinks = [
    { title: 'Framtalsleiðbeiningar', url: '/' },
    { title: 'Rafræn skilríki og veflyklar', url: '/' },
    { title: 'Niðurstöður álagningar', url: '/' },
    { title: 'Álagningarseðill og forsendur', url: '/' },
    { title: 'Atvinnurekstur', url: '/' },
  ];
  const sidebarContent = (
    <Sticky>
      <Stack space={3}>
        <Box display={['none', 'none', 'block']} printHidden>
          <LinkV2 href={'/'}>
            <Button
              preTextIcon="arrowBack"
              preTextIconType="filled"
              size="small"
              type="button"
              variant="text"
              truncate
              unfocusable
            >
              {'Fjármál og skattar'}
            </Button>
          </LinkV2>
        </Box>
        <Box
          background="purple100"
          borderRadius="large"
          padding={[3, 3, 4]}
          display="flex"
          alignItems="center"
        >
          <Box
            display={['block', 'block', 'none', 'block']}
            style={{ flex: '0 0 64px' }}
            marginRight={3}
          >
            <Image
              width={64}
              height={64}
              src={'/images/merki-skatturinn.png'}
              alt=""
            />
          </Box>
          <Box>
            <Text variant="eyebrow" color="purple600">
              {'Þjónustuaðili'}
            </Text>
            <Text variant="h4" as="h3" color="purple600" lineHeight="sm">
              <Hyphen minRight={5} locale={'is'}>
                {'Skatturinn'}
              </Hyphen>
            </Text>
          </Box>
        </Box>

        <Navigation
          baseId="pageNav"
          items={navigationData.items}
          title={navigationData.title}
          renderLink={(link, item) => {
            return !item?.href || shouldLinkBeAnAnchorTag(item.href) ? (
              link
            ) : (
              <NextLink href={item.href} legacyBehavior>
                {link}
              </NextLink>
            );
          }}
        />
        <Box background="purple100" borderRadius="large" padding={[3, 3, 4]}>
          <Stack space={[1, 1, 2]}>
            <Text variant="eyebrow" as="h2" color="purple600">
              {'Tengt efni'}
            </Text>
            {relatedLinks.map((link) => (
              <LinkV2 key={link.url} href={link.url} underline="normal">
                <Text key={link.url} color="purple600" as="span">
                  {link.title}
                </Text>
              </LinkV2>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Sticky>
  );

  return (
    <>
      <Head>
        <title>Að skila skattframtali</title>
      </Head>
      <SidebarLayout sidebarContent={sidebarContent}>
        <Stack space={3}>
          <Breadcrumbs
            items={breadcrumbItems ?? []}
            renderLink={(link, item) => {
              return item?.href ? (
                <NextLink href={item?.href} legacyBehavior>
                  {link}
                </NextLink>
              ) : (
                link
              );
            }}
          />
          <Text variant="h1">Að skila skattframtali</Text>
          <Text>
            Skattframtal geymir upplýsingar um tekjur og eignir einstaklinga og
            hversu mikið var borgað af þeim í skatt. Skattframtal er sent inn
            einu sinni á ári. Þannig fá einstaklingar útreikning á því hvort
            þeir hafi borgað of mikið, of lítið, eða rétta upphæð til hins
            opinbera.
          </Text>
          <Text>
            Það sem greitt er í skatta er notað af ríkinu til að byggja og
            starfrækja það sem allir á Íslandi nota. Dæmi eru vegir, sjúkrahús
            og stofnanir.
          </Text>
          <ProcessEntry
            processTitle="Skattframtal fyrir árið 2025"
            processLink="/skattframtol/2025"
            buttonText="Opna"
            newTab={false}
          />
          <Text>Þú þarft að skila framtali ef þú:</Text>

          <ul
            style={{
              listStyleType: 'disc',
              paddingLeft: '20px',
              color: 'red',
            }}
          >
            <Stack space={1}>
              <li>
                <Text>Fékkst íslenskar tekjur/tekjur á Íslandi.</Text>
              </li>
              <li>
                <Text>Ert 16 ára eða eldri.</Text>
              </li>
            </Stack>
          </ul>

          <Stack space={4}>
            <Stack space={1}>
              <Text>
                Í skattframtalið eru settar tekjur og eignir fyrir árið á undan.
              </Text>
              <Text>
                Dæmi: Skattframtal sem þú skilar árið 2024 er fyrir tekjur á
                tímabilinu janúar- desember 2023.
              </Text>
            </Stack>
            <Blockquote>
              <Text color="black" fontWeight="medium">
                Opnað verður fyrir rafræn skil á skattframtölum 27.febrúar 2026.
              </Text>
            </Blockquote>

            <Text variant="h2">Ferlið við að skila skattframtali</Text>
          </Stack>
          <Text variant="h3">1. Opna skattframtalið</Text>
          <Stack space={2}>
            <Text variant="h4">Tilkynning frá Skattinum</Text>
            <Text>
              Skatturinn opnar fyrir framtöl. Þegar þau eru opin færðu
              tilkynningu í tölvupósti (?). Tilkynningin er send út í febrúar
              eða mars. Þá færð þú líka að vita skilafrestinn á framtalinu.
            </Text>
          </Stack>
          <Stack space={2}>
            <Text variant="h4">Rafræn skilríki</Text>
            <Text>
              Til að komast inn í framtalið þarft þú að hafa rafræn skilríki.
            </Text>
            <Text>
              Ef þú ert ekki með rafræn skilríki getur þú sótt um veflykil.
              Veflykillinn veitir þér aðgang að þjónustusíðu Skattsins. Þú getur
              fengið veflykilinn sendan í heimabanka eða með pósti á lögheimili
              þitt.
            </Text>
            <Text variant="h4">Ef þú ert yngri en 18 ára</Text>
            <LinkV2
              href={''}
              underline="small"
              underlineVisibility="always"
              color="blue400"
            >
              Upplýsingar um rafræn skilríki barna undir 18 ára.
            </LinkV2>
          </Stack>
          <Text variant="h3">2. Fara yfir og breyta</Text>
          <Stack space={2}>
            <Text>
              Þegar þú getur opnað framtalið þitt getur þú sett inn upplýsingar
              eða breytt því sem er búið að setja inn sjálfkrafa.
            </Text>
            <Text variant="h4">Geyma og vista</Text>
            <Text>
              Þú getur geymt það sem þú hefur sett inn í framtalið með því að
              vista upplýsingarnar. Það er hægt að vinna í framtalinu smám saman
              og koma að því aftur.
            </Text>
          </Stack>
          <Stack space={2}>
            <Text variant="h4">Launafólk</Text>
            <Text>
              Fyrir launafólk eru flestar upplýsingar forskráðar á
              skattframtalið. Þú þarft samt að fara yfir framtalið og passa að
              allt sé rétt. Oft þarf að bæta inn upplýsingum um styrki eða
              einstaka verktakagreiðslur.
            </Text>
          </Stack>
          <Stack space={2}>
            <Text variant="h4">Verktakar</Text>
            <Text>
              Fyrir verktaka er ekki búið að skrá upplýsingar um tekjur
              fyrirfram. Það er því meiri vinna við skattframtal hjá þeim
              einstaklingum.
            </Text>
          </Stack>
          <Text variant="h3">3. Prófa og senda</Text>
          <Stack space={2}>
            <Text variant="h4">Villuprófun</Text>
            <Text>
              Þú getur athugað hvort allt sé rétt fyllt út áður en þú sendir
              framtalið. Þá smellirðu á hnapp sem heitir villuprófun. Ef það
              þarf að breyta einhverju koma tilkynningar um það í framtalinu.
              Leiðbeiningar eru hér:
            </Text>
          </Stack>
          <Stack space={2}>
            <Text variant="h4">Vísbending um niðurstöðu </Text>
            <Text>
              Það er líka hægt að fá bráðabirgðaútreikning. Það þýðir að þú
              getur fengið niðurstöðu úr framtalinu sem er ekki endanleg.
              Bráðabirgðaútreikningur gefur vísbendingu um hver niðurstaðan
              getur orðið ef allar upplýsingarnar sem eru í framtalinu eru
              réttar.
            </Text>
          </Stack>
          <Stack space={2}>
            <Text variant="h4">Senda framtalið</Text>
            <Text>
              Þegar þú hefur prófað og leiðrétt villur sem koma upp er hægt að
              senda framtalið. Þú færð staðfestingu á því í tölvupósti að
              sendingin hafi tekist. Um leið verður til pdf-útgáfa af
              skattframtalinu í pósthólfinu þínu á Ísland.is.
            </Text>
          </Stack>
          <Text variant="h3">4. Fá niðurstöðu</Text>
          <Stack space={2}>
            <Text>
              Um mánaðarmótin maí og júní færð þú tilkynningu með hnippi eða í
              tölvupósti um að niðurstöður séu tilbúnar.
            </Text>
          </Stack>
          <Stack space={2}>
            <Text variant="h4">Álagningarseðill</Text>
            <Text>
              Niðurstöðurnar koma fram á því sem er kallað álagningarseðill. Þú
              sérð hann inni á skattur.is eða á Ísland.is.
            </Text>
          </Stack>
          <Stack space={2}>
            <Text>Útreikningur getur sýnt að: </Text>
            <ul
              style={{
                listStyleType: 'disc',
                paddingLeft: '20px',
                color: 'red',
              }}
            >
              <Stack space={1}>
                <li>
                  <Text>allar greiðslur séu í lagi, </Text>
                </li>
                <li>
                  <Text>þú eigir inneign,</Text>
                </li>
                <li>
                  <Text>þú skuldir pening.</Text>
                </li>
              </Stack>
            </ul>
          </Stack>
        </Stack>
      </SidebarLayout>
    </>
  );
};
