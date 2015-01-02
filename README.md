**Magento FE Toolskit** - package, which contains described gulp tasks and design patterns. Provide comfortable environment for front-end developers and help save time.

#### Getting started
Clone repository. 
```
$ git clone https://github.com/IOZ/magento_fe_tools
```
Copy folders **skin** to your Magento project.
#### Download Gulp dependencies.
Open via terminal your theme
```
$ cd skin/frontend/<package>/<theme>/
```
It will load all plugin dependencies from **package.json**
```
$ npm install
```
#### Run gulp task's
All gulp tasks described at file
```
skin/frontend/<package>/<theme>/Gulpfile.js
```
To run build process just type in terminal
```
$ gulp
```
this command run default gulp task.
