import "./App.css"
import * as PIXI from 'pixi.js'
import Game from './components/Game';
import Gui from './components/gui/Gui';
import { useAppSelector } from "./redux/hooks";
import { selectGame } from "./redux/features/game/gameSlice";
import { EGameState } from "./config/types";
import { useEffect } from "react";

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0xAAAAAA,
});

function App() {
  const gameState = useAppSelector(selectGame)
  return (
    <div className='app bangers'>
      <Gui />
      {gameState.currentState === EGameState.GAME_PLAYING && <Game app={app} />}
    </div>
  )
}

export default App
