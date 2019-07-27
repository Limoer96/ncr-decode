# ncr-decode

> A Tool to decode numeric character reference(NCR).

## what is NCR?

> numeric character reference(**NCR**) is similar to **HTML Entities**. **NCR** consists of two parts. prefix: "&#" or "&#x", body: Unicode code point. We offen see it in html, xml or event in dfm file(Delphi Form File).

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
const decode = require('ncr-decode');
console.log(decode.ncrDecode('&#23435;&#20307;')); // 宋体
console.log(decode.str2NCR('#23435#20307')); // &#23435;&#20307;
console.log(decode.dfmDecode('#23435#20307')); // 宋体
console.log(decode.dfmDecode('&#23435;&#20307;')); // 宋体
```

### CLI

```
PS C:\Users\limoer\www\dfmdecode> ncrd
enter `.exit` to exit.
-> &#23435;&#20307;
After decoding:
宋体
-> #23435#20307
After decoding:
宋体
-> &#x4e2d;&#x56fd;
After decoding:
中国
->

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
function str2NCR(str) {...}

/**
 * decode ncr in dfm
 * @param {string} str 
 * @return {string}
 */
function dfmDecode(str) {...}
```
