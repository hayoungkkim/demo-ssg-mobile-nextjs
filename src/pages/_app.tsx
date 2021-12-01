import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import type { AppProps } from "next/app";

import { wrapper } from "../app/store";

export const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default wrapper.withRedux(MyApp);
