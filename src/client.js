#!/usr/bin/env node

const readline = require('readline');
const { dfmDecode } = require('./index');

function _findIndex(args) {
  let expected = ['-i', '--inline'];
  for (let i = 0; i < args.length; i += 1) {
    if (expected.indexOf(args[i]) > -1) {
      return i;
    }
  }
  return -1;
}

const args = process.argv.slice(2);
const index = _findIndex(args);
if (index > -1) {
  let params = [...args];
  params.splice(index, 1);
  console.log(dfmDecode(params[0]));
} else {
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
    const result = dfmDecode(line);
    console.log(result);
    rl.prompt();
  })
    .on('close', () => {
      process.exit(0);
    });
}

