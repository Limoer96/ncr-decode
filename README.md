# ncr-decode

> A Tool to decode numeric character reference(NCR).

## what is NCR?

> numeric character reference(**NCR**) is similar to **HTML Entities**. **NCR** consists of two parts. prefix: "&#" or "&#x", body: Unicode code point. We offten see it in html, xml or even in dfm file(Delphi Form File).

there are some **NCR** string below:

```
&#23435;&#20307;
&#x4e2d;&#x56fd;
#23435#20307 (NRC in dfm)
```

## What's this?

1. A tool to decode NCR string;
2. A tool to decode NCR in `.dfm` file;
3. A cli to decode NCR string.
4. encode string to NCR.(new)

## Install

```bash
npm install --save ncr-decode
```

use the cli

```bash
npm install -g ncr-decode
```

see from [npm package](https://npmjs.org/package/ncr-decode).

## Usage

```javascript
const ncrd = require('ncr-decode')
console.log(ncrd.encode('宋体')) // &#23435;&#20307;
console.log(ncrd.encode('宋体', 16)) // &#x5b8b;&#x4f53;
console.log(ncrd.decode('&#23435;&#20307;')) // 宋体
console.log(ncrd.decode('Tim, &#20320;&#22909')) // Tim, 你好
console.log(ncrd.dfmDecode('#23435#20307')) // 宋体
console.log(ncrd.dfmDecode('&#23435;&#20307;')) // 宋体
```

### Client

#### REPL

```
PS C:\Users\limoer\www\dfmdecode> ncrd
enter `.exit` to exit.
> &#23435;&#20307;
宋体
> #23435#20307
宋体
> Tom, &#20320;&#22909;
Tom, 你好
> 123
[!invalid]  123

```

#### CLI

```
Usage: ncrd [options] [<input string>]

  -i, --inline
    inline mode, convert the input string
  <input string>
    NCR string or NCR string in dfm, if type the wrong type, just return.
```

### API

```javascript
/**
 * numerric character reference(NCR) decode
 * @param {string} str ncr string
 * @return {string}
 */
function ncrDecode(str) {...}

/**
 * NCR in dfm to NCR string
 * @param {string} str
 * @return {string}
 */
// [!Deprecated]use ncrEncode instead
// function str2NCR(str) {...}

/**
 * string to NCR string
 * @param {string} str
 * @param {number} radix [10 || 16] default: 10
 * @returns {string} NRC string
 */
function ncrEncode(str, radix = 10){...}
/**
 * decode ncr in dfm
 * @param {string} str
 * @return {string}
 */
function dfmDecode(str) {...}
```

## ChangeLog

### v1.1.0

1. add tests.
2. new API `ncrEncode` convert string to NCR string.
3. inline CLI support, use `ncrd --inline '#23435#20307'`. **Don't forget the quotes!**
