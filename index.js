/**
 * numerric character reference(NCR) to raw chinese
 * @param {string} str 
 */
function ncrDecode(str) {
  str = str.replace(/(&#)(\d{1,6});/gi,function($0){ 
		return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g,"$2"))); 
  });
  str = str.replace(/(&#x)(\w{1,4});/gi,function($0){ 
		return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g,"$2"),16)); 
	});
  return str;
}
/**
 * special encode string to NCR
 * @param {string} str
 */
function str2NCR(str) {
  if (!typeof str === 'string') return '';
  let reg = /(#x?)/g;
  if(!reg.test(str)) return str;
  str = str.replace(reg, ';&$&');
  str = str.slice(1);
  str += ';';
  return str;
}

function checkNCR(str) {
  let reg = /&#x?/;
  return reg.test(str);
}

/**
 * decode delphi .dfm file encoded chinese
 * @param {string} str 
 */
function dfmDecode(str) {
  return checkNCR(str) ? ncrDecode(str) : ncrDecode(str2NCR(str));
}

// console.log(dfmDecode('#23435#20307'));
// console.log(str2NCR('#23435#20307'));
// console.log(ncrDecode('&#23435;&#20307;'));
exports.ncrDecode = ncrDecode;
exports.str2NCR = str2NCR;
exports.dfmDecode =dfmDecode;
