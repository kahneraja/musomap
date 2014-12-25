module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			www: {
				port: 1337,
				base: 'cordova/www'
			}
		},
    cordova_cli: {
      options : {
        cmd : 'emulate',
        platforms : [ 'android' ]
      }
    }
	});

  // load tasks
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-cordova-cli');

  // Default task(s).
  grunt.registerTask('default', ['connect:www']);

  grunt.registerTask('android', ['cordova_cli']);

};
