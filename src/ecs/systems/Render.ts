import { AnimatedSprite, Assets } from "pixi.js";
import { selectPuzzlePiece } from "../../redux/features/module/modulesSlice";
import { store } from "../../redux/store";
import { CanBePicked } from "../components/CanBePicked";
import { PositionComponent } from "../components/Position";
import { RenderAnimatedComponent, RenderComponent } from "../components/Render";
import { EntityState, StateComponent } from "../components/State";
import { EntityManager } from "../entity/EntityManager";

export class RenderSystem {
  entityManager: EntityManager
  stage: any
  constructor(entityManager: EntityManager, stage) {
    this.entityManager = entityManager;
    this.stage = stage;
  }

  update(deltaTime) {
    const entitiesRenderAnimated = this.entityManager.getEntitiesWithComponents(RenderAnimatedComponent);
    const entitesRender = this.entityManager.getEntitiesWithComponents(RenderComponent);

    const entities = [...entitesRender, ...entitiesRenderAnimated]

    entities.forEach(async (entity) => {
      const renderComponent = entity.getComponent(RenderComponent) || entity.getComponent(RenderAnimatedComponent)

      renderComponent.sprite.position.x = entity.getComponent(PositionComponent).x;
      renderComponent.sprite.position.y = entity.getComponent(PositionComponent).y;

      if (entity.hasComponent(RenderAnimatedComponent)) {
        renderComponent.sprite.play()
      }

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