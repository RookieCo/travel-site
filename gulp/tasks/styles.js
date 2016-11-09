var gulp = require('gulp'),
postcss = require('gulp-postcss'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
 return gulp.src('./app/assets/styles/styles.css')
 	.pipe(postcss([cssImport, mixins, nested, cssvars,hexrgba,autoprefixer]))
 	
 	//Prevent the gulp stop when any errors happen
 	.on('error', function(errorInfo) {
 		console.log(errorInfo.toString());
 		this.emit('end');
 	})
 	.pipe(gulp.dest('./app/tem/styles'));
});