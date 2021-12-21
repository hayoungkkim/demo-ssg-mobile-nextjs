import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import styles from "./styles";

const breakpoints = createBreakpoints({
	sm: "40em", // 640
	md: "52em", // 832
	lg: "64em", // 1,024
	xl: "80em", // 1,280
});

const theme = extendTheme({
	styles,
	fonts: {
		heading: `'Roboto', 'AppleSDGothicNeo-Regular', sans-serif`,
		body: `'Roboto', 'AppleSDGothicNeo-Regular', sans-serif`,
	},
	breakpoints,
});

export default theme;
