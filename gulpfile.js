const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function scripts() {
    return gulp.src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
}

function styles() { //com esta função ela é responsavel apenas para recuperar os arquivos
    return gulp.src("./src/style/*.scss")
        .pipe(sass({outputStyle: "compressed"})) // funcção respnsavel por cumprimir os arquivos sass
        .pipe(gulp.dest("./dist/css"));
}

function images() { //com esta função ela é responsavel apenas para recuperar os arquivos
    return gulp.src("./src/images/**/*")
        .pipe(imagemin()) // funcção respnsavel por cumprimir os arquivos sass
        .pipe(gulp.dest("./dist/images"));
}
exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch("./src/style/*.scss", gulp.parallel(styles))
    gulp.watch("./src/scripts/*.js", gulp.parallel(scripts))
}