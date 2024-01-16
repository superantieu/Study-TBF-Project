import { Grid, GridItem } from "@chakra-ui/react";

import FeatureFighter from "../components/FeatureFighter/FeatureFighter";
import HomeMatchResult from "../components/HomeMatchResult/HomeMatchResult";
import HomeSchedule from "../components/HomeSchedule/HomeSchedule";
import HomeNews from "../components/HomeNews/HomeNews";

const HomePage = () => {
    return (
        <Grid
            h="full"
            templateColumns="repeat(12, 1fr)"
            gap={6}
            templateRows="repeat(5, 1fr)"
            fontFamily={"body"}
        >
            <GridItem colSpan={2} rowSpan={5}>
                <FeatureFighter />
            </GridItem>
            <GridItem colSpan={5} rowSpan={2}>
                <HomeMatchResult />
            </GridItem>
            <GridItem colSpan={5} rowSpan={2}>
                <HomeSchedule />
            </GridItem>
            <GridItem colSpan={10} rowSpan={3}>
                <HomeNews />
            </GridItem>
        </Grid>
    );
};

export default HomePage;
