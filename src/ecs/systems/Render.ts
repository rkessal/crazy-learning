import { PositionComponent } from "../components/Position";
import { RenderComponent } from "../components/Render";
import { EntityManager } from "../entity/EntityManager";

export class RenderSystem {
  entityManager: EntityManager
  constructor(entityManager: EntityManager, stage) {
    this.entityManager = entityManager;
    this.stage = stage;
  }

  update(deltaTime) {
    const entities = this.entityManager.getEntitiesWithComponents(RenderComponent);

    entities.forEach(entity => {
      const renderComponent = entity.getComponent(RenderComponent);

      // Update the graphics based on the entity's position
      renderComponent.sprite.position.x = entity.getComponent(PositionComponent).x;
      renderComponent.sprite.position.y = entity.getComponent(PositionComponent).y;

      // Render the graphics on the stage
      this.stage.addChild(renderComponent.sprite);
    });
  }
}