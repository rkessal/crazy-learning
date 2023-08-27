import "./playerChoix.scss"
import { TPlayer } from "../../../config/types"
import { player1, player2, player3 } from "../../../mocks/player"
import { choosePlayer } from "../../../redux/features/player/playerSlice"
import { useAppDispatch } from "../../../redux/hooks"
import { setPlayer } from "../../../redux/features/game/gameSlice"

type Props = {}

const players = [player1, player2, player3]

function PlayerChoice({ }: Props) {
  const dispatch = useAppDispatch()
  const choosePLayer = (player: TPlayer) => {
    dispatch(choosePlayer(player))
    dispatch(setPlayer(true))
  }
  return (
    <div className="player_choice__container bangers">
      <div className="player_choice__label">
        Selectionne ton joueur
      </div>
      <div className="player_choice__content">
        {players.map(player => (
          <div className="player_choice__player">
            <div className="player_choice__player__img">
              <img onClick={() => choosePLayer(player)} src={player.texture} alt="" />
            </div>
            <div className="player_choice__player__label">{player.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayerChoice