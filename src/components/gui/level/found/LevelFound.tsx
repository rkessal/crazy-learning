import './levelfound.scss'
import { EGameState } from "../../../../config/types"
import { setCurrentState } from "../../../../redux/features/game/gameSlice"
import { useAppDispatch } from "../../../../redux/hooks"

type Props = {
  id: string
}

const LevelFound = ({id}: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div className="level_found__container" onClick={() => console.log(id)}>
      <div className="level_found__message">
        Entrer dans le sous module {id}
      </div>
    </div>
  )
}

export default LevelFound