import { AspectRatio, Box, Button, HStack, Image, Link, Skeleton, Stack, StackProps, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";
import { IItem } from "@/entities/item";

interface Props {
	item: IItem;
	rootProps?: StackProps;
}

export const ItemCard = (props: Props) => {
	const { item, rootProps } = props;
	const { itemName, brandName, itemLink, strikeOutPrice, displayPrice, ItemImages } = item;
	return (
		<Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
			<Box position="relative">
				<AspectRatio ratio={4 / 3}>
					<Image src={ItemImages[0].src} alt={itemName} draggable="false" fallback={<Skeleton />} borderRadius={useBreakpointValue({ base: "md", md: "xl" })} />
				</AspectRatio>
				<FavouriteButton position="absolute" top="4" right="4" aria-label={`Add ${itemName} to your favourites`} />
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
				<HStack>
					<Rating defaultValue={3} size="sm" />
					<Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
						12 Reviews
					</Text>
				</HStack>
			</Stack>
			<Stack align="center">
				<Button colorScheme="blue" isFullWidth>
					Add to cart
				</Button>
				<Link href={itemLink} textDecoration="underline" fontWeight="medium" color={useColorModeValue("gray.600", "gray.400")}>
					Quick shop
				</Link>
			</Stack>
		</Stack>
	);
};
