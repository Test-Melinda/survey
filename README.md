# Melinda Survey

This project is the survey for the project Melinda (**M**obility **E**cosystem for **L**ow-carbon and **IN**novative mo**D**al shift in the **A**lps), an EU-funded Interreg Alpine Space project.

The source code of the survey is published in this repository and it's freely available under the terms of the [Apache License 2.0](https://spdx.org/licenses/Apache-2.0.html).

## Linking to the survey

To link to the survey you have to create an hyperlink to one of the following URLs, which are specific to each pilot region.

|Pilot region|URI                                             |
|------------|------------------------------------------------|
|Austria     |`https://alpine-space-melinda.github.io/?src=at`|
|France      |`https://alpine-space-melinda.github.io/?src=fr`|
|Germany     |`https://alpine-space-melinda.github.io/?src=de`|
|Italy       |`https://alpine-space-melinda.github.io/?src=it`|
|Slovenia    |`https://alpine-space-melinda.github.io/?src=si`|
|Switzerland |`https://alpine-space-melinda.github.io/?src=ch`|

To create an hyperlink, simply insert an `<a>` tag in any HTML page, for example:

```
<a href="https://alpine-space-melinda.github.io/?src=it">Join the survey now!</a>
```

## Developing the application

This project il built with [Angular 8](https://angular.io) and [SurveyJS](https://surveyjs.io).

### Downloading dependencies

Run `npm install`. 

### Run a development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
