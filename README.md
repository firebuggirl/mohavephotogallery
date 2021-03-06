# Angular2PhotoGallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

* if component build fails, run `ng g c name --module=app.module.ts`
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Angular 2 Photo Gallery Tutorial
http://4dev.tech/2016/11/creating-an-angular2-image-gallery/

## Buttons used:
http://butns.ga/

Try this tutorial for using .env variables in an Angular application:
https://medium.com/beautiful-angular/angular-2-and-environment-variables-59c57ba643be

`ng build --env=prod` //will minify all files

` ng serve ` to start project

## Deploy to Heroku:

* Move the angular-cli dependency from     devDependencies to dependencies in package.json

* Create a postinstall script in your package.json which builds your project to a dist directory on your server:

  ` ng build --aot -prod `

* Install express:
  ` npm install express --save `

* Create a `server.js` file in the root of your  project and add code to serve the static files in your dist directory

* Create a Heroku app in your project directory:
  ` heroku create angular-photo-gallery `

* deploy from existing Github repo:
    ` heroku git:remote -a mohavephotogallery `

` heroku config:add NODE_ENV=production `



* Commit your work and push it to Heroku to deploy:
  ` git push heroku master `
