import { useState } from "react";
import { Box, Checkbox, Flex, Text, useColorModeValue } from "@chakra-ui/react";

interface SearchCheckLabelProps {
	labelText: string;
	total: number;
}

const SearchCheckLabel = ({ labelText, total }: SearchCheckLabelProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckbox = () => {
		setIsChecked((prevChecked) => !prevChecked);
	};

	return (
		<Flex
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			mb={3}
			cursor="pointer"
			onClick={toggleCheckbox}
			flexGrow={"wrap"}
		>
			<Box display="flex" alignItems="center">
				<Checkbox isChecked={isChecked} onChange={toggleCheckbox} />
				<Text
					ml={3}
					fontSize={{base:'sm',md:"small"}}
					color={useColorModeValue("gray.600", "whiteAlpha.700")}
					fontWeight={500}
				>
					{labelText}
				</Text>
			</Box>
			<Text
				h={22}
				backgroundColor="#f6f6f6"
				color="gray.400"
				p={0.6}
				borderRadius={20}
				display="flex"
				alignItems="center"
				justifyContent={"center"}
				fontSize={12}
				fontWeight="bold"
				padding={1}
				minW={6}
			>
				{total}
			</Text>
		</Flex>
	);
};

export default SearchCheckLabel;
