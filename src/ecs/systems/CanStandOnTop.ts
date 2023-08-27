import { CanStandOnTopComponent } from "../components/State";
import { GravityComponent } from "../components/Gravity";
import { EntityManager } from "../entity/EntityManager";

export class CanStandOnTopSystem {
  entityManager: EntityManager

  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager
  }

  update() {
    const entitiesWithGravity = this.entityManager.getEntitiesWithComponents(GravityComponent)
    
    entitiesWithGravity.forEach((entity) => {
      
    })
  }
}