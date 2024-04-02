import { TLevel, TPlayer } from "../config/types"
import playerImg from "../assets/player.png"
import playerImg2 from "../assets/player2.png"
import playerImg3 from "../assets/player3.png"


export const player1: TPlayer = {
  name: 'Le mineur',
  image: playerImg,
  texture: {
    running_left: '/assets/spritesheets/player1/player1_running_left-1.json',
    running_right: '/assets/spritesheets/player1/player1_running_right-1.json',
    standing_left: '/assets/spritesheets/player1/player1_standing_left-1.json',
    standing_right: '/assets/spritesheets/player1/player1_standing_right-1.json',
    jumping_left: '/assets/spritesheets/player1/player1_jumping_left-1.json',
    jumping_right: '/assets/spritesheets/player1/player1_jumping_right-1.json'
  },
  height: 189,
  width: 96
}

export const player2: TPlayer = {
  name: 'L\'homme des cavernes',
  image: playerImg2,
  texture: {
    running_left: '/assets/spritesheets/player1/player1_running_left-1.json',
    running_right: '/assets/spritesheets/player1/player1_running_right-1.json',
    standing_left: '/assets/spritesheets/player1/player1_standing_left-1.json',
    standing_right: '/assets/spritesheets/player1/player1_standing_right-1.json',
    jumping_left: '/assets/spritesheets/player1/player1_jumping_left-1.json',
    jumping_right: '/assets/spritesheets/player1/player1_jumping_right-1.json'
  },
  height: 189,
  width: 96
}
export const player3: TPlayer = {
  name: 'Le père noel',
  image: playerImg3,
  texture: {
    running_left: '/assets/spritesheets/player1/player1_running_left-1.json',
    running_right: '/assets/spritesheets/player1/player1_running_right-1.json',
    standing_left: '/assets/spritesheets/player1/player1_standing_left-1.json',
    standing_right: '/assets/spritesheets/player1/player1_standing_right-1.json',
    jumping_left: '/assets/spritesheets/player1/player1_jumping_left-1.json',
    jumping_right: '/assets/spritesheets/player1/player1_jumping_right-1.json'
  },
  height: 189,
  width: 96
}