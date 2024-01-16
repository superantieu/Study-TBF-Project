import { Flex, Spinner } from "@chakra-ui/react";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi";
import ContributeChart from "../Charts/ContributeChart";

const ContributeByDifficulty = () => {
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
  const difficulty = totalOngoProjects.result.map((locate) => {
    return locate.difficulty;
  });
  let countDiffi = {};

  difficulty.forEach((loca) => {
    if (countDiffi[loca]) {
      countDiffi[loca]++;
    } else {
      countDiffi[loca] = 1;
    }
    return countDiffi;
  });

  return <ContributeChart totalhour={countDiffi} />;
};
export default ContributeByDifficulty;
