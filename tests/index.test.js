const { exec } = require('child_process')
const { decode, dfmDecode, encode } = require('../index')

describe('Test ncrDecode APIs', () => {
  test('ncr decode', () => {
    expect(decode('&#23435;&#20307;')).toBe('宋体')
    expect(decode('&#x5b8b;&#x4f53;')).toBe('宋体')
    expect(decode('not a correct ncr string')).toBe('not a correct ncr string')
  })
  test('string to NRC string', () => {
    expect(encode('你好！', 16)).toBe('&#x4f60;&#x597d;&#xff01;')
    expect(encode('NRC\n1i')).toBe('&#78;&#82;&#67;&#10;&#49;&#105;')
    expect(() => encode('你好！', 18)).toThrowError('Unsupported') // radix only 10 16
  })
  test('ncr in `.dfm`file decode', () => {
    expect(dfmDecode('#23435#20307')).toBe('宋体')
    expect(dfmDecode('&#23435;&#20307;')).toBe('宋体')
    expect(dfmDecode('wrongNCR!')).toBe('wrongNCR!')
  })
  test('decode after encode', () => {
    expect(decode(encode('宋体'))).toBe('宋体')
  })
})

describe('Test cli', () => {
  test('inline cli', (done) => {
    exec('ncrd --inline "#23435#20307"', (err, stdout, stderr) => {
      if (err) {
        done()
      } else {
        expect(stdout).toBe('宋体\n')
        done()
      }
    })
  })
})
