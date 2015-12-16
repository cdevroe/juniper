module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
        main: ['dist/']
    },
    concat: {
        basic: {
            src: ['src/javascripts/*.js'],
            dest: 'dist/javascripts/juniper.js'
        }
    },
    compass: {
            all: {
                options: {
                    sassDir: 'src/stylesheets',
                    cssDir: 'dist/stylesheets',
                    fontsDir: 'dist/fonts',
                    environment: 'production',
                    outputStyle: 'compressed',
                    relativeAssets: true,
                    noLineComments: true,
                    force: true,
                    specify: 'src/stylesheets/*.scss'
                }
            }
        },
    includes: {
        build: {
            cwd: 'src',
            src: [ '*.html', 'pages/*.html' ],
            dest: 'dist/',
            options: {
                flatten: true,
                includePath: 'src/include'
            }
        }
    },
    copy: {
        main: {
            files: [
                { 
                    expand: true, 
                    src: ['src/fonts/*'], 
                    dest: 'dist/fonts/',
                    flatten: true, 
                    filter: 'isFile'
                },
                { 
                    expand: true, 
                    src: ['src/stylesheets/normalize.css'], 
                    dest: 'dist/stylesheets/normalize.css',
                    flatten: true, 
                    filter: 'isFile'
                },
                { 
                    expand: true, 
                    src: ['src/settings.json'], 
                    dest: 'dist/',
                    flatten: true, 
                    filter: 'isFile'
                },
                {
                    expand: true, 
                    src: ['src/images/*'], 
                    dest: 'dist/images/',
                    flatten: true, 
                    filter: 'isFile'
                },
                {
                    expand: true, 
                    src: ['src/images/social_icons/*'], 
                    dest: 'dist/images/social_icons',
                    flatten: true, 
                    filter: 'isFile'
                },
                {
                    src: ['LICENSE.txt'],
                    dest: 'dist/LICENSE.txt',
                    filter: 'isFile'
                },
                {
                    src: ['README.md'],
                    dest: 'dist/README.md',
                    filter: 'isFile'
                },
                {
                    expand: true, 
                    src: ['src/screenshot.png'],
                    dest: 'dist/',
                    flatten: true,
                    filter: 'isFile'
                }
            ]
        }
    },
    watch: {
        html: {
            files: ['src/*.html'], // which HTML files to watch
            tasks: ['copy'],
            options: {
                nospawn: true
            }
        },
        js: {
            files: ['src/js/*.js'],
            tasks: ['concat','copy'],
            options: {
                nospawn: true
            }
        }
    }
});

grunt.loadNpmTasks('grunt-includes');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('default', ['clean', 'compass', 'includes', 'copy', 'concat']);

};
