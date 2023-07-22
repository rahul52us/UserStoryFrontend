import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import store from "../../../store/store";
import "./table.css";

const TestimonialList = observer(() => {
  const {
    TestimonialStore: { getTestimonials, testimonials },
    auth: { openNotification },
  } = store;

  useEffect(() => {
    if (!testimonials.hasFetch) {
      getTestimonials({ page: 1 })
        .then(() => {})
        .catch((err) => {
          openNotification({
            title: "Failed to get testimonial",
            message: err.message,
            type: "error",
          });
        });
    }
  }, [getTestimonials, openNotification, testimonials.hasFetch]);
  return (
    <Box
      width="100%"
      overflowX="scroll"
      boxShadow={"2xl"}
      borderColor={"red.200"}
      bg="white"
    >
      <Table variant="striped">
        <Thead
          bg={"whiteAlpha.900"}
          stroke={"whiteAlpha.500"}
          position={"sticky"}
          top={0}
          left={0}
          right={0}
        >
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Profession</Th>
          </Tr>
        </Thead>
        <Tbody>
          {testimonials.data.map((testimonial: any) => {
            return (
              <Tr key={testimonial.id} >
                <Td>
                  <Avatar src={testimonial.image} size={"sm"} />
                </Td>
                <Td>{testimonial.name}</Td>
                <Td>
                  <Tooltip
                    label={testimonial.description}
                    hasArrow
                    textAlign={"center"}
                  >
                    {testimonial.description?.slice(0, 50)}
                  </Tooltip>
                </Td>
                <Td>{testimonial.profession}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
});

export default TestimonialList;
