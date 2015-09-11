var gulp = require('gulp');
var paths = require('../paths');
var packagejson = require('../../package.json');
var del = require('del');
var merge = require('merge-stream');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var addSrc = require('gulp-add-src');
var runSequence = require('run-sequence');
var sourcemap = require('gulp-sourcemaps')
var typescript = require('gulp-typescript');


var tsProject_js = typescript.createProject(paths.tsconfig, {typescript: require('typescript')});
var tsProject_dts = typescript.createProject(paths.tsconfig, {typescript: require('typescript'), declarationFiles:true});
/**
 * Transpiles all .ts files from source directory to output directory
 */
gulp.task('build:js', function() {
  var tsSource = paths.source + '/**/*.ts'
  
  gulp.src([tsSource,'!**/*.d.ts'])
  .pipe(sourcemap.init())
  .pipe(typescript(tsProject_js))
  .js
  .pipe(sourcemap.write())
  .pipe(gulp.dest(paths.output));
});

/**
 * Copy all .html files from source directory to output directory
 */
gulp.task('build:html', function() {
  gulp.src(paths.source + '/**/*.html')
  .pipe(gulp.dest(paths.output));
});

/**
 * Creates the main d.ts file
 */
gulp.task('build:d.ts', function() {
  var outDTS = packagejson.name + '.d.ts';
  
  var src = [];
  var dependencies = packagejson.jspm.dependencies;
  for(var key in dependencies) {
    src.push(dependencies[key]);
  }
  
  src = src.map((function(d) {
    var name = d.substring(d.indexOf('/')+1, d.indexOf('@'));
    return 'jspm_packages/' + d.replace(':', '/') + '/dist/' + name + '.d.ts'
  }));
  
  gulp.src(src)
  .pipe(concat(outDTS))
  .pipe(gulp.dest(paths.output));
  
});

/**
 * Executes build:js and build:html in parallel
 */
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build:js', 'build:html', 'build:d.ts'],
    callback
  );
});
