import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import Scrollbars from "react-custom-scrollbars-2";

import Pagination from "../Pagination/Pagination";
import RenderThumb from "../../scrollbar/RenderThumb";

const SupTable = ({ columns, data, setCurrent, project, rowNavigate }) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data,
        initialState: { pageSize: 10 },
      },
      useGlobalFilter,
      useSortBy,
      usePagination
    );

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${rowNavigate.path}/${project.result[id][rowNavigate.slug]}`);
  };
  return (
    <Box mt={"30px"}>
      <Flex
        h="516px"
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
                      px="8px"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      color={"red.400"}
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
                    <Tr
                      {...row.getRowProps()}
                      onClick={(e) => handleClick(row.id)}
                      cursor={"pointer"}
                      _hover={{ color: "red" }}
                    >
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
          {project && (
            <Pagination
              current={project.pagination.currentPage}
              pageCount={project.pagination.totalPages}
              setCurrent={setCurrent}
            />
          )}
        </Flex>
      </Flex>
      <Box h={"20px"} color={"transparent"}></Box>
    </Box>
  );
};

export default SupTable;
