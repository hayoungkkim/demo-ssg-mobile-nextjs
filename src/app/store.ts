import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import counterReducer from "@/features/counter/counterSlice";
import clockReducer from "@/features/clock/clockSlice";
import itemReducer from "@/features/item/itemSlice";

const rootReducer = combineReducers({
	counter: counterReducer,
	clock: clockReducer,
	item: itemReducer,
});

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== "production",
	});
};

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
