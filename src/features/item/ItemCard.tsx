import { AspectRatio, Box, Image, Skeleton, Stack, StackProps, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { ItemState } from "./itemSlice";

interface Props {
	item: ItemState;
	rootProps?: StackProps;
}

export const ItemCard = (props: Props) => {
	const { item, rootProps } = props;
	const { brand_name, item_name, ItemImages, strike_out_price, display_price } = item;
	return (
		<Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
			<Box position="relative">
				<AspectRatio ratio={4 / 3}>
					<Image src={ItemImages[0].src} alt={item_name} draggable="false" fallback={<Skeleton />} borderRadius={useBreakpointValue({ base: "md", md: "xl" })} />
				</AspectRatio>
			</Box>
			<Stack>
				<Stack spacing="1">
					{brand_name && <Text color={useColorModeValue("gray.700", "gray.400")}>{brand_name}</Text>}
					<Text fontWeight="semibold" color={useColorModeValue("gray.700", "gray.400")} noOfLines={2}>
						{item_name}
					</Text>
					<PriceTag price={strike_out_price} salePrice={display_price} currency="USD" />
				</Stack>
			</Stack>
		</Stack>
	);
};
