import { Scrollbars } from "react-custom-scrollbars-2";
import {
  Divider,
  AbsoluteCenter,
  Flex,
  Switch,
  FormControl,
  FormLabel,
  Box,
  Text,
  useOutsideClick,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import TotalProjectChart from "../Charts/TotalProjectChart";
import RenderThumb from "../../scrollbar/RenderThumb";
import StatsOverall from "./StatsOverall";
import TableMore from "./TableWithMore";
import ContributeLocation from "./ContributeLocation";
import ContributeBySize from "./ContributeBySize";
import ContributeByDifficulty from "./ContributeByDifficulty";
import ChooseProjects from "./ChooseProjects";
import { setChoose } from "../../redux/chooseSlice";

const Dashboard = () => {
  const [enable, setEnable] = useState({
    locate: false,
    size: false,
    difficulty: false,
  });
  const [orderBy, setOrderBy] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: () => setIsSelectOpen(false),
  });
  const dispatch = useDispatch();
  //
  const handleChange = (e) => {
    setEnable({ ...enable, [e.target.id]: e.target.checked });
  };
  const handlleSelect = (e) => {
    setOrderBy(e.target.value);
    dispatch(setChoose([]));
  };

  useEffect(() => {}, [enable]);
  //
  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{
        backgroundColor: "#272a2f",
      }}
      renderThumbVertical={RenderThumb}
    >
      <Box w={"full"} h={"full"} mt={"20px"} mb={"20px"}>
        <Box position="relative" padding="10">
          <Divider borderColor={"red.500"} />
          <AbsoluteCenter
            bg="red.500"
            color={"white"}
            px="8"
            borderRadius={"99px"}
          >
            ON-GOING PROJECTS
          </AbsoluteCenter>
        </Box>

        <Menu closeOnSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color={"#fff"}
            ml={"20px"}
          />
          <MenuList>
            <MenuItem>
              <Text fontSize={"16px"} fontWeight={"bold"}>
                Enable Contribution Chart
              </Text>
            </MenuItem>
            <MenuItem pl={"20px"}>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <FormLabel htmlFor="location" mb="0">
                  Project location?
                </FormLabel>
                <Switch
                  id="locate"
                  isChecked={enable.locate}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </MenuItem>
            <MenuItem pl={"20px"}>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <FormLabel htmlFor="size" mb="0">
                  Project size?
                </FormLabel>
                <Switch
                  id="size"
                  isChecked={enable.size}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </MenuItem>
            <MenuItem pl={"20px"}>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <FormLabel htmlFor="difficulty" mb="0">
                  Project difficulty?
                </FormLabel>
                <Switch
                  id="difficulty"
                  isChecked={enable.difficulty}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </MenuItem>
          </MenuList>
        </Menu>

        <Flex
          justify={"space-between"}
          align={"center"}
          gap={"40px"}
          ml={"20px"}
          mr={"20px"}
          flexWrap={"wrap"}
          mt={"20px"}
        >
          <Box
            w={"100%"}
            bg={"#08040459"}
            borderRadius={"20px"}
            minH={"515px"}
            position={"relative"}
            onContextMenu={handleContextMenu}
          >
            <TotalProjectChart
              orderBy={orderBy === "" ? "startDate" : orderBy}
            />
            <Menu closeOnSelect={false}>
              <MenuButton
                aria-label="Options"
                variant="outline"
                color={"#fff"}
                ml={"20px"}
                border={"1px solid #fff"}
                borderRadius={"15px"}
                padding={"5px"}
                h={"30px"}
                position={"absolute"}
                top={"10px"}
                left={"-10px"}
              >
                Choose
              </MenuButton>

              <MenuList maxW={"1000px"}>
                <MenuItem>
                  <Text fontSize={"16px"} fontWeight={"bold"}>
                    Choose the projects you want to display
                  </Text>
                </MenuItem>
                <ChooseProjects />
              </MenuList>
            </Menu>
            <Select
              onChange={handlleSelect}
              color={"#fff"}
              bgColor={"#transparent"}
              className="selectbox"
              borderColor={"transparent"}
              boxShadow="1px 1px 2px #e53e3e"
              borderRadius={"15px"}
              position={"absolute"}
              maxW={"200px"}
              bottom={"10px"}
              right={"10px"}
              h={"30px"}
            >
              <option value="startDate">Newest</option>
              <option value="startDate desc">Oldest</option>
            </Select>
          </Box>
          {enable.locate && (
            <Flex
              flexDirection={"column"}
              maxW={"calc(50% - 20px)"}
              minW={"calc(50% - 20px)"}
              bg={"#08040459"}
              borderRadius={"20px"}
              padding={"20px"}
              h={"450px"}
              align={"center"}
              justify={"center"}
              minH={"515px"}
            >
              <Box>
                <ContributeLocation />
              </Box>
              <Text
                mt={"30px"}
                fontWeight={"bold"}
                fontSize={"20PX"}
                alignSelf={"center"}
                color={"#e7dede"}
              >
                THE CONTRIBUTION BY LOCATION
              </Text>
            </Flex>
          )}
          {enable.size && (
            <Flex
              flexDirection={"column"}
              maxW={"calc(50% - 20px)"}
              minW={"calc(50% - 20px)"}
              bg={"#08040459"}
              borderRadius={"20px"}
              padding={"20px"}
              align={"center"}
              justify={"center"}
              minH={"515px"}
            >
              <Box>
                <ContributeBySize />
              </Box>
              <Text
                mt={"30px"}
                fontWeight={"bold"}
                fontSize={"20PX"}
                alignSelf={"center"}
                color={"#e7dede"}
              >
                THE CONTRIBUTION BY PROJECT SIZE
              </Text>
            </Flex>
          )}
          {enable.difficulty && (
            <Flex
              flexDirection={"column"}
              maxW={"calc(50% - 20px)"}
              minW={"calc(50% - 20px)"}
              bg={"#08040459"}
              borderRadius={"20px"}
              padding={"20px"}
              align={"center"}
              justify={"center"}
              minH={"515px"}
            >
              <Box>
                <ContributeByDifficulty />
              </Box>
              <Text
                mt={"30px"}
                fontWeight={"bold"}
                fontSize={"20PX"}
                alignSelf={"center"}
                color={"#e7dede"}
              >
                THE CONTRIBUTION BY PROJECT DIFFICULTY
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex
          justify={"space-between"}
          align={"center"}
          gap={"40px"}
          ml={"20px"}
          mr={"20px"}
        ></Flex>
        <StatsOverall />
        <TableMore />
      </Box>
    </Scrollbars>
  );
};

export default Dashboard;
