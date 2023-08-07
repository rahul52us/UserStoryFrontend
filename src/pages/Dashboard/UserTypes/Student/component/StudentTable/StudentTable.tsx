import { observer } from "mobx-react-lite";
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
import store from "../../../../../../store/store";
import CustomInput from "../../../../../../config/component/CustomInput/CustomInput";
import SearchCardInput from "../../../../../../config/component/SearchInput/SearchCardInput/SearchCardInput";
import TableLoader from "../../../../../../config/component/DataTable/TableLoader";
import Pagination from "../../../../../../config/component/pagination/Pagination";

interface TableI {
  tableForm: any;
}

const StudentTable = observer(({ tableForm }: TableI) => {
  const {
    classStore: { getClasses, classes },
    auth: { openNotification },
  } = store;

  const [date, setDate] = useState({
    startYear: undefined,
    endYear: undefined,
  });

  useEffect(() => {
    getClasses({})
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
  }, [getClasses, openNotification]);

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
              <Th textAlign="center">Creater Name</Th>
              <Th textAlign="center">Created Date</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableLoader loader={false} />
            {classes.data.map((item: any) => (
              <Tr key={item._id}>
                <Td textAlign="center" p={3}>
                  {item.name}
                </Td>
                <Td textAlign="center" p={3}>
                  {item.sections?.length || 0}
                </Td>
                <Td textAlign="center" p={3}>
                  {item.createdBy?.name || "-"}
                </Td>
                <Td textAlign="center" p={3}>
                  {item?.createdAt
                    ? moment(item?.createdAt).format("DD-MM-YYYY")
                    : "-"}
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

export default StudentTable;
