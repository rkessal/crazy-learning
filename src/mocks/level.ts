import { EComponentType, TLevel, TLevels } from "../config/types";

export const level1: TLevel = {
  id: 'mod1',
  label: '1',
  nextLevelId: 'mod2',
  unlocked: true,
  rating: 3,
  components: [
    {
      id: 'door3',
      type: EComponentType.DOOR,
      size: { height: 150, width: 221 },
      position: { x: 1700, y: 522 },
      texture: 'PorteSousModuleTrois.webp'
    },
    {
      id: 'door4',
      type: EComponentType.DOOR,
      size: { height: 197, width: 170 },
      position: { x: 962, y: 220 },
      texture: 'PorteSousModuleQuattre.webp'
    },
    {
      id: 'ground3',
      type: EComponentType.GROUND,
      size: { height: 71, width: 183 },
      position: { x: 1447, y: 560 },
      texture: 'PlateformeCinqModuleUn.webp'
    },
    {
      id: 'ground4',
      type: EComponentType.GROUND,
      size: { height: 71, width: 183 },
      position: { x: 1398, y: 738 },
      texture: 'PlateformeCinqModuleUn.webp'
    },
    {
      id: 'ground7',
      type: EComponentType.GROUND,
      size: { height: 71, width: 183 },
      position: { x: 1251, y: 469 },
      texture: 'PlateformeCinqModuleUn.webp'
    },
    {
      id: 'ground6',
      type: EComponentType.GROUND,
      size: { height: 271, width: 444 },
      position: { x: 1651, y: 657 },
      texture: 'PlateformeSeptModuleUn.webp'
    },
    {
      id: 'ground5',
      type: EComponentType.GROUND,
      size: { height: 676, width: 1217 },
      position: { x: 0, y: 407 },
      texture: 'PlateformeSixModuleUn.png'
    },
    {
      id: 'door1',
      type: EComponentType.DOOR,
      size: { height: 217, width: 179 },
      position: { x: 183, y: 610 },
      texture: 'PorteSousModuleUn.webp'
    },
    {
      id: 'door2',
      type: EComponentType.DOOR,
      size: { height: 168, width: 278 },
      position: { x: 713, y: 645 },
      texture: 'PorteSousModuleDeux.webp'
    },
    {
      id: 'ground1',
      type: EComponentType.GROUND,
      size: { height: 271, width: 444 },
      position: { x: 0, y: -1 },
      texture: 'PlateformeUnModuleUn.png'
    },
    {
      id: 'ground2',
      type: EComponentType.GROUND,
      size: { height: 271, width: 738 },
      position: { x: 584, y: -1 },
      texture: 'PlateformeDeuxModuleUn.png'
    },
    // {
    //   id: 'tree1',
    //   type: EComponentType.TREE,
    //   size: { width: 140, height: 233 },
    //   position: { x: 200, y: 0 },
    //   texture: 'tree.png'
    // },
    // {
    //   id: 'supp1',
    //   type: EComponentType.BOX,
    //   size: { height: 118, width: 129 },
    //   position: { x: 500, y: 0 },
    //   texture: 'box-1.png'
    // },
    // {
    //   id: 'supp2',
    //   type: EComponentType.BOX,
    //   size: { height: 118, width: 129 },
    //   position: { x: 700, y: 0 },
    //   texture: 'box-1.png'
    // },
    // {
    //   id: 'puzzle1',
    //   type: EComponentType.PUZZLE,
    //   size: { height: 100, width: 100 },
    //   position: { x: 100, y: 0 },
    //   texture: 'puzzle.png'
    // },
    // {
    //   id: 'puzzle2',
    //   type: EComponentType.PUZZLE,
    //   size: { height: 100, width: 100 },
    //   position: { x: 200, y: 0 },
    //   texture: 'puzzle.png'
    // },
    // {
    //   id: 'puzzle3',
    //   type: EComponentType.PUZZLE,
    //   size: { height: 100, width: 100 },
    //   position: { x: 300, y: 0 },
    //   texture: 'puzzle.png'
    // },
  ]
}

export const level2: TLevel = {
  id: 'mod2',
  label: '2',
  nextLevelId: 'mod3',
  unlocked: false,
  rating: 3,
  components: [
    {
      id: 'ground1',
      type: EComponentType.GROUND,
      size: { height: -1, width: 742 },
      position: { x: 0, y: -1 },
      texture: 'terrain.png'
    },
    {
      id: 'ground2',
      type: EComponentType.GROUND,
      size: { height: -1, width: 742 },
      position: { x: 741, y: -1 },
      texture: 'terrain.png'
    },
    {
      id: 'supp3',
      type: EComponentType.BOX,
      size: { height: 118, width: 129 },
      position: { x: 700, y: 0 },
      texture: 'box-1.png'
    },
  ]
}

export const level3: TLevel = {
  id: 'mod3',
  label: '3',
  nextLevelId: 'mod4',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level4: TLevel = {
  id: 'mod4',
  label: '4',
  nextLevelId: 'mod5',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level5: TLevel = {
  id: 'mod5',
  label: '5',
  nextLevelId: 'mod6',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level6: TLevel = {
  id: 'mod6',
  label: '6',
  nextLevelId: 'mod7',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level7: TLevel = {
  id: 'mod7',
  label: '7',
  nextLevelId: 'mod8',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level8: TLevel = {
  id: 'mod8',
  label: '8',
  nextLevelId: 'mod9',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level9: TLevel = {
  id: 'mod9',
  label: '9',
  nextLevelId: 'mod10',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level10: TLevel = {
  id: 'mod10',
  label: '10',
  nextLevelId: 'mod11',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level11: TLevel = {
  id: 'mod11',
  label: '11',
  nextLevelId: 'mod12',
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}

export const level12: TLevel = {
  id: 'mod12',
  label: '12',
  nextLevelId: null,
  unlocked: false,
  rating: 3,
  components: [
    {
      type: 'box',
      size: { heigth: 118, width: 129 },
      position: { x: 500, y: 0 },
      texture: 'box-1.png'
    }
  ]
}


export const levels: TLevels = {
  current: level1.id,
  levels: [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12]
}