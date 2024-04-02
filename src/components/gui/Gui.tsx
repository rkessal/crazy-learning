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
import { selectAllPuzzlePiecesFound, selectLastFoundSupport, selectModule } from '../../redux/features/module/modulesSlice'
import { useEffect, useState } from 'react'
import LevelCompleted from './level/completed/LevelCompleted'
import SupportFound from './supports/found/SupportFound'
import Popup from './popup/Popup'
import { Application } from 'pixi.js'
import LevelFound from './level/found/LevelFound'

type Props = {
  app: Application
}

const gameMap = {
  [EGameState.MENU_MAIN]: <Menu />,
  [EGameState.MENU_SELECT_LEVEL]: <LevelChoice />,
  [EGameState.MENU_SELECT_PLAYER]: <PlayerChoice />
}

function Gui({ app }: Props) {
  const gameState = useAppSelector(selectGame)
  const currentLevel = useAppSelector(selectCurrentLevel)
  const currentModule = useAppSelector(selectModule(currentLevel.id))
  const lastFoundSupport = useAppSelector(selectLastFoundSupport(currentLevel.id))
  const allPuzzlePiecesFound = useAppSelector(selectAllPuzzlePiecesFound(currentModule.id))

  const dispatch = useAppDispatch()

  const [displayPopupModuleFound, setDisplayPopupModuleFound] = useState(false)
  const [displayPopupAllPuzzlePiecesFound, setDisplayPopupAllPuzzlePiecesFound] = useState(false)

  const closePopupModuleFound = () => setDisplayPopupModuleFound(false)
  const closePopupAllPuzzlePiecesFound = () => setDisplayPopupAllPuzzlePiecesFound(false)

  const { promptSubmodule } = gameState

  useEffect(() => {
    currentModule.completed && dispatch(unlockLevel(currentLevel.nextLevelId))
  }, [currentModule.completed])

  useEffect(() => {
    setDisplayPopupModuleFound(true)
  }, [lastFoundSupport])

  useEffect(() => {
    setDisplayPopupAllPuzzlePiecesFound(true)
  }, [allPuzzlePiecesFound])

  useEffect(() => {
    console.log({promptSubmodule})
  }, [promptSubmodule])

  return (
    <>
      {gameMap[gameState.currentState]}
      {gameState.currentState === EGameState.GAME_PLAYING && (
        <div className="gui__container">
          <Supports app={app} />
          <Formation app={app} formation={formation} module={currentModule} />
        </div>)}
      {currentModule.completed && <LevelCompleted />}
      {lastFoundSupport && displayPopupModuleFound && <SupportFound app={app} closePopup={closePopupModuleFound} support={lastFoundSupport} />}
      {allPuzzlePiecesFound && displayPopupAllPuzzlePiecesFound && <Popup app={app} close={closePopupAllPuzzlePiecesFound}>Tu as trouvé toutes les pièces de puzzle ! <a href='#'>Lien jeu des bombes</a></Popup >}
      {promptSubmodule.state && <LevelFound id={promptSubmodule.id}  />}
    </>
  )
}

export default Gui