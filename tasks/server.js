/*
---------------------------------------
Development / Deployment
---------------------------------------
*/

const
  {parallel} = require('gulp'),
  conf = require('../config'),

  browserSync = require('browser-sync').init
;

/*
 * Starts a live reload proxy via Browsersync
 */

function livereload() {
  browserSync.init(conf.browsersync);
}


/*
 * Exports
 */

if (conf.server.enable) {
  exports.server = parallel(
    livereload
  );
} else {
  exports.server = livereload;
}
