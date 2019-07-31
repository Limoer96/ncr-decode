const { exec } = require('child_process');
const { ncrDecode, dfmDecode, ncrEncode } = require('../index');

describe('Test ncrDecode APIs', () => {
  test('test NCR decode', () => {
    expect(ncrDecode('&#23435;&#20307;')).toBe('宋体');
    expect(ncrDecode('&#x5b8b;&#x4f53;')).toBe('宋体');
    expect(ncrDecode('not a correct ncr string')).toBe('not a correct ncr string');
  });
  test('test string to NRC string', () => {
    expect(ncrEncode('你好！', 16)).toBe('&#x4f60;&#x597d;&#xff01;');
    expect(ncrEncode('NRC\n1i')).toBe('&#78;&#82;&#67;&#10;&#49;&#105;');
    expect(() => ncrEncode('你好！', 18)).toThrowError('Unsupported'); // radix only 10 16
  });
  test('test dfm ncr decode', () => {
    expect(dfmDecode('#23435#20307')).toBe('宋体');
    expect(dfmDecode('&#23435;&#20307;')).toBe('宋体');
    expect(dfmDecode('wrongNCR!')).toBe('wrongNCR!');
  });
  test('test encode and decode', () => {
    expect(ncrDecode(ncrEncode('宋体'))).toBe('宋体');
  });
});

describe('Test the cli', () => {
  test('test inline cli', (done) => {
    exec('ncrd --inline "#23435#20307"', (err, stdout, stderr) => {
      if (err) {
        done();
      } else {
        expect(stdout).toBe('宋体\n');
        done();
      }
    })
  })
});
