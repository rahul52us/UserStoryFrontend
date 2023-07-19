import { Box, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const StarRatingIcon = ({ rating, size = "1rem", color = "gold" } : any) => {
  const maxRating = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      const starColor = i < rating ? color : "gray.300";
      stars.push(
        <Icon key={i} as={FaStar} boxSize={size} color={starColor} m={0.7}/>
      );
    }
    return stars;
  };
  return <><Box>{renderStars()}</Box></>;
};
export default StarRatingIcon;
