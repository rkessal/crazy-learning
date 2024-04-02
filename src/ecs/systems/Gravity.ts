import { EntityState, StateComponent } from "../components/State"
import { GravityComponent } from "../components/Gravity"
import { PositionComponent } from "../components/Position"
import { SizeComponent } from "../components/Size"
import { VelocityComponent } from "../components/Velocity"
import { EntityManager } from "../entity/EntityManager"
import { config } from "../../config/config"

export class GravitySystem {
  entityManager: EntityManager
  gravity: number
  screen: any
  constructor(entityManager: EntityManager, screen) {
    this.entityManager = entityManager
    this.gravity = 1.5
    this.screen = screen
  }

  update(delta) {
    const entities = this.entityManager.getEntitiesWithComponents(GravityComponent)

    entities.forEach((entity) => {
      const velocityComponent = entity.getComponent(VelocityComponent)
      const stateComponent = entity.getComponent(StateComponent)
      if (!velocityComponent) return

      const positionComponent = entity.getComponent(PositionComponent)
      const sizeComponent = entity.getComponent(SizeComponent)
      if (positionComponent.y + sizeComponent.height + velocityComponent.y * delta < this.screen.height) {
        velocityComponent.y = velocityComponent.y * delta + this.gravity
      } else {
        velocityComponent.y = 0

        if (stateComponent.state === EntityState.JUMPING_LEFT || stateComponent.state === EntityState.RUNNING_LEFT) {
          stateComponent.state = EntityState.STANDING_LEFT
        } else {
          stateComponent.state = EntityState.STANDING_RIGHT
        }
      }
    })
  }
}