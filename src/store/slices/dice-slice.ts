import { createSlice } from "@reduxjs/toolkit";

const initialState: DiceState = {
  myDice: 0,
  comDice: 0,
  checkDice: false,
};

const diceSlice = createSlice({
  name: "dice",
  initialState,
  reducers: {
    rollDice: (state) => {
      state.myDice = Math.floor(Math.random() * 6) + 1;
      state.comDice = Math.floor(Math.random() * 6) + 1;
    },
    resetDice: (state) => {
      state.myDice = 0;
      state.comDice = 0;
      state.checkDice = false;
    },
    checkDice: (state) => {
      state.checkDice = !state.checkDice;
    },
  },
});

export const { rollDice, resetDice, checkDice } = diceSlice.actions;
export default diceSlice.reducer;
