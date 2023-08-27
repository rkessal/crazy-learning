import * as PIXI from 'pixi.js'

export class RenderComponent {
  sprite: any
  constructor(sprite) {
    this.sprite = PIXI.Sprite.from(sprite.texture)
    this.sprite.height = sprite.height
    this.sprite.width = sprite.width
  }
}