/* eslint-disable react-refresh/only-export-components */
import { Flex } from "@chakra-ui/react";

import MainLogo from "./components/MainLogo";
import MainNavbar from "./components/MainNavbar";

const Header = () => {
    return (
        <Flex
            as="header"
            zIndex="99"
            w="full"
            h="48px"
            mt="18px"
            align="center"
            justify="space-between"
        >
            <MainLogo />
            <MainNavbar />
        </Flex>
    );
};
export default Header;
