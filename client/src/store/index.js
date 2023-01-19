import { configureStore } from "@reduxjs/toolkit";

import itemSlice from "./item-slice";
import championSlice from "./champion-slice";
import rolesSlice from "./roles-slice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    champions: championSlice.reducer,
    roles: rolesSlice.reducer,
  },
});

export const itemActions = itemSlice.actions;
export const championActions = championSlice.actions;
export const rolesActions = rolesSlice.actions;

export default store;
