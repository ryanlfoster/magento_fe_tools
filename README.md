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
To run build process just type in terminal
```
$ grunt
```
Optimize images
```
$ grunt image
```
Optimize svg graphics
```
$ grunt svg
```

1. [SCSS config](https://github.com/IOZ/magento_starter_kit/wiki/Work-with-SCSS)
2. [JSHint code quality tool](https://github.com/IOZ/magento_starter_kit/wiki/JSHint---code-quality-tool)
