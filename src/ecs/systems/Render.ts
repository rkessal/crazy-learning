import { selectPuzzlePiece } from "../../redux/features/module/modulesSlice";
import { store } from "../../redux/store";
import { CanBePicked } from "../components/CanBePicked";
import { PositionComponent } from "../components/Position";
import { RenderComponent } from "../components/Render";
import { EntityManager } from "../entity/EntityManager";

export class RenderSystem {
  entityManager: EntityManager
  stage: any
  constructor(entityManager: EntityManager, stage) {
    this.entityManager = entityManager;
    this.stage = stage;
  }

  update(deltaTime) {
    const entities = this.entityManager.getEntitiesWithComponents(RenderComponent);

    entities.forEach(entity => {
      const renderComponent = entity.getComponent(RenderComponent);

      renderComponent.sprite.position.x = entity.getComponent(PositionComponent).x;
      renderComponent.sprite.position.y = entity.getComponent(PositionComponent).y;

      this.stage.addChild(renderComponent.sprite);

      if (entity.hasComponent(CanBePicked)) {
        const puzzle = selectPuzzlePiece(entity.getComponent(CanBePicked).id)(store.getState())
        if (puzzle.found) this.stage.removeChild(renderComponent.sprite)
      }
    });
  }

  destroy() {
    this.stage.removeChildren()
  }
}