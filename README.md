# React + TypeScript + Vite

Le projet a été créé avec vite et typescript.

Pour lancer l'application en local : `npm run dev` ou `yarn dev`.

L'application est divisée en 3 parties:
- La partie front end
- L'ECS
- Le store Redux + API

## La partie front end
Tous les composants se trouvent dans le dossier 'components'. Il contient les components 'Interface Utilisateur' et les 'Sprite' (elements graphiques du jeu)

## L'ECS (Entity Component System)
Le jeu est basé sur l'architecture [ECS](https://en.wikipedia.org/wiki/Entity_component_system).
Le system est basé sur la [composition](https://en.wikipedia.org/wiki/Composition_over_inheritance).
Les entités (joueur, plateformes, portes etc...) contiennent seulement un Id et sont gérées par un [Entity Manager](src/ecs/entity/EntityManager.ts). 

`const entityManager = new EntityManager()` (singleton)
Pour créer une entité : `const entity = entityManager.createEntity(id)`.

On peut ensuite ajouter des 'components' a ces entités, par ex: `entity.addComponent(Gravity)`.
Les components contiennent seulement de la data, aucune logique.
Par ex:
```
export class SizeComponent {
  width: number
  height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
}
```

Toute la logique est gérée dans les 'systems' et les données sont mises à jour dans la fonction `udpate()`
```
update(delta) {
 const entities = this.entityManager.getEntitiesWithComponents(VelocityComponent)

 entities.forEach((entity) => {
   const velocityComponent = entity.getComponent(VelocityComponent)
   const positionComponent = entity.getComponent(PositionComponent)
   if (!velocityComponent) return

   positionComponent.x += velocityComponent.x * delta
   positionComponent.y += velocityComponent.y * delta
 })
}
```
## Le store Redux
Toutes les données (API, state etc...) sont stockées et gérées dans un store Redux. Elles sont accessibles partout dans l'application React avec le hook `useAppDispatch` et `useAppSelector`. 


Des mocks sont disponibles dans le dossier 'mocks' et vont etre utilisés pour adapter les données API à l'application

Il reste énormement de variables non typées, c'est en cours, on se concentre sur une premiere version fonctionnelle pour l'instant.
