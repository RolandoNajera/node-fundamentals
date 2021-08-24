const argv = require('./config/yargs');
const { craeateFileTable } = require('./helpers/multiply');

console.clear();

const base = argv.base;
const limit = argv.limit;
const print = argv.print;

craeateFileTable( base, limit, print )
    .then( fileName => console.log( `File ${ fileName } created.` ))
    .catch( err => console.log( err ) );

