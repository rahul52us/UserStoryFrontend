import { Box } from "@chakra-ui/react"
import { observer } from "mobx-react-lite";

const SidebarLogo = observer(() => {
  return (
    <Box bgGradient='linear-gradient(to right, #ff9d01, #ffaa01)' p={2} mb={3}>
        <img src="https://www.radiustheme.com/demo/html/psdboss/akkhor/akkhor/img/logo.png" alt="" />
    </Box>
  )
})

export default SidebarLogo;