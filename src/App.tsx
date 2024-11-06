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
              <Heading level={1}>
                Aan de slag met
                <br />
                NL Design System
              </Heading>
              <PreHeading>
                <Link href="https://nldesignsystem.nl/events/developer-open-hour">
                  Developer Open Hour #22
                </Link>
              </PreHeading>
            </HeadingGroup>
            <Paragraph>door Robbert Broersma op 17 oktober 2024</Paragraph>
            <Paragraph>
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
          <Slide appearance="title" id="plan">
            <Heading level={2}>Wat gaan we bouwen?</Heading>
            <Paragraph>
              Doe jij ook mee? De slides staan op:{" "}
              <Link href="https://github.com/nl-design-system/onboarding">
                github.com/nl-design-system/onboarding
              </Link>
            </Paragraph>
            <Paragraph>&nbsp;</Paragraph>
            <Figure>
              <Image
                src="figma-stap-2.png"
                alt="Pagina met formulier in Figma"
              />
              <FigureCaption>
                <Link href="https://www.figma.com/design/iZgSIuU8hvH9nw3h7WO1ZY/Overheidsbrede-portalen---Templates?node-id=4528-10642&t=m8GxWnacbePTk9z4-4">
                  Het design in Figma
                </Link>
              </FigureCaption>
            </Figure>
          </Slide>
          <Slide appearance="title" id="plan">
            <Heading level={2}>Welke kennis heb je nodig?</Heading>
            <UnorderedList>
              <UnorderedListItem>
                <Link href="https://nldesignsystem.nl/button/#acceptatiecriteria">
                  Acceptatie-criteria voor componenten
                </Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="https://nldesignsystem.nl/componenten/">
                  Bestaande componenten
                </Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="https://nldesignsystem.nl/richtlijnen/formulieren">
                  Richtlijnen voor Formulieren
                </Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="https://vng.nl/sites/default/files/2024-07/wmebv_hulpgids_e-formulieren_en_notificeren_juli_2024.pdf">
                  Wettelijke eisen, zoals WMEBV (PDF)
                </Link>
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
          <Slide appearance="title" id="componenten">
            <Heading level={2}>Welke componenten?</Heading>
            <Figure>
              <Image
                src="figma-component-inspect.png"
                alt="Component inspecteren in Figma: de naam utrecht-button is zichtbaar in de sidebar"
              />
              <FigureCaption>
                <Link href="https://www.figma.com/design/iZgSIuU8hvH9nw3h7WO1ZY/Overheidsbrede-portalen---Templates?node-id=4528-10692&t=7BUFijIlNk4BEXLP-4">
                  De button inspecteren in Figma
                </Link>
              </FigureCaption>
            </Figure>
          </Slide>
          <Slide appearance="title" id="plan">
            <Heading level={2}>Inventarisatie van componenten</Heading>
            <ColumnLayout>
              <UnorderedList>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/action-group/">
                    Action Group
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/button/">Button</Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/form-field">
                    Form Field
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/heading/">Heading</Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/heading-group">
                    Heading Group
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/link">Link</Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/paragraph">
                    Paragraph
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/pre-heading">
                    Pre-Heading
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/text-input">
                    Text Input
                  </Link>
                </UnorderedListItem>
              </UnorderedList>
            </ColumnLayout>
          </Slide>

          <Slide appearance="title" id="plan">
            <Heading level={2}>Implementatie vinden in de Community</Heading>
            <ColumnLayout>
              <Paragraph>Bijgedragen door Amsterdam:</Paragraph>
              <UnorderedList>
                <UnorderedListItem>
                  <Link href="https://designsystem.amsterdam/?path=/docs/components-text-heading--docs">
                    Heading
                  </Link>
                </UnorderedListItem>
              </UnorderedList>
              <Paragraph>Bijgedragen door Utrecht:</Paragraph>
              <UnorderedList>
                <UnorderedListItem>
                  <Link href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-button-group--docs">
                    Action Group
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-button--docs">
                    Button
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-form-field-textbox--docs">
                    Form Field with Text Input
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-heading-group--docs">
                    Heading Group
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nldesignsystem.nl/link">Link</Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-paragraph--docs">
                    Paragraph
                  </Link>
                </UnorderedListItem>
                <UnorderedListItem>
                  <Link href="https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-pre-heading--docs">
                    Pre-Heading
                  </Link>
                </UnorderedListItem>
              </UnorderedList>
            </ColumnLayout>
          </Slide>
          <Slide appearance="demo" id="installeren">
            <Heading level={2}>Voorbereiding</Heading>
            <Paragraph>
              Gebruik de Node versie die past bij Vite, bijvoorbeeld met{" "}
              <Link href="https://github.com/nvm-sh/nvm">nvm</Link>:
            </Paragraph>
            <CodeBlock>nvm use 18</CodeBlock>
            <Paragraph>
              Start een nieuw project met Vite, React en TypeScript:
            </Paragraph>
            <CodeBlock>{`npm create vite@5.5.3`}</CodeBlock>
            <Paragraph>Volg de instructies in de terminal.</Paragraph>
          </Slide>
          <Slide appearance="demo" id="installeren">
            <Heading level={2}>Component Libraries installeren</Heading>
            <Paragraph>npm packages installeren:</Paragraph>
            <CodeBlock>{`npm install --save-dev @amsterdam/design-system-react
npm install --save-dev @utrecht/component-library-react`}</CodeBlock>
            <Paragraph>Componenten importeren in React:</Paragraph>
            <CodeBlock>{`import { Heading } from '@amsterdam/design-system-react';
import {
  Button,
  ButtonGroup as ActionGroup,
  FormFieldTextbox as FormFieldTextInput,
  HeadingGroup,
  Link,
  Paragraph,
  PreHeading
} from '@utrecht/component-library-react/dist/css-module';
`}</CodeBlock>
          </Slide>
          <Slide appearance="title" id="basis-thema">
            <Heading level={2}>
              <Link href="https://nl-design-system.github.io/themes/?path=/story/voorbeeld-thema--components">
                Voorbeeld Thema
              </Link>{" "}
              installeren
            </Heading>
            <Paragraph>npm package installeren:</Paragraph>
            <CodeBlock>
              {`npm install --save-dev @nl-design-system-unstable/voorbeeld-design-tokens`}
            </CodeBlock>
            <Paragraph>Importeren in React:</Paragraph>
            <CodeBlock>
              {`import "@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css";`}
            </CodeBlock>
            <Paragraph>Toepassen op HTML:</Paragraph>
            <CodeBlock>{`<html className="voorbeeld-theme">`}</CodeBlock>
          </Slide>
          <Slide appearance="title" id="development">
            <Heading level={2}>Bouwen met componenten</Heading>
            <Paragraph>Live coden, als dat maar goed gaat!</Paragraph>
            <OrderedList>
              <OrderedListItem>Project starten met Vite</OrderedListItem>
              <OrderedListItem>Installeren van dependencies</OrderedListItem>
              <OrderedListItem>
                Imports voor componenten toevoegen
              </OrderedListItem>
              <OrderedListItem>Voorbeeld thema toevoegen</OrderedListItem>
              <OrderedListItem>Formulier maken</OrderedListItem>
              <OrderedListItem>Component aanpassen</OrderedListItem>
              <OrderedListItem>
                Refactoring: lokale component library
              </OrderedListItem>
              <OrderedListItem>Verrassing! 🎉</OrderedListItem>
            </OrderedList>
          </Slide>
          <Slide appearance="title" id="testen">
            <Heading level={2}>Testen</Heading>
            <UnorderedList>
              <UnorderedListItem>Grote en kleine schermen</UnorderedListItem>
              <UnorderedListItem>
                Voorkeuren van de gebruiker:
                <UnorderedList>
                  <UnorderedListItem>forced-colors mode</UnorderedListItem>
                  <UnorderedListItem>vertalingen</UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
              <UnorderedListItem>Toetsenbord</UnorderedListItem>
            </UnorderedList>
            <Paragraph>
              <Link href="http://polypane.app" external>
                Polypane
              </Link>{" "}
              is hier super-handig voor!
            </Paragraph>
            <Paragraph>
              <Link
                href="polypane-workspace.ppws"
                external
                download="polypane-workspace.ppws"
              >
                Download mijn Polypane instellingen
              </Link>{" "}
              om zelf te testen.
            </Paragraph>
          </Slide>
          <Slide appearance="title" id="testen">
            <Heading level={2}>Migratie van bestaande code</Heading>
            <Paragraph>
              <Link
                href="https://gitlab.com/commonground/huishoudboekje/app-new/-/tree/e5ae35906d87b5233837a5c25f4461067f6fb0a0"
                target="_new"
                external
              >
                Huishoudboekje op GitLab (versie <Code>e5ae3590</Code>)
              </Link>
              <CodeBlock>{`git clone git@gitlab.com:commonground/huishoudboekje/app-new.git
cd app-new
( cd mesh && bash copy-protos.sh )
docker compose up`}</CodeBlock>
              <Paragraph>Start in een tweede terminal de frontend:</Paragraph>
              <CodeBlock>{`cd frontend/app
cp .env.sample .env
npm install
npm run start`}</CodeBlock>
            </Paragraph>
          </Slide>
          <Slide appearance="demo" id="kthxbye">
            <Heading level={2}>NL Design System ❤️ Community</Heading>
            <UnorderedList>
              <UnorderedListItem>
                Bedankt voor al deze mooie componenten!
              </UnorderedListItem>
              <UnorderedListItem>
                Bedankt voor de handige templates!
              </UnorderedListItem>
              <UnorderedListItem>
                Bedankt voor de fluid font sizes — deze slides zijn daarmee
                gebouwd!
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
          <Slide appearance="demo" id="kthxbye">
            <Heading level={2}>Developer Open Hour</Heading>
            <UnorderedList>
              <UnorderedListItem>
                Elke donderdag, afwisselend om 11:00 en om 13:00
              </UnorderedListItem>
              <UnorderedListItem>
                Heb je support nodig? Dit is het ideale moment om hulp te
                krijgen!
              </UnorderedListItem>
              <UnorderedListItem>
                Wil je een handige techniek laten zien die je voor NL Design
                System gebruikt? <br />
                Deel je idee voor een demo hier.
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="https://nldesignsystem.nl/events/developer-open-hour/aanmelden">
                  Meld je aan!
                </Link>
              </UnorderedListItem>
            </UnorderedList>
          </Slide>
        </Slideshow>
      </Document>
    </Surface>
  );
}

export default App;
