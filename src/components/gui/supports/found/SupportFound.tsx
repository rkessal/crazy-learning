import './supportFound.scss'
import { TSupport } from "../../../../config/types"
import Popup from '../../popup/Popup'
import { Application } from 'pixi.js'

type Props = {
  support: TSupport
  closePopup: () => void
  app: Application
}

function SupportFound({ support, closePopup, app }: Props) {
  return (
    <Popup close={closePopup} app={app}>
      <div>Felicitations !</div>
      <div>Tu as obtenu un nouveau support de cours, étudie-le attentivement afin d'obtenir les armes te permettant d'avancer dans ton Game-Learning
      </div>
      <a target='_blank' href={support.file}>
        {support.label}
      </a>
    </Popup>
  )
}

export default SupportFound