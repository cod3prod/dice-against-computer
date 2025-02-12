# Dice Against Computer

**Redux를 활용한 주사위 게임**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **Redux를 활용한 게임 상태 관리**: 주사위 게임의 상태와 점수를 각각의 `slice`로 분리하여 관리함으로써 코드의 가독성과 유지 보수성을 높입니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15, Redux
- **스타일링**: Tailwind CSS

## 📝 **핵심 학습 내용**

### Redux를 활용한 게임 상태 관리

주사위 게임의 상태와 점수를 각각의 `slice`로 분리하여 관리했습니다. `diceSlice`는 주사위 상태를, `scoreSlice`는 점수 상태를 관리하며, 이를 통해 코드의 가독성과 유지 보수성을 높였습니다.

```tsx
import { createSlice } from "@reduxjs/toolkit";

const initialState: DiceState = {
  myDice: 0,
  comDice: 0,
  checkDice: false,
};

const diceSlice = createSlice({
  name: "dice",
  initialState,
  reducers: {
    rollDice: (state) => {
      state.myDice = Math.floor(Math.random() * 6) + 1;
      state.comDice = Math.floor(Math.random() * 6) + 1;
    },
    resetDice: (state) => {
      state.myDice = 0;
      state.comDice = 0;
      state.checkDice = false;
    },
    checkDice: (state) => {
      state.checkDice = !state.checkDice;
    },
  },
});

export const { rollDice, resetDice, checkDice } = diceSlice.actions;
export default diceSlice.reducer;
```

## ⚙️ **프로젝트 설정**

```bash
# 패키지 설치
npm install

# 로컬 개발 환경 실행
npm run dev
```
