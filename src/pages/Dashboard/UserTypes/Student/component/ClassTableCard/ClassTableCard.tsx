import { observer } from "mobx-react-lite";
import { useState, useEffect, useCallback } from "react";
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

const ClassTableCard = observer(({ tableForm }: TableI) => {
  const navigate = useNavigate();
  const [firstTimeCall, setFirstTimeCall] = useState(true);
  const {
    classStore: { getClasses, classes },
    auth: { openNotification },
  } = store;

  const now = new Date();
  const oneYearLater = new Date(
    now.getFullYear() + 1,
    now.getMonth(),
    now.getDate()
  );

  const [date, setDate] = useState({
    startYear: now,
    endYear: oneYearLater,
  });

  const getClassesFun = useCallback(
    (value: boolean) => {
      // GET THE CLASSES BY THE SELECTED YEARS
      if (value) {
        getClasses({
          startYear: moment(date.startYear).format("YYYY-MM-DD"),
          endYear: moment(date.endYear).format("YYYY-MM-DD"),
        })
          .then((data) => {
            console.log(data);
          })
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
    <Box
      boxShadow="rgb(0 0 0 / 12%) 0px 0px 11px"
      rounded={8}
      p="0.805rem 0.805rem"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize={"xl"} fontWeight={700} color="blue.500">
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
        h={"70vh"}
      >
        <Table className="customTable" variant="striped" size="sm">
          <Thead
            bg={"whiteAlpha.900"}
            stroke={"whiteAlpha.500"}
            bgColor={"red.100"}
            h={10}
          >
            <Tr>
              <Th textAlign="center">Class Name</Th>
              <Th textAlign="center">Sections</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableLoader loader={classes.loading} show={classes.data.length} />
            {classes.data.map((item: any) => (
              <Tr key={item._id}>
                <Td textAlign="center" p={3}>
                  <Text
                    cursor="pointer"
                    fontWeight="bold"
                    _hover={{ textDecoration: "underline", color: "blue" }}
                    onClick={() =>
                      navigate(
                        `/dashboard/students/create/class/${encodeURIComponent(
                          item.name?.split(" ")?.join("-")
                        )}`
                      )
                    }
                  >
                    {item.name}
                  </Text>
                </Td>
                <Td textAlign="center" p={3} fontWeight="bold">
                  {item.sections?.length || 0}
                </Td>
                <Td textAlign="center" p={3}>
                  <Flex gap={5} justify="center">
                    <Box
                      onClick={() => {
                        alert("Rahul");
                      }}
                    >
                      <Icon as={FaEye} cursor="pointer" color="blue.500" />
                    </Box>
                    <Box
                      onClick={() => {
                        tableForm({
                          type: "edit",
                          data: item,
                          open: true,
                        });
                      }}
                    >
                      <Icon as={FaEdit} cursor="pointer" color="blue.500" />
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    </Box>
  );
});

export default ClassTableCard;