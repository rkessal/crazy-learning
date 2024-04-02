import { AnimatedSprite, Assets } from "pixi.js";
import { RenderAnimatedComponent } from "../components/Render";
import { EntityState, StateComponent } from "../components/State";
import { EntityManager } from "../entity/EntityManager";
import { Entity } from "../entity/Entity";

export class StateSystem {
  entityManager: EntityManager
  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  update(deltaTime) {
    const entities = this.entityManager.getEntitiesWithComponents(StateComponent, RenderAnimatedComponent);

    entities.forEach((entity) => {
      this.updateState(entity)
    });
  }

  updateState(entity: Entity) {

    const { sprite, texture } = entity.getComponent(RenderAnimatedComponent)
    const { state } = entity.getComponent(StateComponent)

    if (state === EntityState.RUNNING_LEFT) {
      const newTextures = new AnimatedSprite(Assets.get(texture['running_left']).animations['running_left']).textures
      if (sprite.textures !== newTextures) sprite.textures = newTextures
    }
    if (state === EntityState.RUNNING_RIGHT) {
      const newTextures = new AnimatedSprite(Assets.get(texture['running_right']).animations['running_right']).textures
      if (sprite.textures !== newTextures) sprite.textures = newTextures
    }

    if (state === EntityState.STANDING_LEFT) {
      const newTextures = new AnimatedSprite(Assets.get(texture['standing_left']).animations['standing_left']).textures
      if (sprite.textures !== newTextures) sprite.textures = newTextures
    }

    if (state === EntityState.STANDING_RIGHT) {
      const newTextures = new AnimatedSprite(Assets.get(texture['standing_right']).animations['standing_right']).textures
      if (sprite.textures !== newTextures) sprite.textures = newTextures
    }

    if (state === EntityState.JUMPING_LEFT) {
      const newTextures = new AnimatedSprite(Assets.get(texture['jumping_left']).animations['jumping_left']).textures
      if (sprite.textures !== newTextures) sprite.textures = newTextures
    }

    if (state === EntityState.JUMPING_RIGHT) {
      const newTextures = new AnimatedSprite(Assets.get(texture['jumping_right']).animations['jumping_right']).textures
      if (sprite.textures !== newTextures) sprite.textures = newTextures
    }

  }
}