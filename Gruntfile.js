module.exports = function(grunt) {
 
    grunt.initConfig({

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
        }

    });
 
    // Load plugin
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-less');
 
    // Set default task
    grunt.registerTask('default', ['uncss', 'processhtml', 'less']);
};