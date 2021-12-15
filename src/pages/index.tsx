import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

import type { NextPage } from "next";

import { useAppSelector } from "@/app/hooks";

import { selectItem, getItems } from "@/features/item/itemSlice";

import { ItemCard } from "@/features/item/ItemCard";
import { ItemGrid } from "@/features/item/ItemGrid";

import { wrapper } from "@/app/store";

import { mapItem } from "@/entities/item";

const IndexPage: NextPage = () => {
	const { itemList } = useAppSelector(selectItem);

	return (
		<>
			<Tabs>
				<TabList>
					<Tab>One</Tab>
					<Tab>Two</Tab>
					<Tab>Three</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<p>one!</p>
					</TabPanel>
					<TabPanel>
						<p>two!</p>
					</TabPanel>
					<TabPanel>
						<p>three!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<Box as="section" p="12">
				<ItemGrid>
					{itemList.map(mapItem).map((item) => (
						<ItemCard key={item.itemId} item={item} />
					))}
				</ItemGrid>
			</Box>
		</>
	);
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
	await store.dispatch(getItems());

	return {
		props: {},
	};
});

export default IndexPage;
