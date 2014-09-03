**Magento Front-End Starter Kit** - Basic magento theme, which contains useful things for develop optimized projects.

#### Getting started
Clone repository. 
```
$ git clone https://github.com/IOZ/magento_starter_kit
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
Other grunt utils look at
[Image optimization](https://github.com/IOZ/magento_starter_kit/wiki/Grunt-utilities#1-compress-images), [SVG optimization](https://github.com/IOZ/magento_starter_kit/wiki/Grunt-utilities#2-compress-svg-files).



1. [SCSS config](https://github.com/IOZ/magento_starter_kit/wiki/Work-with-SCSS)
2. [JSHint code quality tool](https://github.com/IOZ/magento_starter_kit/wiki/JSHint---code-quality-tool)
