"use client";

import { diceReducer, initialState } from "@/reducers/dice-reducer";
import { DiceAction, DiceState } from "@/types/dice-reducer";
import { createContext, useReducer } from "react";

type DiceContextType = {
  state: DiceState;
  dispatch: React.Dispatch<DiceAction>;
};

export const DiceContext = createContext<DiceContextType | null>(null);

export const DiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(diceReducer, initialState);

  return (
    <DiceContext.Provider value={{ state, dispatch }}>
      {children}
    </DiceContext.Provider>
  );
};
