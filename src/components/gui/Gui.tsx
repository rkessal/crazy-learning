import './gui.scss'
import Formation from './formation/Formation'
import Supports from './supports/Supports'
import { modules, formation } from '../../mocks/modules'
import PlayerChoice from './player/PlayerChoice'
import { useAppSelector } from '../../redux/hooks'
import { selectIsPlayerSet } from '../../redux/features/game/gameSlice'

type Props = {}



function Gui({ }: Props) {
  const isPlayerSet = useAppSelector(selectIsPlayerSet)
  return (
    <>
      {!isPlayerSet
        ? <PlayerChoice />
        :
        <div className="gui__container">
          <Supports />
          <Formation formation={formation} module={modules[0]} />
        </div>}
    </>
  )
}

export default Gui