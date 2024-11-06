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
import "./fluid.css";
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
              <PreHeading>750+ deelnemers</PreHeading>
            </HeadingGroup>
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
              <Heading level={3}>Community begon 5 jaar geleden</Heading>
              <PreHeading>bottom up</PreHeading>
            </HeadingGroup>
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
              <Heading level={3}>
                Waarom is een design system maken belangrijk werk?
              </Heading>
            </HeadingGroup>
          </Slide>
        </Slideshow>
      </Document>
    </Surface>
  );
}

export default App;
