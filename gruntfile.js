module.exports = function(grunt)
{

    grunt.initConfig({
        watch: {
            options: {
                spawn: false
            },
            scripts: {
                files: ['js/src/*.js'],
                tasks: ['concat', 'uglify']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/main.min.js'
            }
        },
        uglify: {
            dist: {
                src: ['js/dist/main.min.js'],
                dest: 'js/dist/main.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('watch', ['watch'])

};