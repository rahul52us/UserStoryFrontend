import { Flex, IconButton, Input, useBreakpointValue } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import store from "../../../../../../store/store";

const HeaderLogo = observer(() => {
  const isLargerThanXl = useBreakpointValue({ lg: true });

  const {
    layout: { fullScreenModeFun, fullScreenMode },auth : {closeSearchBar}
  } = store;
  return (
    <Flex alignItems="center" display={"flex"} ml={2}>
      {isLargerThanXl &&
        (fullScreenMode ? (
          <IconButton
            icon={<BiRightArrowAlt fontSize={25} />}
            onClick={() => fullScreenModeFun(!fullScreenMode)}
            variant="ghost"
            size="lg"
            style={{ marginRight: "1rem", marginTop: "2px" }}
            aria-label="open the drawer button"
          />
        ) : (
          <IconButton
            icon={<BiLeftArrowAlt fontSize={25} />}
            onClick={() => fullScreenModeFun(!fullScreenMode)}
            variant="ghost"
            size="lg"
            style={{ marginRight: "1rem", marginTop: "2px" }}
            aria-label="open the drawer button"
          />
        ))}
      <Input
        type="text"
        name="search"
        placeholder="Search here"
        w={isLargerThanXl ? "90%" : "95%"}
        onKeyDown={closeSearchBar}
      />
    </Flex>
  );
});

export default HeaderLogo;
