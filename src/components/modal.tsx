import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SetTargetScore from "./set-target-score";
import { RiCloseLargeLine } from "react-icons/ri";
import useScore from "@/hooks/use-score";
import GameResult from "./game-result";

export default function Modal({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [onSetting, setOnSetting] = useState(true);
  const [onResult, setOnResult] = useState(false);
  const { state: scoreState } = useScore();

  useEffect(() => {
    const score = scoreState;

    if (
      (score.myScore === score.targetScore ||
        score.comScore === score.targetScore) &&
      score.targetScore !== 0
    ) {
      setOnResult(true);
      setOnSetting(false);
      return;
    } else {
      setOnResult(false);
    }

    setOnSetting(true);
  }, [scoreState.myScore, scoreState.comScore, scoreState.targetScore]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative w-64 bg-surface p-4 rounded-lg">
        <div
          className="absolute top-5 right-4 cursor-pointer hover:text-muted"
          onClick={() => setIsModalOpen(false)}
        >
          <RiCloseLargeLine />
        </div>
        {onResult && <GameResult />}
        {onSetting && <SetTargetScore setIsModalOpen={setIsModalOpen} />}
      </div>
    </div>
  );
}
