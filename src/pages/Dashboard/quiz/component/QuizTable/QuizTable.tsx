import { observer } from "mobx-react-lite";
import store from "../../../../../store/store";
import { Box, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import moment from "moment";
import { CardBoxShadow } from "../../../../../config/constant/variable";

interface TableI {
  tableForm?: any;
}

const ClassTable = observer(({ tableForm }: TableI) => {
  const {
    quiz: {
      dashQuiz: { data },
    }
  } = store;

  return (
    <Box title="Class" boxShadow={CardBoxShadow} borderRadius={5}>
      <div style={{ overflowX: "scroll", borderRadius: "5px" }}>
        <Table variant="striped" size="sm" stroke={"whiteAlpha.500"}>
          <Thead
            bg={"whiteAlpha.900"}
            stroke={"whiteAlpha.500"}
            bgColor={"red.100"}
            h={10}
          >
            <Tr>
            <Th textAlign="center">Quiz Title</Th>
              <Th textAlign="center">Class Name</Th>
              <Th textAlign="center">Sections</Th>
              <Th textAlign="center">Catogory</Th>
              <Th textAlign="center">Creater Name</Th>
              <Th textAlign="center">Created Date</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: any) => (
              <Tr key={item._id}>
                <Td textAlign="center">{item?.title}</Td>
                <Td textAlign="center">{item?.class?.name}</Td>
                <Td textAlign="center">{item.section?.name || '-'}</Td>
                <Td textAlign="center">{item.category?.length || '-'}</Td>
                <Td textAlign="center">{item.createdBy?.name || "-"}</Td>
                <Td textAlign="center">
                  {item?.createdAt
                    ? moment(item?.createdAt).format("DD-MM-YYYY")
                    : "-"}
                </Td>
                <Td
                  textAlign="center"
                  onClick={() => {
                    tableForm({
                      type: "edit",
                      data: item,
                      open: true,
                    });
                  }}
                >
                  <Icon as={FaEdit} cursor="pointer" color="blue.500" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </Box>
  );
});

export default ClassTable;
