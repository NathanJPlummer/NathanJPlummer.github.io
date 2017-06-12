module.exports = function (grunt) {

    //plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Project configuration.
    grunt.initConfig({
        // Config will go here

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['javascript/bar-graph.js', 'javascript/dotValid.js', 'javascript/calculator.js', 'javascript/search.js'],
                dest: 'build/built.js',
            },
        },

        uglify: {
            my_target: {
                files: {
                    '../../portfolio/javascript/js-min.js': ['javascript/bar-graph.js', 'javascript/dotValid.js', 'javascript/calculator.js', 'javascript/search.js']
                }
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '../../portfolio/styles.min.css': ['normalize.css', 'eureka-light.css','open-iconic.css','fonts/fonts.css','home.css','contact.css','skills.css','graphics.css','calculator.css','powerSearch.css','projects.css','navigator.css','desktopMedia.css','mobile-standard.css','mobile-media.css']
                }
            }
        }
    });



    // Default task(s).
    grunt.registerTask('default', function () {
        console.log('Grunt has run');
    });
    
     grunt.registerTask('pCompress', ['uglify', 'cssmin']);
};
