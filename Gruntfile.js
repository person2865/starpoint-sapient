module.exports = function(grunt) {

  var PORT = 9001,
    PATH = {
      HOME: './app/index.html',
      SITE: './app/site/**/*.*',
      DIST: './dist/*',
      VENDOR: './app/vendor/*',
      ANGULAR_SOURCE: './node_modules/angular/',
      BOOTSTRAP_SOURCE: './node_modules/bootstrap/dist/',
      VENDOR_FLDR: './app/vendor/',
      SITE_FLDR: './app/site/',
      APP_FLDR: './app/'
    };

  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
        debounceDelay: 250
      },
      files: ['./app/index.html', './app/site/**/*.*'],
      tasks: ['build']
    },
    clean: [
      './dist/*',
      './app/vendor/*'
    ],
    copy: {
      vendor: {
        files: [{
          expand: true, cwd: './node_modules/angular/', src: 'angular.min.js', dest: './app/vendor/angular/', flatten: true, filter: 'isFile'
        }, {
          expand: true, cwd: './node_modules/bootstrap/dist/', src: 'css/**/*.*', dest: './app/vendor/bootstrap/css/', flatten: true, filter: 'isFile'
        }, {
          expand: true, cwd: './node_modules/bootstrap/dist/', src: 'fonts/**/*.*', dest: './app/vendor/bootstrap/fonts/', flatten: true, filter: 'isFile'
        }, {
          expand: true, cwd: './node_modules/angular-ui-router/release/', src: 'angular-ui-router.min.js', dest: './app/vendor/angular/', flatten: true, filter: 'isFile'
        }]
      },
      dist: {
        files: [{
          expand: true, cwd: './app/site/', src: '**', dest: './dist/site/', flatten: false
        }, {
          expand: true, cwd: './app/vendor/', src: '**', dest: './dist/vendor/', flatten: false
        }, {
          expand: true, src: PATH.HOME, dest: './dist/', flatten: true, filter: 'isFile'
        }]
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
          port: PORT,
          base: './dist/',
          hostname: 'localhost',
          open: 'http://localhost:' + PORT
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('copy:main', ['copy:vendor', 'copy:dist']);
  grunt.registerTask('build', ['clean', 'copy:main']);
  grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
  grunt.registerTask('default', ['serve']);

};
