The following commands are possible:

| Command                                                                          | Description                                                                   |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| npm run stylelint                                                                | Runs linting tests for CSS files.                                             |
| npm run w3c                                                                      | Runs linting tests for HTML files.                                            |
| npm run eslint                                                                   | Runs linting tests for JS/MJS Files.                                          |
| npm run all                                                                      | Runs all CSS/HTML/JS linting tests.                                           |
| npm run start                                                                    | Starts the Web-Server: http://localhost:8080                                  |
| npm run test                                                                     | Runs unit tests using karma & jasmine: http://localhost:8080                  |
| npm run backend-dev                                                              | starts backend in dev mode and live updates changes                           |
| npm run frontend-dev                                                             | starts frontend in dev mode and live updates changes                          |
| handlebars ./public/templates -f ./public/scripts/frontend/templatesCompiled.mjs | regenerates handlebars compiled templates                                     |
| ...                                                                              | `./public/templates` is the location of the templates to be compiled          |
| ...                                                                              | `./public/scripts/frontend/templatesCompiled.mjs` is the file                 |
| ...                                                                              | that is generated from this command                                           |
| ...                                                                              | after compilation replace: `(function() {` ( at very start of file )          |
| ...                                                                              | with: `export default function addCompiledTemplatesToHandlebars(Handlebars){` |
| ...                                                                              | and: `})();`                                                                  |
| ...                                                                              | with: `};` ( at very end of file )                                            |

---

# Tutorials Used:

[A Beginner’s Guide to Handlebars](https://www.sitepoint.com/a-beginners-guide-to-handlebars/)

## Unit Testing

[JS unit testing with karma and jasmine](https://codeburst.io/js-unit-testing-with-karma-and-jasmine-8f8f4cbcb718)

```
npm install karma --save-dev
npm install karma-jasmine --save-dev
npm install jasmine-core --save-dev
npm install karma-chrome-launcher --save-dev
npm install karma-coverage --save-dev
npm install karma-webpack --save-dev
npm install webpack --save-dev

```

### Links to HTML Specs:

-   [Importance Spec](http://localhost:8080/public/testing/importance/importance.spec.html)

\*\*\* you need to comment out the 1st line in this file: `~/public/testing/importance/importance.spec.js`
otherwise you will see the following error: `Error during loading: Uncaught TypeError: Failed to resolve module specifier "handlebars/runtime.js". Relative references must start with either "/", "./", or "../". in http://localhost:8080/public/testing/importance/importance.spec.html line 0`

-   [Notes Spec](http://localhost:8080/public/testing/notes/notes.spec.html)

\*\*\* you need to comment out the 1st line in this file: `~/public/testing/notes/notes.spec.js`
otherwise you will see the following error: `Error during loading: Uncaught TypeError: Failed to resolve module specifier "handlebars/runtime.js". Relative references must start with either "/", "./", or "../". in http://localhost:8080/public/testing/importance/importance.spec.html line 0`

```
import Handlebars from 'handlebars/runtime.js';
```

=>

```
// import Handlebars from 'handlebars/runtime.js';
```

## Webpack

[Tutorial: how to build a Webpack app with Vanilla JS or React](https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-build-a-webpack-app-with-vanilla-js-or-react-72ca2cc7e14)

```
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm install webpack-dev-server --save-dev
npm install style-loader --save-dev
npm install css-loader --save-dev
npm install script-loader --save-dev

```

### .mjs & .cjs

needed to changed module file endings from .js to .mjs &
config file endings from .cs to .cjs to get the entire project off the ground using webpack.
This wasn't contained in the above tutorials and was discovered through my good friends google and stackoverflow :)

---
