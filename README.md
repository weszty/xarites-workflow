## XARITES THE CREATIVE AGENCY SRL

## _Automation workflow_

[![Build Status](https://xarites.com/wp-content/uploads/2022/02/xarites-tool-version.jpg)][xarites]

[![N|Solid](https://xarites.com/wp-content/uploads/2022/02/xarites.jpg)][xarites]

Created by [Vecsei Szilveszter](mailto:szilveszter@xarites.com) for [Xarites].

This is our workflow tool for automating a series of tasks.
We use Gulp + Webpack for fast development, here you will find a list of its features:

- Convert SASS to CSS
- Create source maps
- Combine css files
- Export SASS files to CSS files
- Export JS modules
- Bundle JS using webpack
- Compress images
- Convert images to WebP format
- Browser Sync

## Tech

This tool must have the following to work properly:

- [node.js](https://nodejs.org/en/) - be sure to have installed, do a version check `node --version`.

## Installation

- Copy this directory( `automation` ) in your `Plugin/Theme/WP root. `
- You can also install this plugin as it is, configure (`settings.js`) and run (`it has examples`).
- Navigate to automation directory and run `npm install`
- `All npm tasks will be executed from here!`

## Configuration

This tool has a settings file(`settins.js`), this is the only file you will need to edit.

| Settings            | README                                    |
| ------------------- | ----------------------------------------- |
| `appLocation`       | your plugin path                          |
| `appThemeLocation`  | your theme path                           |
| `urlToPreview`      | your local url of the project             |
| `adminUrlToPreview` | your local admin url of the project       |
| `env`               | your environment (development/production) |

## Usage

> `For plugins`

I assume you use a boilderplate, I adapted the file structure similar to [this one](https://wppb.me/).

- This tool is capable creating the file structure for you, hit:

```sh
npm run gulp-plugin-structure
```

- All you need to do is to `import and initialize all your modules` from your modules directory in `module-scripts.js`,
  the tool will create a `build` directory using webpack, and `automatically bundle all changes` you make.
- From this point you `load only` the bundle(`scripts-bundled.js`) from the build directory to the front-end.
- You can also manually create only the `js bundle` with `npm run gulp-scripts` for client side, and `npm run gulp-scripts-admin` for the admin side.

```sh
npm run gulp-scripts

npm run gulp-scripts-admin
```

For css it works the same way, `you create all your sass components` in the `modules directory`, and `include them` in the `module-scripts.scss` file.

- All the SASS files from modules will be converted to CSS and bundeled in the build directory, this can also be done manually with `npm run gulp-sass` for client side, and `npm run gulp-sass-admin` for the admin side.

```sh
npm run gulp-sass

npm run gulp-sass-admin
```

- You will `load only` the css bunle(`styles-bundle.css`) for the front-end.
- If for any particular reason, you need the conversion only of the css modules, you can use `npm run gulp-styles` for the public conversion, and `npm run gulp-styles-admin` for the admin conversion, you will find the converted files in the build directory.

```sh
npm run gulp-styles

npm run gulp-styles-admin
```

- This tool can compress/optimize images automatically.
- You can also run it manually for images in `public directory` and `admin-directory`

```sh
npm run gulp-compress-img

npm run gulp-compress-img-admin
```

- You can do the same thing for WebP conversions:

```sh
npm run gulp-convert-webp

npm run gulp-convert-webp-admin
```

Depending on where you work:

- Hit `gulp-watch` to start the tool on the client side (will listen to the `public directory`)
- Hit `gulp-watch-admin` to start the tool on the admin side (will listen to the `admin directory`)
- You can create subdirectories in the modules folders

```sh
npm run gulp-watch

npm run gulp-watch-admin
```

Watch without proxy:

- Hit `gulp-watch-compile` to watch changes you make on the `public directory`
- Hit `gulp-watch-compile-admin` to watch changes you make on the `admin directory`

```sh
npm run gulp-watch-compile

npm run gulp-watch-compile-admin
```

Global watcher:

- Hit `gulp-watch-all` to watch changes you make on the `public and admin directory` without proxy
- Hit `gulp-watch-all-sync` to watch changes you make on the `public and admin directory` with proxy

```sh
npm run gulp-watch-all

npm run gulp-watch-all-sync
```

> `For themes`

Themes will use a simmilar structure like we have for plugins.
To create the file structure use:

```sh
npm run gulp-theme-structure
```

This will create the assets directory with 2 subdirectories (`admin` and `public`).
Everything is the same as I mentioned for plugins.

- You will `load only` the css bunle(`styles-bundle.css`) and the js bundle(`scripts-bundled.js`) from the theme build directories.

Depending on where you work:

- Hit `gulp-watch-theme` to start the tool on the client side (will listen to the `public directory`)
- Hit `gulp-watch-theme-admin` to start the tool on the admin side (will listen to the `admin directory`)

```sh
npm run gulp-watch-theme

npm run gulp-watch-theme-admin
```

Watch without proxy:

- Hit `gulp-watch-compile-theme` to watch changes you make on the `public directory`
- Hit `gulp-watch-compile-theme-admin` to watch changes you make on the `admin directory`

```sh
npm run gulp-watch-compile-theme

npm run gulp-watch-compile-theme-admin
```

Global watcher:

- Hit `gulp-watch-theme-all` to watch changes you make on the `public and admin directory` without proxy
- Hit `gulp-watch-theme-all-sync` to watch changes you make on the `public and admin directory` with proxy

```sh
npm run gulp-watch-theme-all

npm run gulp-watch-theme-all-sync
```

- If for any particular reason, you need the conversion only of the css modules, you can use `npm run gulp-styles-theme` for the public conversion, and `npm run gulp-styles-theme-admin` for the admin conversion, you will find the converted files in the build directory.

```sh
npm run gulp-styles-theme

npm run gulp-styles-theme-admin
```

- For manual creation of the `css bundle` you can use `npm run gulp-sass-theme` for client side and `npm run gulp-sass-theme-admin` for admin side.

```sh
npm run gulp-sass-theme

npm run gulp-sass-theme-admin
```

- For manual creation of the `js bundle` you can use `npm run gulp-scripts-theme` for client side and `gulp-scripts-theme-admin` for admin side.

```sh
npm run gulp-scripts-theme

npm run gulp-scripts-theme-admin
```

- This tool can compress/optimize images automatically.
- You can also run it manually for images in `public directory` and `admin-directory`

```sh
npm run gulp-compress-img-theme

npm run gulp-compress-img-theme-admin
```

- You can do the same thing for WebP conversions:

```sh
npm run gulp-convert-webp-theme

npm run gulp-convert-webp-theme-admin
```

## Plugins

This tool is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin              | README                                      |
| ------------------- | ------------------------------------------- |
| [babel/core]        | Babel compiler core.                        |
| [preset-env]        | A Babel preset for each environment.        |
| [wordpress/scripts] | Created by the official WP team.            |
| [babel-loader]      | Babel module loader for webpack.            |
| [browser-sync]      | Live CSS Reload & Browser Syncing.          |
| [gulp]              | The streaming build system.                 |
| [gulp-clean-css]    | Minify css with clean-css.                  |
| [gulp-cli]          | Command line interface for gulp.            |
| [gulp-concat]       | Concatenates files.                         |
| [gulp-install]      | Automatically install npm.                  |
| [gulp-sass]         | Gulp plugin for sass.                       |
| [gulp-shell]        | A handy command line interface for gulp.    |
| [gulp-sourcemaps]   | Sourcemap support for gulpjs.               |
| [node-sass]         | Wrapper around libsass                      |
| [webpack]           | Packs CommonJs/AMD modules for the browser. |
| [webpack-cli]       | CLI for webpack & friends                   |
| [autoprefixer]      | Parse CSS and add vendor prefixes to CSS    |
| [imagemin]          | Minify images seamlessly                    |
| [webp]              | WebP binaries                               |

These are optional:

| Plugin   | README                                                |
| -------- | ----------------------------------------------------- |
| [axios]  | Promise based HTTP client for the browser and node.js |
| [jquery] | JavaScript library for DOM operations                 |

## Development

Want to contribute? Great!

Make a change in your file and instantaneously see your updates!
And of course, is open source, with a [public repository][weszty] on GitHub.
To extend its features you can do the following:

> Open your favorite Terminal and run these commands.[npm]

Dev Dependencies:

```sh
npm i -D <whatever you want>
or
npm i --save-dev <whatever you want>
```

Dependencies:

```sh
npm i -P <whatever you want>
or
npm i --save-prod <whatever you want>
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[npm]: https://docs.npmjs.com/cli/v8/commands/npm-install
[weszty]: https://github.com/weszty
[gulp]: http://gulpjs.com
[xarites]: https://xarites.com/
[babel/core]: https://www.npmjs.com/package/@babel/core
[preset-env]: https://www.npmjs.com/package/@babel/preset-env
[wordpress/scripts]: https://www.npmjs.com/package/@wordpress/scripts
[babel-loader]: https://www.npmjs.com/package/babel-loader
[browser-sync]: https://www.npmjs.com/package/browser-sync
[gulp]: https://www.npmjs.com/package/gulp
[gulp-clean-css]: https://www.npmjs.com/package/gulp-clean-css
[gulp-cli]: https://www.npmjs.com/package/gulp-cli
[gulp-concat]: https://www.npmjs.com/package/gulp-concat
[gulp-install]: https://www.npmjs.com/package/gulp-install
[gulp-sass]: https://www.npmjs.com/package/gulp-sass
[gulp-shell]: https://www.npmjs.com/package/gulp-shell
[gulp-sourcemaps]: https://www.npmjs.com/package/gulp-sourcemaps
[node-sass]: https://www.npmjs.com/package/node-sass
[webpack]: https://www.npmjs.com/package/webpack
[webpack-cli]: https://www.npmjs.com/package/webpack-cli
[axios]: https://www.npmjs.com/package/axios
[jquery]: https://www.npmjs.com/package/jquery
[dillinger]: https://dillinger.io/
[autoprefixer]: https://www.npmjs.com/package/gulp-autoprefixer
[imagemin]: https://www.npmjs.com/package/imagemin
[webp]: https://www.npmjs.com/search?q=webp
