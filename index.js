const nodePath = require('path');
const fs = require('fs');

class StatsDiskPlugin {
  constructor({
    filename = 'stats.json',
    path,
    options,
  } = {}) {
    this.opts = { filename, path, options };
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('StatsDiskPlugin', (compilation, callback) => {
      const stats = compilation.getStats().toJson(this.opts.options);
      const json = JSON.stringify(stats, null, 2);
      const dir = this.opts.path || compilation.options.output.path;
      const file = nodePath.resolve(dir, this.opts.filename);
      try {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
      } catch (err) {
        if (err.code !== 'EEXIST') {
          throw err;
        }
      }
      fs.writeFileSync(file, json);
      callback();
    });
  }
}

module.exports = StatsDiskPlugin;
