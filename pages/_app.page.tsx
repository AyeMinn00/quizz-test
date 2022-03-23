import '../styles/globals.css'
import createEmotionCache from "../styles/createEmotionCache";
import {CacheProvider, ThemeProvider} from "@emotion/react";
import lightTheme from "../styles/theme/lightTheme";
import {CssBaseline} from "@mui/material";
import Head from "next/head";
import {AuthGuardComponent} from '../components/AuthGuard/AuthGuardComponent';
import {UnAuthGuardComponent} from '../components/AuthGuard/UnAuthGuardComponent';
import {Provider} from "react-redux";
import {store} from "../store/store";

// if (process.env.NODE_ENV === "development") {
//     require("../mocks");
// }

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


function MyApp(props: any) {
    const {Component, pageProps, emotionCache = clientSideEmotionCache} = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline/>
                {/* inject redux toolkit store */}
                <Provider store={store}>
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
                </Provider>
            </ThemeProvider>
        </CacheProvider>
    );
}


export default MyApp
