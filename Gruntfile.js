function gruntInstructions(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'client/src/styles.css': 'client/src/styles/styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'client/**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}

module.exports = gruntInstructions;
