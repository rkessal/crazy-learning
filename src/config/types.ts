import { CanStandOnTopComponent } from "../ecs/components/CanStandOnTop"
import { FileComponent } from "../ecs/components/File"
import { GravityComponent } from "../ecs/components/Gravity"
import { MoveWithInputComponent } from "../ecs/components/MoveWithInput"
import { PositionComponent } from "../ecs/components/Position"
import { RenderComponent } from "../ecs/components/Render"
import { SizeComponent } from "../ecs/components/Size"
import { StateComponent } from "../ecs/components/State"
import { TextureComponent } from "../ecs/components/Texture"
import { VelocityComponent } from "../ecs/components/Velocity"

export type TPosition = {
  x: number,
  y: number
}

export type TSize = {
  height: number,
  width: number
}

export type TModule = {
  id: string
  title: string
  completed: boolean
  supports: TSupport[]
  lastFoundSupport: TSupport | null
  puzzlePieces: TPuzzlePiece[]
  timer?: number
}

export type TPuzzlePiece = {
  id: string
  found: boolean
}

export type TSupport = {
  id: string
  label: string
  found: boolean
  file: string
}

export type TFormation = {
  title: string
  modules: TModule[]
  grade: number
}

export type TPlayer = {
  name: string
  image: string
  texture: {
    jumping_left?: string
    jumping_right?: string
    running_left: string
    running_right: string
    standing_left: string
    standing_right: string
  }
  height: number
  width: number
}

export type TLevel = {
  id: string
  label: string
  unlocked: boolean
  nextLevelId: string | null
  rating: number
  components: any[]
}

export type TLevels = {
  current: TLevel['id']
  levels: TLevel[]
}

export enum EComponentType {
  GROUND = 'GROUND',
  BOX = 'BOX',
  TREE = 'TREE',
  PUZZLE = 'PUZZLE',
  SCENERY = 'SCENERY',
  DOOR = 'DOOR'
}

export enum EGameState {
  GAME_PLAYING = 'GAME_PLAYING',
  MENU_MAIN = 'MENU_MAIN',
  MENU_SELECT_PLAYER = 'MENU_SELECT_PLAYER',
  MENU_SELECT_LEVEL = 'MENU_SELECT_LEVEL',
}

export type TAnimation = {
  name: string
  src: string
}

export type Component = CanStandOnTopComponent
  | FileComponent
  | GravityComponent
  | MoveWithInputComponent
  | PositionComponent
  | RenderComponent
  | SizeComponent
  | StateComponent
  | TextureComponent
  | VelocityComponent
