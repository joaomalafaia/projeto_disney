const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() { /*aqui estamos avisando à máquina para compilar e transofrmas o scss em css*/
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() { /*aqui estamos avisando à máquina para minimizar as imagens*/
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images); /* forma de colocar o watch para atualização simultânea do desenvolvimento */
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}