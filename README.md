# MelindaWidget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

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


## Loading the survey as a widget
```
<iframe id="melinda-survey-12345" style="width: 100%; max-width: 400px; min-width: 250px; height: 300px; min-height: 300px; margin-top: 10px; margin-bottom: 10px; display: block; border-width: 0px;" scrolling="yes"></iframe><script type="text/javascript">document.getElementById("melinda-survey-12345").src="http://melinda-dev.web.app/?src="+encodeURIComponent(window.location.href);</script>
```
