# Angular on FHIR

Angular 14 base project with Bootstrap 5 for SMART-on-FHIR-based UIs.

## Developer Quick Start

This is an [AngularJS 14](https://angular.io) project using `npm` as the package manager and build system, [SCSS](http://sass-lang.com) for CSS and [Bootstrap](http://getbootstrap.com/) for layout.

	npm install # to install project development dependencies
	npm run start # to build and run in development mode

Visiting the application directly at [http://localhost:4200](http://localhost:4200) **will not work**! You must launch it via the SMART protocol using a sandbox system (e.g. sandbox.logicahealth.org), EHR, or other SMART launch process. Configure your SMART launcher as follows:

  - Launch URL: http://localhost:4200/launch
  - Redirect URL: http://localhost:4200/
  - Scopes: launch patient/*.read openid profile
  - Standalone launch (as opposed to embedded)
  - Patient context, which will make the launcher send a patient ID to the app after launch
  
Set and export the following environment variables in your shell:

	export EXAMPLE_CLIENT_ID=<client_id_from_smart_launcher>
	export EXAMPLE_DEBUG=true
 
The application, when loaded, should look similar to the following screenshot:
![Metadata](https://raw.githubusercontent.com/preston/angular-on-fhir/master/doc/screenshots/1.png)

## Building for Production

If you use [Docker](https://www.docker.com), you can build into an [nginx](http://nginx.org) web server container using the including Dockerfile with:

	docker build -t p3000/angular-on-fhir:latest . # use your own repo and tag strings :)

## Production Deployment

Easy:

	docker run -d -p 9000:80 --restart unless-stopped p3000/angular-on-fhir:latest # or any official tag

# License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
