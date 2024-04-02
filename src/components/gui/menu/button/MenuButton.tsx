import './menuButton.scss'
type Props = {
  onClick: () => void
  children: any
}

function MenuButton({ onClick, children }: Props) {
  return (
    <div className="menu_button">
      <span onClick={onClick}>{children}</span>
      <img src="assets/button-texture.png" />
    </div>
  )
}

export default MenuButton