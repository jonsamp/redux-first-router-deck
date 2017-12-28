// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#15141f",
    tertiary: "#4b35ef",
    quarternary: "#CECECE"
  },
  {
    primary: "Helvetica",
    secondary: "Helvetica"
  }
);

const slidesImports = [
  import("./slides/title"),
  import("./slides/storeSetup"),
  import("./slides/routesSetup"),
  import("./slides/actionsDispatched"),
  import("./slides/linkCreation"),
  import("./slides/linkBenefit"),
  import("./slides/twoWayData"),
  import("./slides/oneWayData"),
  import("./slides/thunks"),
  import("./slides/dataFetchingOverview"),
  import("./slides/disadvantages"),
  import("./slides/advantages")
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }
  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }
  render() {
    const { slides } = this.state;
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        progress="number"
      >
        {slides.length ? (
          slides.map((slide, index) => {
            return React.cloneElement(slide, { key: index });
          })
        ) : (
          <Slide />
        )}
      </Deck>
    );
  }
}
