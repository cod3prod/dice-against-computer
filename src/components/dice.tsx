"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa";

const Dice = React.memo(
  ({ dice, className }: { dice: number; className: string }) => {
    const renderDice = () => {
      switch (dice) {
        case 1:
          return <FaDiceOne className={twMerge("w-28 h-28", className)} />;
        case 2:
          return <FaDiceTwo className={twMerge("w-28 h-28", className)} />;
        case 3:
          return <FaDiceThree className={twMerge("w-28 h-28", className)} />;
        case 4:
          return <FaDiceFour className={twMerge("w-28 h-28", className)} />;
        case 5:
          return <FaDiceFive className={twMerge("w-28 h-28", className)} />;
        case 6:
          return <FaDiceSix className={twMerge("w-28 h-28", className)} />;
        default:
          return <FaDiceOne className={twMerge("w-28 h-28", className)} />;
      }
    };

    return <div>{renderDice()}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.dice === nextProps.dice;
  }
);

Dice.displayName = 'Dice';

export default Dice;
