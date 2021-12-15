import axios from "axios";
import { IItemList } from "@/entities/item";

export default class Item {
	public async fetchItem(params: any): Promise<IItemList> {
		const response = await axios.get("http://localhost:3065/api/items");
		return response.data;
	}
}
