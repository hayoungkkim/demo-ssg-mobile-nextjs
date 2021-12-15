import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import network from "@/network";

import type { AppState } from "@/app/store";

const initialState: any = {
	itemList: [],
};

export const getItems = createAsyncThunk("item/getItems", async () => {
	const itemData = await network.item().fetchItem({});
	return itemData;
});

export const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(HYDRATE, (state, action: any) => {
				const nextState = {
					...state,
					...action.payload.item,
				};
				return nextState;
			})
			.addCase(getItems.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getItems.fulfilled, (state, action) => {
				console.log(action.payload);
				state.status = "idle";
				state.itemList = action.payload.itemList;
			})
			.addCase(getItems.rejected, (state, action) => {
				state.status = "failed";
			});
	},
});

export const selectItem = (state: AppState) => state.item;

export default itemSlice.reducer;
