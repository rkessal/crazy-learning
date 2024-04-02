import { useEffect } from 'react'
import { EntityManager } from '../ecs/entity/EntityManager'
import { PositionComponent } from '../ecs/components/Position'
import { RenderComponent } from '../ecs/components/Render'
import { SizeComponent } from '../ecs/components/Size'
import { TextureComponent } from '../ecs/components/Texture'
import { TPosition, TSize } from '../config/types'

type Props = {
  entityManager: EntityManager
  position: TPosition,
  texture: string,
  size: TSize
  id: string
}

function Scenery({ entityManager, position, texture, size, id }: Props) {
  useEffect(() => {

    const box = entityManager.createEntity(2)
    box.addComponent(new PositionComponent(position.x, position.y))
    box.addComponent(new SizeComponent(size.width, size.height))
    box.addComponent(new TextureComponent(texture))
    box.addComponent(new RenderComponent({ texture, height: size.height, width: size.width }));
  }, [])
  return (
    <></>
  )
}

export default Scenery