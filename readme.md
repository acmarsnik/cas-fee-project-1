The following commands are possible:

| Command                                                         | Description                                                                      |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| npm run stylelint                                               | Runs linting tests for CSS files.                                                |
| npm run w3c                                                     | Runs linting tests for HTML files.                                               |
| npm run eslint                                                  | Runs linting tests for JS/MJS Files.                                             |
| npm run all                                                     | Runs all CSS/HTML/JS linting tests.                                              |
| npm run start                                                   | Starts the Web-Server: http://localhost:8080                                     |
| npm run test                                                    | Runs unit tests using karma & jasmine: http://localhost:8080                     |
| handlebars ./public/templates -f ./public/templatesCompiled.mjs | regenerates handlebars compiled templates                                        |
| ...                                                             | `./public/templates` is the location of the templates to be compiled             |
| ...                                                             | `./public/templatesCompiled.mjs` is the file that is generated from this command |
| ...                                                             | after compilation replace: `(function() {` ( at very start of file )             |
| ...                                                             | with: `export default function (Handlebars){ `                                   |
| ...                                                             | and: `})();`                                                                     |
| ...                                                             | with: `};` ( at very end of file )                                               |

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
