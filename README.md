# Dice Against Computer

**Context API를 활용한 주사위 게임**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **여러 개의 Context API 사용**: 주사위 게임의 상태와 점수를 각각의 Context로 분리하여 관리함으로써 코드의 가독성과 유지 보수성을 높입니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS

## 📝 **핵심 학습 내용**

### 여러 개의 Context API

주사위 게임의 상태와 점수를 각각의 Context로 분리하여 관리했습니다. `DiceProvider`는 주사위 상태를, `ScoreProvider`는 점수 상태를 관리하며, 이를 통해 코드의 가독성과 유지 보수성을 높였습니다.

```tsx
import Footer from "@/components/footer";
import Game from "@/components/game";
import Header from "@/components/header";
import { DiceProvider } from "@/contexts/dice-context";
import { ScoreProvider } from "@/contexts/score-context";

export default function Page() {
  return (
    <>
      <Header />
      <ScoreProvider>
        <DiceProvider>
          <Game />
        </DiceProvider>
      </ScoreProvider>
      <Footer />
    </>
  );
}
```

## ⚙️ **프로젝트 설정**

```bash
# 패키지 설치
npm install

# 로컬 개발 환경 실행
npm run dev
```
