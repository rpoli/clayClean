module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    /* nested / compact/ compressed / expanded  */
                    trace: true,
                    debugInfo: false,
                    lineNumbers: true,
                    update: false,
                    sourcemap: "none"
                },
                files: [{
                    expand: true,
                    cwd: 'public/scss',
                    src: ['*.scss', '**/*.scss'],
                    dest: 'public/css',
                    ext: '.css'
                }]

            }
        },
        react: {
            dist : {
                    files: [{
                expand: true,
                cwd: 'public/js/reactTemplates',
                src: ['**/*.js'],
                dest: 'public/js/reactViews',
                ext: '.js'
            }]
        }},
        watch: {
            files: ['<%=scssDir%>/**/*.scss'],
            tasks: ['sass']
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['sass', 'watch']);


};