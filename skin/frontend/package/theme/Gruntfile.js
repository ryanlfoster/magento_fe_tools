module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    "js/plugins.min.js": ["js/plugins/*.js"]
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: "images/uncompressed",
                    src: ["**/*.{png,jpg,gif}"],
                    dest: "images/"
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: "svg/uncompressed",
                    src: ["**/*.svg"],
                    dest: "svg/",
                    ext: ".svg"
                }]
            }
        },
        watch: {
            files: [
                "**/*.js"
            ]
        }
    });

    /* Load tasks */
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-svgmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    /* Run tasks */
    grunt.registerTask("ugly", ["uglify"]);
    grunt.registerTask("img", ["imagemin"]);
    grunt.registerTask("svg", ["svgmin"]);

};
