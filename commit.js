const { exec } = require('child_process');
const chalk = require('chalk');

const { askQuestion } = require('./ask-question');
const { getCommitPrefix } = require('./get-commit-prefix');
const { printError } = require('./print-error');

const commit = (config) => {
    exec('git rev-parse --abbrev-ref HEAD', async(err, branchName, stderr) => {
        if (err) {
            printError(stderr);
        }
        const { jiraTicketKey, emojiFaction } = config;
        const commitPrefix = getCommitPrefix(branchName, jiraTicketKey, emojiFaction);
        const commitMessage = await askQuestion(chalk.bold.blueBright( "Your commit message: "));

        const fullCommitMessage = `${commitPrefix}\t${commitMessage}`;
        exec(`git commit -m "${fullCommitMessage}"`, (err, result, stderr) => {
            if (err){
                printError(stderr);
            }
            // will print default git commit message (how many lines were inserted or deleted)
            console.log(result);
        });
    });
};

module.exports = {
    commit
};