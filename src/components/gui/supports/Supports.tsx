import './supports.scss'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectModules, setModules, selectFoundSupportsCount } from '../../../redux/features/module/modulesSlice'


type Props = {
}

function Supports({ }: Props) {
  const foundSupportsCount = useAppSelector(selectFoundSupportsCount)
  const modules = useAppSelector(selectModules)
  const dispatch = useAppDispatch()

  const [currentModule, setCurrentModule] = useState(0)

  useEffect(() => {
    // dispatch(setSupports(modules[currentModule].supports))
    dispatch(setModules(modules))
    console.log(modules)
  }, [])

  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const toggleMenu = () => setIsMenuOpened((prev) => !prev)
  return (
    <div className='supports__container'>
      <>
        <div className='supports__menu' onClick={toggleMenu}>{foundSupportsCount} support trouvé(s)</div>
        {isMenuOpened && modules.map((module) => (
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
      </>
    </div>
  )
}

export default Supports