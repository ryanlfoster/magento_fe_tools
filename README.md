**Magento FE Optimization Tools** - Basic magento theme, which contains useful tools for develop optimized projects.

#### Getting started
Clone repository. 
```
$ git clone https://github.com/IOZ/magento_fe_tools
```
Copy folders **skin** and **app** to your Magento project.
#### Download Grunt dependencies.
Open via terminal your theme
```
$ cd skin/frontend/<package>/<theme>/
```
load all plugin dependencies from **package.json**
```
$ npm install
```
#### Run grunt task's
All grunt tasks described at file
```
skin/frontend/<package>/<theme>/Gruntfile.js
```
To run build process just type in terminal
```
$ grunt
```
this command run default grunt task which invoke: sass watcher, autoprefixer, build all js plugin into one.

Other grunt utils look at
[Image optimization](https://github.com/IOZ/magento_fe_tools/wiki/Grunt-utilities#1-compress-images), [SVG optimization](https://github.com/IOZ/magento_fe_tools/wiki/Grunt-utilities#2-compress-svg-files).



1. [SCSS config](https://github.com/IOZ/magento_fe_tools/wiki/Work-with-SCSS)
2. [JSHint code quality tool](https://github.com/IOZ/magento_fe_tools/wiki/JSHint---code-quality-tool)
