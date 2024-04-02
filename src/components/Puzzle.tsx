import { useEffect } from "react"
import { TSize, TPosition, TPuzzlePiece } from "../config/types"
import { PositionComponent } from "../ecs/components/Position"
import { RenderComponent } from "../ecs/components/Render"
import { SizeComponent } from "../ecs/components/Size"
import { TextureComponent } from "../ecs/components/Texture"
import { EntityManager } from "../ecs/entity/EntityManager"
import { CanBePicked } from "../ecs/components/CanBePicked"

type Props = {
  id: TPuzzlePiece['id']
  entityManager: EntityManager
  texture: string,
  size: TSize,
  position: TPosition
}

function Puzzle({ entityManager, id, texture, size, position }: Props) {

  useEffect(() => {
    const puzzeEntity = entityManager.createEntity(5)
    puzzeEntity.addComponent(new TextureComponent(texture))
    puzzeEntity.addComponent(new PositionComponent(position.x, position.y - size.height))
    puzzeEntity.addComponent(new SizeComponent(size.width, size.height))
    puzzeEntity.addComponent(new RenderComponent({ texture, height: size.height, width: size.width }))
    puzzeEntity.addComponent(new CanBePicked(id))
  }, [])

  return <></>
}

export default Puzzle