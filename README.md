# almundo-angular2

## Descripción

Este proyecto representa sólo una página: Resultado y filtrado de la búsqueda de hoteles. No he tenido tiempo de cambiar
la búsqueda a otra cosa, por lo que se mostrarán sólo hoteles de "Madrid". Las fechas y la cantidad de huéspedes son
irrelevantes, ya que el back-end (la API) no filtra por ellos.

He tomado ciertas decisiones por velocidad que, en un contexto real, no serían correctas, como por ejemplo, el filtrado
rápido y el ordenamiento de hoteles. Toda funcionalidad de este tipo (nuevamente, dado un contexto real en el que los
conjuntos de resultados son demasiado grandes) debería ser delegada a la API.

No hay nada hecho de minificación ni ofuscación de código. Tampoco existen tests, cosa que en un contexto productivo no
debería darse jamás. Además, faltan varios detalles visuales, aunque los layouts Mobile y XL se encuentran
suficientemente presentables.

# Instrucciones (las que se crearon con el proyecto, en inglés)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
