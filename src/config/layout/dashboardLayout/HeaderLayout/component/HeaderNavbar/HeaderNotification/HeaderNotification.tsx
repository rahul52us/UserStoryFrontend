import {
    Badge,
    Box,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tooltip,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";
  import {
    FiBell,
    FiMail,
    FiClock,
    FiAlertCircle,
    FiCheck,
    FiTrash,
  } from "react-icons/fi";
  import { useState } from "react";

  interface Notification {
    id: number;
    type: "message" | "deadline" | "update";
    text: string;
    time: string;
  }

  const HeaderNotification: React.FC = () => {
    const [notifications] = useState<Notification[]>([
      {
        id: 1,
        type: "message",
        text: "New message received",
        time: "10 minutes ago",
      },
      {
        id: 2,
        type: "deadline",
        text: "Task deadline approaching",
        time: "1 hour ago",
      },
      { id: 3, type: "update", text: "New update available", time: "2 days ago" },
      { id: 4, type: "update", text: "New update available", time: "2 days ago" },
      { id: 5, type: "update", text: "New update available", time: "2 days ago" },
      { id: 6, type: "update", text: "New update available", time: "2 days ago" },
    ]);

    const unreadCount = notifications.length; // Calculate the unread notifications count

    const { isOpen, onOpen, onClose } = useDisclosure();

    const markAsRead = (id: number) => {
      // Implement logic to mark notification as read
      console.log(`Notification marked as read: ${id}`);
    };

    const deleteNotification = (id: number) => {
      // Implement logic to delete notification
      console.log(`Notification deleted: ${id}`);
    };

    const getNotificationIcon = (type: string) => {
      switch (type) {
        case "message":
          return <FiMail />;
        case "deadline":
          return <FiClock />;
        case "update":
          return <FiAlertCircle />;
        default:
          return null;
      }
    };

    return (
      <Tooltip>
        <Flex position="relative" align="center">
          <Menu isOpen={isOpen} onClose={onClose} closeOnSelect={false}>
            <MenuButton
              as={IconButton}
              icon={<FiBell />}
              variant="ghost"
              aria-label="Notifications"
              fontSize="xl"
              onClick={onOpen}
              mr={2}
            />
            <MenuList minWidth="240px" boxShadow="md" borderRadius="md">
              <Box maxHeight="400px" overflowY="auto">
                {notifications.length > 0 ? (
                  <VStack align="start" spacing={2} p={2}>
                    {notifications.map((notification) => (
                      <MenuItem
                        key={notification.id}
                        borderRadius="md"
                        _hover={{ bg: "gray.100" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        px={3}
                        py={2}
                      >
                        <Flex align="center">
                          <Box as="span" fontSize="lg" mr={2}>
                            {getNotificationIcon(notification.type)}
                          </Box>
                          <VStack align="start" spacing={1}>
                            <Box>{notification.text}</Box>
                            <Box fontSize="xs" color="gray.500">
                              {notification.time}
                            </Box>
                          </VStack>
                        </Flex>
                        <Flex align="center">
                          <IconButton
                            icon={<FiCheck />}
                            variant="ghost"
                            fontSize="sm"
                            color="green.500"
                            aria-label="Mark as Read"
                            onClick={() => markAsRead(notification.id)}
                            _hover={{ color: "green.600" }}
                            mr={2}
                          />
                          <IconButton
                            icon={<FiTrash />}
                            variant="ghost"
                            fontSize="sm"
                            color="red.500"
                            aria-label="Delete"
                            onClick={() => deleteNotification(notification.id)}
                            _hover={{ color: "red.600" }}
                          />
                        </Flex>
                      </MenuItem>
                    ))}
                  </VStack>
                ) : (
                  <MenuItem>No new notifications</MenuItem>
                )}
              </Box>
            </MenuList>
          </Menu>
          {unreadCount > 0 && (
            <Badge
              position="absolute"
              top="-2px"
              right="-3px"
              borderRadius="full"
              variant="solid"
              colorScheme="red"
              fontSize="0.5em"
              px={2}
              py={1}
            >
              {unreadCount}
            </Badge>
          )}
        </Flex>
      </Tooltip>
    );
  };

  export default HeaderNotification;
