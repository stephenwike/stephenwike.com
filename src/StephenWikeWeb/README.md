# StephenWikeWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Services

### Gallery Manager

This takes a json object of images and sorts them by orientation and breaks them into a grid.

#### Properties

Name|Description|Default
---|---|---
Max|The global image count max for all rows of any orientation.|4
MaxLandscape| The image count max for rows with landscaped orientation.|3
MaxPortrait| The image count max for rows with portrait orientation.|4
MaxSquared| The image count max for rows with sqaured oreintation.|4
SquaredMargin|Sets the margin to determine how close to sqaure the image aspect ratio needs to be before its considered to be in squared orientation.|0.05
RandomImageOrder|Shuffles the image order before dispersing images into rows.|true
RandomRowOrder|Shuffles the row order before returning the gallery grid.|true

#### Methods

* **BuildGallery(images: Image[]): Image[][]** - Build and return a grid of imaages.

