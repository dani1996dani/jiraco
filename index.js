#! /usr/bin/env node
const minimist = require('minimist');
const { commit } = require('./commit');

const argsReceived = minimist(process.argv.slice(2))._;
// console.log('argsReceived', argsReceived);
// process.exit(0);

if(argsReceived.length === 0){
    commit();
} else {

}