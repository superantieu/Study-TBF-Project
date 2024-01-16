import { Flex, Spinner } from "@chakra-ui/react";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi";
import ContributeChart from "../Charts/ContributeChart";

const ContributeLocation = () => {
  const {
    data: totalOngoProjects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    Completed: false,
    pageSize: 50,
  });
  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }
  const location = totalOngoProjects.result.map((locate) => {
    return locate.location;
  });
  var countLoca = {};

  location.forEach((loca) => {
    if (countLoca[loca]) {
      countLoca[loca]++;
    } else {
      countLoca[loca] = 1;
    }
    return countLoca;
  });

  var otherCount = 0;
  for (var key in countLoca) {
    if (countLoca.hasOwnProperty(key)) {
      if (key === "" || countLoca[key] === 1) {
        otherCount += countLoca[key];
        delete countLoca[key];
      }
    }
  }
  if (otherCount > 0) {
    countLoca["Others"] = otherCount;
  }
  return <ContributeChart totalhour={countLoca} />;
};
export default ContributeLocation;
