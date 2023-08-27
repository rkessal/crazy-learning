import React, { useEffect } from 'react'
import { EntityManager } from '../ecs/entity/EntityManager'
import { PositionComponent } from '../ecs/components/Position'
import { RenderComponent } from '../ecs/components/Render'
import { SizeComponent } from '../ecs/components/Size'
import { TextureComponent } from '../ecs/components/Texture'
import { TPosition, TSize } from '../config/types'
import { CanStandOnTopComponent } from '../ecs/components/CanStandOnTop'
import { FileComponent } from '../ecs/components/File'

type Props = {
  entityManager: EntityManager
  position: TPosition,
  texture: string,
  size: TSize
  id: string
}

function Box({ entityManager, position, texture, size, id }: Props) {
  useEffect(() => {
    const sizeBox = new SizeComponent(size.width, size.height)
    const textureBox = new TextureComponent(texture)

    const box = entityManager.createEntity(2)
    box.addComponent(new PositionComponent(position.x, position.y - size.height))
    box.addComponent(sizeBox)
    box.addComponent(textureBox)
    box.addComponent(new RenderComponent({ texture: textureBox.texture, height: sizeBox.height, width: sizeBox.width }));
    box.addComponent(new CanStandOnTopComponent())
    box.addComponent(new FileComponent(id))
  }, [])
  return (
    <></>
  )
}

export default Box