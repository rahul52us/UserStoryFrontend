import { Grid } from "@chakra-ui/react";
import CategoryCard from "../../../../config/component/Card/CategoryCard/CategoryCard";
import SideFilterContainer from "../../../../config/component/FilterContainer/SideFilterContainer/SideFilterContainer";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import SkeletanCategoryCard from "../../../../config/component/Card/CategoryCard/SkeletanCategoryCard";

const CourseCardContainer = observer(() => {
  const {
    notesStore: {
      categories: { data },
    },
  } = store;
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr 2fr",
        lg: "1fr 4fr",
      }}
      gap={4}
      columnGap={3}
    >
      <SideFilterContainer category={data} />
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "1fr",
          lg: "1fr 1fr",
          xl: "1fr 1fr 1fr",
        }}
        gap={5}
      >
        {data.map((item: any, index: any) => {
          return (
            <CategoryCard
              image={item.image}
              key={index}
              title={item.title}
              description={item.description}
              username={item?.createdBy?.name}
              userPic={item?.createdBy?.pic}
              discountPrice={item.discountPrice}
              originalPrice={item.originalPrice}
              rating={item.rating}
            />
          );
        })}
        <SkeletanCategoryCard />
      </Grid>
    </Grid>
  );
});

export default CourseCardContainer;
