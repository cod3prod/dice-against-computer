export type ScoreState = {
  targetScore: number;
  myScore: number;
  comScore: number;
  checkReset: boolean;
};

export type ScoreAction =
  | {
      type: "SET_TARGET_SCORE";
      payload: number;
    }
  | {
      type: "UPDATE_SCORE";
      payload: {
        myScore: number;
        comScore: number;
      };
    }
  | {
      type: "RESET_SCORE";
      payload: ScoreState;
    }
  | {
      type: "CHECK_RESET";
      payload: boolean;
    };
