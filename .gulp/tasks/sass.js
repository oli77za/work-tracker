// Plugins
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var concat      = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

// Config Paths
var config  = require('../config');

// Task
module.exports = function (gulp) {
    //Compile our sass
    gulp.task('sass',function(){
        var result = gulp.src(config.globs.sass.src)
            .pipe(sourcemaps.init())
            .pipe(concat(config.globs.tmpFile))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.globs.tmpDir))
            .pipe(sass({
                errLogToConsole: true,
                sourceMap: 'none',
                outputStyle: 'compressed'
            }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest(config.globs.destDir));
        return result;
    });

};
