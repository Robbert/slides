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
import "./ma-theme.css";
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
      threshold: 0.9,
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
    <Surface className="ma-theme ma-theme--viewport-scale">
      <Document>
        <Slideshow numbered>
          <Slide id="start">
            <HeadingGroup>
              <Heading level={1}>
                Ensuring quality with a growing design system community
              </Heading>
              <PreHeading>
                presentation for User Needs First Conference 2025
              </PreHeading>
            </HeadingGroup>
            <Paragraph>
              by Robbert Broersma
              <br />
              Design System Lead for{" "}
              <Link href="https://nldesignsystem.nl/" external target="_new">
                NL Design System
              </Link>
            </Paragraph>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={2}>The community 🎉</Heading>
              <PreHeading>the story starts 7½ years ago</PreHeading>
            </HeadingGroup>
            <Figure>
              <Image
                src="slack-begin.png"
                alt="Screenshot of Slack: #nl-design-system @Johan Groenen created this channel on October 17th, 2017. This is the very beginning of the nl-design-system channel. Community Management: @Robbert en @Yolijn"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Fast-forward to present day</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="slack-members.png"
                alt="Screenshot of Slack: 799 members"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                We support developing accessible, inclusive and user friendly
                services for the government.
              </Heading>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>
                Collaborating both on-line and in real life
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
              <Heading level={3}>We build on each others work</Heading>
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
              <Heading level={2}>The Relay Model</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="estafettestokje.jpg"
                alt="Historical black-and-white photo of a relay race"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Government Design System?</Heading>
              <Paragraph>We share many challenges.</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="digitale-uitdaging.jpg"
                alt="Historical black-and-white photo: behind the computer, solving challenges together"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 1: "Help Wanted"</Heading>
              <Paragraph>We share many challenges.</Paragraph>
            </HeadingGroup>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 1: "Help Wanted"</Heading>
              <Paragraph>We share many challenges.</Paragraph>
              <UnorderedList>
                <UnorderedListItem>
                  Desk research and sharing results
                </UnorderedListItem>
                <UnorderedListItem>
                  Allow others to contribute
                </UnorderedListItem>
                <UnorderedListItem>
                  Identify probable next steps after minimum viable product
                </UnorderedListItem>
                <UnorderedListItem>
                  Determine if there are other stakeholders for this
                  functionality
                </UnorderedListItem>
                <UnorderedListItem>
                  Determine scope for development
                </UnorderedListItem>
                <UnorderedListItem>
                  Determine a name and description
                </UnorderedListItem>
                <UnorderedListItem>
                  Gather likely requirements for a mature component
                </UnorderedListItem>
              </UnorderedList>
            </HeadingGroup>
          </Slide>

          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Relay Model documentation</Heading>
            </HeadingGroup>
            <Figure>
              <Image
                src="nldesignsystem.nl-relay-model.png"
                alt="Screenshot of the NL Design System website translated to English, showing the Relay Model page"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Desk Research</Heading>
              <Paragraph>
                Start a discussion, when somebody else hasn't yet
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="github-discussions-components.png"
                alt="Screenshot of GitHub Discussions, showing a list of discussions about Help Wanted components in NL Design System"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Desk Research</Heading>
              <Paragraph>
                Share your findings, using a template and checklist
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="github-discussions-contact-timeline.png"
                alt="Screenshot of one GitHub Discussion, detail page for Contact Timeline component"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Allow others to contribute</Heading>
              <Paragraph>Reply to the discussion, start threads</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="github-discussions-thread.png"
                alt="Screenshot of one GitHub Discussion, with a thread about 'Label' versus 'Form field label' as component name"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Identify stakeholders</Heading>
              <Paragraph>Reply to the discussion, start threads</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="github-discussions-screenshot.png"
                alt="Screenshot of one GitHub Discussion, with a screenshot showing how the Language Navigation component is used by the central government"
              />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Determine the name</Heading>
              <Paragraph>Communicate with a shared vocabulary</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image
                src="github-discussions-help-wanted.png"
                alt="Screenshot of one GitHub Discussion, showing the component has reached the status Help Wanted"
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
              <Heading level={3}>OK, let's build!</Heading>
              <Paragraph>
                Stable, uncontroversial, accessible and user friendly. Easy,
                right?
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
              <Heading level={3}>Great documenation, obviously</Heading>
              <Paragraph>the Ultimate Design System</Paragraph>
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
              <Heading level={3}>100% accessible</Heading>
              <Paragraph>the Ultieme Design System</Paragraph>
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
              <Heading level={3}>This is a great plan!</Heading>
              <Paragraph>Exactly what we need</Paragraph>
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
              <Heading level={3}>Experts get to work...</Heading>
              <Paragraph>...building the Ultimate Design System</Paragraph>
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
              <Heading level={3}>Finding the A-team</Heading>
              <Paragraph>
                Some folks have the experience, but not easy to find them!
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
              <Heading level={3}>Back to the drawing board</Heading>
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
              <Heading level={3}>Can't wait for innovation</Heading>
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
              <Heading level={3}>Protests!</Heading>
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
              <Heading level={3}>Decentralized</Heading>
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
              <Heading level={3}>Everybody loves snowflakes</Heading>
              <Paragraph>
                Small teams don't have time for the Ultimate Design System
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
              <Heading level={3}>R.I.P. Ultimate Design System</Heading>
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
              <Heading level={2}>The Relay Model</Heading>
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
                {"Step 1: "}
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
              <Heading level={3}>Step 2: Community</Heading>
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
              <Heading level={3}>Step 3: Candidate</Heading>
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
              <Heading level={3}>Step 4: Hall of Fame</Heading>
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
              <Heading level={3}>Step 1: Help Wanted</Heading>
              <Paragraph>GitHub Project Board</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="relay-model-help-wanted-github.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 1: Help Wanted</Heading>
              <Paragraph>nldesignsystem.nl</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="relay-model-help-wanted-checks.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 2: Community</Heading>
              <Paragraph>GitHub Project Board</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="relay-model-community-github.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 2: Community</Heading>
              <Paragraph>nldesignsystem.nl</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="relay-model-community-checks.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 3: Candidate</Heading>
              <Paragraph>GitHub Project Board</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="relay-model-candidate-github.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 3: Candidate</Heading>
              <Paragraph>nldesignsystem.nl</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="relay-model-candidate-checks.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 4: Hall of Fame</Heading>
              <Paragraph>GitHub Project Board</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="relay-model-hall-of-fame-checks.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Step 4: Hall of Fame</Heading>
              <Paragraph>nldesignsystem.nl</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="relay-model-hall-of-fame-checks.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Documenting the process</Heading>
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
              <Heading level={3}>Community is growing!</Heading>
            </HeadingGroup>
            <UnorderedList>
              <UnorderedListItem>800+ people on Slack</UnorderedListItem>
              <UnorderedListItem>1400+ on LinkedIn</UnorderedListItem>
              <UnorderedListItem>100+ on GitHub</UnorderedListItem>
              <UnorderedListItem>100+ on YouTube</UnorderedListItem>
              <UnorderedListItem>
                Design Systems Week, hunderds of visitors
              </UnorderedListItem>
              <UnorderedListItem>
                for over 4 years, every two weaks a Heartbeat session
              </UnorderedListItem>
              <UnorderedListItem>
                every week: Developer Open Hour
              </UnorderedListItem>
              <UnorderedListItem>
                every two weeks: Design Open Hour
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Mailing list</Heading>
              <Paragraph>
                Great reminder for new projects
                <br />
                to use the design system
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="design-system-mailing-list.jpg" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>YouTube channel</Heading>
              <Paragraph>
                No obligatory meeting, enjoy it from your couch
                <br />
                (or from anywhere, with subtitles)
              </Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="youtube-channel.jpg" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Share design tokens</Heading>
              <Paragraph>Support teams to use latest brand identity</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="npm-package.jpg" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Design tokens guidance</Heading>
              <Paragraph>Support teams making design decisions</Paragraph>
            </HeadingGroup>
            <Figure>
              <Image src="amsterdam-design-tokens-docs.png" alt="TODO" />
            </Figure>
          </Slide>
          <Slide appearance="title">
            <HeadingGroup>
              <Heading level={3}>Proud of the results so far</Heading>
            </HeadingGroup>
            <UnorderedList>
              <UnorderedListItem>140+ open source components</UnorderedListItem>
              <UnorderedListItem>
                53 componenten at Step 1: Help Wanted
              </UnorderedListItem>
              <UnorderedListItem>
                18 componenten at Step 2: Community
              </UnorderedListItem>
              <UnorderedListItem>
                10 componenten at Step 3: Candidate
              </UnorderedListItem>
            </UnorderedList>
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
