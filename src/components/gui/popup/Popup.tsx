import { useEffect } from 'react'
import './popup.scss'
import { Application } from 'pixi.js'

type Props = {
  children: any
  app: Application
  close: () => void
}

function Popup({ children, close, app }: Props) {

  useEffect(() => {
    app.ticker.stop()
    return () => app.ticker.start()
  }, [])

  return (
    <div className="popup__container">
      <div onClick={close} className="popup__close">
        X
      </div>
      {children}
    </div>
  )
}

export default Popup