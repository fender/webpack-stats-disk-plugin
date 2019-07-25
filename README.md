# webpack-stats-disk-plugin

Webpack Plugin that outputs build stats to a JSON file, without storing it in memory.

## Usage

```es6
const StatsDiskPlugin = require("webpack-stats-disk-plugin");

module.exports = {
  ...
  plugins: [
    new StatsDiskPlugin({}),
  ],
};
```

Example options for use with [webpack-ssr-stats-loader](https://github.com/fender/webpack-ssr-stats-loader)
```es6
new StatsDiskPlugin({
  options: {
    publicPath: true,
    entrypoints: true,
    chunkGroups: true,
    hash: false,
    assets: false,
    children: false,
    chunks: false,
    modules: false,
    source: false,
    errorDetails: false,
    timings: false,
  }
});
```

## Parameters

* opts (Object) Parameters to pass to the plugin
* opts.filename (String) output file name (Default: "stats.json")
* opts.path (String) output directory path (Default is the webpack output.path in config)
* opts.options (Object) passed on to Webpack. See [official docs](https://webpack.js.org/configuration/stats/) for list of available options.
