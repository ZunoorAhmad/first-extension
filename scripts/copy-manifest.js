const fs = require("fs");
const path = require("path");

const manifestSrc = path.join(__dirname, "../public/manifest.json");
const manifestDest = path.join(__dirname, "../build/manifest.json");

fs.copyFile(manifestSrc, manifestDest, (err) => {
  if (err) throw err;
  console.log("Manifest copied successfully!");
});
