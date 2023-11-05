import { useEffect } from 'react'
import { EntityManager } from '../ecs/entity/EntityManager'
import { StateComponent, EntityState } from '../ecs/components/State'
import { GravityComponent } from '../ecs/components/Gravity'
import { MoveWithInputComponent } from '../ecs/components/MoveWithInput'
import { PositionComponent } from '../ecs/components/Position'
import { RenderComponent } from '../ecs/components/Render'
import { SizeComponent } from '../ecs/components/Size'
import { TextureComponent } from '../ecs/components/Texture'
import { VelocityComponent } from '../ecs/components/Velocity'
import { useAppSelector } from '../redux/hooks'
import { selectPlayer } from '../redux/features/player/playerSlice'

type Props = {
  entityManager: EntityManager
}

function Player({ entityManager, }: Props) {
  const player = useAppSelector(selectPlayer)
  useEffect(() => {
    // Create player entity
    const playerEntity = entityManager.createEntity(1);
    playerEntity.addComponent(new SizeComponent(player.width, player.height))
    playerEntity.addComponent(new TextureComponent(player.texture))
    playerEntity.addComponent(new PositionComponent(100, 300));
    playerEntity.addComponent(new RenderComponent({ texture: player.texture, height: player.height, width: player.width }));
    playerEntity.addComponent(new MoveWithInputComponent());
    playerEntity.addComponent(new VelocityComponent())
    playerEntity.addComponent(new GravityComponent())
    playerEntity.addComponent(new StateComponent(null))
  }, [])
  return (
    <></>
  )
}

export default Player