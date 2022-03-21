import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import type { EmotionCache } from "@emotion/cache";

// import MUI
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../util/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";

// import redux
import { store } from "../redux/store";

import "../styles/theme.scss";
import MainLayout from "../layouts/MainLayout";

const clientSideEmotionCache = createEmotionCache();

export type IAppProps = AppProps & {
  emotionCache: EmotionCache;
};

const MyApp: React.FC<IAppProps> = (props) => {
  const { Component, pageProps, ...rest } = props;
  const { emotionCache = clientSideEmotionCache } = rest;
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
