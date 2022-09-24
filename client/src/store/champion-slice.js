import { createSlice } from "@reduxjs/toolkit";

const championSlice = createSlice({
  name: "champions",
  initialState: { champions: [] },
  reducers: {
    getChampions(state, action) {
      state.champions = [...action.payload.champions];
    },
    updateChampion(state, action) {
      let idx = -1
      for (let i = 0; i < state.champions.length; i++) {
        if (action.payload.champion._id === state.champions[i]._id) idx = i
      }
      console.log(idx)
      state.champions[idx] = action.payload.champion
    }
  },
});

export const championActions = championSlice.actions;

export default championSlice;
