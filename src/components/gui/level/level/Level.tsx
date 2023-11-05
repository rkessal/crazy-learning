import './level.scss'
import { TLevel } from '../../../../config/types'
import levelBox from '../../../../assets/level-box.png'
import levelLock from '../../../../assets/lock.png'

type Props = {
  chooseLevel: any
  level: TLevel
}

function Level({ chooseLevel, level }: Props) {
  const { label } = level
  return (
    <div className="level__wrapper" onClick={() => chooseLevel(level)}>
      <div className='level__background__img' >
        <img src={levelBox} alt="levelBox" />
      </div>
      {level.unlocked
        ? <div className="level__number">{label}</div>
        : <img className="level__lock" src={levelLock} />
      }

      <div className="level__stars__wrapper">
        <div className="level__star"></div>
      </div>
    </div>
  )
}

export default Level