import "./App.css"
import * as PIXI from 'pixi.js'
import Game from './components/Game';
import Gui from './components/gui/Gui';
import { useAppSelector } from "./redux/hooks";
import { selectIsPlayerSet } from "./redux/features/game/gameSlice";

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0xAAAAAA,
});



function App() {
  const isPlayerSet = useAppSelector(selectIsPlayerSet)
  return (
    <div className='app'>
      {isPlayerSet && <Game app={app} />}
      <Gui />
    </div>
  )
}

export default App
