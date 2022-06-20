const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

let files = fs.readdirSync("addons/stripper/maps");

for (let file of files) {
    core.warning(`${file}`)
}