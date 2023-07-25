const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() { /*aqui estamos avisando à máquina para compilar e transofrmas o scss em css*/
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles; /* forma de colocar o watch para atualização simultânea do desenvolvimento */
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}