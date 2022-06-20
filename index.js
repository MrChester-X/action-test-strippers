const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

let files = fs.readdirSync("");

for (let file of files) {
    core.warning(`${file}`)
}