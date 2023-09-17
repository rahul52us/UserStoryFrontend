import { Box, Grid } from "@chakra-ui/react";
import YoutubeVideoCard from "../../../config/component/Videos/YoutubeVideos/YoutubeVideoCard";

const VideosContainer = () => {
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

  return (
    <Box p={5}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={6}
      >
        {videos.map((item,index) => (
          <Box key={index}>
            <YoutubeVideoCard link={item} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default VideosContainer;
