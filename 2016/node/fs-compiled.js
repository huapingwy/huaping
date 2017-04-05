const fs = require('fs');

fs.mkdir('./mkdir2', function (err) {});

/*fs.rmdir('./mkdir', function (err) {
    if (err) {
        console.log(err)
    }
})*/

// const rmdirFile = fs.rmdirSync('./mkdir2');
// console.log(rmdirFile);

fs.stat('./dns.js', function (err, stats) {
    console.log(stats.isFile());
});

//# sourceMappingURL=fs-compiled.js.map