import { useEffect } from "react"
import { EntityManager } from "../ecs/entity/EntityManager";
import { CollisionSytem } from "../ecs/systems/Collision";
import { GravitySystem } from "../ecs/systems/Gravity";
import { PlayerInputSystem } from "../ecs/systems/PlayerInput";
import { RenderSystem } from "../ecs/systems/Render";
import { VelocitySystem } from "../ecs/systems/Velocity";

import { config } from "../config/config"

import Player from "./Player";
import GameLevel from "./GameLevel";
import { useAppSelector } from "../redux/hooks";
import { selectLevel } from "../redux/features/level/levelSlice";


type Props = {
  app: any
}



function Game({ app }: Props) {
  const levels = useAppSelector(selectLevel)
  const entityManager = new EntityManager();
  const playerInputSystem = new PlayerInputSystem(entityManager);
  const renderSystem = new RenderSystem(entityManager, app.stage);
  const collisionSystem = new CollisionSytem(entityManager)
  const gravitySystem = new GravitySystem(entityManager, app.screen)
  const velocitySystem = new VelocitySystem(entityManager)

  const gameLoop = (deltaTime) => {
    playerInputSystem.update(deltaTime);
    collisionSystem.update(deltaTime)
    velocitySystem.update(deltaTime)
    gravitySystem.update(deltaTime)
    renderSystem.update(deltaTime)
  }
  useEffect(() => {
    document.body.appendChild(app.view);
    app.ticker.maxFPS = 60
    app.ticker.add(gameLoop);

    app.start();
    return () => {
      app.ticker.remove(gameLoop)
      app.stage.removeChildren()
      document.body.removeChild(app.view)
    }
  }, [])
  return (
    <>
      {levels.levels.map(level => (
        level.id === levels.current && <GameLevel entityManager={entityManager} app={app} config={config} levelComponents={level.components} key={level.id} />
      ))}
      <Player entityManager={entityManager} />
    </>
  )
}

export default Game