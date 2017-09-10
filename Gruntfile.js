module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        con: grunt.file.readJSON('conf.json'),
        "casperjs": {
            options: {
                //casperjsOptions: ['--includes=test/lib/vars.js', '--no-colors', '--log-level=info', '--verbose=false', '--xunit=artifacts/log.xml']
                casperjsOptions: [
                    '--includes=<%= con.includeFiles %>',
                    '--xunit=<%= con.logFile %>'
                ]
            },
            files: ['<%= con.onlyTestFiles %>']
        },
        "jshint": {
            files: ['Gruntfile.js', '<%= con.allJsInTest %>']
        },
        "jsbeautifier": {

            src: ['Gruntfile.js', 'conf.json', '<%= con.allJsInTest %>']
        },
        "watch": {
            options: {
                dateFormat: function(time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');

                },
                livereload: true,
            },
            scripts: {
                files: ['Gruntfile.js', '<%= con.allJsInTest %>'],
                tasks: ['default'],
            },
        },
        "jsdoc": {
            dist: {
                src: ['<%= con.allJsInTest %>', 'README.md'],
                options: {
                    destination: '<%= con.docs %>',
                    template: "node_modules/ink-docstrap/template",
                    configure: "node_modules/ink-docstrap/template/jsdoc.conf.json"
                }
            }
        },
        clean: ['artifacts']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-casperjs');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('test', ['jshint', 'casperjs']);
    grunt.registerTask('beautify', ['jsbeautifier']);
    grunt.registerTask('default', ['beautify', 'clean', 'jsdoc', 'test']);

};
