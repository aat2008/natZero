const natZero = require('./natZeroRepo.json');

const getNatZero = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const nat0String = JSON.stringify(natZero);
    response.write(nat0String);
    response.end();
}

module.exports = {
    getNatZero,
  };