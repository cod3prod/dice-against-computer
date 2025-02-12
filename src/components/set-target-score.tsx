"use client";

import { useDispatch } from "react-redux";
import Button from "./button";
import { useState, Dispatch, SetStateAction } from "react";
import { setTargetScore } from "@/store/slices/score-slice";

export default function SetTargetScore({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [inputScore, setInputScore] = useState("5");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputScore(e.target.value);
  };

  const handleConfirm = () => {
    dispatch(setTargetScore(Number(inputScore)));
    setIsModalOpen(false);
  };

  return (
    <div className="mt-4 flex flex-col justify-center gap-2">
      <h2 className="text-xl font-bold text-center">목표 점수</h2>
      <p className="text-center">목표 점수를 설정해주세요</p>
      <div className="flex items-center justify-between gap-2 mt-6">
        <input
          className="grow border border-muted rounded-md px-2 h-8"
          type="number"
          value={inputScore}
          min={1}
          max={10}
          onChange={handleChange}
        />
        <Button className="h-8 py-1" onClick={handleConfirm}>
          확인
        </Button>
      </div>
    </div>
  );
}
