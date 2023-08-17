import {
  Box,
  Button,
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
import { FaEdit } from "react-icons/fa";
import moment from "moment";
import { observer } from "mobx-react-lite";
import store from "../../../../../../store/store";
import CustomInput from "../../../../../../config/component/CustomInput/CustomInput";
import TableLoader from "../../../../../../config/component/DataTable/TableLoader";
import Pagination from "../../../../../../config/component/pagination/Pagination";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const StudentTable = observer(({ setDate, date, editLink }: any) => {
  const navigate = useNavigate();
  const { className } = useParams();
  const location = useLocation();
  const {
    Student: { student },
  } = store;

  return (
    <Box boxShadow="rgb(0 0 0 / 12%) 0px 0px 11px" rounded={8}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pt={2}
        pl={4}
        pr={2}
      >
        <Heading fontSize={"xl"} fontWeight={700} color="blue.500">
          {className?.split("-").join(" ")}
        </Heading>
        <Flex gap={6} display="flex" alignItems="center">
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
              onClick={() => {}}
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
          <Box
            onClick={() =>
              navigate(
                `/dashboard/students/create?class=${new URLSearchParams(
                  location.search
                ).get("class")}&section=${new URLSearchParams(
                  location.search
                ).get("section")}&startYear=${moment(date.startYear).format(
                  "YYYY-MM-DD"
                )}&endYear=${moment(date.endYear).format("YYYY-MM-DD")}`
              )
            }
          >
            CREATE
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
              <Th textAlign="center">Name</Th>
              <Th textAlign="center">Username</Th>
              <Th textAlign="center">Date Of Joining</Th>
              <Th textAlign="center">Created Date</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableLoader loader={student.loading} show={student.data.length} />
            {student.data.map((item: any) => (
              <Tr key={item._id}>
                <Td textAlign="center" p={3}>
                  {item.user?.name || "-"}
                </Td>
                <Td textAlign="center" p={3}>
                  {item.user?.username || "-"}
                </Td>
                <Td textAlign="center" p={3}>
                  {item?.user?.createdAt
                    ? moment(item?.uses?.createdAt).format("DD-MM-YYYY")
                    : "-"}
                </Td>
                <Td textAlign="center" p={3}>
                  {item.user?.username || "-"}
                </Td>
                <Td textAlign="center" p={3}>
                  <Flex gap={5} justify="center">
                    <Box onClick={() => editLink(item._id)}>
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