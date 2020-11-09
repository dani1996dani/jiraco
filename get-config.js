const findUp = require('find-up');
const { readFileSync } = require('fs');

const defaultConfig = require('./default-config');


const getConfig = () => {
    const configFilePath = findUp.sync('.jiraco');
    const configFileDataString = readFileSync(configFilePath, 'utf-8');
    let configFileData;
    try {
     configFileData = JSON.parse(configFileDataString);
    } catch(e){
        return defaultConfig;
    }
    return {...defaultConfig, ...configFileData};
};

module.exports = {
    getConfig,
};