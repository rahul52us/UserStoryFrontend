import { Box, Grid, GridItem } from "@chakra-ui/react";
import ExampleTable from "../../config/component/DashTable/DashTable";
import DashboardBanner from "./component/DashboardBanner";
import DashWidgetCard from "./component/DashWidgetCard";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { omit } from "lodash";
import store from "../../store/store";
import moment from "moment";
import QuizMessages from "../../config/constant/messages";
import DeleteModel from "../../config/component/common/DeleteModel";
import { deleteCategoryFunction } from "./quiz/component/category/utils/function";
import { useTranslation } from "react-i18next";
import CustomTable from "../../config/component/CustomTable/CustomTable";

const removeKeys: (keyof Category)[] = [
"description",
"userId",
"updatedAt",
"__v",
"_id",
];

interface Category {
_id: string;
title: string;
createdAt: string;
description?: string;
userId?: string;
updatedAt?: string;
__v?: string;
topics: any;
}

const DashboardIndex = observer(() => {
const { t } = useTranslation();
const [fetchCategoryLoading, setFetchCategoryLoading] = useState(true);
const {
quiz: { categories, setDeleteCategoryModal },
} = store;

const fetchCategories = async () => {
try {
	await store.quiz.getCategories();
} catch (err: any) {
	store.auth.openNotification({
		message: err.message,
		title: QuizMessages.error.category.get,
		type: "error",
	});
} finally {
	setFetchCategoryLoading(false);
}
};

useEffect(() => {
fetchCategories();
}, []);

const transformedData: Category[] = categories
.slice(0, 5)
.map((item: Category, index: number) => ({
	sno: index + 1,
	...omit(item, removeKeys),
	action: item._id,
	createdAt: item.createdAt && moment(item.createdAt).format("DD-MM-YYYY"),
	title: `${item.title?.substring(0, 12)}...`,
	topics: item.topics?.length,
}));

const headers =
transformedData.length > 0 ? Object.keys(transformedData[0]) : [];

const data = [
{ id: 1, name: "John Doe", age: 25, role: "Developer" },
{ id: 2, name: "Jane Smith", age: 30, role: "Designer" },
{ id: 3, name: "Mike Johnson", age: 35, role: "Manager" },
{ id: 4, name: "Sarah Williams", age: 28, role: "Developer" },
];

const columns = [
{
	field: "name",
	title: "Name",
	sortable: true,
	filterable: true,
	action: (data: any) => console.log(data),
},
{
	field: "age",
	title: "Age",
	sortable: true,
	filterable: true,
	link: true,
},
{
	field: "role",
	title: "Role",
	sortable: true,
	filterable: true,
	badge: true,
	badgeColor: "red",
	link: true,
	tooltip: true,
},
];

return (
<>
	<DashboardBanner />
	<DashWidgetCard />
	<CustomTable data={data} columns={columns} />
	<Box mt={5}>
		<Grid
			templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2,1fr)" }}
			gap={4}
		>
			<GridItem>
				<ExampleTable
					createNew={t("quiz.create_new")}
					title={t("quiz.quiz_categories")}
					headers={headers}
					rowData={transformedData}
					loading={fetchCategoryLoading}
					deleteAction={setDeleteCategoryModal}
				/>
			</GridItem>
			<GridItem>
				<ExampleTable
					createNew={t("quiz.create_new")}
					title={t("quiz.quiz_categories")}
					headers={headers}
					rowData={transformedData}
					loading={fetchCategoryLoading}
					deleteAction={setDeleteCategoryModal}
				/>
			</GridItem>
		</Grid>
	</Box>
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
