import './formation.scss'
import { useState } from "react"
import { TFormation, TModule } from "../../../config/types"

type Props = {
  formation: TFormation,
  module: TModule
}

function Formation({ formation, module }: Props) {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [levelGrade, setLevelGrade] = useState(0)
  const [generalGrade, setGeneralGrade] = useState(0)

  const toggleMenu = () => setIsMenuOpened((prev) => !prev)

  const currentModule = formation.modules.find((m) => m.id === module.id)
  const currentIndex = formation.modules.findIndex((m) => m.id === module.id) + 1
  const modulesLength = formation.modules.length

  return (
    <div className='formation__container'>
      <div onClick={toggleMenu}>12 - 05 H 24 min </div>
      {
        isMenuOpened && (
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
        )}
    </div>
  )
}

export default Formation