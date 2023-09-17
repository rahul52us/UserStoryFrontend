import React, { useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react-lite";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaEdit, FaEye } from "react-icons/fa";
import moment from "moment";
import store from "../../../../../../store/store";
import CustomInput from "../../../../../../config/component/CustomInput/CustomInput";
import TableLoader from "../../../../../../config/component/DataTable/TableLoader";
import Pagination from "../../../../../../config/component/pagination/Pagination";
import { useNavigate } from "react-router-dom";

interface TableI {
  tableForm: any;
}

const ClassTableCard: React.FC<TableI> = observer(({ tableForm }) => {
  const navigate = useNavigate();
  const [firstTimeCall, setFirstTimeCall] = useState(true);

  const {
    classStore: { getClasses, classes },
    auth: { openNotification },
  } = store;

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);

  const [date, setDate] = useState({
    startYear: startOfYear,
    endYear: new Date(now.getFullYear() + 1, 0, 1),
  });

  const getClassesFun = useCallback(
    (value: boolean) => {
      if (value) {
        const startYearFormatted = moment(date.startYear).format("YYYY-MM-DD");
        const endYearFormatted = moment(date.endYear).format("YYYY-MM-DD");
        getClasses({ startYear: startYearFormatted, endYear: endYearFormatted })
          .then(() => {})
          .catch((err) => {
            openNotification({
              title: "Failed to Get Classes",
              message: err.message,
              type: "error",
            });
          });
      }
    },
    [date, openNotification, getClasses]
  );

  useEffect(() => {
    if (firstTimeCall) {
      getClassesFun(true);
      setFirstTimeCall(false);
    }
  }, [getClassesFun, firstTimeCall]);

  return (
    <Box boxShadow="rgb(0 0 0 / 12%) 0px 0px 11px" rounded={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading
          fontSize={"xl"}
          fontWeight={700}
          color="blue.500"
          pl={5}
          pt={5}
        >
          Select Class
        </Heading>
        <Flex gap={6} alignItems="center" display="none">
          <Box width="10rem">
            <CustomInput
              type="date"
              placeholder="Start Year"
              value={date.startYear}
              name="date"
              onChange={(e: any) => setDate({ ...date, startYear: e })}
              isClear={true}
            />
          </Box>
          <Box w="10rem">
            <CustomInput
              type="date"
              placeholder="End Year"
              value={date.endYear}
              name="date"
              minDate={date.startYear}
              onChange={(e: any) => setDate({ ...date, endYear: e })}
              isClear={true}
            />
          </Box>
          <Box>
            <Button
              isDisabled={!(date.startYear && date.endYear)}
              onClick={() => getClassesFun(true)}
            >
              Apply
            </Button>
          </Box>
          <Box w="18rem">
            <CustomInput
              type="select"
              name="section"
              options={[{ label: "First", value: "first" }]}
              isSearchable
            />
          </Box>
        </Flex>
      </Flex>

      <Box
        position="relative"
        overflow="auto"
        className="customScrollBar"
        mt="1rem"
        h={"72vh"}
      >
        <Table className="customTable" variant="striped" size="sm">
          <Thead
            bg={"whiteAlpha.900"}
            stroke={"whiteAlpha.500"}
            bgColor={"red.100"}
            h={10}
          >
            <Tr>
              <Th style={{ textAlign: "center" }}>S.No.</Th>
              <Th style={{ textAlign: "center" }}>Class Name</Th>
              <Th style={{ textAlign: "center" }}>Sections</Th>
              <Th style={{ textAlign: "center" }}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableLoader loader={classes.loading} show={classes.data.length}>
            {classes.data.map((item: any, index: number) => (
              <Tr key={item._id}>
                <Td style={{ textAlign: "center" }}>{index + 1}</Td>
                <Td p={3} style={{ textAlign: "center" }}>
                  <Text
                    cursor="pointer"
                    _hover={{ textDecoration: "underline", color: "blue" }}
                  >
                    {item.name}
                  </Text>
                </Td>
                <Td p={3} style={{ textAlign: "center" }}>
                  <select
                    onChange={(e: any) => {
                      sessionStorage.setItem(
                        "classInfo",
                        JSON.stringify({
                          classId: item._id,
                          className: item.name,
                          section: e.target.value,
                        })
                      );
                      navigate(
                        `/dashboard/students/index?class=${encodeURIComponent(
                          item.name?.split(" ")?.join("-")
                        )}&section=${JSON.parse(e.target.value)
                          ?.name?.split(" ")
                          ?.join("-")}&startYear=${moment(
                          item.startYear
                        ).format("YYYY-MM-DD")}&endYear=${moment(
                          item.endYear
                        ).format("YYYY-MM-DD")}`,
                        {
                          state: {
                            classId: item._id,
                            className: item.name,
                            sectionId: JSON.parse(e.target.value).id,
                          },
                        }
                      );
                    }}
                  >
                    <option key={index} value={1}>
                      {"Select Section"}
                    </option>
                    {item.sections.map((it: any, index: number) => {
                      return (
                        <option
                          key={index}
                          value={JSON.stringify({ name: it.name, id: it._id })}
                        >
                          {it.name}
                        </option>
                      );
                    })}
                  </select>
                </Td>
                <Td p={3} style={{ textAlign: "center" }}>
                  <Flex gap={5} justify="center">
                    <Box onClick={() => alert("Rahul")}>
                      <Icon as={FaEye} cursor="pointer" color="blue.500" />
                    </Box>
                    <Box
                      onClick={() =>
                        tableForm({
                          type: "edit",
                          data: item,
                          open: true,
                        })
                      }
                    >
                      <Icon as={FaEdit} cursor="pointer" color="blue.500" />
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
            </TableLoader>
          </Tbody>
        </Table>
      </Box>
      <Pagination currentPage={1} totalPages={classes.totalPages} onPageChange={() => {}} />
    </Box>
  );
});

export default ClassTableCard;