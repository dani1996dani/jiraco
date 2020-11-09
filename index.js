#! /usr/bin/env node
const { getConfig } = require('./get-config');
const { commit } = require('./commit');

const config = getConfig();
commit(config);