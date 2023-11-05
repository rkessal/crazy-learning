import './supports.scss'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectModules, setModules, selectFoundSupportsCount, selectModule } from '../../../redux/features/module/modulesSlice'
import Popup from '../popup/Popup'


type Props = {
}

function Supports({ }: Props) {
  const foundSupportsCount = useAppSelector(selectFoundSupportsCount)
  const modules = useAppSelector(selectModules)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setModules(modules))
  }, [])

  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const toggleMenu = () => setIsMenuOpened((prev) => !prev)
  return (
    <div className='supports__container'>
      <>
        <div className='supports__background'>
          <img src="assets/button-texture.png" alt="" />
        </div>
        <div className='supports__menu' onClick={toggleMenu}>{foundSupportsCount} support(s) trouvé(s)</div>
        {isMenuOpened && <Popup close={toggleMenu}>{
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