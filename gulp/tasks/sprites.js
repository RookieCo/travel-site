var gulp = require('gulp'),
svgSrpite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', function() {
	return del(['./tem/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSrpite(config))
		.pipe(gulp.dest('./app/tem/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/tem/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/tem/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic','copySpriteCSS'], function() {
	return del('./app/tem/sprite');
});

gulp.task('icons', ['beginClean','createSprite','copySpriteGraphic','copySpriteCSS','endClean']);









