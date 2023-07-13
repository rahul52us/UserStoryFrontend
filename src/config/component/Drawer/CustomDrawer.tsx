import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading } from "@chakra-ui/react";
import { useRef } from "react";

interface CustomDrawerProps {
  open: boolean;
  title: string;
  close: any;
  children: any;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  title,
  open,
  close,
  children,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleCloseDrawer = () => {
    close();
  };

  return (
    <Drawer
      isOpen={open}
      placement="right"
      onClose={handleCloseDrawer}
      size="xl"
      finalFocusRef={drawerRef}
    >
      <DrawerOverlay />
      <DrawerContent
        css={{
          transition: "transform 0.1s ease-out",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <DrawerCloseButton />
        <DrawerHeader ref={drawerRef}>
          <Heading color="gray.400" fontSize="md">
            {title}
          </Heading>
        </DrawerHeader>
        <Divider />
        <DrawerBody style={{ overflowY: 'auto' }}>
          <div style={{ minHeight: 'calc(100vh - 245px)' }}>
            {children}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
