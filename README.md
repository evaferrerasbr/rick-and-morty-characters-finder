## Evaluación final del módulo 3

## Descripción

El ejercicio de evaluación final consiste en desarrollar en **React** una aplicación que devuelve inicialmente 20 personajes de la [rickandmortyapi](#https://rickandmortyapi.com/documentation/). La aplicación debe permitir filtrar por nombre y acceder a una ficha con los detalles de cada uno mediante el uso de **React router**. De forma adicional se han desarrollado filtros de género y status, así como un filtro para ordenar alfabéticamente a los personajes.

Además de React, para este desarrollo hemos utilizado **npm** y **SASS**.

## Estructura

src
├── components
│ ├── App.js - Controla el estado de la aplicación, el almacenamiento en local storage y el renderizado de los componentes
│ ├── CharacterList.js - Contiene un formulario con los filtros y un listado con los personajes que se mostrarán en pantalla
│ ├── CharacterCard.js - Tarjeta del personaje
│ ├── CharacterDetail.js - Tarjeta con detalles del personaje a la que accedemos mediante React router
│ ├── Filters - Contiene los filtros por nombre, género, status y para ordenar alfabéticamente
│ ├── Extras - Contiene componentes que añaden mejoras a la experiencia de usuaria: error del servidor, página no encontrada, reset...
│ ├── Header.js
│ └── Footer.s
├── images
├── images-readme
├── services
│ └── api.js - Gestiona la llamada a la API y captura el error si se produce
│ └── localstorage.js - Almacena la búsqueda de la usuaria en el local storage
├── stylesheets - Las hojas de estilo siguen la misma estructura que los componentes
└── index.js

El proyecto tiene las ramas principales máster y dev. Además, hemos utilizado el **sistema de Issues de Github** para organizar el trabajo. Cada una de las ramas del proyecto se corresponde con un issue, que tiene detalladas las tareas realizadas. Se han marcado como "bonus" todas las tareas extra que no eran requerimientos necesarios para la evaluación.

## Descarga e instalación

Para usar este proyecto en tu equipo local:

1. Descarga el repositorio
2. Instala node
3. Haz **npm install** para instalar las dependencias
4. Haz **npm start**

## Demo

Para ver la aplicación en funcionamiento puedes visitar el [siguiente enlace](#https://beta.adalab.es/modulo-3-evaluacion-final-evaferrerasbr/#/), que también se encuentra disponible en la descripción del proyecto.
