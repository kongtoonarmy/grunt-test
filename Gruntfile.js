module.exports = function(grunt) {

    var globalConfig = require('./config.js');

    var taskConfig = {
        uncss: {
            dist: {
                files: {
                    'css/tidy.css': ['index.html']
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    // Process then save a new file to be dist/index.html
                    'dist/index.html': ['index.html']
                }
            }
        },

        less: {
            development: {
                options: {
                    paths: ["less/source.less"]
                },
                files: {
                    "css/style-less.css": "less/source.less"
                }
            }
        },

        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            }
        },

        copy: {
            html: {
                files: [
                    {src: '<%= fileName %>', dest: '<%= buildDir %>/'}
                ]
            }
        }
    };

    console.log(taskConfig, globalConfig);
    grunt.initConfig(grunt.util._.extend(taskConfig, globalConfig));

    // Load plugin
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Set default task
    grunt.registerTask('default', ['uncss', 'processhtml', 'less']);
};
