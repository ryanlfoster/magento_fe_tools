### Getting started
Clone repository.
Copy folders **skin** and **app** to your project
### Download Grunt dependencies
Open in terminal your skin folder 
```
$ cd skin/frontend/<package>/<theme>/
```
and type command
```
$ npm install
```
this command download all dependencies which described in the file **package.json** 
into folder **node_modules**
### Run Grunt utils
#### 1. Compress images
Put images into folder
```
 skin
 |----- frontend
 |------- <package>
 |--------- <theme>
 |----------- images
 |------------- uncompressed
+|--------------- image1.png
+|--------------- image2.jpg
+|--------------- image3.gif
```
run command 
```
$ grunt imagemin
```
results
```
skin
 |----- frontend
 |------- <package>
 |--------- <theme>
 |----------- images
 |------------- uncompressed
 |--------------- image1.png
 |--------------- image2.jpg
 |--------------- image3.gif
+|------------- image1.png // compressed
+|------------- image2.jpg // compressed
+|------------- image3.gif // compressed
```
#### 2. Compress svg files
Put svg files into folder 
```
 skin
 |----- frontend
 |------- <package>
 |--------- <theme>
 |----------- svg
 |------------- uncompressed
+|--------------- svg-icon-1.png
+|--------------- svg-icon-2.jpg
+|--------------- svg-icon-3.gif
```
run
```
$ grunt svgmin
```
results
```
 skin
 |----- frontend
 |------- <package>
 |--------- <theme>
 |----------- svg
 |------------- uncompressed
 |--------------- svg-icon-1.svg
 |--------------- svg-icon-2.svg
 |--------------- svg-icon-3.svg
+|------------- svg-icon-1.svg // compressed
+|------------- svg-icon-2.svg // compressed
+|------------- svg-icon-3.svg // compressed
```
#### 3. Create common JavaScript file
run
```
$ grunt uglify
```
Task get all files from folder **js/plugins**
```
skin
|----- frontend
|------- <package>
|--------- <theme>
|----------- js
|------------- plugins
|--------------- plugin-1.jquery.js
|--------------- plugin-2.jquery.js
|--------------- plugin-3.jquery.js
```
and create common compressed version
```
 skin
 |----- frontend
 |------- <package>
 |--------- <theme>
 |----------- js
+|------------- plugins.min.js // compressed
```
