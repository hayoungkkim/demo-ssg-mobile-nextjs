import { HStack, Text, TextProps, StackProps, useColorModeValue as mode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PriceTagProps {
	currency: string;
	price: string;
	salePrice?: string;
	rootProps?: StackProps;
	priceProps?: TextProps;
	salePriceProps?: TextProps;
}

export type FormatPriceOptions = { locale?: string; currency?: string };

export function formatPrice(value: number, opts: { locale?: string; currency?: string } = {}) {
	const { locale = "ko-KR", currency = "KRW" } = opts;
	const formatter = new Intl.NumberFormat(locale, {
		currency,
		style: "currency",
		maximumFractionDigits: 2,
	});
	return formatter.format(value);
}

export const PriceTag = (props: PriceTagProps) => {
	const { price, salePrice, rootProps, priceProps, salePriceProps } = props;
	return (
		<HStack spacing="1" {...rootProps}>
			{price && <Price textProps={priceProps}>{formatPrice(parseInt(price))}</Price>}
			<SalePrice {...salePriceProps}>{formatPrice(parseInt(salePrice))}</SalePrice>
		</HStack>
	);
};

interface PriceProps {
	children?: ReactNode;
	isOnSale?: boolean;
	textProps?: TextProps;
}

const Price = (props: PriceProps) => {
	const { children, textProps } = props;
	return (
		<Text as="span" fontWeight="medium" color={mode("gray.400", "gray.700")} textDecoration="line-through" {...textProps}>
			{children}
		</Text>
	);
};

const SalePrice = (props: TextProps) => <Text as="span" fontWeight="semibold" color={mode("gray.800", "gray.100")} {...props} />;
