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
