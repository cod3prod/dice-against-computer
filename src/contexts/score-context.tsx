"use client";

import { scoreReducer, initialState } from "@/reducers/score-reducer";
import { ScoreAction, ScoreState } from "@/types/score-reducer";
import { createContext, useReducer } from "react";

type ScoreContextType = {
  state: ScoreState;
  dispatch: React.Dispatch<ScoreAction>;
};

export const ScoreContext = createContext<ScoreContextType | null>(null);

export const ScoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  return (
    <ScoreContext.Provider value={{ state, dispatch }}>
      {children}
    </ScoreContext.Provider>
  );
};
