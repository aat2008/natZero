// I was going to use a DND API but it wasnt as big as I needed it to be so I had to make it from scratch
const natZero = require('./natZeroRepo.json');

const fs = require('fs');
const dndpaper = fs.readFileSync(`${__dirname}/../client/dndpaper.png`);
const dice = fs.readFileSync(`${__dirname}/../client/d20.png`);


const getNatZero = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const nat0String = JSON.stringify(natZero);
    response.write(nat0String);
    response.end();
}

const getBackground = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(dndpaper);
    response.end();
}

const getLogo = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(dice);
    response.end();
}


module.exports = {
    getNatZero,
    getBackground,
    getLogo
  };