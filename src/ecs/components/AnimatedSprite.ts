import { AnimatedSprite } from "pixi.js";
import { TAnimation } from "../../config/types";
import { Assets } from "pixi.js";

export class AnimatedSpriteComponent {
  animations: {}
  sheet: any
  constructor(sheet: any, animations: TAnimation[]) {
    animations.forEach(animation => {
      this.animations[animation.name] = new AnimatedSprite(sheet.animations[animation.src]);
    })
  }

  // Object.keys(GAME.playerSpriteData.animations).forEach(animation => {
  //   GAME.playerSprites[animation] = new PIXI.AnimatedSprite(GAME.player.spritesheet.animations[animation]);
  // });
  // GAME.player.sprite.textures = GAME.playerSprites['up'].textures
}