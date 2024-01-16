import { Button, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
    return (
        <HStack as="nav" align="center" fontFamily={"navbar"}>
            <NavLink to="/profiles">
                {({ isActive }) => (
                    <Button
                        colorScheme="whiteAlpha"
                        variant="nav"
                        isActive={isActive}
                    >
                        Fighter Profiles
                    </Button>
                )}
            </NavLink>
            <NavLink to="/news">
                {({ isActive }) => (
                    <Button
                        colorScheme="whiteAlpha"
                        variant="nav"
                        isActive={isActive}
                    >
                        Latest News
                    </Button>
                )}
            </NavLink>
            <NavLink to="/schedules">
                {({ isActive }) => (
                    <Button
                        colorScheme="whiteAlpha"
                        variant="nav"
                        isActive={isActive}
                    >
                        Fight Schedules
                    </Button>
                )}
            </NavLink>
            <NavLink to="/watch">
                {({ isActive }) => (
                    <Button
                        colorScheme="whiteAlpha"
                        variant="nav"
                        isActive={isActive}
                    >
                        Watch Now
                    </Button>
                )}
            </NavLink>
        </HStack>
    );
};
export default MainNavbar;
