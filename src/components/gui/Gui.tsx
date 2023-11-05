import './gui.scss'
import Formation from './formation/Formation'
import Supports from './supports/Supports'
import { formation } from '../../mocks/modules'
import PlayerChoice from './player/PlayerChoice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectGame } from '../../redux/features/game/gameSlice'
import LevelChoice from './level/LevelChoice'
import Menu from './menu/Menu'
import { EGameState } from '../../config/types'
import { selectCurrentLevel, unlockLevel } from '../../redux/features/level/levelSlice'
import { selectLastFoundSupport, selectModule } from '../../redux/features/module/modulesSlice'
import { useEffect, useState } from 'react'
import LevelCompleted from './level/completed/LevelCompleted'
import SupportFound from './supports/found/SupportFound'

type Props = {}

const gameMap = {
  [EGameState.MENU_MAIN]: <Menu />,
  [EGameState.MENU_SELECT_LEVEL]: <LevelChoice />,
  [EGameState.MENU_SELECT_PLAYER]: <PlayerChoice />
}

function Gui({ }: Props) {
  const gameState = useAppSelector(selectGame)
  const currentLevel = useAppSelector(selectCurrentLevel)
  const currentModule = useAppSelector(selectModule(currentLevel.id))
  const lastFoundSupport = useAppSelector(selectLastFoundSupport(currentLevel.id))

  const dispatch = useAppDispatch()

  const [displayPopup, setDisplayPopup] = useState(false)

  const closePopup = () => setDisplayPopup(false)

  useEffect(() => {
    console.log(currentModule.puzzlePieces)
  }, [currentModule])

  useEffect(() => {
    currentModule.completed && dispatch(unlockLevel(currentLevel.nextLevelId))
  }, [currentModule.completed])



  useEffect(() => {
    setDisplayPopup(true)
  }, [lastFoundSupport])

  return (
    <>
      {gameMap[gameState.currentState]}
      {gameState.currentState === EGameState.GAME_PLAYING && (
        <div className="gui__container">
          <Supports />
          <Formation formation={formation} module={currentModule} />
        </div>)}
      {currentModule.completed && <LevelCompleted />}
      {lastFoundSupport && displayPopup && <SupportFound closePopup={closePopup} support={lastFoundSupport} />}
    </>
  )
}

export default Gui