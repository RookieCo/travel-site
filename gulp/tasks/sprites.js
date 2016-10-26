var gulp = require('gulp');
svgSrpite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

var config = {
	mode: {
		css: {
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('createSprite', function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSrpite(config))
		.pipe(gulp.dest('./app/tem/sprite/'));
});

gulp.task('copySpriteCSS', function() {
	return gulp.src('./app/tem/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});