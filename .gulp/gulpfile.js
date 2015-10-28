// Gulp and Require all Gulp Tasks
var gulp = require('gulp');
require('./gulp-require')('tasks', gulp);

gulp.task('default', [
    'sass', 
    'watch'
]);
