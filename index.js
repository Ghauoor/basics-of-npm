const _ = require("underscore");

//? require func resolution
// Core Module
// File or Module
// node_modules folder

/**
 * Node version system work as --> Sementic versioning
 * Major.Minior.Patch
 * In case of any bug fix only Patch verion is increase
 * In case of minior updates only Minior version is increase it's mostly not breaking changes
 * in case of Major or might be breaking changes Major ver incr
 * ^ means we are intrestested in Minor version chages
 * ~ means we are interested only in patch updates
 *
 * npm list --depth=0 --> list down all the dependencies
 * npm view packageName --> list down all the pkg info
 * npm view mongoose dependiecies --> show the dependencies of pkg
 * npm outdated --> all outdated packages
 * npm update --> update all the minor and patch releases
 * npm-check-updates || ncu --> check for all pkgs updates
 * ncu outdated --> all outdated dependencies
 *
 * DevDependencies --> should not go to the deve
 *
 * npm i packageName --save-dev --> for dev dependencies
 *
 * */

const res = _.contains([1, 24, 5, 5], 5);

console.log(res);
