"use client";

import { DiceAction, DiceState } from "@/types/dice-reducer";

export const initialState: DiceState = {
  myDice: 0,
  comDice: 0,
  checkDice: false,
};

export const diceReducer = (state: DiceState, action: DiceAction) => {
  switch (action.type) {
    case "ROLL_DICE":
      return {
        ...state,
        myDice: action.payload.myDice,
        comDice: action.payload.comDice,
      };
    case "RESET_DICE":
      return initialState;
    case "CHECK_DICE":
      return {
        ...state,
        checkDice: action.payload,
      };
    default:
      return state;
  }
};
