const colors = require('colors');
const fs = require('fs');

const craeateFileTable = ( base = 5, limit = 10, print = false ) => {

    let output = colors.green(`========  Table ${ base } by limit ${ limit }  =======\n`);
    let fileName = `table-${ base }.txt`;

    for( let i = 1; i <= limit; i++ ) {
        output += colors.blue(`${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`);
    }

    if ( print ) {
        console.log( output );
    }

    return new Promise( (resolve, reject) => {
        try {
            fs.writeFileSync(fileName, output);
            resolve(fileName);
        } catch ( err ) {
            reject( err );
        }   
    });

};

module.exports = {
    craeateFileTable
}
