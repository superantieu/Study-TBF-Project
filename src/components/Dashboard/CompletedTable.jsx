import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
  Divider,
  AbsoluteCenter,
  Flex,
} from "@chakra-ui/react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

import Pagination from "../Pagination/Pagination";
import ExpectTimeChart from "../Charts/ExpectTimeChart";
import Scrollbars from "react-custom-scrollbars-2";
import RenderThumb from "../../scrollbar/RenderThumb";

const TableWithPagination = ({
  columns,
  data,
  current,
  pageCount,
  setCurrent,
  chartData,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Box mt={"30px"}>
      <Box position="relative" padding="10">
        <Divider borderColor={"red.500"} />
        <AbsoluteCenter
          bg="red.500"
          color={"white"}
          px="8"
          borderRadius={"99px"}
        >
          COMPLETED PROJECTS
        </AbsoluteCenter>
      </Box>
      <Box
        bg={"#08040459"}
        borderRadius={"20px"}
        m={"0 20px 20px 20px"}
        padding={"0 20px"}
      >
        <ExpectTimeChart data={chartData} />
      </Box>
      <Flex
        h="400px"
        direction="column"
        bg={"#08040459"}
        m={"0 20px"}
        borderRadius={"20px"}
        padding={"20px"}
      >
        <TableContainer overflow={"hidden"} flex="1">
          <Table
            {...getTableProps()}
            variant={"striped"}
            colorScheme="whiteAlpha"
            color={"#fff"}
          >
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th
                      color={"red.400"}
                      px="8px"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}

                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      return (
                        <Td
                          px="8px"
                          py="0"
                          h="0"
                          borderBottom={0}
                          {...cell.getCellProps()}
                        >
                          <Box
                            h="0"
                            w={`${headerGroups[0].headers[index].width}`}
                          />
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
          <Scrollbars
            autoHide={true}
            autoHideTimeout={1000}
            style={{
              backgroundColor: "#272a2f",
              width: "100%",
              height: "calc(100% - 40px)",
            }}
            renderThumbVertical={RenderThumb}
          >
            <Table
              {...getTableProps()}
              variant={"striped"}
              colorScheme="whiteAlpha"
              color={"#fff"}
              //
              w={"full"}
            >
              <Thead h="0">
                {headerGroups.map((headerGroup, index) => (
                  <Tr h="0" {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, index) => (
                      <Th
                        h="0"
                        py="0"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      ></Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <Tr {...row.getRowProps()}>
                      {row.cells.map((cell, index) => {
                        return (
                          <Td padding={"8px"} {...cell.getCellProps()}>
                            <Box w={`${headerGroups[0].headers[index].width}`}>
                              {cell.render("cell")}
                            </Box>
                          </Td>
                        );
                      })}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Scrollbars>
        </TableContainer>

        <Flex align={"center"} justify={"center"} h="64px">
          <Pagination
            current={current}
            pageCount={pageCount}
            setCurrent={setCurrent}
          />
        </Flex>
      </Flex>
      <Box h={"20px"} color={"transparent"}></Box>
    </Box>
  );
};

export default TableWithPagination;
