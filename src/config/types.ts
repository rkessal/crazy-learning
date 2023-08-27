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
  supports: TSupport[]
  timer?: number
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
  texture: string
  height: number,
  width: number
}
