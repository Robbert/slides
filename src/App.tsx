import {
  CodeBlock,
  ColumnLayout,
  Document,
  Figure,
  Heading,
  HeadingGroup,
  Image,
  Link as DefaultLink,
  OrderedList,
  OrderedListItem,
  PreHeading,
  Surface,
  UnorderedList,
  UnorderedListItem,
  Code,
} from "@utrecht/component-library-react/dist/css-module";
import { Paragraph } from "@nl-design-system-candidate/paragraph-react/css";
import { Slide } from "./Slide";
import { Slideshow } from "./Slideshow";
import "@nl-design-system-unstable/nlds-design-tokens/src/font.mjs";
import "./App.css";
import "./theme.css";
// import "./fluid.css";
import { useEffect } from "react";

const Link = ({ ...props }) => {
  const isFragment = (props.href || "").startsWith("#");
  return (
    <DefaultLink
      {...props}
      {...(!isFragment ? { target: "_new", external: true } : {})}
    />
  );
};

const addSlideIds = () => {
  const slideshow = document.querySelector(".kernteam-slideshow");
  if (!slideshow) {
    return;
  }
  const slides = Array.from(slideshow.querySelectorAll(".kernteam-slide"));
  slides.forEach((el, index) => {
    if (!el.id) {
      el.id = `slide-${index + 1}`;
    }
  });
};

const scrollToFragment = () => {
  const hash = location.hash.replace(/^#/, "");
  const target = hash ? document.getElementById(hash) : null;

  if (target) {
    target.scrollIntoView();
  }
};

const observeSlideVisibility = () => {
  const slideshow = document.querySelector(".kernteam-slideshow");
  if (!slideshow) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const slide = entries[0] && entries[0].target;
      if (slide) {
        history.pushState({}, "XX", `#${slide.id}`);
      }
    },
    {
      root: slideshow,
      rootMargin: "0px",
      threshold: 1,
    }
  );

  const slides = Array.from(slideshow.querySelectorAll(".kernteam-slide"));
  slides.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
  };
};

