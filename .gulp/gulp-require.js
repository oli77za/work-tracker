var fs      = require('fs');
var path    = require('path');
/**
 * Load a folder of gulp tasks
 * @param  {String} dir  the directory to load
 * @param  {Object} gulp gulp instance
 */
 module.exports = function (dir, gulp) {
 	dir = path.resolve(__dirname, dir);
 	var files = fs.readdirSync(dir);
 	files.forEach(function (file) {
 		require(path.resolve(dir, file))(gulp);
 	});
 };
