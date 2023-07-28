import { Avatar, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";
import StarRatingIcon from "../../../../config/component/StarRatingIcon/StarRatingIcon";
import { FaEdit } from "react-icons/fa";

const CategoryTable = ({ data, setFormModel }: any) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <Table variant="striped">
        <Thead
          bg={"whiteAlpha.900"}
          stroke={"whiteAlpha.500"}
          bgColor={"red.100"}
        >
          <Tr>
            <Th>Thumbnail</Th>
            <Th minW={150} textAlign="center">
              Title
            </Th>
            <Th minW={160} textAlign="center">
              Total Notes
            </Th>
            <Th minW={160} textAlign="center">
              Creator
            </Th>
            <Th minW={160} textAlign="center">
              Rating
            </Th>
            <Th minW={160} textAlign="center">
              Pricing Type
            </Th>
            <Th minW={160} textAlign="center">
              Original Price
            </Th>
            <Th minW={160} textAlign="center">
              Discount Price
            </Th>
            <Th minW={160} textAlign="center">
              Created Date
            </Th>
            <Th minW={100} textAlign="center">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: any, index: any) => {
            return (
              <Tr key={index}>
                <Td>
                  <Avatar
                    src={item.thumbnail}
                    name={item.title}
                    w={10}
                    h={10}
                  />
                </Td>
                <Td fontSize={"sm"} textAlign="center" minW={180}>
                  {item.title}
                </Td>
                <Td textAlign="center">{item.totalChildData}</Td>
                <Td textAlign="center" w={180}>
                  {item.createdBy?.name}
                </Td>
                <Td textAlign="center" minW={160}>
                  <StarRatingIcon rating={item?.rating} />
                </Td>
                <Td textAlign="center">{item?.pricingType}</Td>
                <Td textAlign="center">{item?.originalPrice}</Td>
                <Td textAlign="center">{item?.discountPrice}</Td>
                <Td textAlign="center">
                  {item?.createdAt
                    ? moment(item?.createdAt).format("DD-MM-YYYY")
                    : "-"}
                </Td>
                <Td textAlign="center">
                  <Icon onClick={() => setFormModel({
                    open : true,
                    type : 'edit',
                    data : item
                  })}><FaEdit /></Icon>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default CategoryTable;
