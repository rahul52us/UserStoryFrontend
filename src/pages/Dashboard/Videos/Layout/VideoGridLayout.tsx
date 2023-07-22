import { Grid, Box } from "@chakra-ui/react";

import YoutubeVideoCard from "../../../../config/component/Videos/YoutubeVideos/YoutubeVideoCard";
const videos: string[] = [
  "XGgQaB-TbaM",
  "hi0301FRL3g",
  "3heVqPjpEww",
  "ULVfS6SkvlY",
  "B7wsylEjIjQ",
  "XGgQaB-TbaM",
  "hi0301FRL3g",
  "3heVqPjpEww",
  "ULVfS6SkvlY",
  "B7wsylEjIjQ",
  "jPo2DhrFkVM",
];

const YoutubeVideoIndex = () => {
  return (
    <Box p={5}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {videos.map((item, index) => (
          <YoutubeVideoCard link={item} key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default YoutubeVideoIndex;
