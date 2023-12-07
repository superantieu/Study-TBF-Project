import { Outlet } from "react-router-dom";
import { Container, Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import SideBar from "./components/Sidebar/Sidebar.jsx";
import HeaderBar from "./components/Headers/HeaderBar.jsx";
import FooterBar from "./components/Footers/FooterBar.jsx";
import BackgroundBody from "./assets/img/background-body-admin.png";

function App() {
  return (
    <Box
      bg={"linear-gradient(to right, #c9ffbf, #ffafbd);"}
      overflowX={"hidden"}
    >
      <HeaderBar />

      <Box w="100vw" h="calc(100dvh - 120px)" maxHeight="100dvh">
        <Grid
          templateColumns="repeat(12, 1fr)"
          columnGap={4}
          templateRows="auto 1fr auto"
          h={"full"}
        >
          <GridItem colSpan={2}>
            <SideBar />
          </GridItem>
          <GridItem colSpan={10} height={"full"} overflow={"hidden"} w={"full"}>
            <Outlet />
          </GridItem>
        </Grid>
      </Box>

      <FooterBar />
    </Box>
  );
}

export default App;
