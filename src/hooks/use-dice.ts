"use client";

import { useCallback, useContext } from "react";
import { DiceContext } from "@/contexts/dice-context";
import { initialState } from "@/reducers/dice-reducer";

export default function useDice() {
  const context = useContext(DiceContext);

  if (!context) {
    throw new Error("useDice must be used within a DiceProvider");
  }

  const { state, dispatch } = context;

  const rollDice = useCallback(() => {
    const myDice = Math.floor(Math.random() * 6) + 1;
    const comDice = Math.floor(Math.random() * 6) + 1;
    dispatch({
      type: "ROLL_DICE",
      payload: { myDice: myDice, comDice: comDice },
    });
  }, [dispatch]);

  const resetDice = useCallback(() => {
    dispatch({ type: "RESET_DICE", payload: initialState });
  }, [dispatch]);

  const checkDice = useCallback(() => {
    dispatch({ type: "CHECK_DICE", payload: !state.checkDice });
  }, [dispatch, state.checkDice]);

  return { state, rollDice, resetDice, checkDice };
}
