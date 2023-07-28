import { useState, useEffect } from "react";
import { Box, Button, Card, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import BarChart from "../../../config/component/charts/BarChart";
import store from "../../../store/store";
import { toJS } from "mobx";
import CategoryTable from "./element/CategoryTable";
import CustomDrawer from "../../../config/component/Drawer/CustomDrawer";
import FormComponent from "./element/FormComponent";

const NotesIndex = observer(() => {
  const [formModel, setFormModel] = useState({ open: false, type: "add", data : null });
  const {
    notesStore: { getCategories, categories },
    auth: { openNotification },
  } = store;

  useEffect(() => {
    if (!categories.hasFetch) {
      getCategories({ page: 1 })
        .then(() => {})
        .catch((err: any) => {
          openNotification({
            type: "error",
            message: err?.message,
            title: "Get Categories Failed",
          });
        });
    }
  }, [getCategories, categories.hasFetch, openNotification]);

  console.log(toJS(categories.data));
  return (
    <Box>
      <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <Card p={3} boxShadow="rgb(0 0 0 / 20%) 0px 0px 11px">
          <BarChart />
        </Card>
        <Card p={3} boxShadow="rgb(0 0 0 / 20%) 0px 0px 11px">
          <div>
            <Button onClick={() => setFormModel({open : true , type : 'add', data : null})}>Add New</Button>
          </div>
        </Card>
      </Grid>
      <Box
        flex={1}
        mt={5}
        boxShadow="rgb(0 0 0 / 20%) 0px 0px 11px"
        p="1.125rem 0.375rem"
        rounded={8}
        my={4}
      >
        <CategoryTable data={categories.data} setFormModel={setFormModel} />
      </Box>

      <CustomDrawer
        open={formModel.open}
        close={() => {
          setFormModel({ open: false, type: "add", data : null });
        }}
        title="Add New Data"
      >
        <FormComponent formData={formModel} />
      </CustomDrawer>
    </Box>
  );
});

export default NotesIndex;