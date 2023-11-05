import './supportFound.scss'
import { TSupport } from "../../../../config/types"

type Props = {
  support: TSupport
  closePopup: () => void
}

function SupportFound({ support, closePopup }: Props) {
  return (
    <div className='support_found__container'>
      <div>Felicitations !</div>
      <div>Tu as obtenu un nouveau support de cours, étudie-le attentivement afin d'obtenir les armes te permettant d'avancer dans ton Game-Learning
      </div>
      <a target='_blank' href={support.file}>
        {support.label}
      </a>
      <div onClick={() => closePopup()}>fermer</div>
    </div>
  )
}

export default SupportFound