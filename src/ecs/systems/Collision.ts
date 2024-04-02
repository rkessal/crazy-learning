import { StateComponent } from "../components/State";
import { PositionComponent } from "../components/Position";
import { SizeComponent } from "../components/Size";
import { VelocityComponent } from "../components/Velocity";
import { EntityManager } from "../entity/EntityManager";
import { CanStandOnTopComponent } from "../components/CanStandOnTop";
import { FileComponent } from "../components/File";
import { store } from "../../redux/store";
import { setFound, setFoundPuzzle } from "../../redux/features/module/modulesSlice";
import { promptSubModule, removePromptSubModule } from "../../redux/features/game/gameSlice";
import { CanBePicked } from "../components/CanBePicked";
import { CanGoThrough } from "../components/CanGoTrough";

export class CollisionSytem {
  entityManager: EntityManager
  threshold = 0
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
        if (entity1 === entity2) return

        if (!entity1.hasComponent(VelocityComponent)) return

        const position2 = entity2.getComponent(PositionComponent)
        const size2 = entity2.getComponent(SizeComponent)

        if (position1.y + size1.height >= position2.y &&
          position1.x + size1.width >= position2.x &&
          position1.x <= position2.x + size2.width &&
          position1.y <= position2.y + size2.height) {

          if (entity2.hasComponent(CanBePicked)) {
            store.dispatch(setFoundPuzzle(entity2.getComponent(CanBePicked).id))
          }
          if (entity2.hasComponent(CanGoThrough)) {
            const { promptSubmodule } = store.getState().game
            const currentPrompt = promptSubmodule.id
            const canGoThroughComponent = entity2.getComponent(CanGoThrough)
            if (currentPrompt !== canGoThroughComponent.id) {
              store.dispatch(promptSubModule(canGoThroughComponent.id))
            }
          }
        } else {
          if (entity2.hasComponent(CanGoThrough)) {
            const { promptSubmodule } = store.getState().game
            const currentPrompt = promptSubmodule.id
            const canGoThroughComponent = entity2.getComponent(CanGoThrough)
            if (currentPrompt === canGoThroughComponent.id) {
              store.dispatch(removePromptSubModule(canGoThroughComponent.id))
            }
          }
        } 

        if (
          position1.y + size1.height <= position2.y &&
          position1.y + size1.height + velocity.y >=
          position2.y &&
          position1.x + size1.width >= position2.x &&
          position1.x <= position2.x + size2.width
        ) {

          if (entity2.hasComponent(CanStandOnTopComponent)) {
            if (entity2.hasComponent(FileComponent)) {
              store.dispatch(setFound(entity2.getComponent(FileComponent).id))
            }
            velocity.y = 0
          }
        }
      })
    })
  }

}