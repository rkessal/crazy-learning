import { useEffect } from "react"
import { EntityManager } from "../ecs/entity/EntityManager";
import { CollisionSytem } from "../ecs/systems/Collision";
import { GravitySystem } from "../ecs/systems/Gravity";
import { PlayerInputSystem } from "../ecs/systems/PlayerInput";
import { RenderSystem } from "../ecs/systems/Render";
import { VelocitySystem } from "../ecs/systems/Velocity";

import { config } from "../config/config"

import box1Img from "../assets/box-1.png"
import groundImg from "../assets/terrain.png"
import treeImg from "../assets/tree.png"

import Player from "./Player";
import Box from "./Box";
import Ground from "./Ground";
import Tree from "./Tree";


type Props = {
  app: any
}


function Game({ app }: Props) {


  const { GROUND } = config
  const entityManager = new EntityManager();
  useEffect(() => {
    document.body.appendChild(app.view);

    const playerInputSystem = new PlayerInputSystem(entityManager);
    const renderSystem = new RenderSystem(entityManager, app.stage);
    const collisionSystem = new CollisionSytem(entityManager)
    const gravitySystem = new GravitySystem(entityManager, app.screen)
    const velocitySystem = new VelocitySystem(entityManager)


    app.ticker.add((deltaTime: number) => {
      playerInputSystem.update(deltaTime);
      collisionSystem.update(deltaTime)
      gravitySystem.update()
      velocitySystem.update()
      renderSystem.update(deltaTime)
    });

    app.start();
  }, [])
  return (
    <>
      <Ground entityManager={entityManager} size={{ width: 742, height: GROUND }} position={{ x: 0, y: app.screen.height - GROUND }} texture={groundImg} />
      <Ground entityManager={entityManager} size={{ width: 742, height: GROUND }} position={{ x: 741, y: app.screen.height - GROUND }} texture={groundImg} />
      <Tree entityManager={entityManager} size={{ width: 140, height: 233 }} texture={treeImg} position={{ x: 200, y: app.screen.height - GROUND }} />
      <Box id="supp1" entityManager={entityManager} size={{ width: 129, height: 118 }} texture={box1Img} position={{ x: app.screen.width / 2, y: app.screen.height - GROUND }} />
      <Box id="supp2" entityManager={entityManager} size={{ width: 129, height: 118 }} texture={box1Img} position={{ x: app.screen.width / 2 + 500, y: app.screen.height - GROUND }} />
      <Player entityManager={entityManager} />
    </>
  )
}

export default Game