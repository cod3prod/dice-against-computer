"use client";

import { useEffect, useState } from "react";
import Board from "./board";
import Modal from "./modal";
import useScore from "@/hooks/use-score";
import DiceLog from "./dice-log";

export default function Game() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { state: scoreState } = useScore();

  useEffect(() => {
    if (
      scoreState.myScore === scoreState.targetScore ||
      scoreState.comScore === scoreState.targetScore
    ) {
      setIsModalOpen(true);
    }
  }, [scoreState.myScore, scoreState.comScore, scoreState.targetScore]);

  useEffect(() => {
    setIsModalOpen(true);
  }, [scoreState.checkReset]);

  return (
    <main className="p-4 flex-1 flex flex-col items-center justify-start gap-4">
      <Board />
      <DiceLog />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </main>
  );
}
