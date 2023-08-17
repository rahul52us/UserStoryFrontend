import { Box, Heading } from "@chakra-ui/react";
import TabElement from "./element/TabElement";
import { observer } from "mobx-react-lite";

const ProfileTabContainer = observer(({ type, sideTab, editTabLink }: any) => {
  return (
    <Box border="1px solid #e9ecef" borderRadius={5} p={4} flex={1}>
        {sideTab &&
          sideTab.map((item: any, index: number) => {
            return (
              <Box mt={6} key={index}>
                {item.heading && (
                  <Heading fontSize="lg" color="#002058">
                    {item.heading}
                  </Heading>
                )}
                <TabElement
                  key={index}
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