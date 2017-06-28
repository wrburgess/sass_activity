1. Install the following development packages (`node-sass`, `sass-loader`, `css-loader`, `style-loader`) using `npm install [package-name] --save-dev`

1. Set up your `webpack.config.js` file using the correct "loader" instructions

```
module: {
  loaders: [

     ... existing stuff

    ,
      {
        test: /\.scss$/,
        include: /app/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
```

1. Add a `/styles` directory to your `app` directory.

1. Add a `_variables.scss` file to your `styles` directory.

1. Add a `_reset.scss` file to your your `styles` directory.

1. Copy/paste the contents of Normalize.css into your `_reset.scss` file: https://github.com/necolas/normalize.css/blob/master/normalize.css

1. Add a `standards.scss` file to your `styles` directory.

1. Add a selector called `.default-font-treatment` and add some normal lettering styles using variables.

1. Add a selector called `.crazy-font-treatment` and add some wacko lettering styles using variables.

1. Add a `main.scss` file to your `styles` directory.

1. Import the `variables`, `reset`, and `standards` files into your `main.scss` file using the `@import` instruction.

1. Add a selector to your to your `main.scss` file for `p`.

1. Add the line `require('./styles/main.scss')` to your `app.js` file. This will tell React to render all of your CSS in your `index.html` file.

1. Build your React and Sass production files and open `public/index.html` in your browser

1. Extend your `p` selector with the different the default and crazy font styles and watch the React components update the styles
