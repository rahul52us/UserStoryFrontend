import { Grid, GridItem } from '@chakra-ui/react'
import WidgetCard from '../../../config/component/WigdetCard/WidgetCard'

const DashWidgetCard = () => {
  return (
    <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={4}
        marginX="auto"
      >
        {[{count : 1235, title : 'Total Users'}, {count : 653, title : 'Total Blogs'}, {count : 2000, title : 'Total Videos'}].map((item, key) => (
          <GridItem key={key}>
            <WidgetCard totalCount={item.count} title={item.title} />
          </GridItem>
        ))}
      </Grid>
  )
}

export default DashWidgetCard