# HealthCreek

Front-end project for context-driven clinical transactions.

# Frameworks/Libraries

This most important technologies used in this project are:

* Angular2: https://angular.io/
* jQuery: https://jquery.com/
* NPM: Node.js' package manager: https://www.npmjs.com/
* Bower: A web package manager: http://bower.io/
* Grunt: A JavaScript task runner: http://gruntjs.com/
* Karma: A JavaScript test runner: http://karma-runner.github.io/


## Getting Started

1. Clone this repository!
1. Install node.js using your local package manager (brew, port, apt etc) or manually via https://nodejs.org/en/download/
1. At project root, install NPM and Bower packages:

    $ npm install
	$ npm install -g bower // Install globally. You may need admin or sudo.
	$ npm install -g typescript // So we don't have to write raw JavaScript.
    $ bower install

1. Install karma's command line interface.

    $ npm install -g karma-cli

## Running the project

Run the project in development mode without a browser from the project root (http://127.0.0.1:9001):

    $ grunt

Run the project in development mode and spawn a browser instance:

    $ grunt dev

Build and package the project for distribution:

    $ grunt build

Launch a browser to a locally built project (http://127.0.0.1:9002):

    $ grunt browse-build		

Pack typescript packages, components, and classes to source:

    $ grunt pack			

Pack and start NPM server (http://localhost:8081):

    $ npm start		
