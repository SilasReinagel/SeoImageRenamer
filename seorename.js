const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Invalid Usage. Should be \r\n seorename [prefix] [targetDir]");
  process.exit(1);
}

const prefix = args[0];
const targetDir = args.length > 1 
  ? args[1] 
  : process.cwd();

fs.readdirSync(targetDir)
  .forEach((file, index) => {
    console.log(`${targetDir}/${file}`, ' -> ', `${targetDir}/${prefix}-${index+1}${path.extname(file)}`);
    fs.renameSync(`${targetDir}/${file}`, `${targetDir}/${prefix}-${index+1}${path.extname(file)}`);
  });
