const fs = require('fs');

const writeFile = (name, content) => {
  fs.writeFileSync(name, content);
  return "ok";
}

module.exports = writeFile;