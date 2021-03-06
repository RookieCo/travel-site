var gulp = require('gulp'),
svgSrpite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png = require('gulp-svg2png');

var config = {
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: function() {
					return function(sprite, render){
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
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

gulp.task('createPngCopy', ['createSprite'], function() {
	return gulp.src('./app/tem/sprite/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./app/tem/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
	return gulp.src('./app/tem/sprite/css/**/*.{svg,png}')
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

gulp.task('icons', ['beginClean','createSprite', 'createPngCopy','copySpriteGraphic','copySpriteCSS','endClean']);









