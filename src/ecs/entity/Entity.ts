export class Entity {
  components
  constructor() {
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