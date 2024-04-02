import './levelCompleted.scss'
import { EGameState } from "../../../../config/types"
import { setCurrentState } from "../../../../redux/features/game/gameSlice"
import { useAppDispatch } from "../../../../redux/hooks"

type Props = {}

const LevelCompleted = (props: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div className="level_completed__container" onClick={() => dispatch(setCurrentState(EGameState.MENU_SELECT_LEVEL))}>
      <div className="level_completed__message">
        Tu as terminé ce module
      </div>
    </div>
  )
}

export default LevelCompleted