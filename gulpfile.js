/**
 * Created by Jens-Laptop on 1/4/2017.
 */
const gulp = require('gulp'),
    gulpapidoc = require('gulp-apidoc'),
    gulpnodemon = require('gulp-nodemon');
gulp.task('default',function(){
    gulpnodemon({
        script:'app.js',
        ext:'js',
        env:{
            port:3000
        },
        ignore:['./node_moules/**']
    });
});
gulp.task('apidoc',function(done){
   gulpapidoc({
       src:'controllers/',
       dest: 'apidoc/'
   },done)
});