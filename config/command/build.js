const webpack = require("webpack"),
  product = require("../product.js");

/** npm run build */
const compiler = webpack(product);
compiler.run((err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(
    stats.toString({
      chunks: false,
      colors: true
    })
  );
});
