import { Box, Heading } from "@chakra-ui/react";
import TabElement from "./element/TabElement";
import { observer } from "mobx-react-lite";

const ProfileTabContainer = observer(({ type, sideTab, editTabLink }: any) => {
  return (
    <Box p={4} borderRadius="lg" bg="white" boxShadow="xl">
      {sideTab &&
        sideTab.map((item: any, index: number) => {
          return (
            <Box
              key={index}
              mb={3}
            >
              {item.heading && (
                <Heading fontSize="lg" color="brand.500" mb={4} mt={3}>
                  {item.heading}
                </Heading>
              )}
              <TabElement
                Icon={item.icon}
                title={item.title}
                path={item.path}
                type={type}
                editTabLink={editTabLink}
              />
            </Box>
          );
        })}
    </Box>
  );
});

export default ProfileTabContainer;
