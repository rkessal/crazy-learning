import { useEffect, useState } from "react"
import { config } from "../config/config"
import { values } from "lodash"

import { EntityManager } from "../ecs/entity/EntityManager";
import { CollisionSytem } from "../ecs/systems/Collision";
import { GravitySystem } from "../ecs/systems/Gravity";
import { PlayerInputSystem } from "../ecs/systems/PlayerInput";
import { RenderSystem } from "../ecs/systems/Render";
import { VelocitySystem } from "../ecs/systems/Velocity";
import { StateSystem } from "../ecs/systems/State";


import Player from "./Player";
import GameLevel from "./GameLevel";
import { useAppSelector } from "../redux/hooks";
import { selectLevel } from "../redux/features/level/levelSlice";
import { selectPlayer } from "../redux/features/player/playerSlice";
import { Assets } from "pixi.js";


type Props = {
  app: any
}

const animations = {}

function Game({ app }: Props) {

  const [assetsLoaded, setAssetsLoaded] = useState(false)

  const levels = useAppSelector(selectLevel)
  const entityManager = new EntityManager();
  const playerInputSystem = new PlayerInputSystem(entityManager);
  const renderSystem = new RenderSystem(entityManager, app.stage);
  const collisionSystem = new CollisionSytem(entityManager)
  const gravitySystem = new GravitySystem(entityManager, app.screen)
  const velocitySystem = new VelocitySystem(entityManager)
  const stateSystem = new StateSystem(entityManager)
  const player = useAppSelector(selectPlayer)

  const loadAssets = async () => {
    const { texture } = player
    await Promise.all([
      await Assets.load(
        values(texture),
        (_ => console.log(`loading assets...`))
      )
    ])
  }

  const gameLoop = (deltaTime) => {
    playerInputSystem.update(deltaTime);
    collisionSystem.update(deltaTime)
    velocitySystem.update(deltaTime)
    gravitySystem.update(deltaTime)
    renderSystem.update(deltaTime)
    stateSystem.update(deltaTime)
  }
  useEffect(() => {
    document.body.appendChild(app.view);
    loadAssets().then(() => {
      setAssetsLoaded(true)
      app.ticker.add(gameLoop);
      app.start();
    })
    return () => {
      app.ticker.remove(gameLoop)
      app.stage.removeChildren()
      document.body.removeChild(app.view)
    }
  }, [assetsLoaded])
  return assetsLoaded && (
    <>
      {levels.levels.map(level => (
        level.id === levels.current && <GameLevel entityManager={entityManager} app={app} config={config} levelComponents={level.components} key={level.id} />
      ))}
      <Player entityManager={entityManager} />
    </>
  )
}

export default Game