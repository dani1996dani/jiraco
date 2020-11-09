const { getRandomEmoji } = require('./random-emoji');
const { NONE } = require('./emoji-factions');

const getCommitPrefix = (branchName, ticketKey, emojiFaction) => {
    const anchorString = `${ticketKey}`;
    const anchorStringIndex = branchName.indexOf(anchorString);
    const crmTicketId = branchName.substring(anchorStringIndex, branchName.indexOf('/', anchorStringIndex));

    if (emojiFaction === NONE){
        return crmTicketId;
    }

    const randomEmoji = getRandomEmoji(emojiFaction);
    const commitPrefix = `${crmTicketId} ${randomEmoji}`;
    return commitPrefix;
}

module.exports = {
    getCommitPrefix
};