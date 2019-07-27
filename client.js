const readline = require('readline');
const ncrdecode = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '-> ',
});

console.log('enter `.exit` to exit.');
rl.prompt();

rl.on('line', (line) => {
  if(line === '.exit') {
    process.exit(0);
  }
  const result = ncrdecode.dfmDecode(line);
  console.log('After decoding:');
  console.log(result);
  rl.prompt();
})
  .on('close', () => {
    process.exit(0);
  });
