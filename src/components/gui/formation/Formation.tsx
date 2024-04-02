import './formation.scss'
import { useState } from "react"
import { TFormation, TModule } from "../../../config/types"
import { useAppSelector } from '../../../redux/hooks'
import { selectPuzzlePieces } from '../../../redux/features/module/modulesSlice'
import Popup from '../popup/Popup'
import { Application } from 'pixi.js'

type Props = {
  formation: TFormation,
  module: TModule
  app: Application
}

function Formation({ formation, module, app }: Props) {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const toggleMenu = () => setIsMenuOpened((prev) => !prev)

  const currentModule = formation.modules.find((m) => m.id === module.id)
  const currentIndex = formation.modules.findIndex((m) => m.id === module.id) + 1
  const modulesLength = formation.modules.length

  const puzzlePieces = useAppSelector(selectPuzzlePieces(module.id))

  const totalFoundPuzzlePieces = puzzlePieces.reduce((count, piece) => piece.found ? count + 1 : count, 0)
  const totalPuzzlePieces = puzzlePieces.length

  return (
    <div className='formation__container'>
      <div className="formation__background">
        <img src="assets/button-texture.png" alt="" />
      </div>
      <div className="formation__menu" onClick={toggleMenu}>
        <div className='formation__menu__timer'>
          <div >12 - 05 H 24 min </div>
        </div>
        <div className="formation__menu__puzzlePieces">
          <img src="assets/puzzle.png" alt="" />
          <div>
            {`${totalFoundPuzzlePieces}/${totalPuzzlePieces}`}
          </div>
        </div>
      </div>
      {
        isMenuOpened && <Popup close={toggleMenu} app={app}>

          <>
            <div className='formation__item'>
              <div className='formation__item__label'>Formation : </div>
              <div className='formation__item__content'>{formation.title}</div>
            </div>
            <div className='formation__item'>
              <div className='formation__item__label'>
                Niveau {`${currentIndex}/${modulesLength}`}
              </div>
              <div className='formation__item__content'>{currentModule?.title}</div>
            </div>
            <div className='formation__item'>
              <div>
                <span className='formation__item__label'>Timer module : </span>
                <span className='formation__item__content'>{currentModule?.timer}</span>
              </div>
            </div>
            <div>Supports : {currentModule?.supports.length}</div>
            <div>Note niveau :</div>
            <div>Niveau de difficulté : </div>
            <div>Satisfaction apprenant : </div>
          </>
        </Popup>}
    </div>
  )
}

export default Formation