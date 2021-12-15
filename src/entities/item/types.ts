export interface IItemList {
	itemList: IItem[];
}

export interface IItem {
	itemId: string;
	itemName: string;
	brandName?: string;
	itemLink?: string;
	strikeOutPrice?: string;
	displayPrice?: string;
	isAdultItem?: boolean;
	ItemImages?: IItemImages[];
}

export interface IItemImages {
	itemId: number;
	src: string;
}
