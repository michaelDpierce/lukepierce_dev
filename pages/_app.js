// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import "@/styles/index.css";

import * as Fathom from "fathom-client";

import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider,
  useColorMode,
} from "@chakra-ui/core";

import { Global, css } from "@emotion/core";
import React, { useEffect } from "react";
import { prismDarkTheme, prismLightTheme } from "@/styles/prism";

import { DefaultSeo } from "next-seo";
import Router from "next/router";
import SEO from "../next-seo.config";
import theme from "@/styles/theme";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

Router.events.on("routeChangeComplete", () => {
  Fathom.trackPageview();
});

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ["michaelpierce.dev"],
      });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <GlobalStyle>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
