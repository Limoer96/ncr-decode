#!/usr/bin/env node

const readline = require('readline')
const chalk = require('chalk')
const { dfmDecode } = require('./index')

function _findIndex(args) {
  let expected = ['-i', '--inline']
  for (let i = 0; i < args.length; i += 1) {
    if (expected.indexOf(args[i]) > -1) {
      return i
    }
  }
  return -1
}
/**
 * 打印输出结果
 * @param {*} transformedContent 解码后的内容
 * @param {*} originContent 初始内容
 */
function _formatOutput(transformedContent, originContent) {
  if (!originContent || !transformedContent) {
    return
  }
  // 无法decode的内容
  if (transformedContent === originContent) {
    console.log(chalk.red('[!invalid] '), chalk.gray(transformedContent))
    return
  }
  console.log(chalk.green(transformedContent))
}

const args = process.argv.slice(2)
const index = _findIndex(args)
if (index > -1) {
  let params = [...args]
  params.splice(index, 1)
  const result = dfmDecode(params[0])
  _formatOutput(result, params[0])
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
  })

  console.log(chalk.bgCyan('enter `.exit` to exit.'))
  rl.prompt()

  rl.on('line', (line) => {
    if (line === '.exit') {
      process.exit(0)
    }
    const result = dfmDecode(line)
    // console.log(result)
    _formatOutput(result, line)
    rl.prompt()
  }).on('close', () => {
    process.exit(0)
  })
}
