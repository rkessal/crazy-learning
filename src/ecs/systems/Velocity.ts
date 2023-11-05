import { PositionComponent } from "../components/Position"
import { VelocityComponent } from "../components/Velocity"
import { EntityManager } from "../entity/EntityManager"

export class VelocitySystem {
  entityManager: EntityManager
  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager
  }

  update(delta) {
    const entities = this.entityManager.getEntitiesWithComponents(VelocityComponent)

    entities.forEach((entity) => {
      const velocityComponent = entity.getComponent(VelocityComponent)
      const positionComponent = entity.getComponent(PositionComponent)
      if (!velocityComponent) return

      positionComponent.x += velocityComponent.x * delta
      positionComponent.y += velocityComponent.y * delta
    })
  }
}