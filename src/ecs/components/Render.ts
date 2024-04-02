import { AnimatedSprite, Assets, Sprite } from 'pixi.js'

export class RenderComponent {
  sprite: Sprite
  constructor(sprite) {
    this.sprite = Sprite.from(sprite.texture)
    this.sprite.height = sprite.height
    this.sprite.width = sprite.width
  }
}


export class RenderAnimatedComponent {
  sprite: AnimatedSprite
  texture: any

  constructor({ height, width, texture }: { height: number, width: number, texture?: any }) {
    this.sprite = new AnimatedSprite(Assets.get(texture['standing_left']).animations['standing_left'])
    this.sprite.height = height
    this.sprite.width = width
    this.sprite.animationSpeed = 0.25
    this.texture = texture
  }
}