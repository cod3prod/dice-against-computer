"use client";

import { useEffect, useState } from "react";
import Board from "./board";
import Modal from "./modal";
import DiceLog from "./dice-log";
import { useSelector } from "react-redux";

export default function Game() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { myScore, comScore, targetScore, checkReset } = useSelector(
    (state: RootState) => state.score
  );

  useEffect(() => {
    if (myScore === targetScore || comScore === targetScore) {
      setIsModalOpen(true);
    }
  }, [myScore, comScore, targetScore, setIsModalOpen]);

  useEffect(() => {
    setIsModalOpen(true);
  }, [checkReset, setIsModalOpen]);

  return (
    <main className="p-4 flex-1 flex flex-col items-center justify-start gap-4">
      <Board />
      <DiceLog />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </main>
  );
}
