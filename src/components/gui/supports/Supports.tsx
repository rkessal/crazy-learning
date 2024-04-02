import './supports.scss'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectModules, setModules, selectFoundSupportsCount } from '../../../redux/features/module/modulesSlice'
import Popup from '../popup/Popup'
import { Application } from 'pixi.js'


type Props = {
  app: Application
}

function Supports({ app }: Props) {
  const foundSupportsCount = useAppSelector(selectFoundSupportsCount)
  const modules = useAppSelector(selectModules)
  const dispatch = useAppDispatch()

  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const toggleMenu = () => setIsMenuOpened((prev) => !prev)

  useEffect(() => {
    // dispatch(setModules(modules))
  }, [])

  return (
    <div className='supports__container'>
      <>
        <div className='supports__background'>
          <img src="assets/button-texture.png" alt="" />
        </div>
        <div className='supports__menu' onClick={toggleMenu}>{foundSupportsCount} support(s) trouvé(s)</div>
        {isMenuOpened && <Popup close={toggleMenu} app={app}>{
          modules.map((module) => (
            <div className='supports__module'>
              <>
                <div className='supports__module__title'>{module.title}</div>
                {module.supports.filter(support => support.found).map(support => (
                  <div className='supports__module__support'>
                    <a target='_blank' href={support.file}>{support.label}</a>
                  </div>
                ))}
              </>
            </div>
          ))}
        </Popup>}
      </>
    </div>
  )
}

export default Supports