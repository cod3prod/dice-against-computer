"use client";

import { memo } from "react";

const CurrentScore = memo(
  function CurrentScore({
    score,
  }: {
    score: { myScore: number; comScore: number };
  }) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold animate-pulse">Current Score</h2>
        <p className="text-lg text-muted">{`You : ${score.myScore} | Com : ${score.comScore}`}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.score.myScore === nextProps.score.myScore &&
      prevProps.score.comScore === nextProps.score.comScore
    );
  }
);

export default CurrentScore;
