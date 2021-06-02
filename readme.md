Die Vorlage beinhaltet CSS/HTML/JS-Linter. Diese sind konfiguriert.

Getting Started

1. Entzippen von der Vorlage.
2. Installieren Sie die Dependencies der Vorlage
    - Console/Terminal: «npm install» im Root vom Projekt
3. Testen Sie, ob alles richtig installiert wurde
    - Console: «npm run all» im Root vom Projekt
    - Erwarte Ausgabe: 1 Warnungen und «npm run all completed»
4. Woche 1
    - HTML Gerüst erstellen für die Wireframes und Beginn CSS:
        - /public/index.html
        - /public/styles/index.css
    - Webstorm:
        - /public/index.html "ausführen".
    - Visual Studio Code:
        - Live Server nutzen: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Folgende Befehle sind dann möglich

| Befehl            | Beschreibung                                  |
| ----------------- | --------------------------------------------- |
| npm run stylelint | Testet ob die CSS Files in Ordnung sind.      |
| npm run w3c       | Testet ob die HTML Files in Ordnung sind.     |
| npm run eslint    | Testet ob die JS Files in Ordnung sind.       |
| npm run all       | Führt die Tests für CSS/HTML/JS aus.          |
| npm run start     | Started den Web-Server: http://localhost:3000 |

---

# Tutorials Used:

[A Beginner’s Guide to Handlebars](https://www.sitepoint.com/a-beginners-guide-to-handlebars/)

## Command to compile templates:

```
handlebars ./public/templates -f ./public/templatesCompiled.mjs
```

after compilation replace through line where 1st function is with the following:

```
/* eslint-disable */
export default function (Handlebars) {
```

and then clean up end of file by replacing:

```
};
```

with:

```
};
```

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

---
