export class Test {
  currState: string | null = null

  update(state: string) {
    if (this.currState !== state) {
      this.currState = state
      console.log(this.currState)
    }
  }
}