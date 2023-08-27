import { EntityState, StateComponent } from "../components/State";
import { PositionComponent } from "../components/Position";
import { SizeComponent } from "../components/Size";
import { VelocityComponent } from "../components/Velocity";
import { EntityManager } from "../entity/EntityManager";
import { CanStandOnTopComponent } from "../components/CanStandOnTop";
import { FileComponent } from "../components/File";
import { Test } from "../../test";
import { store } from "../../redux/store";
import { setFound } from "../../redux/features/module/modulesSlice";

export class CollisionSytem {
  entityManager: EntityManager
  threshold = 6
  test = new Test()

  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  update(delta: number) {
    const entities = this.entityManager.getEntitiesWithComponents(PositionComponent)

    entities.forEach((entity1) => {
      const position1 = entity1.getComponent(PositionComponent)
      const size1 = entity1.getComponent(SizeComponent)
      const velocity = entity1.getComponent(VelocityComponent)
      const state = entity1.getComponent(StateComponent)

      entities.forEach((entity2) => {
        if (entity1 === entity2 || !state) return

        if (!entity2.hasComponent(CanStandOnTopComponent)) return

        const position2 = entity2.getComponent(PositionComponent)
        const size2 = entity2.getComponent(SizeComponent)

        if (
          position1.y + size1.height <= position2.y &&
          position1.y + size1.height + velocity.y + this.threshold >=
          position2.y &&
          position1.x + size1.width >= position2.x &&
          position1.x <= position2.x + size2.width
        ) {
          if (entity2.hasComponent(FileComponent)) {
            store.dispatch(setFound(entity2.getComponent(FileComponent).id))
          }
          state.state = EntityState.GROUNDED
        }
      })
    })
  }

}