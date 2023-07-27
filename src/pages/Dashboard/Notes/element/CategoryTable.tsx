import { Avatar, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { toJS } from "mobx";
import moment from "moment";
import StarRatingIcon from "../../../../config/component/StarRatingIcon/StarRatingIcon";

const CategoryTable = ({ data }: any) => {
  console.log(toJS(data));
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
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default CategoryTable;
