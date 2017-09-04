var util = require('./lib/util');
var del = require('del');
var zip = require('gulp-zip');
var path = require('path');
module.exports = function (gulp, config) {
    //清除目标目录
    function delDist() {
        return del(['./dist']);
    }

    function zipTask() {
        var ab = path.resolve('./disk');
        var project = path.normalize(ab).toString().split("/");
        var dir = project[project.length - 2];
        return gulp.src('./dist/**/*').pipe(zip('' + dir + '.zip')).pipe(gulp.dest('./'));
    }
    //注册 zip 任务
    gulp.task('zip', gulp.series('build_dist', zipTask, delDist));
};
