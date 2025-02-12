import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./slices/score-slice";
import diceReducer from "./slices/dice-slice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    dice: diceReducer,
  },
});
