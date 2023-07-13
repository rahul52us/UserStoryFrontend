import { Grid, GridItem } from '@chakra-ui/react'
import WidgetCard from '../../../config/component/WigdetCard/WidgetCard'

const DashWidgetCard = () => {
  return (
    <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={4}
        marginX="auto"
      >
        {[1, 2, 3].map((_, key) => (
          <GridItem key={key}>
            <WidgetCard />
          </GridItem>
        ))}
      </Grid>
  )
}

export default DashWidgetCard