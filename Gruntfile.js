module.exports = function(grunt) {

  grunt.initConfig({
    jshint : {
      all : ['Gruntfile.js', 'app.js', 'lib/**/*.js', 'test/**/*.js']
    },
    mochacli: {
      options: {
        require: ['chai'],
        reporter: 'spec',
        recursive: true
      },
      all: ['tests/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-cli');

  grunt.registerTask('test', ['jshint', 'mochacli']);
};