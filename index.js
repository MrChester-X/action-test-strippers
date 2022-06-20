const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

const path = "addons/stripper/maps"

let files = fs.readdirSync(path);
let countBadFiles = 0;

for (let file of files) {
    let file_path = path + "/" + file;

    /*
    fs.stat(file_path, (err, stats) => {
        if (!stats.isFile()) {
            return;
        }
    });
    */

    if (file.toLowerCase() !== file) {
        countBadFiles++;

        core.warning("The file name should only be lowercase", {file: file_path});
    }
}

if (countBadFiles) {
    core.setFailed(`${countBadFiles} files failed tests`);
}