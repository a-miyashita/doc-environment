var debug = require('gulp-debug');
var gulp = require('gulp');
var pandoc = require('gulp-pandoc');
var path = require('path');

var config = {
	src: {
		dir: 'src',
		type: 'rst'
	},
	dest: {
		dir: 'dest',
		formats: [{
			type: 'html5',
			ext: '.html'
		}]
	}
};

gulp.task('default', ['build']);

gulp.task('build', function() {
	config.dest.formats.forEach(function(format) {
		gulp.src(path.join(config.src.dir, config.src.pattern || '**/*.*'), { base: config.src.dir })
			.pipe(pandoc({
				from: config.src.type,
				to: format.type,
				ext: format.ext
			}))
			.pipe(gulp.dest(path.join(config.dest.dir, format.dir || format.type)))
			.pipe(debug({title: format.type}));
	});
});

gulp.task('watch', function() {
	gulp.watch(path.join(config.src.dir, config.src.pattern || '**/*.*'), ['build']);
});