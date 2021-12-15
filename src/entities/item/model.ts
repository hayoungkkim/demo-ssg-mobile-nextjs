import { IItem, IItemImages } from "./types";

export function mapItem(data: any): IItem {
	return {
		itemId: data.item_id,
		itemName: data.item_name,
		brandName: data.brand_name,
		itemLink: data.item_link,
		strikeOutPrice: data.strike_out_price,
		displayPrice: data.display_price,
		isAdultItem: data.is_adult_item,
		ItemImages: data.ItemImages.map(mapItemImages),
	};
}

export function mapItemImages(data: any): IItemImages {
	return {
		itemId: data.item_id,
		src: data.src,
	};
}
