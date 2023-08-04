import DashboardBanner from "./component/DashboardBanner";
import DashWidgetCard from "./component/DashWidgetCard";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import DeleteModel from "../../config/component/common/DeleteModel";
import { deleteCategoryFunction } from "./quiz/component/Forms/utils/function";
import DashChartContainer from "./component/DashChartContainer";


const DashboardIndex = observer(() => {
  const {
    quiz: { setDeleteCategoryModal },
  } = store;

  return (
    <>
      <DashboardBanner />
      <DashWidgetCard />
      <DashChartContainer />
      <DeleteModel
        id={store.quiz.openDeleteCategoryModal?.data?._id}
        open={store.quiz.openDeleteCategoryModal?.open}
        close={setDeleteCategoryModal}
        title={"Delete Category"}
        content={`Are you sure , you want to delete ${store.quiz.openDeleteCategoryModal?.data?.title} category`}
        submit={deleteCategoryFunction}
      />
    </>
  );
});

export default DashboardIndex;
