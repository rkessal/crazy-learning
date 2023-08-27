export class StateComponent {
  state: EntityState
  constructor(state: EntityState) {
    this.state = state
  }
}

export enum EntityState {
  GROUNDED = "GROUNDED",
  JUMPING = "JUMPING",
  RUNNING = "RUNNING"
}