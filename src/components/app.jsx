import React from "react";
import Radium, { Style, StyleRoot } from "radium";

import Docs from "./docs";
import Hero from "./hero";
import { Header, Footer } from "formidable-landers";

import settings from "../spectacle-variables";
import theme from "../spectacle-theme";

class App extends React.Component {
  getHeaderLinkStyles() {
    return {
      color: settings.yellow,
      borderColor: settings.gold,
      ":hover": {
        color: settings.text,
        backgroundColor: settings.gold
      }
    };
  }
  getFooterOverrides() {
    return {
      margin: "0",

      borderTop: "0",
      borderRight: `1em solid ${settings.text}`,
      borderBottom: `1em solid ${settings.text}`,
      borderLeft: `1em solid ${settings.text}`
    };
  }

  render() {
    return (
      <StyleRoot>
        <Header backgroundColor={settings.brown} linkStyles={this.getHeaderLinkStyles()} />
        <Hero />
        <Docs />
        <Footer backgroundColor={settings.white} styleOverrides={this.getFooterOverrides()}>
        </Footer>
        <Style rules={theme} />
      </StyleRoot>
    );
  }
}

export default Radium(App);
