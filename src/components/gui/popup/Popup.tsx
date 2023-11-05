import './popup.scss'

type Props = {
  children: any
  close: () => void
}

function Popup({ children, close }: Props) {
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