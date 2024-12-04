import useDice from "@/hooks/use-dice";
import useScore from "@/hooks/use-score";
import { useEffect, useState, useRef } from "react";
import LogItem from "./log-item";

export default function DiceLog() {
  const { state: scoreState } = useScore();
  const { state: diceState } = useDice();
  const [history, setHistory] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([]);
  }, [scoreState.checkReset]);

  useEffect(() => {
    if (
      (scoreState.myScore === scoreState.targetScore ||
        scoreState.comScore === scoreState.targetScore) &&
      scoreState.targetScore !== 0
    ) {
      return;
    }

    if (diceState.myDice === 0 && diceState.comDice === 0) {
      return;
    }

    const newLog = `${diceState.myDice > diceState.comDice 
      ? `당신이 이겼습니다! (${diceState.myDice} > ${diceState.comDice})`
      : diceState.myDice < diceState.comDice
        ? `컴퓨터가 이겼습니다. (${diceState.myDice} < ${diceState.comDice})`
        : `무승부입니다! (${diceState.myDice} = ${diceState.comDice})`}`;

    setHistory(prev => [...prev, newLog]);
  }, [diceState.checkDice]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section ref={scrollRef} className="container max-w-xl grow max-h-[40vh] p-4 bg-surface rounded-lg w-full shadow-md flex flex-col items-center justify-start overflow-y-auto custom-scrollbar">
      <h3 className="text-xl font-bold">Dice Log</h3>
      <ul className="flex flex-col items-center justify-start gap-2 mt-2">
        {history.map((log, idx) => (
          <LogItem key={idx} log={log} />
        ))}
      </ul>
    </section>
  );
}
