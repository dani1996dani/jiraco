const { CONSTRUCTION, ANIMALS, EVIL, HEALTH } = require('./emoji-factions');

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomEmoji = (faction = CONSTRUCTION) => {
    const emojiCollection = getEmojiCollectionPerFaction(faction);
    const randomIndex = getRandomInt(0, emojiCollection.length - 1);
    return emojiCollection[randomIndex];
};

const getEmojiCollectionPerFaction = (faction) => {
    switch (faction){
        case CONSTRUCTION: return constructionEmojis;
        case ANIMALS: return animalEmojis;
        case EVIL: return evilEmojis;
        case HEALTH: return healthEmojis;
        default: return [''];
    }
}

const constructionEmojis = ['🏗️', '👷', '🔩', '🚧', '🛠️', '⛓'];
const animalEmojis = [
    '🐈', '🐖', '🐘', '🐙', '🐅', '🐇',
    '🐍', '🐎', '🐒', '🐓', '🐕', '🐟',
    '🦈', '🦍', '🐂', '🐋', '🐌', '🐏',
    '🐐', '🐑', '🐔', '🐜', '🐢', '🐥'
];
const evilEmojis = ['😈','😡', '🦹‍', '💢', '😤', '🤘', '👹', '🖕'];
const healthEmojis = ['🥗', '🏋️', '🏃', '🍎', '🍇', '🍌', '🍅', '🥑', '🥒', '🥬',
'🥦', '🚴',
];

module.exports = {
  getRandomEmoji
};

