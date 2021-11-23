import "../styles/globals.css";

import type { AppProps } from "next/app";

import { wrapper } from "../app/store";

export const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
