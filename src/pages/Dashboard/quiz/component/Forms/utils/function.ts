import store from "../../../../../../store/store";

const deleteCategoryFunction = (id: string) => {
  store.quiz
    .deleteCategory(id)
    .then((data) => {
      store.quiz.setDeleteCategoryModal()
      store.auth.openNotification({
        message: data.message,
        type: "success",
        title: "Delete Success",
      });
    })
    .catch((err) => {
      store.auth.openNotification({
        message: err?.message,
        type: "error",
        title: "Delete Category Failed",
      });
    })
    .finally(() => {});
};

export { deleteCategoryFunction };
