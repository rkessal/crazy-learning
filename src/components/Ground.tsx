import { useEffect } from 'react'
import { EntityManager } from '../ecs/entity/EntityManager'
import { TPosition, TSize } from '../config/types'
import { PositionComponent } from '../ecs/components/Position'
import { RenderComponent } from '../ecs/components/Render'
import { SizeComponent } from '../ecs/components/Size'
import { TextureComponent } from '../ecs/components/Texture'
import { CanStandOnTopComponent } from '../ecs/components/CanStandOnTop'

type Props = {
  entityManager: EntityManager, 
  size: TSize,
  position: TPosition,
  texture: string
}

function Ground({entityManager, size, position, texture}: Props) {
  useEffect(() => {
    const sizeGround = new SizeComponent(size.width, size.height)
    const textureGround = new TextureComponent(texture)
    const ground = entityManager.createEntity(3)
    ground.addComponent(new PositionComponent(position.x, position.y))
    ground.addComponent(sizeGround)
    ground.addComponent(textureGround)
    ground.addComponent(new CanStandOnTopComponent())
    ground.addComponent(new RenderComponent({  texture: textureGround.texture, height: sizeGround.height, width: sizeGround.width }))
  }, [])
  return null
  
}

export default Ground