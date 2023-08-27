import { useEffect } from "react"
import { EntityManager } from "../ecs/entity/EntityManager"
import { TPosition, TSize } from "../config/types"
import { TextureComponent } from "../ecs/components/Texture"
import { PositionComponent } from "../ecs/components/Position"
import { SizeComponent } from "../ecs/components/Size"
import { RenderComponent } from "../ecs/components/Render"

type Props = {
  entityManager: EntityManager
  texture: string,
  size: TSize,
  position: TPosition
}

function Tree({entityManager, texture, position, size}: Props) {

  useEffect(() => {
    const treeEntity = entityManager.createEntity(5)
    treeEntity.addComponent(new TextureComponent(texture))
    treeEntity.addComponent(new PositionComponent(position.x, position.y - size.height))
    treeEntity.addComponent(new SizeComponent(size.width, size.height))
    treeEntity.addComponent(new RenderComponent({texture, height: size.height, width: size.width}))
    console.log(treeEntity)
  }, [])
  return <></>
}

export default Tree