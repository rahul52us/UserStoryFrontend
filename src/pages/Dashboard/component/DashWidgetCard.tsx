import { Grid, GridItem } from '@chakra-ui/react'
import WidgetCard from '../../../config/component/WigdetCard/WidgetCard'
import { dashboard } from '../../../config/constant/routes'

const DashWidgetCard = () => {
  return (
    <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={4}
        marginX="auto"
      >
        {[{count : 1235, title : 'Total Users', link : dashboard.home}, {count : 653, title : 'Total Quiz', link : dashboard.quiz}, {count : 2000, title : 'Total Videos', link : dashboard.videos}].map((item, key) => (
          <GridItem key={key}>
            <WidgetCard totalCount={item.count} title={item.title} link={item.link}/>
          </GridItem>
        ))}
      </Grid>
  )
}

export default DashWidgetCard