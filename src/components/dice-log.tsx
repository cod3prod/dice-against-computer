"use client";

import { useEffect, useState, useRef } from "react";
import LogItem from "./log-item";
import { useSelector } from "react-redux";

export default function DiceLog() {
  const { myScore, comScore, targetScore, checkReset } = useSelector(
    (state: RootState) => state.score
  );
  const { myDice, comDice, checkDice } = useSelector(
    (state: RootState) => state.dice
  );

  const [history, setHistory] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([]);
  }, [checkReset]);

  useEffect(() => {
    if (
      (myScore === targetScore || comScore === targetScore) &&
      targetScore !== 0
    ) {
      return;
    }

    if (myDice === 0 && comDice === 0) {
      return;
    }

    const newLog = `${
      myDice > comDice
        ? `당신이 이겼습니다! (${myDice} > ${comDice})`
        : myDice < comDice
        ? `컴퓨터가 이겼습니다. (${myDice} < ${comDice})`
        : `무승부입니다! (${myDice} = ${comDice})`
    }`;

    setHistory((prev) => [...prev, newLog]);
  }, [checkDice]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section
      ref={scrollRef}
      className="container max-w-xl grow max-h-[40vh] p-4 bg-surface rounded-lg w-full shadow-md flex flex-col items-center justify-start overflow-y-auto custom-scrollbar"
    >
      <h3 className="text-xl font-bold">Dice Log</h3>
      <ul className="flex flex-col items-center justify-start gap-2 mt-2">
        {history.map((log, idx) => (
          <LogItem key={idx} log={log} />
        ))}
      </ul>
    </section>
  );
}
