module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    "js/plugins.min.js": ["js/plugins/**/*.js"]
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
        compass: {
            watch: {
                options: {
                    watch: true,
                    config: "config.rb"
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    "css/styles.css": "css/styles.css"
                }
            }
        },
        watch: {
            styles: {
                files: ["css/styles.css"],
                tasks: ["autoprefixer"],
                options: {
                    spawn: false
                }
            },
            buildPlugins: {
                files: ["js/plugins/**/*.js"],
                tasks: ["uglify"]
            }
        },
        concurrent: {
            watch: {
                tasks: ["compass:watch", "watch"],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    /* Load tasks */
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-svgmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-concurrent");

    /* Custom task(s). */
    grunt.registerTask("default", ["concurrent"]);
    grunt.registerTask("js", ["uglify"]);
    grunt.registerTask("image", ["imagemin"]);
    grunt.registerTask("svg", ["svgmin"]);
};
