# Melinda Survey

This project is the survey developed in project [Melinda](https://www.alpine-space.eu/projects/melinda/en/home) (**M**obility **E**cosystem for **L**ow-carbon and **IN**novative mo**D**al shift in the **A**lps), an EU-funded Interreg Alpine Space project.

The application stores responses in an existing deployment of Limesurvey. A different survey must exists on Limesurvey for each pilot region. A copy of the structure of each survey is available in the `limesurvey` folder: those backup files have been made with Limesurvey 3.19.3.

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

## Deploying the application

Make sure to have a Limesurvey deployment with all surveys correctly available and started. If not, import the surveys from the folder `limesurvey` into your Limesurvey installation.

Configure the application with the correct settings for your Limesurvey installation by copying the `limesurvey-settings.ts.dist` file. Edit it appropriately and name it `limesurvey-settings.prod.ts`.

Then build the application in production mode. The compilation output will be in the dist folder.

```
ng build --prod
```

And finally upload the content of the dist folder to your favourite web hosting.

### Common issues

If during the process of importing the surveys into Limesurvey the IDs of questions have been changed, you need to re-map every survey. To do this, visit the application (with any of the above links) in the *dev mode*. To enable *dev mode* add parameter `mode=dev` to the URI query string.

At the very bottom of the page, you can find a simple to to automatically generate mappings. The output is printed by Javascript into the browser console. To read it, open the browser development tools (the *inspector* in Chrome-based browsers). Then copy the output in the `mapping-*.prod.ts` files contained in folder `src/app/survey/specs`.

Then rebuild the application and deploy it again.

## Developing the application

This project il built with [Angular 8](https://angular.io) and [SurveyJS](https://surveyjs.io).

### Downloading dependencies

Run `npm install`.

### Configuring for you Limesurvey installation

The application stores the responses in Limesurvey surveys. So you need to configure the application with the settings appropriate for your Limesurvey deployment.

To do this you need to copy the `limesurvey-settings.ts.dist` file, edit it appropriately, and name it `limesurvey-settings.ts`.

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
