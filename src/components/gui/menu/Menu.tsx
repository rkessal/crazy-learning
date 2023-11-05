import { EGameState } from '../../../config/types'
import { setCurrentState } from '../../../redux/features/game/gameSlice'
import { useAppDispatch } from '../../../redux/hooks'
import MenuButton from './button/MenuButton'
import './menu.scss'

const Menu = () => {
  const dispatch = useAppDispatch()
  const play = () => {
    dispatch(setCurrentState(EGameState.MENU_SELECT_PLAYER))
  }

  return (
    <div className='menu__container bangers'>
      <div className="menu__title">
        Bienvenu dans Crazy Learning
      </div>
      <div className="menu__options">
        <MenuButton onClick={play}>Jouer</MenuButton>
      </div>
    </div>
  )
}

export default Menu