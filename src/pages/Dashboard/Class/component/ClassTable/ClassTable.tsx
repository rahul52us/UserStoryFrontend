import { observer } from "mobx-react-lite";
import store from "../../../../../store/store";
import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaEdit, FaEye } from "react-icons/fa";
import moment from "moment";
import SearchCardInput from "../../../../../config/component/SearchInput/SearchCardInput/SearchCardInput";
import CustomInput from "../../../../../config/component/CustomInput/CustomInput";
import TableLoader from "../../../../../config/component/DataTable/TableLoader";

interface TableI {
  tableForm: any;
}

const ClassTable = observer(({ tableForm }: TableI) => {
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

  useEffect(() => {
    getClasses({startYear : date.startYear, endYear : date.endYear})
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
  }, [getClasses, openNotification, date]);

  return (
    <Box
      boxShadow="rgb(0 0 0 / 12%) 0px 0px 11px"
      rounded={8}
      p="1.025rem 1.075rem"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize={"xl"} fontWeight={700} color="blue.500">
           Class
        </Heading>
        <Flex gap={6}>
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
          <Box w="18rem">
            <SearchCardInput />
          </Box>
        </Flex>
      </Flex>
      <Box
        position="relative"
        overflow="auto"
        className="customScrollBar"
        mt="1rem"
        h={'70vh'}
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
              <Th textAlign="center">Creater Name</Th>
              <Th textAlign="center">Created Date</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
          <TableLoader loader={classes.loading} show={classes.data.length} />
            {classes.data.map((item: any) => (
              <Tr key={item._id}>
                <Td textAlign="center" p={3}>{item.name}</Td>
                <Td textAlign="center" p={3}>{item.sections?.length || 0}</Td>
                <Td textAlign="center" p={3}>{item.createdBy?.name || "-"}</Td>
                <Td textAlign="center" p={3}>
                  {item?.createdAt
                    ? moment(item?.createdAt).format("DD-MM-YYYY")
                    : "-"}
                </Td>
                <Td textAlign="center">
                  <Flex gap={5} justify="center">
                  <Box
                      onClick={() => {
                        alert("Rahul")
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
    </Box>
  );
});

export default ClassTable;
