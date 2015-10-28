// Config Paths
var config  = require('../config');

// Task
module.exports = function (gulp) {

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(config.globs.sass.src, ['sass']);
	gulp.watch(['../private/icons/svg/*.svg'], ['iconfont', 'sass']);
});

};
