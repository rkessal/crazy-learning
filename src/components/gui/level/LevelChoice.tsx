import './levelChoice.scss'
import { selectLevel, chooseLevel } from '../../../redux/features/level/levelSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Level from './level/Level'
import { EGameState, TLevel } from '../../../config/types'
import { setCurrentState } from '../../../redux/features/game/gameSlice'
type Props = {}

function LevelChoice({ }: Props) {
  const dispatch = useAppDispatch()
  const level = useAppSelector(selectLevel)
  const chooseCurrentLevel = (level: TLevel) => {
    if (level.unlocked) {
      dispatch(chooseLevel(level))
      dispatch(setCurrentState(EGameState.GAME_PLAYING))
    }
  }

  return (
    <div className="level_choice__container">
      <div className="level_choice__label">
        Selectionne ton niveau
      </div>
      <div className="level_choice__levels__container">
        {level.levels.map(level => <Level chooseLevel={chooseCurrentLevel} level={level} key={level.id} />)}
      </div>
    </div>
  )
}

export default LevelChoice