import { AspectRatio, Box, Image, Skeleton, Stack, StackProps, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { IItem } from "@/entities/item";

interface Props {
	item: IItem;
	rootProps?: StackProps;
}

export const ItemCard = (props: Props) => {
	const { item, rootProps } = props;
	const { itemName, brandName, strikeOutPrice, displayPrice, ItemImages } = item;
	return (
		<Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
			<Box position="relative">
				<AspectRatio ratio={4 / 3}>
					<Image src={ItemImages[0].src} alt={itemName} draggable="false" fallback={<Skeleton />} borderRadius={useBreakpointValue({ base: "md", md: "xl" })} />
				</AspectRatio>
			</Box>
			<Stack>
				<Stack spacing="1">
					{brandName && (
						<Text fontWeight="semibold" color={useColorModeValue("gray.700", "gray.400")}>
							{brandName}
						</Text>
					)}
					<Text color={useColorModeValue("gray.700", "gray.400")} noOfLines={2}>
						{itemName}
					</Text>
					<PriceTag price={strikeOutPrice} salePrice={displayPrice} currency="USD" />
				</Stack>
			</Stack>
		</Stack>
	);
};
