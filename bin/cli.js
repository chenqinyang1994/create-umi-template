#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.resolve(__dirname, "../package.json"), {
  encoding: "utf-8",
});

fs.writeFileSync('a.json', file, { encoding: "utf-8" });

console.log("create-umi-template =====");
