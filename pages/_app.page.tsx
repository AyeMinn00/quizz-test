import '../styles/globals.css'
import type { AppProps } from 'next/app'
import createEmotionCache from "../styles/createEmotionCache";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import lightTheme from "../styles/theme/lightTheme";
import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { AuthGuardComponent } from '../components/AuthGuard/AuthGuardComponent';
import { UnAuthGuardComponent } from '../components/AuthGuard/UnAuthGuardComponent';

// if (process.env.NODE_ENV === "development") {
//     require("../mocks");
// }

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


function MyApp(props: any) {
    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                {
                    (Component.authPattern)
                        ? (
                            // protected routes
                            Component.authPattern.requireAuth ?
                                <AuthGuardComponent>
                                    <Component {...pageProps} />
                                </AuthGuardComponent>
                                :
                                (<UnAuthGuardComponent>
                                    <Component {...pageProps} />
                                </UnAuthGuardComponent>)

                        )
                        :
                        // public routes
                        (<Component {...pageProps} />)

                }
            </ThemeProvider>
        </CacheProvider>
    );
}


export default MyApp
