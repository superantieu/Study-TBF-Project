import { extendTheme } from "@chakra-ui/react";

import "@fontsource/chakra-petch";
import "@fontsource/roboto-condensed";
import "@fontsource/goldman";

import { brandFonts } from "./fonts";
import { colorStyles } from "./colors";
import { buttonStyles } from "./components/button";
import { inputStyles } from "./components/input";

const theme = extendTheme({
    colors: {
        ...colorStyles,
    },
    fonts: {
        ...brandFonts,
    },
    components: {
        ...buttonStyles,
        ...inputStyles,
    },
});

export default theme;
