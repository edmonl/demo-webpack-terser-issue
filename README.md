# Build
Run `npm install` to install dev dependencies. Run `npm run build` to bundle with webpack. The bundled output is `dist/index.js`.

# Run
Though the bundle is targeted to browers, it also can be run in Node.js. Simply run `node dist`.

If minification works correctly, the code should print `Succeed!`. Otherwise it prints `Fail!`, and demonstrates that the minification is faulty and changes code behavior.

# Build without Minification
Change `mode: 'production'` to `mode: 'development'` in `webpack.config.js`, and build and run as the above. The unminified bundle should print `Succeed!`.

# What Happens with Minification
Properties in JSON are mangled, but the names from JSON in destructuring assignment are not.

The comments in `webpack.config.js` show some attempts to stop mangling in JSON but did not work.

In reality, packages in `modules` should be installed by `npm` and put into `node_modules` as dependencies. Here dependencies are put into `modules` for demonstration purposes, and this is necessary to trigger the minification bug.
