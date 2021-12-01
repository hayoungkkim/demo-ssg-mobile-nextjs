import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import styles from "./styles";

const breakpoints = createBreakpoints({
	sm: "40em",
	md: "52em",
	lg: "64em",
	xl: "80em",
});

const theme = extendTheme({
	styles,
	fonts: {
		heading: `'Roboto', 'AppleSDGothicNeo-Regular', sans-serif`,
		body: `'Roboto', 'AppleSDGothicNeo-Regular', sans-seri`,
	},
	breakpoints,
});

export default theme;
