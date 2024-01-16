import { Box, Grid, GridItem } from "@chakra-ui/react";

import Footer from "../components/Common/Footer/Footer";
import Header from "../components/Common/Header/Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Grid
            position={"absolute"}
            w="full"
            h="full"
            top="0"
            left="0"
            templateColumns="repeat(12, 1fr)"
            gap={4}
            templateRows="auto 1fr auto"
            px={{ base: 0, sm: 2, md: 6, lg: 10 }}
            zIndex={2}
            color="#ffffff"
        >
            <GridItem colSpan={12}>
                <Header />
            </GridItem>
            <GridItem colSpan={12}>
                <Box as="main" w="full" h="full">
                    {children}
                </Box>
            </GridItem>
            <GridItem colSpan={12}>
                <Footer />
            </GridItem>
        </Grid>
    );
};

export default MainLayout;
