# React template (advanced version)

Hi, this is advanced **React template** to quick jumpstart your **web app development**.
It is custom made toolchain wich is made of:

- Babel,
- Webpack
- and supported by ESLint and Prettier.
- React Router
- Material UI
- Redux

To enable ESLint and Prettier please use **VSCode exstension**s.

You can use this template out of box, just start writing code in the App.js file and hit CTRL+S :)

But first you will have to install it with this command:

`npm i`

and run it with:

`npm start`

If you want to recreate this template from scratch follow these **steps**:

## React :star:

1. npm init (initialize package.json)
2. npm i react react-dom (install React)
3. Create folders and files (public -> index.html, src -> index.js, App.js)

## Babel :computer:

4. npm i @babel/core babel-loader @babel/preset-env @babel/preset-react babel-loader --save-dev (install Babel stuff)
5. Create Babel congig file (babel.config.json)

## Webpack :package:

6. npm i webpack webpack-cli webpack-dev-server --save-dev (install Webpack, cli and dev-server)
7. "start": "webpack serve --open" (add npm start script)
8. "build": "webpack --mode production" (add npm build script)
9. Create Webpack config file (webpack.config.js)
10. npm i html-webpack-plugin --save-dev (install Webpack HTML plugin and import it)
11. npm start (test if everything is OK)

## Webpack loaders :arrows_counterclockwise:

12. npm install --save-dev style-loader css-loader (install CSS loaders for Webpack and import it)
13. Create App.css (import and test it)
14. Add favicon into public folder (import it trough Wepback)
15. npm install file-loader --save-dev (install file loader for Webpack and import it)
16. Import test image into App.js and test it

## ESlint and Prettier :beetle:

17. Install ESlint and Prettier extensions and enable Format On Save
18. npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier (install all dependencies for eslint and prettier)
19. npx install-peerdeps --dev eslint-config-airbnb (install airbnb styleguide)
20. Create ESlint config file (.eslintrc.json)
21. Enable ESlint in VSCode (bottom right on toolbar)

## "Advanced" stuff

22. npm install @material-ui/core (install MUI)
23. npm install @material-ui/icons (install MUI icons)
24. npm install react-router-dom (install React Router)
25. Create MainRouter.js file and import it in App.js (add routes as desired)
26. Update webpack.config.js (add - devServer: {historyApiFallback: true} and output:{publicPath: "/"})
27. Add style folder and theme.js into (also you can transfer App.css here)
28. Update App.js to use ThemeProvider and recently created theme.js

---

Feel free to use it and happy coding!
