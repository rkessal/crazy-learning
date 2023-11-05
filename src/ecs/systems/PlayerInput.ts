import { EntityState, StateComponent } from "../components/State";
import { MoveWithInputComponent } from "../components/MoveWithInput";
import { VelocityComponent } from "../components/Velocity";
import { EntityManager } from "../entity/EntityManager";
import { config } from "../../config/config";

export class PlayerInputSystem {
  entityManager: EntityManager
  keys: any
  smoothingFactor = 0.3;

  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
    this.keys = {};
    document.addEventListener('keydown', (event) => this.onKeyDown(event));
    document.addEventListener('keyup', (event) => this.onKeyUp(event));
  }

  onKeyDown(event: KeyboardEvent) {
    this.keys[event.key] = true;
  }

  onKeyUp(event: KeyboardEvent) {
    this.keys[event.key] = false;
  }

  update(deltaTime: number) {

    const entities = this.entityManager.getEntitiesWithComponents(VelocityComponent);

    entities.forEach(entity => {
      if (!entity.hasComponent(MoveWithInputComponent)) return
      const velocityComponent = entity.getComponent(VelocityComponent)
      const stateComponent = entity.getComponent(StateComponent)

      if (this.keys['a']) {
        velocityComponent.x = -config.RUN_VELOCITY * deltaTime;
        stateComponent.state = EntityState.RUNNING
      }
      if (this.keys['d']) {
        velocityComponent.x = config.RUN_VELOCITY * deltaTime;
        stateComponent.state = EntityState.RUNNING
      }
      if (this.keys['w']) {
        velocityComponent.y = -config.JUMP_VELOCITY * deltaTime;
      }

      if (velocityComponent.x >= -0.5 && velocityComponent.x <= 0.5) velocityComponent.x = 0
      velocityComponent.x -= velocityComponent.x * this.smoothingFactor
    });
  }
}