let project_folder = "dist"; // папка с обработанными готовыми файлами
let source_folder = "src"; // папка с исходном не обработонном кодом

let path = {
    build: { // пути вывода обработонных файлов в папку dist
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/"
    },
    src: { // пути получение файлов для обработки
        html: [source_folder + "/*.html", "!"+source_folder + "/_*.html"],
        css: source_folder + "/scss/styles.scss",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/**/*.{jpg,png,ico,gif,svg,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: { // пути мониторинга файлов
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,ico,gif,svg,webp}",
    },
    clean: "./" + project_folder + "/"
}
// плагины
let { src , dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    gulp_clean = require('gulp-clean-css'),
    gulp_rename = require('gulp-rename'),
    gulp_ugli = require('gulp-uglify-es').default,
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter');


function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false,
    })
}

function html() { // pipe на подобие then в promise и через него длаются все операций поочередно
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded",
            })
        )
        .pipe(
            group_media()
        )
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true
        }))
        .pipe(dest(path.build.css))
        .pipe(
            gulp_clean()
        )
        .pipe(
            gulp_rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

function js() { // pipe на подобие then в promise и через него длаются все операций поочередно
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(
            gulp_ugli()
        )
        .pipe(
            gulp_rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}

function fonts(params) {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));

    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
}


function imgs() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream());
}

gulp.task('otf2ttf', function() {
    return src([source_folder + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(source_folder + '/fonts/'));
})

function watchFiles(params) {
    gulp.watch([path.watch.html],html)
    gulp.watch([path.watch.css],css)
    gulp.watch([path.watch.js],js)
    gulp.watch([path.watch.img],imgs)
}

function clean(params) {
    return del(path.clean);
}



let build = gulp.series(clean,gulp.parallel(js,css,html,fonts,imgs));
let watch = gulp.parallel(build,watchFiles,browserSync);

exports.fonts = fonts;
exports.imgs = imgs;
exports.js = js;
exports.css = css
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

// 42:01 https://www.youtube.com/watch?v=stFOy0Noahg&t=3200s