import { Flex, Spinner } from "@chakra-ui/react";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi";
import ContributeChart from "../Charts/ContributeChart";

const ContributeBySize = () => {
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
  const size = totalOngoProjects.result.map((locate) => {
    return locate.size;
  });
  var countSize = {};
  size.forEach((loca) => {
    if (countSize[loca]) {
      countSize[loca]++;
    } else {
      countSize[loca] = 1;
    }
    return countSize;
  });

  return <ContributeChart totalhour={countSize} />;
};
export default ContributeBySize;
