export class StateComponent {
  state: EntityState
  constructor(state: EntityState) {
    this.state = state
  }
}

export enum EntityState {
  STANDING_RIGHT = "STANDING_RIGHT",
  STANDING_LEFT = "STANDING_LEFT",
  RUNNING_LEFT = "RUNNING_LEFT",
  RUNNING_RIGHT = "RUNNING_RIGHT",
  JUMPING_LEFT = "JUMPING_LEFT",
  JUMPING_RIGHT = "JUMPING_RIGHT",
}