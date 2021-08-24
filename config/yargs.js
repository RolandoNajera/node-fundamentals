const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Base for multiply operation.'
                    })
                    .option('p', {
                        alias: 'print',
                        type: 'boolean',
                        default: false,
                        describe: 'Show table in console.'
                    })
                    .option('l', {
                        alias: 'limit',
                        type: 'number',
                        demandOption: true,
                        describe: 'Limit for operation'
                    })
                    .check( (argv, options) => {
                        if ( isNaN( argv.b ) ) {
                            throw 'Base must be a number';
                        }
                        if ( isNaN( argv.l ) ) {
                            throw 'limit must be a number';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;