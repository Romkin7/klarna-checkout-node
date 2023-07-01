const { writeFileSync } = require('fs');
const packageJSON = require('../package.json');

/**
 * writePackageJSON function,
 * that writes package json file in build output.
 * @returns {void}
 */
function writePackageJSON() {
    delete packageJSON.devDependencies;
    delete packageJSON.scripts;
    writeFileSync(`./dist/package.json`, JSON.stringify(packageJSON));
}

writePackageJSON();
