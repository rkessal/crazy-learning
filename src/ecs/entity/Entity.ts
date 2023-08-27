export class Entity {
  id: number
  constructor(id) {
    this.id = id
    this.components = {};
  }

  addComponent(component) {
    this.components[component.constructor.name] = component;
  }

  getComponent(componentType) {
    return this.components[componentType.name];
  }

  hasComponent(componentType) {
    return componentType.name in this.components;
  }
}