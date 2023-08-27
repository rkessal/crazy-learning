import { Entity } from "./Entity";

export class EntityManager {
  entities: Entity[]
  constructor() {
    this.entities = [];
  }

  createEntity(id: number) {
    const entity = new Entity(id);
    this.entities.push(entity);
    return entity;
  }

  getEntitiesWithComponents(...componentTypes) {
    return this.entities.filter(entity => {
      return componentTypes.every(componentType => entity.hasComponent(componentType));
    });
  }
}