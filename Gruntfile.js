module.exports = function(grunt) {
 
    grunt.initConfig({
        
        uncss: { 
            dist: {
                files: {
                    'css/style.css': ['index.html']
                } 
            }
        }
    });
 
    // Load plugin
    grunt.loadNpmTasks('grunt-uncss');
 
    // Set default task
    grunt.registerTask('default', ['uncss']);
 
};