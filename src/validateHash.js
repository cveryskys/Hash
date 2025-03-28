const fs = require('fs');
const path = require('path');

const hashFilePath = path.join(__dirname, '../data/hashes.json');

function loadHashes() {
    try {
        const fileData = fs.readFileSync(hashFilePath, 'utf8');
        return JSON.parse(fileData).validHashes || {};
    } catch (error) {
        console.error("Error loading hash file:", error);
        return {};
    }
}

function isHashValid(moduleName, hash) {
    const hashes = loadHashes();
    return hashes[moduleName] === hash;
}

module.exports = { isHashValid };
