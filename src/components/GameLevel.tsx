import { EntityManager } from '../ecs/entity/EntityManager'
import Box from './Box'
import Ground from './Ground'
import Tree from './Tree'

import { EComponentType, TLevel } from '../config/types'
import Puzzle from './Puzzle'
import Scenery from './Scenery'
import Door from './Door'

type Props = {
  entityManager: EntityManager
  config: any
  app: any
  levelComponents: TLevel['components']
}

const renderLevelComponent = (component, ground, entityManager, screenHeight) => {
  switch (component.type) {
    case EComponentType.BOX:
      return <Box entityManager={entityManager} id={component.id} position={{ ...component.position, y: screenHeight - ground }} size={component.size} texture={`assets/${component.texture}`} key={component.id} />

    case EComponentType.GROUND:
      return <Ground entityManager={entityManager} position={{ ...component.position, y: component.position.y !== -1 ? component.position.y : screenHeight - component.size.height }} size={component.size} texture={`assets/${component.texture}`} key={component.id} />

    case EComponentType.TREE:
      return <Tree entityManager={entityManager} position={{ ...component.position, y: screenHeight - ground }} size={{ ...component.size, y: ground }} texture={`assets/${component.texture}`} key={component.id} />

    case EComponentType.PUZZLE:
      return <Puzzle entityManager={entityManager} id={component.id} position={{ ...component.position, y: screenHeight - ground }} size={{ ...component.size, y: ground }} texture={`assets/${component.texture}`} key={component.id} />

    case EComponentType.SCENERY:
      return <Scenery entityManager={entityManager} id={component.id} position={component.position} size={component.size} texture={`assets/${component.texture}`} key={component.id} />

    case EComponentType.DOOR:
      return <Door entityManager={entityManager} id={component.id} position={component.position} size={component.size} texture={`assets/${component.texture}`} key={component.id} />

    default:
      break;
  }
}


function GameLevel({ entityManager, config, app, levelComponents }: Props) {
  const { GROUND } = config
  return (
    <>
      {
        levelComponents.map(component => renderLevelComponent(component, GROUND, entityManager, app.screen.height))
      }
    </>
  )
}

export default GameLevel