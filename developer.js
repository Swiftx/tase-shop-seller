const gulp = require('gulp');
const Transform = require('readable-stream/transform');
//const ts = require("gulp-typescript");
//const tsProject = ts.createProject("tsconfig.json");

//tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("build"));

const testSteam = new Transform({objectMode: true});

readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('got %d characters of string data', chunk.length);
});



testSteam.on('pipe', (src) => {
    //console.log(src);
});

testSteam.on('end', () => {
    console.log('asdasd');
});


gulp.src('./components/*.ts').pipe(testSteam);