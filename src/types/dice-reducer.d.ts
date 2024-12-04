export type DiceState = {
  myDice: number;
  comDice: number;
  checkDice: boolean;
};

export type DiceAction =
  | {
      type: "ROLL_DICE";
      payload: {
        myDice: number;
        comDice: number;
      };
    }
  | {
      type: "RESET_DICE";
      payload: DiceState;
    }
  | {
      type: "CHECK_DICE";
      payload: boolean;
    };
