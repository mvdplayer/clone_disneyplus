const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() { //com esta função ela é responsavel apenas para recuperar os arquivos
    return gulp.src("./src/style/*.scss")
        .pipe(sass({outputStyle: "compressed"})) // funcção respnsavel por cumprimir os arquivos sass
        .pipe(gulp.dest("./dist/css"));
}


exports.default = styles;
exports.watch = function() {
    gulp.watch("./src/style/*.scss", gulp.parallel(styles))
}