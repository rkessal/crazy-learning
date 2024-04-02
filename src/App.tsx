import "./App.css"
import * as PIXI from 'pixi.js'
import Game from './components/Game';
import Gui from './components/gui/Gui';
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectGame } from "./redux/features/game/gameSlice";
import { EGameState } from "./config/types";
import { useEffect } from "react";
import { fetchModules } from "./redux/features/module/modulesSlice";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { fetchFormation, selectFormation } from "./redux/features/formation/formationSlice";

export const app = new PIXI.Application({
  width: 1920,
  height: 1080,
  backgroundColor: 0xAAAAAA,
});

function App() {
  const gameState = useAppSelector(selectGame)
  const { formation, error, status } = useAppSelector(selectFormation)
  const dispatch = useAppDispatch()
  const { formationId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchFormation(formationId))
    dispatch(fetchModules(formationId))
  }, [])

  useEffect(() => {
    if (error) {
      // navigate('/')
    }
  }, [status])

  return (
    <div className='app bangers'>
      <Gui app={app} />
      {gameState.currentState === EGameState.GAME_PLAYING && <Game app={app} />}
    </div>
  )
}

export default App