function App() {
  useEffect(() => {
    setTimeout(addSlideIds, 500);

    setTimeout(scrollToFragment, 750);

    setTimeout(observeSlideVisibility, 1000);
  }, []);

  return (
    <Surface className="nlds-theme nlds-theme--viewport-scale">
      <Document>
        <Slideshow numbered>
          <Slide id="start">
            <HeadingGroup>
              <Heading level={1}>NL Design System</Heading>
              <PreHeading>presentatie voor Common Ground</PreHeading>
            </HeadingGroup>
            <Paragraph>
              door Robbert Broersma
              <br />
              Design System Lead in het{" "}
              <Link
                href="https://nldesignsystem.nl/project/kernteam/"
                external
                target="_new"
              >
                NL Design System kernteam
              </Link>
            </Paragraph>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={2}>Community</Heading>
              <PreHeading>
                het verhaal begint in 2017, met een bottom-up aanpak
              </PreHeading>
            </HeadingGroup>
            <Figure>
              <Image
                src="slack-begin.png"
                alt="Screenshot van Slack: #nl-design-system @Johan Groenen created this channel on October 17th, 2017. This is the very beginning of the nl-design-system channel. Community Management: @Robbert en @Yolijn"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Fast-forward naar 2024</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="slack-members.png"
                alt="Screenshot van Slack: 757 leden"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                Helpen om toegankelijk, inclusief en gebruiksvriendelijk
                ontwikkelen makkelijk te maken.
              </Heading>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                On-line samenwerken en samenwerkdagen op locatie
              </Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="samenwerken-irl.jpg"
                alt="Groepje developers en designers die overleggen in een café in Utrecht"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>We bouwen door op elkaars werk</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="denhaag-mijn-omgeving-user-test-screenshot.png"
                alt="Screenshot van Mijn Den Haag in een prototype voor gebruikerstesten"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                We bouwen een design system dat werkt voor meerdere organisaties
              </Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="community-logos.png"
                alt="Logo's van: gemeente Utrecht, gemeente Den Haag, Rijksdienst voor Ondernemend Nederland en gemeente Amsterdam"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={2}>
                Wat is nou eigenlijk een design system?
              </Heading>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Samenwerken aan een consistent design</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="samenwerkdag.jpg"
                alt="Designers uit de community werken samen in een vergaderzaal, en ze zwaaien voor de foto"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Design kit voor UX-designers</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="design-collage.png"
                alt="Collage van diverse component uit de NL Design Syste mcommunity"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Componenten voor developers</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="website-componenten-overzicht.png"
                alt="Componenten-pagina op de NL Design System website"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Richtlijnen voor een kleurenpalet</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="color-palette.png"
                alt="Overzicht van een kleurpalet met een tabel van alle combinaties en of ze toegankelijk zijn"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Richtlijnen voor typografie</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="typography-guidelines.png"
                alt="Screenshot van Figma met typografie-richtlijnen van gemeente Den Haag"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                Richtlijnen voor afmetingen en visuele hierarchie
              </Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="space-guidelines.png"
                alt="Samenwerkdag waar developers en designers een spreadsheet maken met hoeveel lege pixels tussen componenten moet zitten"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={2}>
                Waarom is een design system maken belangrijk werk?
              </Heading>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Het is leuk om een systeem te maken!</Heading>
              <Paragraph>
                Behoud gemotiveerde specialisten, nu capaciteit schaars is
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="lego-system.jpg" alt="Lego System, ook leuk!" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                Beheer meerdere sites en applicaties in minder tijd
              </Heading>
              <Paragraph>
                Gebruik designs in vele websites, in uiteenlopende platformen en
                frameworks.
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="multi-platform.png"
                alt="JSON in het centrum, die in verbinding staat met  meerdere platformen: Figma, CSS, Angular, React en Vue.js"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                De puntjes op de i zetten,
                <br />
                en dan overal hergebruiken
              </Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="typography-details.png"
                alt="Details van typografie-richtlijnen voor duidelijk leesbare getallen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Verbeteringen snel overal uitrollen</Heading>
            </HeadingGroup>
            <Figure className="kernteam-slide__figure-right-disabled">
              <Image
                src="npm-package.png"
                alt="npm package van een onderdeel van het deisgn system"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Consistent voldoen aan wetgeving</Heading>
              <Paragraph>
                Bijvoorbeeld Digitale Toegankelijkheid en WMEBV
              </Paragraph>
            </HeadingGroup>
            <Figure className="kernteam-slide__figure-right-disabled">
              <Image
                src="storybook-axe.png"
                alt="testen op toegankelijkheid in een vroeg stadium, met Axe in Storybook"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={2}>Estafettemodel</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="estafettestokje.jpg"
                alt="Historische foto van een estafette-race"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Nationaal Design System?</Heading>
              <Paragraph>We hebben samen veel dezelfde uitdagingen.</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="digitale-uitdaging.jpg"
                alt="Samen achter de computer, uitdagende dingen oplossen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                We zouden betere dingen kunnen doen, dan telkens dezelfde
                problemen oplossen
              </Heading>
              <Paragraph>Nationaal Design System?</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="de-betere-dingen.jpg"
                alt="Historische foto van een estafette-race"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                Inclusieve dienstverlening is niet zo makkelijk!
              </Heading>
              <Paragraph>Nationaal Design System?</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="goed-kijken.jpg"
                alt="Historische foto Historische foto van mensen die in de verte kijken, sommigen met verrekijker"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>OK, bouwen maar!</Heading>
              <Paragraph>
                Stabiel, oncontroversiëel, toegankelijk en gebruiksvriendelijk.
                Makkelijk toch?
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="bouwen-maar.jpg"
                alt="Historische foto ee nbouwplaats"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>het Ultieme Design System</Heading>
              <Paragraph>Gemaakt door experts</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="samen-aan-de-slag.jpg"
                alt="Historische foto kinderen die samen iets doen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Wel iedereen z'n eigen design</Heading>
              <Paragraph>Digitale Huis van Thorbecke</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="eigen-kleurtje.jpg"
                alt="Historische foto twee verschillende geschilderde paaseieren"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Wel iedereen z'n eigen systeem</Heading>
              <Paragraph>Digitale Huis van Thorbecke</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="doe-het-zelf.jpg"
                alt="Historische foto van kind dat speelt met een blokkendoos"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Natuurlijk goed gedocumenteerd</Heading>
              <Paragraph>het Ultieme Design System</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="even-opschrijven.jpg"
                alt="Historische foto van kind dat schrijft met een kroontjespen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>100% toegankelijk</Heading>
              <Paragraph>het Ultieme Design System</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="toegankelijk-vervoer.jpg"
                alt="Historische foto een rolstoel achterop een auto"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Wat een geweldig plan!</Heading>
              <Paragraph>precies wat we nodig hebben</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="akkoord-geven.jpg"
                alt="Historische foto van mensen die de hand schudden bij een presentatie"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Experts gaan aan de slag</Heading>
              <Paragraph>Hard werken aan het ultieme design system</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="experts.jpg"
                alt="Historische foto van mensen die de hand schudden bij een presentatie"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <Figure className="full-screen-image">
              <Image
                src="inflatoplane.jpg"
                alt="Historische foto van de Goodyear Inflatoplane"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Capaciteit is schaars</Heading>
              <Paragraph>
                Experts weten hoe het moet, maar vind ze maar eens!
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="experts-aan-het-werk.jpg"
                alt="Historische foto van kinderen die technisch aan het werk zijn"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Terug naar de tekentafel</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="tekentafel.jpg"
                alt="Historische foto van iemand aan een tekentafel"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Niemand wil wachten op innovatie</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="wachten.jpg"
                alt="Historische foto van mensen die wachten in oncoformtabele omstandigheden"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Protest!</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="protest.jpg"
                alt="Historische foto mensen die protesteren"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Decentraal</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="decentraal.jpg"
                alt="Historische foto van een gameshow waarbij deelnemers elkaar niet kunnen zien"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Iedereen z'n unieke sneeuwvlok</Heading>
              <Paragraph>
                Kleine teams hebben geen tijd voor een ultiem systeem
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="kunst.jpg"
                alt="Historische foto van kinderen die schilderen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Iedereen z'n unieke sneeuwvlok</Heading>
              <Paragraph>
                Kleine teams hebben geen tijd voor een ultiem systeem
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="kunst.jpg"
                alt="Historische foto van kinderen die schilderen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>R.I.P. Ultiem Design System</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="omgewaaid.jpg"
                alt="Historische foto van omgewaaide terrasstoelen aan het strand"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={2}>het Estafettemodel</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="stokje-overnemen.jpg"
                alt="Historische foto van renners die het estafettestokje overnemen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                Stap 1:
                <span lang="en">Help Wanted</span>
              </Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="help-wanted.jpg"
                alt="Historische foto van kinderen die om hulp vragen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Stap 2: Community</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="samen-borduren.jpg"
                alt="Historische foto van 4 bordurende vrouwen"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Stap 3: Kandidaat</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="candidate.jpg"
                alt="Historische foto van opgedirkte mensen die er klaar voor zijn"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                Stap 4: <span lang="en">Hall of Fame</span>
              </Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="hall-of-fame.jpg"
                alt="Historische foto van een kind met een grote prijs"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Goed verhaal joh</Heading>
              <Paragraph>Maar werkt dit nou echt?</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="notities-maken.jpg"
                alt="Historische foto mannen die notities maken"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <Figure>
              <Image
                src="community.jpg"
                alt="Leden van de community in een screenshot van Microsoft Teams"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Mensen doen mee!</Heading>
            </HeadingGroup>
            <UnorderedList>
              <UnorderedListItem>750+ mensen op Slack</UnorderedListItem>
              <UnorderedListItem>1000+ op LinkedIn</UnorderedListItem>
              <UnorderedListItem>100+ op GitHub</UnorderedListItem>
              <UnorderedListItem>100+ op YouTube</UnorderedListItem>
              <UnorderedListItem>
                Design Systems Week met honderden bezoekers
              </UnorderedListItem>
              <UnorderedListItem>
                4 jaar lang elke twee weken een heartbeat
              </UnorderedListItem>
              <UnorderedListItem>
                elke week Developer Open Hour
              </UnorderedListItem>
              <UnorderedListItem>
                elke tweede week Design Open Hour
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Hier zijn we trots op</Heading>
            </HeadingGroup>
            <UnorderedList>
              <UnorderedListItem>
                200+ componenten in de community nog niet geclassificeerd
              </UnorderedListItem>
              <UnorderedListItem>
                36 componenten bij stap 1: Componente
              </UnorderedListItem>
              <UnorderedListItem>
                17 componenten bij stap 2: Community
              </UnorderedListItem>
              <UnorderedListItem>
                10 componenten richting stap 3: Candidate
              </UnorderedListItem>
              <UnorderedListItem>Hall of Fame in 2025</UnorderedListItem>
            </UnorderedList>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Kernwaarden</Heading>
            </HeadingGroup>
            <UnorderedList>
              <UnorderedListItem>Geen dubbel werk doen</UnorderedListItem>
              <UnorderedListItem>Iedereen kan meedoen</UnorderedListItem>
              <UnorderedListItem>Onderbouw je keuzes</UnorderedListItem>
              <UnorderedListItem>Ben concreet</UnorderedListItem>
              <UnorderedListItem>
                Start met de behoeftes van gebruikers
              </UnorderedListItem>
              <UnorderedListItem>Positief</UnorderedListItem>
              <UnorderedListItem>Creëer openheid</UnorderedListItem>
              <UnorderedListItem>Delen voordat het klaar is</UnorderedListItem>
              <UnorderedListItem>Maak wat je nu nodig hebt</UnorderedListItem>
              <UnorderedListItem>Iteratief werken</UnorderedListItem>
              <UnorderedListItem>Makkelijk in gebruik</UnorderedListItem>
              <UnorderedListItem>Digitaal meedoen</UnorderedListItem>
              <UnorderedListItem>Laagdrempelig samenwerken</UnorderedListItem>
              <UnorderedListItem>Hands-on</UnorderedListItem>
              <UnorderedListItem>
                Gevalideerd met eindgebruikers
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={2}>Ontwikkelingen in 't afgelopen jaar</Heading>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>denhaag.nl is live</Heading>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Amsterdam draagt veel bij</Heading>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Logius doet mee</Heading>
              <Paragraph>
                Hackathon met de teams van DigiD en Mijn Overheid
              </Paragraph>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <Figure className="full-screen-image">
              <Image
                src="logius-hackathon.jpg"
                alt="Hackathon met NL Design System kernteam en teams van Logius, bij Logius op kantoor"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={2}>Vragen?</Heading>
            </HeadingGroup>
          </Slide>
        </Slideshow>
      </Document>
    </Surface>
  );
}

export default App;
