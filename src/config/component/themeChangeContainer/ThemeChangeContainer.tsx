import { observer } from "mobx-react-lite"
import CustomDrawer from "../Drawer/CustomDrawer"
import store from "../../../store/store"
import ColorPickerComponent from "../ColorPicker/ColorPicker"
import { Button } from "@chakra-ui/react"

const ThemeChangeContainer = observer(() => {
    const {themeStore : {openThemeDrawer, setOpenThemeDrawer,resetTheme}} = store
  return (
    <CustomDrawer open={openThemeDrawer.open} close={setOpenThemeDrawer} title="Theme">
        <ColorPickerComponent />
        <Button onClick={() => resetTheme()}>Reset Theme</Button>
    </CustomDrawer>
  )
})

export default ThemeChangeContainer