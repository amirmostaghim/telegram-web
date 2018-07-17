(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor"));
	else if(typeof define === 'function' && define.amd)
		define(["vendor"], factory);
	else if(typeof exports === 'object')
		exports["mtproto"] = factory(require("vendor"));
	else
		root["mtproto"] = factory(root["vendor"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["q"] = stringToChars;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return strDecToHex; });
/* harmony export (immutable) */ __webpack_exports__["f"] = bytesToHex;
/* harmony export (immutable) */ __webpack_exports__["y"] = bytesFromHex;
/* harmony export (immutable) */ __webpack_exports__["e"] = bytesCmp;
/* harmony export (immutable) */ __webpack_exports__["A"] = bytesXor;
/* unused harmony export bytesToWords */
/* unused harmony export bytesFromWords */
/* unused harmony export bytesFromLeemonBigInt */
/* harmony export (immutable) */ __webpack_exports__["h"] = bytesToArrayBuffer;
/* harmony export (immutable) */ __webpack_exports__["c"] = convertToArrayBuffer;
/* harmony export (immutable) */ __webpack_exports__["b"] = convertToUint8Array;
/* harmony export (immutable) */ __webpack_exports__["v"] = convertToByteArray;
/* harmony export (immutable) */ __webpack_exports__["g"] = bytesFromArrayBuffer;
/* unused harmony export bufferConcat */
/* harmony export (immutable) */ __webpack_exports__["o"] = longToInts;
/* harmony export (immutable) */ __webpack_exports__["i"] = longToBytes;
/* harmony export (immutable) */ __webpack_exports__["p"] = lshift32;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return rshift32; });
/* harmony export (immutable) */ __webpack_exports__["m"] = intToUint;
/* harmony export (immutable) */ __webpack_exports__["j"] = uintToInt;
/* harmony export (immutable) */ __webpack_exports__["r"] = sha1HashSync;
/* harmony export (immutable) */ __webpack_exports__["d"] = sha1BytesSync;
/* harmony export (immutable) */ __webpack_exports__["s"] = sha256HashSync;
/* harmony export (immutable) */ __webpack_exports__["z"] = rsaEncrypt;
/* unused harmony export addPadding */
/* harmony export (immutable) */ __webpack_exports__["t"] = aesEncryptSync;
/* harmony export (immutable) */ __webpack_exports__["u"] = aesDecryptSync;
/* harmony export (immutable) */ __webpack_exports__["n"] = gzipUncompress;
/* harmony export (immutable) */ __webpack_exports__["l"] = nextRandomInt;
/* harmony export (immutable) */ __webpack_exports__["w"] = pqPrimeFactorization;
/* unused harmony export pqPrimeLeemon */
/* harmony export (immutable) */ __webpack_exports__["x"] = bytesModPow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_toLower__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_toLower___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda_src_toLower__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rusha__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rusha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rusha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goodmind_node_cryptojs_aes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goodmind_node_cryptojs_aes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__goodmind_node_cryptojs_aes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pako_lib_inflate__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pako_lib_inflate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pako_lib_inflate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_secure_random__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vendor_leemon__ = __webpack_require__(36);



var { CryptoJS } = __WEBPACK_IMPORTED_MODULE_2__goodmind_node_cryptojs_aes__;






var rushaInstance = new __WEBPACK_IMPORTED_MODULE_1_rusha___default.a(1024 * 1024);

function stringToChars(str) {
  var ln = str.length;
  var result = Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = str.charCodeAt(i);
  }return result;
}

var strDecToHex = str => __WEBPACK_IMPORTED_MODULE_0_ramda_src_toLower___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["a" /* bigInt2str */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(str, 10, 0), 16));

function bytesToHex(bytes = []) {
  var arr = [];
  for (var i = 0; i < bytes.length; i++) {
    arr.push((bytes[i] < 16 ? '0' : '') + (bytes[i] || 0).toString(16));
  }
  return arr.join('');
}

function bytesFromHex(hexString) {
  var len = hexString.length;
  var start = 0;
  var bytes = [];

  if (hexString.length % 2) {
    bytes.push(parseInt(hexString.charAt(0), 16));
    start++;
  }

  for (var i = start; i < len; i += 2) {
    bytes.push(parseInt(hexString.substr(i, 2), 16));
  }

  return bytes;
}

function bytesCmp(bytes1, bytes2) {
  var len = bytes1.length;
  if (len !== bytes2.length) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (bytes1[i] !== bytes2[i]) return false;
  }
  return true;
}

function bytesXor(bytes1, bytes2) {
  var len = bytes1.length;
  var bytes = [];

  for (var i = 0; i < len; ++i) {
    bytes[i] = bytes1[i] ^ bytes2[i];
  }

  return bytes;
}

function bytesToWords(bytes) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  var len = bytes.length;
  var words = [];
  var i = void 0;
  for (i = 0; i < len; i++) {
    words[i >>> 2] |= bytes[i] << 24 - i % 4 * 8;
  }

  return new CryptoJS.lib.WordArray.init(words, len);
}

function bytesFromWords(wordArray) {
  var words = wordArray.words;
  var sigBytes = wordArray.sigBytes;
  var bytes = [];

  for (var i = 0; i < sigBytes; i++) {
    bytes.push(words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff);
  }

  return bytes;
}

function bytesFromLeemonBigInt(bigInt) {
  var str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["a" /* bigInt2str */])(bigInt, 16);
  return bytesFromHex(str);
}

function bytesToArrayBuffer(b) {
  return new Uint8Array(b).buffer;
}

function convertToArrayBuffer(bytes) {
  // Be careful with converting subarrays!!
  if (bytes instanceof ArrayBuffer) {
    return bytes;
  }
  if (bytes.buffer !== undefined && bytes.buffer.byteLength == bytes.length * bytes.BYTES_PER_ELEMENT) {
    return bytes.buffer;
  }
  return bytesToArrayBuffer(bytes);
}

function convertToUint8Array(bytes) {
  if (bytes.buffer !== undefined) return bytes;
  return new Uint8Array(bytes);
}

function convertToByteArray(bytes) {
  if (Array.isArray(bytes)) return bytes;
  bytes = convertToUint8Array(bytes);
  var newBytes = [];
  for (var i = 0, len = bytes.length; i < len; i++) {
    newBytes.push(bytes[i]);
  }return newBytes;
}

function bytesFromArrayBuffer(buffer) {
  var byteView = new Uint8Array(buffer);
  var bytes = Array.from(byteView);
  return bytes;
}

function bufferConcat(buffer1, buffer2) {
  var l1 = buffer1.byteLength || buffer1.length;
  var l2 = buffer2.byteLength || buffer2.length;
  var tmp = new Uint8Array(l1 + l2);
  tmp.set(buffer1 instanceof ArrayBuffer ? new Uint8Array(buffer1) : buffer1, 0);
  tmp.set(buffer2 instanceof ArrayBuffer ? new Uint8Array(buffer2) : buffer2, l1);

  return tmp.buffer;
}

// const dividerBig = bigint(0x100000000)
var dividerLem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])('100000000', 16, 4);

// const printTimers = (timeL, timeB, a, b, n) => setTimeout(
//   () => console.log(`Timer L ${timeL} B ${timeB}`, ...a, ...b, n || ''),
//   100)

function longToInts(sLong) {
  var lemNum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(sLong, 10, 6);
  var div = new Array(lemNum.length);
  var rem = new Array(lemNum.length);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["c" /* divide_ */])(lemNum, dividerLem, div, rem);
  var resL = [~~__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["a" /* bigInt2str */])(div, 10), ~~__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["a" /* bigInt2str */])(rem, 10)];
  return resL;
}

function longToBytes(sLong) {
  return bytesFromWords({ words: longToInts(sLong), sigBytes: 8 }).reverse();
}

function lshift32(high, low) {
  var highNum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(high.toString(), 10, 6);
  var nLow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(low.toString(), 10, 6);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["d" /* leftShift_ */])(highNum, 32);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["e" /* add_ */])(highNum, nLow);
  var res = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["a" /* bigInt2str */])(highNum, 10);
  return res;
}

var rshift32 = str => {
  var num = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(str, 10, 6);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["f" /* rightShift_ */])(num, 32);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["a" /* bigInt2str */])(num, 10);
};

function intToUint(val) {
  var result = ~~val;
  if (result < 0) result = result + 0x100000000;
  return result;
}

var middle = 0x100000000 / 2 - 1;

function uintToInt(val) {
  if (val > middle) val = val - 0x100000000;
  return val;
}

function sha1HashSync(bytes) {
  // console.log(dT(), 'SHA-1 hash start', bytes.byteLength || bytes.length)
  var hashBytes = rushaInstance.rawDigest(bytes).buffer;
  // console.log(dT(), 'SHA-1 hash finish')

  return hashBytes;
}

function sha1BytesSync(bytes) {
  return bytesFromArrayBuffer(sha1HashSync(bytes));
}

function sha256HashSync(bytes) {
  // console.log(dT(), 'SHA-2 hash start', bytes.byteLength || bytes.length)
  var hashWords = CryptoJS.SHA256(bytesToWords(bytes));
  // console.log(dT(), 'SHA-2 hash finish')

  var hashBytes = bytesFromWords(hashWords);

  return hashBytes;
}

function rsaEncrypt(publicKey, bytes) {
  bytes = addPadding(bytes, 255);

  var N = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(publicKey.modulus, 16, 256);
  var E = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(publicKey.exponent, 16, 256);
  var X = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(bytesToHex(bytes), 16, 256);
  var encryptedBigInt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["g" /* powMod */])(X, E, N),
      encryptedBytes = bytesFromHex(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["a" /* bigInt2str */])(encryptedBigInt, 16));

  return encryptedBytes;
}

function addPadding(bytes, blockSize, zeroes) {
  blockSize = blockSize || 16;
  var len = bytes.byteLength || bytes.length;
  var needPadding = blockSize - len % blockSize;
  if (needPadding > 0 && needPadding < blockSize) {
    var padding = new Array(needPadding);
    if (zeroes) {
      for (var i = 0; i < needPadding; i++) {
        padding[i] = 0;
      }
    } else __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__service_secure_random__["a" /* default */])(padding);

    bytes = bytes instanceof ArrayBuffer ? bufferConcat(bytes, padding) : bytes.concat(padding);
  }

  return bytes;
}

function aesEncryptSync(bytes, keyBytes, ivBytes) {
  // console.log(dT(), 'AES encrypt start', len/*, bytesToHex(keyBytes), bytesToHex(ivBytes)*/)
  bytes = addPadding(bytes);

  var encryptedWords = CryptoJS.AES.encrypt(bytesToWords(bytes), bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.IGE
  }).ciphertext;

  var encryptedBytes = bytesFromWords(encryptedWords);
  // console.log(dT(), 'AES encrypt finish')

  return encryptedBytes;
}

function aesDecryptSync(encryptedBytes, keyBytes, ivBytes) {

  // console.log(dT(), 'AES decrypt start', encryptedBytes.length)
  var decryptedWords = CryptoJS.AES.decrypt({ ciphertext: bytesToWords(encryptedBytes) }, bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.IGE
  });

  var bytes = bytesFromWords(decryptedWords);
  // console.log(dT(), 'AES decrypt finish')

  return bytes;
}

function gzipUncompress(bytes) {
  // console.log('Gzip uncompress start')
  var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_pako_lib_inflate__["inflate"])(bytes);
  // console.log('Gzip uncompress finish')
  return result;
}

function nextRandomInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function pqPrimeFactorization(pqBytes) {
  var minSize = Math.ceil(64 / __WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["h" /* bpe */]) + 1;

  // const what = new BigInteger(pqBytes)
  var hex = bytesToHex(pqBytes);
  var lWhat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(hex, 16, minSize);
  var result = pqPrimeLeemon(lWhat);
  return result;
}

function pqPrimeLeemon(what) {
  var minBits = 64;
  var minLen = Math.ceil(minBits / __WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["h" /* bpe */]) + 1;
  var it = 0;
  var q = void 0,
      lim = void 0;
  var a = new Array(minLen);
  var b = new Array(minLen);
  var c = new Array(minLen);
  var g = new Array(minLen);
  var z = new Array(minLen);
  var x = new Array(minLen);
  var y = new Array(minLen);

  for (var i = 0; i < 3; i++) {
    q = (nextRandomInt(128) & 15) + 17;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["i" /* copyInt_ */])(x, nextRandomInt(1000000000) + 1);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["j" /* copy_ */])(y, x);
    lim = 1 << i + 18;

    for (var j = 1; j < lim; j++) {
      ++it;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["j" /* copy_ */])(a, x);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["j" /* copy_ */])(b, x);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["i" /* copyInt_ */])(c, q);

      while (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["k" /* isZero */])(b)) {
        if (b[0] & 1) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["e" /* add_ */])(c, a);
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["l" /* greater */])(c, what)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["m" /* sub_ */])(c, what);
          }
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["e" /* add_ */])(a, a);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["l" /* greater */])(a, what)) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["m" /* sub_ */])(a, what);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["f" /* rightShift_ */])(b, 1);
      }

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["j" /* copy_ */])(x, c);
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["l" /* greater */])(x, y)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["j" /* copy_ */])(z, x);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["m" /* sub_ */])(z, y);
      } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["j" /* copy_ */])(z, y);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["m" /* sub_ */])(z, x);
      }
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["n" /* eGCD_ */])(z, what, g, a, b);
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["o" /* equalsInt */])(g, 1)) {
        break;
      }
      if ((j & j - 1) === 0) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["j" /* copy_ */])(y, x);
      }
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["l" /* greater */])(g, __WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["p" /* one */])) {
      break;
    }
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["c" /* divide_ */])(what, g, x, y);

  var [P, Q] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["l" /* greater */])(g, x) ? [x, g] : [g, x];

  // console.log(dT(), 'done', bigInt2str(what, 10), bigInt2str(P, 10), bigInt2str(Q, 10))

  return [bytesFromLeemonBigInt(P), bytesFromLeemonBigInt(Q), it];
}

function bytesModPow(x, y, m) {
  var xBigInt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(bytesToHex(x), 16);
  var yBigInt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(bytesToHex(y), 16);
  var mBigInt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["b" /* str2bigInt */])(bytesToHex(m), 16);
  var resBigInt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["g" /* powMod */])(xBigInt, yBigInt, mBigInt);

  return bytesFromHex(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__vendor_leemon__["a" /* bigInt2str */])(resBigInt, 16));
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setLogger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debug__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_trim__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_trim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_trim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_map__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda_src_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_chain__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_chain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda_src_chain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_pipe__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ramda_src_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ramda_src_split__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ramda_src_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ramda_src_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ramda_src_both__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ramda_src_both___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ramda_src_both__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ramda_src_is__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ramda_src_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ramda_src_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ramda_src_when__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ramda_src_when___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ramda_src_when__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ramda_src_take__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ramda_src_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ramda_src_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ramda_src_reject__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ramda_src_reject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ramda_src_reject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ramda_src_isEmpty__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ramda_src_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ramda_src_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ramda_src_join__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ramda_src_join___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ramda_src_join__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ramda_src_unapply__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ramda_src_unapply___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ramda_src_unapply__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ramda_src_unnest__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ramda_src_unnest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ramda_src_unnest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ramda_src_tail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ramda_src_tail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ramda_src_tail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dtime__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__smart_timeout__ = __webpack_require__(7);


// import memoize from 'memoizee'






















var tagNormalize = e => `[${e}]`;

var arrify = __WEBPACK_IMPORTED_MODULE_13_ramda_src_unapply___default()(__WEBPACK_IMPORTED_MODULE_14_ramda_src_unnest___default.a);

var fullNormalize = __WEBPACK_IMPORTED_MODULE_4_ramda_src_pipe___default()(arrify, __WEBPACK_IMPORTED_MODULE_3_ramda_src_chain___default()(__WEBPACK_IMPORTED_MODULE_5_ramda_src_split___default()(',')), __WEBPACK_IMPORTED_MODULE_2_ramda_src_map___default()(__WEBPACK_IMPORTED_MODULE_1_ramda_src_trim___default.a), __WEBPACK_IMPORTED_MODULE_10_ramda_src_reject___default()(__WEBPACK_IMPORTED_MODULE_11_ramda_src_isEmpty___default.a), __WEBPACK_IMPORTED_MODULE_2_ramda_src_map___default()(tagNormalize), __WEBPACK_IMPORTED_MODULE_12_ramda_src_join___default()(''));

var stringNormalize = __WEBPACK_IMPORTED_MODULE_8_ramda_src_when___default()(__WEBPACK_IMPORTED_MODULE_6_ramda_src_both___default()(__WEBPACK_IMPORTED_MODULE_7_ramda_src_is___default()(String), e => e.length > 50), __WEBPACK_IMPORTED_MODULE_9_ramda_src_take___default()(150));
// const isSimple = either(
//   is(String),
//   is(Number)
// )

// const prettify = unless(
//   isSimple,
//   pretty
// )

var genericLogger = __WEBPACK_IMPORTED_MODULE_0_debug___default()('telegram-mtproto');

class LogEvent {
  constructor(log, values) {
    this.log = log;
    this.values = values;
  }
  print() {
    this.log(...this.values);
  }
}

class Sheduler {
  constructor() {
    this.queue = [];
    this.buffer = [];

    this.add = (log, time, tagStr, values) => {
      var results = values.map(stringNormalize);
      var first = results[0] || '';
      var other = __WEBPACK_IMPORTED_MODULE_15_ramda_src_tail___default()(results);
      var firstLine = [tagStr, time, first].join('  ');
      this.buffer.push(new LogEvent(log, [firstLine, ...other]));
    };

    this.sheduleBuffer = () => {
      this.queue.push(this.buffer);
      this.buffer = [];
    };

    this.print = () => {
      for (var _iterator = this.queue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var buffer = _ref;

        for (var _iterator2 = buffer, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var logEvent = _ref2;

          logEvent.print();
        }
      }this.queue = [];
    };

    setInterval(this.sheduleBuffer, 50);
    setInterval(this.print, 300);
  }
}

var sheduler = new Sheduler();

var Logger = (moduleName, ...rest) => {
  var fullModule = arrify(moduleName, ...rest);
  fullModule.unshift('telegram-mtproto');
  var fullname = fullModule.join(':');
  var debug = __WEBPACK_IMPORTED_MODULE_0_debug___default()(fullname);
  var logger = tags => {
    var tagStr = fullNormalize(tags);
    return (...objects) => {
      var time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__dtime__["a" /* default */])();
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__smart_timeout__["b" /* immediate */])(sheduler.add, debug, time, tagStr, objects);
    };
  };
  return logger;
};

var setLogger = customLogger => {
  __WEBPACK_IMPORTED_MODULE_0_debug___default.a.log = customLogger;
};

/* harmony default export */ __webpack_exports__["b"] = (Logger);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(125);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * CryptoJS core components.
 */
var CryptoJS = CryptoJS || (function (Math, undefined) {
    /**
     * CryptoJS namespace.
     */
    var C = {};

    /**
     * Library namespace.
     */
    var C_lib = C.lib = {};

    /**
     * Base object for prototypal inheritance.
     */
    var Base = C_lib.Base = (function () {
        function F() {}

        return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function (overrides) {
                // Spawn
                F.prototype = this;
                var subtype = new F();

                // Augment
                if (overrides) {
                    subtype.mixIn(overrides);
                }

                // Create default initializer
                if (!subtype.hasOwnProperty('init')) {
                    subtype.init = function () {
                        subtype.$super.init.apply(this, arguments);
                    };
                }

                // Initializer's prototype is the subtype object
                subtype.init.prototype = subtype;

                // Reference supertype
                subtype.$super = this;

                return subtype;
            },

            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function () {
                var instance = this.extend();
                instance.init.apply(instance, arguments);

                return instance;
            },

            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function () {
            },

            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function (properties) {
                for (var propertyName in properties) {
                    if (properties.hasOwnProperty(propertyName)) {
                        this[propertyName] = properties[propertyName];
                    }
                }

                // IE won't copy toString using the loop above
                if (properties.hasOwnProperty('toString')) {
                    this.toString = properties.toString;
                }
            },

            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function () {
                return this.init.prototype.extend(this);
            }
        };
    }());

    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var WordArray = C_lib.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function (words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
            } else {
                this.sigBytes = words.length * 4;
            }
        },

        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function (encoder) {
            return (encoder || Hex).stringify(this);
        },

        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function (wordArray) {
            // Shortcuts
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;

            // Clamp excess bits
            this.clamp();

            // Concat
            if (thisSigBytes % 4) {
                // Copy one byte at a time
                for (var i = 0; i < thatSigBytes; i++) {
                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                }
            } else if (thatWords.length > 0xffff) {
                // Copy one word at a time
                for (var i = 0; i < thatSigBytes; i += 4) {
                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                }
            } else {
                // Copy all words at once
                thisWords.push.apply(thisWords, thatWords);
            }
            this.sigBytes += thatSigBytes;

            // Chainable
            return this;
        },

        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function () {
            // Shortcuts
            var words = this.words;
            var sigBytes = this.sigBytes;

            // Clamp
            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
            words.length = Math.ceil(sigBytes / 4);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);

            return clone;
        },

        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function (nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
                words.push((Math.random() * 0x100000000) | 0);
            }

            return new WordArray.init(words, nBytes);
        }
    });

    /**
     * Encoder namespace.
     */
    var C_enc = C.enc = {};

    /**
     * Hex encoding strategy.
     */
    var Hex = C_enc.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 0x0f).toString(16));
            }

            return hexChars.join('');
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function (hexStr) {
            // Shortcut
            var hexStrLength = hexStr.length;

            // Convert
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
            }

            return new WordArray.init(words, hexStrLength / 2);
        }
    };

    /**
     * Latin1 encoding strategy.
     */
    var Latin1 = C_enc.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                latin1Chars.push(String.fromCharCode(bite));
            }

            return latin1Chars.join('');
        },

        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function (latin1Str) {
            // Shortcut
            var latin1StrLength = latin1Str.length;

            // Convert
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
            }

            return new WordArray.init(words, latin1StrLength);
        }
    };

    /**
     * UTF-8 encoding strategy.
     */
    var Utf8 = C_enc.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function (wordArray) {
            try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
                throw new Error('Malformed UTF-8 data');
            }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function (utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
    };

    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function () {
            // Initial values
            this._data = new WordArray.init();
            this._nDataBytes = 0;
        },

        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function (data) {
            // Convert string to WordArray, else assume WordArray already
            if (typeof data == 'string') {
                data = Utf8.parse(data);
            }

            // Append
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
        },

        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function (doFlush) {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;

            // Count blocks ready
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
                // Round up to include partial blocks
                nBlocksReady = Math.ceil(nBlocksReady);
            } else {
                // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }

            // Count words ready
            var nWordsReady = nBlocksReady * blockSize;

            // Count bytes ready
            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

            // Process blocks
            if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                    // Perform concrete-algorithm logic
                    this._doProcessBlock(dataWords, offset);
                }

                // Remove processed words
                var processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
            }

            // Return processed words
            return new WordArray.init(processedWords, nBytesReady);
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();

            return clone;
        },

        _minBufferSize: 0
    });

    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         */
        cfg: Base.extend(),

        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function (cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Set initial values
            this.reset();
        },

        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function () {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-hasher logic
            this._doReset();
        },

        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function (messageUpdate) {
            // Append
            this._append(messageUpdate);

            // Update the hash
            this._process();

            // Chainable
            return this;
        },

        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function (messageUpdate) {
            // Final message update
            if (messageUpdate) {
                this._append(messageUpdate);
            }

            // Perform concrete-hasher logic
            var hash = this._doFinalize();

            return hash;
        },

        blockSize: 512/32,

        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function (hasher) {
            return function (message, cfg) {
                return new hasher.init(cfg).finalize(message);
            };
        },

        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function (hasher) {
            return function (message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
        }
    });

    /**
     * Algorithm namespace.
     */
    var C_algo = C.algo = {};

    return C;
}(Math));

exports.CryptoJS = CryptoJS;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsNow", function() { return tsNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyServerTime", function() { return applyServerTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateID", function() { return generateMessageID; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_detect_node__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_detect_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_detect_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_log__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_dtime__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dTime", function() { return __WEBPACK_IMPORTED_MODULE_4__util_dtime__["b"]; });







var log = __WEBPACK_IMPORTED_MODULE_3__util_log__["b" /* default */]`time-manager`;

var tsNow = seconds => {
  var t = +new Date();
  //eslint-disable-next-line
  if (!__WEBPACK_IMPORTED_MODULE_0_detect_node___default.a) t += window.tsOffset || 0;
  return seconds ? Math.floor(t / 1000) : t;
};



var lastMessageID = [0, 0];
var timerOffset = 0;

var offset = __WEBPACK_IMPORTED_MODULE_1__store__["b" /* TimeOffset */].get();
if (offset) timerOffset = offset;

var generateMessageID = () => {
  var timeTicks = tsNow(),
      timeSec = Math.floor(timeTicks / 1000) + timerOffset,
      timeMSec = timeTicks % 1000,
      random = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["l" /* nextRandomInt */])(0xFFFF);

  var messageID = [timeSec, timeMSec << 21 | random << 3 | 4];
  if (lastMessageID[0] > messageID[0] || lastMessageID[0] == messageID[0] && lastMessageID[1] >= messageID[1]) {
    messageID = [lastMessageID[0], lastMessageID[1] + 4];
  }

  lastMessageID = messageID;

  // console.log('generated msg id', messageID, timerOffset)

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["p" /* lshift32 */])(messageID[0], messageID[1]);
};

var applyServerTime = (serverTime, localTime) => {
  var newTimeOffset = serverTime - Math.floor((localTime || tsNow()) / 1000);
  var changed = Math.abs(timerOffset - newTimeOffset) > 10;
  __WEBPACK_IMPORTED_MODULE_1__store__["b" /* TimeOffset */].set(newTimeOffset);

  lastMessageID = [0, 0];
  timerOffset = newTimeOffset;
  log('Apply server time')(serverTime, localTime, newTimeOffset, changed);

  return changed;
};



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
  copy: copy,
  checkDataType: checkDataType,
  checkDataTypes: checkDataTypes,
  coerceToTypes: coerceToTypes,
  toHash: toHash,
  getProperty: getProperty,
  escapeQuotes: escapeQuotes,
  ucs2length: __webpack_require__(62),
  varOccurences: varOccurences,
  varReplace: varReplace,
  cleanUpCode: cleanUpCode,
  cleanUpVarErrors: cleanUpVarErrors,
  schemaHasRules: schemaHasRules,
  schemaHasRulesExcept: schemaHasRulesExcept,
  stableStringify: __webpack_require__(18),
  toQuotedString: toQuotedString,
  getPathExpr: getPathExpr,
  getPath: getPath,
  getData: getData,
  unescapeFragment: unescapeFragment,
  escapeFragment: escapeFragment,
  escapeJsonPointer: escapeJsonPointer
};


function copy(o, to) {
  to = to || {};
  for (var key in o) to[key] = o[key];
  return to;
}


function checkDataType(dataType, data, negate) {
  var EQUAL = negate ? ' !== ' : ' === '
    , AND = negate ? ' || ' : ' && '
    , OK = negate ? '!' : ''
    , NOT = negate ? '' : '!';
  switch (dataType) {
    case 'null': return data + EQUAL + 'null';
    case 'array': return OK + 'Array.isArray(' + data + ')';
    case 'object': return '(' + OK + data + AND +
                          'typeof ' + data + EQUAL + '"object"' + AND +
                          NOT + 'Array.isArray(' + data + '))';
    case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
                           NOT + '(' + data + ' % 1)' +
                           AND + data + EQUAL + data + ')';
    default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
  }
}


function checkDataTypes(dataTypes, data) {
  switch (dataTypes.length) {
    case 1: return checkDataType(dataTypes[0], data, true);
    default:
      var code = '';
      var types = toHash(dataTypes);
      if (types.array && types.object) {
        code = types.null ? '(': '(!' + data + ' || ';
        code += 'typeof ' + data + ' !== "object")';
        delete types.null;
        delete types.array;
        delete types.object;
      }
      if (types.number) delete types.integer;
      for (var t in types)
        code += (code ? ' && ' : '' ) + checkDataType(t, data, true);

      return code;
  }
}


var COERCE_TO_TYPES = toHash([ 'string', 'number', 'integer', 'boolean', 'null' ]);
function coerceToTypes(optionCoerceTypes, dataTypes) {
  if (Array.isArray(dataTypes)) {
    var types = [];
    for (var i=0; i<dataTypes.length; i++) {
      var t = dataTypes[i];
      if (COERCE_TO_TYPES[t]) types[types.length] = t;
      else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
    }
    if (types.length) return types;
  } else if (COERCE_TO_TYPES[dataTypes]) {
    return [dataTypes];
  } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
    return ['array'];
  }
}


function toHash(arr) {
  var hash = {};
  for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
  return hash;
}


var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var SINGLE_QUOTE = /'|\\/g;
function getProperty(key) {
  return typeof key == 'number'
          ? '[' + key + ']'
          : IDENTIFIER.test(key)
            ? '.' + key
            : "['" + escapeQuotes(key) + "']";
}


function escapeQuotes(str) {
  return str.replace(SINGLE_QUOTE, '\\$&')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\f/g, '\\f')
            .replace(/\t/g, '\\t');
}


function varOccurences(str, dataVar) {
  dataVar += '[^0-9]';
  var matches = str.match(new RegExp(dataVar, 'g'));
  return matches ? matches.length : 0;
}


function varReplace(str, dataVar, expr) {
  dataVar += '([^0-9])';
  expr = expr.replace(/\$/g, '$$$$');
  return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
}


var EMPTY_ELSE = /else\s*{\s*}/g
  , EMPTY_IF_NO_ELSE = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g
  , EMPTY_IF_WITH_ELSE = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
function cleanUpCode(out) {
  return out.replace(EMPTY_ELSE, '')
            .replace(EMPTY_IF_NO_ELSE, '')
            .replace(EMPTY_IF_WITH_ELSE, 'if (!($1))');
}


var ERRORS_REGEXP = /[^v\.]errors/g
  , REMOVE_ERRORS = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g
  , REMOVE_ERRORS_ASYNC = /var errors = 0;|var vErrors = null;/g
  , RETURN_VALID = 'return errors === 0;'
  , RETURN_TRUE = 'validate.errors = null; return true;'
  , RETURN_ASYNC = /if \(errors === 0\) return true;\s*else throw new ValidationError\(vErrors\);/
  , RETURN_TRUE_ASYNC = 'return true;';

function cleanUpVarErrors(out, async) {
  var matches = out.match(ERRORS_REGEXP);
  if (!matches || matches.length !== 2) return out;
  return async
          ? out.replace(REMOVE_ERRORS_ASYNC, '')
               .replace(RETURN_ASYNC, RETURN_TRUE_ASYNC)
          : out.replace(REMOVE_ERRORS, '')
               .replace(RETURN_VALID, RETURN_TRUE);
}


function schemaHasRules(schema, rules) {
  for (var key in schema) if (rules[key]) return true;
}


function schemaHasRulesExcept(schema, rules, exceptKeyword) {
  for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
}


function toQuotedString(str) {
  return '\'' + escapeQuotes(str) + '\'';
}


function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
  var path = jsonPointers // false by default
              ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
              : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
  return joinPaths(currentPath, path);
}


function getPath(currentPath, prop, jsonPointers) {
  var path = jsonPointers // false by default
              ? toQuotedString('/' + escapeJsonPointer(prop))
              : toQuotedString(getProperty(prop));
  return joinPaths(currentPath, path);
}


var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function getData($data, lvl, paths) {
  var up, jsonPointer, data, matches;
  if ($data === '') return 'rootData';
  if ($data[0] == '/') {
    if (!JSON_POINTER.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
    jsonPointer = $data;
    data = 'rootData';
  } else {
    matches = $data.match(RELATIVE_JSON_POINTER);
    if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
    up = +matches[1];
    jsonPointer = matches[2];
    if (jsonPointer == '#') {
      if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
      return paths[lvl - up];
    }

    if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
    data = 'data' + ((lvl - up) || '');
    if (!jsonPointer) return data;
  }

  var expr = data;
  var segments = jsonPointer.split('/');
  for (var i=0; i<segments.length; i++) {
    var segment = segments[i];
    if (segment) {
      data += getProperty(unescapeJsonPointer(segment));
      expr += ' && ' + data;
    }
  }
  return expr;
}


function joinPaths (a, b) {
  if (a == '""') return b;
  return (a + ' + ' + b).replace(/' \+ '/g, '');
}


function unescapeFragment(str) {
  return unescapeJsonPointer(decodeURIComponent(str));
}


function escapeFragment(str) {
  return encodeURIComponent(escapeJsonPointer(str));
}


function escapeJsonPointer(str) {
  return str.replace(/~/g, '~0').replace(/\//g, '~1');
}


function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export smartTimeout */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return immediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return delayedCall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);


var cancelToken = Symbol('cancel token');

var timeoutRefs = new WeakSet();

var pause = delay => new __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a(r => setTimeout(r, delay));

var smartTimeout = (fn, delay = 0, ...args) => {
  var newToken = Symbol('cancel id');
  var checkRun = () => {
    if (timeoutRefs.has(newToken)) {
      timeoutRefs.delete(newToken);
      return fn(...args);
    } else return false;
  };
  var promise = pause(delay).then(checkRun);
  promise[cancelToken] = newToken;
  return promise;
};

smartTimeout.cancel = promise => {
  if (!promise || !promise[cancelToken]) return false;
  var token = promise[cancelToken];
  return timeoutRefs.has(token) ? timeoutRefs.delete(token) : false;
};

var immediate = (fn, ...args) => __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve().then(() => fn(...args));

var delayedCall = (fn, delay = 0, ...args) => pause(delay).then(() => fn(...args));

smartTimeout.immediate = immediate;
smartTimeout.promise = delayedCall;

/* harmony default export */ __webpack_exports__["a"] = (smartTimeout);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(203);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class MTError extends Error {
  static getMessage(code, type, message) {
    return `MT[${code}] ${type}: ${message}`;
  }

  constructor(code, type, message) {
    var fullMessage = MTError.getMessage(code, type, message);
    super(fullMessage);
    this.code = code;
    this.type = type;
  }
}
/* unused harmony export MTError */


class ErrorBadResponse extends MTError {
  constructor(url, originalError = null) {
    super(406, 'NETWORK_BAD_RESPONSE', url);
    if (originalError) this.originalError = originalError;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ErrorBadResponse;


class ErrorBadRequest extends MTError {
  constructor(url, originalError = null) {
    super(406, 'NETWORK_BAD_REQUEST', url);
    if (originalError) this.originalError = originalError;
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ErrorBadRequest;


class ErrorNotFound extends MTError {
  constructor(err) {
    super(404, 'REQUEST_FAILED', err.config.url);
    // this.originalError = err
  }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = ErrorNotFound;


class TypeBufferIntError extends MTError {
  static getTypeBufferMessage(ctx) {
    var offset = ctx.offset;
    var length = ctx.intView.length * 4;
    return `Can not get next int: offset ${offset} length: ${length}`;
  }

  constructor(ctx) {
    var message = TypeBufferIntError.getTypeBufferMessage(ctx);
    super(800, 'NO_NEXT_INT', message);
    this.typeBuffer = ctx;
  }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = TypeBufferIntError;


class AuthKeyError extends MTError {
  constructor() {
    super(401, 'AUTH_KEY_EMPTY', '');
  }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = AuthKeyError;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export blueDefer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);

/**
 * Defered promise like in Q and $q
 *
 * @returns {{ resolve: (res: any) => void, reject: (res: any) => void, promise: Promise<{}> }}
 */
var blueDefer = () => {
  var resolve = void 0,
      reject = void 0;
  var promise = new __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a((rs, rj) => {
    resolve = rs;
    reject = rj;
  });
  return {
    resolve,
    reject,
    promise
  };
};

/* harmony default export */ __webpack_exports__["a"] = (blueDefer);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(98);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TL */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_is__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda_src_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_has__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mediator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_buffer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_log__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__mediator__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__mediator__["b"]; });
/* unused harmony reexport TypeWriter */











var debug = __WEBPACK_IMPORTED_MODULE_6__util_log__["b" /* default */]`tl`;

var PACKED = 0x3072cfa1;

var apiLayer = void 0;
var mtLayer = void 0;

class Serialization {
  constructor({ mtproto, startMaxLength }, api, mtApi) {
    this.writer = new __WEBPACK_IMPORTED_MODULE_5__type_buffer__["a" /* TypeWriter */]();

    this.api = api;
    this.mtApi = mtApi;

    this.writer.maxLength = startMaxLength;

    this.writer.reset();
    this.mtproto = mtproto;
    if (!apiLayer) apiLayer = new __WEBPACK_IMPORTED_MODULE_4__layout__["a" /* default */](api);
    if (!mtLayer) mtLayer = new __WEBPACK_IMPORTED_MODULE_4__layout__["a" /* default */](mtApi);
  }

  getBytes(typed) {
    if (typed) return this.writer.getBytesTyped();else return this.writer.getBytesPlain();
  }

  storeMethod(methodName, params) {
    var layer = this.mtproto ? mtLayer : apiLayer;
    var pred = layer.funcs.get(methodName);
    if (!pred) throw new Error(`No method name ${methodName} found`);

    __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].int(this.writer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["m" /* intToUint */])(`${pred.id}`), `${methodName}[id]`);
    if (pred.hasFlags) {
      var flags = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__layout__["b" /* getFlags */])(pred)(params);
      this.storeObject(flags, '#', `f ${methodName} #flags ${flags}`);
    }
    for (var _iterator = pred.params, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var param = _ref;

      var paramName = param.name;
      var typeClass = param.typeClass;
      var fieldObj = void 0;
      if (!__WEBPACK_IMPORTED_MODULE_1_ramda_src_has___default()(paramName, params)) {
        if (param.isFlag) continue;else if (layer.typeDefaults.has(typeClass)) fieldObj = layer.typeDefaults.get(typeClass);else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__layout__["c" /* isSimpleType */])(typeClass)) {
          switch (typeClass) {
            case 'int':
              fieldObj = 0;break;
            // case 'long': fieldObj = 0; break
            case 'string':
              fieldObj = ' ';break;
            // case 'double': fieldObj = 0; break
            case 'true':
              fieldObj = true;break;
            // case 'bytes': fieldObj = [0]; break
          }
        } else throw new Error(`Method ${methodName} did not receive required argument ${paramName}`);
      } else {
        fieldObj = params[paramName];
      }
      if (param.isVector) {
        if (!Array.isArray(fieldObj)) throw new TypeError(`Vector argument ${paramName} in ${methodName} required Array,` +
        //$FlowIssue
        ` got ${fieldObj} ${typeof fieldObj}`);
        __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].int(this.writer, 0x1cb5c415, `${paramName}[id]`);
        __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].int(this.writer, fieldObj.length, `${paramName}[count]`);
        for (var _iterator2 = fieldObj.entries(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var [i, elem] = _ref2;

          this.storeObject(elem, param.typeClass, `${paramName}[${i}]`);
        }
      } else this.storeObject(fieldObj, param.typeClass, `f ${methodName}(${paramName})`);
    }
    /*let condType
    let fieldBit
    for (const param of methodData.params) {
      let type = param.type
      if (type.indexOf('?') !== -1) {
        condType = type.split('?')
        fieldBit = condType[0].split('.')
        if (!(params[fieldBit[0]] & 1 << fieldBit[1])) {
          continue
        }
        type = condType[1]
      }
      const paramName = param.name
      const stored = params[paramName]
      if (!stored)
        stored = this.emptyOfType(type, schema)
      if (!stored)
        throw new Error(`Method ${methodName}.`+
          ` No value of field ${ param.name } recieved and no Empty of type ${ param.type }`)
      this.storeObject(stored, type, `f ${methodName}(${paramName})`)
    }*/

    return pred.returns;
  }
  /*emptyOfType(ofType, schema: TLSchema) {
    const resultConstruct = schema.constructors.find(
      ({ type, predicate }: TLConstruct) =>
        type === ofType &&
        predicate.indexOf('Empty') !== -1)
    return resultConstruct
      ? { _: resultConstruct.predicate }
      : null
  }*/
  storeObject(obj, type, field) {
    switch (type) {
      case '#':
      case 'int':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].int(this.writer, obj, field);
      case 'long':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].long(this.writer, obj, field);
      case 'int128':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].intBytes(this.writer, obj, 128, field);
      case 'int256':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].intBytes(this.writer, obj, 256, field);
      case 'int512':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].intBytes(this.writer, obj, 512, field);
      case 'string':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].bytes(this.writer, obj, `${field}:string`);
      case 'bytes':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].bytes(this.writer, obj, field);
      case 'double':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].double(this.writer, obj, field);
      case 'Bool':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].bool(this.writer, obj, field);
      case 'true':
        return;
    }

    if (Array.isArray(obj)) {
      if (type.substr(0, 6) == 'Vector') __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].int(this.writer, 0x1cb5c415, `${field}[id]`);else if (type.substr(0, 6) != 'vector') {
        throw new Error(`Invalid vector type ${type}`);
      }
      var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
      __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].int(this.writer, obj.length, `${field}[count]`);
      for (var i = 0; i < obj.length; i++) {
        this.storeObject(obj[i], itemType, `${field}[${i}]`);
      }
      return true;
    } else if (type.substr(0, 6).toLowerCase() == 'vector') {
      throw new Error('Invalid vector object');
    }

    if (!__WEBPACK_IMPORTED_MODULE_0_ramda_src_is___default()(Object, obj)) throw new Error(`Invalid object for type ${type}`);

    var schema = selectSchema(this.mtproto, this.api, this.mtApi);

    var predicate = obj['_'];
    var isBare = false;
    var constructorData = false;
    isBare = type.charAt(0) == '%';
    if (isBare) type = type.substr(1);

    for (var _iterator3 = schema.constructors, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var tlConst = _ref3;

      if (tlConst.predicate == predicate) {
        constructorData = tlConst;
        break;
      }
    }

    if (!constructorData) throw new Error(`No predicate ${predicate} found`);

    if (predicate == type) isBare = true;

    if (!isBare) __WEBPACK_IMPORTED_MODULE_3__mediator__["a" /* WriteMediator */].int(this.writer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["m" /* intToUint */])(constructorData.id), `${field}.${predicate}[id]`);

    var condType = void 0;
    var fieldBit = void 0;

    for (var _iterator4 = constructorData.params, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var param = _ref4;

      type = param.type;
      if (type.indexOf('?') !== -1) {
        condType = type.split('?');
        fieldBit = condType[0].split('.');
        if (!(obj[fieldBit[0]] & 1 << fieldBit[1])) {
          continue;
        }
        type = condType[1];
      }

      this.storeObject(obj[param.name], type, `${field}.${predicate}.${param.name}`);
    }

    return constructorData.type;
  }

}
/* unused harmony export Serialization */


class Deserialization {
  constructor(buffer, { mtproto, override }, api, mtApi) {
    this.readInt = field => {
      // log('int')(field, i.toString(16), i)
      return __WEBPACK_IMPORTED_MODULE_3__mediator__["b" /* ReadMediator */].int(this.typeBuffer, field);
    };

    this.api = api;
    this.mtApi = mtApi;
    this.override = override;

    this.typeBuffer = new __WEBPACK_IMPORTED_MODULE_5__type_buffer__["b" /* TypeBuffer */](buffer);
    this.mtproto = mtproto;
  }

  fetchInt(field = '') {
    return this.readInt(`${field}:int`);
  }

  fetchBool(field = '') {
    var i = this.readInt(`${field}:bool`);
    switch (i) {
      case 0x997275b5:
        return true;
      case 0xbc799737:
        return false;
      default:
        {
          this.typeBuffer.offset -= 4;
          return this.fetchObject('Object', field);
        }
    }
  }
  fetchIntBytes(bits, field = '') {
    if (bits % 32) throw new Error(`Invalid bits: ${bits}`);

    var len = bits / 8;

    var bytes = this.typeBuffer.next(len);

    debug(`int bytes`)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["f" /* bytesToHex */])(bytes), `${field}:int${bits}`);

    return bytes;
  }

  fetchRawBytes(len, field = '') {
    if (len === false) {
      len = this.readInt(`${field}_length`);
      if (len > this.typeBuffer.byteView.byteLength) throw new Error(`Invalid raw bytes length: ${len}, buffer len: ${this.typeBuffer.byteView.byteLength}`);
    }
    var bytes = this.typeBuffer.next(len);
    debug(`raw bytes`)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["f" /* bytesToHex */])(bytes), field);

    return bytes;
  }

  fetchPacked(type, field = '') {
    var compressed = __WEBPACK_IMPORTED_MODULE_3__mediator__["b" /* ReadMediator */].bytes(this.typeBuffer, `${field}[packed_string]`);
    var uncompressed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["n" /* gzipUncompress */])(compressed);
    var buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["h" /* bytesToArrayBuffer */])(uncompressed);
    var newDeserializer = new Deserialization(buffer, {
      mtproto: this.mtproto,
      override: this.override
    }, this.api, this.mtApi);

    return newDeserializer.fetchObject(type, field);
  }

  fetchVector(type, field = '') {
    var typeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__layout__["d" /* getTypeProps */])(type);
    if (type.charAt(0) === 'V') {
      var _constructor = this.readInt(`${field}[id]`);
      var constructorCmp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["j" /* uintToInt */])(_constructor);

      if (constructorCmp === PACKED) return this.fetchPacked(type, field);
      if (constructorCmp !== 0x1cb5c415) throw new Error(`Invalid vector constructor ${_constructor}`);
    }
    var len = this.readInt(`${field}[count]`);
    var result = [];
    if (len > 0) {
      var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
      for (var i = 0; i < len; i++) {
        result.push(this.fetchObject(itemType, `${field}[${i}]`));
      }
    }

    return result;
  }

  fetchObject(type, field = '') {
    switch (type) {
      case '#':
      case 'int':
        return this.fetchInt(field);
      case 'long':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["b" /* ReadMediator */].long(this.typeBuffer, field);
      case 'int128':
        return this.fetchIntBytes(128, field);
      case 'int256':
        return this.fetchIntBytes(256, field);
      case 'int512':
        return this.fetchIntBytes(512, field);
      case 'string':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["b" /* ReadMediator */].string(this.typeBuffer, field);
      case 'bytes':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["b" /* ReadMediator */].bytes(this.typeBuffer, field);
      case 'double':
        return __WEBPACK_IMPORTED_MODULE_3__mediator__["b" /* ReadMediator */].double(this.typeBuffer, field);
      case 'Bool':
        return this.fetchBool(field);
      case 'true':
        return true;
    }
    var fallback = void 0;
    field = field || type || 'Object';

    // const layer = this.mtproto
    //   ? mtLayer
    //   : apiLayer
    var typeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__layout__["d" /* getTypeProps */])(type);
    // layer.typesById

    if (typeProps.isVector) return this.fetchVector(type, field);

    var schema = selectSchema(this.mtproto, this.api, this.mtApi);
    var predicate = false;
    var constructorData = false;

    if (typeProps.isBare) constructorData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__type_buffer__["c" /* getNakedType */])(type, schema);else {
      var _constructor2 = this.readInt(`${field}[id]`);
      var constructorCmp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["j" /* uintToInt */])(_constructor2);

      if (constructorCmp === PACKED) return this.fetchPacked(type, field);

      var index = schema.constructorsIndex;
      if (!index) {
        schema.constructorsIndex = index = {};
        for (var _i5 = 0; _i5 < schema.constructors.length; _i5++) {
          index[schema.constructors[_i5].id] = _i5;
        }
      }
      var i = index[constructorCmp];
      if (i) constructorData = schema.constructors[i];

      fallback = false;
      if (!constructorData && this.mtproto) {
        var schemaFallback = this.api;
        var finded = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__type_buffer__["d" /* getTypeConstruct */])(constructorCmp, schemaFallback);
        if (finded) {
          constructorData = finded;
          delete this.mtproto;
          fallback = true;
        }
      }
      if (!constructorData) {
        throw new Error(`Constructor not found: ${_constructor2} ${this.fetchInt()} ${this.fetchInt()}`);
      }
    }

    predicate = constructorData.predicate;

    var result = { '_': predicate };
    var overrideKey = (this.mtproto ? 'mt_' : '') + predicate;

    if (this.override[overrideKey]) {
      this.override[overrideKey].apply(this, [result, `${field}[${predicate}]`]);
    } else {
      for (var _iterator5 = constructorData.params, _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i6 >= _iterator5.length) break;
          _ref5 = _iterator5[_i6++];
        } else {
          _i6 = _iterator5.next();
          if (_i6.done) break;
          _ref5 = _i6.value;
        }

        var param = _ref5;

        type = param.type;
        // if (type === '#' && isNil(result.pFlags))
        //   result.pFlags = {}
        if (type.indexOf('?') !== -1) {
          var condType = type.split('?');
          var fieldBit = condType[0].split('.');
          if (!(result[fieldBit[0]] & 1 << fieldBit[1])) continue;
          type = condType[1];
        }
        var paramName = param.name;
        var value = this.fetchObject(type, `${field}[${predicate}][${paramName}]`);

        result[paramName] = value;
      }
    }

    if (fallback) this.mtproto = true;

    return result;
  }

  getOffset() {
    return this.typeBuffer.offset;
  }

  fetchEnd() {
    if (!this.typeBuffer.isEnd()) throw new Error('Fetch end with non-empty buffer');
    return true;
  }

}
/* unused harmony export Deserialization */


var selectSchema = (mtproto, api, mtApi) => mtproto ? mtApi : api;

var TL = (api, mtApi) => ({
  Serialization: ({ mtproto = false, startMaxLength = 2048 /* 2Kb */ } = {}) => new Serialization({ mtproto, startMaxLength }, api, mtApi),
  Deserialization: (buffer, { mtproto = false, override = {} } = {}) => new Deserialization(buffer, { mtproto, override }, api, mtApi)
});



/* harmony default export */ __webpack_exports__["a"] = (TL);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(61);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoWorker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_when__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_when___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda_src_when__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_is__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_identity__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_identity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda_src_identity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_has__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda_src_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_both__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_both___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ramda_src_both__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_detect_node__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_detect_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_detect_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_defer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_smart_timeout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bin__ = __webpack_require__(1);











var convertIfArray = __WEBPACK_IMPORTED_MODULE_0_ramda_src_when___default()(__WEBPACK_IMPORTED_MODULE_1_ramda_src_is___default()(Array), __WEBPACK_IMPORTED_MODULE_8__bin__["b" /* convertToUint8Array */]);
var webWorker = !__WEBPACK_IMPORTED_MODULE_5_detect_node___default.a;
var taskID = 0;
var awaiting = {};
var webCrypto = __WEBPACK_IMPORTED_MODULE_5_detect_node___default.a ? false
//eslint-disable-next-line
: window.crypto.subtle || window.crypto.webkitSubtle //TODO remove browser depends
//eslint-disable-next-line
|| window.msCrypto && window.msCrypto.subtle;
var useWebCrypto = webCrypto && !!webCrypto.digest;
var useSha1Crypto = useWebCrypto;
var useSha256Crypto = useWebCrypto;
var finalizeTask = (taskID, result) => {
  var deferred = awaiting[taskID];
  if (deferred) {
    // console.log(rework_d_T(), 'CW done')
    deferred.resolve(result); //TODO Possibly, can be used as
    delete awaiting[taskID]; //
  } //    deferred = Promise.resolve()
}; //    deferred.resolve( result )

var isCryptoTask = __WEBPACK_IMPORTED_MODULE_4_ramda_src_both___default()(__WEBPACK_IMPORTED_MODULE_3_ramda_src_has___default()('taskID'), __WEBPACK_IMPORTED_MODULE_3_ramda_src_has___default()('result'));

//eslint-disable-next-line
var workerEnable = !__WEBPACK_IMPORTED_MODULE_5_detect_node___default.a && window.Worker;

function _ref(error) {
  console.error('CW error', error, error.stack);
  webWorker = false;
}

if (workerEnable) {
  var TmpWorker = __webpack_require__(122);
  var tmpWorker = new TmpWorker();
  // tmpWorker.onmessage = function(event) {
  //   console.info('CW tmpWorker.onmessage', event && event.data)
  // }
  tmpWorker.onmessage = e => {
    if (e.data === 'ready') {
      console.info('CW ready');
    } else if (!isCryptoTask(e.data)) {
      console.info('Not crypto task', e, e.data);
      return e;
    } else return webWorker ? finalizeTask(e.data.taskID, e.data.result) : webWorker = tmpWorker;
  };

  tmpWorker.onerror = _ref;
  tmpWorker.postMessage('b');
  webWorker = tmpWorker;
}

var performTaskWorker = (task, params, embed) => {
  // console.log(rework_d_T(), 'CW start', task)
  var deferred = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_defer__["a" /* default */])();

  awaiting[taskID] = deferred;

  params.task = task;
  params.taskID = taskID;(embed || webWorker).postMessage(params);

  taskID++;

  return deferred.promise;
};

function _ref2(digest) {
  return (
    // console.log(rework_d_T(), 'Native sha1 done')
    digest
  );
}

var sha1Hash = bytes => {
  function _ref3(e) {
    console.error('Crypto digest error', e);
    useSha1Crypto = false;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__bin__["r" /* sha1HashSync */])(bytes);
  }

  if (useSha1Crypto) {
    // We don't use buffer since typedArray.subarray(...).buffer gives the whole buffer and not sliced one.
    // webCrypto.digest supports typed array
    var bytesTyped = convertIfArray(bytes);
    // console.log(rework_d_T(), 'Native sha1 start')
    return webCrypto.digest({ name: 'SHA-1' }, bytesTyped).then(_ref2, _ref3);
  }
  return __WEBPACK_IMPORTED_MODULE_7__util_smart_timeout__["a" /* default */].immediate(__WEBPACK_IMPORTED_MODULE_8__bin__["r" /* sha1HashSync */], bytes);
};

var sha256Hash = bytes => {
  function _ref4(e) {
    console.error('Crypto digest error', e);
    useSha256Crypto = false;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__bin__["s" /* sha256HashSync */])(bytes);
  }

  if (useSha256Crypto) {
    var bytesTyped = convertIfArray(bytes);
    // console.log(rework_d_T(), 'Native sha1 start')
    return webCrypto.digest({ name: 'SHA-256' }, bytesTyped).then(__WEBPACK_IMPORTED_MODULE_2_ramda_src_identity___default.a
    // console.log(rework_d_T(), 'Native sha1 done')
    , _ref4);
  }
  return __WEBPACK_IMPORTED_MODULE_7__util_smart_timeout__["a" /* default */].immediate(__WEBPACK_IMPORTED_MODULE_8__bin__["s" /* sha256HashSync */], bytes);
};

var aesEncrypt = (bytes, keyBytes, ivBytes) => __WEBPACK_IMPORTED_MODULE_7__util_smart_timeout__["a" /* default */].immediate(() => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__bin__["c" /* convertToArrayBuffer */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__bin__["t" /* aesEncryptSync */])(bytes, keyBytes, ivBytes)));

var aesDecrypt = (encryptedBytes, keyBytes, ivBytes) => __WEBPACK_IMPORTED_MODULE_7__util_smart_timeout__["a" /* default */].immediate(() => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__bin__["c" /* convertToArrayBuffer */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__bin__["u" /* aesDecryptSync */])(encryptedBytes, keyBytes, ivBytes)));

var factorize = bytes => {
  bytes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__bin__["v" /* convertToByteArray */])(bytes);
  return webWorker ? performTaskWorker('factorize', { bytes }) : __WEBPACK_IMPORTED_MODULE_7__util_smart_timeout__["a" /* default */].immediate(__WEBPACK_IMPORTED_MODULE_8__bin__["w" /* pqPrimeFactorization */], bytes);
};

var modPow = (x, y, m) => webWorker ? performTaskWorker('mod-pow', {
  x,
  y,
  m
}) : __WEBPACK_IMPORTED_MODULE_7__util_smart_timeout__["a" /* default */].immediate(__WEBPACK_IMPORTED_MODULE_8__bin__["x" /* bytesModPow */], x, y, m);

var CryptoWorker = {
  sha1Hash,
  sha256Hash,
  aesEncrypt,
  aesDecrypt,
  factorize,
  modPow
};

/* harmony default export */ __webpack_exports__["b"] = (CryptoWorker);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_randombytes__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_randombytes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_randombytes__);


var getRandom = arr => {
  var ln = arr.length;
  var buf = __WEBPACK_IMPORTED_MODULE_0_randombytes___default()(ln);
  for (var i = 0; i < ln; i++) {
    arr[i] = buf[i];
  }return arr;
};

/* harmony default export */ __webpack_exports__["a"] = (getRandom);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNakedType; });
/* unused harmony export getPredicate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTypeConstruct; });
/* unused harmony export getString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_detect_node__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_detect_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_detect_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_log__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_smart_timeout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__(9);



var log = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_log__["b" /* default */])('tl', 'type-buffer');




// import { bigint, uintToInt, intToUint, bytesToHex,
//   gzipUncompress, bytesToArrayBuffer, longToInts, lshift32 } from '../bin'

function findType(val) {
  return val.type == this;
}

function findPred(val) {
  return val.predicate == this;
}

function findId(val) {
  return val.id == this;
}

var getNakedType = (type, schema) => {
  var checkType = type.substr(1);
  var result = schema.constructors.find(findType, checkType);
  if (!result) throw new Error(`Constructor not found for type: ${type}`);
  return result;
};

var getPredicate = (type, schema) => {
  var result = schema.constructors.find(findPred, type);
  if (!result) throw new Error(`Constructor not found for predicate: ${type}`);
  return result;
};

var getTypeConstruct = (construct, schema) => schema.constructors.find(findId, construct);

var getChar = e => String.fromCharCode(e);

var getString = (length, buffer) => {
  var bytes = buffer.next(length);

  var result = [...bytes].map(getChar).join('');
  buffer.addPadding();
  return result;
};

var countNewLength = (maxLength, need, offset) => {
  var e1 = maxLength * 2;
  var e2 = offset + need + 16;
  var max = Math.max(e1, e2) / 4;
  var rounded = Math.ceil(max) * 4;
  return rounded;
};

var writeIntLogger = log('writeInt');

var writeIntLog = (i, field) => {
  var hex = i && i.toString(16) || 'UNDEF';
  writeIntLogger(hex, i, field);
};

class TypeWriter {
  // in bytes
  constructor() /*startMaxLength: number*/{
    // this.maxLength = startMaxLength
    // this.reset()

    this.offset = 0;
  }
  reset() {
    this.buffer = new ArrayBuffer(this.maxLength);
    this.intView = new Int32Array(this.buffer);
    this.byteView = new Uint8Array(this.buffer);
  }
  set(list, length) {
    this.byteView.set(list, this.offset);
    this.offset += length;
  }
  next(data) {
    this.byteView[this.offset] = data;
    this.offset++;
  }
  checkLength(needBytes) {
    if (this.offset + needBytes < this.maxLength) {
      return;
    }
    log('Increase buffer')(this.offset, needBytes, this.maxLength);
    this.maxLength = countNewLength(this.maxLength, needBytes, this.offset);
    var previousBuffer = this.buffer;
    var previousArray = new Int32Array(previousBuffer);

    this.reset();

    new Int32Array(this.buffer).set(previousArray);
  }
  getArray() {
    var resultBuffer = new ArrayBuffer(this.offset);
    var resultArray = new Int32Array(resultBuffer);

    resultArray.set(this.intView.subarray(0, this.offset / 4));

    return resultArray;
  }
  getBuffer() {
    return this.getArray().buffer;
  }
  getBytesTyped() {
    var resultBuffer = new ArrayBuffer(this.offset);
    var resultArray = new Uint8Array(resultBuffer);

    resultArray.set(this.byteView.subarray(0, this.offset));

    return resultArray;
  }
  getBytesPlain() {
    var bytes = [];
    for (var i = 0; i < this.offset; i++) {
      bytes.push(this.byteView[i]);
    }
    return bytes;
  }
  writeInt(i, field) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_smart_timeout__["b" /* immediate */])(writeIntLog, i, field);

    this.checkLength(4);
    this.intView[this.offset / 4] = i;
    this.offset += 4;
  }
  writePair(n1, n2, field1, field2) {
    this.writeInt(n1, field1);
    this.writeInt(n2, field2);
  }
  addPadding() {
    while (this.offset % 4) {
      this.next(0);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TypeWriter;


class TypeBuffer {
  constructor(buffer) {
    this.offset = 0;

    this.buffer = buffer;
    this.intView = toUint32(buffer);
    this.byteView = new Uint8Array(buffer);
  }

  nextByte() {
    return this.byteView[this.offset++];
  }
  nextInt() {
    if (this.offset >= this.intView.length * 4) throw new __WEBPACK_IMPORTED_MODULE_3__error__["c" /* TypeBufferIntError */](this);
    var int = this.intView[this.offset / 4];
    this.offset += 4;
    return int;
  }
  readPair(field1, field2) {
    var int1 = this.nextInt(field1);
    var int2 = this.nextInt(field2);
    return [int1, int2];
  }
  next(length) {
    var result = this.byteView.subarray(this.offset, this.offset + length);
    this.offset += length;
    return result;
  }
  isEnd() {
    return this.offset === this.byteView.length;
  }
  addPadding() {
    var offset = this.offset % 4;
    if (offset > 0) this.offset += 4 - offset;
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = TypeBuffer;


var toUint32 = buf => {
  var ln = void 0,
      res = void 0;
  if (!__WEBPACK_IMPORTED_MODULE_0_detect_node___default.a) //TODO browser behavior not equals, why?
    return new Uint32Array(buf);
  if (buf.readUInt32LE) {
    ln = buf.byteLength / 4;
    res = new Uint32Array(ln);
    for (var i = 0; i < ln; i++) {
      res[i] = buf.readUInt32LE(i * 4);
    }
  } else {
    //$FlowIssue
    var data = new DataView(buf);
    ln = data.byteLength / 4;
    res = new Uint32Array(ln);
    for (var _i = 0; _i < ln; _i++) {
      res[_i] = data.getUint32(_i * 4, true);
    }
  }
  return res;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(107);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_isNil__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_is__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda_src_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_propEq__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_propEq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda_src_propEq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_has__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ramda_src_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ramda_src_pathSatisfies__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ramda_src_pathSatisfies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ramda_src_pathSatisfies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ramda_src_complement__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ramda_src_complement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ramda_src_complement__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_log__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authorizer__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_defer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__time_manager__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dc_configurator__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rsa_keys_manger__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__error_cases__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_smart_timeout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__request__ = __webpack_require__(89);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


// import UpdatesManager from '../updates'









var debug = __WEBPACK_IMPORTED_MODULE_7__util_log__["b" /* default */]`api-manager`;


















var hasPath = __WEBPACK_IMPORTED_MODULE_5_ramda_src_pathSatisfies___default()(__WEBPACK_IMPORTED_MODULE_6_ramda_src_complement___default()(__WEBPACK_IMPORTED_MODULE_1_ramda_src_isNil___default.a));

var baseDcID = 2;

var Ln = (length, obj) => obj && __WEBPACK_IMPORTED_MODULE_3_ramda_src_propEq___default()('length', length, obj);

class ApiManager {
  constructor(config, tls, netFabric, { on, emit }) {
    var _this = this;

    this.cache = {
      uploader: {},
      downloader: {},
      auth: {},
      servers: {},
      keysParsed: {}
    };

    this.networkSetter = (dc, options) => (authKey, serverSalt) => {
      var networker = this.networkFabric(dc, authKey, serverSalt, options);
      this.cache.downloader[dc] = networker;
      return networker;
    };

    function* _ref3(dcID, options = {}) {
      // const isUpload = options.fileUpload || options.fileDownload
      // const cache = isUpload
      //   ? this.cache.uploader
      //   : this.cache.downloader

      var cache = _this.cache.downloader;
      if (!dcID) throw new Error('get Networker without dcID');

      if (__WEBPACK_IMPORTED_MODULE_4_ramda_src_has___default()(dcID, cache)) return cache[dcID];

      var akk = `dc${dcID}_auth_key`;
      var ssk = `dc${dcID}_server_salt`;

      var dcUrl = _this.chooseServer(dcID, false);

      var networkSetter = _this.networkSetter(dcID, options);

      var authKeyHex = yield _this.storage.get(akk);
      var serverSaltHex = yield _this.storage.get(ssk);

      if (cache[dcID]) return cache[dcID];

      if (Ln(512, authKeyHex)) {
        if (!serverSaltHex || serverSaltHex.length !== 16) serverSaltHex = 'AAAAAAAAAAAAAAAA';
        var _authKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["y" /* bytesFromHex */])(authKeyHex);
        var _serverSalt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["y" /* bytesFromHex */])(serverSaltHex);

        return networkSetter(_authKey, _serverSalt);
      }

      if (!options.createNetworker) throw new __WEBPACK_IMPORTED_MODULE_13__error__["d" /* AuthKeyError */]();

      var auth = void 0;
      try {
        auth = yield _this.auth(dcID, _this.cache.auth, dcUrl);
      } catch (error) {
        return netError(error);
      }

      var { authKey, serverSalt } = auth;

      yield _this.storage.set(akk, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["f" /* bytesToHex */])(authKey));
      yield _this.storage.set(ssk, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["f" /* bytesToHex */])(serverSalt));

      return networkSetter(authKey, serverSalt);
    }

    this.mtpGetNetworker = (() => {
      var _ref = _asyncToGenerator(_ref3);

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })();

    function* _ref6(method, params, options = {}) {
      var deferred = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_defer__["a" /* default */])();
      var rejectPromise = function (error) {
        var err = void 0;
        if (!error) err = { type: 'ERROR_EMPTY', input: '' };else if (!__WEBPACK_IMPORTED_MODULE_2_ramda_src_is___default()(Object, error)) err = { message: error };else err = error;
        deferred.reject(err);

        if (!options.noErrorBox) {
          //TODO weird code. `error` changed after `.reject`?

          /*err.input = method
           err.stack =
            stack ||
            hasPath(['originalError', 'stack'], error) ||
            error.stack ||
            (new Error()).stack*/
          _this.emit('error.invoke', error);
        }
      };

      yield _this.initConnection();

      var requestThunk = function (waitTime) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__util_smart_timeout__["c" /* delayedCall */])(req.performRequest, +waitTime * 1e3);
      };

      var dcID = options.dcID ? options.dcID : yield _this.storage.get('dc');

      var networker = yield _this.mtpGetNetworker(dcID, options);

      var cfg = {
        networker,
        dc: dcID,
        storage: _this.storage,
        getNetworker: _this.mtpGetNetworker,
        netOpts: options
      };
      var req = new __WEBPACK_IMPORTED_MODULE_17__request__["a" /* default */](cfg, method, params);

      function _ref4() {
        return networker;
      }

      function _ref5(networker) {
        req.config.networker = networker;
        return req.performRequest();
      }

      req.performRequest().then(deferred.resolve, function (error) {
        var deferResolve = deferred.resolve;
        var apiSavedNet = _ref4;
        var apiRecall = _ref5;
        console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__time_manager__["dTime"])(), 'Error', error.code, error.type, baseDcID, dcID);

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__error_cases__["a" /* switchErrors */])(error, options, dcID, baseDcID)(error, options, dcID, _this.emit, rejectPromise, requestThunk, apiSavedNet, apiRecall, deferResolve, _this.mtpInvokeApi, _this.storage);
      }).catch(rejectPromise);

      return deferred.promise;
    }

    this.mtpInvokeApi = (() => {
      var _ref2 = _asyncToGenerator(_ref6);

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    })();

    this.setUserAuth = (dcID, userAuth) => {
      var fullUserAuth = Object.assign({ dcID }, userAuth);
      this.storage.set({
        dc: dcID,
        user_auth: fullUserAuth
      });
      this.emit('auth.dc', { dc: dcID, auth: userAuth });
    };

    var {
      server,
      api,
      app: {
        storage,
        publicKeys
      },
      schema,
      mtSchema
    } = config;
    this.apiConfig = api;
    this.publicKeys = publicKeys;
    this.storage = storage;
    this.serverConfig = server;
    this.schema = schema;
    this.mtSchema = mtSchema;
    this.chooseServer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__dc_configurator__["a" /* chooseServer */])(this.cache.servers, server);
    this.on = on;
    this.emit = emit;
    this.TL = tls;
    this.keyManager = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__rsa_keys_manger__["a" /* default */])(this.TL.Serialization, publicKeys, this.cache.keysParsed);
    this.auth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__authorizer__["a" /* default */])(this.TL, this.keyManager);
    this.networkFabric = netFabric(this.chooseServer);
    this.mtpInvokeApi = this.mtpInvokeApi.bind(this);
    this.mtpGetNetworker = this.mtpGetNetworker.bind(this);
    var apiManager = this.mtpInvokeApi;
    apiManager.setUserAuth = this.setUserAuth;
    apiManager.on = this.on;
    apiManager.emit = this.emit;
    apiManager.storage = storage;

    // this.updatesManager = UpdatesManager(apiManager)
    // apiManager.updates = this.updatesManager

    return apiManager;
  }

  initConnection() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (!isAnyNetworker(_this2)) {
        var storedBaseDc = yield _this2.storage.get('dc');
        var baseDc = storedBaseDc || baseDcID;
        var opts = {
          dcID: baseDc,
          createNetworker: true
        };
        var networker = yield _this2.mtpGetNetworker(baseDc, opts);
        var nearestDc = yield networker.wrapApiCall('help.getNearestDc', {}, opts);
        var { nearest_dc, this_dc } = nearestDc;
        yield _this2.storage.set('dc', nearest_dc);
        debug(`nearest Dc`)('%O', nearestDc);
        if (nearest_dc !== this_dc) yield _this2.mtpGetNetworker(nearest_dc, { createNetworker: true });
      }
    })();
  }

  mtpClearStorage() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      var saveKeys = [];
      for (var _dcID = 1; _dcID <= 5; _dcID++) {
        saveKeys.push(`dc${_dcID}_auth_key`);
        saveKeys.push(`t_dc${_dcID}_auth_key`);
      }
      _this3.storage.noPrefix(); //TODO Remove noPrefix

      var values = yield _this3.storage.get(...saveKeys);

      yield _this3.storage.clear();

      var restoreObj = {};
      saveKeys.forEach(function (key, i) {
        var value = values[i];
        if (value !== false && value !== undefined) restoreObj[key] = value;
      });
      _this3.storage.noPrefix();

      return _this3.storage.set(restoreObj); //TODO definitely broken
    })();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApiManager;


var isAnyNetworker = ctx => Object.keys(ctx.cache.downloader).length > 0;

var netError = error => {
  console.log('Get networker error', error, error.stack);
  return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(error);
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 20;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  setup: setupAsync,
  compile: compileAsync
};


var util = __webpack_require__(6);

var ASYNC = {
  '*': checkGenerators,
  'co*': checkGenerators,
  'es7': checkAsyncFunction
};

var TRANSPILE = {
  'nodent': getNodent,
  'regenerator': getRegenerator
};

var MODES = [
  { async: 'co*' },
  { async: 'es7', transpile: 'nodent' },
  { async: 'co*', transpile: 'regenerator' }
];


var regenerator, nodent;


function setupAsync(opts, required) {
  if (required !== false) required = true;
  var async = opts.async
    , transpile = opts.transpile
    , check;

  switch (typeof transpile) {
    case 'string':
      var get = TRANSPILE[transpile];
      if (!get) throw new Error('bad transpiler: ' + transpile);
      return (opts._transpileFunc = get(opts, required));
    case 'undefined':
    case 'boolean':
      if (typeof async == 'string') {
        check = ASYNC[async];
        if (!check) throw new Error('bad async mode: ' + async);
        return (opts.transpile = check(opts, required));
      }

      for (var i=0; i<MODES.length; i++) {
        var _opts = MODES[i];
        if (setupAsync(_opts, false)) {
          util.copy(_opts, opts);
          return opts.transpile;
        }
      }
      /* istanbul ignore next */
      throw new Error('generators, nodent and regenerator are not available');
    case 'function':
      return (opts._transpileFunc = opts.transpile);
    default:
      throw new Error('bad transpiler: ' + transpile);
  }
}


function checkGenerators(opts, required) {
  /* jshint evil: true */
  try {
    (new Function('(function*(){})()'))();
    return true;
  } catch(e) {
    /* istanbul ignore next */
    if (required) throw new Error('generators not supported');
  }
}


function checkAsyncFunction(opts, required) {
  /* jshint evil: true */
  try {
    (new Function('(async function(){})()'))();
    /* istanbul ignore next */
    return true;
  } catch(e) {
    if (required) throw new Error('es7 async functions not supported');
  }
}


function getRegenerator(opts, required) {
  try {
    if (!regenerator) {
      var name = 'regenerator';
      regenerator = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      regenerator.runtime();
    }
    if (!opts.async || opts.async === true)
      opts.async = 'es7';
    return regeneratorTranspile;
  } catch(e) {
    /* istanbul ignore next */
    if (required) throw new Error('regenerator not available');
  }
}


function regeneratorTranspile(code) {
  return regenerator.compile(code).code;
}


function getNodent(opts, required) {
  /* jshint evil: true */
  try {
    if (!nodent) {
      var name = 'nodent';
      nodent = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())({ log: false, dontInstallRequireHook: true });
    }
    if (opts.async != 'es7') {
      if (opts.async && opts.async !== true) console.warn('nodent transpiles only es7 async functions');
      opts.async = 'es7';
    }
    return nodentTranspile;
  } catch(e) {
    /* istanbul ignore next */
    if (required) throw new Error('nodent not available');
  }
}


function nodentTranspile(code) {
  return nodent.compile(code, '', { promises: true, sourcemap: false }).code;
}


/**
 * Creates validating function for passed schema with asynchronous loading of missing schemas.
 * `loadSchema` option should be a function that accepts schema uri and node-style callback.
 * @this  Ajv
 * @param {Object}   schema schema object
 * @param {Function} callback node-style callback, it is always called with 2 parameters: error (or null) and validating function.
 */
function compileAsync(schema, callback) {
  /* eslint no-shadow: 0 */
  /* jshint validthis: true */
  var schemaObj;
  var self = this;
  try {
    schemaObj = this._addSchema(schema);
  } catch(e) {
    setTimeout(function() { callback(e); });
    return;
  }
  if (schemaObj.validate) {
    setTimeout(function() { callback(null, schemaObj.validate); });
  } else {
    if (typeof this._opts.loadSchema != 'function')
      throw new Error('options.loadSchema should be a function');
    _compileAsync(schema, callback, true);
  }


  function _compileAsync(schema, callback, firstCall) {
    var validate;
    try { validate = self.compile(schema); }
    catch(e) {
      if (e.missingSchema) loadMissingSchema(e);
      else deferCallback(e);
      return;
    }
    deferCallback(null, validate);

    function loadMissingSchema(e) {
      var ref = e.missingSchema;
      if (self._refs[ref] || self._schemas[ref])
        return callback(new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved'));
      var _callbacks = self._loadingSchemas[ref];
      if (_callbacks) {
        if (typeof _callbacks == 'function')
          self._loadingSchemas[ref] = [_callbacks, schemaLoaded];
        else
          _callbacks[_callbacks.length] = schemaLoaded;
      } else {
        self._loadingSchemas[ref] = schemaLoaded;
        self._opts.loadSchema(ref, function (err, sch) {
          var _callbacks = self._loadingSchemas[ref];
          delete self._loadingSchemas[ref];
          if (typeof _callbacks == 'function') {
            _callbacks(err, sch);
          } else {
            for (var i=0; i<_callbacks.length; i++)
              _callbacks[i](err, sch);
          }
        });
      }

      function schemaLoaded(err, sch) {
        if (err) return callback(err);
        if (!(self._refs[ref] || self._schemas[ref])) {
          try {
            self.addSchema(sch, ref);
          } catch(e) {
            callback(e);
            return;
          }
        }
        _compileAsync(schema, callback);
      }
    }

    function deferCallback(err, validate) {
      if (firstCall) setTimeout(function() { callback(err, validate); });
      else return callback(err, validate);
    }
  }
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*eslint complexity: 0*/

module.exports = function equal(a, b) {
  if (a === b) return true;

  var arrA = Array.isArray(a)
    , arrB = Array.isArray(b)
    , i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++)
      if (!equal(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    var keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;

    for (i = 0; i < keys.length; i++)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = 0; i < keys.length; i++)
      if(!equal(a[keys[i]], b[keys[i]])) return false;

    return true;
  }

  return false;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(118)
  , equal = __webpack_require__(22)
  , util = __webpack_require__(6)
  , SchemaObject = __webpack_require__(24);

module.exports = resolve;

resolve.normalizeId = normalizeId;
resolve.fullPath = getFullPath;
resolve.url = resolveUrl;
resolve.ids = resolveIds;
resolve.inlineRef = inlineRef;
resolve.schema = resolveSchema;

/**
 * [resolve and compile the references ($ref)]
 * @this   Ajv
 * @param  {Function} compile reference to schema compilation funciton (localCompile)
 * @param  {Object} root object with information about the root schema for the current schema
 * @param  {String} ref reference to resolve
 * @return {Object|Function} schema object (if the schema can be inlined) or validation function
 */
function resolve(compile, root, ref) {
  /* jshint validthis: true */
  var refVal = this._refs[ref];
  if (typeof refVal == 'string') {
    if (this._refs[refVal]) refVal = this._refs[refVal];
    else return resolve.call(this, compile, root, refVal);
  }

  refVal = refVal || this._schemas[ref];
  if (refVal instanceof SchemaObject) {
    return inlineRef(refVal.schema, this._opts.inlineRefs)
            ? refVal.schema
            : refVal.validate || this._compile(refVal);
  }

  var res = resolveSchema.call(this, root, ref);
  var schema, v, baseId;
  if (res) {
    schema = res.schema;
    root = res.root;
    baseId = res.baseId;
  }

  if (schema instanceof SchemaObject) {
    v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
  } else if (schema) {
    v = inlineRef(schema, this._opts.inlineRefs)
        ? schema
        : compile.call(this, schema, root, undefined, baseId);
  }

  return v;
}


/**
 * Resolve schema, its root and baseId
 * @this Ajv
 * @param  {Object} root root object with properties schema, refVal, refs
 * @param  {String} ref  reference to resolve
 * @return {Object} object with properties schema, root, baseId
 */
function resolveSchema(root, ref) {
  /* jshint validthis: true */
  var p = url.parse(ref, false, true)
    , refPath = _getFullPath(p)
    , baseId = getFullPath(root.schema.id);
  if (refPath !== baseId) {
    var id = normalizeId(refPath);
    var refVal = this._refs[id];
    if (typeof refVal == 'string') {
      return resolveRecursive.call(this, root, refVal, p);
    } else if (refVal instanceof SchemaObject) {
      if (!refVal.validate) this._compile(refVal);
      root = refVal;
    } else {
      refVal = this._schemas[id];
      if (refVal instanceof SchemaObject) {
        if (!refVal.validate) this._compile(refVal);
        if (id == normalizeId(ref))
          return { schema: refVal, root: root, baseId: baseId };
        root = refVal;
      } else {
        return;
      }
    }
    if (!root.schema) return;
    baseId = getFullPath(root.schema.id);
  }
  return getJsonPointer.call(this, p, baseId, root.schema, root);
}


/* @this Ajv */
function resolveRecursive(root, ref, parsedRef) {
  /* jshint validthis: true */
  var res = resolveSchema.call(this, root, ref);
  if (res) {
    var schema = res.schema;
    var baseId = res.baseId;
    root = res.root;
    if (schema.id) baseId = resolveUrl(baseId, schema.id);
    return getJsonPointer.call(this, parsedRef, baseId, schema, root);
  }
}


var PREVENT_SCOPE_CHANGE = util.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
/* @this Ajv */
function getJsonPointer(parsedRef, baseId, schema, root) {
  /* jshint validthis: true */
  parsedRef.hash = parsedRef.hash || '';
  if (parsedRef.hash.slice(0,2) != '#/') return;
  var parts = parsedRef.hash.split('/');

  for (var i = 1; i < parts.length; i++) {
    var part = parts[i];
    if (part) {
      part = util.unescapeFragment(part);
      schema = schema[part];
      if (!schema) break;
      if (schema.id && !PREVENT_SCOPE_CHANGE[part]) baseId = resolveUrl(baseId, schema.id);
      if (schema.$ref) {
        var $ref = resolveUrl(baseId, schema.$ref);
        var res = resolveSchema.call(this, root, $ref);
        if (res) {
          schema = res.schema;
          root = res.root;
          baseId = res.baseId;
        }
      }
    }
  }
  if (schema && schema != root.schema)
    return { schema: schema, root: root, baseId: baseId };
}


var SIMPLE_INLINED = util.toHash([
  'type', 'format', 'pattern',
  'maxLength', 'minLength',
  'maxProperties', 'minProperties',
  'maxItems', 'minItems',
  'maximum', 'minimum',
  'uniqueItems', 'multipleOf',
  'required', 'enum'
]);
function inlineRef(schema, limit) {
  if (limit === false) return false;
  if (limit === undefined || limit === true) return checkNoRef(schema);
  else if (limit) return countKeys(schema) <= limit;
}


function checkNoRef(schema) {
  var item;
  if (Array.isArray(schema)) {
    for (var i=0; i<schema.length; i++) {
      item = schema[i];
      if (typeof item == 'object' && !checkNoRef(item)) return false;
    }
  } else {
    for (var key in schema) {
      if (key == '$ref') return false;
      item = schema[key];
      if (typeof item == 'object' && !checkNoRef(item)) return false;
    }
  }
  return true;
}


function countKeys(schema) {
  var count = 0, item;
  if (Array.isArray(schema)) {
    for (var i=0; i<schema.length; i++) {
      item = schema[i];
      if (typeof item == 'object') count += countKeys(item);
      if (count == Infinity) return Infinity;
    }
  } else {
    for (var key in schema) {
      if (key == '$ref') return Infinity;
      if (SIMPLE_INLINED[key]) {
        count++;
      } else {
        item = schema[key];
        if (typeof item == 'object') count += countKeys(item) + 1;
        if (count == Infinity) return Infinity;
      }
    }
  }
  return count;
}


function getFullPath(id, normalize) {
  if (normalize !== false) id = normalizeId(id);
  var p = url.parse(id, false, true);
  return _getFullPath(p);
}


function _getFullPath(p) {
  var protocolSeparator = p.protocol || p.href.slice(0,2) == '//' ? '//' : '';
  return (p.protocol||'') + protocolSeparator + (p.host||'') + (p.path||'')  + '#';
}


var TRAILING_SLASH_HASH = /#\/?$/;
function normalizeId(id) {
  return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
}


function resolveUrl(baseId, id) {
  id = normalizeId(id);
  return url.resolve(baseId, id);
}


/* @this Ajv */
function resolveIds(schema) {
  /* eslint no-shadow: 0 */
  /* jshint validthis: true */
  var id = normalizeId(schema.id);
  var localRefs = {};
  _resolveIds.call(this, schema, getFullPath(id, false), id);
  return localRefs;

  /* @this Ajv */
  function _resolveIds(schema, fullPath, baseId) {
    /* jshint validthis: true */
    if (Array.isArray(schema)) {
      for (var i=0; i<schema.length; i++)
        _resolveIds.call(this, schema[i], fullPath+'/'+i, baseId);
    } else if (schema && typeof schema == 'object') {
      if (typeof schema.id == 'string') {
        var id = baseId = baseId
                          ? url.resolve(baseId, schema.id)
                          : schema.id;
        id = normalizeId(id);

        var refVal = this._refs[id];
        if (typeof refVal == 'string') refVal = this._refs[refVal];
        if (refVal && refVal.schema) {
          if (!equal(schema, refVal.schema))
            throw new Error('id "' + id + '" resolves to more than one schema');
        } else if (id != normalizeId(fullPath)) {
          if (id[0] == '#') {
            if (localRefs[id] && !equal(schema, localRefs[id]))
              throw new Error('id "' + id + '" resolves to more than one schema');
            localRefs[id] = schema;
          } else {
            this._refs[id] = fullPath;
          }
        }
      }
      for (var key in schema)
        _resolveIds.call(this, schema[key], fullPath+'/'+util.escapeFragment(key), baseId);
    }
  }
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(6);

module.exports = SchemaObject;

function SchemaObject(obj) {
  util.copy(obj, this);
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ValidationError;


function ValidationError(errors) {
  this.message = 'validation failed';
  this.errors = errors;
  this.ajv = this.validation = true;
}


ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limit(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $isMax = $keyword == 'maximum',
    $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
    $schemaExcl = it.schema[$exclusiveKeyword],
    $isDataExcl = it.opts.v5 && $schemaExcl && $schemaExcl.$data,
    $op = $isMax ? '<' : '>',
    $notOp = $isMax ? '>' : '<';
  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
      $exclusive = 'exclusive' + $lvl,
      $opExpr = 'op' + $lvl,
      $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' var exclusive' + ($lvl) + '; if (typeof ' + ($schemaValueExcl) + ' != \'boolean\' && typeof ' + ($schemaValueExcl) + ' != \'undefined\') { ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } else if( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    out += ' ((exclusive' + ($lvl) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ') || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = exclusive' + ($lvl) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
  } else {
    var $exclusive = $schemaExcl === true,
      $opStr = $op;
    if (!$exclusive) $opStr += '=';
    var $opExpr = '\'' + $opStr + '\'';
    out += ' if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    out += ' ' + ($data) + ' ' + ($notOp);
    if ($exclusive) {
      out += '=';
    }
    out += ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') {';
  }
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + ($opStr) + ' ';
      if ($isData) {
        out += '\' + ' + ($schemaValue);
      } else {
        out += '' + ($schema) + '\'';
      }
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' } ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitItems(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxItems' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT have ';
      if ($keyword == 'maxItems') {
        out += 'more';
      } else {
        out += 'less';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' items\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitLength(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxLength' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  if (it.opts.unicode === false) {
    out += ' ' + ($data) + '.length ';
  } else {
    out += ' ucs2length(' + ($data) + ') ';
  }
  out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT be ';
      if ($keyword == 'maxLength') {
        out += 'longer';
      } else {
        out += 'shorter';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' characters\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitProperties(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxProperties' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT have ';
      if ($keyword == 'maxProperties') {
        out += 'more';
      } else {
        out += 'less';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' properties\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_validate(it, $keyword) {
  var out = '';
  var $async = it.schema.$async === true;
  if (it.isTop) {
    var $top = it.isTop,
      $lvl = it.level = 0,
      $dataLvl = it.dataLevel = 0,
      $data = 'data';
    it.rootId = it.resolve.fullPath(it.root.schema.id);
    it.baseId = it.baseId || it.rootId;
    if ($async) {
      it.async = true;
      var $es7 = it.opts.async == 'es7';
      it.yieldAwait = $es7 ? 'await' : 'yield';
    }
    delete it.isTop;
    it.dataPathArr = [undefined];
    out += ' var validate = ';
    if ($async) {
      if ($es7) {
        out += ' (async function ';
      } else {
        if (it.opts.async == 'co*') {
          out += 'co.wrap';
        }
        out += '(function* ';
      }
    } else {
      out += ' (function ';
    }
    out += ' (data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; var vErrors = null; ';
    out += ' var errors = 0;     ';
    out += ' if (rootData === undefined) rootData = data;';
  } else {
    var $lvl = it.level,
      $dataLvl = it.dataLevel,
      $data = 'data' + ($dataLvl || '');
    if (it.schema.id) it.baseId = it.resolve.url(it.baseId, it.schema.id);
    if ($async && !it.async) throw new Error('async schema in sync schema');
    out += ' var errs_' + ($lvl) + ' = errors;';
  }
  var $valid = 'valid' + $lvl,
    $breakOnError = !it.opts.allErrors,
    $closingBraces1 = '',
    $closingBraces2 = '';
  var $typeSchema = it.schema.type,
    $typeIsArray = Array.isArray($typeSchema);
  if ($typeSchema && it.opts.coerceTypes) {
    var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
    if ($coerceToTypes) {
      var $schemaPath = it.schemaPath + '.type',
        $errSchemaPath = it.errSchemaPath + '/type',
        $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
      out += ' if (' + (it.util[$method]($typeSchema, $data, true)) + ') {  ';
      var $dataType = 'dataType' + $lvl,
        $coerced = 'coerced' + $lvl;
      out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; ';
      if (it.opts.coerceTypes == 'array') {
        out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ')) ' + ($dataType) + ' = \'array\'; ';
      }
      out += ' var ' + ($coerced) + ' = undefined; ';
      var $bracesCoercion = '';
      var arr1 = $coerceToTypes;
      if (arr1) {
        var $type, $i = -1,
          l1 = arr1.length - 1;
        while ($i < l1) {
          $type = arr1[$i += 1];
          if ($i) {
            out += ' if (' + ($coerced) + ' === undefined) { ';
            $bracesCoercion += '}';
          }
          if (it.opts.coerceTypes == 'array' && $type != 'array') {
            out += ' if (' + ($dataType) + ' == \'array\' && ' + ($data) + '.length == 1) { ' + ($coerced) + ' = ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + ';  } ';
          }
          if ($type == 'string') {
            out += ' if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
          } else if ($type == 'number' || $type == 'integer') {
            out += ' if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
            if ($type == 'integer') {
              out += ' && !(' + ($data) + ' % 1)';
            }
            out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
          } else if ($type == 'boolean') {
            out += ' if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
          } else if ($type == 'null') {
            out += ' if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
          } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
            out += ' if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
          }
        }
      }
      out += ' ' + ($bracesCoercion) + ' if (' + ($coerced) + ' === undefined) {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
        if ($typeIsArray) {
          out += '' + ($typeSchema.join(","));
        } else {
          out += '' + ($typeSchema);
        }
        out += '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should be ';
          if ($typeIsArray) {
            out += '' + ($typeSchema.join(","));
          } else {
            out += '' + ($typeSchema);
          }
          out += '\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } else {  ';
      var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
        $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
      out += ' ' + ($data) + ' = ' + ($coerced) + '; ';
      if (!$dataLvl) {
        out += 'if (' + ($parentData) + ' !== undefined)';
      }
      out += ' ' + ($parentData) + '[' + ($parentDataProperty) + '] = ' + ($coerced) + '; } } ';
    }
  }
  var $refKeywords;
  if (it.schema.$ref && ($refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'))) {
    if (it.opts.extendRefs == 'fail') {
      throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '"');
    } else if (it.opts.extendRefs == 'ignore') {
      $refKeywords = false;
      console.log('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
    } else if (it.opts.extendRefs !== true) {
      console.log('$ref: all keywords used in schema at path "' + it.errSchemaPath + '". It will change in the next major version, see issue #260. Use option { extendRefs: true } to keep current behaviour');
    }
  }
  if (it.schema.$ref && !$refKeywords) {
    out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
    if ($breakOnError) {
      out += ' } if (errors === ';
      if ($top) {
        out += '0';
      } else {
        out += 'errs_' + ($lvl);
      }
      out += ') { ';
      $closingBraces2 += '}';
    }
  } else {
    var arr2 = it.RULES;
    if (arr2) {
      var $rulesGroup, i2 = -1,
        l2 = arr2.length - 1;
      while (i2 < l2) {
        $rulesGroup = arr2[i2 += 1];
        if ($shouldUseGroup($rulesGroup)) {
          if ($rulesGroup.type) {
            out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data)) + ') { ';
          }
          if (it.opts.useDefaults && !it.compositeRule) {
            if ($rulesGroup.type == 'object' && it.schema.properties) {
              var $schema = it.schema.properties,
                $schemaKeys = Object.keys($schema);
              var arr3 = $schemaKeys;
              if (arr3) {
                var $propertyKey, i3 = -1,
                  l3 = arr3.length - 1;
                while (i3 < l3) {
                  $propertyKey = arr3[i3 += 1];
                  var $sch = $schema[$propertyKey];
                  if ($sch.default !== undefined) {
                    var $passData = $data + it.util.getProperty($propertyKey);
                    out += '  if (' + ($passData) + ' === undefined) ' + ($passData) + ' = ';
                    if (it.opts.useDefaults == 'shared') {
                      out += ' ' + (it.useDefault($sch.default)) + ' ';
                    } else {
                      out += ' ' + (JSON.stringify($sch.default)) + ' ';
                    }
                    out += '; ';
                  }
                }
              }
            } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
              var arr4 = it.schema.items;
              if (arr4) {
                var $sch, $i = -1,
                  l4 = arr4.length - 1;
                while ($i < l4) {
                  $sch = arr4[$i += 1];
                  if ($sch.default !== undefined) {
                    var $passData = $data + '[' + $i + ']';
                    out += '  if (' + ($passData) + ' === undefined) ' + ($passData) + ' = ';
                    if (it.opts.useDefaults == 'shared') {
                      out += ' ' + (it.useDefault($sch.default)) + ' ';
                    } else {
                      out += ' ' + (JSON.stringify($sch.default)) + ' ';
                    }
                    out += '; ';
                  }
                }
              }
            }
          }
          var arr5 = $rulesGroup.rules;
          if (arr5) {
            var $rule, i5 = -1,
              l5 = arr5.length - 1;
            while (i5 < l5) {
              $rule = arr5[i5 += 1];
              if ($shouldUseRule($rule)) {
                out += ' ' + ($rule.code(it, $rule.keyword)) + ' ';
                if ($breakOnError) {
                  $closingBraces1 += '}';
                }
              }
            }
          }
          if ($breakOnError) {
            out += ' ' + ($closingBraces1) + ' ';
            $closingBraces1 = '';
          }
          if ($rulesGroup.type) {
            out += ' } ';
            if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
              var $typeChecked = true;
              out += ' else { ';
              var $schemaPath = it.schemaPath + '.type',
                $errSchemaPath = it.errSchemaPath + '/type';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
                if ($typeIsArray) {
                  out += '' + ($typeSchema.join(","));
                } else {
                  out += '' + ($typeSchema);
                }
                out += '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should be ';
                  if ($typeIsArray) {
                    out += '' + ($typeSchema.join(","));
                  } else {
                    out += '' + ($typeSchema);
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              out += ' } ';
            }
          }
          if ($breakOnError) {
            out += ' if (errors === ';
            if ($top) {
              out += '0';
            } else {
              out += 'errs_' + ($lvl);
            }
            out += ') { ';
            $closingBraces2 += '}';
          }
        }
      }
    }
  }
  if ($typeSchema && !$typeChecked && !$coerceToTypes) {
    var $schemaPath = it.schemaPath + '.type',
      $errSchemaPath = it.errSchemaPath + '/type',
      $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
    out += ' if (' + (it.util[$method]($typeSchema, $data, true)) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
      if ($typeIsArray) {
        out += '' + ($typeSchema.join(","));
      } else {
        out += '' + ($typeSchema);
      }
      out += '\' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be ';
        if ($typeIsArray) {
          out += '' + ($typeSchema.join(","));
        } else {
          out += '' + ($typeSchema);
        }
        out += '\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }';
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces2) + ' ';
  }
  if ($top) {
    if ($async) {
      out += ' if (errors === 0) return true;           ';
      out += ' else throw new ValidationError(vErrors); ';
    } else {
      out += ' validate.errors = vErrors; ';
      out += ' return errors === 0;       ';
    }
    out += ' }); return validate;';
  } else {
    out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
  }
  out = it.util.cleanUpCode(out);
  if ($top && $breakOnError) {
    out = it.util.cleanUpVarErrors(out, $async);
  }

  function $shouldUseGroup($rulesGroup) {
    for (var i = 0; i < $rulesGroup.rules.length; i++)
      if ($shouldUseRule($rulesGroup.rules[i])) return true;
  }

  function $shouldUseRule($rule) {
    return it.schema[$rule.keyword] !== undefined || ($rule.keyword == 'properties' && (it.schema.additionalProperties === false || typeof it.schema.additionalProperties == 'object' || (it.schema.patternProperties && Object.keys(it.schema.patternProperties).length) || (it.opts.v5 && it.schema.patternGroups && Object.keys(it.schema.patternGroups).length)));
  }
  return out;
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


var httpClient = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create();
delete httpClient.defaults.headers.post['Content-Type'];
delete httpClient.defaults.headers.common['Accept'];

/* harmony default export */ __webpack_exports__["b"] = (httpClient);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_forEachObjIndexed__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_forEachObjIndexed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda_src_forEachObjIndexed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_manager__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_defer__ = __webpack_require__(10);





class NetMessage {
  constructor(seq_no, body) {
    this.acked = false;
    this.msg_id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__time_manager__["generateID"])();
    this.container = false;
    this.deferred = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_defer__["a" /* default */])();

    this.copyHelper = (value, key) => {
      //$FlowIssue
      this[key] = value;
    };

    this.seq_no = seq_no;
    this.body = body;
  }
  copyOptions(options) {
    //TODO remove this
    __WEBPACK_IMPORTED_MODULE_0_ramda_src_forEachObjIndexed___default()(this.copyHelper, options);
  }

  size() {
    if (this.body instanceof Uint8Array) return this.body.byteLength;else return this.body.length;
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = NetMessage;


class NetContainer extends NetMessage {
  constructor(seq_no, body, inner) {
    super(seq_no, body);
    this.container = true;
    this.inner = inner;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NetContainer;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ValueStore */
/* unused harmony export ValueStoreMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimeOffset; });
/* unused harmony export dcList */
/* unused harmony export AsyncStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PureStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_clone__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_clone__);




var ValueStore = () => {
  var val = null;

  return {
    get: () => __WEBPACK_IMPORTED_MODULE_1_ramda_src_clone___default()(val),
    set: newVal => val = newVal
  };
};

var ValueStoreMap = () => {
  var val = new Map();

  return {
    get: key => __WEBPACK_IMPORTED_MODULE_1_ramda_src_clone___default()(val.get(key)),
    set: (key, newVal) => val.set(key, newVal)
  };
};

var TimeOffset = ValueStore();
var dcList = ValueStoreMap();

function _ref2() {
  return {};
}

var AsyncStorage = () => {
  var store = new Map();

  var get = key => store.get(key);
  var set = (key, val) => store.set(key, val);

  function _ref(e) {
    return store.delete(e);
  }

  var remove = keys => keys.map(_ref);
  var clr = () => store.clear();
  return {
    get: key => __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(get(key)),
    set: (key, val) => __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(set(key, val)),
    remove: (...keys) => __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(remove(keys)),
    clear: () => __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(clr()),
    noPrefix: _ref2,
    store
  };
};

var PureStorage = AsyncStorage(); /*{
                                         get     : (...keys) => new Promise(rs => ConfigStorage.get(keys, rs)),
                                         set     : obj => new Promise(rs => ConfigStorage.set(obj, rs)),
                                         remove  : (...keys) => new Promise(rs => ConfigStorage.remove(...keys, rs)),
                                         noPrefix: () => ConfigStorage.noPrefix(),
                                         clear   : () => new Promise(rs => ConfigStorage.clear(rs))
                                         }*/

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteMediator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReadMediator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_buffer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_log__ = __webpack_require__(2);




var log = __WEBPACK_IMPORTED_MODULE_2__util_log__["b" /* default */]`tl:mediator`;

var WriteMediator = {
  int(ctx, i, field = '') {
    ctx.writeInt(i, `${field}:int`);
  },
  bool(ctx, i, field = '') {
    if (i) {
      ctx.writeInt(0x997275b5, `${field}:bool`);
    } else {
      ctx.writeInt(0xbc799737, `${field}:bool`);
    }
  },
  longP(ctx, iHigh, iLow, field) {
    ctx.writePair(iLow, iHigh, `${field}:long[low]`, `${field}:long[high]`);
  },
  long(ctx, sLong, field = '') {
    if (Array.isArray(sLong)) return sLong.length === 2 ? this.longP(ctx, sLong[0], sLong[1], field) : this.intBytes(ctx, sLong, 64, field);
    var str = void 0;
    if (typeof sLong !== 'string') str = sLong ? sLong.toString() : '0';else str = sLong;
    var [int1, int2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bin__["o" /* longToInts */])(str);
    ctx.writePair(int2, int1, `${field}:long[low]`, `${field}:long[high]`);
  },
  double(ctx, f, field = '') {
    var buffer = new ArrayBuffer(8);
    var intView = new Int32Array(buffer);
    var doubleView = new Float64Array(buffer);

    doubleView[0] = f;

    var [int1, int2] = intView;
    ctx.writePair(int2, int1, `${field}:double[low]`, `${field}:double[high]`);
  },
  bytes(ctx, bytes, field = '') {
    var { list, length } = binaryDataGuard(bytes);
    // this.debug && console.log('>>>', bytesToHex(bytes), `${ field }:bytes`)

    ctx.checkLength(length + 8);
    if (length <= 253) {
      ctx.next(length);
    } else {
      ctx.next(254);
      ctx.next(length & 0xFF);
      ctx.next((length & 0xFF00) >> 8);
      ctx.next((length & 0xFF0000) >> 16);
    }

    ctx.set(list, length);
    ctx.addPadding();
  },
  intBytes(ctx, bytes, bits, field = '') {
    var { list, length } = binaryDataGuard(bytes);

    if (bits) {
      if (bits % 32 || length * 8 != bits) {
        throw new Error(`Invalid bits: ${bits}, ${length}`);
      }
    }
    // this.debug && console.log('>>>', bytesToHex(bytes), `${ field }:int${  bits}`)
    ctx.checkLength(length);
    ctx.set(list, length);
  }
};

var ReadMediator = {
  int(ctx, field) {
    var result = ctx.nextInt();
    log('read, int')(field, result);
    return result;
  },
  long(ctx, field) {
    var iLow = this.int(ctx, `${field}:long[low]`);
    var iHigh = this.int(ctx, `${field}:long[high]`);

    var res = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bin__["p" /* lshift32 */])(iHigh, iLow);
    return res;
  },
  double(ctx, field) {
    var buffer = new ArrayBuffer(8);
    var intView = new Int32Array(buffer);
    var doubleView = new Float64Array(buffer);

    intView[0] = this.int(ctx, `${field}:double[low]`);
    intView[1] = this.int(ctx, `${field}:double[high]`);

    return doubleView[0];
  },
  string(ctx, field) {
    var bytes = this.bytes(ctx, `${field}:string`);
    var sUTF8 = [...bytes].map(getChar).join('');

    var s = void 0;
    try {
      s = decodeURIComponent(escape(sUTF8));
    } catch (e) {
      s = sUTF8;
    }

    log(`read, string`)(s, `${field}:string`);

    return s;
  },
  bytes(ctx, field) {
    var len = ctx.nextByte();

    if (len == 254) {
      len = ctx.nextByte() | ctx.nextByte() << 8 | ctx.nextByte() << 16;
    }

    var bytes = ctx.next(len);
    ctx.addPadding();

    log(`read, bytes`)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bin__["f" /* bytesToHex */])(bytes), `${field}:bytes`);

    return bytes;
  }
};

var binaryDataGuard = bytes => {
  var list = void 0,
      length = void 0;
  if (bytes instanceof ArrayBuffer) {
    list = new Uint8Array(bytes);
    length = bytes.byteLength;
  } else if (typeof bytes === 'string') {
    list = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bin__["q" /* stringToChars */])(unescape(encodeURIComponent(bytes)));
    length = list.length;
  } else if (bytes === undefined) {
    list = [];
    length = 0;
  } else {
    list = bytes;
    length = bytes.length;
  }
  return {
    list,
    length
  };
};

var getChar = e => String.fromCharCode(e);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dTime; });
var logTimer = new Date().getTime();

var dTime = () => `[${((new Date().getTime() - logTimer) / 1000).toFixed(3)}]`;

/* harmony default export */ __webpack_exports__["a"] = (dTime);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return bpe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return one; });
/* harmony export (immutable) */ __webpack_exports__["g"] = powMod;
/* harmony export (immutable) */ __webpack_exports__["r"] = sub;
/* harmony export (immutable) */ __webpack_exports__["n"] = eGCD_;
/* harmony export (immutable) */ __webpack_exports__["l"] = greater;
/* harmony export (immutable) */ __webpack_exports__["c"] = divide_;
/* unused harmony export int2bigInt */
/* harmony export (immutable) */ __webpack_exports__["b"] = str2bigInt;
/* harmony export (immutable) */ __webpack_exports__["o"] = equalsInt;
/* harmony export (immutable) */ __webpack_exports__["k"] = isZero;
/* harmony export (immutable) */ __webpack_exports__["a"] = bigInt2str;
/* harmony export (immutable) */ __webpack_exports__["q"] = dup;
/* harmony export (immutable) */ __webpack_exports__["j"] = copy_;
/* harmony export (immutable) */ __webpack_exports__["i"] = copyInt_;
/* unused harmony export addInt_ */
/* harmony export (immutable) */ __webpack_exports__["f"] = rightShift_;
/* harmony export (immutable) */ __webpack_exports__["d"] = leftShift_;
/* harmony export (immutable) */ __webpack_exports__["m"] = sub_;
/* harmony export (immutable) */ __webpack_exports__["e"] = add_;
////////////////////////////////////////////////////////////////////////////////////////
// Big Integer Library v. 5.5
// Created 2000, last modified 2013
// Leemon Baird
// www.leemon.com
//
// Version history:
// v 5.5  17 Mar 2013
//   - two lines of a form like "if (x<0) x+=n" had the "if" changed to "while" to
//     handle the case when x<-n. (Thanks to James Ansell for finding that bug)
// v 5.4  3 Oct 2009
//   - added "var i" to greaterShift() so i is not global. (Thanks to PŽter Szab— for finding that bug)
//
// v 5.3  21 Sep 2009
//   - added randProbPrime(k) for probable primes
//   - unrolled loop in mont_ (slightly faster)
//   - millerRabin now takes a bigInt parameter rather than an int
//
// v 5.2  15 Sep 2009
//   - fixed capitalization in call to int2bigInt in randBigInt
//     (thanks to Emili Evripidou, Reinhold Behringer, and Samuel Macaleese for finding that bug)
//
// v 5.1  8 Oct 2007
//   - renamed inverseModInt_ to inverseModInt since it doesn't change its parameters
//   - added functions GCD and randBigInt, which call GCD_ and randBigInt_
//   - fixed a bug found by Rob Visser (see comment with his name below)
//   - improved comments
//
// This file is public domain.   You can use it for any purpose without restriction.
// I do not guarantee that it is correct, so use it at your own risk.  If you use
// it for something interesting, I'd appreciate hearing about it.  If you find
// any bugs or make any improvements, I'd appreciate hearing about those too.
// It would also be nice if my name and URL were left in the comments.  But none
// of that is required.
//
// This code defines a bigInt library for arbitrary-precision integers.
// A bigInt is an array of integers storing the value in chunks of bpe bits,
// little endian (buff[0] is the least significant word).
// Negative bigInts are stored two's complement.  Almost all the functions treat
// bigInts as nonnegative.  The few that view them as two's complement say so
// in their comments.  Some functions assume their parameters have at least one
// leading zero element. Functions with an underscore at the end of the name put
// their answer into one of the arrays passed in, and have unpredictable behavior
// in case of overflow, so the caller must make sure the arrays are big enough to
// hold the answer.  But the average user should never have to call any of the
// underscored functions.  Each important underscored function has a wrapper function
// of the same name without the underscore that takes care of the details for you.
// For each underscored function where a parameter is modified, that same variable
// must not be used as another argument too.  So, you cannot square x by doing
// multMod_(x,x,n).  You must use squareMod_(x,n) instead, or do y=dup(x); multMod_(x,y,n).
// Or simply use the multMod(x,x,n) function without the underscore, where
// such issues never arise, because non-underscored functions never change
// their parameters; they always allocate new memory for the answer that is returned.
//
// These functions are designed to avoid frequent dynamic memory allocation in the inner loop.
// For most functions, if it needs a BigInt as a local variable it will actually use
// a global, and will only allocate to it only when it's not the right size.  This ensures
// that when a function is called repeatedly with same-sized parameters, it only allocates
// memory on the first call.
//
// Note that for cryptographic purposes, the calls to Math.random() must
// be replaced with calls to a better pseudorandom number generator.
//
// In the following, "bigInt" means a bigInt with at least one leading zero element,
// and "integer" means a nonnegative integer less than radix.  In some cases, integer
// can be negative.  Negative bigInts are 2s complement.
//
// The following functions do not modify their inputs.
// Those returning a bigInt, string, or Array will dynamically allocate memory for that value.
// Those returning a boolean will return the integer 0 (false) or 1 (true).
// Those returning boolean or int will not allocate memory except possibly on the first
// time they're called with a given parameter size.
//
// bigInt  add(x,y)               //return (x+y) for bigInts x and y.
// bigInt  addInt(x,n)            //return (x+n) where x is a bigInt and n is an integer.
// string  bigInt2str(x,base)     //return a string form of bigInt x in a given base, with 2 <= base <= 95
// int     bitSize(x)             //return how many bits long the bigInt x is, not counting leading zeros
// bigInt  dup(x)                 //return a copy of bigInt x
// boolean equals(x,y)            //is the bigInt x equal to the bigint y?
// boolean equalsInt(x,y)         //is bigint x equal to integer y?
// bigInt  expand(x,n)            //return a copy of x with at least n elements, adding leading zeros if needed
// Array   findPrimes(n)          //return array of all primes less than integer n
// bigInt  GCD(x,y)               //return greatest common divisor of bigInts x and y (each with same number of elements).
// boolean greater(x,y)           //is x>y?  (x and y are nonnegative bigInts)
// boolean greaterShift(x,y,shift)//is (x <<(shift*bpe)) > y?
// bigInt  int2bigInt(t,n,m)      //return a bigInt equal to integer t, with at least n bits and m array elements
// bigInt  inverseMod(x,n)        //return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
// int     inverseModInt(x,n)     //return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
// boolean isZero(x)              //is the bigInt x equal to zero?
// boolean millerRabin(x,b)       //does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is bigInt, 1<b<x)
// boolean millerRabinInt(x,b)    //does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is int,    1<b<x)
// bigInt  mod(x,n)               //return a new bigInt equal to (x mod n) for bigInts x and n.
// int     modInt(x,n)            //return x mod n for bigInt x and integer n.
// bigInt  mult(x,y)              //return x*y for bigInts x and y. This is faster when y<x.
// bigInt  multMod(x,y,n)         //return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
// boolean negative(x)            //is bigInt x negative?
// bigInt  powMod(x,y,n)          //return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
// bigInt  randBigInt(n,s)        //return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
// bigInt  randTruePrime(k)       //return a new, random, k-bit, true prime bigInt using Maurer's algorithm.
// bigInt  randProbPrime(k)       //return a new, random, k-bit, probable prime bigInt (probability it's composite less than 2^-80).
// bigInt  str2bigInt(s,b,n,m)    //return a bigInt for number represented in string s in base b with at least n bits and m array elements
// bigInt  sub(x,y)               //return (x-y) for bigInts x and y.  Negative answers will be 2s complement
// bigInt  trim(x,k)              //return a copy of x with exactly k leading zero elements
//
//
// The following functions each have a non-underscored version, which most users should call instead.
// These functions each write to a single parameter, and the caller is responsible for ensuring the array
// passed in is large enough to hold the result.
//
// void    addInt_(x,n)          //do x=x+n where x is a bigInt and n is an integer
// void    add_(x,y)             //do x=x+y for bigInts x and y
// void    copy_(x,y)            //do x=y on bigInts x and y
// void    copyInt_(x,n)         //do x=n on bigInt x and integer n
// void    GCD_(x,y)             //set x to the greatest common divisor of bigInts x and y, (y is destroyed).  (This never overflows its array).
// boolean inverseMod_(x,n)      //do x=x**(-1) mod n, for bigInts x and n. Returns 1 (0) if inverse does (doesn't) exist
// void    mod_(x,n)             //do x=x mod n for bigInts x and n. (This never overflows its array).
// void    mult_(x,y)            //do x=x*y for bigInts x and y.
// void    multMod_(x,y,n)       //do x=x*y  mod n for bigInts x,y,n.
// void    powMod_(x,y,n)        //do x=x**y mod n, where x,y,n are bigInts (n is odd) and ** is exponentiation.  0**0=1.
// void    randBigInt_(b,n,s)    //do b = an n-bit random BigInt. if s=1, then nth bit (most significant bit) is set to 1. n>=1.
// void    randTruePrime_(ans,k) //do ans = a random k-bit true random prime (not just probable prime) with 1 in the msb.
// void    sub_(x,y)             //do x=x-y for bigInts x and y. Negative answers will be 2s complement.
//
// The following functions do NOT have a non-underscored version.
// They each write a bigInt result to one or more parameters.  The caller is responsible for
// ensuring the arrays passed in are large enough to hold the results.
//
// void addShift_(x,y,ys)       //do x=x+(y<<(ys*bpe))
// void carry_(x)               //do carries and borrows so each element of the bigInt x fits in bpe bits.
// void divide_(x,y,q,r)        //divide x by y giving quotient q and remainder r
// int  divInt_(x,n)            //do x=floor(x/n) for bigInt x and integer n, and return the remainder. (This never overflows its array).
// int  eGCD_(x,y,d,a,b)        //sets a,b,d to positive bigInts such that d = GCD_(x,y) = a*x-b*y
// void halve_(x)               //do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement.  (This never overflows its array).
// void leftShift_(x,n)         //left shift bigInt x by n bits.  n<bpe.
// void linComb_(x,y,a,b)       //do x=a*x+b*y for bigInts x and y and integers a and b
// void linCombShift_(x,y,b,ys) //do x=x+b*(y<<(ys*bpe)) for bigInts x and y, and integers b and ys
// void mont_(x,y,n,np)         //Montgomery multiplication (see comments where the function is defined)
// void multInt_(x,n)           //do x=x*n where x is a bigInt and n is an integer.
// void rightShift_(x,n)        //right shift bigInt x by n bits.  0 <= n < bpe. (This never overflows its array).
// void squareMod_(x,n)         //do x=x*x  mod n for bigInts x,n
// void subShift_(x,y,ys)       //do x=x-(y<<(ys*bpe)). Negative answers will be 2s complement.
//
// The following functions are based on algorithms from the _Handbook of Applied Cryptography_
//    powMod_()           = algorithm 14.94, Montgomery exponentiation
//    eGCD_,inverseMod_() = algorithm 14.61, Binary extended GCD_
//    GCD_()              = algorothm 14.57, Lehmer's algorithm
//    mont_()             = algorithm 14.36, Montgomery multiplication
//    divide_()           = algorithm 14.20  Multiple-precision division
//    squareMod_()        = algorithm 14.16  Multiple-precision squaring
//    randTruePrime_()    = algorithm  4.62, Maurer's algorithm
//    millerRabin()       = algorithm  4.24, Miller-Rabin algorithm
//
// Profiling shows:
//     randTruePrime_() spends:
//         10% of its time in calls to powMod_()
//         85% of its time in calls to millerRabin()
//     millerRabin() spends:
//         99% of its time in calls to powMod_()   (always with a base of 2)
//     powMod_() spends:
//         94% of its time in calls to mont_()  (almost always with x==y)
//
// This suggests there are several ways to speed up this library slightly:
//     - convert powMod_ to use a Montgomery form of k-ary window (or maybe a Montgomery form of sliding window)
//         -- this should especially focus on being fast when raising 2 to a power mod n
//     - convert randTruePrime_() to use a minimum r of 1/3 instead of 1/2 with the appropriate change to the test
//     - tune the parameters in randTruePrime_(), including c, m, and recLimit
//     - speed up the single loop in mont_() that takes 95% of the runtime, perhaps by reducing checking
//       within the loop when all the parameters are the same length.
//
// There are several ideas that look like they wouldn't help much at all:
//     - replacing trial division in randTruePrime_() with a sieve (that speeds up something taking almost no time anyway)
//     - increase bpe from 15 to 30 (that would help if we had a 32*32->64 multiplier, but not with JavaScript's 32*32->32)
//     - speeding up mont_(x,y,n,np) when x==y by doing a non-modular, non-Montgomery square
//       followed by a Montgomery reduction.  The intermediate answer will be twice as long as x, so that
//       method would be slower.  This is unfortunate because the code currently spends almost all of its time
//       doing mont_(x,x,...), both for randTruePrime_() and powMod_().  A faster method for Montgomery squaring
//       would have a large impact on the speed of randTruePrime_() and powMod_().  HAC has a couple of poorly-worded
//       sentences that seem to imply it's faster to do a non-modular square followed by a single
//       Montgomery reduction, but that's obviously wrong.
////////////////////////////////////////////////////////////////////////////////////////

//globals
var bpe = 0; //bits stored per array element
var mask = 0; //AND this with an array element to chop it down to bpe bits
var radix = mask + 1; //equals 2^bpe.  A single 1 bit to the left of the last bit of mask.

//the digits for converting to different bases
var digitsStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\\'\"+-';

//initialize the global variables
for (bpe = 0; 1 << bpe + 1 > 1 << bpe; bpe++) {} //bpe=number of bits in the mantissa on this platform
bpe >>= 1; //bpe=number of bits in one element of the array representing the bigInt
mask = (1 << bpe) - 1; //AND the mask with an integer to get its bpe least significant bits
radix = mask + 1; //2^bpe.  a single 1 bit to the left of the first bit of mask
var one = int2bigInt(1, 1, 1); //constant used in powMod_()

//the following global variables are scratchpad memory to
//reduce dynamic memory allocation in the inner loop
var t = new Array(0);
var ss = t; //used in mult_()
var s0 = t; //used in multMod_(), squareMod_()
// var s1=t;       //used in powMod_(), multMod_(), squareMod_()
// var s2=t;       //used in powMod_(), multMod_()
var s3 = t; //used in powMod_()
var s4 = t,
    s5 = t; //used in mod_()
var s6 = t; //used in bigInt2str()
var s7 = t; //used in powMod_()
var T = t; //used in GCD_()
var sa = t; //used in mont_()
var mr_x1 = t,
    mr_r = t,
    mr_a = t,
    //used in millerRabin()
eg_v = t,
    eg_u = t,
    eg_A = t,
    eg_B = t,
    eg_C = t,
    eg_D = t //used in eGCD_(), inverseMod_()
//, md_q1=t, md_q2=t, md_q3=t, md_r=t, md_r1=t, md_r2=t, md_tt=t, //used in mod_()

,
    primes = t,
    pows = t,
    s_i = t,
    s_i2 = t,
    s_R = t,
    s_rm = t,
    s_q = t,
    s_n1 = t,
    s_a = t,
    s_r2 = t,
    s_n = t,
    s_b = t,
    s_d = t,
    s_x1 = t,
    s_x2 = t,
    s_aa = t,
    //used in randTruePrime_()

rpprb = t; //used in randProbPrimeRounds() (which also uses "primes")

////////////////////////////////////////////////////////////////////////////////////////

var k, buff;

//return array of all primes less than integer n
function findPrimes(n) {
  var i, s, p, ans;
  s = new Array(n);
  for (i = 0; i < n; i++) {
    s[i] = 0;
  }s[0] = 2;
  p = 0; //first p elements of s are primes, the rest are a sieve
  for (; s[p] < n;) {
    //s[p] is the pth prime
    for (i = s[p] * s[p]; i < n; i += s[p]) {
      //mark multiples of s[p]
      s[i] = 1;
    }p++;
    s[p] = s[p - 1] + 1;
    for (; s[p] < n && s[s[p]]; s[p]++) {} //find next prime (where s[p]==0)
  }
  ans = new Array(p);
  for (i = 0; i < p; i++) {
    ans[i] = s[i];
  }return ans;
}

//does a single round of Miller-Rabin base b consider x to be a possible prime?
//x is a bigInt, and b is an integer, with b<x
function millerRabinInt(x, b) {
  if (mr_x1.length != x.length) {
    mr_x1 = dup(x);
    mr_r = dup(x);
    mr_a = dup(x);
  }

  copyInt_(mr_a, b);
  return millerRabin(x, mr_a);
}

//does a single round of Miller-Rabin base b consider x to be a possible prime?
//x and b are bigInts with b<x
function millerRabin(x, b) {
  var i, j, k, s;

  if (mr_x1.length != x.length) {
    mr_x1 = dup(x);
    mr_r = dup(x);
    mr_a = dup(x);
  }

  copy_(mr_a, b);
  copy_(mr_r, x);
  copy_(mr_x1, x);

  addInt_(mr_r, -1);
  addInt_(mr_x1, -1);

  //s=the highest power of two that divides mr_r
  k = 0;
  for (i = 0; i < mr_r.length; i++) {
    for (j = 1; j < mask; j <<= 1) {
      if (x[i] & j) {
        s = k < mr_r.length + bpe ? k : 0;
        i = mr_r.length;
        j = mask;
      } else k++;
    }
  }if (s) rightShift_(mr_r, s);

  powMod_(mr_a, mr_r, x);

  if (!equalsInt(mr_a, 1) && !equals(mr_a, mr_x1)) {
    j = 1;
    while (j <= s - 1 && !equals(mr_a, mr_x1)) {
      squareMod_(mr_a, x);
      if (equalsInt(mr_a, 1)) {
        return 0;
      }
      j++;
    }
    if (!equals(mr_a, mr_x1)) {
      return 0;
    }
  }
  return 1;
}

//returns how many bits long the bigInt is, not counting leading zeros.
function bitSize(x) {
  var j, z, w;
  for (j = x.length - 1; x[j] == 0 && j > 0; j--) {}
  for (z = 0, w = x[j]; w; w >>= 1, z++) {}
  z += bpe * j;
  return z;
}

//return a copy of x with at least n elements, adding leading zeros if needed
function expand(x, n) {
  var ans = int2bigInt(0, (x.length > n ? x.length : n) * bpe, 0);
  copy_(ans, x);
  return ans;
}

//return a k-bit true random prime using Maurer's algorithm.
function randTruePrime(k) {
  var ans = int2bigInt(0, k, 0);
  randTruePrime_(ans, k);
  return trim(ans, 1);
}

//return a k-bit random probable prime with probability of error < 2^-80
function randProbPrime(k) {
  if (k >= 600) return randProbPrimeRounds(k, 2); //numbers from HAC table 4.3
  if (k >= 550) return randProbPrimeRounds(k, 4);
  if (k >= 500) return randProbPrimeRounds(k, 5);
  if (k >= 400) return randProbPrimeRounds(k, 6);
  if (k >= 350) return randProbPrimeRounds(k, 7);
  if (k >= 300) return randProbPrimeRounds(k, 9);
  if (k >= 250) return randProbPrimeRounds(k, 12); //numbers from HAC table 4.4
  if (k >= 200) return randProbPrimeRounds(k, 15);
  if (k >= 150) return randProbPrimeRounds(k, 18);
  if (k >= 100) return randProbPrimeRounds(k, 27);
  return randProbPrimeRounds(k, 40); //number from HAC remark 4.26 (only an estimate)
}

//return a k-bit probable random prime using n rounds of Miller Rabin (after trial division with small primes)
function randProbPrimeRounds(k, n) {
  var ans, i, divisible, B;
  B = 30000; //B is largest prime to use in trial division
  ans = int2bigInt(0, k, 0);

  //optimization: try larger and smaller B to find the best limit.

  if (primes.length == 0) primes = findPrimes(30000); //check for divisibility by primes <=30000

  if (rpprb.length != ans.length) rpprb = dup(ans);

  for (;;) {
    //keep trying random values for ans until one appears to be prime
    //optimization: pick a random number times L=2*3*5*...*p, plus a
    //   random element of the list of all numbers in [0,L) not divisible by any prime up to p.
    //   This can reduce the amount of random number generation.

    randBigInt_(ans, k, 0); //ans = a random odd number to check
    ans[0] |= 1;
    divisible = 0;

    //check ans for divisibility by small primes up to B
    for (i = 0; i < primes.length && primes[i] <= B; i++) {
      if (modInt(ans, primes[i]) == 0 && !equalsInt(ans, primes[i])) {
        divisible = 1;
        break;
      }
    } //optimization: change millerRabin so the base can be bigger than the number being checked, then eliminate the while here.

    //do n rounds of Miller Rabin, with random bases less than ans
    for (i = 0; i < n && !divisible; i++) {
      randBigInt_(rpprb, k, 0);
      while (!greater(ans, rpprb)) {
        //pick a random rpprb that's < ans
        randBigInt_(rpprb, k, 0);
      }if (!millerRabin(ans, rpprb)) divisible = 1;
    }

    if (!divisible) return ans;
  }
}

//return a new bigInt equal to (x mod n) for bigInts x and n.
function mod(x, n) {
  var ans = dup(x);
  mod_(ans, n);
  return trim(ans, 1);
}

//return (x+n) where x is a bigInt and n is an integer.
function addInt(x, n) {
  var ans = expand(x, x.length + 1);
  addInt_(ans, n);
  return trim(ans, 1);
}

//return x*y for bigInts x and y. This is faster when y<x.
function mult(x, y) {
  var ans = expand(x, x.length + y.length);
  mult_(ans, y);
  return trim(ans, 1);
}

//return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
function powMod(x, y, n) {
  var ans = expand(x, n.length);
  powMod_(ans, trim(y, 2), trim(n, 2), 0); //this should work without the trim, but doesn't
  return trim(ans, 1);
}

//return (x-y) for bigInts x and y.  Negative answers will be 2s complement
function sub(x, y) {
  var ans = expand(x, x.length > y.length ? x.length + 1 : y.length + 1);
  sub_(ans, y);
  return trim(ans, 1);
}

//return (x+y) for bigInts x and y.
function add(x, y) {
  var ans = expand(x, x.length > y.length ? x.length + 1 : y.length + 1);
  add_(ans, y);
  return trim(ans, 1);
}

//return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
function inverseMod(x, n) {
  var ans = expand(x, n.length);
  var s;
  s = inverseMod_(ans, n);
  return s ? trim(ans, 1) : null;
}

//return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
function multMod(x, y, n) {
  var ans = expand(x, n.length);
  multMod_(ans, y, n);
  return trim(ans, 1);
}

//generate a k-bit true random prime using Maurer's algorithm,
//and put it into ans.  The bigInt ans must be large enough to hold it.
function randTruePrime_(ans, k) {
  var c, m, pm, dd, j, r, B, divisible, z, zz, recSize;
  var w;
  if (primes.length == 0) primes = findPrimes(30000); //check for divisibility by primes <=30000

  if (pows.length == 0) {
    pows = new Array(512);
    for (j = 0; j < 512; j++) {
      pows[j] = Math.pow(2, j / 511. - 1.);
    }
  }

  //c and m should be tuned for a particular machine and value of k, to maximize speed
  c = 0.1; //c=0.1 in HAC
  m = 20; //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
  var recLimit = 20; //stop recursion when k <=recLimit.  Must have recLimit >= 2

  if (s_i2.length != ans.length) {
    s_i2 = dup(ans);
    s_R = dup(ans);
    s_n1 = dup(ans);
    s_r2 = dup(ans);
    s_d = dup(ans);
    s_x1 = dup(ans); //TODO Seems like a bug in eslint, reports as unused
    s_x2 = dup(ans);
    s_b = dup(ans);
    s_n = dup(ans);
    s_i = dup(ans);
    s_rm = dup(ans);
    s_q = dup(ans);
    s_a = dup(ans);
    s_aa = dup(ans);
  }

  if (k <= recLimit) {
    //generate small random primes by trial division up to its square root
    pm = (1 << (k + 2 >> 1)) - 1; //pm is binary number with all ones, just over sqrt(2^k)
    copyInt_(ans, 0);
    for (dd = 1; dd;) {
      dd = 0;
      ans[0] = 1 | 1 << k - 1 | Math.floor(Math.random() * (1 << k)); //random, k-bit, odd integer, with msb 1
      for (j = 1; j < primes.length && (primes[j] & pm) == primes[j]; j++) {
        //trial division by all primes 3...sqrt(2^k)
        if (0 == ans[0] % primes[j]) {
          dd = 1;
          break;
        }
      }
    }
    carry_(ans);
    return;
  }

  B = c * k * k; //try small primes up to B (or all the primes[] array if the largest is less than B).
  if (k > 2 * m) //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
    for (r = 1; k - k * r <= m;) {
      r = pows[Math.floor(Math.random() * 512)];
    } //r=Math.pow(2,Math.random()-1);
  else r = .5;

  //simulation suggests the more complex algorithm using r=.333 is only slightly faster.

  recSize = Math.floor(r * k) + 1;

  randTruePrime_(s_q, recSize);
  copyInt_(s_i2, 0);
  s_i2[Math.floor((k - 2) / bpe)] |= 1 << (k - 2) % bpe; //s_i2=2^(k-2)
  divide_(s_i2, s_q, s_i, s_rm); //s_i=floor((2^(k-1))/(2q))

  z = bitSize(s_i);

  for (;;) {
    for (;;) {
      //generate z-bit numbers until one falls in the range [0,s_i-1]
      randBigInt_(s_R, z, 0);
      if (greater(s_i, s_R)) break;
    } //now s_R is in the range [0,s_i-1]
    addInt_(s_R, 1); //now s_R is in the range [1,s_i]
    add_(s_R, s_i); //now s_R is in the range [s_i+1,2*s_i]

    copy_(s_n, s_q);
    mult_(s_n, s_R);
    multInt_(s_n, 2);
    addInt_(s_n, 1); //s_n=2*s_R*s_q+1

    copy_(s_r2, s_R);
    multInt_(s_r2, 2); //s_r2=2*s_R

    //check s_n for divisibility by small primes up to B
    for (divisible = 0, j = 0; j < primes.length && primes[j] < B; j++) {
      if (modInt(s_n, primes[j]) == 0 && !equalsInt(s_n, primes[j])) {
        divisible = 1;
        break;
      }
    }if (!divisible) //if it passes small primes check, then try a single Miller-Rabin base 2
      if (!millerRabinInt(s_n, 2)) //this line represents 75% of the total runtime for randTruePrime_
        divisible = 1;

    if (!divisible) {
      //if it passes that test, continue checking s_n
      addInt_(s_n, -3);
      for (j = s_n.length - 1; s_n[j] == 0 && j > 0; j--) {} //strip leading zeros
      for (zz = 0, w = s_n[j]; w; w >>= 1, zz++) {}
      zz += bpe * j; //zz=number of bits in s_n, ignoring leading zeros
      for (;;) {
        //generate z-bit numbers until one falls in the range [0,s_n-1]
        randBigInt_(s_a, zz, 0);
        if (greater(s_n, s_a)) break;
      } //now s_a is in the range [0,s_n-1]
      addInt_(s_n, 3); //now s_a is in the range [0,s_n-4]
      addInt_(s_a, 2); //now s_a is in the range [2,s_n-2]
      copy_(s_b, s_a);
      copy_(s_n1, s_n);
      addInt_(s_n1, -1);
      powMod_(s_b, s_n1, s_n); //s_b=s_a^(s_n-1) modulo s_n
      addInt_(s_b, -1);
      if (isZero(s_b)) {
        copy_(s_b, s_a);
        powMod_(s_b, s_r2, s_n);
        addInt_(s_b, -1);
        copy_(s_aa, s_n);
        copy_(s_d, s_b);
        GCD_(s_d, s_n); //if s_b and s_n are relatively prime, then s_n is a prime
        if (equalsInt(s_d, 1)) {
          copy_(ans, s_aa);
          return; //if we've made it this far, then s_n is absolutely guaranteed to be prime
        }
      }
    }
  }
}

//Return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
function randBigInt(n, s) {
  var a, b;
  a = Math.floor((n - 1) / bpe) + 2; //# array elements to hold the BigInt with a leading 0 element
  b = int2bigInt(0, 0, a);
  randBigInt_(b, n, s);
  return b;
}

//Set b to an n-bit random BigInt.  If s=1, then the most significant of those n bits is set to 1.
//Array b must be big enough to hold the result. Must have n>=1
function randBigInt_(b, n, s) {
  var i, a;
  for (i = 0; i < b.length; i++) {
    b[i] = 0;
  }a = Math.floor((n - 1) / bpe) + 1; //# array elements to hold the BigInt
  for (i = 0; i < a; i++) {
    b[i] = Math.floor(Math.random() * (1 << bpe - 1));
  }
  b[a - 1] &= (2 << (n - 1) % bpe) - 1;
  if (s == 1) b[a - 1] |= 1 << (n - 1) % bpe;
}

//Return the greatest common divisor of bigInts x and y (each with same number of elements).
function GCD(x, y) {
  var xc, yc;
  xc = dup(x);
  yc = dup(y);
  GCD_(xc, yc);
  return xc;
}

//set x to the greatest common divisor of bigInts x and y (each with same number of elements).
//y is destroyed.
function GCD_(x, y) {
  var i, xp, yp, A, B, C, D, q, sing;
  var qp;
  if (T.length != x.length) T = dup(x);

  sing = 1;
  while (sing) {
    //while y has nonzero elements other than y[0]
    sing = 0;
    for (i = 1; i < y.length; i++) {
      //check if y has nonzero elements other than 0
      if (y[i]) {
        sing = 1;
        break;
      }
    }if (!sing) break; //quit when y all zero elements except possibly y[0]

    for (i = x.length; !x[i] && i >= 0; i--) {} //find most significant element of x
    xp = x[i];
    yp = y[i];
    A = 1;B = 0;C = 0;D = 1;
    while (yp + C && yp + D) {
      q = Math.floor((xp + A) / (yp + C));
      qp = Math.floor((xp + B) / (yp + D));
      if (q != qp) break;
      t = A - q * C;A = C;C = t; //  do (A,B,xp, C,D,yp) = (C,D,yp, A,B,xp) - q*(0,0,0, C,D,yp)
      t = B - q * D;B = D;D = t;
      t = xp - q * yp;xp = yp;yp = t;
    }
    if (B) {
      copy_(T, x);
      linComb_(x, y, A, B); //x=A*x+B*y
      linComb_(y, T, D, C); //y=D*y+C*T
    } else {
      mod_(x, y);
      copy_(T, x);
      copy_(x, y);
      copy_(y, T);
    }
  }
  if (y[0] == 0) return;
  t = modInt(x, y[0]);
  copyInt_(x, y[0]);
  y[0] = t;
  while (y[0]) {
    x[0] %= y[0];
    t = x[0];x[0] = y[0];y[0] = t;
  }
}

//do x=x**(-1) mod n, for bigInts x and n.
//If no inverse exists, it sets x to zero and returns 0, else it returns 1.
//The x array must be at least as large as the n array.
function inverseMod_(x, n) {
  var k = 1 + 2 * Math.max(x.length, n.length);

  if (!(x[0] & 1) && !(n[0] & 1)) {
    //if both inputs are even, then inverse doesn't exist
    copyInt_(x, 0);
    return 0;
  }

  if (eg_u.length != k) {
    eg_u = new Array(k);
    eg_v = new Array(k);
    eg_A = new Array(k);
    eg_B = new Array(k);
    eg_C = new Array(k);
    eg_D = new Array(k);
  }

  copy_(eg_u, x);
  copy_(eg_v, n);
  copyInt_(eg_A, 1);
  copyInt_(eg_B, 0);
  copyInt_(eg_C, 0);
  copyInt_(eg_D, 1);
  for (;;) {
    while (!(eg_u[0] & 1)) {
      //while eg_u is even
      halve_(eg_u);
      if (!(eg_A[0] & 1) && !(eg_B[0] & 1)) {
        //if eg_A==eg_B==0 mod 2
        halve_(eg_A);
        halve_(eg_B);
      } else {
        add_(eg_A, n);halve_(eg_A);
        sub_(eg_B, x);halve_(eg_B);
      }
    }

    while (!(eg_v[0] & 1)) {
      //while eg_v is even
      halve_(eg_v);
      if (!(eg_C[0] & 1) && !(eg_D[0] & 1)) {
        //if eg_C==eg_D==0 mod 2
        halve_(eg_C);
        halve_(eg_D);
      } else {
        add_(eg_C, n);halve_(eg_C);
        sub_(eg_D, x);halve_(eg_D);
      }
    }

    if (!greater(eg_v, eg_u)) {
      //eg_v <= eg_u
      sub_(eg_u, eg_v);
      sub_(eg_A, eg_C);
      sub_(eg_B, eg_D);
    } else {
      //eg_v > eg_u
      sub_(eg_v, eg_u);
      sub_(eg_C, eg_A);
      sub_(eg_D, eg_B);
    }

    if (equalsInt(eg_u, 0)) {
      while (negative(eg_C)) {
        //make sure answer is nonnegative
        add_(eg_C, n);
      }copy_(x, eg_C);

      if (!equalsInt(eg_v, 1)) {
        //if GCD_(x,n)!=1, then there is no inverse
        copyInt_(x, 0);
        return 0;
      }
      return 1;
    }
  }
}

//return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
function inverseModInt(x, n) {
  var a = 1,
      b = 0,
      t;
  for (;;) {
    if (x == 1) return a;
    if (x == 0) return 0;
    b -= a * Math.floor(n / x);
    n %= x;

    if (n == 1) return b; //to avoid negatives, change this b to n-b, and each -= to +=
    if (n == 0) return 0;
    a -= b * Math.floor(x / n);
    x %= n;
  }
}

//this deprecated function is for backward compatibility only.
function inverseModInt_(x, n) {
  return inverseModInt(x, n);
}

//Given positive bigInts x and y, change the bigints v, a, and b to positive bigInts such that:
//     v = GCD_(x,y) = a*x-b*y
//The bigInts v, a, b, must have exactly as many elements as the larger of x and y.
function eGCD_(x, y, v, a, b) {
  var g = 0;
  var k = Math.max(x.length, y.length);
  if (eg_u.length != k) {
    eg_u = new Array(k);
    eg_A = new Array(k);
    eg_B = new Array(k);
    eg_C = new Array(k);
    eg_D = new Array(k);
  }
  while (!(x[0] & 1) && !(y[0] & 1)) {
    //while x and y both even
    halve_(x);
    halve_(y);
    g++;
  }
  copy_(eg_u, x);
  copy_(v, y);
  copyInt_(eg_A, 1);
  copyInt_(eg_B, 0);
  copyInt_(eg_C, 0);
  copyInt_(eg_D, 1);
  for (;;) {
    while (!(eg_u[0] & 1)) {
      //while u is even
      halve_(eg_u);
      if (!(eg_A[0] & 1) && !(eg_B[0] & 1)) {
        //if A==B==0 mod 2
        halve_(eg_A);
        halve_(eg_B);
      } else {
        add_(eg_A, y);halve_(eg_A);
        sub_(eg_B, x);halve_(eg_B);
      }
    }

    while (!(v[0] & 1)) {
      //while v is even
      halve_(v);
      if (!(eg_C[0] & 1) && !(eg_D[0] & 1)) {
        //if C==D==0 mod 2
        halve_(eg_C);
        halve_(eg_D);
      } else {
        add_(eg_C, y);halve_(eg_C);
        sub_(eg_D, x);halve_(eg_D);
      }
    }

    if (!greater(v, eg_u)) {
      //v<=u
      sub_(eg_u, v);
      sub_(eg_A, eg_C);
      sub_(eg_B, eg_D);
    } else {
      //v>u
      sub_(v, eg_u);
      sub_(eg_C, eg_A);
      sub_(eg_D, eg_B);
    }
    if (equalsInt(eg_u, 0)) {
      while (negative(eg_C)) {
        //make sure a (C) is nonnegative
        add_(eg_C, y);
        sub_(eg_D, x);
      }
      multInt_(eg_D, -1); ///make sure b (D) is nonnegative
      copy_(a, eg_C);
      copy_(b, eg_D);
      leftShift_(v, g);
      return;
    }
  }
}

//is bigInt x negative?
function negative(x) {
  return x[x.length - 1] >> bpe - 1 & 1;
}

//is (x << (shift*bpe)) > y?
//x and y are nonnegative bigInts
//shift is a nonnegative integer
function greaterShift(x, y, shift) {
  var i,
      kx = x.length,
      ky = y.length;
  k = kx + shift < ky ? kx + shift : ky;
  for (i = ky - 1 - shift; i < kx && i >= 0; i++) {
    if (x[i] > 0) return 1;
  } //if there are nonzeros in x to the left of the first column of y, then x is bigger
  for (i = kx - 1 + shift; i < ky; i++) {
    if (y[i] > 0) return 0;
  } //if there are nonzeros in y to the left of the first column of x, then x is not bigger
  for (i = k - 1; i >= shift; i--) {
    if (x[i - shift] > y[i]) return 1;else if (x[i - shift] < y[i]) return 0;
  }return 0;
}

//is x > y? (x and y both nonnegative)
function greater(x, y) {
  var i;
  var k = x.length < y.length ? x.length : y.length;

  for (i = x.length; i < y.length; i++) {
    if (y[i]) return 0;
  } //y has more digits

  for (i = y.length; i < x.length; i++) {
    if (x[i]) return 1;
  } //x has more digits

  for (i = k - 1; i >= 0; i--) {
    if (x[i] > y[i]) return 1;else if (x[i] < y[i]) return 0;
  }return 0;
}

//divide x by y giving quotient q and remainder r.  (q=floor(x/y),  r=x mod y).  All 4 are bigints.
//x must have at least one leading zero element.
//y must be nonzero.
//q and r must be arrays that are exactly the same length as x. (Or q can have more).
//Must have x.length >= y.length >= 2.
function divide_(x, y, q, r) {
  var kx, ky;
  var i, j, y1, y2, c, a, b;
  copy_(r, x);
  for (ky = y.length; y[ky - 1] == 0; ky--) {} //ky is number of elements in y, not including leading zeros

  //normalize: ensure the most significant element of y has its highest bit set
  b = y[ky - 1];
  for (a = 0; b; a++) {
    b >>= 1;
  }a = bpe - a; //a is how many bits to shift so that the high order bit of y is leftmost in its array element
  leftShift_(y, a); //multiply both by 1<<a now, then divide both by that at the end
  leftShift_(r, a);

  //Rob Visser discovered a bug: the following line was originally just before the normalization.
  for (kx = r.length; r[kx - 1] == 0 && kx > ky; kx--) {} //kx is number of elements in normalized x, not including leading zeros

  copyInt_(q, 0); // q=0
  while (!greaterShift(y, r, kx - ky)) {
    // while (leftShift_(y,kx-ky) <= r) {
    subShift_(r, y, kx - ky); //   r=r-leftShift_(y,kx-ky)
    q[kx - ky]++; //   q[kx-ky]++;
  } // }

  for (i = kx - 1; i >= ky; i--) {
    if (r[i] == y[ky - 1]) q[i - ky] = mask;else q[i - ky] = Math.floor((r[i] * radix + r[i - 1]) / y[ky - 1]);

    //The following for(;;) loop is equivalent to the commented while loop,
    //except that the uncommented version avoids overflow.
    //The commented loop comes from HAC, which assumes r[-1]==y[-1]==0
    //  while (q[i-ky]*(y[ky-1]*radix+y[ky-2]) > r[i]*radix*radix+r[i-1]*radix+r[i-2])
    //    q[i-ky]--;
    for (;;) {
      y2 = (ky > 1 ? y[ky - 2] : 0) * q[i - ky];
      c = y2 >> bpe;
      y2 = y2 & mask;
      y1 = c + q[i - ky] * y[ky - 1];
      c = y1 >> bpe;
      y1 = y1 & mask;

      if (c == r[i] ? y1 == r[i - 1] ? y2 > (i > 1 ? r[i - 2] : 0) : y1 > r[i - 1] : c > r[i]) q[i - ky]--;else break;
    }

    linCombShift_(r, y, -q[i - ky], i - ky); //r=r-q[i-ky]*leftShift_(y,i-ky)
    if (negative(r)) {
      addShift_(r, y, i - ky); //r=r+leftShift_(y,i-ky)
      q[i - ky]--;
    }
  }

  rightShift_(y, a); //undo the normalization step
  rightShift_(r, a); //undo the normalization step
}

//do carries and borrows so each element of the bigInt x fits in bpe bits.
function carry_(x) {
  var i, k, c, b;
  k = x.length;
  c = 0;
  for (i = 0; i < k; i++) {
    c += x[i];
    b = 0;
    if (c < 0) {
      b = -(c >> bpe);
      c += b * radix;
    }
    x[i] = c & mask;
    c = (c >> bpe) - b;
  }
}

//return x mod n for bigInt x and integer n.
function modInt(x, n) {
  var i,
      c = 0;
  for (i = x.length - 1; i >= 0; i--) {
    c = (c * radix + x[i]) % n;
  }return c;
}

//convert the integer t into a bigInt with at least the given number of bits.
//the returned array stores the bigInt in bpe-bit chunks, little endian (buff[0] is least significant word)
//Pad the array with leading zeros so that it has at least minSize elements.
//There will always be at least one leading 0 element.
function int2bigInt(t, bits, minSize) {
  var i, k;
  k = Math.ceil(bits / bpe) + 1;
  k = minSize > k ? minSize : k;
  var buff = new Array(k);
  copyInt_(buff, t);
  return buff;
}

//return the bigInt given a string representation in a given base.
//Pad the array with leading zeros so that it has at least minSize elements.
//If base=-1, then it reads in a space-separated list of array elements in decimal.
//The array will always have at least one leading zero, unless base=-1.
function str2bigInt(s, base, minSize) {
  var d, i, j, x, y, kk;
  var k = s.length;
  if (base == -1) {
    //comma-separated list of array elements in decimal
    x = new Array(0);
    for (;;) {
      y = new Array(x.length + 1);
      for (i = 0; i < x.length; i++) {
        y[i + 1] = x[i];
      }y[0] = parseInt(s, 10); //TODO PERF Should we replace that with ~~ (not not)? https://jsperf.com/number-vs-parseint-vs-plus/7
      x = y;
      d = s.indexOf(',', 0);
      if (d < 1) break;
      s = s.substring(d + 1);
      if (s.length == 0) break;
    }
    if (x.length < minSize) {
      y = new Array(minSize);
      copy_(y, x);
      return y;
    }
    return x;
  }

  x = int2bigInt(0, base * k, 0);
  for (i = 0; i < k; i++) {
    d = digitsStr.indexOf(s.substring(i, i + 1), 0);
    if (base <= 36 && d >= 36) //convert lowercase to uppercase if base<=36
      d -= 26;
    if (d >= base || d < 0) {
      //stop at first illegal character
      break;
    }
    multInt_(x, base);
    addInt_(x, d);
  }

  for (k = x.length; k > 0 && !x[k - 1]; k--) {} //strip off leading zeros
  k = minSize > k + 1 ? minSize : k + 1;
  y = new Array(k);
  kk = k < x.length ? k : x.length;
  for (i = 0; i < kk; i++) {
    y[i] = x[i];
  }for (; i < k; i++) {
    y[i] = 0;
  }return y;
}

//is bigint x equal to integer y?
//y must have less than bpe bits
function equalsInt(x, y) {
  var i;
  if (x[0] != y) return 0;
  for (i = 1; i < x.length; i++) {
    if (x[i]) return 0;
  }return 1;
}

//are bigints x and y equal?
//this works even if x and y are different lengths and have arbitrarily many leading zeros
function equals(x, y) {
  var i;
  var k = x.length < y.length ? x.length : y.length;
  for (i = 0; i < k; i++) {
    if (x[i] != y[i]) return 0;
  }if (x.length > y.length) {
    for (; i < x.length; i++) {
      if (x[i]) return 0;
    }
  } else {
    for (; i < y.length; i++) {
      if (y[i]) return 0;
    }
  }
  return 1;
}

//is the bigInt x equal to zero?
function isZero(x) {
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i]) return 0;
  }return 1;
}

//convert a bigInt into a string in a given base, from base 2 up to base 95.
//Base -1 prints the contents of the array representing the number.
function bigInt2str(x, base) {
  var i,
      t,
      s = '';

  if (s6.length != x.length) s6 = dup(x);else copy_(s6, x);

  if (base == -1) {
    //return the list of array contents
    for (i = x.length - 1; i > 0; i--) {
      s += x[i] + ',';
    }s += x[0];
  } else {
    //return it in the given base
    while (!isZero(s6)) {
      t = divInt_(s6, base); //t=s6 % base; s6=floor(s6/base);
      s = digitsStr.substring(t, t + 1) + s;
    }
  }
  if (s.length == 0) s = '0';
  return s;
}

//returns a duplicate of bigInt x
function dup(x) {
  var i;
  buff = new Array(x.length);
  copy_(buff, x);
  return buff;
}

//do x=y on bigInts x and y.  x must be an array at least as big as y (not counting the leading zeros in y).
function copy_(x, y) {
  var i;
  var k = x.length < y.length ? x.length : y.length;
  for (i = 0; i < k; i++) {
    x[i] = y[i];
  }for (i = k; i < x.length; i++) {
    x[i] = 0;
  }
}

//do x=y on bigInt x and integer y.
function copyInt_(x, n) {
  var i, c;
  var len = x.length; //TODO .length in for loop have perfomance costs. Bench this
  for (c = n, i = 0; i < len; i++) {
    x[i] = c & mask;
    c >>= bpe;
  }
}

//do x=x+n where x is a bigInt and n is an integer.
//x must be large enough to hold the result.
function addInt_(x, n) {
  var i, k, c, b;
  x[0] += n;
  k = x.length;
  c = 0;
  for (i = 0; i < k; i++) {
    c += x[i];
    b = 0;
    if (c < 0) {
      b = -(c >> bpe);
      c += b * radix;
    }
    x[i] = c & mask;
    c = (c >> bpe) - b;
    if (!c) return; //stop carrying as soon as the carry is zero
  }
}

//right shift bigInt x by n bits.  0 <= n < bpe.
function rightShift_(x, n) {
  var i;
  var k = Math.floor(n / bpe);
  if (k) {
    for (i = 0; i < x.length - k; i++) {
      //right shift x by k elements
      x[i] = x[i + k];
    }for (; i < x.length; i++) {
      x[i] = 0;
    }n %= bpe;
  }
  for (i = 0; i < x.length - 1; i++) {
    x[i] = mask & (x[i + 1] << bpe - n | x[i] >> n);
  }
  x[i] >>= n;
}

//do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement
function halve_(x) {
  var i;
  for (i = 0; i < x.length - 1; i++) {
    x[i] = mask & (x[i + 1] << bpe - 1 | x[i] >> 1);
  }
  x[i] = x[i] >> 1 | x[i] & radix >> 1; //most significant bit stays the same
}

//left shift bigInt x by n bits.
function leftShift_(x, n) {
  var i;
  var k = Math.floor(n / bpe);
  if (k) {
    for (i = x.length; i >= k; i--) {
      //left shift x by k elements
      x[i] = x[i - k];
    }for (; i >= 0; i--) {
      x[i] = 0;
    }n %= bpe;
  }
  if (!n) return;
  for (i = x.length - 1; i > 0; i--) {
    x[i] = mask & (x[i] << n | x[i - 1] >> bpe - n);
  }
  x[i] = mask & x[i] << n;
}

//do x=x*n where x is a bigInt and n is an integer.
//x must be large enough to hold the result.
function multInt_(x, n) {
  var i, k, c, b;
  if (!n) return;
  k = x.length;
  c = 0;
  for (i = 0; i < k; i++) {
    c += x[i] * n;
    b = 0;
    if (c < 0) {
      b = -(c >> bpe);
      c += b * radix;
    }
    x[i] = c & mask;
    c = (c >> bpe) - b;
  }
}

//do x=floor(x/n) for bigInt x and integer n, and return the remainder
function divInt_(x, n) {
  var i,
      r = 0,
      s;
  for (i = x.length - 1; i >= 0; i--) {
    s = r * radix + x[i];
    x[i] = Math.floor(s / n);
    r = s % n;
  }
  return r;
}

//do the linear combination x=a*x+b*y for bigInts x and y, and integers a and b.
//x must be large enough to hold the answer.
function linComb_(x, y, a, b) {
  var i, c, k, kk;
  k = x.length < y.length ? x.length : y.length;
  kk = x.length;
  for (c = 0, i = 0; i < k; i++) {
    c += a * x[i] + b * y[i];
    x[i] = c & mask;
    c >>= bpe;
  }
  for (i = k; i < kk; i++) {
    c += a * x[i];
    x[i] = c & mask;
    c >>= bpe;
  }
}

//do the linear combination x=a*x+b*(y<<(ys*bpe)) for bigInts x and y, and integers a, b and ys.
//x must be large enough to hold the answer.
function linCombShift_(x, y, b, ys) {
  var i, c, k, kk;
  k = x.length < ys + y.length ? x.length : ys + y.length;
  kk = x.length;
  for (c = 0, i = ys; i < k; i++) {
    c += x[i] + b * y[i - ys];
    x[i] = c & mask;
    c >>= bpe;
  }
  for (i = k; c && i < kk; i++) {
    c += x[i];
    x[i] = c & mask;
    c >>= bpe;
  }
}

//do x=x+(y<<(ys*bpe)) for bigInts x and y, and integers a,b and ys.
//x must be large enough to hold the answer.
function addShift_(x, y, ys) {
  var i, c, k, kk;
  k = x.length < ys + y.length ? x.length : ys + y.length;
  kk = x.length;
  for (c = 0, i = ys; i < k; i++) {
    c += x[i] + y[i - ys];
    x[i] = c & mask;
    c >>= bpe;
  }
  for (i = k; c && i < kk; i++) {
    c += x[i];
    x[i] = c & mask;
    c >>= bpe;
  }
}

//do x=x-(y<<(ys*bpe)) for bigInts x and y, and integers a,b and ys.
//x must be large enough to hold the answer.
function subShift_(x, y, ys) {
  var i, c, k, kk;
  k = x.length < ys + y.length ? x.length : ys + y.length;
  kk = x.length;
  for (c = 0, i = ys; i < k; i++) {
    c += x[i] - y[i - ys];
    x[i] = c & mask;
    c >>= bpe;
  }
  for (i = k; c && i < kk; i++) {
    c += x[i];
    x[i] = c & mask;
    c >>= bpe;
  }
}

//do x=x-y for bigInts x and y.
//x must be large enough to hold the answer.
//negative answers will be 2s complement
function sub_(x, y) {
  var i, c, k, kk;
  k = x.length < y.length ? x.length : y.length;
  for (c = 0, i = 0; i < k; i++) {
    c += x[i] - y[i];
    x[i] = c & mask;
    c >>= bpe;
  }
  for (i = k; c && i < x.length; i++) {
    c += x[i];
    x[i] = c & mask;
    c >>= bpe;
  }
}

//do x=x+y for bigInts x and y.
//x must be large enough to hold the answer.
function add_(x, y) {
  var i, c, k, kk;
  k = x.length < y.length ? x.length : y.length;
  for (c = 0, i = 0; i < k; i++) {
    c += x[i] + y[i];
    x[i] = c & mask;
    c >>= bpe;
  }
  for (i = k; c && i < x.length; i++) {
    c += x[i];
    x[i] = c & mask;
    c >>= bpe;
  }
}

//do x=x*y for bigInts x and y.  This is faster when y<x.
function mult_(x, y) {
  var i;
  if (ss.length != 2 * x.length) ss = new Array(2 * x.length);
  copyInt_(ss, 0);
  for (i = 0; i < y.length; i++) {
    if (y[i]) linCombShift_(ss, x, y[i], i);
  } //ss=1*ss+y[i]*(x<<(i*bpe))
  copy_(x, ss);
}

//do x=x mod n for bigInts x and n.
function mod_(x, n) {
  if (s4.length != x.length) s4 = dup(x);else copy_(s4, x);
  if (s5.length != x.length) s5 = dup(x);
  divide_(s4, n, s5, x); //x = remainder of s4 / n
}

//do x=x*y mod n for bigInts x,y,n.
//for greater speed, let y<x.
function multMod_(x, y, n) {
  var i;
  if (s0.length != 2 * x.length) s0 = new Array(2 * x.length);
  copyInt_(s0, 0);
  for (i = 0; i < y.length; i++) {
    if (y[i]) linCombShift_(s0, x, y[i], i);
  } //s0=1*s0+y[i]*(x<<(i*bpe))
  mod_(s0, n);
  copy_(x, s0);
}

//do x=x*x mod n for bigInts x,n.
function squareMod_(x, n) {
  var i, j, d, c, kx, kn, k;
  for (kx = x.length; kx > 0 && !x[kx - 1]; kx--) {} //ignore leading zeros in x
  k = kx > n.length ? 2 * kx : 2 * n.length; //k=# elements in the product, which is twice the elements in the larger of x and n
  if (s0.length != k) s0 = new Array(k);
  copyInt_(s0, 0);
  for (i = 0; i < kx; i++) {
    c = s0[2 * i] + x[i] * x[i];
    s0[2 * i] = c & mask;
    c >>= bpe;
    for (j = i + 1; j < kx; j++) {
      c = s0[i + j] + 2 * x[i] * x[j] + c;
      s0[i + j] = c & mask;
      c >>= bpe;
    }
    s0[i + kx] = c;
  }
  mod_(s0, n);
  copy_(x, s0);
}

//return x with exactly k leading zero elements
function trim(x, k) {
  var i, y;
  for (i = x.length; i > 0 && !x[i - 1]; i--) {}
  y = new Array(i + k);
  copy_(y, x);
  return y;
}

//do x=x**y mod n, where x,y,n are bigInts and ** is exponentiation.  0**0=1.
//this is faster when n is odd.  x usually needs to have as many elements as n.
function powMod_(x, y, n) {
  var k1, k2, kn, np;
  if (s7.length != n.length) s7 = dup(n);

  //for even modulus, use a simple square-and-multiply algorithm,
  //rather than using the more complex Montgomery algorithm.
  if ((n[0] & 1) == 0) {
    copy_(s7, x);
    copyInt_(x, 1);
    while (!equalsInt(y, 0)) {
      if (y[0] & 1) multMod_(x, s7, n);
      divInt_(y, 2);
      squareMod_(s7, n);
    }
    return;
  }

  //calculate np from n for the Montgomery multiplications
  copyInt_(s7, 0);
  for (kn = n.length; kn > 0 && !n[kn - 1]; kn--) {}
  np = radix - inverseModInt(modInt(n, radix), radix);
  s7[kn] = 1;
  multMod_(x, s7, n); // x = x * 2**(kn*bp) mod n

  if (s3.length != x.length) s3 = dup(x);else copy_(s3, x);

  for (k1 = y.length - 1; k1 > 0 & !y[k1]; k1--) {} //k1=first nonzero element of y
  if (y[k1] == 0) {
    //anything to the 0th power is 1
    copyInt_(x, 1);
    return;
  }
  for (k2 = 1 << bpe - 1; k2 && !(y[k1] & k2); k2 >>= 1) {} //k2=position of first 1 bit in y[k1]
  for (;;) {
    if (!(k2 >>= 1)) {
      //look at next bit of y
      k1--;
      if (k1 < 0) {
        mont_(x, one, n, np);
        return;
      }
      k2 = 1 << bpe - 1;
    }
    mont_(x, x, n, np);

    if (k2 & y[k1]) //if next bit is a 1
      mont_(x, s3, n, np);
  }
}

//do x=x*y*Ri mod n for bigInts x,y,n,
//  where Ri = 2**(-kn*bpe) mod n, and kn is the
//  number of elements in the n array, not
//  counting leading zeros.
//x array must have at least as many elemnts as the n array
//It's OK if x and y are the same variable.
//must have:
//  x,y < n
//  n is odd
//  np = -(n^(-1)) mod radix
function mont_(x, y, n, np) {
  var i, j, c, ui, t, ks;
  var kn = n.length;
  var ky = y.length;

  if (sa.length != kn) sa = new Array(kn);

  copyInt_(sa, 0);

  for (; kn > 0 && n[kn - 1] == 0; kn--) {} //ignore leading zeros of n
  for (; ky > 0 && y[ky - 1] == 0; ky--) {} //ignore leading zeros of y
  ks = sa.length - 1; //sa will never have more than this many nonzero elements.

  //the following loop consumes 95% of the runtime for randTruePrime_() and powMod_() for large numbers
  for (i = 0; i < kn; i++) {
    t = sa[0] + x[i] * y[0];
    ui = (t & mask) * np & mask; //the inner "& mask" was needed on Safari (but not MSIE) at one time
    c = t + ui * n[0] >> bpe;
    t = x[i];

    //do sa=(sa+x[i]*y+ui*n)/b   where b=2**bpe.  Loop is unrolled 5-fold for speed
    j = 1;
    for (; j < ky - 4;) {
      c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
      c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
      c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
      c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
      c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
    }
    for (; j < ky;) {
      c += sa[j] + ui * n[j] + t * y[j];sa[j - 1] = c & mask;c >>= bpe;j++;
    }
    for (; j < kn - 4;) {
      c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
      c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
      c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
      c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
      c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
    }
    for (; j < kn;) {
      c += sa[j] + ui * n[j];sa[j - 1] = c & mask;c >>= bpe;j++;
    }
    for (; j < ks;) {
      c += sa[j];sa[j - 1] = c & mask;c >>= bpe;j++;
    }
    sa[j - 1] = c & mask;
  }

  if (!greater(n, sa)) sub_(sa, n);
  copy_(x, sa);
}

/***/ }),
/* 37 */
/***/ (function(module, exports) {


/**
 * slice() reference.
 */

var slice = Array.prototype.slice;

/**
 * Expose `co`.
 */

module.exports = co['default'] = co.co = co;

/**
 * Wrap the given generator `fn` into a
 * function that returns a promise.
 * This is a separate function so that
 * every `co()` call doesn't create a new,
 * unnecessary closure.
 *
 * @param {GeneratorFunction} fn
 * @return {Function}
 * @api public
 */

co.wrap = function (fn) {
  createPromise.__generatorFunction__ = fn;
  return createPromise;
  function createPromise() {
    return co.call(this, fn.apply(this, arguments));
  }
};

/**
 * Execute the generator function or a generator
 * and return a promise.
 *
 * @param {Function} fn
 * @return {Promise}
 * @api public
 */

function co(gen) {
  var ctx = this;
  var args = slice.call(arguments, 1)

  // we wrap everything in a promise to avoid promise chaining,
  // which leads to memory leak errors.
  // see https://github.com/tj/co/issues/180
  return new Promise(function(resolve, reject) {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();

    /**
     * @param {Mixed} res
     * @return {Promise}
     * @api private
     */

    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * @param {Error} err
     * @return {Promise}
     * @api private
     */

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * Get the next value in the generator,
     * return a promise.
     *
     * @param {Object} ret
     * @return {Promise}
     * @api private
     */

    function next(ret) {
      if (ret.done) return resolve(ret.value);
      var value = toPromise.call(ctx, ret.value);
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
        + 'but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}

/**
 * Convert a `yield`ed value into a promise.
 *
 * @param {Mixed} obj
 * @return {Promise}
 * @api private
 */

function toPromise(obj) {
  if (!obj) return obj;
  if (isPromise(obj)) return obj;
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
  if (isObject(obj)) return objectToPromise.call(this, obj);
  return obj;
}

/**
 * Convert a thunk to a promise.
 *
 * @param {Function}
 * @return {Promise}
 * @api private
 */

function thunkToPromise(fn) {
  var ctx = this;
  return new Promise(function (resolve, reject) {
    fn.call(ctx, function (err, res) {
      if (err) return reject(err);
      if (arguments.length > 2) res = slice.call(arguments, 1);
      resolve(res);
    });
  });
}

/**
 * Convert an array of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Array} obj
 * @return {Promise}
 * @api private
 */

function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this));
}

/**
 * Convert an object of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Object} obj
 * @return {Promise}
 * @api private
 */

function objectToPromise(obj){
  var results = new obj.constructor();
  var keys = Object.keys(obj);
  var promises = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise(promise)) defer(promise, key);
    else results[key] = obj[key];
  }
  return Promise.all(promises).then(function () {
    return results;
  });

  function defer(promise, key) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(promise.then(function (res) {
      results[key] = res;
    }));
  }
}

/**
 * Check if `obj` is a promise.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator(obj) {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
}

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */
function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGenerator(constructor.prototype);
}

/**
 * Check for plain object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject(val) {
  return Object == val.constructor;
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(111);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(168);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(177);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(254);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(29);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(295);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(343);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(94);


function MTProto(config = {}) {
  var mtproto = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */](config);
  return mtproto.api;
}

/* harmony default export */ __webpack_exports__["a"] = (MTProto);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(4).CryptoJS;
__webpack_require__(49);
__webpack_require__(52);
__webpack_require__(50);
__webpack_require__(48);
__webpack_require__(47);
__webpack_require__(53);
var JsonFormatter = __webpack_require__(51).JsonFormatter;

exports.CryptoJS = CryptoJS;
exports.JsonFormatter = JsonFormatter;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(4).CryptoJS;

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Lookup tables
    var SBOX = [];
    var INV_SBOX = [];
    var SUB_MIX_0 = [];
    var SUB_MIX_1 = [];
    var SUB_MIX_2 = [];
    var SUB_MIX_3 = [];
    var INV_SUB_MIX_0 = [];
    var INV_SUB_MIX_1 = [];
    var INV_SUB_MIX_2 = [];
    var INV_SUB_MIX_3 = [];

    // Compute lookup tables
    (function () {
        // Compute double table
        var d = [];
        for (var i = 0; i < 256; i++) {
            if (i < 128) {
                d[i] = i << 1;
            } else {
                d[i] = (i << 1) ^ 0x11b;
            }
        }

        // Walk GF(2^8)
        var x = 0;
        var xi = 0;
        for (var i = 0; i < 256; i++) {
            // Compute sbox
            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;

            // Compute multiplication
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];

            // Compute sub bytes, mix columns tables
            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
            SUB_MIX_3[x] = t;

            // Compute inv sub bytes, inv mix columns tables
            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
            INV_SUB_MIX_3[sx] = t;

            // Compute next counter
            if (!x) {
                x = xi = 1;
            } else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
            }
        }
    }());

    // Precomputed Rcon lookup
    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    /**
     * AES block cipher algorithm.
     */
    var AES = C_algo.AES = BlockCipher.extend({
        _doReset: function () {
            // Shortcuts
            var key = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;

            // Compute number of rounds
            var nRounds = this._nRounds = keySize + 6

            // Compute number of key schedule rows
            var ksRows = (nRounds + 1) * 4;

            // Compute key schedule
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                if (ksRow < keySize) {
                    keySchedule[ksRow] = keyWords[ksRow];
                } else {
                    var t = keySchedule[ksRow - 1];

                    if (!(ksRow % keySize)) {
                        // Rot word
                        t = (t << 8) | (t >>> 24);

                        // Sub word
                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

                        // Mix Rcon
                        t ^= RCON[(ksRow / keySize) | 0] << 24;
                    } else if (keySize > 6 && ksRow % keySize == 4) {
                        // Sub word
                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                    }

                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                }
            }

            // Compute inv key schedule
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                var ksRow = ksRows - invKsRow;

                if (invKsRow % 4) {
                    var t = keySchedule[ksRow];
                } else {
                    var t = keySchedule[ksRow - 4];
                }

                if (invKsRow < 4 || ksRow <= 4) {
                    invKeySchedule[invKsRow] = t;
                } else {
                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
                }
            }
        },

        encryptBlock: function (M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
        },

        decryptBlock: function (M, offset) {
            // Swap 2nd and 4th rows
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;

            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

            // Inv swap 2nd and 4th rows
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
        },

        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
            // Shortcut
            var nRounds = this._nRounds;

            // Get input, add round key
            var s0 = M[offset]     ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];

            // Key schedule row counter
            var ksRow = 4;

            // Rounds
            for (var round = 1; round < nRounds; round++) {
                // Shift rows, sub bytes, mix columns, add round key
                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

                // Update state
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
            }

            // Shift rows, sub bytes, add round key
            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

            // Set output
            M[offset]     = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
        },

        keySize: 256/32
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
     */
    C.AES = BlockCipher._createHelper(AES);
}());


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(4).CryptoJS;

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * Cipher core components.
 */
CryptoJS.lib.Cipher || (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var Base64 = C_enc.Base64;
    var C_algo = C.algo;
    var EvpKDF = C_algo.EvpKDF;

    /**
     * Abstract base cipher template.
     *
     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
     */
    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         *
         * @property {WordArray} iv The IV to use for this operation.
         */
        cfg: Base.extend(),

        /**
         * Creates this cipher in encryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
         */
        createEncryptor: function (key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
        },

        /**
         * Creates this cipher in decryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
         */
        createDecryptor: function (key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
        },

        /**
         * Initializes a newly created cipher.
         *
         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
         */
        init: function (xformMode, key, cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Store transform mode and key
            this._xformMode = xformMode;
            this._key = key;

            // Set initial values
            this.reset();
        },

        /**
         * Resets this cipher to its initial state.
         *
         * @example
         *
         *     cipher.reset();
         */
        reset: function () {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-cipher logic
            this._doReset();
        },

        /**
         * Adds data to be encrypted or decrypted.
         *
         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
         *
         * @return {WordArray} The data after processing.
         *
         * @example
         *
         *     var encrypted = cipher.process('data');
         *     var encrypted = cipher.process(wordArray);
         */
        process: function (dataUpdate) {
            // Append
            this._append(dataUpdate);

            // Process available blocks
            return this._process();
        },

        /**
         * Finalizes the encryption or decryption process.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
         *
         * @return {WordArray} The data after final processing.
         *
         * @example
         *
         *     var encrypted = cipher.finalize();
         *     var encrypted = cipher.finalize('data');
         *     var encrypted = cipher.finalize(wordArray);
         */
        finalize: function (dataUpdate) {
            // Final data update
            if (dataUpdate) {
                this._append(dataUpdate);
            }

            // Perform concrete-cipher logic
            var finalProcessedData = this._doFinalize();

            return finalProcessedData;
        },

        keySize: 128/32,

        ivSize: 128/32,

        _ENC_XFORM_MODE: 1,

        _DEC_XFORM_MODE: 2,

        /**
         * Creates shortcut functions to a cipher's object interface.
         *
         * @param {Cipher} cipher The cipher to create a helper for.
         *
         * @return {Object} An object with encrypt and decrypt shortcut functions.
         *
         * @static
         *
         * @example
         *
         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
         */
        _createHelper: (function () {
            function selectCipherStrategy(key) {
                if (typeof key == 'string') {
                    return PasswordBasedCipher;
                } else {
                    return SerializableCipher;
                }
            }

            return function (cipher) {
                return {
                    encrypt: function (message, key, cfg) {
                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                    },

                    decrypt: function (ciphertext, key, cfg) {
                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                    }
                };
            };
        }())
    });

    /**
     * Abstract base stream cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
     */
    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
        _doFinalize: function () {
            // Process partial blocks
            var finalProcessedBlocks = this._process(!!'flush');

            return finalProcessedBlocks;
        },

        blockSize: 1
    });

    /**
     * Mode namespace.
     */
    var C_mode = C.mode = {};

    /**
     * Abstract base block cipher mode template.
     */
    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
        /**
         * Creates this mode for encryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
         */
        createEncryptor: function (cipher, iv) {
            return this.Encryptor.create(cipher, iv);
        },

        /**
         * Creates this mode for decryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
         */
        createDecryptor: function (cipher, iv) {
            return this.Decryptor.create(cipher, iv);
        },

        /**
         * Initializes a newly created mode.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
         */
        init: function (cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
        }
    });

    /**
     * Cipher Block Chaining mode.
     */
    var CBC = C_mode.CBC = (function () {
        /**
         * Abstract base CBC mode.
         */
        var CBC = BlockCipherMode.extend();

        /**
         * CBC encryptor.
         */
        CBC.Encryptor = CBC.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                // XOR and encrypt
                xorBlock.call(this, words, offset, blockSize);
                cipher.encryptBlock(words, offset);

                // Remember this block to use with next block
                this._prevBlock = words.slice(offset, offset + blockSize);
            }
        });

        /**
         * CBC decryptor.
         */
        CBC.Decryptor = CBC.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                // Remember this block to use with next block
                var thisBlock = words.slice(offset, offset + blockSize);

                // Decrypt and XOR
                cipher.decryptBlock(words, offset);
                xorBlock.call(this, words, offset, blockSize);

                // This block becomes the previous block
                this._prevBlock = thisBlock;
            }
        });

        function xorBlock(words, offset, blockSize) {
            // Shortcut
            var iv = this._iv;

            // Choose mixing block
            if (iv) {
                var block = iv;

                // Remove IV for subsequent blocks
                this._iv = undefined;
            } else {
                var block = this._prevBlock;
            }

            // XOR blocks
            for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
            }
        }

        return CBC;
    }());

    /**
     * Infinite Garble Extension mode.
     */
    var IGE = C_mode.IGE = (function () {
        /**
         * Abstract base IGE mode.
         */
        var IGE = BlockCipherMode.extend();

        /**
         * IGE encryptor.
         */
        IGE.Encryptor = IGE.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                if (this._ivp === undefined) {
                  this._ivp = this._iv.slice(0, blockSize);
                  this._iv2p = this._iv.slice(blockSize, blockSize + blockSize);
                }


                // Remember this block to use with next block
                var nextIv2p = words.slice(offset, offset + blockSize);

                // XOR with previous ciphertext
                xorBlock(words, this._ivp, offset, blockSize);

                // Block cipher
                cipher.encryptBlock(words, offset);

                // XOR with previous plaintext
                xorBlock(words, this._iv2p, offset, blockSize);

                this._ivp = words.slice(offset, offset + blockSize);
                this._iv2p = nextIv2p;
            }
        });

        /**
         * IGE decryptor.
         */
        IGE.Decryptor = IGE.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                if (this._ivp === undefined) {
                  this._ivp = this._iv.slice(0, blockSize);
                  this._iv2p = this._iv.slice(blockSize, 2 * blockSize);
                }

                // Remember this block to use with next block
                var nextIvp = words.slice(offset, offset + blockSize);

                // XOR with previous ciphertext
                xorBlock(words, this._iv2p, offset, blockSize);

                // Block cipher
                cipher.decryptBlock(words, offset);

                // XOR with previous plaintext
                xorBlock(words, this._ivp, offset, blockSize);

                this._ivp = nextIvp;
                this._iv2p = words.slice(offset, offset + blockSize);
            }
        });

        function xorBlock(words, block, offset, blockSize) {
            for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
            }
        }

        return IGE;
    }());

    /**
     * Padding namespace.
     */
    var C_pad = C.pad = {};

    /**
     * PKCS #5/7 padding strategy.
     */
    var Pkcs7 = C_pad.Pkcs7 = {
        /**
         * Pads data using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to pad.
         * @param {number} blockSize The multiple that the data should be padded to.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
         */
        pad: function (data, blockSize) {
            // Shortcut
            var blockSizeBytes = blockSize * 4;

            // Count padding bytes
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

            // Create padding word
            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

            // Create padding
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
                paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);

            // Add padding
            data.concat(padding);
        },

        /**
         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to unpad.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
         */
        unpad: function (data) {
            // Get number of padding bytes from last byte
            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

            // Remove padding
            data.sigBytes -= nPaddingBytes;
        }
    };

    var NoPadding = C_pad.NoPadding = {
        pad: function () {
        },

        unpad: function () {
        }
    };


    /**
     * Abstract base block cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
     */
    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
        /**
         * Configuration options.
         *
         * @property {Mode} mode The block mode to use. Default: CBC
         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
         */
        cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
        }),

        reset: function () {
            // Reset cipher
            Cipher.reset.call(this);

            // Shortcuts
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;

            // Reset block mode
            if (this._xformMode == this._ENC_XFORM_MODE) {
                var modeCreator = mode.createEncryptor;
            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                var modeCreator = mode.createDecryptor;

                // Keep at least one block in the buffer for unpadding
                this._minBufferSize = 1;
            }
            this._mode = modeCreator.call(mode, this, iv && iv.words);
        },

        _doProcessBlock: function (words, offset) {
            this._mode.processBlock(words, offset);
        },

        _doFinalize: function () {
            // Shortcut
            var padding = this.cfg.padding;

            // Finalize
            if (this._xformMode == this._ENC_XFORM_MODE) {
                // Pad data
                padding.pad(this._data, this.blockSize);

                // Process final blocks
                var finalProcessedBlocks = this._process(!!'flush');
            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                // Process final blocks
                var finalProcessedBlocks = this._process(!!'flush');

                // Unpad data
                padding.unpad(finalProcessedBlocks);
            }

            return finalProcessedBlocks;
        },

        blockSize: 128/32
    });

    /**
     * A collection of cipher parameters.
     *
     * @property {WordArray} ciphertext The raw ciphertext.
     * @property {WordArray} key The key to this ciphertext.
     * @property {WordArray} iv The IV used in the ciphering operation.
     * @property {WordArray} salt The salt used with a key derivation function.
     * @property {Cipher} algorithm The cipher algorithm.
     * @property {Mode} mode The block mode used in the ciphering operation.
     * @property {Padding} padding The padding scheme used in the ciphering operation.
     * @property {number} blockSize The block size of the cipher.
     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
     */
    var CipherParams = C_lib.CipherParams = Base.extend({
        /**
         * Initializes a newly created cipher params object.
         *
         * @param {Object} cipherParams An object with any of the possible cipher parameters.
         *
         * @example
         *
         *     var cipherParams = CryptoJS.lib.CipherParams.create({
         *         ciphertext: ciphertextWordArray,
         *         key: keyWordArray,
         *         iv: ivWordArray,
         *         salt: saltWordArray,
         *         algorithm: CryptoJS.algo.AES,
         *         mode: CryptoJS.mode.CBC,
         *         padding: CryptoJS.pad.PKCS7,
         *         blockSize: 4,
         *         formatter: CryptoJS.format.OpenSSL
         *     });
         */
        init: function (cipherParams) {
            this.mixIn(cipherParams);
        },

        /**
         * Converts this cipher params object to a string.
         *
         * @param {Format} formatter (Optional) The formatting strategy to use.
         *
         * @return {string} The stringified cipher params.
         *
         * @throws Error If neither the formatter nor the default formatter is set.
         *
         * @example
         *
         *     var string = cipherParams + '';
         *     var string = cipherParams.toString();
         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
         */
        toString: function (formatter) {
            return (formatter || this.formatter).stringify(this);
        }
    });

    /**
     * Format namespace.
     */
    var C_format = C.format = {};

    /**
     * OpenSSL formatting strategy.
     */
    var OpenSSLFormatter = C_format.OpenSSL = {
        /**
         * Converts a cipher params object to an OpenSSL-compatible string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The OpenSSL-compatible string.
         *
         * @static
         *
         * @example
         *
         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
         */
        stringify: function (cipherParams) {
            // Shortcuts
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;

            // Format
            if (salt) {
                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
            } else {
                var wordArray = ciphertext;
            }

            return wordArray.toString(Base64);
        },

        /**
         * Converts an OpenSSL-compatible string to a cipher params object.
         *
         * @param {string} openSSLStr The OpenSSL-compatible string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
         */
        parse: function (openSSLStr) {
            // Parse base64
            var ciphertext = Base64.parse(openSSLStr);

            // Shortcut
            var ciphertextWords = ciphertext.words;

            // Test for salt
            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
                // Extract salt
                var salt = WordArray.create(ciphertextWords.slice(2, 4));

                // Remove salt from ciphertext
                ciphertextWords.splice(0, 4);
                ciphertext.sigBytes -= 16;
            }

            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
        }
    };

    /**
     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
     */
    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
        /**
         * Configuration options.
         *
         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
         */
        cfg: Base.extend({
            format: OpenSSLFormatter
        }),

        /**
         * Encrypts a message.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        encrypt: function (cipher, message, key, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Encrypt
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);

            // Shortcut
            var cipherCfg = encryptor.cfg;

            // Create and return serializable cipher params
            return CipherParams.create({
                ciphertext: ciphertext,
                key: key,
                iv: cipherCfg.iv,
                algorithm: cipher,
                mode: cipherCfg.mode,
                padding: cipherCfg.padding,
                blockSize: cipher.blockSize,
                formatter: cfg.format
            });
        },

        /**
         * Decrypts serialized ciphertext.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        decrypt: function (cipher, ciphertext, key, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Convert string to CipherParams
            ciphertext = this._parse(ciphertext, cfg.format);

            // Decrypt
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

            return plaintext;
        },

        /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * @param {CipherParams|string} ciphertext The ciphertext.
         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {CipherParams} The unserialized ciphertext.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         */
        _parse: function (ciphertext, format) {
            if (typeof ciphertext == 'string') {
                return format.parse(ciphertext, this);
            } else {
                return ciphertext;
            }
        }
    });

    /**
     * Key derivation function namespace.
     */
    var C_kdf = C.kdf = {};

    /**
     * OpenSSL key derivation function.
     */
    var OpenSSLKdf = C_kdf.OpenSSL = {
        /**
         * Derives a key and IV from a password.
         *
         * @param {string} password The password to derive from.
         * @param {number} keySize The size in words of the key to generate.
         * @param {number} ivSize The size in words of the IV to generate.
         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
         *
         * @return {CipherParams} A cipher params object with the key, IV, and salt.
         *
         * @static
         *
         * @example
         *
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
         */
        execute: function (password, keySize, ivSize, salt) {
            // Generate random salt
            if (!salt) {
                salt = WordArray.random(64/8);
            }

            // Derive key and IV
            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

            // Separate key and IV
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;

            // Return params
            return CipherParams.create({ key: key, iv: iv, salt: salt });
        }
    };

    /**
     * A serializable cipher wrapper that derives the key from a password,
     * and returns ciphertext as a serializable cipher params object.
     */
    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
        /**
         * Configuration options.
         *
         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
         */
        cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
        }),

        /**
         * Encrypts a message using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
         */
        encrypt: function (cipher, message, password, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Derive key and other params
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

            // Add IV to config
            cfg.iv = derivedParams.iv;

            // Encrypt
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

            // Mix in derived params
            ciphertext.mixIn(derivedParams);

            return ciphertext;
        },

        /**
         * Decrypts serialized ciphertext using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
         */
        decrypt: function (cipher, ciphertext, password, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Convert string to CipherParams
            ciphertext = this._parse(ciphertext, cfg.format);

            // Derive key and other params
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

            // Add IV to config
            cfg.iv = derivedParams.iv;

            // Decrypt
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

            return plaintext;
        }
    });
}());


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(4).CryptoJS;

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64 encoding strategy.
     */
    var Base64 = C_enc.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;

            // Clamp excess bits
            wordArray.clamp();

            // Convert
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                }
            }

            // Add padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                while (base64Chars.length % 4) {
                    base64Chars.push(paddingChar);
                }
            }

            return base64Chars.join('');
        },

        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function (base64Str) {
            // Shortcuts
            var base64StrLength = base64Str.length;
            var map = this._map;

            // Ignore padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex != -1) {
                    base64StrLength = paddingIndex;
                }
            }

            // Convert
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
                    var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }

            return WordArray.create(words, nBytes);
        },

        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };
}());


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(4).CryptoJS;

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var MD5 = C_algo.MD5;

    /**
     * This key derivation function is meant to conform with EVP_BytesToKey.
     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
     */
    var EvpKDF = C_algo.EvpKDF = Base.extend({
        /**
         * Configuration options.
         *
         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
         * @property {number} iterations The number of iterations to perform. Default: 1
         */
        cfg: Base.extend({
            keySize: 128/32,
            hasher: MD5,
            iterations: 1
        }),

        /**
         * Initializes a newly created key derivation function.
         *
         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
         *
         * @example
         *
         *     var kdf = CryptoJS.algo.EvpKDF.create();
         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
         */
        init: function (cfg) {
            this.cfg = this.cfg.extend(cfg);
        },

        /**
         * Derives a key from a password.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         *
         * @return {WordArray} The derived key.
         *
         * @example
         *
         *     var key = kdf.compute(password, salt);
         */
        compute: function (password, salt) {
            // Shortcut
            var cfg = this.cfg;

            // Init hasher
            var hasher = cfg.hasher.create();

            // Initial values
            var derivedKey = WordArray.create();

            // Shortcuts
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;

            // Generate key
            while (derivedKeyWords.length < keySize) {
                if (block) {
                    hasher.update(block);
                }
                var block = hasher.update(password).finalize(salt);
                hasher.reset();

                // Iterations
                for (var i = 1; i < iterations; i++) {
                    block = hasher.finalize(block);
                    hasher.reset();
                }

                derivedKey.concat(block);
            }
            derivedKey.sigBytes = keySize * 4;

            return derivedKey;
        }
    });

    /**
     * Derives a key from a password.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     * @param {Object} cfg (Optional) The configuration options to use for this computation.
     *
     * @return {WordArray} The derived key.
     *
     * @static
     *
     * @example
     *
     *     var key = CryptoJS.EvpKDF(password, salt);
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
     */
    C.EvpKDF = function (password, salt, cfg) {
        return EvpKDF.create(cfg).compute(password, salt);
    };
}());


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(4).CryptoJS;

// create custom json serialization format
var JsonFormatter = {
	stringify: function (cipherParams) {
		// create json object with ciphertext
		var jsonObj = {
			ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
		};
		
		// optionally add iv and salt
		if (cipherParams.iv) {
			jsonObj.iv = cipherParams.iv.toString();
		}
		
		if (cipherParams.salt) {
			jsonObj.s = cipherParams.salt.toString();
		}

		// stringify json object
		return JSON.stringify(jsonObj)
	},

	parse: function (jsonStr) {
		// parse json string
		var jsonObj = JSON.parse(jsonStr);
		
		// extract ciphertext from json object, and create cipher params object
		var cipherParams = CryptoJS.lib.CipherParams.create({
			ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
		});
		
		// optionally extract iv and salt
		if (jsonObj.iv) {
			cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
		}
            
		if (jsonObj.s) {
			cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
		}
		
		return cipherParams;
	}
};

exports.JsonFormatter = JsonFormatter;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(4).CryptoJS;

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Constants table
    var T = [];

    // Compute constants
    (function () {
        for (var i = 0; i < 64; i++) {
            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
        }
    }());

    /**
     * MD5 hash algorithm.
     */
    var MD5 = C_algo.MD5 = Hasher.extend({
        _doReset: function () {
            this._hash = new WordArray.init([
                0x67452301, 0xefcdab89,
                0x98badcfe, 0x10325476
            ]);
        },

        _doProcessBlock: function (M, offset) {
            // Swap endian
            for (var i = 0; i < 16; i++) {
                // Shortcuts
                var offset_i = offset + i;
                var M_offset_i = M[offset_i];

                M[offset_i] = (
                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
                );
            }

            // Shortcuts
            var H = this._hash.words;

            var M_offset_0  = M[offset + 0];
            var M_offset_1  = M[offset + 1];
            var M_offset_2  = M[offset + 2];
            var M_offset_3  = M[offset + 3];
            var M_offset_4  = M[offset + 4];
            var M_offset_5  = M[offset + 5];
            var M_offset_6  = M[offset + 6];
            var M_offset_7  = M[offset + 7];
            var M_offset_8  = M[offset + 8];
            var M_offset_9  = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];

            // Working varialbes
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];

            // Computation
            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
            d = II(d, a, b, c, M_offset_7,  10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5,  21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
            d = II(d, a, b, c, M_offset_3,  10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1,  21, T[55]);
            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6,  15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2,  15, T[62]);
            b = II(b, c, d, a, M_offset_9,  21, T[63]);

            // Intermediate hash value
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
        },

        _doFinalize: function () {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
            var nBitsTotalL = nBitsTotal;
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
            );
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
            );

            data.sigBytes = (dataWords.length + 1) * 4;

            // Hash final blocks
            this._process();

            // Shortcuts
            var hash = this._hash;
            var H = hash.words;

            // Swap endian
            for (var i = 0; i < 4; i++) {
                // Shortcut
                var H_i = H[i];

                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
            }

            // Return final computed hash
            return hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        }
    });

    function FF(a, b, c, d, x, s, t) {
        var n = a + ((b & c) | (~b & d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    }

    function GG(a, b, c, d, x, s, t) {
        var n = a + ((b & d) | (c & ~d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    }

    function HH(a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    }

    function II(a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    }

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.MD5('message');
     *     var hash = CryptoJS.MD5(wordArray);
     */
    C.MD5 = Hasher._createHelper(MD5);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacMD5(message, key);
     */
    C.HmacMD5 = Hasher._createHmacHelper(MD5);
}(Math));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var CryptoJS = __webpack_require__(4).CryptoJS;

(function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Initialization and round constants tables
    var H = [];
    var K = [];

    // Compute constants
    (function () {
        function isPrime(n) {
            var sqrtN = Math.sqrt(n);
            for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n % factor)) {
                    return false;
                }
            }

            return true;
        }

        function getFractionalBits(n) {
            return ((n - (n | 0)) * 0x100000000) | 0;
        }

        var n = 2;
        var nPrime = 0;
        while (nPrime < 64) {
            if (isPrime(n)) {
                if (nPrime < 8) {
                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                }
                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

                nPrime++;
            }

            n++;
        }
    }());

    // Reusable object
    var W = [];

    /**
     * SHA-256 hash algorithm.
     */
    var SHA256 = C_algo.SHA256 = Hasher.extend({
        _doReset: function () {
            this._hash = new WordArray.init(H.slice(0));
        },

        _doProcessBlock: function (M, offset) {
            // Shortcut
            var H = this._hash.words;

            // Working variables
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            var f = H[5];
            var g = H[6];
            var h = H[7];

            // Computation
            for (var i = 0; i < 64; i++) {
                if (i < 16) {
                    W[i] = M[offset + i] | 0;
                } else {
                    var gamma0x = W[i - 15];
                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
                                   (gamma0x >>> 3);

                    var gamma1x = W[i - 2];
                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
                                   (gamma1x >>> 10);

                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                }

                var ch  = (e & f) ^ (~e & g);
                var maj = (a & b) ^ (a & c) ^ (b & c);

                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

                var t1 = h + sigma1 + ch + K[i] + W[i];
                var t2 = sigma0 + maj;

                h = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
            }

            // Intermediate hash value
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
            H[4] = (H[4] + e) | 0;
            H[5] = (H[5] + f) | 0;
            H[6] = (H[6] + g) | 0;
            H[7] = (H[7] + h) | 0;
        },

        _doFinalize: function () {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;

            // Hash final blocks
            this._process();

            // Return final computed hash
            return this._hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA256('message');
     *     var hash = CryptoJS.SHA256(wordArray);
     */
    C.SHA256 = Hasher._createHelper(SHA256);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA256(message, key);
     */
    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
}(Math));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KNOWN_TYPES = ['undefined', 'string', 'number', 'object', 'function', 'boolean', 'symbol'];

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    inline: function (it, keyword, schema) {
      var data = 'data' + (it.dataLevel || '');
      if (typeof schema == 'string') return 'typeof ' + data + ' == "' + schema + '"';
      schema = 'validate.schema' + it.schemaPath + '.' + keyword;
      return schema + '.indexOf(typeof ' + data + ') >= 0';
    },
    metaSchema: {
      anyOf: [
        {
          type: 'string',
          enum: KNOWN_TYPES
        },
        {
          type: 'array',
          items: {
            type: 'string',
            enum: KNOWN_TYPES
          }
        }
      ]
    }
  };

  ajv.addKeyword('typeof', defFunc.definition);
  return ajv;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compileSchema = __webpack_require__(60)
  , resolve = __webpack_require__(23)
  , Cache = __webpack_require__(56)
  , SchemaObject = __webpack_require__(24)
  , stableStringify = __webpack_require__(18)
  , formats = __webpack_require__(59)
  , rules = __webpack_require__(61)
  , v5 = __webpack_require__(85)
  , util = __webpack_require__(6)
  , async = __webpack_require__(21)
  , co = __webpack_require__(37);

module.exports = Ajv;

Ajv.prototype.compileAsync = async.compile;

var customKeyword = __webpack_require__(82);
Ajv.prototype.addKeyword = customKeyword.add;
Ajv.prototype.getKeyword = customKeyword.get;
Ajv.prototype.removeKeyword = customKeyword.remove;
Ajv.ValidationError = __webpack_require__(25);

var META_SCHEMA_ID = 'http://json-schema.org/draft-04/schema';
var SCHEMA_URI_FORMAT = /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i;
function SCHEMA_URI_FORMAT_FUNC(str) {
  return SCHEMA_URI_FORMAT.test(str);
}

var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes' ];

/**
 * Creates validator instance.
 * Usage: `Ajv(opts)`
 * @param {Object} opts optional options
 * @return {Object} ajv instance
 */
function Ajv(opts) {
  if (!(this instanceof Ajv)) return new Ajv(opts);
  var self = this;

  opts = this._opts = util.copy(opts) || {};
  this._schemas = {};
  this._refs = {};
  this._fragments = {};
  this._formats = formats(opts.format);
  this._cache = opts.cache || new Cache;
  this._loadingSchemas = {};
  this._compilations = [];
  this.RULES = rules();

  // this is done on purpose, so that methods are bound to the instance
  // (without using bind) so that they can be used without the instance
  this.validate = validate;
  this.compile = compile;
  this.addSchema = addSchema;
  this.addMetaSchema = addMetaSchema;
  this.validateSchema = validateSchema;
  this.getSchema = getSchema;
  this.removeSchema = removeSchema;
  this.addFormat = addFormat;
  this.errorsText = errorsText;

  this._addSchema = _addSchema;
  this._compile = _compile;

  opts.loopRequired = opts.loopRequired || Infinity;
  if (opts.async || opts.transpile) async.setup(opts);
  if (opts.beautify === true) opts.beautify = { indent_size: 2 };
  if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
  this._metaOpts = getMetaSchemaOptions();

  if (opts.formats) addInitialFormats();
  addDraft4MetaSchema();
  if (opts.v5) v5.enable(this);
  if (typeof opts.meta == 'object') addMetaSchema(opts.meta);
  addInitialSchemas();


  /**
   * Validate data using schema
   * Schema will be compiled and cached (using serialized JSON as key. [json-stable-stringify](https://github.com/substack/json-stable-stringify) is used to serialize.
   * @param  {String|Object} schemaKeyRef key, ref or schema object
   * @param  {Any} data to be validated
   * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
   */
  function validate(schemaKeyRef, data) {
    var v;
    if (typeof schemaKeyRef == 'string') {
      v = getSchema(schemaKeyRef);
      if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
    } else {
      var schemaObj = _addSchema(schemaKeyRef);
      v = schemaObj.validate || _compile(schemaObj);
    }

    var valid = v(data);
    if (v.$async === true)
      return self._opts.async == '*' ? co(valid) : valid;
    self.errors = v.errors;
    return valid;
  }


  /**
   * Create validating function for passed schema.
   * @param  {Object} schema schema object
   * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
   * @return {Function} validating function
   */
  function compile(schema, _meta) {
    var schemaObj = _addSchema(schema, undefined, _meta);
    return schemaObj.validate || _compile(schemaObj);
  }


  /**
   * Adds schema to the instance.
   * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
   * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
   * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
   * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
   */
  function addSchema(schema, key, _skipValidation, _meta) {
    if (Array.isArray(schema)){
      for (var i=0; i<schema.length; i++) addSchema(schema[i], undefined, _skipValidation, _meta);
      return;
    }
    // can key/id have # inside?
    key = resolve.normalizeId(key || schema.id);
    checkUnique(key);
    self._schemas[key] = _addSchema(schema, _skipValidation, _meta, true);
  }


  /**
   * Add schema that will be used to validate other schemas
   * options in META_IGNORE_OPTIONS are alway set to false
   * @param {Object} schema schema object
   * @param {String} key optional schema key
   * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
   */
  function addMetaSchema(schema, key, skipValidation) {
    addSchema(schema, key, skipValidation, true);
  }


  /**
   * Validate schema
   * @param {Object} schema schema to validate
   * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
   * @return {Boolean} true if schema is valid
   */
  function validateSchema(schema, throwOrLogError) {
    var $schema = schema.$schema || self._opts.defaultMeta || defaultMeta();
    var currentUriFormat = self._formats.uri;
    self._formats.uri = typeof currentUriFormat == 'function'
                        ? SCHEMA_URI_FORMAT_FUNC
                        : SCHEMA_URI_FORMAT;
    var valid;
    try { valid = validate($schema, schema); }
    finally { self._formats.uri = currentUriFormat; }
    if (!valid && throwOrLogError) {
      var message = 'schema is invalid: ' + errorsText();
      if (self._opts.validateSchema == 'log') console.error(message);
      else throw new Error(message);
    }
    return valid;
  }


  function defaultMeta() {
    var meta = self._opts.meta;
    self._opts.defaultMeta = typeof meta == 'object'
                              ? meta.id || meta
                              : self._opts.v5
                                ? v5.META_SCHEMA_ID
                                : META_SCHEMA_ID;
    return self._opts.defaultMeta;
  }


  /**
   * Get compiled schema from the instance by `key` or `ref`.
   * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
   * @return {Function} schema validating function (with property `schema`).
   */
  function getSchema(keyRef) {
    var schemaObj = _getSchemaObj(keyRef);
    switch (typeof schemaObj) {
      case 'object': return schemaObj.validate || _compile(schemaObj);
      case 'string': return getSchema(schemaObj);
      case 'undefined': return _getSchemaFragment(keyRef);
    }
  }


  function _getSchemaFragment(ref) {
    var res = resolve.schema.call(self, { schema: {} }, ref);
    if (res) {
      var schema = res.schema
        , root = res.root
        , baseId = res.baseId;
      var v = compileSchema.call(self, schema, root, undefined, baseId);
      self._fragments[ref] = new SchemaObject({
        ref: ref,
        fragment: true,
        schema: schema,
        root: root,
        baseId: baseId,
        validate: v
      });
      return v;
    }
  }


  function _getSchemaObj(keyRef) {
    keyRef = resolve.normalizeId(keyRef);
    return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
  }


  /**
   * Remove cached schema(s).
   * If no parameter is passed all schemas but meta-schemas are removed.
   * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
   * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
   * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
   */
  function removeSchema(schemaKeyRef) {
    if (schemaKeyRef instanceof RegExp) {
      _removeAllSchemas(self._schemas, schemaKeyRef);
      _removeAllSchemas(self._refs, schemaKeyRef);
      return;
    }
    switch (typeof schemaKeyRef) {
      case 'undefined':
        _removeAllSchemas(self._schemas);
        _removeAllSchemas(self._refs);
        self._cache.clear();
        return;
      case 'string':
        var schemaObj = _getSchemaObj(schemaKeyRef);
        if (schemaObj) self._cache.del(schemaObj.jsonStr);
        delete self._schemas[schemaKeyRef];
        delete self._refs[schemaKeyRef];
        return;
      case 'object':
        var jsonStr = stableStringify(schemaKeyRef);
        self._cache.del(jsonStr);
        var id = schemaKeyRef.id;
        if (id) {
          id = resolve.normalizeId(id);
          delete self._schemas[id];
          delete self._refs[id];
        }
    }
  }


  function _removeAllSchemas(schemas, regex) {
    for (var keyRef in schemas) {
      var schemaObj = schemas[keyRef];
      if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
        self._cache.del(schemaObj.jsonStr);
        delete schemas[keyRef];
      }
    }
  }


  function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
    if (typeof schema != 'object') throw new Error('schema should be object');
    var jsonStr = stableStringify(schema);
    var cached = self._cache.get(jsonStr);
    if (cached) return cached;

    shouldAddSchema = shouldAddSchema || self._opts.addUsedSchema !== false;

    var id = resolve.normalizeId(schema.id);
    if (id && shouldAddSchema) checkUnique(id);

    var willValidate = self._opts.validateSchema !== false && !skipValidation;
    var recursiveMeta;
    if (willValidate && !(recursiveMeta = schema.id && schema.id == schema.$schema))
      validateSchema(schema, true);

    var localRefs = resolve.ids.call(self, schema);

    var schemaObj = new SchemaObject({
      id: id,
      schema: schema,
      localRefs: localRefs,
      jsonStr: jsonStr,
      meta: meta
    });

    if (id[0] != '#' && shouldAddSchema) self._refs[id] = schemaObj;
    self._cache.put(jsonStr, schemaObj);

    if (willValidate && recursiveMeta) validateSchema(schema, true);

    return schemaObj;
  }


  function _compile(schemaObj, root) {
    if (schemaObj.compiling) {
      schemaObj.validate = callValidate;
      callValidate.schema = schemaObj.schema;
      callValidate.errors = null;
      callValidate.root = root ? root : callValidate;
      if (schemaObj.schema.$async === true)
        callValidate.$async = true;
      return callValidate;
    }
    schemaObj.compiling = true;

    var currentOpts;
    if (schemaObj.meta) {
      currentOpts = self._opts;
      self._opts = self._metaOpts;
    }

    var v;
    try { v = compileSchema.call(self, schemaObj.schema, root, schemaObj.localRefs); }
    finally {
      schemaObj.compiling = false;
      if (schemaObj.meta) self._opts = currentOpts;
    }

    schemaObj.validate = v;
    schemaObj.refs = v.refs;
    schemaObj.refVal = v.refVal;
    schemaObj.root = v.root;
    return v;


    function callValidate() {
      var _validate = schemaObj.validate;
      var result = _validate.apply(null, arguments);
      callValidate.errors = _validate.errors;
      return result;
    }
  }


  /**
   * Convert array of error message objects to string
   * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
   * @param  {Object} options optional options with properties `separator` and `dataVar`.
   * @return {String} human readable string with all errors descriptions
   */
  function errorsText(errors, options) {
    errors = errors || self.errors;
    if (!errors) return 'No errors';
    options = options || {};
    var separator = options.separator === undefined ? ', ' : options.separator;
    var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

    var text = '';
    for (var i=0; i<errors.length; i++) {
      var e = errors[i];
      if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
    }
    return text.slice(0, -separator.length);
  }


  /**
   * Add custom format
   * @param {String} name format name
   * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
   */
  function addFormat(name, format) {
    if (typeof format == 'string') format = new RegExp(format);
    self._formats[name] = format;
  }


  function addDraft4MetaSchema() {
    if (self._opts.meta !== false) {
      var metaSchema = __webpack_require__(83);
      addMetaSchema(metaSchema, META_SCHEMA_ID, true);
      self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
    }
  }


  function addInitialSchemas() {
    var optsSchemas = self._opts.schemas;
    if (!optsSchemas) return;
    if (Array.isArray(optsSchemas)) addSchema(optsSchemas);
    else for (var key in optsSchemas) addSchema(optsSchemas[key], key);
  }


  function addInitialFormats() {
    for (var name in self._opts.formats) {
      var format = self._opts.formats[name];
      addFormat(name, format);
    }
  }


  function checkUnique(id) {
    if (self._schemas[id] || self._refs[id])
      throw new Error('schema with key or id "' + id + '" already exists');
  }


  function getMetaSchemaOptions() {
    var metaOpts = util.copy(self._opts);
    for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
      delete metaOpts[META_IGNORE_OPTIONS[i]];
    return metaOpts;
  }
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var Cache = module.exports = function Cache() {
  this._cache = {};
};


Cache.prototype.put = function Cache_put(key, value) {
  this._cache[key] = value;
};


Cache.prototype.get = function Cache_get(key) {
  return this._cache[key];
};


Cache.prototype.del = function Cache_del(key) {
  delete this._cache[key];
};


Cache.prototype.clear = function Cache_clear() {
  this._cache = {};
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 57;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//all requires must be explicit because browserify won't work with dynamic requires
module.exports = {
  '$ref': __webpack_require__(78),
  allOf: __webpack_require__(64),
  anyOf: __webpack_require__(65),
  dependencies: __webpack_require__(68),
  'enum': __webpack_require__(69),
  format: __webpack_require__(70),
  items: __webpack_require__(71),
  maximum: __webpack_require__(26),
  minimum: __webpack_require__(26),
  maxItems: __webpack_require__(27),
  minItems: __webpack_require__(27),
  maxLength: __webpack_require__(28),
  minLength: __webpack_require__(28),
  maxProperties: __webpack_require__(29),
  minProperties: __webpack_require__(29),
  multipleOf: __webpack_require__(72),
  not: __webpack_require__(73),
  oneOf: __webpack_require__(74),
  pattern: __webpack_require__(75),
  properties: __webpack_require__(77),
  required: __webpack_require__(79),
  uniqueItems: __webpack_require__(81),
  validate: __webpack_require__(30)
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(6);

var DATE = /^\d\d\d\d-(\d\d)-(\d\d)$/;
var DAYS = [0,31,29,31,30,31,30,31,31,30,31,30,31];
var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
var HOSTNAME = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?(?:\#(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?$/i;
var UUID = /^(?:urn\:uuid\:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
var JSON_POINTER = /^(?:\/(?:[^~\/]|~0|~1)*)*$|^\#(?:\/(?:[a-z0-9_\-\.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:\#|(?:\/(?:[^~\/]|~0|~1)*)*)$/;


module.exports = formats;

function formats(mode) {
  mode = mode == 'full' ? 'full' : 'fast';
  var formatDefs = util.copy(formats[mode]);
  for (var fName in formats.compare) {
    formatDefs[fName] = {
      validate: formatDefs[fName],
      compare: formats.compare[fName]
    };
  }
  return formatDefs;
}


formats.fast = {
  // date: http://tools.ietf.org/html/rfc3339#section-5.6
  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
  time: /^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
  'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
  // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
  uri: /^(?:[a-z][a-z0-9+-.]*)?(?:\:|\/)\/?[^\s]*$/i,
  // email (sources from jsen validator):
  // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
  // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
  email: /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  hostname: HOSTNAME,
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: regex,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: UUID,
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  'json-pointer': JSON_POINTER,
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  'relative-json-pointer': RELATIVE_JSON_POINTER
};


formats.full = {
  date: date,
  time: time,
  'date-time': date_time,
  uri: uri,
  email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: hostname,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: regex,
  uuid: UUID,
  'json-pointer': JSON_POINTER,
  'relative-json-pointer': RELATIVE_JSON_POINTER
};


formats.compare = {
  date: compareDate,
  time: compareTime,
  'date-time': compareDateTime
};


function date(str) {
  // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
  var matches = str.match(DATE);
  if (!matches) return false;

  var month = +matches[1];
  var day = +matches[2];
  return month >= 1 && month <= 12 && day >= 1 && day <= DAYS[month];
}


function time(str, full) {
  var matches = str.match(TIME);
  if (!matches) return false;

  var hour = matches[1];
  var minute = matches[2];
  var second = matches[3];
  var timeZone = matches[5];
  return hour <= 23 && minute <= 59 && second <= 59 && (!full || timeZone);
}


var DATE_TIME_SEPARATOR = /t|\s/i;
function date_time(str) {
  // http://tools.ietf.org/html/rfc3339#section-5.6
  var dateTime = str.split(DATE_TIME_SEPARATOR);
  return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
}


function hostname(str) {
  // https://tools.ietf.org/html/rfc1034#section-3.5
  // https://tools.ietf.org/html/rfc1123#section-2
  return str.length <= 255 && HOSTNAME.test(str);
}


var NOT_URI_FRAGMENT = /\/|\:/;
function uri(str) {
  // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}


function regex(str) {
  try {
    new RegExp(str);
    return true;
  } catch(e) {
    return false;
  }
}


function compareDate(d1, d2) {
  if (!(d1 && d2)) return;
  if (d1 > d2) return 1;
  if (d1 < d2) return -1;
  if (d1 === d2) return 0;
}


function compareTime(t1, t2) {
  if (!(t1 && t2)) return;
  t1 = t1.match(TIME);
  t2 = t2.match(TIME);
  if (!(t1 && t2)) return;
  t1 = t1[1] + t1[2] + t1[3] + (t1[4]||'');
  t2 = t2[1] + t2[2] + t2[3] + (t2[4]||'');
  if (t1 > t2) return 1;
  if (t1 < t2) return -1;
  if (t1 === t2) return 0;
}


function compareDateTime(dt1, dt2) {
  if (!(dt1 && dt2)) return;
  dt1 = dt1.split(DATE_TIME_SEPARATOR);
  dt2 = dt2.split(DATE_TIME_SEPARATOR);
  var res = compareDate(dt1[0], dt2[0]);
  if (res === undefined) return;
  return res || compareTime(dt1[1], dt2[1]);
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolve = __webpack_require__(23)
  , util = __webpack_require__(6)
  , stableStringify = __webpack_require__(18)
  , async = __webpack_require__(21);

var beautify;

function loadBeautify(){
  if (beautify === undefined) {
    var name = 'js-beautify';
    try { beautify = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).js_beautify; }
    catch(e) { beautify = false; }
  }
}

var validateGenerator = __webpack_require__(30);

/**
 * Functions below are used inside compiled validations function
 */

var co = __webpack_require__(37);
var ucs2length = util.ucs2length;
var equal = __webpack_require__(22);

// this error is thrown by async schemas to return validation errors via exception
var ValidationError = __webpack_require__(25);

module.exports = compile;


/**
 * Compiles schema to validation function
 * @this   Ajv
 * @param  {Object} schema schema object
 * @param  {Object} root object with information about the root schema for this schema
 * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
 * @param  {String} baseId base ID for IDs in the schema
 * @return {Function} validation function
 */
function compile(schema, root, localRefs, baseId) {
  /* jshint validthis: true, evil: true */
  /* eslint no-shadow: 0 */
  var self = this
    , opts = this._opts
    , refVal = [ undefined ]
    , refs = {}
    , patterns = []
    , patternsHash = {}
    , defaults = []
    , defaultsHash = {}
    , customRules = []
    , keepSourceCode = opts.sourceCode !== false;

  root = root || { schema: schema, refVal: refVal, refs: refs };

  var c = checkCompiling.call(this, schema, root, baseId);
  var compilation = this._compilations[c.index];
  if (c.compiling) return (compilation.callValidate = callValidate);

  var formats = this._formats;
  var RULES = this.RULES;

  try {
    var v = localCompile(schema, root, localRefs, baseId);
    compilation.validate = v;
    var cv = compilation.callValidate;
    if (cv) {
      cv.schema = v.schema;
      cv.errors = null;
      cv.refs = v.refs;
      cv.refVal = v.refVal;
      cv.root = v.root;
      cv.$async = v.$async;
      if (keepSourceCode) cv.sourceCode = v.sourceCode;
    }
    return v;
  } finally {
    endCompiling.call(this, schema, root, baseId);
  }

  function callValidate() {
    var validate = compilation.validate;
    var result = validate.apply(null, arguments);
    callValidate.errors = validate.errors;
    return result;
  }

  function localCompile(_schema, _root, localRefs, baseId) {
    var isRoot = !_root || (_root && _root.schema == _schema);
    if (_root.schema != root.schema)
      return compile.call(self, _schema, _root, localRefs, baseId);

    var $async = _schema.$async === true;
    if ($async && !opts.transpile) async.setup(opts);

    var sourceCode = validateGenerator({
      isTop: true,
      schema: _schema,
      isRoot: isRoot,
      baseId: baseId,
      root: _root,
      schemaPath: '',
      errSchemaPath: '#',
      errorPath: '""',
      RULES: RULES,
      validate: validateGenerator,
      util: util,
      resolve: resolve,
      resolveRef: resolveRef,
      usePattern: usePattern,
      useDefault: useDefault,
      useCustomRule: useCustomRule,
      opts: opts,
      formats: formats,
      self: self
    });

    sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode)
                   + vars(defaults, defaultCode) + vars(customRules, customRuleCode)
                   + sourceCode;

    if (opts.beautify) {
      loadBeautify();
      /* istanbul ignore else */
      if (beautify) sourceCode = beautify(sourceCode, opts.beautify);
      else console.error('"npm install js-beautify" to use beautify option');
    }
    // console.log('\n\n\n *** \n', sourceCode);
    var validate, validateCode
      , transpile = opts._transpileFunc;
    try {
      validateCode = $async && transpile
                      ? transpile(sourceCode)
                      : sourceCode;

      var makeValidate = new Function(
        'self',
        'RULES',
        'formats',
        'root',
        'refVal',
        'defaults',
        'customRules',
        'co',
        'equal',
        'ucs2length',
        'ValidationError',
        validateCode
      );

      validate = makeValidate(
        self,
        RULES,
        formats,
        root,
        refVal,
        defaults,
        customRules,
        co,
        equal,
        ucs2length,
        ValidationError
      );

      refVal[0] = validate;
    } catch(e) {
      console.error('Error compiling schema, function code:', validateCode);
      throw e;
    }

    validate.schema = _schema;
    validate.errors = null;
    validate.refs = refs;
    validate.refVal = refVal;
    validate.root = isRoot ? validate : _root;
    if ($async) validate.$async = true;
    if (keepSourceCode) validate.sourceCode = sourceCode;
    if (opts.sourceCode === true) {
      validate.source = {
        patterns: patterns,
        defaults: defaults
      };
    }

    return validate;
  }

  function resolveRef(baseId, ref, isRoot) {
    ref = resolve.url(baseId, ref);
    var refIndex = refs[ref];
    var _refVal, refCode;
    if (refIndex !== undefined) {
      _refVal = refVal[refIndex];
      refCode = 'refVal[' + refIndex + ']';
      return resolvedRef(_refVal, refCode);
    }
    if (!isRoot && root.refs) {
      var rootRefId = root.refs[ref];
      if (rootRefId !== undefined) {
        _refVal = root.refVal[rootRefId];
        refCode = addLocalRef(ref, _refVal);
        return resolvedRef(_refVal, refCode);
      }
    }

    refCode = addLocalRef(ref);
    var v = resolve.call(self, localCompile, root, ref);
    if (!v) {
      var localSchema = localRefs && localRefs[ref];
      if (localSchema) {
        v = resolve.inlineRef(localSchema, opts.inlineRefs)
            ? localSchema
            : compile.call(self, localSchema, root, localRefs, baseId);
      }
    }

    if (v) {
      replaceLocalRef(ref, v);
      return resolvedRef(v, refCode);
    }
  }

  function addLocalRef(ref, v) {
    var refId = refVal.length;
    refVal[refId] = v;
    refs[ref] = refId;
    return 'refVal' + refId;
  }

  function replaceLocalRef(ref, v) {
    var refId = refs[ref];
    refVal[refId] = v;
  }

  function resolvedRef(refVal, code) {
    return typeof refVal == 'object'
            ? { code: code, schema: refVal, inline: true }
            : { code: code, $async: refVal && refVal.$async };
  }

  function usePattern(regexStr) {
    var index = patternsHash[regexStr];
    if (index === undefined) {
      index = patternsHash[regexStr] = patterns.length;
      patterns[index] = regexStr;
    }
    return 'pattern' + index;
  }

  function useDefault(value) {
    switch (typeof value) {
      case 'boolean':
      case 'number':
        return '' + value;
      case 'string':
        return util.toQuotedString(value);
      case 'object':
        if (value === null) return 'null';
        var valueStr = stableStringify(value);
        var index = defaultsHash[valueStr];
        if (index === undefined) {
          index = defaultsHash[valueStr] = defaults.length;
          defaults[index] = value;
        }
        return 'default' + index;
    }
  }

  function useCustomRule(rule, schema, parentSchema, it) {
    var validateSchema = rule.definition.validateSchema;
    if (validateSchema && self._opts.validateSchema !== false) {
      var valid = validateSchema(schema);
      if (!valid) {
        var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
        if (self._opts.validateSchema == 'log') console.error(message);
        else throw new Error(message);
      }
    }

    var compile = rule.definition.compile
      , inline = rule.definition.inline
      , macro = rule.definition.macro;

    var validate;
    if (compile) {
      validate = compile.call(self, schema, parentSchema, it);
    } else if (macro) {
      validate = macro.call(self, schema, parentSchema, it);
      if (opts.validateSchema !== false) self.validateSchema(validate, true);
    } else if (inline) {
      validate = inline.call(self, it, rule.keyword, schema, parentSchema);
    } else {
      validate = rule.definition.validate;
    }

    var index = customRules.length;
    customRules[index] = validate;

    return {
      code: 'customRule' + index,
      validate: validate
    };
  }
}


/**
 * Checks if the schema is currently compiled
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
 */
function checkCompiling(schema, root, baseId) {
  /* jshint validthis: true */
  var index = compIndex.call(this, schema, root, baseId);
  if (index >= 0) return { index: index, compiling: true };
  index = this._compilations.length;
  this._compilations[index] = {
    schema: schema,
    root: root,
    baseId: baseId
  };
  return { index: index, compiling: false };
}


/**
 * Removes the schema from the currently compiled list
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 */
function endCompiling(schema, root, baseId) {
  /* jshint validthis: true */
  var i = compIndex.call(this, schema, root, baseId);
  if (i >= 0) this._compilations.splice(i, 1);
}


/**
 * Index of schema compilation in the currently compiled list
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 * @return {Integer} compilation index
 */
function compIndex(schema, root, baseId) {
  /* jshint validthis: true */
  for (var i=0; i<this._compilations.length; i++) {
    var c = this._compilations[i];
    if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
  }
  return -1;
}


function patternCode(i, patterns) {
  return 'var pattern' + i + ' = new RegExp(' + util.toQuotedString(patterns[i]) + ');';
}


function defaultCode(i) {
  return 'var default' + i + ' = defaults[' + i + '];';
}


function refValCode(i, refVal) {
  return refVal[i] ? 'var refVal' + i + ' = refVal[' + i + '];' : '';
}


function customRuleCode(i) {
  return 'var customRule' + i + ' = customRules[' + i + '];';
}


function vars(arr, statement) {
  if (!arr.length) return '';
  var code = '';
  for (var i=0; i<arr.length; i++)
    code += statement(i, arr);
  return code;
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ruleModules = __webpack_require__(58)
  , toHash = __webpack_require__(6).toHash;

module.exports = function rules() {
  var RULES = [
    { type: 'number',
      rules: [ 'maximum', 'minimum', 'multipleOf'] },
    { type: 'string',
      rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
    { type: 'array',
      rules: [ 'maxItems', 'minItems', 'uniqueItems', 'items' ] },
    { type: 'object',
      rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'properties' ] },
    { rules: [ '$ref', 'enum', 'not', 'anyOf', 'oneOf', 'allOf' ] }
  ];

  var ALL = [ 'type', 'additionalProperties', 'patternProperties' ];
  var KEYWORDS = [ 'additionalItems', '$schema', 'id', 'title', 'description', 'default' ];
  var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
  RULES.all = toHash(ALL);

  RULES.forEach(function (group) {
    group.rules = group.rules.map(function (keyword) {
      ALL.push(keyword);
      var rule = RULES.all[keyword] = {
        keyword: keyword,
        code: ruleModules[keyword]
      };
      return rule;
    });
  });

  RULES.keywords = toHash(ALL.concat(KEYWORDS));
  RULES.types = toHash(TYPES);
  RULES.custom = {};

  return RULES;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://mathiasbynens.be/notes/javascript-encoding
// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
module.exports = function ucs2length(str) {
  var length = 0
    , len = str.length
    , pos = 0
    , value;
  while (pos < len) {
    length++;
    value = str.charCodeAt(pos++);
    if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
      // high surrogate, and there is a next character
      value = str.charCodeAt(pos);
      if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
    }
  }
  return length;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__formatLimit(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  out += 'var ' + ($valid) + ' = undefined;';
  if (it.opts.format === false) {
    out += ' ' + ($valid) + ' = true; ';
    return out;
  }
  var $schemaFormat = it.schema.format,
    $isDataFormat = it.opts.v5 && $schemaFormat.$data,
    $closingBraces = '';
  if ($isDataFormat) {
    var $schemaValueFormat = it.util.getData($schemaFormat.$data, $dataLvl, it.dataPathArr),
      $format = 'format' + $lvl,
      $compare = 'compare' + $lvl;
    out += ' var ' + ($format) + ' = formats[' + ($schemaValueFormat) + '] , ' + ($compare) + ' = ' + ($format) + ' && ' + ($format) + '.compare;';
  } else {
    var $format = it.formats[$schemaFormat];
    if (!($format && $format.compare)) {
      out += '  ' + ($valid) + ' = true; ';
      return out;
    }
    var $compare = 'formats' + it.util.getProperty($schemaFormat) + '.compare';
  }
  var $isMax = $keyword == 'formatMaximum',
    $exclusiveKeyword = 'formatExclusive' + ($isMax ? 'Maximum' : 'Minimum'),
    $schemaExcl = it.schema[$exclusiveKeyword],
    $isDataExcl = it.opts.v5 && $schemaExcl && $schemaExcl.$data,
    $op = $isMax ? '<' : '>',
    $result = 'result' + $lvl;
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
      $exclusive = 'exclusive' + $lvl,
      $opExpr = 'op' + $lvl,
      $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' if (typeof ' + ($schemaValueExcl) + ' != \'boolean\' && ' + ($schemaValueExcl) + ' !== undefined) { ' + ($valid) + ' = false; ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_formatExclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }  ';
    if ($breakOnError) {
      $closingBraces += '}';
      out += ' else { ';
    }
    if ($isData) {
      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
      $closingBraces += '}';
    }
    if ($isDataFormat) {
      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
      $closingBraces += '}';
    }
    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; var ' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true; if (' + ($valid) + ' === undefined) { ' + ($valid) + ' = ' + ($exclusive) + ' ? ' + ($result) + ' ' + ($op) + ' 0 : ' + ($result) + ' ' + ($op) + '= 0; } if (!' + ($valid) + ') var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
  } else {
    var $exclusive = $schemaExcl === true,
      $opStr = $op;
    if (!$exclusive) $opStr += '=';
    var $opExpr = '\'' + $opStr + '\'';
    if ($isData) {
      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
      $closingBraces += '}';
    }
    if ($isDataFormat) {
      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
      $closingBraces += '}';
    }
    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; if (' + ($valid) + ' === undefined) ' + ($valid) + ' = ' + ($result) + ' ' + ($op);
    if (!$exclusive) {
      out += '=';
    }
    out += ' 0;';
  }
  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_formatLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' , exclusive: ' + ($exclusive) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + ($opStr) + ' "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '}';
  return out;
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_allOf(it, $keyword) {
  var out = ' ';
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $currentBaseId = $it.baseId,
    $allSchemasEmpty = true;
  var arr1 = $schema;
  if (arr1) {
    var $sch, $i = -1,
      l1 = arr1.length - 1;
    while ($i < l1) {
      $sch = arr1[$i += 1];
      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $allSchemasEmpty = false;
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }
  if ($breakOnError) {
    if ($allSchemasEmpty) {
      out += ' if (true) { ';
    } else {
      out += ' ' + ($closingBraces.slice(0, -1)) + ' ';
    }
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_anyOf(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $noEmptySchema = $schema.every(function($sch) {
    return it.util.schemaHasRules($sch, it.RULES.all);
  });
  if ($noEmptySchema) {
    var $currentBaseId = $it.baseId;
    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' ' + ($valid) + ' = ' + ($valid) + ' || ' + ($nextValid) + '; if (!' + ($valid) + ') { ';
        $closingBraces += '}';
      }
    }
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {  var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match some schema in anyOf\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
    if (it.opts.allErrors) {
      out += ' } ';
    }
    out = it.util.cleanUpCode(out);
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }
  return out;
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_constant(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if (!$isData) {
    out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
  }
  out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('constant') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be equal to constant\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' }';
  return out;
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_custom(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $rule = this,
    $definition = 'definition' + $lvl,
    $rDef = $rule.definition;
  var $compile, $inline, $macro, $ruleValidate, $validateCode;
  if ($isData && $rDef.$data) {
    $validateCode = 'keywordValidate' + $lvl;
    var $validateSchema = $rDef.validateSchema;
    out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
  } else {
    $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
    $schemaValue = 'validate.schema' + $schemaPath;
    $validateCode = $ruleValidate.code;
    $compile = $rDef.compile;
    $inline = $rDef.inline;
    $macro = $rDef.macro;
  }
  var $ruleErrs = $validateCode + '.errors',
    $i = 'i' + $lvl,
    $ruleErr = 'ruleErr' + $lvl,
    $asyncKeyword = $rDef.async;
  if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
  if (!($inline || $macro)) {
    out += '' + ($ruleErrs) + ' = null;';
  }
  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
  if ($validateSchema) {
    out += ' ' + ($valid) + ' = ' + ($definition) + '.validateSchema(' + ($schemaValue) + '); if (' + ($valid) + ') {';
  }
  if ($inline) {
    if ($rDef.statements) {
      out += ' ' + ($ruleValidate.validate) + ' ';
    } else {
      out += ' ' + ($valid) + ' = ' + ($ruleValidate.validate) + '; ';
    }
  } else if ($macro) {
    var $it = it.util.copy(it);
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    $it.schema = $ruleValidate.validate;
    $it.schemaPath = '';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + ($code);
  } else {
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    out += '  ' + ($validateCode) + '.call( ';
    if (it.opts.passContext) {
      out += 'this';
    } else {
      out += 'self';
    }
    if ($compile || $rDef.schema === false) {
      out += ' , ' + ($data) + ' ';
    } else {
      out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
    }
    out += ' , (dataPath || \'\')';
    if (it.errorPath != '""') {
      out += ' + ' + (it.errorPath);
    }
    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ' , rootData )  ';
    var def_callRuleValidate = out;
    out = $$outStack.pop();
    if ($rDef.errors === false) {
      out += ' ' + ($valid) + ' = ';
      if ($asyncKeyword) {
        out += '' + (it.yieldAwait);
      }
      out += '' + (def_callRuleValidate) + '; ';
    } else {
      if ($asyncKeyword) {
        $ruleErrs = 'customErrors' + $lvl;
        out += ' var ' + ($ruleErrs) + ' = null; try { ' + ($valid) + ' = ' + (it.yieldAwait) + (def_callRuleValidate) + '; } catch (e) { ' + ($valid) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
      } else {
        out += ' ' + ($ruleErrs) + ' = null; ' + ($valid) + ' = ' + (def_callRuleValidate) + '; ';
      }
    }
  }
  if ($rDef.modifying) {
    out += ' ' + ($data) + ' = ' + ($parentData) + '[' + ($parentDataProperty) + '];';
  }
  if ($validateSchema) {
    out += ' }';
  }
  if ($rDef.valid) {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  } else {
    out += ' if ( ';
    if ($rDef.valid === undefined) {
      out += ' !';
      if ($macro) {
        out += '' + ($nextValid);
      } else {
        out += '' + ($valid);
      }
    } else {
      out += ' ' + (!$rDef.valid) + ' ';
    }
    out += ') { ';
    $errorKeyword = $rule.keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    var def_customError = out;
    out = $$outStack.pop();
    if ($inline) {
      if ($rDef.errors) {
        if ($rDef.errors != 'full') {
          out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
          if (it.opts.verbose) {
            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
          }
          out += ' } ';
        }
      } else {
        if ($rDef.errors === false) {
          out += ' ' + (def_customError) + ' ';
        } else {
          out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
          if (it.opts.verbose) {
            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
          }
          out += ' } } ';
        }
      }
    } else if ($macro) {
      out += '   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
    } else {
      if ($rDef.errors === false) {
        out += ' ' + (def_customError) + ' ';
      } else {
        out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';  ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
        if (it.opts.verbose) {
          out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
        }
        out += ' } } else { ' + (def_customError) + ' } ';
      }
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
  }
  return out;
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_dependencies(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $schemaDeps = {},
    $propertyDeps = {};
  for ($property in $schema) {
    var $sch = $schema[$property];
    var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
    $deps[$property] = $sch;
  }
  out += 'var ' + ($errs) + ' = errors;';
  var $currentErrorPath = it.errorPath;
  out += 'var missing' + ($lvl) + ';';
  for (var $property in $propertyDeps) {
    $deps = $propertyDeps[$property];
    out += ' if (' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
    if ($breakOnError) {
      out += ' && ( ';
      var arr1 = $deps;
      if (arr1) {
        var _$property, $i = -1,
          l1 = arr1.length - 1;
        while ($i < l1) {
          _$property = arr1[$i += 1];
          if ($i) {
            out += ' || ';
          }
          var $prop = it.util.getProperty(_$property);
          out += ' ( ' + ($data) + ($prop) + ' === undefined && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? _$property : $prop)) + ') ) ';
        }
      }
      out += ')) {  ';
      var $propertyPath = 'missing' + $lvl,
        $missingProperty = '\' + ' + $propertyPath + ' + \'';
      if (it.opts._errorDataPathProperty) {
        it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should have ';
          if ($deps.length == 1) {
            out += 'property ' + (it.util.escapeQuotes($deps[0]));
          } else {
            out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
          }
          out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
    } else {
      out += ' ) { ';
      var arr2 = $deps;
      if (arr2) {
        var $reqProperty, i2 = -1,
          l2 = arr2.length - 1;
        while (i2 < l2) {
          $reqProperty = arr2[i2 += 1];
          var $prop = it.util.getProperty($reqProperty),
            $missingProperty = it.util.escapeQuotes($reqProperty);
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPath($currentErrorPath, $reqProperty, it.opts.jsonPointers);
          }
          out += ' if (' + ($data) + ($prop) + ' === undefined) {  var err =   '; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should have ';
              if ($deps.length == 1) {
                out += 'property ' + (it.util.escapeQuotes($deps[0]));
              } else {
                out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
              }
              out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
        }
      }
    }
    out += ' }   ';
    if ($breakOnError) {
      $closingBraces += '}';
      out += ' else { ';
    }
  }
  it.errorPath = $currentErrorPath;
  var $currentBaseId = $it.baseId;
  for (var $property in $schemaDeps) {
    var $sch = $schemaDeps[$property];
    if (it.util.schemaHasRules($sch, it.RULES.all)) {
      out += ' ' + ($nextValid) + ' = true; if (' + ($data) + (it.util.getProperty($property)) + ' !== undefined) { ';
      $it.schema = $sch;
      $it.schemaPath = $schemaPath + it.util.getProperty($property);
      $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
      out += '  ' + (it.validate($it)) + ' ';
      $it.baseId = $currentBaseId;
      out += ' }  ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
        $closingBraces += '}';
      }
    }
  }
  if ($breakOnError) {
    out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_enum(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $i = 'i' + $lvl,
    $vSchema = 'schema' + $lvl;
  if (!$isData) {
    out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + ';';
  }
  out += 'var ' + ($valid) + ';';
  if ($isData) {
    out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
  }
  out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<' + ($vSchema) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
  if ($isData) {
    out += '  }  ';
  }
  out += ' if (!' + ($valid) + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValues: schema' + ($lvl) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be equal to one of the allowed values\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' }';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_format(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  if (it.opts.format === false) {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
    return out;
  }
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $unknownFormats = it.opts.unknownFormats,
    $allowUnknown = Array.isArray($unknownFormats);
  if ($isData) {
    var $format = 'format' + $lvl;
    out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var isObject' + ($lvl) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; if (isObject' + ($lvl) + ') { ';
    if (it.async) {
      out += ' var async' + ($lvl) + ' = ' + ($format) + '.async; ';
    }
    out += ' ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
    }
    out += ' (';
    if ($unknownFormats === true || $allowUnknown) {
      out += ' (' + ($schemaValue) + ' && !' + ($format) + ' ';
      if ($allowUnknown) {
        out += ' && self._opts.unknownFormats.indexOf(' + ($schemaValue) + ') == -1 ';
      }
      out += ') || ';
    }
    out += ' (' + ($format) + ' && !(typeof ' + ($format) + ' == \'function\' ? ';
    if (it.async) {
      out += ' (async' + ($lvl) + ' ? ' + (it.yieldAwait) + ' ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
    } else {
      out += ' ' + ($format) + '(' + ($data) + ') ';
    }
    out += ' : ' + ($format) + '.test(' + ($data) + '))))) {';
  } else {
    var $format = it.formats[$schema];
    if (!$format) {
      if ($unknownFormats === true || ($allowUnknown && $unknownFormats.indexOf($schema) == -1)) {
        throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
      } else {
        if (!$allowUnknown) {
          console.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
          if ($unknownFormats !== 'ignore') console.warn('In the next major version it will throw exception. See option unknownFormats for more information');
        }
        if ($breakOnError) {
          out += ' if (true) { ';
        }
        return out;
      }
    }
    var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
    if ($isObject) {
      var $async = $format.async === true;
      $format = $format.validate;
    }
    if ($async) {
      if (!it.async) throw new Error('async format in sync schema');
      var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
      out += ' if (!(' + (it.yieldAwait) + ' ' + ($formatRef) + '(' + ($data) + '))) { ';
    } else {
      out += ' if (! ';
      var $formatRef = 'formats' + it.util.getProperty($schema);
      if ($isObject) $formatRef += '.validate';
      if (typeof $format == 'function') {
        out += ' ' + ($formatRef) + '(' + ($data) + ') ';
      } else {
        out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
      }
      out += ') { ';
    }
  }
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { format:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += '  } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match format "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' } ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_items(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $idx = 'i' + $lvl,
    $dataNxt = $it.dataLevel = it.dataLevel + 1,
    $nextData = 'data' + $dataNxt,
    $currentBaseId = it.baseId;
  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
  if (Array.isArray($schema)) {
    var $additionalItems = it.schema.additionalItems;
    if ($additionalItems === false) {
      out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
      var $currErrSchemaPath = $errSchemaPath;
      $errSchemaPath = it.errSchemaPath + '/additionalItems';
      out += '  if (!' + ($valid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schema.length) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } ';
      $errSchemaPath = $currErrSchemaPath;
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
          var $passData = $data + '[' + $i + ']';
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
          $it.dataPathArr[$dataNxt] = $i;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          out += ' }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
    if (typeof $additionalItems == 'object' && it.util.schemaHasRules($additionalItems, it.RULES.all)) {
      $it.schema = $additionalItems;
      $it.schemaPath = it.schemaPath + '.additionalItems';
      $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
      out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var ' + ($idx) + ' = ' + ($schema.length) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
      var $passData = $data + '[' + $idx + ']';
      $it.dataPathArr[$dataNxt] = $idx;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      if ($breakOnError) {
        out += ' if (!' + ($nextValid) + ') break; ';
      }
      out += ' } }  ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
        $closingBraces += '}';
      }
    }
  } else if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += '  for (var ' + ($idx) + ' = ' + (0) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
    var $passData = $data + '[' + $idx + ']';
    $it.dataPathArr[$dataNxt] = $idx;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;
    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
    } else {
      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
    }
    if ($breakOnError) {
      out += ' if (!' + ($nextValid) + ') break; ';
    }
    out += ' }  ';
    if ($breakOnError) {
      out += ' if (' + ($nextValid) + ') { ';
      $closingBraces += '}';
    }
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_multipleOf(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  out += 'var division' + ($lvl) + ';if (';
  if ($isData) {
    out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
  }
  out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
  if (it.opts.multipleOfPrecision) {
    out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
  } else {
    out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
  }
  out += ' ) ';
  if ($isData) {
    out += '  )  ';
  }
  out += ' ) {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { multipleOf: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be multiple of ';
      if ($isData) {
        out += '\' + ' + ($schemaValue);
      } else {
        out += '' + ($schema) + '\'';
      }
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_not(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + ($errs) + ' = errors;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    $it.createErrors = false;
    var $allErrorsOption;
    if ($it.opts.allErrors) {
      $allErrorsOption = $it.opts.allErrors;
      $it.opts.allErrors = false;
    }
    out += ' ' + (it.validate($it)) + ' ';
    $it.createErrors = true;
    if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' if (' + ($nextValid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be valid\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
    if (it.opts.allErrors) {
      out += ' } ';
    }
  } else {
    out += '  var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be valid\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if ($breakOnError) {
      out += ' if (false) { ';
    }
  }
  return out;
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_oneOf(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  out += 'var ' + ($errs) + ' = errors;var prevValid' + ($lvl) + ' = false;var ' + ($valid) + ' = false;';
  var $currentBaseId = $it.baseId;
  var $wasComposite = it.compositeRule;
  it.compositeRule = $it.compositeRule = true;
  var arr1 = $schema;
  if (arr1) {
    var $sch, $i = -1,
      l1 = arr1.length - 1;
    while ($i < l1) {
      $sch = arr1[$i += 1];
      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
      } else {
        out += ' var ' + ($nextValid) + ' = true; ';
      }
      if ($i) {
        out += ' if (' + ($nextValid) + ' && prevValid' + ($lvl) + ') ' + ($valid) + ' = false; else { ';
        $closingBraces += '}';
      }
      out += ' if (' + ($nextValid) + ') ' + ($valid) + ' = prevValid' + ($lvl) + ' = true;';
    }
  }
  it.compositeRule = $it.compositeRule = $wasComposite;
  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match exactly one schema in oneOf\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
  if (it.opts.allErrors) {
    out += ' } ';
  }
  return out;
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_pattern(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
  }
  out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { pattern:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += '  } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match pattern "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_patternRequired(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $key = 'key' + $lvl,
    $matched = 'patternMatched' + $lvl,
    $closingBraces = '',
    $ownProperties = it.opts.ownProperties;
  out += 'var ' + ($valid) + ' = true;';
  var arr1 = $schema;
  if (arr1) {
    var $pProperty, i1 = -1,
      l1 = arr1.length - 1;
    while (i1 < l1) {
      $pProperty = arr1[i1 += 1];
      out += ' var ' + ($matched) + ' = false; for (var ' + ($key) + ' in ' + ($data) + ') {  ';
      if ($ownProperties) {
        out += ' if (!Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($key) + ')) continue; ';
      }
      out += ' ' + ($matched) + ' = ' + (it.usePattern($pProperty)) + '.test(' + ($key) + '); if (' + ($matched) + ') break; } ';
      var $missingPattern = it.util.escapeQuotes($pProperty);
      out += ' if (!' + ($matched) + ') { ' + ($valid) + ' = false;  var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('patternRequired') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingPattern: \'' + ($missingPattern) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should have property matching pattern \\\'' + ($missingPattern) + '\\\'\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ';
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
  }
  out += '' + ($closingBraces);
  return out;
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_properties(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $key = 'key' + $lvl,
    $dataNxt = $it.dataLevel = it.dataLevel + 1,
    $nextData = 'data' + $dataNxt;
  var $schemaKeys = Object.keys($schema || {}),
    $pProperties = it.schema.patternProperties || {},
    $pPropertyKeys = Object.keys($pProperties),
    $aProperties = it.schema.additionalProperties,
    $someProperties = $schemaKeys.length || $pPropertyKeys.length,
    $noAdditional = $aProperties === false,
    $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
    $removeAdditional = it.opts.removeAdditional,
    $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
    $ownProperties = it.opts.ownProperties,
    $currentBaseId = it.baseId;
  var $required = it.schema.required;
  if ($required && !(it.opts.v5 && $required.$data) && $required.length < it.opts.loopRequired) var $requiredHash = it.util.toHash($required);
  if (it.opts.v5) {
    var $pgProperties = it.schema.patternGroups || {},
      $pgPropertyKeys = Object.keys($pgProperties);
  }
  out += 'var ' + ($errs) + ' = errors;var ' + ($nextValid) + ' = true;';
  if ($checkAdditional) {
    out += ' for (var ' + ($key) + ' in ' + ($data) + ') {  ';
    if ($ownProperties) {
      out += ' if (!Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($key) + ')) continue; ';
    }
    if ($someProperties) {
      out += ' var isAdditional' + ($lvl) + ' = !(false ';
      if ($schemaKeys.length) {
        if ($schemaKeys.length > 5) {
          out += ' || validate.schema' + ($schemaPath) + '[' + ($key) + '] ';
        } else {
          var arr1 = $schemaKeys;
          if (arr1) {
            var $propertyKey, i1 = -1,
              l1 = arr1.length - 1;
            while (i1 < l1) {
              $propertyKey = arr1[i1 += 1];
              out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
            }
          }
        }
      }
      if ($pPropertyKeys.length) {
        var arr2 = $pPropertyKeys;
        if (arr2) {
          var $pProperty, $i = -1,
            l2 = arr2.length - 1;
          while ($i < l2) {
            $pProperty = arr2[$i += 1];
            out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
          }
        }
      }
      if (it.opts.v5 && $pgPropertyKeys && $pgPropertyKeys.length) {
        var arr3 = $pgPropertyKeys;
        if (arr3) {
          var $pgProperty, $i = -1,
            l3 = arr3.length - 1;
          while ($i < l3) {
            $pgProperty = arr3[$i += 1];
            out += ' || ' + (it.usePattern($pgProperty)) + '.test(' + ($key) + ') ';
          }
        }
      }
      out += ' ); if (isAdditional' + ($lvl) + ') { ';
    }
    if ($removeAdditional == 'all') {
      out += ' delete ' + ($data) + '[' + ($key) + ']; ';
    } else {
      var $currentErrorPath = it.errorPath;
      var $additionalProperty = '\' + ' + $key + ' + \'';
      if (it.opts._errorDataPathProperty) {
        it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
      }
      if ($noAdditional) {
        if ($removeAdditional) {
          out += ' delete ' + ($data) + '[' + ($key) + ']; ';
        } else {
          out += ' ' + ($nextValid) + ' = false; ';
          var $currErrSchemaPath = $errSchemaPath;
          $errSchemaPath = it.errSchemaPath + '/additionalProperties';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should NOT have additional properties\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          $errSchemaPath = $currErrSchemaPath;
          if ($breakOnError) {
            out += ' break; ';
          }
        }
      } else if ($additionalIsSchema) {
        if ($removeAdditional == 'failing') {
          out += ' var ' + ($errs) + ' = errors;  ';
          var $wasComposite = it.compositeRule;
          it.compositeRule = $it.compositeRule = true;
          $it.schema = $aProperties;
          $it.schemaPath = it.schemaPath + '.additionalProperties';
          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          out += ' if (!' + ($nextValid) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
          it.compositeRule = $it.compositeRule = $wasComposite;
        } else {
          $it.schema = $aProperties;
          $it.schemaPath = it.schemaPath + '.additionalProperties';
          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          if ($breakOnError) {
            out += ' if (!' + ($nextValid) + ') break; ';
          }
        }
      }
      it.errorPath = $currentErrorPath;
    }
    if ($someProperties) {
      out += ' } ';
    }
    out += ' }  ';
    if ($breakOnError) {
      out += ' if (' + ($nextValid) + ') { ';
      $closingBraces += '}';
    }
  }
  var $useDefaults = it.opts.useDefaults && !it.compositeRule;
  if ($schemaKeys.length) {
    var arr4 = $schemaKeys;
    if (arr4) {
      var $propertyKey, i4 = -1,
        l4 = arr4.length - 1;
      while (i4 < l4) {
        $propertyKey = arr4[i4 += 1];
        var $sch = $schema[$propertyKey];
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          var $prop = it.util.getProperty($propertyKey),
            $passData = $data + $prop,
            $hasDefault = $useDefaults && $sch.default !== undefined;
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + $prop;
          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
          $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
          $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            $code = it.util.varReplace($code, $nextData, $passData);
            var $useData = $passData;
          } else {
            var $useData = $nextData;
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
          }
          if ($hasDefault) {
            out += ' ' + ($code) + ' ';
          } else {
            if ($requiredHash && $requiredHash[$propertyKey]) {
              out += ' if (' + ($useData) + ' === undefined) { ' + ($nextValid) + ' = false; ';
              var $currentErrorPath = it.errorPath,
                $currErrSchemaPath = $errSchemaPath,
                $missingProperty = it.util.escapeQuotes($propertyKey);
              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
              }
              $errSchemaPath = it.errSchemaPath + '/required';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'';
                  if (it.opts._errorDataPathProperty) {
                    out += 'is a required property';
                  } else {
                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              $errSchemaPath = $currErrSchemaPath;
              it.errorPath = $currentErrorPath;
              out += ' } else { ';
            } else {
              if ($breakOnError) {
                out += ' if (' + ($useData) + ' === undefined) { ' + ($nextValid) + ' = true; } else { ';
              } else {
                out += ' if (' + ($useData) + ' !== undefined) { ';
              }
            }
            out += ' ' + ($code) + ' } ';
          }
        }
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }
  var arr5 = $pPropertyKeys;
  if (arr5) {
    var $pProperty, i5 = -1,
      l5 = arr5.length - 1;
    while (i5 < l5) {
      $pProperty = arr5[i5 += 1];
      var $sch = $pProperties[$pProperty];
      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $it.schema = $sch;
        $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
        $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
        out += ' for (var ' + ($key) + ' in ' + ($data) + ') {  ';
        if ($ownProperties) {
          out += ' if (!Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($key) + ')) continue; ';
        }
        out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
        $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
        var $passData = $data + '[' + $key + ']';
        $it.dataPathArr[$dataNxt] = $key;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
        } else {
          out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
        }
        if ($breakOnError) {
          out += ' if (!' + ($nextValid) + ') break; ';
        }
        out += ' } ';
        if ($breakOnError) {
          out += ' else ' + ($nextValid) + ' = true; ';
        }
        out += ' }  ';
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }
  if (it.opts.v5) {
    var arr6 = $pgPropertyKeys;
    if (arr6) {
      var $pgProperty, i6 = -1,
        l6 = arr6.length - 1;
      while (i6 < l6) {
        $pgProperty = arr6[i6 += 1];
        var $pgSchema = $pgProperties[$pgProperty],
          $sch = $pgSchema.schema;
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          $it.schema = $sch;
          $it.schemaPath = it.schemaPath + '.patternGroups' + it.util.getProperty($pgProperty) + '.schema';
          $it.errSchemaPath = it.errSchemaPath + '/patternGroups/' + it.util.escapeFragment($pgProperty) + '/schema';
          out += ' var pgPropCount' + ($lvl) + ' = 0; for (var ' + ($key) + ' in ' + ($data) + ') {  ';
          if ($ownProperties) {
            out += ' if (!Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($key) + ')) continue; ';
          }
          out += ' if (' + (it.usePattern($pgProperty)) + '.test(' + ($key) + ')) { pgPropCount' + ($lvl) + '++; ';
          $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          if ($breakOnError) {
            out += ' if (!' + ($nextValid) + ') break; ';
          }
          out += ' } ';
          if ($breakOnError) {
            out += ' else ' + ($nextValid) + ' = true; ';
          }
          out += ' }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
          var $pgMin = $pgSchema.minimum,
            $pgMax = $pgSchema.maximum;
          if ($pgMin !== undefined || $pgMax !== undefined) {
            out += ' var ' + ($valid) + ' = true; ';
            var $currErrSchemaPath = $errSchemaPath;
            if ($pgMin !== undefined) {
              var $limit = $pgMin,
                $reason = 'minimum',
                $moreOrLess = 'less';
              out += ' ' + ($valid) + ' = pgPropCount' + ($lvl) + ' >= ' + ($pgMin) + '; ';
              $errSchemaPath = it.errSchemaPath + '/patternGroups/minimum';
              out += '  if (!' + ($valid) + ') {   ';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('patternGroups') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { reason: \'' + ($reason) + '\', limit: ' + ($limit) + ', pattern: \'' + (it.util.escapeQuotes($pgProperty)) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should NOT have ' + ($moreOrLess) + ' than ' + ($limit) + ' properties matching pattern "' + (it.util.escapeQuotes($pgProperty)) + '"\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              out += ' } ';
              if ($pgMax !== undefined) {
                out += ' else ';
              }
            }
            if ($pgMax !== undefined) {
              var $limit = $pgMax,
                $reason = 'maximum',
                $moreOrLess = 'more';
              out += ' ' + ($valid) + ' = pgPropCount' + ($lvl) + ' <= ' + ($pgMax) + '; ';
              $errSchemaPath = it.errSchemaPath + '/patternGroups/maximum';
              out += '  if (!' + ($valid) + ') {   ';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('patternGroups') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { reason: \'' + ($reason) + '\', limit: ' + ($limit) + ', pattern: \'' + (it.util.escapeQuotes($pgProperty)) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should NOT have ' + ($moreOrLess) + ' than ' + ($limit) + ' properties matching pattern "' + (it.util.escapeQuotes($pgProperty)) + '"\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              out += ' } ';
            }
            $errSchemaPath = $currErrSchemaPath;
            if ($breakOnError) {
              out += ' if (' + ($valid) + ') { ';
              $closingBraces += '}';
            }
          }
        }
      }
    }
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_ref(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $async, $refCode;
  if ($schema == '#' || $schema == '#/') {
    if (it.isRoot) {
      $async = it.async;
      $refCode = 'validate';
    } else {
      $async = it.root.schema.$async === true;
      $refCode = 'root.refVal[0]';
    }
  } else {
    var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
    if ($refVal === undefined) {
      var $message = 'can\'t resolve reference ' + $schema + ' from id ' + it.baseId;
      if (it.opts.missingRefs == 'fail') {
        console.log($message);
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        if ($breakOnError) {
          out += ' if (false) { ';
        }
      } else if (it.opts.missingRefs == 'ignore') {
        console.log($message);
        if ($breakOnError) {
          out += ' if (true) { ';
        }
      } else {
        var $error = new Error($message);
        $error.missingRef = it.resolve.url(it.baseId, $schema);
        $error.missingSchema = it.resolve.normalizeId(it.resolve.fullPath($error.missingRef));
        throw $error;
      }
    } else if ($refVal.inline) {
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      $it.schema = $refVal.schema;
      $it.schemaPath = '';
      $it.errSchemaPath = $schema;
      var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
      out += ' ' + ($code) + ' ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
      }
    } else {
      $async = $refVal.$async === true;
      $refCode = $refVal.code;
    }
  }
  if ($refCode) {
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    if (it.opts.passContext) {
      out += ' ' + ($refCode) + '.call(this, ';
    } else {
      out += ' ' + ($refCode) + '( ';
    }
    out += ' ' + ($data) + ', (dataPath || \'\')';
    if (it.errorPath != '""') {
      out += ' + ' + (it.errorPath);
    }
    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ', rootData)  ';
    var __callValidate = out;
    out = $$outStack.pop();
    if ($async) {
      if (!it.async) throw new Error('async schema referenced by sync schema');
      out += ' try { ';
      if ($breakOnError) {
        out += 'var ' + ($valid) + ' =';
      }
      out += ' ' + (it.yieldAwait) + ' ' + (__callValidate) + '; } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; } ';
      if ($breakOnError) {
        out += ' if (' + ($valid) + ') { ';
      }
    } else {
      out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
      if ($breakOnError) {
        out += ' else { ';
      }
    }
  }
  return out;
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_required(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $vSchema = 'schema' + $lvl;
  if (!$isData) {
    if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
      var $required = [];
      var arr1 = $schema;
      if (arr1) {
        var $property, i1 = -1,
          l1 = arr1.length - 1;
        while (i1 < l1) {
          $property = arr1[i1 += 1];
          var $propertySch = it.schema.properties[$property];
          if (!($propertySch && it.util.schemaHasRules($propertySch, it.RULES.all))) {
            $required[$required.length] = $property;
          }
        }
      }
    } else {
      var $required = $schema;
    }
  }
  if ($isData || $required.length) {
    var $currentErrorPath = it.errorPath,
      $loopRequired = $isData || $required.length >= it.opts.loopRequired;
    if ($breakOnError) {
      out += ' var missing' + ($lvl) + '; ';
      if ($loopRequired) {
        if (!$isData) {
          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
        }
        var $i = 'i' + $lvl,
          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
        }
        out += ' var ' + ($valid) + ' = true; ';
        if ($isData) {
          out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
        }
        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] !== undefined; if (!' + ($valid) + ') break; } ';
        if ($isData) {
          out += '  }  ';
        }
        out += '  if (!' + ($valid) + ') {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else { ';
      } else {
        out += ' if ( ';
        var arr2 = $required;
        if (arr2) {
          var _$property, $i = -1,
            l2 = arr2.length - 1;
          while ($i < l2) {
            _$property = arr2[$i += 1];
            if ($i) {
              out += ' || ';
            }
            var $prop = it.util.getProperty(_$property);
            out += ' ( ' + ($data) + ($prop) + ' === undefined && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? _$property : $prop)) + ') ) ';
          }
        }
        out += ') {  ';
        var $propertyPath = 'missing' + $lvl,
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
        }
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else { ';
      }
    } else {
      if ($loopRequired) {
        if (!$isData) {
          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
        }
        var $i = 'i' + $lvl,
          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
        }
        if ($isData) {
          out += ' if (' + ($vSchema) + ' && !Array.isArray(' + ($vSchema) + ')) {  var err =   '; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + ($vSchema) + ' !== undefined) { ';
        }
        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { if (' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] === undefined) {  var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
        if ($isData) {
          out += '  }  ';
        }
      } else {
        var arr3 = $required;
        if (arr3) {
          var $reqProperty, i3 = -1,
            l3 = arr3.length - 1;
          while (i3 < l3) {
            $reqProperty = arr3[i3 += 1];
            var $prop = it.util.getProperty($reqProperty),
              $missingProperty = it.util.escapeQuotes($reqProperty);
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPath($currentErrorPath, $reqProperty, it.opts.jsonPointers);
            }
            out += ' if (' + ($data) + ($prop) + ' === undefined) {  var err =   '; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
          }
        }
      }
    }
    it.errorPath = $currentErrorPath;
  } else if ($breakOnError) {
    out += ' if (true) {';
  }
  return out;
}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_switch(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $ifPassed = 'ifPassed' + it.level,
    $currentBaseId = $it.baseId,
    $shouldContinue;
  out += 'var ' + ($ifPassed) + ';';
  var arr1 = $schema;
  if (arr1) {
    var $sch, $caseIndex = -1,
      l1 = arr1.length - 1;
    while ($caseIndex < l1) {
      $sch = arr1[$caseIndex += 1];
      if ($caseIndex && !$shouldContinue) {
        out += ' if (!' + ($ifPassed) + ') { ';
        $closingBraces += '}';
      }
      if ($sch.if && it.util.schemaHasRules($sch.if, it.RULES.all)) {
        out += ' var ' + ($errs) + ' = errors;   ';
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.createErrors = false;
        $it.schema = $sch.if;
        $it.schemaPath = $schemaPath + '[' + $caseIndex + '].if';
        $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/if';
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        $it.createErrors = true;
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' ' + ($ifPassed) + ' = ' + ($nextValid) + '; if (' + ($ifPassed) + ') {  ';
        if (typeof $sch.then == 'boolean') {
          if ($sch.then === false) {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('switch') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { caseIndex: ' + ($caseIndex) + ' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should pass "switch" keyword validation\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }
          out += ' var ' + ($nextValid) + ' = ' + ($sch.then) + '; ';
        } else {
          $it.schema = $sch.then;
          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
        }
        out += '  } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } } ';
      } else {
        out += ' ' + ($ifPassed) + ' = true;  ';
        if (typeof $sch.then == 'boolean') {
          if ($sch.then === false) {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('switch') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { caseIndex: ' + ($caseIndex) + ' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should pass "switch" keyword validation\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }
          out += ' var ' + ($nextValid) + ' = ' + ($sch.then) + '; ';
        } else {
          $it.schema = $sch.then;
          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
        }
      }
      $shouldContinue = $sch.continue
    }
  }
  out += '' + ($closingBraces) + 'var ' + ($valid) + ' = ' + ($nextValid) + '; ';
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_uniqueItems(it, $keyword) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.v5 && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if (($schema || $isData) && it.opts.uniqueItems !== false) {
    if ($isData) {
      out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
    }
    out += ' var ' + ($valid) + ' = true; if (' + ($data) + '.length > 1) { var i = ' + ($data) + '.length, j; outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } } ';
    if ($isData) {
      out += '  }  ';
    }
    out += ' if (!' + ($valid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { i: i, j: j } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }
  return out;
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IDENTIFIER = /^[a-z_$][a-z0-9_$\-]*$/i;
var customRuleCode = __webpack_require__(67);

module.exports = {
  add: addKeyword,
  get: getKeyword,
  remove: removeKeyword
};

/**
 * Define custom keyword
 * @this  Ajv
 * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
 * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
 */
function addKeyword(keyword, definition) {
  /* jshint validthis: true */
  /* eslint no-shadow: 0 */
  var RULES = this.RULES;

  if (RULES.keywords[keyword])
    throw new Error('Keyword ' + keyword + ' is already defined');

  if (!IDENTIFIER.test(keyword))
    throw new Error('Keyword ' + keyword + ' is not a valid identifier');

  if (definition) {
    if (definition.macro && definition.valid !== undefined)
      throw new Error('"valid" option cannot be used with macro keywords');

    var dataType = definition.type;
    if (Array.isArray(dataType)) {
      var i, len = dataType.length;
      for (i=0; i<len; i++) checkDataType(dataType[i]);
      for (i=0; i<len; i++) _addRule(keyword, dataType[i], definition);
    } else {
      if (dataType) checkDataType(dataType);
      _addRule(keyword, dataType, definition);
    }

    var $data = definition.$data === true && this._opts.v5;
    if ($data && !definition.validate)
      throw new Error('$data support: "validate" function is not defined');

    var metaSchema = definition.metaSchema;
    if (metaSchema) {
      if ($data) {
        metaSchema = {
          anyOf: [
            metaSchema,
            { '$ref': 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#/definitions/$data' }
          ]
        };
      }
      definition.validateSchema = this.compile(metaSchema, true);
    }
  }

  RULES.keywords[keyword] = RULES.all[keyword] = true;


  function _addRule(keyword, dataType, definition) {
    var ruleGroup;
    for (var i=0; i<RULES.length; i++) {
      var rg = RULES[i];
      if (rg.type == dataType) {
        ruleGroup = rg;
        break;
      }
    }

    if (!ruleGroup) {
      ruleGroup = { type: dataType, rules: [] };
      RULES.push(ruleGroup);
    }

    var rule = {
      keyword: keyword,
      definition: definition,
      custom: true,
      code: customRuleCode
    };
    ruleGroup.rules.push(rule);
    RULES.custom[keyword] = rule;
  }


  function checkDataType(dataType) {
    if (!RULES.types[dataType]) throw new Error('Unknown type ' + dataType);
  }
}


/**
 * Get keyword
 * @this  Ajv
 * @param {String} keyword pre-defined or custom keyword.
 * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
 */
function getKeyword(keyword) {
  /* jshint validthis: true */
  var rule = this.RULES.custom[keyword];
  return rule ? rule.definition : this.RULES.keywords[keyword] || false;
}


/**
 * Remove keyword
 * @this  Ajv
 * @param {String} keyword pre-defined or custom keyword.
 */
function removeKeyword(keyword) {
  /* jshint validthis: true */
  var RULES = this.RULES;
  delete RULES.keywords[keyword];
  delete RULES.all[keyword];
  delete RULES.custom[keyword];
  for (var i=0; i<RULES.length; i++) {
    var rules = RULES[i].rules;
    for (var j=0; j<rules.length; j++) {
      if (rules[j].keyword == keyword) {
        rules.splice(j, 1);
        break;
      }
    }
  }
}


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {"id":"http://json-schema.org/draft-04/schema#","$schema":"http://json-schema.org/draft-04/schema#","description":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"positiveInteger":{"type":"integer","minimum":0},"positiveIntegerDefault0":{"allOf":[{"$ref":"#/definitions/positiveInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"minItems":1,"uniqueItems":true}},"type":"object","properties":{"id":{"type":"string","format":"uri"},"$schema":{"type":"string","format":"uri"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"boolean","default":false},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"boolean","default":false},"maxLength":{"$ref":"#/definitions/positiveInteger"},"minLength":{"$ref":"#/definitions/positiveIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"$ref":"#/definitions/positiveInteger"},"minItems":{"$ref":"#/definitions/positiveIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"maxProperties":{"$ref":"#/definitions/positiveInteger"},"minProperties":{"$ref":"#/definitions/positiveIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"enum":{"type":"array","minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"dependencies":{"exclusiveMaximum":["maximum"],"exclusiveMinimum":["minimum"]},"default":{}}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {"id":"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#","$schema":"http://json-schema.org/draft-04/schema#","description":"Core schema meta-schema (v5 proposals)","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"positiveInteger":{"type":"integer","minimum":0},"positiveIntegerDefault0":{"allOf":[{"$ref":"#/definitions/positiveInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"minItems":1,"uniqueItems":true},"$data":{"type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}},"type":"object","properties":{"id":{"type":"string","format":"uri"},"$schema":{"type":"string","format":"uri"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"multipleOf":{"anyOf":[{"type":"number","minimum":0,"exclusiveMinimum":true},{"$ref":"#/definitions/$data"}]},"maximum":{"anyOf":[{"type":"number"},{"$ref":"#/definitions/$data"}]},"exclusiveMaximum":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"minimum":{"anyOf":[{"type":"number"},{"$ref":"#/definitions/$data"}]},"exclusiveMinimum":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"maxLength":{"anyOf":[{"$ref":"#/definitions/positiveInteger"},{"$ref":"#/definitions/$data"}]},"minLength":{"anyOf":[{"$ref":"#/definitions/positiveIntegerDefault0"},{"$ref":"#/definitions/$data"}]},"pattern":{"anyOf":[{"type":"string","format":"regex"},{"$ref":"#/definitions/$data"}]},"additionalItems":{"anyOf":[{"type":"boolean"},{"$ref":"#"},{"$ref":"#/definitions/$data"}],"default":{}},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"anyOf":[{"$ref":"#/definitions/positiveInteger"},{"$ref":"#/definitions/$data"}]},"minItems":{"anyOf":[{"$ref":"#/definitions/positiveIntegerDefault0"},{"$ref":"#/definitions/$data"}]},"uniqueItems":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"maxProperties":{"anyOf":[{"$ref":"#/definitions/positiveInteger"},{"$ref":"#/definitions/$data"}]},"minProperties":{"anyOf":[{"$ref":"#/definitions/positiveIntegerDefault0"},{"$ref":"#/definitions/$data"}]},"required":{"anyOf":[{"$ref":"#/definitions/stringArray"},{"$ref":"#/definitions/$data"}]},"additionalProperties":{"anyOf":[{"type":"boolean"},{"$ref":"#"},{"$ref":"#/definitions/$data"}],"default":{}},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"enum":{"anyOf":[{"type":"array","minItems":1,"uniqueItems":true},{"$ref":"#/definitions/$data"}]},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"},"format":{"anyOf":[{"type":"string"},{"$ref":"#/definitions/$data"}]},"formatMaximum":{"anyOf":[{"type":"string"},{"$ref":"#/definitions/$data"}]},"formatMinimum":{"anyOf":[{"type":"string"},{"$ref":"#/definitions/$data"}]},"formatExclusiveMaximum":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"formatExclusiveMinimum":{"anyOf":[{"type":"boolean","default":false},{"$ref":"#/definitions/$data"}]},"constant":{"anyOf":[{},{"$ref":"#/definitions/$data"}]},"contains":{"$ref":"#"},"patternGroups":{"type":"object","additionalProperties":{"type":"object","required":["schema"],"properties":{"maximum":{"anyOf":[{"$ref":"#/definitions/positiveInteger"},{"$ref":"#/definitions/$data"}]},"minimum":{"anyOf":[{"$ref":"#/definitions/positiveIntegerDefault0"},{"$ref":"#/definitions/$data"}]},"schema":{"$ref":"#"}},"additionalProperties":false},"default":{}},"switch":{"type":"array","items":{"required":["then"],"properties":{"if":{"$ref":"#"},"then":{"anyOf":[{"type":"boolean"},{"$ref":"#"}]},"continue":{"type":"boolean"}},"additionalProperties":false,"dependencies":{"continue":["if"]}}}},"dependencies":{"exclusiveMaximum":["maximum"],"exclusiveMinimum":["minimum"],"formatMaximum":["format"],"formatMinimum":["format"],"formatExclusiveMaximum":["formatMaximum"],"formatExclusiveMinimum":["formatMinimum"]},"default":{}}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var META_SCHEMA_ID = 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json';

module.exports = {
  enable: enableV5,
  META_SCHEMA_ID: META_SCHEMA_ID
};


function enableV5(ajv) {
  var inlineFunctions = {
    'switch': __webpack_require__(80),
    'constant': __webpack_require__(66),
    '_formatLimit': __webpack_require__(63),
    'patternRequired': __webpack_require__(76)
  };

  if (ajv._opts.meta !== false) {
    var metaSchema = __webpack_require__(84);
    ajv.addMetaSchema(metaSchema, META_SCHEMA_ID);
  }
  _addKeyword('constant');
  ajv.addKeyword('contains', { type: 'array', macro: containsMacro });

  _addKeyword('formatMaximum', 'string', inlineFunctions._formatLimit);
  _addKeyword('formatMinimum', 'string', inlineFunctions._formatLimit);
  ajv.addKeyword('formatExclusiveMaximum');
  ajv.addKeyword('formatExclusiveMinimum');

  ajv.addKeyword('patternGroups'); // implemented in properties.jst
  _addKeyword('patternRequired', 'object');
  _addKeyword('switch');


  function _addKeyword(keyword, types, inlineFunc) {
    var definition = {
      inline: inlineFunc || inlineFunctions[keyword],
      statements: true,
      errors: 'full'
    };
    if (types) definition.type = types;
    ajv.addKeyword(keyword, definition);
  }
}


function containsMacro(schema) {
  return {
    not: { items: { not: schema } }
  };
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_main_wrap__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crypto__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoWorker", function() { return __WEBPACK_IMPORTED_MODULE_1__crypto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bin__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bin", function() { return __WEBPACK_IMPORTED_MODULE_2__bin__["bin"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_manager_index__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ApiManager", function() { return __WEBPACK_IMPORTED_MODULE_3__service_api_manager_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_log__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setLogger", function() { return __WEBPACK_IMPORTED_MODULE_4__util_log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_time_manager__ = __webpack_require__(5);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MtpTimeManager", function() { return __WEBPACK_IMPORTED_MODULE_5__service_time_manager__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MTProto", function() { return __WEBPACK_IMPORTED_MODULE_0__service_main_wrap__["a"]; });










/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__service_main_wrap__["a" /* default */]);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTypeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isSimpleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFlags; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_has__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda_src_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_flip__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_flip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_flip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_contains__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_contains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda_src_contains__);




class TypeClass {
  constructor(name) {
    this.types = new Set();

    this.name = name;
  }
  isTypeOf(value) {
    return false;
  }
}

class Argument {
  constructor(id, name, typeClass, isVector = false, isBare = false, isFlag = false, flagIndex = NaN) {
    this.name = name;
    this.typeClass = typeClass;
    this.isVector = isVector;
    this.isBare = isBare;
    this.isFlag = isFlag;
    this.flagIndex = flagIndex;
    this.id = id;

    this.fullType = Argument.fullType(this);
  }
  static fullType(obj) {
    var { typeClass, isVector, isFlag, flagIndex } = obj;
    var result = typeClass;
    if (isVector) result = `Vector<${result}>`;
    if (isFlag) result = `flags.${flagIndex}?${result}`;
    return result;
  }
}

class Creator {
  //predicate or method
  constructor(id, name, hasFlags, params) {
    this.id = id;
    this.name = name;
    this.hasFlags = hasFlags;
    this.params = params;
  }
}

class Method extends Creator {
  constructor(id, name, hasFlags, params, returns) {
    super(id, name, hasFlags, params);
    this.returns = returns;
  }
}

class Type extends Creator {
  constructor(id, name, hasFlags, params, typeClass) {
    super(id, name, hasFlags, params);
    this.typeClass = typeClass;
  }
}

var isFlagItself = param => param.name === 'flags' && param.type === '#';

class Layout {
  makeCreator(elem, name, sign, Construct) {
    var args = [];
    var hasFlags = false;
    for (var _iterator = elem.params.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var [i, param] = _ref;

      if (isFlagItself(param)) {
        hasFlags = true;
        continue;
      }
      var _id = `${name}.${param.name}/${i}`;
      var { typeClass, isVector, isFlag, flagIndex, isBare } = getTypeProps(param.type);
      if (isFlag) hasFlags = true;
      this.pushTypeClass(typeClass);
      var arg = new Argument(_id, param.name, typeClass, isVector, isBare, isFlag, flagIndex);
      args.push(arg);
      this.args.set(_id, arg);
    }
    var id = parseInt(elem.id, 10);
    var creator = new Construct(id, name, hasFlags, args, sign);
    this.creators.add(name);
    if (creator instanceof Method) this.funcs.set(name, creator);else if (creator instanceof Type) {
      this.types.set(name, creator);
      this.typesById.set(id, creator);
    }
  }
  makeMethod(elem) {
    var name = elem.method;
    var returns = elem.type;
    this.pushTypeClass(returns, name);
    this.makeCreator(elem, name, returns, Method);
  }
  pushTypeClass(typeClass, type) {
    var instance = void 0;
    if (this.typeClasses.has(typeClass)) instance = this.typeClasses.get(typeClass);else {
      instance = new TypeClass(typeClass);
      this.typeClasses.set(typeClass, instance);
    }
    if (type && instance) instance.types.add(type);
  }
  makeType(elem) {
    var name = elem.predicate;
    var typeClass = elem.type;
    this.pushTypeClass(typeClass, name);
    this.makeCreator(elem, name, typeClass, Type);
  }
  makeLayout(schema) {
    var { methods, constructors } = schema;
    constructors.map(this.makeType);
    methods.map(this.makeMethod);
    for (var _iterator2 = this.types.entries(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var [key, _type] = _ref2;

      if (hasEmpty(key)) this.typeDefaults.set(_type.typeClass, { _: key });
    }
  }
  constructor(schema) {
    this.typeClasses = new Map();
    this.creators = new Set();
    this.args = new Map();
    this.funcs = new Map();
    this.types = new Map();
    this.typesById = new Map();
    this.typeDefaults = new Map();

    //$FlowIssue
    this.makeType = this.makeType.bind(this);
    //$FlowIssue
    this.makeMethod = this.makeMethod.bind(this);
    // this.schema = schema
    this.makeLayout(schema);
  }
}
/* unused harmony export Layout */

var hasEmpty = __WEBPACK_IMPORTED_MODULE_2_ramda_src_contains___default()('Empty');
var hasQuestion = __WEBPACK_IMPORTED_MODULE_2_ramda_src_contains___default()('?');
var hasVector = __WEBPACK_IMPORTED_MODULE_2_ramda_src_contains___default()('<');
var hasBare = __WEBPACK_IMPORTED_MODULE_2_ramda_src_contains___default()('%');

var getTypeProps = rawType => {
  var result = {
    typeClass: rawType,
    isVector: false,
    isFlag: false,
    flagIndex: NaN,
    isBare: false
  };
  if (hasQuestion(rawType)) {
    var [prefix, rest] = rawType.split('?');
    var [, index] = prefix.split('.');
    result.isFlag = true;
    result.flagIndex = +index;
    result.typeClass = rest;
  }
  if (hasVector(result.typeClass)) {
    result.isVector = true;
    result.typeClass = result.typeClass.slice(7, -1);
  }
  if (hasBare(result.typeClass)) {
    result.isBare = true;
    result.typeClass = result.typeClass.slice(1);
  }
  return result;
};

var isSimpleType = __WEBPACK_IMPORTED_MODULE_1_ramda_src_flip___default()(__WEBPACK_IMPORTED_MODULE_2_ramda_src_contains___default.a)(['int', /*'long',*/'string', /*'double', */'true'] /*'bytes'*/);

var getFlagsRed = data => (acc, { name, flagIndex }) => __WEBPACK_IMPORTED_MODULE_0_ramda_src_has___default()(name, data) ? acc + Math.pow(2, flagIndex) : acc;

function _ref3(e) {
  return e.isFlag;
}

var getFlags = ({ params }) => {
  var flagsParams = params.filter(_ref3);

  return data => flagsParams.reduce(getFlagsRed(data), 0);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return switchErrors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_isNil__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda_src_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_propOr__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_propOr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_propOr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_defer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_switch__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_manager__ = __webpack_require__(5);







var cachedExportPromise = {};

var protect = ({ code = NaN, type = '' }, { rawError = null }, dcID, baseDcID) => ({
  base: baseDcID,
  errR: rawError,
  code,
  type,
  dcID
});

var patterns = {
  noBaseAuth: ({ code, dcID, base }) => code === 401 && dcID === base,
  noDcAuth: ({ code, dcID, base }) => code === 401 && dcID !== base,
  waitFail: ({ code, type, errR }) => !errR && (code === 500 || type === 'MSG_WAIT_FAILED'),
  _: () => true
};

var matchProtect = matched => (error, options, dcID, emit, rejectPromise, requestThunk, apiSavedNet, apiRecall, deferResolve, mtpInvokeApi, storage) => matched({
  invoke: mtpInvokeApi,
  throwNext: () => rejectPromise(error),
  reject: rejectPromise,
  options,
  dcID,
  emit,
  requestThunk,
  apiRecall,
  deferResolve,
  apiSavedNet,
  storage
});

var noBaseAuth = ({ emit, throwNext, storage }) => {
  storage.remove('dc', 'user_auth');
  emit('error.401.base');
  throwNext();
};

var noDcAuth = ({ dcID, reject, apiSavedNet, apiRecall, deferResolve, invoke }) => {
  var importAuth = ({ id, bytes }) => invoke('auth.importAuthorization', { id, bytes }, { dcID, noErrorBox: true });

  if (__WEBPACK_IMPORTED_MODULE_0_ramda_src_isNil___default()(cachedExportPromise[dcID])) {
    var exportDeferred = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_defer__["a" /* default */])();

    invoke('auth.exportAuthorization', { dc_id: dcID }, { noErrorBox: true }).then(importAuth).then(exportDeferred.resolve).catch(exportDeferred.reject);

    cachedExportPromise[dcID] = exportDeferred.promise;
  }

  cachedExportPromise[dcID] //TODO not returning promise
  .then(apiSavedNet).then(apiRecall).then(deferResolve).catch(reject);
};
/*
const migrate = ({ error, dcID, options, reject,
    apiRecall, deferResolve, getNet, storage
  }) => {
  const newDcID = error.type.match(/^(PHONE_MIGRATE_|NETWORK_MIGRATE_|USER_MIGRATE_)(\d+)/)[2]
  if (newDcID === dcID) return
  if (options.dcID)
    options.dcID = newDcID
  else
    storage.set('dc', newDcID)

  getNet(newDcID, options)
    .then(apiRecall)
    .then(deferResolve)
    .catch(reject)
}*/

/*const floodWait = ({ error, options, throwNext, requestThunk }) => {
  const waitTime = error.type.match(/^FLOOD_WAIT_(\d+)/)[1] || 10
  if (waitTime > (options.timeout || 60))
    return throwNext()
  requestThunk(waitTime)
}*/

var waitFail = ({ options, throwNext, requestThunk }) => {
  var now = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__time_manager__["tsNow"])();
  if (options.stopTime) {
    if (now >= options.stopTime) return throwNext();
  } else options.stopTime = now + __WEBPACK_IMPORTED_MODULE_1_ramda_src_propOr___default()(10, 'timeout', options) * 1000;
  options.waitTime = options.waitTime ? Math.min(60, options.waitTime * 1.5) : 1;
  requestThunk(options.waitTime);
};

var def = ({ throwNext }) => throwNext();

var switchErrors = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_switch__["a" /* default */])(patterns, protect)({
  noBaseAuth,
  noDcAuth,
  waitFail,
  _: def
}, matchProtect);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_log__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_smart_timeout__ = __webpack_require__(7);



var debug = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_log__["b" /* default */])([`request`]);





class Request {
  constructor(config, method, params = {}) {
    this.initNetworker = () => {
      if (!this.config.networker) {
        var { getNetworker: _getNetworker, netOpts: _netOpts, dc: _dc } = this.config;
        return _getNetworker(_dc, _netOpts).then(this.saveNetworker);
      }
      return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(this.config.networker);
    };

    this.saveNetworker = networker => this.config.networker = networker;

    this.performRequest = () => this.initNetworker().then(this.requestWith);

    this.requestWith = networker => networker.wrapApiCall(this.method, this.params, this.config.netOpts).catch({ code: 303 }, this.error303).catch({ code: 420 }, this.error420);

    this.config = config;
    this.method = method;
    this.params = params;

    this.performRequest = this.performRequest.bind(this);
    //$FlowIssue
    this.error303 = this.error303.bind(this);
    //$FlowIssue
    this.error420 = this.error420.bind(this);
    this.initNetworker = this.initNetworker.bind(this);
  }

  error303(err) {
    var matched = err.type.match(/^(PHONE_MIGRATE_|NETWORK_MIGRATE_|USER_MIGRATE_)(\d+)/);
    if (!matched || matched.length < 2) return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(err);
    var [,, newDcID] = matched;
    if (+newDcID === this.config.dc) return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(err);
    this.config.dc = +newDcID;
    delete this.config.networker;
    /*if (this.config.dc)
      this.config.dc = newDcID
    else
      await this.config.storage.set('dc', newDcID)*/
    //TODO There is disabled ability to change default DC
    //NOTE Shouldn't we must reassign current networker/cachedNetworker?
    return this.performRequest();
  }
  error420(err) {
    var matched = err.type.match(/^FLOOD_WAIT_(\d+)/);
    if (!matched || matched.length < 2) return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(err);
    var [, waitTime] = matched;
    console.error(`Flood error! It means that mtproto server bans you on ${waitTime} seconds`);
    return +waitTime > 60 ? __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(err) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_smart_timeout__["c" /* delayedCall */])(this.performRequest, +waitTime * 1e3);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Request);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Auth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_defer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_smart_timeout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crypto__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__secure_random__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_manager__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vendor_leemon__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_log__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__send_plain_req__ = __webpack_require__(91);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }















var log = __WEBPACK_IMPORTED_MODULE_8__util_log__["b" /* default */]`auth`;

// import { ErrorBadResponse } from '../../error'



var primeHex = 'c71caeb9c6b1c9048e6c522f70f13f73980d40238e3e21c14934d037563d93' + '0f48198a0aa7c14058229493d22530f4dbfa336f6e0ac925139543aed44cce7c3720fd51f6945' + '8705ac68cd4fe6b6b13abdc9746512969328454f18faf8c595f642477fe96bb2a941d5bcd1d4a' + 'c8cc49880708fa9b378e3c4f3a9060bee67cf9a4a4a695811051907e162753b56b0f6b410dba7' + '4d8a84b2a14b3144e0ef1284754fd17ed950d5965b4b9dd46582db1178d169c6bc465b0d6ff9c' + 'a3928fef5b9ae4e418fc15e83ebea0f87fa9ff5eed70050ded2849f47bf959d956850ce929851' + 'f0d8115f635b105ee2e4e15d04b2454bf6f4fadf034b10403119cd8e3b92fcc5b';

var concat = (e1, e2) => [...e1, ...e2];

var tmpAesKey = (serverNonce, newNonce) => {
  var arr1 = concat(newNonce, serverNonce);
  var arr2 = concat(serverNonce, newNonce);
  var key1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(arr1);
  var key2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(arr2).slice(0, 12);
  return key1.concat(key2);
};

var tmpAesIv = (serverNonce, newNonce) => {
  var arr1 = concat(serverNonce, newNonce);
  var arr2 = concat(newNonce, newNonce);
  var arr3 = newNonce.slice(0, 4);
  var key1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(arr1);
  var key2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(arr2);
  return key1.slice(12).concat(key2, arr3);
};

var minSize = Math.ceil(64 / __WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["h" /* bpe */]) + 1;

var getTwoPow = () => {
  //Dirty hack to count 2^(2048 - 64)
  //This number contains 496 zeroes in hex
  var arr = Array(496).fill('0');
  arr.unshift('1');
  var hex = arr.join('');
  var res = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["b" /* str2bigInt */])(hex, 16, minSize);
  return res;
};

var leemonTwoPow = getTwoPow();

function mtpVerifyDhParams(g, dhPrime, gA) {
  var innerLog = log('VerifyDhParams');
  innerLog('begin');
  var dhPrimeHex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["f" /* bytesToHex */])(dhPrime);
  if (g !== 3 || dhPrimeHex !== primeHex)
    // The verified value is from https://core.telegram.org/mtproto/security_guidelines
    throw new Error('[MT] DH params are not verified: unknown dhPrime');
  innerLog('dhPrime cmp OK');

  // const gABigInt = new BigInteger(bytesToHex(gA), 16)
  // const dhPrimeBigInt = new BigInteger(dhPrimeHex, 16)

  var dhPrimeLeemon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["b" /* str2bigInt */])(dhPrimeHex, 16, minSize);
  var gALeemon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["b" /* str2bigInt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["f" /* bytesToHex */])(gA), 16, minSize);
  var dhDec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["q" /* dup */])(dhPrimeLeemon);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["m" /* sub_ */])(dhDec, __WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["p" /* one */]);
  // const dhDecStr = bigInt2str(dhDec, 16)
  // const comp = dhPrimeBigInt.subtract(BigInteger.ONE).toString(16)
  // console.log(dhPrimeLeemon, dhDecStr === comp)
  var case1 = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["l" /* greater */])(gALeemon, __WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["p" /* one */]);
  //gABigInt.compareTo(BigInteger.ONE) <= 0
  var case2 = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["l" /* greater */])(dhDec, gALeemon);
  //gABigInt.compareTo(dhPrimeBigInt.subtract(BigInteger.ONE)) >= 0
  if (case1) throw new Error('[MT] DH params are not verified: gA <= 1');

  if (case2) throw new Error('[MT] DH params are not verified: gA >= dhPrime - 1');
  // console.log(dTime(), '1 < gA < dhPrime-1 OK')


  // const two = new BigInteger(null)
  // two.fromInt(2)
  // const twoPow = two.pow(2048 - 64)

  var case3 = !!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["l" /* greater */])(leemonTwoPow, gALeemon);
  //gABigInt.compareTo(twoPow) < 0
  var dhSubPow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["q" /* dup */])(dhPrimeLeemon);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["r" /* sub */])(dhSubPow, leemonTwoPow);
  var case4 = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__vendor_leemon__["l" /* greater */])(dhSubPow, gALeemon);
  //gABigInt.compareTo(dhPrimeBigInt.subtract(twoPow)) >= 0
  // console.log(case3 === gABigInt.compareTo(twoPow) < 0)
  if (case3) throw new Error('[MT] DH params are not verified: gA < 2^{2048-64}');
  if (case4) throw new Error('[MT] DH params are not verified: gA > dhPrime - 2^{2048-64}');
  innerLog('2^{2048-64} < gA < dhPrime-2^{2048-64} OK');

  return true;
}

var Auth = ({ Serialization, Deserialization }, { select, prepare }) => {
  function* _ref4(auth) {
    var deferred = auth.deferred;
    log('Send req_pq')(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["f" /* bytesToHex */])(auth.nonce));

    var request = Serialization({ mtproto: true });
    var reqBox = request.writer;
    request.storeMethod('req_pq', { nonce: auth.nonce });

    var deserializer = void 0;
    try {
      yield prepare();
      deserializer = yield sendPlainReq(auth.dcUrl, reqBox.getBuffer());
    } catch (err) {
      console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__time_manager__["dTime"])(), 'req_pq error', err.message);
      deferred.reject(err);
      throw err;
    }

    try {
      var response = deserializer.fetchObject('ResPQ', 'ResPQ');

      if (response._ !== 'resPQ') {
        var error = new Error(`[MT] resPQ response invalid: ${response._}`);
        deferred.reject(error);
        return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(error);
      }
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(auth.nonce, response.nonce)) {
        var _error = new Error('[MT] resPQ nonce mismatch');
        deferred.reject(_error);
        return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(_error);
      }
      auth.serverNonce = response.server_nonce;
      auth.pq = response.pq;
      auth.fingerprints = response.server_public_key_fingerprints;

      log('Got ResPQ')(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["f" /* bytesToHex */])(auth.serverNonce), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["f" /* bytesToHex */])(auth.pq), auth.fingerprints);

      var key = yield select(auth.fingerprints);

      if (key) auth.publicKey = key;else {
        var _error2 = new Error('[MT] No public key found');
        deferred.reject(_error2);
        return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(_error2);
      }
      log('PQ factorization start')(auth.pq);
      var [_p, _q, it] = yield __WEBPACK_IMPORTED_MODULE_3__crypto__["b" /* default */].factorize(auth.pq);

      auth.p = _p;
      auth.q = _q;
      log('PQ factorization done')(it);
    } catch (error) {
      log('Worker error')(error, error.stack);
      deferred.reject(error);
      throw error;
    }

    return auth;
  }

  var mtpSendReqPQ = (() => {
    var _ref = _asyncToGenerator(_ref4);

    return function mtpSendReqPQ(_x) {
      return _ref.apply(this, arguments);
    };
  })();

  function* _ref5(auth) {
    var deferred = auth.deferred;

    auth.newNonce = new Array(32);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__secure_random__["a" /* default */])(auth.newNonce);

    var data = Serialization({ mtproto: true });
    var dataBox = data.writer;
    data.storeObject({
      _: 'p_q_inner_data',
      pq: auth.pq,
      p: auth.p,
      q: auth.q,
      nonce: auth.nonce,
      server_nonce: auth.serverNonce,
      new_nonce: auth.newNonce
    }, 'P_Q_inner_data', 'DECRYPTED_DATA');

    var dataWithHash = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(dataBox.getBuffer()).concat(data.getBytes());

    var request = Serialization({ mtproto: true });
    var reqBox = request.writer;
    request.storeMethod('req_DH_params', {
      nonce: auth.nonce,
      server_nonce: auth.serverNonce,
      p: auth.p,
      q: auth.q,
      public_key_fingerprint: auth.publicKey.fingerprint,
      encrypted_data: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["z" /* rsaEncrypt */])(auth.publicKey, dataWithHash)
    });

    log('afterReqDH')('Send req_DH_params');

    var deserializer = void 0;
    try {
      deserializer = yield sendPlainReq(auth.dcUrl, reqBox.getBuffer());
    } catch (error) {
      deferred.reject(error);
      throw error;
    }

    var response = deserializer.fetchObject('Server_DH_Params', 'RESPONSE');

    if (response._ !== 'server_DH_params_fail' && response._ !== 'server_DH_params_ok') {
      var error = new Error(`[MT] Server_DH_Params response invalid: ${response._}`);
      deferred.reject(error);
      throw error;
    }

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(auth.nonce, response.nonce)) {
      var _error3 = new Error('[MT] Server_DH_Params nonce mismatch');
      deferred.reject(_error3);
      throw _error3;
    }

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(auth.serverNonce, response.server_nonce)) {
      var _error4 = new Error('[MT] Server_DH_Params server_nonce mismatch');
      deferred.reject(_error4);
      throw _error4;
    }

    if (response._ === 'server_DH_params_fail') {
      var newNonceHash = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(auth.newNonce).slice(-16);
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(newNonceHash, response.new_nonce_hash)) {
        var _error6 = new Error('[MT] server_DH_params_fail new_nonce_hash mismatch');
        deferred.reject(_error6);
        throw _error6;
      }
      var _error5 = new Error('[MT] server_DH_params_fail');
      deferred.reject(_error5);
      throw _error5;
    }

    // try {
    mtpDecryptServerDhDataAnswer(auth, response.encrypted_answer);
    // } catch (e) {
    //   deferred.reject(e)
    //   return false
    // }

    return auth;
  }

  var mtpSendReqDhParams = (() => {
    var _ref2 = _asyncToGenerator(_ref5);

    return function mtpSendReqDhParams(_x2) {
      return _ref2.apply(this, arguments);
    };
  })();

  function* _ref6(auth) {
    var deferred = auth.deferred;
    var gBytes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["y" /* bytesFromHex */])(auth.g.toString(16));

    auth.b = new Array(256);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__secure_random__["a" /* default */])(auth.b);

    var gB = yield __WEBPACK_IMPORTED_MODULE_3__crypto__["b" /* default */].modPow(gBytes, auth.b, auth.dhPrime);
    var data = Serialization({ mtproto: true });

    data.storeObject({
      _: 'client_DH_inner_data',
      nonce: auth.nonce,
      server_nonce: auth.serverNonce,
      retry_id: [0, auth.retry++],
      g_b: gB
    }, 'Client_DH_Inner_Data', 'client_DH');

    var dataWithHash = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(data.writer.getBuffer()).concat(data.getBytes());

    var encryptedData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["t" /* aesEncryptSync */])(dataWithHash, auth.tmpAesKey, auth.tmpAesIv);

    var request = Serialization({ mtproto: true });

    request.storeMethod('set_client_DH_params', {
      nonce: auth.nonce,
      server_nonce: auth.serverNonce,
      encrypted_data: encryptedData
    });

    log('onGb')('Send set_client_DH_params');

    var deserializer = yield sendPlainReq(auth.dcUrl, request.writer.getBuffer());

    var response = deserializer.fetchObject('Set_client_DH_params_answer', 'client_dh');

    if (response._ != 'dh_gen_ok' && response._ != 'dh_gen_retry' && response._ != 'dh_gen_fail') {
      var error = new Error(`[MT] Set_client_DH_params_answer response invalid: ${response._}`);
      deferred.reject(error);
      throw error;
    }

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(auth.nonce, response.nonce)) {
      var _error7 = new Error('[MT] Set_client_DH_params_answer nonce mismatch');
      deferred.reject(_error7);
      throw _error7;
    }

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(auth.serverNonce, response.server_nonce)) {
      var _error8 = new Error('[MT] Set_client_DH_params_answer server_nonce mismatch');
      deferred.reject(_error8);
      throw _error8;
    }

    var authKey = yield __WEBPACK_IMPORTED_MODULE_3__crypto__["b" /* default */].modPow(auth.gA, auth.b, auth.dhPrime);

    var authKeyHash = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(authKey),
        authKeyAux = authKeyHash.slice(0, 8),
        authKeyID = authKeyHash.slice(-8);

    log('Got Set_client_DH_params_answer')(response._);
    switch (response._) {
      case 'dh_gen_ok':
        {
          var newNonceHash1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(auth.newNonce.concat([1], authKeyAux)).slice(-16);

          if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(newNonceHash1, response.new_nonce_hash1)) {
            deferred.reject(new Error('[MT] Set_client_DH_params_answer new_nonce_hash1 mismatch'));
            return false;
          }

          var _serverSalt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["A" /* bytesXor */])(auth.newNonce.slice(0, 8), auth.serverNonce.slice(0, 8));
          // console.log('Auth successfull!', authKeyID, authKey, serverSalt)

          auth.authKeyID = authKeyID;
          auth.authKey = authKey;
          auth.serverSalt = _serverSalt;

          deferred.resolve(auth);
          break;
        }
      case 'dh_gen_retry':
        {
          var newNonceHash2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(auth.newNonce.concat([2], authKeyAux)).slice(-16);
          if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(newNonceHash2, response.new_nonce_hash2)) {
            deferred.reject(new Error('[MT] Set_client_DH_params_answer new_nonce_hash2 mismatch'));
            return false;
          }

          return mtpSendSetClientDhParams(auth);
        }
      case 'dh_gen_fail':
        {
          var newNonceHash3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(auth.newNonce.concat([3], authKeyAux)).slice(-16);
          if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(newNonceHash3, response.new_nonce_hash3)) {
            deferred.reject(new Error('[MT] Set_client_DH_params_answer new_nonce_hash3 mismatch'));
            return false;
          }

          deferred.reject(new Error('[MT] Set_client_DH_params_answer fail'));
          return false;
        }
    }
  }

  var mtpSendSetClientDhParams = (() => {
    var _ref3 = _asyncToGenerator(_ref6);

    return function mtpSendSetClientDhParams(_x3) {
      return _ref3.apply(this, arguments);
    };
  })();

  var sendPlainReq = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__send_plain_req__["a" /* default */])({ Serialization, Deserialization });

  function mtpDecryptServerDhDataAnswer(auth, encryptedAnswer) {
    auth.tmpAesKey = tmpAesKey(auth.serverNonce, auth.newNonce);
    auth.tmpAesIv = tmpAesIv(auth.serverNonce, auth.newNonce);

    var answerWithHash = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["u" /* aesDecryptSync */])(encryptedAnswer, auth.tmpAesKey, auth.tmpAesIv);

    var hash = answerWithHash.slice(0, 20);
    var answerWithPadding = answerWithHash.slice(20);
    var buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["h" /* bytesToArrayBuffer */])(answerWithPadding);

    var deserializer = Deserialization(buffer, { mtproto: true });
    var response = deserializer.fetchObject('Server_DH_inner_data', 'server_dh');

    if (response._ !== 'server_DH_inner_data') throw new Error(`[MT] server_DH_inner_data response invalid`);

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(auth.nonce, response.nonce)) throw new Error('[MT] server_DH_inner_data nonce mismatch');

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(auth.serverNonce, response.server_nonce)) throw new Error('[MT] server_DH_inner_data serverNonce mismatch');

    log('DecryptServerDhDataAnswer')('Done decrypting answer');
    auth.g = response.g;
    auth.dhPrime = response.dh_prime;
    auth.gA = response.g_a;
    auth.serverTime = response.server_time;
    auth.retry = 0;

    mtpVerifyDhParams(auth.g, auth.dhPrime, auth.gA);

    var offset = deserializer.getOffset();

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["e" /* bytesCmp */])(hash, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["d" /* sha1BytesSync */])(answerWithPadding.slice(0, offset)))) throw new Error('[MT] server_DH_inner_data SHA1-hash mismatch');

    auth.localTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__time_manager__["tsNow"])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__time_manager__["applyServerTime"])(auth.serverTime, auth.localTime);
  }

  var authChain = auth => mtpSendReqPQ(auth).then(mtpSendReqDhParams).then(mtpSendSetClientDhParams);

  function mtpAuth(dcID, cached, dcUrl) {
    if (cached[dcID]) return cached[dcID].promise;
    log('mtpAuth', 'dcID', 'dcUrl')(dcID, dcUrl);
    var nonce = [];
    for (var i = 0; i < 16; i++) {
      nonce.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__bin__["l" /* nextRandomInt */])(0xFF));
    }if (!dcUrl) return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(new Error(`[MT] No server found for dc ${dcID} url ${dcUrl}`));

    var auth = {
      dcID,
      dcUrl,
      nonce,
      deferred: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_defer__["a" /* default */])()
    };

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_smart_timeout__["b" /* immediate */])(authChain, auth);

    cached[dcID] = auth.deferred;

    cached[dcID].promise.catch(() => {
      delete cached[dcID];
    });

    return cached[dcID].promise;
  }

  return mtpAuth;
};
/* harmony default export */ __webpack_exports__["a"] = (Auth);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_has__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_pathEq__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_pathEq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda_src_pathEq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_allPass__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_allPass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda_src_allPass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__time_manager__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tl__ = __webpack_require__(12);











var is404 = __WEBPACK_IMPORTED_MODULE_2_ramda_src_pathEq___default()(['response', 'status'], 404);
var notError = __WEBPACK_IMPORTED_MODULE_3_ramda_src_allPass___default()([__WEBPACK_IMPORTED_MODULE_1_ramda_src_has___default()('message'), __WEBPACK_IMPORTED_MODULE_1_ramda_src_has___default()('type')]);

function _ref(err) {
  var error = void 0;
  switch (true) {
    case is404(err):
      error = new __WEBPACK_IMPORTED_MODULE_5__error__["e" /* ErrorNotFound */](err);
      break;
    case notError(err):
      error = new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* ErrorBadResponse */]('', err);
      break;
    default:
      error = err;
  }
  return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(error);
}

var SendPlain = ({ Serialization, Deserialization }) => {
  var onlySendPlainReq = (url, requestBuffer) => {
    var requestLength = requestBuffer.byteLength,
        requestArray = new Int32Array(requestBuffer);

    var header = Serialization();
    var headBox = header.writer;

    __WEBPACK_IMPORTED_MODULE_7__tl__["b" /* WriteMediator */].longP(headBox, 0, 0, 'auth_key_id'); // Auth key
    __WEBPACK_IMPORTED_MODULE_7__tl__["b" /* WriteMediator */].long(headBox, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["generateID"])(), 'msg_id'); // Msg_id
    __WEBPACK_IMPORTED_MODULE_7__tl__["b" /* WriteMediator */].int(headBox, requestLength, 'request_length');

    var headerBuffer = headBox.getBuffer(),
        headerArray = new Int32Array(headerBuffer);
    var headerLength = headerBuffer.byteLength;

    var resultBuffer = new ArrayBuffer(headerLength + requestLength),
        resultArray = new Int32Array(resultBuffer);

    resultArray.set(headerArray);
    resultArray.set(requestArray, headerArray.length);

    var requestData = resultArray;
    // let reqPromise
    // try {
    var reqPromise = __WEBPACK_IMPORTED_MODULE_4__http__["b" /* default */].post(url, requestData, {
      responseType: 'arraybuffer'
    });
    // } catch (e) {
    //   reqPromise = Promise.reject(new ErrorBadResponse(url, e))
    // }
    return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.props({ url, req: reqPromise });
  };

  var onlySendPlainErr = _ref;

  var onlySendPlainRes = ({ url, req }) => {
    if (!req.data || !req.data.byteLength) return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* ErrorBadResponse */](url));
    var deserializer = void 0;
    try {
      deserializer = Deserialization(req.data, { mtproto: true });
      var ctx = deserializer.typeBuffer;
      __WEBPACK_IMPORTED_MODULE_7__tl__["c" /* ReadMediator */].long(ctx, 'auth_key_id');
      __WEBPACK_IMPORTED_MODULE_7__tl__["c" /* ReadMediator */].long(ctx, 'msg_id');
      __WEBPACK_IMPORTED_MODULE_7__tl__["c" /* ReadMediator */].int(ctx, 'msg_len');
    } catch (e) {
      return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* ErrorBadResponse */](url, e));
    }

    return deserializer;
  };

  var sendPlainReq = (url, requestBuffer) => onlySendPlainReq(url, requestBuffer).then(onlySendPlainRes, onlySendPlainErr);

  return sendPlainReq;
};

/* harmony default export */ __webpack_exports__["a"] = (SendPlain);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chooseServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_has__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda_src_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda_src_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_propEq__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda_src_propEq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda_src_propEq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_find__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda_src_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_pipe__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda_src_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_prop__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_prop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ramda_src_prop__);






var sslSubdomains = ['pluto', 'venus', 'aurora', 'vesta', 'flora'];

var devDC = [{ id: 1, host: '149.154.175.10', port: 80 }, { id: 2, host: '149.154.167.40', port: 80 }, { id: 3, host: '149.154.175.117', port: 80 }];

var prodDC = [{ id: 1, host: '149.154.175.50', port: 80 }, { id: 2, host: '149.154.167.51', port: 80 }, { id: 3, host: '149.154.175.100', port: 80 }, { id: 4, host: '149.154.167.91', port: 80 }, { id: 5, host: '149.154.171.5', port: 80 }];

var portString = ({ port = 80 }) => port === 80 ? '' : `:${port}`;

var findById = __WEBPACK_IMPORTED_MODULE_3_ramda_src_pipe___default()(__WEBPACK_IMPORTED_MODULE_1_ramda_src_propEq___default()('id'), __WEBPACK_IMPORTED_MODULE_2_ramda_src_find___default.a);

var chooseServer = (chosenServers, {
  dev = false,
  webogram = false,
  dcList = dev ? devDC : prodDC
} = {}) => (dcID, upload = false) => {
  var choosen = __WEBPACK_IMPORTED_MODULE_4_ramda_src_prop___default()(dcID);
  if (__WEBPACK_IMPORTED_MODULE_0_ramda_src_has___default()(dcID, chosenServers)) return choosen(chosenServers);
  var chosenServer = false;

  if (webogram) {
    var subdomain = sslSubdomains[dcID - 1] + (upload ? '-1' : '');
    var path = dev ? 'apiw_test1' : 'apiw1';
    chosenServer = `https://${subdomain}.web.telegram.org/${path}`;
    return chosenServer; //TODO Possibly bug. Isn't it necessary? chosenServers[dcID] = chosenServer
  }
  var dcOption = findById(parseInt(dcID))(dcList);
  if (dcOption) chosenServer = `http://${dcOption.host}${portString(dcOption)}/apiw1`;
  chosenServers[dcID] = chosenServer;

  return choosen(chosenServers);
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ajv__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ajv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv_keywords_keywords_typeof__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ajv_keywords_keywords_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ajv_keywords_keywords_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_propIs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_propIs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda_src_propIs__);




var type = {
  func: { typeof: 'function' },
  num: { type: 'number' },
  str: { type: 'string' },
  bool: { type: 'boolean' },
  obj: { type: 'object' }
};

var app = {
  type: 'object',
  properties: {
    publicKeys: {
      type: 'array',
      uniqueItems: true
    },
    storage: {
      type: 'object',
      required: ['get', 'set', 'remove', 'clear'],
      properties: {
        get: type.func,
        set: type.func,
        remove: type.func,
        clear: type.func
      },
      additionalProperties: true
    }
  },
  additionalProperties: false
};

var api = {
  type: 'object',
  required: ['layer', 'api_id'],
  properties: {
    invokeWithLayer: type.num,
    layer: type.num,
    initConnection: type.num,
    api_id: type.num,
    device_model: type.str,
    system_version: type.str,
    app_version: type.str,
    lang_code: type.str
  },
  additionalProperties: false
};

var dc = {
  type: 'object',
  required: ['id', 'host'],
  properties: {
    id: type.num,
    host: type.str,
    port: type.num
  },
  additionalProperties: false
};

var server = {
  type: 'object',
  properties: {
    dev: type.bool,
    webogram: type.bool,
    dcList: {
      type: 'array',
      uniqueItems: true,
      items: dc
    }
  },
  additionalProperties: false
};

var schema = {
  properties: {
    app,
    api,
    server,
    schema: type.obj,
    mtSchema: type.obj
  },
  additionalProperties: false
};

var ajv = new __WEBPACK_IMPORTED_MODULE_0_ajv___default.a();
__WEBPACK_IMPORTED_MODULE_1_ajv_keywords_keywords_typeof___default()(ajv);
var validate = ajv.compile(schema);

var configValidator = config => {
  var valid = validate(config);
  if (!valid) {
    console.log('config errors');
    validate.errors.map(printObj);
    throw new Error('wrong config fields');
  }
};

var canDir = __WEBPACK_IMPORTED_MODULE_2_ramda_src_propIs___default()(Function, 'dir', console);
var printObj = canDir ? arg => console.dir(arg, { colors: true }) : arg => console.log(arg);

/* harmony default export */ __webpack_exports__["a"] = (configValidator);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter2__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_eventemitter2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_manager__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__networker__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tl__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoke_layer_generator__ = __webpack_require__(95);










var api57 = __webpack_require__(123);
var mtproto57 = __webpack_require__(124);

var apiConfig = {
  invokeWithLayer: 0xda9b0d0d,
  layer: 57,
  initConnection: 0x69796de9,
  api_id: 49631,
  device_model: 'Unknown UserAgent',
  system_version: 'Unknown Platform',
  app_version: '1.0.1',
  lang_code: 'en'
};

class MTProto {
  constructor(config) {
    this.emitter = new __WEBPACK_IMPORTED_MODULE_0_eventemitter2___default.a({
      wildcard: true
    });
    this.on = this.emitter.on.bind(this.emitter);
    this.emit = this.emitter.emit.bind(this.emitter);

    this.config = configNormalization(config);
    this.tls = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__tl__["a" /* default */])(this.config.schema, this.config.mtSchema);
    var netFabric = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__networker__["a" /* default */])(this.config.api, this.tls, this.config.app.storage, this.emit);
    this.api = new __WEBPACK_IMPORTED_MODULE_1__api_manager__["a" /* ApiManager */](this.config, this.tls, netFabric, { on: this.on, emit: this.emit });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MTProto);

var configNormalization = config => {
  var {
    server = {},
    api = {},
    app: {
      storage = __WEBPACK_IMPORTED_MODULE_3__store__["a" /* PureStorage */],
      publicKeys = publicKeysHex
    } = {},
    schema = api57,
    mtSchema = mtproto57
  } = config;
  var apiNormalized = Object.assign({}, apiConfig, api);
  var invokeLayer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__invoke_layer_generator__["a" /* default */])(apiNormalized.layer);
  apiNormalized.invokeWithLayer = invokeLayer;
  var fullCfg = {
    server,
    api: apiNormalized,
    app: { storage, publicKeys },
    schema,
    mtSchema
  };
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__config_validation__["a" /* default */])(fullCfg);
  return fullCfg;
};

/**
*  Server public key, obtained from here: https://core.telegram.org/api/obtaining_api_id
*
* -----BEGIN RSA PUBLIC KEY-----
* MIIBCgKCAQEAwVACPi9w23mF3tBkdZz+zwrzKOaaQdr01vAbU4E1pvkfj4sqDsm6
* lyDONS789sVoD/xCS9Y0hkkC3gtL1tSfTlgCMOOul9lcixlEKzwKENj1Yz/s7daS
* an9tqw3bfUV/nqgbhGX81v/+7RFAEd+RwFnK7a+XYl9sluzHRyVVaTTveB2GazTw
* Efzk2DWgkBluml8OREmvfraX3bkHZJTKX4EQSjBbbdJ2ZXIsRrYOXfaA+xayEGB+
* 8hdlLmAjbCVfaigxX0CDqWeR1yFL9kwd9P0NsZRPsmoqVwMbMu7mStFai6aIhc3n
* Slv8kg9qv1m6XHVQY3PnEw+QQtqSIXklHwIDAQAB
* -----END RSA PUBLIC KEY-----
*/

var publicKeysHex = [{
  modulus: 'c150023e2f70db7985ded064759cfecf0af328e69a41daf4d6f01b538135a6f91f' + '8f8b2a0ec9ba9720ce352efcf6c5680ffc424bd634864902de0b4bd6d49f4e5802' + '30e3ae97d95c8b19442b3c0a10d8f5633fecedd6926a7f6dab0ddb7d457f9ea81b' + '8465fcd6fffeed114011df91c059caedaf97625f6c96ecc74725556934ef781d86' + '6b34f011fce4d835a090196e9a5f0e4449af7eb697ddb9076494ca5f81104a305b' + '6dd27665722c46b60e5df680fb16b210607ef217652e60236c255f6a28315f4083' + 'a96791d7214bf64c1df4fd0db1944fb26a2a57031b32eee64ad15a8ba68885cde7' + '4a5bfc920f6abf59ba5c75506373e7130f9042da922179251f',
  exponent: '010001'
}];

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Defines the parameter required for authorization based on the level number
 *
 * Values were taken from here
 * https://github.com/telegramdesktop/tdesktop/blob/dev/Telegram/Resources/scheme.tl
 *
 * @param {number} apiLevel
 * @returns
 */
function generateInvokeLayer(apiLevel) {
  switch (apiLevel) {
    case 1:
      return 0x53835315;
    case 2:
      return 0x289dd1f6;
    case 3:
      return 0xb7475268;
    case 4:
      return 0xdea0d430;
    case 5:
      return 0x417a57ae;
    case 6:
      return 0x3a64d54d;
    case 7:
      return 0xa5be56d3;
    case 8:
      return 0xe9abd9fd;
    case 9:
      return 0x76715a63;
    case 10:
      return 0x39620c41;
    case 11:
      return 0xa6b88fdf;
    case 12:
      return 0xdda60d3c;
    case 13:
      return 0x427c8ea2;
    case 14:
      return 0x2b9b08fa;
    case 15:
      return 0xb4418b64;
    case 16:
      return 0xcf5f0987;
    case 17:
      return 0x50858a19;
    case 18:
      return 0x1c900537;
    default:
      return 0xda9b0d0d;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (generateInvokeLayer);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NetworkerFabric */
/* unused harmony export startAll */
/* unused harmony export stopAll */
/* unused harmony export setUpdatesProcessor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_detect_node__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_detect_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_detect_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_is__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda_src_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ramda_src_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_contains__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda_src_contains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda_src_contains__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_mapObjIndexed__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda_src_mapObjIndexed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ramda_src_mapObjIndexed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crypto__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__time_manager__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__secure_random__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__net_message__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__state__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_log__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bin__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tl__ = __webpack_require__(12);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




















var log = __WEBPACK_IMPORTED_MODULE_13__util_log__["b" /* default */]`networker`;






var updatesProcessor = void 0;
var iii = 0;
var akStopped = false;

//eslint-disable-next-line
var xhrSendBuffer = !__WEBPACK_IMPORTED_MODULE_1_detect_node___default.a && !('ArrayBufferView' in window);

var storeIntString = writer => (value, field) => {
  switch (typeof value) {
    case 'string':
      return __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].bytes(writer, value, `${field}:string`);
    case 'number':
      return __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].int(writer, value, field);
    default:
      throw new Error(`tl storeIntString field ${field} value type ${typeof value}`);
  }
};

function _ref7() {}

class NetworkerThread {
  constructor({
    appConfig,
    chooseServer,
    Serialization,
    Deserialization,
    storage,
    emit
  }, dc, authKey, serverSalt, options) {
    _initialiseProps.call(this);

    this.appConfig = appConfig;
    this.chooseServer = chooseServer;
    this.Serialization = Serialization;
    this.Deserialization = Deserialization;
    this.storage = storage;
    this.emit = emit;
    this.dcID = dc;
    this.iii = iii++;

    this.authKey = authKey;
    this.authKeyUint8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["b" /* convertToUint8Array */])(authKey);
    this.authKeyBuffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["c" /* convertToArrayBuffer */])(authKey);
    this.authKeyID = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["d" /* sha1BytesSync */])(authKey).slice(-8);

    //$FlowIssue
    this.wrapApiCall = this.wrapApiCall.bind(this);

    this.serverSalt = serverSalt;

    this.upload = options.fileUpload || options.fileDownload || false;

    this.updateSession();

    setInterval(this.checkLongPoll, 10000); //NOTE make configurable interval
    this.checkLongPoll();
  }
  updateSession() {
    this.seqNo = 0;
    this.prevSessionID = this.sessionID;
    this.sessionID = new Array(8);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__secure_random__["a" /* default */])(this.sessionID);
  }

  updateSentMessage(sentMessageID) {
    if (!this.state.hasSent(sentMessageID)) return false;
    var sentMessage = this.state.getSent(sentMessageID);

    if (sentMessage instanceof __WEBPACK_IMPORTED_MODULE_8__net_message__["a" /* NetContainer */]) {
      var newInner = [];
      for (var _iterator = sentMessage.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var innerID = _ref;

        var innerSentMessage = this.updateSentMessage(innerID);
        if (innerSentMessage) newInner.push(innerSentMessage.msg_id);
      }
      sentMessage.inner = newInner;
    }
    this.state.deleteSent(sentMessage);
    var newId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["generateID"])();
    sentMessage.msg_id = newId;
    sentMessage.seq_no = this.generateSeqNo(sentMessage.notContentRelated || sentMessage.container);
    this.state.addSent(sentMessage);

    return sentMessage;
  }

  generateSeqNo(notContentRelated) {
    var seqNo = this.seqNo * 2;

    if (!notContentRelated) {
      seqNo++;
      this.seqNo++;
    }

    return seqNo;
  }

  wrapMtpCall(method, params, options) {
    var serializer = this.Serialization({ mtproto: true });

    serializer.storeMethod(method, params);

    var seqNo = this.generateSeqNo();
    var message = new __WEBPACK_IMPORTED_MODULE_8__net_message__["b" /* NetMessage */](seqNo, serializer.getBytes(true));
    log([`MT call`])(method, params, message.msg_id, seqNo);

    this.pushMessage(message, options);
    return message.deferred.promise;
  }

  wrapMtpMessage(object, options = {}) {

    var serializer = this.Serialization({ mtproto: true });
    serializer.storeObject(object, 'Object');

    var seqNo = this.generateSeqNo(options.notContentRelated);
    var message = new __WEBPACK_IMPORTED_MODULE_8__net_message__["b" /* NetMessage */](seqNo, serializer.getBytes(true));
    log(`MT message`)(message.msg_id, object, seqNo);
    verifyInnerMessages(object.msg_ids);
    this.pushMessage(message, options);
    return message;
  }

  wrapApiCall(method, params, options) {
    var serializer = this.Serialization(options);
    var serialBox = serializer.writer;
    if (!this.connectionInited) {
      // serializer.storeInt(0xda9b0d0d, 'invokeWithLayer')
      // serializer.storeInt(Config.Schema.API.layer, 'layer')
      // serializer.storeInt(0x69796de9, 'initConnection')
      // serializer.storeInt(Config.App.id, 'api_id')
      // serializer.storeString(navigator.userAgent || 'Unknown UserAgent', 'device_model')
      // serializer.storeString(navigator.platform || 'Unknown Platform', 'system_version')
      // serializer.storeString(Config.App.version, 'app_version')
      // serializer.storeString(navigator.language || 'en', 'lang_code')
      var mapper = storeIntString(serialBox);
      __WEBPACK_IMPORTED_MODULE_4_ramda_src_mapObjIndexed___default()(mapper, this.appConfig);
    }

    if (options.afterMessageID) {
      __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].int(serialBox, 0xcb9f372d, 'invokeAfterMsg');
      __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].long(serialBox, options.afterMessageID, 'msg_id');
    }

    options.resultType = serializer.storeMethod(method, params);

    var seqNo = this.generateSeqNo();
    var message = new __WEBPACK_IMPORTED_MODULE_8__net_message__["b" /* NetMessage */](seqNo, serializer.getBytes(true));
    message.isAPI = true;

    log([`Api call`])(method, params, message.msg_id, seqNo, options);

    this.pushMessage(message, options);
    return message.deferred.promise;
  }

  pushMessage(message, options = {}) {
    message.copyOptions(options);
    this.state.addSent(message);
    this.state.setPending(message.msg_id);

    if (!options || !options.noShedule) this.sheduleRequest();
    if (__WEBPACK_IMPORTED_MODULE_2_ramda_src_is___default()(Object, options)) options.messageID = message.msg_id;
  }

  pushResend(messageID, delay) {
    var value = delay ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["tsNow"])() + delay : 0;
    var sentMessage = this.state.getSent(messageID);
    if (sentMessage instanceof __WEBPACK_IMPORTED_MODULE_8__net_message__["a" /* NetContainer */]) {
      for (var _iterator2 = sentMessage.inner, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _msg = _ref2;

        this.state.setPending(_msg, value);
      }
    } else this.state.setPending(messageID, value);

    this.sheduleRequest(delay);
  }

  getMsgKeyIv(msgKey, isOut) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var authKey = _this.authKeyUint8;
      var x = isOut ? 0 : 8;
      var sha1aText = new Uint8Array(48);
      var sha1bText = new Uint8Array(48);
      var sha1cText = new Uint8Array(48);
      var sha1dText = new Uint8Array(48);
      var promises = [];

      sha1aText.set(msgKey, 0);
      sha1aText.set(authKey.subarray(x, x + 32), 16);
      promises.push(__WEBPACK_IMPORTED_MODULE_5__crypto__["b" /* default */].sha1Hash(sha1aText));

      sha1bText.set(authKey.subarray(x + 32, x + 48), 0);
      sha1bText.set(msgKey, 16);
      sha1bText.set(authKey.subarray(x + 48, x + 64), 32);
      promises.push(__WEBPACK_IMPORTED_MODULE_5__crypto__["b" /* default */].sha1Hash(sha1bText));

      sha1cText.set(authKey.subarray(x + 64, x + 96), 0);
      sha1cText.set(msgKey, 32);
      promises.push(__WEBPACK_IMPORTED_MODULE_5__crypto__["b" /* default */].sha1Hash(sha1cText));

      sha1dText.set(msgKey, 0);
      sha1dText.set(authKey.subarray(x + 96, x + 128), 16);
      promises.push(__WEBPACK_IMPORTED_MODULE_5__crypto__["b" /* default */].sha1Hash(sha1dText));

      var result = yield __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.all(promises);
      var aesKey = new Uint8Array(32),
          aesIv = new Uint8Array(32),
          sha1a = new Uint8Array(result[0]),
          sha1b = new Uint8Array(result[1]),
          sha1c = new Uint8Array(result[2]),
          sha1d = new Uint8Array(result[3]);

      aesKey.set(sha1a.subarray(0, 8));
      aesKey.set(sha1b.subarray(8, 20), 8);
      aesKey.set(sha1c.subarray(4, 16), 20);

      aesIv.set(sha1a.subarray(8, 20));
      aesIv.set(sha1b.subarray(0, 8), 12);
      aesIv.set(sha1c.subarray(16, 20), 20);
      aesIv.set(sha1d.subarray(0, 8), 24);

      return [aesKey, aesIv];
    })();
  }

  toggleOffline(enabled) {
    // console.log('toggle ', enabled, this.dcID, this.iii)
    if (!this.offline !== undefined && this.offline == enabled) return false;

    this.offline = enabled;

    if (this.offline) {
      __WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__["a" /* default */].cancel(this.nextReqPromise);
      delete this.nextReq;

      if (this.checkConnectionPeriod < 1.5) this.checkConnectionPeriod = 0;

      this.checkConnectionPromise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__["a" /* default */])(this.checkConnection, parseInt(this.checkConnectionPeriod * 1000));
      this.checkConnectionPeriod = Math.min(30, (1 + this.checkConnectionPeriod) * 1.5);

      this.onOnlineCb = this.checkConnection;
      this.emit('net.offline', this.onOnlineCb);
    } else {
      delete this.longPollPending;
      //NOTE check long state was here
      this.checkLongPoll().then(_ref7);
      this.sheduleRequest();

      if (this.onOnlineCb) this.emit('net.online', this.onOnlineCb);

      __WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__["a" /* default */].cancel(this.checkConnectionPromise);
    }
  }
  performResend() {
    if (this.state.hasResends()) {
      var resendMsgIDs = [...this.state.getResends()];
      var resendOpts = { noShedule: true, notContentRelated: true
        // console.log('resendReq messages', resendMsgIDs)
      };var msg = this.wrapMtpMessage({
        _: 'msg_resend_req',
        msg_ids: resendMsgIDs
      }, resendOpts);
      this.lastResendReq = { req_msg_id: msg.msg_id, resend_msg_ids: resendMsgIDs };
    }
  }


  parseResponse(responseBuffer) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      // console.log(dTime(), 'Start parsing response')
      // const self = this

      var deserializerRaw = _this2.Deserialization(responseBuffer);

      var authKeyID = deserializerRaw.fetchIntBytes(64, 'auth_key_id');
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["e" /* bytesCmp */])(authKeyID, _this2.authKeyID)) {
        throw new Error(`[MT] Invalid server auth_key_id: ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["f" /* bytesToHex */])(authKeyID)}`);
      }
      var msgKey = deserializerRaw.fetchIntBytes(128, 'msg_key');
      var encryptedData = deserializerRaw.fetchRawBytes(responseBuffer.byteLength - deserializerRaw.getOffset(), 'encrypted_data');

      var keyIv = yield _this2.getMsgKeyIv(msgKey, false);
      var dataWithPadding = yield __WEBPACK_IMPORTED_MODULE_5__crypto__["b" /* default */].aesDecrypt(encryptedData, keyIv[0], keyIv[1]);
      // console.log(dTime(), 'after decrypt')
      var deserializer = _this2.Deserialization(dataWithPadding, { mtproto: true });

      deserializer.fetchIntBytes(64, 'salt');
      var sessionID = deserializer.fetchIntBytes(64, 'session_id');
      var messageID = __WEBPACK_IMPORTED_MODULE_15__tl__["c" /* ReadMediator */].long(deserializer.typeBuffer, 'message_id');

      var isInvalidSession = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["e" /* bytesCmp */])(sessionID, _this2.sessionID) && (!_this2.prevSessionID ||
      //eslint-disable-next-line
      !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["e" /* bytesCmp */])(sessionID, _this2.prevSessionID));
      if (isInvalidSession) {
        console.warn('Sessions', sessionID, _this2.sessionID, _this2.prevSessionID);
        throw new Error(`[MT] Invalid server session_id: ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["f" /* bytesToHex */])(sessionID)}`);
      }

      var seqNo = deserializer.fetchInt('seq_no');

      var offset = deserializer.getOffset();
      var totalLength = dataWithPadding.byteLength;

      var messageBodyLength = deserializer.fetchInt('message_data[length]');
      if (messageBodyLength % 4 || messageBodyLength > totalLength - offset) {
        throw new Error(`[MT] Invalid body length: ${messageBodyLength}`);
      }
      var messageBody = deserializer.fetchRawBytes(messageBodyLength, 'message_data');

      offset = deserializer.getOffset();
      var paddingLength = totalLength - offset;
      if (paddingLength < 0 || paddingLength > 15) throw new Error(`[MT] Invalid padding length: ${paddingLength}`);
      var hashData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["b" /* convertToUint8Array */])(dataWithPadding).subarray(0, offset);

      var dataHash = yield __WEBPACK_IMPORTED_MODULE_5__crypto__["b" /* default */].sha1Hash(hashData);

      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["e" /* bytesCmp */])(msgKey, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["g" /* bytesFromArrayBuffer */])(dataHash).slice(-16))) {
        console.warn(msgKey, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["g" /* bytesFromArrayBuffer */])(dataHash));
        throw new Error('[MT] server msgKey mismatch');
      }

      var buffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["h" /* bytesToArrayBuffer */])(messageBody);
      var deserializerOptions = getDeserializeOpts(_this2.getMsgById);
      var deserializerData = _this2.Deserialization(buffer, deserializerOptions);
      var response = deserializerData.fetchObject('', 'INPUT');

      return {
        response,
        messageID,
        sessionID,
        seqNo
      };
    })();
  }

  applyServerSalt(newServerSalt) {
    var serverSalt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["i" /* longToBytes */])(newServerSalt);
    this.storage.set(`dc${this.dcID}_server_salt`, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["f" /* bytesToHex */])(serverSalt));

    this.serverSalt = serverSalt;
    return true;
  }

  sheduleRequest(delay = 0) {
    if (this.offline) this.checkConnection('forced shedule');
    var nextReq = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["tsNow"])() + delay;

    if (delay && this.nextReq && this.nextReq <= nextReq) return false;

    // console.log(dTime(), 'shedule req', delay)
    // console.trace()
    __WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__["a" /* default */].cancel(this.nextReqPromise);
    if (delay > 0) this.nextReqPromise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__["a" /* default */])(this.performSheduledRequest, delay);else __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__["b" /* immediate */])(this.performSheduledRequest);

    this.nextReq = nextReq;
  }

  ackMessage(msgID) {
    /*console.trace(msgID)
    if (this.pendingAcks.includes(msgID)) {
      debugger
    }*/
    // console.log('ack message', msgID)
    if (__WEBPACK_IMPORTED_MODULE_3_ramda_src_contains___default()(msgID, this.pendingAcks)) return;
    this.pendingAcks.push(msgID);
    this.sheduleRequest(30000);
  }

  reqResendMessage(msgID) {
    log(`Req resend`)(msgID);
    this.state.addResend(msgID);
    this.sheduleRequest(100);
  }

  cleanupSent() {
    var notEmpty = false;
    // console.log('clean start', this.dcID/*, this.state.sent*/)

    for (var _iterator3 = this.state.sentIterator(), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var [msgID, message] = _ref3;

      var complete = true;
      if (message.notContentRelated && !this.state.hasPending(msgID))
        // console.log('clean notContentRelated', msgID)
        this.state.deleteSent(message);else if (message instanceof __WEBPACK_IMPORTED_MODULE_8__net_message__["a" /* NetContainer */]) {
        for (var _iterator4 = message.inner, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
          }

          var inner = _ref4;

          if (this.state.hasSent(inner)) {
            // console.log('clean failed, found', msgID, message.inner[i],
            // this.state.getSent(message.inner[i]).seq_no)
            notEmpty = true;
            complete = false;
            break;
          }
        }
        // console.log('clean container', msgID)
        if (complete) this.state.deleteSent(message);
      } else notEmpty = true;
    }
    return !notEmpty;
  }

  processError(rawError) {
    var matches = (rawError.error_message || '').match(/^([A-Z_0-9]+\b)(: (.+))?/) || [];
    rawError.error_code = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["j" /* uintToInt */])(rawError.error_code);

    return {
      code: !rawError.error_code || rawError.error_code <= 0 ? 500 : rawError.error_code,
      type: matches[1] || 'UNKNOWN',
      description: matches[3] || `CODE#${rawError.error_code} ${rawError.error_message}`,
      originalError: rawError
    };
  }

  processMessage(message, messageID, sessionID) {
    var msgidInt = parseInt(messageID.toString(10).substr(0, -10), 10);
    if (msgidInt % 2) {
      console.warn('[MT] Server even message id: ', messageID, message);
      return;
    }
    // console.log('process message', message, messageID, sessionID)
    switch (message._) {
      case 'msg_container':
        {
          for (var _iterator5 = message.messages, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
            var _ref5;

            if (_isArray5) {
              if (_i5 >= _iterator5.length) break;
              _ref5 = _iterator5[_i5++];
            } else {
              _i5 = _iterator5.next();
              if (_i5.done) break;
              _ref5 = _i5.value;
            }

            var inner = _ref5;

            this.processMessage(inner, inner.msg_id, sessionID);
          }break;
        }
      case 'bad_server_salt':
        {
          log(`Bad server salt`)(message);
          var sentMessage = this.state.getSent(message.bad_msg_id);
          if (!sentMessage || sentMessage.seq_no != message.bad_msg_seqno) {
            log(`invalid message`)(message.bad_msg_id, message.bad_msg_seqno);
            throw new Error('[MT] Bad server salt for invalid message');
          }

          this.applyServerSalt(message.new_server_salt);
          this.pushResend(message.bad_msg_id);
          this.ackMessage(messageID);
          break;
        }
      case 'bad_msg_notification':
        {
          log(`Bad msg notification`)(message);
          var _sentMessage = this.state.getSent(message.bad_msg_id);
          if (!_sentMessage || _sentMessage.seq_no != message.bad_msg_seqno) {
            log(`invalid message`)(message.bad_msg_id, message.bad_msg_seqno);
            throw new Error('[MT] Bad msg notification for invalid message');
          }

          if (message.error_code == 16 || message.error_code == 17) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["applyServerTime"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["k" /* rshift32 */])(messageID))) {
              log(`Update session`)();
              this.updateSession();
            }
            var badMessage = this.updateSentMessage(message.bad_msg_id);
            this.pushResend(badMessage.msg_id);
            this.ackMessage(messageID);
          }
          break;
        }
      case 'message':
        {
          if (this.lastServerMessages.indexOf(messageID) != -1) {
            // console.warn('[MT] Server same messageID: ', messageID)
            this.ackMessage(messageID);
            return;
          }
          this.lastServerMessages.push(messageID);
          if (this.lastServerMessages.length > 100) {
            this.lastServerMessages.shift();
          }
          this.processMessage(message.body, message.msg_id, sessionID);
          break;
        }
      case 'new_session_created':
        {
          this.ackMessage(messageID);

          this.processMessageAck(message.first_msg_id);
          this.applyServerSalt(message.server_salt);

          var onBaseDc = baseDcID => {
            var updateCond = baseDcID === this.dcID && !this.upload && updatesProcessor;
            if (updateCond) updatesProcessor(message, true);
          };
          this.storage.get('dc').then(onBaseDc);
          break;
        }
      case 'msgs_ack':
        {
          message.msg_ids.forEach(this.processMessageAck);
          break;
        }
      case 'msg_detailed_info':
        {
          if (!this.state.hasSent(message.msg_id)) {
            this.ackMessage(message.answer_msg_id);
            break;
          }
          break;
        }
      case 'msg_new_detailed_info':
        {
          // this.ackMessage(message.answer_msg_id)
          this.reqResendMessage(message.answer_msg_id);
          break;
        }
      case 'msgs_state_info':
        {
          this.ackMessage(message.answer_msg_id);
          var spliceCond = this.lastResendReq &&
          //eslint-disable-next-line
          this.lastResendReq.req_msg_id == message.req_msg_id;
          if (spliceCond) {
            for (var _iterator6 = this.lastResendReq.resend_msg_ids, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref6 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref6 = _i6.value;
              }

              var _badMsgID = _ref6;

              this.state.deleteResent(_badMsgID);
            }
          }break;
        }
      case 'rpc_result':
        {
          this.ackMessage(messageID);

          var sentMessageID = message.req_msg_id;
          var _sentMessage2 = this.state.getSent(sentMessageID);

          this.processMessageAck(sentMessageID);
          if (!_sentMessage2) break;

          var deferred = _sentMessage2.deferred;
          if (message.result._ == 'rpc_error') {
            var error = this.processError(message.result);
            log(`ERROR, Rpc error`)('%O', error);
            if (deferred) {
              deferred.reject(error);
            }
          } else {
            if (deferred) {
              log(`Rpc response`)('%O', message.result);
              /*if (debug) {
                console.log(dTime(), 'Rpc response', message.result)
              } else {
                let dRes = message.result._
                if (!dRes)
                  dRes = message.result.length > 5
                    ? `[..${  message.result.length  }..]`
                    : message.result
                console.log(dTime(), 'Rpc response', dRes)
              }*/
              _sentMessage2.deferred.resolve(message.result);
            }
            if (_sentMessage2.isAPI) this.connectionInited = true;
          }
          this.state.deleteSent(_sentMessage2);
          break;
        }
      default:
        {
          this.ackMessage(messageID);

          // console.log('Update', message)
          if (updatesProcessor) updatesProcessor(message, true);
          break;
        }
    }
  }
}
/* unused harmony export NetworkerThread */


var _initialiseProps = function () {
  var _this3 = this;

  this.pendingAcks = [];
  this.state = new __WEBPACK_IMPORTED_MODULE_9__state__["a" /* default */]();
  this.connectionInited = false;
  this.checkConnectionPeriod = 0;
  this.lastServerMessages = [];

  this.checkLongPollCond = () => this.longPollPending && this.longPollPending > __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["tsNow"])() || !!this.offline || akStopped;

  this.checkLongPollAfterDcCond = (isClean, baseDc) => isClean && (this.dcID !== baseDc || this.upload || this.sleepAfter && this.sleepAfter < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["tsNow"])());

  this.checkLongPoll = _asyncToGenerator(function* () {
    var isClean = _this3.cleanupSent();
    // console.log('Check lp', this.longPollPending, tsNow(), this.dcID, isClean)
    if (_this3.checkLongPollCond()) return false;

    var baseDc = yield _this3.storage.get('dc');
    if (_this3.checkLongPollAfterDcCond(isClean, baseDc))
      // console.warn(dTime(), 'Send long-poll for DC is delayed', this.dcID, this.sleepAfter)
      return;
    return _this3.sendLongPoll();
  });
  this.sendLongPoll = _asyncToGenerator(function* () {
    var maxWait = 25000;
    _this3.longPollPending = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["tsNow"])() + maxWait;
    // console.log('Set lp', this.longPollPending, tsNow())

    yield _this3.wrapMtpCall('http_wait', {
      max_delay: 500,
      wait_after: 150,
      max_wait: maxWait
    }, {
      noResponse: true,
      longPoll: true
    });
    delete _this3.longPollPending;
    return _this3.checkLongPoll();
  });

  function* _ref8(event) {
    log([`Check connection`])('%O', event);
    __WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__["a" /* default */].cancel(_this3.checkConnectionPromise);

    var serializer = _this3.Serialization({ mtproto: true });
    var pingID = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["l" /* nextRandomInt */])(0xFFFFFFFF), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__bin__["l" /* nextRandomInt */])(0xFFFFFFFF)];

    serializer.storeMethod('ping', { ping_id: pingID });

    var pingMessage = new __WEBPACK_IMPORTED_MODULE_8__net_message__["b" /* NetMessage */](_this3.generateSeqNo(true), serializer.getBytes());

    var succ = false;

    try {
      var result = yield _this3.sendEncryptedRequest(pingMessage, { timeout: 15000 });
      succ = true;
      _this3.toggleOffline(false);
      log(`checkConnection, result`)('%O', result);
    } catch (err) {
      log(`encrypted request fail`)('%O', err);
    }
    if (succ) return;
    var delay = _this3.checkConnectionPeriod * 1e3;
    log(`checkConnection, Delay`)(delay);
    _this3.checkConnectionPromise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__util_smart_timeout__["a" /* default */])(_this3.checkConnection, delay);
    _this3.checkConnectionPeriod = Math.min(60, _this3.checkConnectionPeriod * 1.5);
  }

  this.checkConnection = (() => {
    var _ref9 = _asyncToGenerator(_ref8);

    return function (_x) {
      return _ref9.apply(this, arguments);
    };
  })();

  this.performSheduledRequest = _asyncToGenerator(function* () {
    //TODO extract huge method
    // console.log(dTime(), 'sheduled', this.dcID, this.iii)
    if (_this3.offline || akStopped) {
      log(`Cancel sheduled`)(``);
      return false;
    }
    delete _this3.nextReq;
    if (_this3.pendingAcks.length) {
      var ackMsgIDs = [];
      for (var _iterator7 = _this3.pendingAcks, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
        var _ref11;

        if (_isArray7) {
          if (_i7 >= _iterator7.length) break;
          _ref11 = _iterator7[_i7++];
        } else {
          _i7 = _iterator7.next();
          if (_i7.done) break;
          _ref11 = _i7.value;
        }

        var ack = _ref11;

        ackMsgIDs.push(ack);
      } // console.log('acking messages', ackMsgIDs)
      _this3.wrapMtpMessage({
        _: 'msgs_ack',
        msg_ids: ackMsgIDs
      }, {
        notContentRelated: true,
        noShedule: true
      });
      // const res = await msg.deferred.promise
      // log(`AWAITED`, `ack`)(res)
    }

    _this3.performResend();

    var messages = [];
    var message = void 0;
    var messagesByteLen = 0;
    var currentTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["tsNow"])();
    var hasApiCall = false;
    var hasHttpWait = false;
    var lengthOverflow = false;
    var singlesCount = 0;

    for (var _iterator8 = _this3.state.pendingIterator(), _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
      var _ref12;

      if (_isArray8) {
        if (_i8 >= _iterator8.length) break;
        _ref12 = _iterator8[_i8++];
      } else {
        _i8 = _iterator8.next();
        if (_i8.done) break;
        _ref12 = _i8.value;
      }

      var [messageID, value] = _ref12;

      if (value && value < currentTime) continue;
      _this3.state.deletePending(messageID);
      if (!_this3.state.hasSent(messageID)) continue;
      message = _this3.state.getSent(messageID);
      var messageByteLength = message.size() + 32;
      var cond1 = !message.notContentRelated && lengthOverflow;
      var cond2 = !message.notContentRelated && messagesByteLen &&
      //eslint-disable-next-line
      messagesByteLen + messageByteLength > 655360; // 640 Kb
      if (cond1) continue;
      if (cond2) {
        lengthOverflow = true;
        continue;
      }
      if (message.singleInRequest) {
        singlesCount++;
        if (singlesCount > 1) continue;
      }
      messages.push(message);
      messagesByteLen += messageByteLength;
      if (message.isAPI) hasApiCall = true;else if (message.longPoll) hasHttpWait = true;
    }

    if (hasApiCall && !hasHttpWait) {
      var serializer = _this3.Serialization({ mtproto: true });
      serializer.storeMethod('http_wait', {
        max_delay: 500,
        wait_after: 150,
        max_wait: 3000
      });
      messages.push(new __WEBPACK_IMPORTED_MODULE_8__net_message__["b" /* NetMessage */](_this3.generateSeqNo(), serializer.getBytes()));
    }

    if (!messages.length) {
      // console.log('no sheduled messages')
      return;
    }

    var noResponseMsgs = [];

    if (messages.length > 1) {
      var container = _this3.Serialization({ mtproto: true, startMaxLength: messagesByteLen + 64 });
      var contBox = container.writer;
      __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].int(contBox, 0x73f1f8dc, 'CONTAINER[id]');
      __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].int(contBox, messages.length, 'CONTAINER[count]');
      var innerMessages = [];
      var i = 0;
      for (var _iterator9 = messages, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref13;

        if (_isArray9) {
          if (_i9 >= _iterator9.length) break;
          _ref13 = _iterator9[_i9++];
        } else {
          _i9 = _iterator9.next();
          if (_i9.done) break;
          _ref13 = _i9.value;
        }

        var msg = _ref13;

        __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].long(contBox, msg.msg_id, `CONTAINER[${i}][msg_id]`);
        innerMessages.push(msg.msg_id);
        __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].int(contBox, msg.seq_no, `CONTAINER[${i}][seq_no]`);
        __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].int(contBox, msg.body.length, `CONTAINER[${i}][bytes]`);
        __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].intBytes(contBox, msg.body, false, `CONTAINER[${i}][body]`);
        if (msg.noResponse) noResponseMsgs.push(msg.msg_id);
        i++;
      }

      message = new __WEBPACK_IMPORTED_MODULE_8__net_message__["a" /* NetContainer */](_this3.generateSeqNo(true), container.getBytes(true), innerMessages);

      log(`Container`)(innerMessages, message.msg_id, message.seq_no);
    } else {
      if (message.noResponse) noResponseMsgs.push(message.msg_id);
    }

    _this3.state.addSent(message);

    _this3.pendingAcks = []; //TODO WTF,he just clear and forget them at all?!?
    if (lengthOverflow || singlesCount > 1) _this3.sheduleRequest();

    try {
      var result = yield _this3.sendEncryptedRequest(message);
      _this3.toggleOffline(false);
      var response = yield _this3.parseResponse(result.data);
      log(`Server response`)(_this3.dcID, response);

      _this3.processMessage(response.response, response.messageID, response.sessionID);

      for (var _iterator10 = noResponseMsgs, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
        var _ref14;

        if (_isArray10) {
          if (_i10 >= _iterator10.length) break;
          _ref14 = _iterator10[_i10++];
        } else {
          _i10 = _iterator10.next();
          if (_i10.done) break;
          _ref14 = _i10.value;
        }

        var msgID = _ref14;

        if (_this3.state.hasSent(msgID)) {
          var _msg2 = _this3.state.getSent(msgID);
          _this3.state.deleteSent(_msg2);
          _msg2.deferred.resolve();
        }
      }_this3.checkConnectionPeriod = Math.max(1.1, Math.sqrt(_this3.checkConnectionPeriod));

      return _this3.checkLongPoll(); //TODO Bluebird warning here
    } catch (error) {
      console.log('Encrypted request failed', error);

      if (message instanceof __WEBPACK_IMPORTED_MODULE_8__net_message__["a" /* NetContainer */]) {
        for (var _iterator11 = message.inner, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
          var _ref15;

          if (_isArray11) {
            if (_i11 >= _iterator11.length) break;
            _ref15 = _iterator11[_i11++];
          } else {
            _i11 = _iterator11.next();
            if (_i11.done) break;
            _ref15 = _i11.value;
          }

          var _msgID = _ref15;

          _this3.state.setPending(_msgID);
        }_this3.state.deleteSent(message);
      } else _this3.state.setPending(message.msg_id);

      for (var _iterator12 = noResponseMsgs, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
        var _ref16;

        if (_isArray12) {
          if (_i12 >= _iterator12.length) break;
          _ref16 = _iterator12[_i12++];
        } else {
          _i12 = _iterator12.next();
          if (_i12.done) break;
          _ref16 = _i12.value;
        }

        var _msgID2 = _ref16;

        if (_this3.state.hasSent(_msgID2)) {
          var _msg3 = _this3.state.getSent(_msgID2);
          _this3.state.deleteSent(_msg3);
          _this3.state.deletePending(_msgID2);
          _msg3.deferred.reject();
        }
      }_this3.toggleOffline(true);
      return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(error);
    }
  });

  function* _ref10(message, options = {}) {
    // console.log(dTime(), 'Send encrypted'/*, message*/)
    // console.trace()
    var data = _this3.Serialization({ startMaxLength: message.body.length + 64 });
    var dataBox = data.writer;
    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].intBytes(dataBox, _this3.serverSalt, 64, 'salt');
    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].intBytes(dataBox, _this3.sessionID, 64, 'session_id');
    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].long(dataBox, message.msg_id, 'message_id');
    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].int(dataBox, message.seq_no, 'seq_no');

    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].int(dataBox, message.body.length, 'message_data_length');
    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].intBytes(dataBox, message.body, false, 'message_data');

    var url = _this3.chooseServer(_this3.dcID, _this3.upload);

    var bytes = dataBox.getBuffer();

    var bytesHash = yield __WEBPACK_IMPORTED_MODULE_5__crypto__["b" /* default */].sha1Hash(bytes);
    var msgKey = new Uint8Array(bytesHash).subarray(4, 20);
    var keyIv = yield _this3.getMsgKeyIv(msgKey, true);
    var encryptedBytes = yield __WEBPACK_IMPORTED_MODULE_5__crypto__["b" /* default */].aesEncrypt(bytes, keyIv[0], keyIv[1]);

    var request = _this3.Serialization({ startMaxLength: encryptedBytes.byteLength + 256 });
    var requestBox = request.writer;
    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].intBytes(requestBox, _this3.authKeyID, 64, 'auth_key_id');
    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].intBytes(requestBox, msgKey, 128, 'msg_key');
    __WEBPACK_IMPORTED_MODULE_15__tl__["b" /* WriteMediator */].intBytes(requestBox, encryptedBytes, false, 'encrypted_data');

    var requestData = xhrSendBuffer ? requestBox.getArray().buffer : requestBox.getArray();

    options = Object.assign({ responseType: 'arraybuffer' }, options);

    try {
      var result = yield __WEBPACK_IMPORTED_MODULE_11__http__["a" /* httpClient */].post(url, requestData, options);
      return !result.data || !result.data.byteLength ? __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(new __WEBPACK_IMPORTED_MODULE_12__error__["a" /* ErrorBadResponse */](url, result)) : result;
    } catch (error) {
      return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reject(new __WEBPACK_IMPORTED_MODULE_12__error__["b" /* ErrorBadRequest */](url, error));
    }
  }

  this.sendEncryptedRequest = (() => {
    var _ref17 = _asyncToGenerator(_ref10);

    return function (_x2) {
      return _ref17.apply(this, arguments);
    };
  })();

  this.getMsgById = ({ req_msg_id }) => this.state.getSent(req_msg_id);

  this.processMessageAck = messageID => {
    var sentMessage = this.state.getSent(messageID);
    if (sentMessage && !sentMessage.acked) {
      delete sentMessage.body;
      sentMessage.acked = true;
      return true;
    }
    return false;
  };
};

var NetworkerFabric = (appConfig, { Serialization, Deserialization }, storage, emit) => chooseServer => (dc, authKey, serverSalt, options = {}) => new NetworkerThread({
  appConfig,
  chooseServer,
  Serialization,
  Deserialization,
  storage,
  emit
}, dc, authKey, serverSalt, options);

var getDeserializeOpts = msgGetter => ({
  mtproto: true,
  override: {
    mt_message(result, field) {
      result.msg_id = __WEBPACK_IMPORTED_MODULE_15__tl__["c" /* ReadMediator */].long(this.typeBuffer, `${field}[msg_id]`);
      result.seqno = __WEBPACK_IMPORTED_MODULE_15__tl__["c" /* ReadMediator */].int(this.typeBuffer, `${field}[seqno]`);
      result.bytes = __WEBPACK_IMPORTED_MODULE_15__tl__["c" /* ReadMediator */].int(this.typeBuffer, `${field}[bytes]`);

      var offset = this.getOffset();

      try {
        result.body = this.fetchObject('Object', `${field}[body]`);
      } catch (e) {
        console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__time_manager__["dTime"])(), 'parse error', e.message, e.stack);
        result.body = { _: 'parse_error', error: e };
      }
      if (this.typeBuffer.offset != offset + result.bytes) {
        // console.warn(dTime(), 'set offset', this.offset, offset, result.bytes)
        // console.log(dTime(), result)
        this.typeBuffer.offset = offset + result.bytes;
      }
      // console.log(dTime(), 'override message', result)
    },
    mt_rpc_result(result, field) {
      result.req_msg_id = __WEBPACK_IMPORTED_MODULE_15__tl__["c" /* ReadMediator */].long(this.typeBuffer, `${field}[req_msg_id]`);

      var sentMessage = msgGetter(result);
      var type = sentMessage && sentMessage.resultType || 'Object';

      if (result.req_msg_id && !sentMessage) {
        // console.warn(dTime(), 'Result for unknown message', result)
        return;
      }
      result.result = this.fetchObject(type, `${field}[result]`);
      // console.log(dTime(), 'override rpc_result', sentMessage, type, result)
    }
  }
});

var startAll = () => {
  if (akStopped) {
    akStopped = false;
    updatesProcessor({ _: 'new_session_created' }, true);
  }
};

var stopAll = () => akStopped = true;

var setUpdatesProcessor = callback => updatesProcessor = callback;

/* harmony default export */ __webpack_exports__["a"] = (NetworkerFabric);

var verifyInnerMessages = messages => {
  if (messages.length !== new Set(messages).size) {
    console.log(`!!!!!!WARN!!!!!!`, 'container check failed', messages);
    // throw new Error('Container bug')
  }
};

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__net_message__ = __webpack_require__(32);


// import Promise from 'bluebird'



class Pool {
  constructor() {
    this.sent = new Map();
    this.pending = new Map();
    this.resend = new Set();
  }

  addResend(msg_id) {
    return this.resend.add(msg_id);
  }
  hasResends() {
    return this.resend.size > 0;
  }
  deleteResent(msg_id) {
    return this.resend.delete(msg_id);
  }
  getResends() {
    return this.resend.values();
  }

  addSent(message) {
    this.sent.set(message.msg_id, message);
  }
  getSent(msg_id) {
    //$FlowIssue
    return this.sent.get(msg_id);
  }
  hasSent(msg_id) {
    return this.sent.has(msg_id);
  }
  deleteSent(message) {
    return this.sent.delete(message.msg_id);
  }
  sentIterator() {
    return this.sent.entries();
  }

  setPending(msg_id, value = 0) {
    return this.pending.set(msg_id, value);
  }
  hasPending(msg_id) {
    return this.pending.has(msg_id);
  }
  deletePending(msg_id) {
    return this.pending.delete(msg_id);
  }
  pendingIterator() {
    return this.pending.entries();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Pool);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KeyManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tl__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bin__ = __webpack_require__(1);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var KeyManager = (Serialization, publicKeysHex, publicKeysParsed) => {
  function* _ref4() {
    if (prepared) return;

    yield __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.map(publicKeysHex, mapPrepare);

    prepared = true;
  }

  var prepareRsaKeys = (() => {
    var _ref = _asyncToGenerator(_ref4);

    return function prepareRsaKeys() {
      return _ref.apply(this, arguments);
    };
  })();

  function* _ref5(fingerprints) {
    yield prepareRsaKeys();

    var fingerprintHex = void 0,
        foundKey = void 0;
    for (var _iterator = fingerprints, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref3 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref3 = _i.value;
      }

      var fingerprint = _ref3;

      fingerprintHex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["B" /* strDecToHex */])(fingerprint);
      foundKey = publicKeysParsed[fingerprintHex];
      if (foundKey) return Object.assign({ fingerprint }, foundKey);
    }
    return false;
  }

  var selectRsaKeyByFingerPrint = (() => {
    var _ref2 = _asyncToGenerator(_ref5);

    return function selectRsaKeyByFingerPrint(_x) {
      return _ref2.apply(this, arguments);
    };
  })();

  var prepared = false;

  var mapPrepare = ({ modulus, exponent }) => {
    var RSAPublicKey = Serialization();
    var rsaBox = RSAPublicKey.writer;
    __WEBPACK_IMPORTED_MODULE_1__tl__["b" /* WriteMediator */].bytes(rsaBox, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["y" /* bytesFromHex */])(modulus), 'n');
    __WEBPACK_IMPORTED_MODULE_1__tl__["b" /* WriteMediator */].bytes(rsaBox, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["y" /* bytesFromHex */])(exponent), 'e');

    var buffer = rsaBox.getBuffer();

    var fingerprintBytes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["d" /* sha1BytesSync */])(buffer).slice(-8);
    fingerprintBytes.reverse();

    publicKeysParsed[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__bin__["f" /* bytesToHex */])(fingerprintBytes)] = {
      modulus,
      exponent
    };
  };

  return {
    prepare: prepareRsaKeys,
    select: selectRsaKeyByFingerPrint
  };
};

/* harmony default export */ __webpack_exports__["a"] = (KeyManager);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Switch */
function _ref2(e) {
  return e;
}

function _ref3(e) {
  return e;
}

var Switch = (patterns, protector = _ref2) => (matches, mProtector = _ref3) => (...data) => {
  var keyList = Object.keys(patterns);
  var normalized = protector(...data);
  for (var _iterator = keyList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    if (patterns[key](normalized)) return mProtector(matches[key]);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(100)
var ieee754 = __webpack_require__(105)
var isArray = __webpack_require__(106)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(103);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(110);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {
      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      this._events.maxListeners = conf.maxListeners !== undefined ? conf.maxListeners : defaultMaxListeners;
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);
      conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    } else {
      this._events.maxListeners = defaultMaxListeners;
    }
  }

  function logPossibleMemoryLeak(count, eventName) {
    var errorMsg = '(node) warning: possible EventEmitter memory ' +
        'leak detected. %d listeners added. ' +
        'Use emitter.setMaxListeners() to increase limit.';

    if(this.verboseMemoryLeak){
      errorMsg += ' Event name: %s.';
      console.error(errorMsg, count, eventName);
    } else {
      console.error(errorMsg, count);
    }

    if (console.trace){
      console.trace();
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    this.verboseMemoryLeak = false;
    configure.call(this, conf);
  }
  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name !== undefined) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else {
          if (typeof tree._listeners === 'function') {
            tree._listeners = [tree._listeners];
          }

          tree._listeners.push(listener);

          if (
            !tree._listeners.warned &&
            this._events.maxListeners > 0 &&
            tree._listeners.length > this._events.maxListeners
          ) {
            tree._listeners.warned = true;
            logPossibleMemoryLeak.call(this, tree._listeners.length, name);
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    if (n !== undefined) {
      this._events || init.call(this);
      this._events.maxListeners = n;
      if (!this._conf) this._conf = {};
      this._conf.maxListeners = n;
    }
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      return fn.apply(this, arguments);
    }

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) {
        return false;
      }
    }

    var al = arguments.length;
    var args,l,i,j;
    var handler;

    if (this._all && this._all.length) {
      handler = this._all.slice();
      if (al > 3) {
        args = new Array(al);
        for (j = 0; j < al; j++) args[j] = arguments[j];
      }

      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this, type);
          break;
        case 2:
          handler[i].call(this, type, arguments[1]);
          break;
        case 3:
          handler[i].call(this, type, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
    }

    if (this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
      if (typeof handler === 'function') {
        this.event = type;
        switch (al) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          args = new Array(al - 1);
          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
          handler.apply(this, args);
        }
        return true;
      } else if (handler) {
        // need to make copy of handlers because list can change in the middle
        // of emit call
        handler = handler.slice();
      }
    }

    if (handler && handler.length) {
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this);
          break;
        case 2:
          handler[i].call(this, arguments[1]);
          break;
        case 3:
          handler[i].call(this, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
      return true;
    } else if (!this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }

    return !!this._all;
  };

  EventEmitter.prototype.emitAsync = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
        if (!this._events.newListener) { return Promise.resolve([false]); }
    }

    var promises= [];

    var al = arguments.length;
    var args,l,i,j;
    var handler;

    if (this._all) {
      if (al > 3) {
        args = new Array(al);
        for (j = 1; j < al; j++) args[j] = arguments[j];
      }
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(this._all[i].call(this, type));
          break;
        case 2:
          promises.push(this._all[i].call(this, type, arguments[1]));
          break;
        case 3:
          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
          break;
        default:
          promises.push(this._all[i].apply(this, args));
        }
      }
    }

    if (this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      switch (al) {
      case 1:
        promises.push(handler.call(this));
        break;
      case 2:
        promises.push(handler.call(this, arguments[1]));
        break;
      case 3:
        promises.push(handler.call(this, arguments[1], arguments[2]));
        break;
      default:
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
        promises.push(handler.apply(this, args));
      }
    } else if (handler && handler.length) {
      handler = handler.slice();
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(handler[i].call(this));
          break;
        case 2:
          promises.push(handler[i].call(this, arguments[1]));
          break;
        case 3:
          promises.push(handler[i].call(this, arguments[1], arguments[2]));
          break;
        default:
          promises.push(handler[i].apply(this, args));
        }
      }
    } else if (!this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        return Promise.reject(arguments[1]); // Unhandled 'error' event
      } else {
        return Promise.reject("Uncaught, unspecified 'error' event.");
      }
    }

    return Promise.all(promises);
  };

  EventEmitter.prototype.on = function(type, listener) {
    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if (this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else {
      if (typeof this._events[type] === 'function') {
        // Change to array.
        this._events[type] = [this._events[type]];
      }

      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (
        !this._events[type].warned &&
        this._events.maxListeners > 0 &&
        this._events[type].length > this._events.maxListeners
      ) {
        this._events[type].warned = true;
        logPossibleMemoryLeak.call(this, this._events[type].length, type);
      }
    }

    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {
    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if (!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }

        this.emit("removeListener", type, listener);

        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }

        this.emit("removeListener", type, listener);
      }
    }

    function recursivelyGarbageCollect(root) {
      if (root === undefined) {
        return;
      }
      var keys = Object.keys(root);
      for (var i in keys) {
        var key = keys[i];
        var obj = root[key];
        if ((obj instanceof Function) || (typeof obj !== "object") || (obj === null))
          continue;
        if (Object.keys(obj).length > 0) {
          recursivelyGarbageCollect(root[key]);
        }
        if (Object.keys(obj).length === 0) {
          delete root[key];
        }
      }
    }
    recursivelyGarbageCollect(this.listenerTree);

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          this.emit("removeListenerAny", fn);
          return this;
        }
      }
    } else {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++)
        this.emit("removeListenerAny", fns[i]);
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if (this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else if (this._events) {
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if (this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenerCount = function(type) {
    return this.listeners(type).length;
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (true) {
     // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return EventEmitter;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = EventEmitter;
  }
  else {
    // Browser global.
    window.EventEmitter2 = EventEmitter;
  }
}();


/***/ }),
/* 105 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 106 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports.parse = __webpack_require__(108);
exports.stringify = __webpack_require__(109);


/***/ }),
/* 108 */
/***/ (function(module, exports) {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(120)(module), __webpack_require__(14)))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(112);
exports.encode = exports.stringify = __webpack_require__(113);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

function oldBrowser () {
  throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11')
}

var Buffer = __webpack_require__(117).Buffer
var crypto = global.crypto || global.msCrypto

if (crypto && crypto.getRandomValues) {
  module.exports = randomBytes
} else {
  module.exports = oldBrowser
}

function randomBytes (size, cb) {
  // phantomjs needs to throw
  if (size > 65536) throw new Error('requested too many random bytes')
  // in case browserify  isn't using the Uint8Array version
  var rawBytes = new global.Uint8Array(size)

  // This will not work in older browsers.
  // See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
  if (size > 0) {  // getRandomValues fails on IE if size == 0
    crypto.getRandomValues(rawBytes)
  }

  // XXX: phantomjs doesn't like a buffer being passed here
  var bytes = Buffer.from(rawBytes.buffer)

  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes)
    })
  }

  return bytes
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(42)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Rusha"] = factory();
	else
		root["Rusha"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-env commonjs, browser */

var RushaCore = __webpack_require__(5);

var _require = __webpack_require__(1),
    toHex = _require.toHex,
    ceilHeapSize = _require.ceilHeapSize;

var conv = __webpack_require__(6);

// Calculate the length of buffer that the sha1 routine uses
// including the padding.
var padlen = function (len) {
  for (len += 9; len % 64 > 0; len += 1) {}
  return len;
};

var padZeroes = function (bin, len) {
  var h8 = new Uint8Array(bin.buffer);
  var om = len % 4,
      align = len - om;
  switch (om) {
    case 0:
      h8[align + 3] = 0;
    case 1:
      h8[align + 2] = 0;
    case 2:
      h8[align + 1] = 0;
    case 3:
      h8[align + 0] = 0;
  }
  for (var i = (len >> 2) + 1; i < bin.length; i++) {
    bin[i] = 0;
  }
};

var padData = function (bin, chunkLen, msgLen) {
  bin[chunkLen >> 2] |= 0x80 << 24 - (chunkLen % 4 << 3);
  // To support msgLen >= 2 GiB, use a float division when computing the
  // high 32-bits of the big-endian message length in bits.
  bin[((chunkLen >> 2) + 2 & ~0x0f) + 14] = msgLen / (1 << 29) | 0;
  bin[((chunkLen >> 2) + 2 & ~0x0f) + 15] = msgLen << 3;
};

var getRawDigest = function (heap, padMaxChunkLen) {
  var io = new Int32Array(heap, padMaxChunkLen + 320, 5);
  var out = new Int32Array(5);
  var arr = new DataView(out.buffer);
  arr.setInt32(0, io[0], false);
  arr.setInt32(4, io[1], false);
  arr.setInt32(8, io[2], false);
  arr.setInt32(12, io[3], false);
  arr.setInt32(16, io[4], false);
  return out;
};

var Rusha = function () {
  function Rusha(chunkSize) {
    _classCallCheck(this, Rusha);

    chunkSize = chunkSize || 64 * 1024;
    if (chunkSize % 64 > 0) {
      throw new Error('Chunk size must be a multiple of 128 bit');
    }
    this._offset = 0;
    this._maxChunkLen = chunkSize;
    this._padMaxChunkLen = padlen(chunkSize);
    // The size of the heap is the sum of:
    // 1. The padded input message size
    // 2. The extended space the algorithm needs (320 byte)
    // 3. The 160 bit state the algoritm uses
    this._heap = new ArrayBuffer(ceilHeapSize(this._padMaxChunkLen + 320 + 20));
    this._h32 = new Int32Array(this._heap);
    this._h8 = new Int8Array(this._heap);
    this._core = new RushaCore({ Int32Array: Int32Array }, {}, this._heap);
  }

  Rusha.prototype._initState = function _initState(heap, padMsgLen) {
    this._offset = 0;
    var io = new Int32Array(heap, padMsgLen + 320, 5);
    io[0] = 1732584193;
    io[1] = -271733879;
    io[2] = -1732584194;
    io[3] = 271733878;
    io[4] = -1009589776;
  };

  Rusha.prototype._padChunk = function _padChunk(chunkLen, msgLen) {
    var padChunkLen = padlen(chunkLen);
    var view = new Int32Array(this._heap, 0, padChunkLen >> 2);
    padZeroes(view, chunkLen);
    padData(view, chunkLen, msgLen);
    return padChunkLen;
  };

  Rusha.prototype._write = function _write(data, chunkOffset, chunkLen, off) {
    conv(data, this._h8, this._h32, chunkOffset, chunkLen, off || 0);
  };

  Rusha.prototype._coreCall = function _coreCall(data, chunkOffset, chunkLen, msgLen, finalize) {
    var padChunkLen = chunkLen;
    this._write(data, chunkOffset, chunkLen);
    if (finalize) {
      padChunkLen = this._padChunk(chunkLen, msgLen);
    }
    this._core.hash(padChunkLen, this._padMaxChunkLen);
  };

  Rusha.prototype.rawDigest = function rawDigest(str) {
    var msgLen = str.byteLength || str.length || str.size || 0;
    this._initState(this._heap, this._padMaxChunkLen);
    var chunkOffset = 0,
        chunkLen = this._maxChunkLen;
    for (chunkOffset = 0; msgLen > chunkOffset + chunkLen; chunkOffset += chunkLen) {
      this._coreCall(str, chunkOffset, chunkLen, msgLen, false);
    }
    this._coreCall(str, chunkOffset, msgLen - chunkOffset, msgLen, true);
    return getRawDigest(this._heap, this._padMaxChunkLen);
  };

  Rusha.prototype.digest = function digest(str) {
    return toHex(this.rawDigest(str).buffer);
  };

  Rusha.prototype.digestFromString = function digestFromString(str) {
    return this.digest(str);
  };

  Rusha.prototype.digestFromBuffer = function digestFromBuffer(str) {
    return this.digest(str);
  };

  Rusha.prototype.digestFromArrayBuffer = function digestFromArrayBuffer(str) {
    return this.digest(str);
  };

  Rusha.prototype.resetState = function resetState() {
    this._initState(this._heap, this._padMaxChunkLen);
    return this;
  };

  Rusha.prototype.append = function append(chunk) {
    var chunkOffset = 0;
    var chunkLen = chunk.byteLength || chunk.length || chunk.size || 0;
    var turnOffset = this._offset % this._maxChunkLen;
    var inputLen = void 0;

    this._offset += chunkLen;
    while (chunkOffset < chunkLen) {
      inputLen = Math.min(chunkLen - chunkOffset, this._maxChunkLen - turnOffset);
      this._write(chunk, chunkOffset, inputLen, turnOffset);
      turnOffset += inputLen;
      chunkOffset += inputLen;
      if (turnOffset === this._maxChunkLen) {
        this._core.hash(this._maxChunkLen, this._padMaxChunkLen);
        turnOffset = 0;
      }
    }
    return this;
  };

  Rusha.prototype.getState = function getState() {
    var turnOffset = this._offset % this._maxChunkLen;
    var heap = void 0;
    if (!turnOffset) {
      var io = new Int32Array(this._heap, this._padMaxChunkLen + 320, 5);
      heap = io.buffer.slice(io.byteOffset, io.byteOffset + io.byteLength);
    } else {
      heap = this._heap.slice(0);
    }
    return {
      offset: this._offset,
      heap: heap
    };
  };

  Rusha.prototype.setState = function setState(state) {
    this._offset = state.offset;
    if (state.heap.byteLength === 20) {
      var io = new Int32Array(this._heap, this._padMaxChunkLen + 320, 5);
      io.set(new Int32Array(state.heap));
    } else {
      this._h32.set(new Int32Array(state.heap));
    }
    return this;
  };

  Rusha.prototype.rawEnd = function rawEnd() {
    var msgLen = this._offset;
    var chunkLen = msgLen % this._maxChunkLen;
    var padChunkLen = this._padChunk(chunkLen, msgLen);
    this._core.hash(padChunkLen, this._padMaxChunkLen);
    var result = getRawDigest(this._heap, this._padMaxChunkLen);
    this._initState(this._heap, this._padMaxChunkLen);
    return result;
  };

  Rusha.prototype.end = function end() {
    return toHex(this.rawEnd().buffer);
  };

  return Rusha;
}();

module.exports = Rusha;
module.exports._core = RushaCore;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* eslint-env commonjs, browser */

//
// toHex
//

var precomputedHex = new Array(256);
for (var i = 0; i < 256; i++) {
  precomputedHex[i] = (i < 0x10 ? '0' : '') + i.toString(16);
}

module.exports.toHex = function (arrayBuffer) {
  var binarray = new Uint8Array(arrayBuffer);
  var res = new Array(arrayBuffer.byteLength);
  for (var _i = 0; _i < res.length; _i++) {
    res[_i] = precomputedHex[binarray[_i]];
  }
  return res.join('');
};

//
// ceilHeapSize
//

module.exports.ceilHeapSize = function (v) {
  // The asm.js spec says:
  // The heap object's byteLength must be either
  // 2^n for n in [12, 24) or 2^24 * n for n ≥ 1.
  // Also, byteLengths smaller than 2^16 are deprecated.
  var p = 0;
  // If v is smaller than 2^16, the smallest possible solution
  // is 2^16.
  if (v <= 65536) return 65536;
  // If v < 2^24, we round up to 2^n,
  // otherwise we round up to 2^24 * n.
  if (v < 16777216) {
    for (p = 1; p < v; p = p << 1) {}
  } else {
    for (p = 16777216; p < v; p += 16777216) {}
  }
  return p;
};

//
// isDedicatedWorkerScope
//

module.exports.isDedicatedWorkerScope = function (self) {
  var isRunningInWorker = 'WorkerGlobalScope' in self && self instanceof self.WorkerGlobalScope;
  var isRunningInSharedWorker = 'SharedWorkerGlobalScope' in self && self instanceof self.SharedWorkerGlobalScope;
  var isRunningInServiceWorker = 'ServiceWorkerGlobalScope' in self && self instanceof self.ServiceWorkerGlobalScope;

  // Detects whether we run inside a dedicated worker or not.
  //
  // We can't just check for `DedicatedWorkerGlobalScope`, since IE11
  // has a bug where it only supports `WorkerGlobalScope`.
  //
  // Therefore, we consider us as running inside a dedicated worker
  // when we are running inside a worker, but not in a shared or service worker.
  //
  // When new types of workers are introduced, we will need to adjust this code.
  return isRunningInWorker && !isRunningInSharedWorker && !isRunningInServiceWorker;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env commonjs, worker */

module.exports = function () {
  var Rusha = __webpack_require__(0);

  var hashData = function (hasher, data, cb) {
    try {
      return cb(null, hasher.digest(data));
    } catch (e) {
      return cb(e);
    }
  };

  var hashFile = function (hasher, readTotal, blockSize, file, cb) {
    var reader = new self.FileReader();
    reader.onloadend = function onloadend() {
      if (reader.error) {
        return cb(reader.error);
      }
      var buffer = reader.result;
      readTotal += reader.result.byteLength;
      try {
        hasher.append(buffer);
      } catch (e) {
        cb(e);
        return;
      }
      if (readTotal < file.size) {
        hashFile(hasher, readTotal, blockSize, file, cb);
      } else {
        cb(null, hasher.end());
      }
    };
    reader.readAsArrayBuffer(file.slice(readTotal, readTotal + blockSize));
  };

  var workerBehaviourEnabled = true;

  self.onmessage = function (event) {
    if (!workerBehaviourEnabled) {
      return;
    }

    var data = event.data.data,
        file = event.data.file,
        id = event.data.id;
    if (typeof id === 'undefined') return;
    if (!file && !data) return;
    var blockSize = event.data.blockSize || 4 * 1024 * 1024;
    var hasher = new Rusha(blockSize);
    hasher.resetState();
    var done = function (err, hash) {
      if (!err) {
        self.postMessage({ id: id, hash: hash });
      } else {
        self.postMessage({ id: id, error: err.name });
      }
    };
    if (data) hashData(hasher, data, done);
    if (file) hashFile(hasher, 0, blockSize, file, done);
  };

  return function () {
    workerBehaviourEnabled = false;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env commonjs, browser */

var work = __webpack_require__(4);
var Rusha = __webpack_require__(0);
var createHash = __webpack_require__(7);
var runWorker = __webpack_require__(2);

var _require = __webpack_require__(1),
    isDedicatedWorkerScope = _require.isDedicatedWorkerScope;

var isRunningInDedicatedWorker = typeof self !== 'undefined' && isDedicatedWorkerScope(self);

Rusha.disableWorkerBehaviour = isRunningInDedicatedWorker ? runWorker() : function () {};

Rusha.createWorker = function () {
  var worker = work(/*require.resolve*/(2));
  var terminate = worker.terminate;
  worker.terminate = function () {
    URL.revokeObjectURL(worker.objectURL);
    terminate.call(worker);
  };
  return worker;
};

Rusha.createHash = createHash;

module.exports = Rusha;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function webpackBootstrapFunc (modules) {
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.l = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }

/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };

/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };

/******/  // define __esModule on exports
/******/  __webpack_require__.r = function(exports) {
/******/    Object.defineProperty(exports, '__esModule', { value: true });
/******/  };

/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };

/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "/";

/******/  // on error function for async loading
/******/  __webpack_require__.oe = function(err) { console.error(err); throw err; };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE)
  return f.default || f // try to call default if defined to also support babel esmodule exports
}

var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+'
var dependencyRegExp = '\\((\/\\*.*?\\*\/)?\s?.*?(' + moduleNameReqExp + ').*?\\)' // additional chars when output.pathinfo is true

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp (str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

function getModuleDependencies (sources, module, queueName) {
  var retval = {}
  retval[queueName] = []

  var fnString = module.toString()
  var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/)
  if (!wrapperSignature) return retval
  var webpackRequireName = wrapperSignature[1]

  // main bundle deps
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g')
  var match
  while ((match = re.exec(fnString))) {
    if (match[3] === 'dll-reference') continue
    retval[queueName].push(match[3])
  }

  // dll deps
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g')
  while ((match = re.exec(fnString))) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1])
      sources[match[2]] = __webpack_require__(match[1]).m
    }
    retval[match[2]] = retval[match[2]] || []
    retval[match[2]].push(match[4])
  }

  return retval
}

function hasValuesInQueues (queues) {
  var keys = Object.keys(queues)
  return keys.reduce(function (hasValues, key) {
    return hasValues || queues[key].length > 0
  }, false)
}

function getRequiredModules (sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  }
  var requiredModules = {
    main: []
  }
  var seenModules = {
    main: {}
  }

  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue)
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i]
      var queue = modulesQueue[queueName]
      var moduleToCheck = queue.pop()
      seenModules[queueName] = seenModules[queueName] || {}
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue
      seenModules[queueName][moduleToCheck] = true
      requiredModules[queueName] = requiredModules[queueName] || []
      requiredModules[queueName].push(moduleToCheck)
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName)
      var newModulesKeys = Object.keys(newModules)
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || []
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]])
      }
    }
  }

  return requiredModules
}

module.exports = function (moduleId, options) {
  options = options || {}
  var sources = {
    main: __webpack_require__.m
  }

  var requiredModules = options.all ? { main: Object.keys(sources) } : getRequiredModules(sources, moduleId)

  var src = ''

  Object.keys(requiredModules).filter(function (m) { return m !== 'main' }).forEach(function (module) {
    var entryModule = 0
    while (requiredModules[module][entryModule]) {
      entryModule++
    }
    requiredModules[module].push(entryModule)
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'
    src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) { return '' + JSON.stringify(id) + ': ' + sources[module][id].toString() }).join(',') + '});\n'
  })

  src = src + '(' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) { return '' + JSON.stringify(id) + ': ' + sources.main[id].toString() }).join(',') + '})(self);'

  var blob = new window.Blob([src], { type: 'text/javascript' })
  if (options.bare) { return blob }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL

  var workerUrl = URL.createObjectURL(blob)
  var worker = new window.Worker(workerUrl)
  worker.objectURL = workerUrl

  return worker
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// The low-level RushCore module provides the heart of Rusha,
// a high-speed sha1 implementation working on an Int32Array heap.
// At first glance, the implementation seems complicated, however
// with the SHA1 spec at hand, it is obvious this almost a textbook
// implementation that has a few functions hand-inlined and a few loops
// hand-unrolled.
module.exports = function RushaCore(stdlib$846, foreign$847, heap$848) {
    'use asm';
    var H$849 = new stdlib$846.Int32Array(heap$848);
    function hash$850(k$851, x$852) {
        // k in bytes
        k$851 = k$851 | 0;
        x$852 = x$852 | 0;
        var i$853 = 0, j$854 = 0, y0$855 = 0, z0$856 = 0, y1$857 = 0, z1$858 = 0, y2$859 = 0, z2$860 = 0, y3$861 = 0, z3$862 = 0, y4$863 = 0, z4$864 = 0, t0$865 = 0, t1$866 = 0;
        y0$855 = H$849[x$852 + 320 >> 2] | 0;
        y1$857 = H$849[x$852 + 324 >> 2] | 0;
        y2$859 = H$849[x$852 + 328 >> 2] | 0;
        y3$861 = H$849[x$852 + 332 >> 2] | 0;
        y4$863 = H$849[x$852 + 336 >> 2] | 0;
        for (i$853 = 0; (i$853 | 0) < (k$851 | 0); i$853 = i$853 + 64 | 0) {
            z0$856 = y0$855;
            z1$858 = y1$857;
            z2$860 = y2$859;
            z3$862 = y3$861;
            z4$864 = y4$863;
            for (j$854 = 0; (j$854 | 0) < 64; j$854 = j$854 + 4 | 0) {
                t1$866 = H$849[i$853 + j$854 >> 2] | 0;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 & y2$859 | ~y1$857 & y3$861) | 0) + ((t1$866 + y4$863 | 0) + 1518500249 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[k$851 + j$854 >> 2] = t1$866;
            }
            for (j$854 = k$851 + 64 | 0; (j$854 | 0) < (k$851 + 80 | 0); j$854 = j$854 + 4 | 0) {
                t1$866 = (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) << 1 | (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) >>> 31;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 & y2$859 | ~y1$857 & y3$861) | 0) + ((t1$866 + y4$863 | 0) + 1518500249 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[j$854 >> 2] = t1$866;
            }
            for (j$854 = k$851 + 80 | 0; (j$854 | 0) < (k$851 + 160 | 0); j$854 = j$854 + 4 | 0) {
                t1$866 = (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) << 1 | (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) >>> 31;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 ^ y2$859 ^ y3$861) | 0) + ((t1$866 + y4$863 | 0) + 1859775393 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[j$854 >> 2] = t1$866;
            }
            for (j$854 = k$851 + 160 | 0; (j$854 | 0) < (k$851 + 240 | 0); j$854 = j$854 + 4 | 0) {
                t1$866 = (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) << 1 | (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) >>> 31;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 & y2$859 | y1$857 & y3$861 | y2$859 & y3$861) | 0) + ((t1$866 + y4$863 | 0) - 1894007588 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[j$854 >> 2] = t1$866;
            }
            for (j$854 = k$851 + 240 | 0; (j$854 | 0) < (k$851 + 320 | 0); j$854 = j$854 + 4 | 0) {
                t1$866 = (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) << 1 | (H$849[j$854 - 12 >> 2] ^ H$849[j$854 - 32 >> 2] ^ H$849[j$854 - 56 >> 2] ^ H$849[j$854 - 64 >> 2]) >>> 31;
                t0$865 = ((y0$855 << 5 | y0$855 >>> 27) + (y1$857 ^ y2$859 ^ y3$861) | 0) + ((t1$866 + y4$863 | 0) - 899497514 | 0) | 0;
                y4$863 = y3$861;
                y3$861 = y2$859;
                y2$859 = y1$857 << 30 | y1$857 >>> 2;
                y1$857 = y0$855;
                y0$855 = t0$865;
                H$849[j$854 >> 2] = t1$866;
            }
            y0$855 = y0$855 + z0$856 | 0;
            y1$857 = y1$857 + z1$858 | 0;
            y2$859 = y2$859 + z2$860 | 0;
            y3$861 = y3$861 + z3$862 | 0;
            y4$863 = y4$863 + z4$864 | 0;
        }
        H$849[x$852 + 320 >> 2] = y0$855;
        H$849[x$852 + 324 >> 2] = y1$857;
        H$849[x$852 + 328 >> 2] = y2$859;
        H$849[x$852 + 332 >> 2] = y3$861;
        H$849[x$852 + 336 >> 2] = y4$863;
    }
    return { hash: hash$850 };
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var _this = this;

/* eslint-env commonjs, browser */

var reader = void 0;
if (typeof self !== 'undefined' && typeof self.FileReaderSync !== 'undefined') {
  reader = new self.FileReaderSync();
}

// Convert a binary string and write it to the heap.
// A binary string is expected to only contain char codes < 256.
var convStr = function (str, H8, H32, start, len, off) {
  var i = void 0,
      om = off % 4,
      lm = (len + om) % 4,
      j = len - lm;
  switch (om) {
    case 0:
      H8[off] = str.charCodeAt(start + 3);
    case 1:
      H8[off + 1 - (om << 1) | 0] = str.charCodeAt(start + 2);
    case 2:
      H8[off + 2 - (om << 1) | 0] = str.charCodeAt(start + 1);
    case 3:
      H8[off + 3 - (om << 1) | 0] = str.charCodeAt(start);
  }
  if (len < lm + (4 - om)) {
    return;
  }
  for (i = 4 - om; i < j; i = i + 4 | 0) {
    H32[off + i >> 2] = str.charCodeAt(start + i) << 24 | str.charCodeAt(start + i + 1) << 16 | str.charCodeAt(start + i + 2) << 8 | str.charCodeAt(start + i + 3);
  }
  switch (lm) {
    case 3:
      H8[off + j + 1 | 0] = str.charCodeAt(start + j + 2);
    case 2:
      H8[off + j + 2 | 0] = str.charCodeAt(start + j + 1);
    case 1:
      H8[off + j + 3 | 0] = str.charCodeAt(start + j);
  }
};

// Convert a buffer or array and write it to the heap.
// The buffer or array is expected to only contain elements < 256.
var convBuf = function (buf, H8, H32, start, len, off) {
  var i = void 0,
      om = off % 4,
      lm = (len + om) % 4,
      j = len - lm;
  switch (om) {
    case 0:
      H8[off] = buf[start + 3];
    case 1:
      H8[off + 1 - (om << 1) | 0] = buf[start + 2];
    case 2:
      H8[off + 2 - (om << 1) | 0] = buf[start + 1];
    case 3:
      H8[off + 3 - (om << 1) | 0] = buf[start];
  }
  if (len < lm + (4 - om)) {
    return;
  }
  for (i = 4 - om; i < j; i = i + 4 | 0) {
    H32[off + i >> 2 | 0] = buf[start + i] << 24 | buf[start + i + 1] << 16 | buf[start + i + 2] << 8 | buf[start + i + 3];
  }
  switch (lm) {
    case 3:
      H8[off + j + 1 | 0] = buf[start + j + 2];
    case 2:
      H8[off + j + 2 | 0] = buf[start + j + 1];
    case 1:
      H8[off + j + 3 | 0] = buf[start + j];
  }
};

var convBlob = function (blob, H8, H32, start, len, off) {
  var i = void 0,
      om = off % 4,
      lm = (len + om) % 4,
      j = len - lm;
  var buf = new Uint8Array(reader.readAsArrayBuffer(blob.slice(start, start + len)));
  switch (om) {
    case 0:
      H8[off] = buf[3];
    case 1:
      H8[off + 1 - (om << 1) | 0] = buf[2];
    case 2:
      H8[off + 2 - (om << 1) | 0] = buf[1];
    case 3:
      H8[off + 3 - (om << 1) | 0] = buf[0];
  }
  if (len < lm + (4 - om)) {
    return;
  }
  for (i = 4 - om; i < j; i = i + 4 | 0) {
    H32[off + i >> 2 | 0] = buf[i] << 24 | buf[i + 1] << 16 | buf[i + 2] << 8 | buf[i + 3];
  }
  switch (lm) {
    case 3:
      H8[off + j + 1 | 0] = buf[j + 2];
    case 2:
      H8[off + j + 2 | 0] = buf[j + 1];
    case 1:
      H8[off + j + 3 | 0] = buf[j];
  }
};

module.exports = function (data, H8, H32, start, len, off) {
  if (typeof data === 'string') {
    return convStr(data, H8, H32, start, len, off);
  }
  if (data instanceof Array) {
    return convBuf(data, H8, H32, start, len, off);
  }
  // Safely doing a Buffer check using "this" to avoid Buffer polyfill to be included in the dist
  if (_this && _this.Buffer && _this.Buffer.isBuffer(data)) {
    return convBuf(data, H8, H32, start, len, off);
  }
  if (data instanceof ArrayBuffer) {
    return convBuf(new Uint8Array(data), H8, H32, start, len, off);
  }
  if (data.buffer instanceof ArrayBuffer) {
    return convBuf(new Uint8Array(data.buffer, data.byteOffset, data.byteLength), H8, H32, start, len, off);
  }
  if (data instanceof Blob) {
    return convBlob(data, H8, H32, start, len, off);
  }
  throw new Error('Unsupported data type.');
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-env commonjs, browser */

var Rusha = __webpack_require__(0);

var _require = __webpack_require__(1),
    toHex = _require.toHex;

var Hash = function () {
  function Hash() {
    _classCallCheck(this, Hash);

    this._rusha = new Rusha();
    this._rusha.resetState();
  }

  Hash.prototype.update = function update(data) {
    this._rusha.append(data);
    return this;
  };

  Hash.prototype.digest = function digest(encoding) {
    var digest = this._rusha.rawEnd().buffer;
    if (!encoding) {
      return digest;
    }
    if (encoding === 'hex') {
      return toHex(digest);
    }
    throw new Error('unsupported digest encoding');
  };

  return Hash;
}();

module.exports = function () {
  return new Hash();
};

/***/ })
/******/ ]);
});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(101)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(111);
var util = __webpack_require__(119);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(114);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;
module.exports = function(content, url) {
  try {
    try {
      var blob;
      try { // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
        blob = new BlobBuilder();
        blob.append(content);
        blob = blob.getBlob();
      } catch(e) { // The proposed API
        blob = new Blob([content]);
      }
      return new Worker(URL.createObjectURL(blob));
    } catch(e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch(e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }
    return new Worker(url);
  }
}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
};

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = {"constructors":[{"id":"-1132882121","predicate":"boolFalse","params":[],"type":"Bool"},{"id":"-1720552011","predicate":"boolTrue","params":[],"type":"Bool"},{"id":"1072550713","predicate":"true","params":[],"type":"True"},{"id":"481674261","predicate":"vector","params":[],"type":"Vector t"},{"id":"-994444869","predicate":"error","params":[{"name":"code","type":"int"},{"name":"text","type":"string"}],"type":"Error"},{"id":"1450380236","predicate":"null","params":[],"type":"Null"},{"id":"2134579434","predicate":"inputPeerEmpty","params":[],"type":"InputPeer"},{"id":"2107670217","predicate":"inputPeerSelf","params":[],"type":"InputPeer"},{"id":"396093539","predicate":"inputPeerChat","params":[{"name":"chat_id","type":"int"}],"type":"InputPeer"},{"id":"-1182234929","predicate":"inputUserEmpty","params":[],"type":"InputUser"},{"id":"-138301121","predicate":"inputUserSelf","params":[],"type":"InputUser"},{"id":"-208488460","predicate":"inputPhoneContact","params":[{"name":"client_id","type":"long"},{"name":"phone","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"InputContact"},{"id":"-181407105","predicate":"inputFile","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"name","type":"string"},{"name":"md5_checksum","type":"string"}],"type":"InputFile"},{"id":"-1771768449","predicate":"inputMediaEmpty","params":[],"type":"InputMedia"},{"id":"1661770481","predicate":"inputMediaUploadedPhoto","params":[{"name":"flags","type":"#"},{"name":"file","type":"InputFile"},{"name":"caption","type":"string"},{"name":"stickers","type":"flags.0?Vector<InputDocument>"}],"type":"InputMedia"},{"id":"-373312269","predicate":"inputMediaPhoto","params":[{"name":"id","type":"InputPhoto"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"-104578748","predicate":"inputMediaGeoPoint","params":[{"name":"geo_point","type":"InputGeoPoint"}],"type":"InputMedia"},{"id":"-1494984313","predicate":"inputMediaContact","params":[{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"InputMedia"},{"id":"480546647","predicate":"inputChatPhotoEmpty","params":[],"type":"InputChatPhoto"},{"id":"-1837345356","predicate":"inputChatUploadedPhoto","params":[{"name":"file","type":"InputFile"}],"type":"InputChatPhoto"},{"id":"-1991004873","predicate":"inputChatPhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"InputChatPhoto"},{"id":"-457104426","predicate":"inputGeoPointEmpty","params":[],"type":"InputGeoPoint"},{"id":"-206066487","predicate":"inputGeoPoint","params":[{"name":"lat","type":"double"},{"name":"long","type":"double"}],"type":"InputGeoPoint"},{"id":"483901197","predicate":"inputPhotoEmpty","params":[],"type":"InputPhoto"},{"id":"-74070332","predicate":"inputPhoto","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputPhoto"},{"id":"342061462","predicate":"inputFileLocation","params":[{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"InputFileLocation"},{"id":"1996904104","predicate":"inputAppEvent","params":[{"name":"time","type":"double"},{"name":"type","type":"string"},{"name":"peer","type":"long"},{"name":"data","type":"string"}],"type":"InputAppEvent"},{"id":"-1649296275","predicate":"peerUser","params":[{"name":"user_id","type":"int"}],"type":"Peer"},{"id":"-1160714821","predicate":"peerChat","params":[{"name":"chat_id","type":"int"}],"type":"Peer"},{"id":"-1432995067","predicate":"storage.fileUnknown","params":[],"type":"storage.FileType"},{"id":"8322574","predicate":"storage.fileJpeg","params":[],"type":"storage.FileType"},{"id":"-891180321","predicate":"storage.fileGif","params":[],"type":"storage.FileType"},{"id":"172975040","predicate":"storage.filePng","params":[],"type":"storage.FileType"},{"id":"-1373745011","predicate":"storage.filePdf","params":[],"type":"storage.FileType"},{"id":"1384777335","predicate":"storage.fileMp3","params":[],"type":"storage.FileType"},{"id":"1258941372","predicate":"storage.fileMov","params":[],"type":"storage.FileType"},{"id":"1086091090","predicate":"storage.filePartial","params":[],"type":"storage.FileType"},{"id":"-1278304028","predicate":"storage.fileMp4","params":[],"type":"storage.FileType"},{"id":"276907596","predicate":"storage.fileWebp","params":[],"type":"storage.FileType"},{"id":"2086234950","predicate":"fileLocationUnavailable","params":[{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"FileLocation"},{"id":"1406570614","predicate":"fileLocation","params":[{"name":"dc_id","type":"int"},{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"FileLocation"},{"id":"537022650","predicate":"userEmpty","params":[{"name":"id","type":"int"}],"type":"User"},{"id":"1326562017","predicate":"userProfilePhotoEmpty","params":[],"type":"UserProfilePhoto"},{"id":"-715532088","predicate":"userProfilePhoto","params":[{"name":"photo_id","type":"long"},{"name":"photo_small","type":"FileLocation"},{"name":"photo_big","type":"FileLocation"}],"type":"UserProfilePhoto"},{"id":"164646985","predicate":"userStatusEmpty","params":[],"type":"UserStatus"},{"id":"-306628279","predicate":"userStatusOnline","params":[{"name":"expires","type":"int"}],"type":"UserStatus"},{"id":"9203775","predicate":"userStatusOffline","params":[{"name":"was_online","type":"int"}],"type":"UserStatus"},{"id":"-1683826688","predicate":"chatEmpty","params":[{"name":"id","type":"int"}],"type":"Chat"},{"id":"-652419756","predicate":"chat","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"kicked","type":"flags.1?true"},{"name":"left","type":"flags.2?true"},{"name":"admins_enabled","type":"flags.3?true"},{"name":"admin","type":"flags.4?true"},{"name":"deactivated","type":"flags.5?true"},{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"photo","type":"ChatPhoto"},{"name":"participants_count","type":"int"},{"name":"date","type":"int"},{"name":"version","type":"int"},{"name":"migrated_to","type":"flags.6?InputChannel"}],"type":"Chat"},{"id":"120753115","predicate":"chatForbidden","params":[{"name":"id","type":"int"},{"name":"title","type":"string"}],"type":"Chat"},{"id":"771925524","predicate":"chatFull","params":[{"name":"id","type":"int"},{"name":"participants","type":"ChatParticipants"},{"name":"chat_photo","type":"Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"exported_invite","type":"ExportedChatInvite"},{"name":"bot_info","type":"Vector<BotInfo>"}],"type":"ChatFull"},{"id":"-925415106","predicate":"chatParticipant","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChatParticipant"},{"id":"-57668565","predicate":"chatParticipantsForbidden","params":[{"name":"flags","type":"#"},{"name":"chat_id","type":"int"},{"name":"self_participant","type":"flags.0?ChatParticipant"}],"type":"ChatParticipants"},{"id":"1061556205","predicate":"chatParticipants","params":[{"name":"chat_id","type":"int"},{"name":"participants","type":"Vector<ChatParticipant>"},{"name":"version","type":"int"}],"type":"ChatParticipants"},{"id":"935395612","predicate":"chatPhotoEmpty","params":[],"type":"ChatPhoto"},{"id":"1632839530","predicate":"chatPhoto","params":[{"name":"photo_small","type":"FileLocation"},{"name":"photo_big","type":"FileLocation"}],"type":"ChatPhoto"},{"id":"-2082087340","predicate":"messageEmpty","params":[{"name":"id","type":"int"}],"type":"Message"},{"id":"-1063525281","predicate":"message","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"post","type":"flags.14?true"},{"name":"id","type":"int"},{"name":"from_id","type":"flags.8?int"},{"name":"to_id","type":"Peer"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"date","type":"int"},{"name":"message","type":"string"},{"name":"media","type":"flags.9?MessageMedia"},{"name":"reply_markup","type":"flags.6?ReplyMarkup"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"},{"name":"views","type":"flags.10?int"},{"name":"edit_date","type":"flags.15?int"}],"type":"Message"},{"id":"-1642487306","predicate":"messageService","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"post","type":"flags.14?true"},{"name":"id","type":"int"},{"name":"from_id","type":"flags.8?int"},{"name":"to_id","type":"Peer"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"date","type":"int"},{"name":"action","type":"MessageAction"}],"type":"Message"},{"id":"1038967584","predicate":"messageMediaEmpty","params":[],"type":"MessageMedia"},{"id":"1032643901","predicate":"messageMediaPhoto","params":[{"name":"photo","type":"Photo"},{"name":"caption","type":"string"}],"type":"MessageMedia"},{"id":"1457575028","predicate":"messageMediaGeo","params":[{"name":"geo","type":"GeoPoint"}],"type":"MessageMedia"},{"id":"1585262393","predicate":"messageMediaContact","params":[{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"user_id","type":"int"}],"type":"MessageMedia"},{"id":"-1618676578","predicate":"messageMediaUnsupported","params":[],"type":"MessageMedia"},{"id":"-1230047312","predicate":"messageActionEmpty","params":[],"type":"MessageAction"},{"id":"-1503425638","predicate":"messageActionChatCreate","params":[{"name":"title","type":"string"},{"name":"users","type":"Vector<int>"}],"type":"MessageAction"},{"id":"-1247687078","predicate":"messageActionChatEditTitle","params":[{"name":"title","type":"string"}],"type":"MessageAction"},{"id":"2144015272","predicate":"messageActionChatEditPhoto","params":[{"name":"photo","type":"Photo"}],"type":"MessageAction"},{"id":"-1780220945","predicate":"messageActionChatDeletePhoto","params":[],"type":"MessageAction"},{"id":"1217033015","predicate":"messageActionChatAddUser","params":[{"name":"users","type":"Vector<int>"}],"type":"MessageAction"},{"id":"-1297179892","predicate":"messageActionChatDeleteUser","params":[{"name":"user_id","type":"int"}],"type":"MessageAction"},{"id":"1728035348","predicate":"dialog","params":[{"name":"flags","type":"#"},{"name":"peer","type":"Peer"},{"name":"top_message","type":"int"},{"name":"read_inbox_max_id","type":"int"},{"name":"read_outbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"pts","type":"flags.0?int"},{"name":"draft","type":"flags.1?DraftMessage"}],"type":"Dialog"},{"id":"590459437","predicate":"photoEmpty","params":[{"name":"id","type":"long"}],"type":"Photo"},{"id":"-1836524247","predicate":"photo","params":[{"name":"flags","type":"#"},{"name":"has_stickers","type":"flags.0?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"sizes","type":"Vector<PhotoSize>"}],"type":"Photo"},{"id":"236446268","predicate":"photoSizeEmpty","params":[{"name":"type","type":"string"}],"type":"PhotoSize"},{"id":"2009052699","predicate":"photoSize","params":[{"name":"type","type":"string"},{"name":"location","type":"FileLocation"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"size","type":"int"}],"type":"PhotoSize"},{"id":"-374917894","predicate":"photoCachedSize","params":[{"name":"type","type":"string"},{"name":"location","type":"FileLocation"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"bytes","type":"bytes"}],"type":"PhotoSize"},{"id":"286776671","predicate":"geoPointEmpty","params":[],"type":"GeoPoint"},{"id":"541710092","predicate":"geoPoint","params":[{"name":"long","type":"double"},{"name":"lat","type":"double"}],"type":"GeoPoint"},{"id":"-2128698738","predicate":"auth.checkedPhone","params":[{"name":"phone_registered","type":"Bool"}],"type":"auth.CheckedPhone"},{"id":"1577067778","predicate":"auth.sentCode","params":[{"name":"flags","type":"#"},{"name":"phone_registered","type":"flags.0?true"},{"name":"type","type":"auth.SentCodeType"},{"name":"phone_code_hash","type":"string"},{"name":"next_type","type":"flags.1?auth.CodeType"},{"name":"timeout","type":"flags.2?int"}],"type":"auth.SentCode"},{"id":"-855308010","predicate":"auth.authorization","params":[{"name":"flags","type":"#"},{"name":"tmp_sessions","type":"flags.0?int"},{"name":"user","type":"User"}],"type":"auth.Authorization"},{"id":"-543777747","predicate":"auth.exportedAuthorization","params":[{"name":"id","type":"int"},{"name":"bytes","type":"bytes"}],"type":"auth.ExportedAuthorization"},{"id":"-1195615476","predicate":"inputNotifyPeer","params":[{"name":"peer","type":"InputPeer"}],"type":"InputNotifyPeer"},{"id":"423314455","predicate":"inputNotifyUsers","params":[],"type":"InputNotifyPeer"},{"id":"1251338318","predicate":"inputNotifyChats","params":[],"type":"InputNotifyPeer"},{"id":"-1540769658","predicate":"inputNotifyAll","params":[],"type":"InputNotifyPeer"},{"id":"-265263912","predicate":"inputPeerNotifyEventsEmpty","params":[],"type":"InputPeerNotifyEvents"},{"id":"-395694988","predicate":"inputPeerNotifyEventsAll","params":[],"type":"InputPeerNotifyEvents"},{"id":"949182130","predicate":"inputPeerNotifySettings","params":[{"name":"flags","type":"#"},{"name":"show_previews","type":"flags.0?true"},{"name":"silent","type":"flags.1?true"},{"name":"mute_until","type":"int"},{"name":"sound","type":"string"}],"type":"InputPeerNotifySettings"},{"id":"-1378534221","predicate":"peerNotifyEventsEmpty","params":[],"type":"PeerNotifyEvents"},{"id":"1830677896","predicate":"peerNotifyEventsAll","params":[],"type":"PeerNotifyEvents"},{"id":"1889961234","predicate":"peerNotifySettingsEmpty","params":[],"type":"PeerNotifySettings"},{"id":"-1697798976","predicate":"peerNotifySettings","params":[{"name":"flags","type":"#"},{"name":"show_previews","type":"flags.0?true"},{"name":"silent","type":"flags.1?true"},{"name":"mute_until","type":"int"},{"name":"sound","type":"string"}],"type":"PeerNotifySettings"},{"id":"-2122045747","predicate":"peerSettings","params":[{"name":"flags","type":"#"},{"name":"report_spam","type":"flags.0?true"}],"type":"PeerSettings"},{"id":"-860866985","predicate":"wallPaper","params":[{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"sizes","type":"Vector<PhotoSize>"},{"name":"color","type":"int"}],"type":"WallPaper"},{"id":"1490799288","predicate":"inputReportReasonSpam","params":[],"type":"ReportReason"},{"id":"505595789","predicate":"inputReportReasonViolence","params":[],"type":"ReportReason"},{"id":"777640226","predicate":"inputReportReasonPornography","params":[],"type":"ReportReason"},{"id":"-512463606","predicate":"inputReportReasonOther","params":[{"name":"text","type":"string"}],"type":"ReportReason"},{"id":"1496513539","predicate":"userFull","params":[{"name":"flags","type":"#"},{"name":"blocked","type":"flags.0?true"},{"name":"user","type":"User"},{"name":"about","type":"flags.1?string"},{"name":"link","type":"contacts.Link"},{"name":"profile_photo","type":"flags.2?Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"bot_info","type":"flags.3?BotInfo"}],"type":"UserFull"},{"id":"-116274796","predicate":"contact","params":[{"name":"user_id","type":"int"},{"name":"mutual","type":"Bool"}],"type":"Contact"},{"id":"-805141448","predicate":"importedContact","params":[{"name":"user_id","type":"int"},{"name":"client_id","type":"long"}],"type":"ImportedContact"},{"id":"1444661369","predicate":"contactBlocked","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"ContactBlocked"},{"id":"-748155807","predicate":"contactStatus","params":[{"name":"user_id","type":"int"},{"name":"status","type":"UserStatus"}],"type":"ContactStatus"},{"id":"986597452","predicate":"contacts.link","params":[{"name":"my_link","type":"ContactLink"},{"name":"foreign_link","type":"ContactLink"},{"name":"user","type":"User"}],"type":"contacts.Link"},{"id":"-1219778094","predicate":"contacts.contactsNotModified","params":[],"type":"contacts.Contacts"},{"id":"1871416498","predicate":"contacts.contacts","params":[{"name":"contacts","type":"Vector<Contact>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Contacts"},{"id":"-1387117803","predicate":"contacts.importedContacts","params":[{"name":"imported","type":"Vector<ImportedContact>"},{"name":"retry_contacts","type":"Vector<long>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.ImportedContacts"},{"id":"471043349","predicate":"contacts.blocked","params":[{"name":"blocked","type":"Vector<ContactBlocked>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Blocked"},{"id":"-1878523231","predicate":"contacts.blockedSlice","params":[{"name":"count","type":"int"},{"name":"blocked","type":"Vector<ContactBlocked>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Blocked"},{"id":"364538944","predicate":"messages.dialogs","params":[{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Dialogs"},{"id":"1910543603","predicate":"messages.dialogsSlice","params":[{"name":"count","type":"int"},{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Dialogs"},{"id":"-1938715001","predicate":"messages.messages","params":[{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"189033187","predicate":"messages.messagesSlice","params":[{"name":"count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"1694474197","predicate":"messages.chats","params":[{"name":"chats","type":"Vector<Chat>"}],"type":"messages.Chats"},{"id":"-438840932","predicate":"messages.chatFull","params":[{"name":"full_chat","type":"ChatFull"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.ChatFull"},{"id":"-1269012015","predicate":"messages.affectedHistory","params":[{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"offset","type":"int"}],"type":"messages.AffectedHistory"},{"id":"1474492012","predicate":"inputMessagesFilterEmpty","params":[],"type":"MessagesFilter"},{"id":"-1777752804","predicate":"inputMessagesFilterPhotos","params":[],"type":"MessagesFilter"},{"id":"-1614803355","predicate":"inputMessagesFilterVideo","params":[],"type":"MessagesFilter"},{"id":"1458172132","predicate":"inputMessagesFilterPhotoVideo","params":[],"type":"MessagesFilter"},{"id":"-648121413","predicate":"inputMessagesFilterPhotoVideoDocuments","params":[],"type":"MessagesFilter"},{"id":"-1629621880","predicate":"inputMessagesFilterDocument","params":[],"type":"MessagesFilter"},{"id":"2129714567","predicate":"inputMessagesFilterUrl","params":[],"type":"MessagesFilter"},{"id":"-3644025","predicate":"inputMessagesFilterGif","params":[],"type":"MessagesFilter"},{"id":"522914557","predicate":"updateNewMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1318109142","predicate":"updateMessageID","params":[{"name":"id","type":"int"},{"name":"random_id","type":"long"}],"type":"Update"},{"id":"-1576161051","predicate":"updateDeleteMessages","params":[{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1548249383","predicate":"updateUserTyping","params":[{"name":"user_id","type":"int"},{"name":"action","type":"SendMessageAction"}],"type":"Update"},{"id":"-1704596961","predicate":"updateChatUserTyping","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"action","type":"SendMessageAction"}],"type":"Update"},{"id":"125178264","predicate":"updateChatParticipants","params":[{"name":"participants","type":"ChatParticipants"}],"type":"Update"},{"id":"469489699","predicate":"updateUserStatus","params":[{"name":"user_id","type":"int"},{"name":"status","type":"UserStatus"}],"type":"Update"},{"id":"-1489818765","predicate":"updateUserName","params":[{"name":"user_id","type":"int"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"username","type":"string"}],"type":"Update"},{"id":"-1791935732","predicate":"updateUserPhoto","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"},{"name":"photo","type":"UserProfilePhoto"},{"name":"previous","type":"Bool"}],"type":"Update"},{"id":"628472761","predicate":"updateContactRegistered","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"Update"},{"id":"-1657903163","predicate":"updateContactLink","params":[{"name":"user_id","type":"int"},{"name":"my_link","type":"ContactLink"},{"name":"foreign_link","type":"ContactLink"}],"type":"Update"},{"id":"-1895411046","predicate":"updateNewAuthorization","params":[{"name":"auth_key_id","type":"long"},{"name":"date","type":"int"},{"name":"device","type":"string"},{"name":"location","type":"string"}],"type":"Update"},{"id":"-1519637954","predicate":"updates.state","params":[{"name":"pts","type":"int"},{"name":"qts","type":"int"},{"name":"date","type":"int"},{"name":"seq","type":"int"},{"name":"unread_count","type":"int"}],"type":"updates.State"},{"id":"1567990072","predicate":"updates.differenceEmpty","params":[{"name":"date","type":"int"},{"name":"seq","type":"int"}],"type":"updates.Difference"},{"id":"16030880","predicate":"updates.difference","params":[{"name":"new_messages","type":"Vector<Message>"},{"name":"new_encrypted_messages","type":"Vector<EncryptedMessage>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"state","type":"updates.State"}],"type":"updates.Difference"},{"id":"-1459938943","predicate":"updates.differenceSlice","params":[{"name":"new_messages","type":"Vector<Message>"},{"name":"new_encrypted_messages","type":"Vector<EncryptedMessage>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"intermediate_state","type":"updates.State"}],"type":"updates.Difference"},{"id":"-484987010","predicate":"updatesTooLong","params":[],"type":"Updates"},{"id":"-1857044719","predicate":"updateShortMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"id","type":"int"},{"name":"user_id","type":"int"},{"name":"message","type":"string"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"377562760","predicate":"updateShortChatMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"id","type":"int"},{"name":"from_id","type":"int"},{"name":"chat_id","type":"int"},{"name":"message","type":"string"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"2027216577","predicate":"updateShort","params":[{"name":"update","type":"Update"},{"name":"date","type":"int"}],"type":"Updates"},{"id":"1918567619","predicate":"updatesCombined","params":[{"name":"updates","type":"Vector<Update>"},{"name":"users","type":"Vector<User>"},{"name":"chats","type":"Vector<Chat>"},{"name":"date","type":"int"},{"name":"seq_start","type":"int"},{"name":"seq","type":"int"}],"type":"Updates"},{"id":"1957577280","predicate":"updates","params":[{"name":"updates","type":"Vector<Update>"},{"name":"users","type":"Vector<User>"},{"name":"chats","type":"Vector<Chat>"},{"name":"date","type":"int"},{"name":"seq","type":"int"}],"type":"Updates"},{"id":"-1916114267","predicate":"photos.photos","params":[{"name":"photos","type":"Vector<Photo>"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photos"},{"id":"352657236","predicate":"photos.photosSlice","params":[{"name":"count","type":"int"},{"name":"photos","type":"Vector<Photo>"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photos"},{"id":"539045032","predicate":"photos.photo","params":[{"name":"photo","type":"Photo"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photo"},{"id":"157948117","predicate":"upload.file","params":[{"name":"type","type":"storage.FileType"},{"name":"mtime","type":"int"},{"name":"bytes","type":"bytes"}],"type":"upload.File"},{"id":"98092748","predicate":"dcOption","params":[{"name":"flags","type":"#"},{"name":"ipv6","type":"flags.0?true"},{"name":"media_only","type":"flags.1?true"},{"name":"tcpo_only","type":"flags.2?true"},{"name":"id","type":"int"},{"name":"ip_address","type":"string"},{"name":"port","type":"int"}],"type":"DcOption"},{"id":"-1704251862","predicate":"config","params":[{"name":"flags","type":"#"},{"name":"date","type":"int"},{"name":"expires","type":"int"},{"name":"test_mode","type":"Bool"},{"name":"this_dc","type":"int"},{"name":"dc_options","type":"Vector<DcOption>"},{"name":"chat_size_max","type":"int"},{"name":"megagroup_size_max","type":"int"},{"name":"forwarded_count_max","type":"int"},{"name":"online_update_period_ms","type":"int"},{"name":"offline_blur_timeout_ms","type":"int"},{"name":"offline_idle_timeout_ms","type":"int"},{"name":"online_cloud_timeout_ms","type":"int"},{"name":"notify_cloud_delay_ms","type":"int"},{"name":"notify_default_delay_ms","type":"int"},{"name":"chat_big_size","type":"int"},{"name":"push_chat_period_ms","type":"int"},{"name":"push_chat_limit","type":"int"},{"name":"saved_gifs_limit","type":"int"},{"name":"edit_time_limit","type":"int"},{"name":"rating_e_decay","type":"int"},{"name":"stickers_recent_limit","type":"int"},{"name":"tmp_sessions","type":"flags.0?int"},{"name":"disabled_features","type":"Vector<DisabledFeature>"}],"type":"Config"},{"id":"-1910892683","predicate":"nearestDc","params":[{"name":"country","type":"string"},{"name":"this_dc","type":"int"},{"name":"nearest_dc","type":"int"}],"type":"NearestDc"},{"id":"-1987579119","predicate":"help.appUpdate","params":[{"name":"id","type":"int"},{"name":"critical","type":"Bool"},{"name":"url","type":"string"},{"name":"text","type":"string"}],"type":"help.AppUpdate"},{"id":"-1000708810","predicate":"help.noAppUpdate","params":[],"type":"help.AppUpdate"},{"id":"415997816","predicate":"help.inviteText","params":[{"name":"message","type":"string"}],"type":"help.InviteText"},{"id":"1662091044","predicate":"wallPaperSolid","params":[{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"bg_color","type":"int"},{"name":"color","type":"int"}],"type":"WallPaper"},{"id":"314359194","predicate":"updateNewEncryptedMessage","params":[{"name":"message","type":"EncryptedMessage"},{"name":"qts","type":"int"}],"type":"Update"},{"id":"386986326","predicate":"updateEncryptedChatTyping","params":[{"name":"chat_id","type":"int"}],"type":"Update"},{"id":"-1264392051","predicate":"updateEncryption","params":[{"name":"chat","type":"EncryptedChat"},{"name":"date","type":"int"}],"type":"Update"},{"id":"956179895","predicate":"updateEncryptedMessagesRead","params":[{"name":"chat_id","type":"int"},{"name":"max_date","type":"int"},{"name":"date","type":"int"}],"type":"Update"},{"id":"-1417756512","predicate":"encryptedChatEmpty","params":[{"name":"id","type":"int"}],"type":"EncryptedChat"},{"id":"1006044124","predicate":"encryptedChatWaiting","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"}],"type":"EncryptedChat"},{"id":"-931638658","predicate":"encryptedChatRequested","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a","type":"bytes"}],"type":"EncryptedChat"},{"id":"-94974410","predicate":"encryptedChat","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a_or_b","type":"bytes"},{"name":"key_fingerprint","type":"long"}],"type":"EncryptedChat"},{"id":"332848423","predicate":"encryptedChatDiscarded","params":[{"name":"id","type":"int"}],"type":"EncryptedChat"},{"id":"-247351839","predicate":"inputEncryptedChat","params":[{"name":"chat_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputEncryptedChat"},{"id":"-1038136962","predicate":"encryptedFileEmpty","params":[],"type":"EncryptedFile"},{"id":"1248893260","predicate":"encryptedFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"size","type":"int"},{"name":"dc_id","type":"int"},{"name":"key_fingerprint","type":"int"}],"type":"EncryptedFile"},{"id":"406307684","predicate":"inputEncryptedFileEmpty","params":[],"type":"InputEncryptedFile"},{"id":"1690108678","predicate":"inputEncryptedFileUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"md5_checksum","type":"string"},{"name":"key_fingerprint","type":"int"}],"type":"InputEncryptedFile"},{"id":"1511503333","predicate":"inputEncryptedFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputEncryptedFile"},{"id":"-182231723","predicate":"inputEncryptedFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputFileLocation"},{"id":"-317144808","predicate":"encryptedMessage","params":[{"name":"random_id","type":"long"},{"name":"chat_id","type":"int"},{"name":"date","type":"int"},{"name":"bytes","type":"bytes"},{"name":"file","type":"EncryptedFile"}],"type":"EncryptedMessage"},{"id":"594758406","predicate":"encryptedMessageService","params":[{"name":"random_id","type":"long"},{"name":"chat_id","type":"int"},{"name":"date","type":"int"},{"name":"bytes","type":"bytes"}],"type":"EncryptedMessage"},{"id":"-1058912715","predicate":"messages.dhConfigNotModified","params":[{"name":"random","type":"bytes"}],"type":"messages.DhConfig"},{"id":"740433629","predicate":"messages.dhConfig","params":[{"name":"g","type":"int"},{"name":"p","type":"bytes"},{"name":"version","type":"int"},{"name":"random","type":"bytes"}],"type":"messages.DhConfig"},{"id":"1443858741","predicate":"messages.sentEncryptedMessage","params":[{"name":"date","type":"int"}],"type":"messages.SentEncryptedMessage"},{"id":"-1802240206","predicate":"messages.sentEncryptedFile","params":[{"name":"date","type":"int"},{"name":"file","type":"EncryptedFile"}],"type":"messages.SentEncryptedMessage"},{"id":"-95482955","predicate":"inputFileBig","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"name","type":"string"}],"type":"InputFile"},{"id":"767652808","predicate":"inputEncryptedFileBigUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"key_fingerprint","type":"int"}],"type":"InputEncryptedFile"},{"id":"-364179876","predicate":"updateChatParticipantAdd","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"1851755554","predicate":"updateChatParticipantDelete","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-1906403213","predicate":"updateDcOptions","params":[{"name":"dc_options","type":"Vector<DcOption>"}],"type":"Update"},{"id":"-797904407","predicate":"inputMediaUploadedDocument","params":[{"name":"flags","type":"#"},{"name":"file","type":"InputFile"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"},{"name":"caption","type":"string"},{"name":"stickers","type":"flags.0?Vector<InputDocument>"}],"type":"InputMedia"},{"id":"1356369070","predicate":"inputMediaUploadedThumbDocument","params":[{"name":"flags","type":"#"},{"name":"file","type":"InputFile"},{"name":"thumb","type":"InputFile"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"},{"name":"caption","type":"string"},{"name":"stickers","type":"flags.0?Vector<InputDocument>"}],"type":"InputMedia"},{"id":"444068508","predicate":"inputMediaDocument","params":[{"name":"id","type":"InputDocument"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"-203411800","predicate":"messageMediaDocument","params":[{"name":"document","type":"Document"},{"name":"caption","type":"string"}],"type":"MessageMedia"},{"id":"1928391342","predicate":"inputDocumentEmpty","params":[],"type":"InputDocument"},{"id":"410618194","predicate":"inputDocument","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputDocument"},{"id":"1125058340","predicate":"inputDocumentFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"version","type":"int"}],"type":"InputFileLocation"},{"id":"922273905","predicate":"documentEmpty","params":[{"name":"id","type":"long"}],"type":"Document"},{"id":"-2027738169","predicate":"document","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"mime_type","type":"string"},{"name":"size","type":"int"},{"name":"thumb","type":"PhotoSize"},{"name":"dc_id","type":"int"},{"name":"version","type":"int"},{"name":"attributes","type":"Vector<DocumentAttribute>"}],"type":"Document"},{"id":"398898678","predicate":"help.support","params":[{"name":"phone_number","type":"string"},{"name":"user","type":"User"}],"type":"help.Support"},{"id":"-1613493288","predicate":"notifyPeer","params":[{"name":"peer","type":"Peer"}],"type":"NotifyPeer"},{"id":"-1261946036","predicate":"notifyUsers","params":[],"type":"NotifyPeer"},{"id":"-1073230141","predicate":"notifyChats","params":[],"type":"NotifyPeer"},{"id":"1959820384","predicate":"notifyAll","params":[],"type":"NotifyPeer"},{"id":"-2131957734","predicate":"updateUserBlocked","params":[{"name":"user_id","type":"int"},{"name":"blocked","type":"Bool"}],"type":"Update"},{"id":"-1094555409","predicate":"updateNotifySettings","params":[{"name":"peer","type":"NotifyPeer"},{"name":"notify_settings","type":"PeerNotifySettings"}],"type":"Update"},{"id":"381645902","predicate":"sendMessageTypingAction","params":[],"type":"SendMessageAction"},{"id":"-44119819","predicate":"sendMessageCancelAction","params":[],"type":"SendMessageAction"},{"id":"-1584933265","predicate":"sendMessageRecordVideoAction","params":[],"type":"SendMessageAction"},{"id":"-378127636","predicate":"sendMessageUploadVideoAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-718310409","predicate":"sendMessageRecordAudioAction","params":[],"type":"SendMessageAction"},{"id":"-212740181","predicate":"sendMessageUploadAudioAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-774682074","predicate":"sendMessageUploadPhotoAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-1441998364","predicate":"sendMessageUploadDocumentAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"393186209","predicate":"sendMessageGeoLocationAction","params":[],"type":"SendMessageAction"},{"id":"1653390447","predicate":"sendMessageChooseContactAction","params":[],"type":"SendMessageAction"},{"id":"446822276","predicate":"contacts.found","params":[{"name":"results","type":"Vector<Peer>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Found"},{"id":"942527460","predicate":"updateServiceNotification","params":[{"name":"type","type":"string"},{"name":"message","type":"string"},{"name":"media","type":"MessageMedia"},{"name":"popup","type":"Bool"}],"type":"Update"},{"id":"-496024847","predicate":"userStatusRecently","params":[],"type":"UserStatus"},{"id":"129960444","predicate":"userStatusLastWeek","params":[],"type":"UserStatus"},{"id":"2011940674","predicate":"userStatusLastMonth","params":[],"type":"UserStatus"},{"id":"-298113238","predicate":"updatePrivacy","params":[{"name":"key","type":"PrivacyKey"},{"name":"rules","type":"Vector<PrivacyRule>"}],"type":"Update"},{"id":"1335282456","predicate":"inputPrivacyKeyStatusTimestamp","params":[],"type":"InputPrivacyKey"},{"id":"-1137792208","predicate":"privacyKeyStatusTimestamp","params":[],"type":"PrivacyKey"},{"id":"218751099","predicate":"inputPrivacyValueAllowContacts","params":[],"type":"InputPrivacyRule"},{"id":"407582158","predicate":"inputPrivacyValueAllowAll","params":[],"type":"InputPrivacyRule"},{"id":"320652927","predicate":"inputPrivacyValueAllowUsers","params":[{"name":"users","type":"Vector<InputUser>"}],"type":"InputPrivacyRule"},{"id":"195371015","predicate":"inputPrivacyValueDisallowContacts","params":[],"type":"InputPrivacyRule"},{"id":"-697604407","predicate":"inputPrivacyValueDisallowAll","params":[],"type":"InputPrivacyRule"},{"id":"-1877932953","predicate":"inputPrivacyValueDisallowUsers","params":[{"name":"users","type":"Vector<InputUser>"}],"type":"InputPrivacyRule"},{"id":"-123988","predicate":"privacyValueAllowContacts","params":[],"type":"PrivacyRule"},{"id":"1698855810","predicate":"privacyValueAllowAll","params":[],"type":"PrivacyRule"},{"id":"1297858060","predicate":"privacyValueAllowUsers","params":[{"name":"users","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"-125240806","predicate":"privacyValueDisallowContacts","params":[],"type":"PrivacyRule"},{"id":"-1955338397","predicate":"privacyValueDisallowAll","params":[],"type":"PrivacyRule"},{"id":"209668535","predicate":"privacyValueDisallowUsers","params":[{"name":"users","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"1430961007","predicate":"account.privacyRules","params":[{"name":"rules","type":"Vector<PrivacyRule>"},{"name":"users","type":"Vector<User>"}],"type":"account.PrivacyRules"},{"id":"-1194283041","predicate":"accountDaysTTL","params":[{"name":"days","type":"int"}],"type":"AccountDaysTTL"},{"id":"314130811","predicate":"updateUserPhone","params":[{"name":"user_id","type":"int"},{"name":"phone","type":"string"}],"type":"Update"},{"id":"1815593308","predicate":"documentAttributeImageSize","params":[{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"DocumentAttribute"},{"id":"297109817","predicate":"documentAttributeAnimated","params":[],"type":"DocumentAttribute"},{"id":"1662637586","predicate":"documentAttributeSticker","params":[{"name":"flags","type":"#"},{"name":"mask","type":"flags.1?true"},{"name":"alt","type":"string"},{"name":"stickerset","type":"InputStickerSet"},{"name":"mask_coords","type":"flags.0?MaskCoords"}],"type":"DocumentAttribute"},{"id":"1494273227","predicate":"documentAttributeVideo","params":[{"name":"duration","type":"int"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"DocumentAttribute"},{"id":"-1739392570","predicate":"documentAttributeAudio","params":[{"name":"flags","type":"#"},{"name":"voice","type":"flags.10?true"},{"name":"duration","type":"int"},{"name":"title","type":"flags.0?string"},{"name":"performer","type":"flags.1?string"},{"name":"waveform","type":"flags.2?bytes"}],"type":"DocumentAttribute"},{"id":"358154344","predicate":"documentAttributeFilename","params":[{"name":"file_name","type":"string"}],"type":"DocumentAttribute"},{"id":"-244016606","predicate":"messages.stickersNotModified","params":[],"type":"messages.Stickers"},{"id":"-1970352846","predicate":"messages.stickers","params":[{"name":"hash","type":"string"},{"name":"stickers","type":"Vector<Document>"}],"type":"messages.Stickers"},{"id":"313694676","predicate":"stickerPack","params":[{"name":"emoticon","type":"string"},{"name":"documents","type":"Vector<long>"}],"type":"StickerPack"},{"id":"-395967805","predicate":"messages.allStickersNotModified","params":[],"type":"messages.AllStickers"},{"id":"-302170017","predicate":"messages.allStickers","params":[{"name":"hash","type":"int"},{"name":"sets","type":"Vector<StickerSet>"}],"type":"messages.AllStickers"},{"id":"-1369215196","predicate":"disabledFeature","params":[{"name":"feature","type":"string"},{"name":"description","type":"string"}],"type":"DisabledFeature"},{"id":"-1721631396","predicate":"updateReadHistoryInbox","params":[{"name":"peer","type":"Peer"},{"name":"max_id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"791617983","predicate":"updateReadHistoryOutbox","params":[{"name":"peer","type":"Peer"},{"name":"max_id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-2066640507","predicate":"messages.affectedMessages","params":[{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"messages.AffectedMessages"},{"id":"1599050311","predicate":"contactLinkUnknown","params":[],"type":"ContactLink"},{"id":"-17968211","predicate":"contactLinkNone","params":[],"type":"ContactLink"},{"id":"646922073","predicate":"contactLinkHasPhone","params":[],"type":"ContactLink"},{"id":"-721239344","predicate":"contactLinkContact","params":[],"type":"ContactLink"},{"id":"2139689491","predicate":"updateWebPage","params":[{"name":"webpage","type":"WebPage"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-350980120","predicate":"webPageEmpty","params":[{"name":"id","type":"long"}],"type":"WebPage"},{"id":"-981018084","predicate":"webPagePending","params":[{"name":"id","type":"long"},{"name":"date","type":"int"}],"type":"WebPage"},{"id":"-897446185","predicate":"webPage","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"url","type":"string"},{"name":"display_url","type":"string"},{"name":"type","type":"flags.0?string"},{"name":"site_name","type":"flags.1?string"},{"name":"title","type":"flags.2?string"},{"name":"description","type":"flags.3?string"},{"name":"photo","type":"flags.4?Photo"},{"name":"embed_url","type":"flags.5?string"},{"name":"embed_type","type":"flags.5?string"},{"name":"embed_width","type":"flags.6?int"},{"name":"embed_height","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"author","type":"flags.8?string"},{"name":"document","type":"flags.9?Document"}],"type":"WebPage"},{"id":"-1557277184","predicate":"messageMediaWebPage","params":[{"name":"webpage","type":"WebPage"}],"type":"MessageMedia"},{"id":"2079516406","predicate":"authorization","params":[{"name":"hash","type":"long"},{"name":"flags","type":"int"},{"name":"device_model","type":"string"},{"name":"platform","type":"string"},{"name":"system_version","type":"string"},{"name":"api_id","type":"int"},{"name":"app_name","type":"string"},{"name":"app_version","type":"string"},{"name":"date_created","type":"int"},{"name":"date_active","type":"int"},{"name":"ip","type":"string"},{"name":"country","type":"string"},{"name":"region","type":"string"}],"type":"Authorization"},{"id":"307276766","predicate":"account.authorizations","params":[{"name":"authorizations","type":"Vector<Authorization>"}],"type":"account.Authorizations"},{"id":"-1764049896","predicate":"account.noPassword","params":[{"name":"new_salt","type":"bytes"},{"name":"email_unconfirmed_pattern","type":"string"}],"type":"account.Password"},{"id":"2081952796","predicate":"account.password","params":[{"name":"current_salt","type":"bytes"},{"name":"new_salt","type":"bytes"},{"name":"hint","type":"string"},{"name":"has_recovery","type":"Bool"},{"name":"email_unconfirmed_pattern","type":"string"}],"type":"account.Password"},{"id":"-1212732749","predicate":"account.passwordSettings","params":[{"name":"email","type":"string"}],"type":"account.PasswordSettings"},{"id":"-2037289493","predicate":"account.passwordInputSettings","params":[{"name":"flags","type":"#"},{"name":"new_salt","type":"flags.0?bytes"},{"name":"new_password_hash","type":"flags.0?bytes"},{"name":"hint","type":"flags.0?string"},{"name":"email","type":"flags.1?string"}],"type":"account.PasswordInputSettings"},{"id":"326715557","predicate":"auth.passwordRecovery","params":[{"name":"email_pattern","type":"string"}],"type":"auth.PasswordRecovery"},{"id":"673687578","predicate":"inputMediaVenue","params":[{"name":"geo_point","type":"InputGeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"}],"type":"InputMedia"},{"id":"2031269663","predicate":"messageMediaVenue","params":[{"name":"geo","type":"GeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"}],"type":"MessageMedia"},{"id":"-1551583367","predicate":"receivedNotifyMessage","params":[{"name":"id","type":"int"},{"name":"flags","type":"int"}],"type":"ReceivedNotifyMessage"},{"id":"1776236393","predicate":"chatInviteEmpty","params":[],"type":"ExportedChatInvite"},{"id":"-64092740","predicate":"chatInviteExported","params":[{"name":"link","type":"string"}],"type":"ExportedChatInvite"},{"id":"1516793212","predicate":"chatInviteAlready","params":[{"name":"chat","type":"Chat"}],"type":"ChatInvite"},{"id":"-613092008","predicate":"chatInvite","params":[{"name":"flags","type":"#"},{"name":"channel","type":"flags.0?true"},{"name":"broadcast","type":"flags.1?true"},{"name":"public","type":"flags.2?true"},{"name":"megagroup","type":"flags.3?true"},{"name":"title","type":"string"},{"name":"photo","type":"ChatPhoto"},{"name":"participants_count","type":"int"},{"name":"participants","type":"flags.4?Vector<User>"}],"type":"ChatInvite"},{"id":"-123931160","predicate":"messageActionChatJoinedByLink","params":[{"name":"inviter_id","type":"int"}],"type":"MessageAction"},{"id":"1757493555","predicate":"updateReadMessagesContents","params":[{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-4838507","predicate":"inputStickerSetEmpty","params":[],"type":"InputStickerSet"},{"id":"-1645763991","predicate":"inputStickerSetID","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputStickerSet"},{"id":"-2044933984","predicate":"inputStickerSetShortName","params":[{"name":"short_name","type":"string"}],"type":"InputStickerSet"},{"id":"-852477119","predicate":"stickerSet","params":[{"name":"flags","type":"#"},{"name":"installed","type":"flags.0?true"},{"name":"archived","type":"flags.1?true"},{"name":"official","type":"flags.2?true"},{"name":"masks","type":"flags.3?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"},{"name":"short_name","type":"string"},{"name":"count","type":"int"},{"name":"hash","type":"int"}],"type":"StickerSet"},{"id":"-1240849242","predicate":"messages.stickerSet","params":[{"name":"set","type":"StickerSet"},{"name":"packs","type":"Vector<StickerPack>"},{"name":"documents","type":"Vector<Document>"}],"type":"messages.StickerSet"},{"id":"-787638374","predicate":"user","params":[{"name":"flags","type":"#"},{"name":"self","type":"flags.10?true"},{"name":"contact","type":"flags.11?true"},{"name":"mutual_contact","type":"flags.12?true"},{"name":"deleted","type":"flags.13?true"},{"name":"bot","type":"flags.14?true"},{"name":"bot_chat_history","type":"flags.15?true"},{"name":"bot_nochats","type":"flags.16?true"},{"name":"verified","type":"flags.17?true"},{"name":"restricted","type":"flags.18?true"},{"name":"min","type":"flags.20?true"},{"name":"bot_inline_geo","type":"flags.21?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"flags.0?long"},{"name":"first_name","type":"flags.1?string"},{"name":"last_name","type":"flags.2?string"},{"name":"username","type":"flags.3?string"},{"name":"phone","type":"flags.4?string"},{"name":"photo","type":"flags.5?UserProfilePhoto"},{"name":"status","type":"flags.6?UserStatus"},{"name":"bot_info_version","type":"flags.14?int"},{"name":"restriction_reason","type":"flags.18?string"},{"name":"bot_inline_placeholder","type":"flags.19?string"}],"type":"User"},{"id":"-1032140601","predicate":"botCommand","params":[{"name":"command","type":"string"},{"name":"description","type":"string"}],"type":"BotCommand"},{"id":"-1729618630","predicate":"botInfo","params":[{"name":"user_id","type":"int"},{"name":"description","type":"string"},{"name":"commands","type":"Vector<BotCommand>"}],"type":"BotInfo"},{"id":"-1560655744","predicate":"keyboardButton","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"2002815875","predicate":"keyboardButtonRow","params":[{"name":"buttons","type":"Vector<KeyboardButton>"}],"type":"KeyboardButtonRow"},{"id":"-1606526075","predicate":"replyKeyboardHide","params":[{"name":"flags","type":"#"},{"name":"selective","type":"flags.2?true"}],"type":"ReplyMarkup"},{"id":"-200242528","predicate":"replyKeyboardForceReply","params":[{"name":"flags","type":"#"},{"name":"single_use","type":"flags.1?true"},{"name":"selective","type":"flags.2?true"}],"type":"ReplyMarkup"},{"id":"889353612","predicate":"replyKeyboardMarkup","params":[{"name":"flags","type":"#"},{"name":"resize","type":"flags.0?true"},{"name":"single_use","type":"flags.1?true"},{"name":"selective","type":"flags.2?true"},{"name":"rows","type":"Vector<KeyboardButtonRow>"}],"type":"ReplyMarkup"},{"id":"2072935910","predicate":"inputPeerUser","params":[{"name":"user_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputPeer"},{"id":"-668391402","predicate":"inputUser","params":[{"name":"user_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputUser"},{"id":"-1350696044","predicate":"help.appChangelogEmpty","params":[],"type":"help.AppChangelog"},{"id":"1181279933","predicate":"help.appChangelog","params":[{"name":"text","type":"string"}],"type":"help.AppChangelog"},{"id":"-1148011883","predicate":"messageEntityUnknown","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-100378723","predicate":"messageEntityMention","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1868782349","predicate":"messageEntityHashtag","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1827637959","predicate":"messageEntityBotCommand","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1859134776","predicate":"messageEntityUrl","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1692693954","predicate":"messageEntityEmail","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-1117713463","predicate":"messageEntityBold","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-2106619040","predicate":"messageEntityItalic","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"681706865","predicate":"messageEntityCode","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1938967520","predicate":"messageEntityPre","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"language","type":"string"}],"type":"MessageEntity"},{"id":"1990644519","predicate":"messageEntityTextUrl","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"url","type":"string"}],"type":"MessageEntity"},{"id":"301019932","predicate":"updateShortSentMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"media","type":"flags.9?MessageMedia"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"-292807034","predicate":"inputChannelEmpty","params":[],"type":"InputChannel"},{"id":"-1343524562","predicate":"inputChannel","params":[{"name":"channel_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputChannel"},{"id":"-1109531342","predicate":"peerChannel","params":[{"name":"channel_id","type":"int"}],"type":"Peer"},{"id":"548253432","predicate":"inputPeerChannel","params":[{"name":"channel_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputPeer"},{"id":"-1588737454","predicate":"channel","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"kicked","type":"flags.1?true"},{"name":"left","type":"flags.2?true"},{"name":"editor","type":"flags.3?true"},{"name":"moderator","type":"flags.4?true"},{"name":"broadcast","type":"flags.5?true"},{"name":"verified","type":"flags.7?true"},{"name":"megagroup","type":"flags.8?true"},{"name":"restricted","type":"flags.9?true"},{"name":"democracy","type":"flags.10?true"},{"name":"signatures","type":"flags.11?true"},{"name":"min","type":"flags.12?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"flags.13?long"},{"name":"title","type":"string"},{"name":"username","type":"flags.6?string"},{"name":"photo","type":"ChatPhoto"},{"name":"date","type":"int"},{"name":"version","type":"int"},{"name":"restriction_reason","type":"flags.9?string"}],"type":"Chat"},{"id":"-2059962289","predicate":"channelForbidden","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.5?true"},{"name":"megagroup","type":"flags.8?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"}],"type":"Chat"},{"id":"2131196633","predicate":"contacts.resolvedPeer","params":[{"name":"peer","type":"Peer"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.ResolvedPeer"},{"id":"-1009430225","predicate":"channelFull","params":[{"name":"flags","type":"#"},{"name":"can_view_participants","type":"flags.3?true"},{"name":"can_set_username","type":"flags.6?true"},{"name":"id","type":"int"},{"name":"about","type":"string"},{"name":"participants_count","type":"flags.0?int"},{"name":"admins_count","type":"flags.1?int"},{"name":"kicked_count","type":"flags.2?int"},{"name":"read_inbox_max_id","type":"int"},{"name":"read_outbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"chat_photo","type":"Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"exported_invite","type":"ExportedChatInvite"},{"name":"bot_info","type":"Vector<BotInfo>"},{"name":"migrated_from_chat_id","type":"flags.4?int"},{"name":"migrated_from_max_id","type":"flags.4?int"},{"name":"pinned_msg_id","type":"flags.5?int"}],"type":"ChatFull"},{"id":"182649427","predicate":"messageRange","params":[{"name":"min_id","type":"int"},{"name":"max_id","type":"int"}],"type":"MessageRange"},{"id":"-1725551049","predicate":"messages.channelMessages","params":[{"name":"flags","type":"#"},{"name":"pts","type":"int"},{"name":"count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"-1781355374","predicate":"messageActionChannelCreate","params":[{"name":"title","type":"string"}],"type":"MessageAction"},{"id":"-352032773","predicate":"updateChannelTooLong","params":[{"name":"flags","type":"#"},{"name":"channel_id","type":"int"},{"name":"pts","type":"flags.0?int"}],"type":"Update"},{"id":"-1227598250","predicate":"updateChannel","params":[{"name":"channel_id","type":"int"}],"type":"Update"},{"id":"1656358105","predicate":"updateNewChannelMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1108669311","predicate":"updateReadChannelInbox","params":[{"name":"channel_id","type":"int"},{"name":"max_id","type":"int"}],"type":"Update"},{"id":"-1015733815","predicate":"updateDeleteChannelMessages","params":[{"name":"channel_id","type":"int"},{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1734268085","predicate":"updateChannelMessageViews","params":[{"name":"channel_id","type":"int"},{"name":"id","type":"int"},{"name":"views","type":"int"}],"type":"Update"},{"id":"1041346555","predicate":"updates.channelDifferenceEmpty","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"}],"type":"updates.ChannelDifference"},{"id":"1091431943","predicate":"updates.channelDifferenceTooLong","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"},{"name":"top_message","type":"int"},{"name":"read_inbox_max_id","type":"int"},{"name":"read_outbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"updates.ChannelDifference"},{"id":"543450958","predicate":"updates.channelDifference","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"},{"name":"new_messages","type":"Vector<Message>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"updates.ChannelDifference"},{"id":"-1798033689","predicate":"channelMessagesFilterEmpty","params":[],"type":"ChannelMessagesFilter"},{"id":"-847783593","predicate":"channelMessagesFilter","params":[{"name":"flags","type":"#"},{"name":"exclude_new_messages","type":"flags.1?true"},{"name":"ranges","type":"Vector<MessageRange>"}],"type":"ChannelMessagesFilter"},{"id":"367766557","predicate":"channelParticipant","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1557620115","predicate":"channelParticipantSelf","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1861910545","predicate":"channelParticipantModerator","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1743180447","predicate":"channelParticipantEditor","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1933187430","predicate":"channelParticipantKicked","params":[{"name":"user_id","type":"int"},{"name":"kicked_by","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-471670279","predicate":"channelParticipantCreator","params":[{"name":"user_id","type":"int"}],"type":"ChannelParticipant"},{"id":"-566281095","predicate":"channelParticipantsRecent","params":[],"type":"ChannelParticipantsFilter"},{"id":"-1268741783","predicate":"channelParticipantsAdmins","params":[],"type":"ChannelParticipantsFilter"},{"id":"1010285434","predicate":"channelParticipantsKicked","params":[],"type":"ChannelParticipantsFilter"},{"id":"-1299865402","predicate":"channelRoleEmpty","params":[],"type":"ChannelParticipantRole"},{"id":"-1776756363","predicate":"channelRoleModerator","params":[],"type":"ChannelParticipantRole"},{"id":"-2113143156","predicate":"channelRoleEditor","params":[],"type":"ChannelParticipantRole"},{"id":"-177282392","predicate":"channels.channelParticipants","params":[{"name":"count","type":"int"},{"name":"participants","type":"Vector<ChannelParticipant>"},{"name":"users","type":"Vector<User>"}],"type":"channels.ChannelParticipants"},{"id":"-791039645","predicate":"channels.channelParticipant","params":[{"name":"participant","type":"ChannelParticipant"},{"name":"users","type":"Vector<User>"}],"type":"channels.ChannelParticipant"},{"id":"-636267638","predicate":"chatParticipantCreator","params":[{"name":"user_id","type":"int"}],"type":"ChatParticipant"},{"id":"-489233354","predicate":"chatParticipantAdmin","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChatParticipant"},{"id":"1855224129","predicate":"updateChatAdmins","params":[{"name":"chat_id","type":"int"},{"name":"enabled","type":"Bool"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-1232070311","predicate":"updateChatParticipantAdmin","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"is_admin","type":"Bool"},{"name":"version","type":"int"}],"type":"Update"},{"id":"1371385889","predicate":"messageActionChatMigrateTo","params":[{"name":"channel_id","type":"int"}],"type":"MessageAction"},{"id":"-1336546578","predicate":"messageActionChannelMigrateFrom","params":[{"name":"title","type":"string"},{"name":"chat_id","type":"int"}],"type":"MessageAction"},{"id":"-1328445861","predicate":"channelParticipantsBots","params":[],"type":"ChannelParticipantsFilter"},{"id":"-236044656","predicate":"help.termsOfService","params":[{"name":"text","type":"string"}],"type":"help.TermsOfService"},{"id":"1753886890","predicate":"updateNewStickerSet","params":[{"name":"stickerset","type":"messages.StickerSet"}],"type":"Update"},{"id":"196268545","predicate":"updateStickerSetsOrder","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"order","type":"Vector<long>"}],"type":"Update"},{"id":"1135492588","predicate":"updateStickerSets","params":[],"type":"Update"},{"id":"372165663","predicate":"foundGif","params":[{"name":"url","type":"string"},{"name":"thumb_url","type":"string"},{"name":"content_url","type":"string"},{"name":"content_type","type":"string"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"FoundGif"},{"id":"-1670052855","predicate":"foundGifCached","params":[{"name":"url","type":"string"},{"name":"photo","type":"Photo"},{"name":"document","type":"Document"}],"type":"FoundGif"},{"id":"1212395773","predicate":"inputMediaGifExternal","params":[{"name":"url","type":"string"},{"name":"q","type":"string"}],"type":"InputMedia"},{"id":"1158290442","predicate":"messages.foundGifs","params":[{"name":"next_offset","type":"int"},{"name":"results","type":"Vector<FoundGif>"}],"type":"messages.FoundGifs"},{"id":"-402498398","predicate":"messages.savedGifsNotModified","params":[],"type":"messages.SavedGifs"},{"id":"772213157","predicate":"messages.savedGifs","params":[{"name":"hash","type":"int"},{"name":"gifs","type":"Vector<Document>"}],"type":"messages.SavedGifs"},{"id":"-1821035490","predicate":"updateSavedGifs","params":[],"type":"Update"},{"id":"691006739","predicate":"inputBotInlineMessageMediaAuto","params":[{"name":"flags","type":"#"},{"name":"caption","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"1036876423","predicate":"inputBotInlineMessageText","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"750510426","predicate":"inputBotInlineResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"url","type":"flags.3?string"},{"name":"thumb_url","type":"flags.4?string"},{"name":"content_url","type":"flags.5?string"},{"name":"content_type","type":"flags.5?string"},{"name":"w","type":"flags.6?int"},{"name":"h","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"175419739","predicate":"botInlineMessageMediaAuto","params":[{"name":"flags","type":"#"},{"name":"caption","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1937807902","predicate":"botInlineMessageText","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1679053127","predicate":"botInlineResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"url","type":"flags.3?string"},{"name":"thumb_url","type":"flags.4?string"},{"name":"content_url","type":"flags.5?string"},{"name":"content_type","type":"flags.5?string"},{"name":"w","type":"flags.6?int"},{"name":"h","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"627509670","predicate":"messages.botResults","params":[{"name":"flags","type":"#"},{"name":"gallery","type":"flags.0?true"},{"name":"query_id","type":"long"},{"name":"next_offset","type":"flags.1?string"},{"name":"switch_pm","type":"flags.2?InlineBotSwitchPM"},{"name":"results","type":"Vector<BotInlineResult>"}],"type":"messages.BotResults"},{"id":"1417832080","predicate":"updateBotInlineQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"query","type":"string"},{"name":"geo","type":"flags.0?GeoPoint"},{"name":"offset","type":"string"}],"type":"Update"},{"id":"239663460","predicate":"updateBotInlineSend","params":[{"name":"flags","type":"#"},{"name":"user_id","type":"int"},{"name":"query","type":"string"},{"name":"geo","type":"flags.0?GeoPoint"},{"name":"id","type":"string"},{"name":"msg_id","type":"flags.1?InputBotInlineMessageID"}],"type":"Update"},{"id":"1358283666","predicate":"inputMessagesFilterVoice","params":[],"type":"MessagesFilter"},{"id":"928101534","predicate":"inputMessagesFilterMusic","params":[],"type":"MessagesFilter"},{"id":"-1107622874","predicate":"inputPrivacyKeyChatInvite","params":[],"type":"InputPrivacyKey"},{"id":"1343122938","predicate":"privacyKeyChatInvite","params":[],"type":"PrivacyKey"},{"id":"524838915","predicate":"exportedMessageLink","params":[{"name":"link","type":"string"}],"type":"ExportedMessageLink"},{"id":"-947462709","predicate":"messageFwdHeader","params":[{"name":"flags","type":"#"},{"name":"from_id","type":"flags.0?int"},{"name":"date","type":"int"},{"name":"channel_id","type":"flags.1?int"},{"name":"channel_post","type":"flags.2?int"}],"type":"MessageFwdHeader"},{"id":"457133559","predicate":"updateEditChannelMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1738988427","predicate":"updateChannelPinnedMessage","params":[{"name":"channel_id","type":"int"},{"name":"id","type":"int"}],"type":"Update"},{"id":"-1799538451","predicate":"messageActionPinMessage","params":[],"type":"MessageAction"},{"id":"1923290508","predicate":"auth.codeTypeSms","params":[],"type":"auth.CodeType"},{"id":"1948046307","predicate":"auth.codeTypeCall","params":[],"type":"auth.CodeType"},{"id":"577556219","predicate":"auth.codeTypeFlashCall","params":[],"type":"auth.CodeType"},{"id":"1035688326","predicate":"auth.sentCodeTypeApp","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"-1073693790","predicate":"auth.sentCodeTypeSms","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"1398007207","predicate":"auth.sentCodeTypeCall","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"-1425815847","predicate":"auth.sentCodeTypeFlashCall","params":[{"name":"pattern","type":"string"}],"type":"auth.SentCodeType"},{"id":"629866245","predicate":"keyboardButtonUrl","params":[{"name":"text","type":"string"},{"name":"url","type":"string"}],"type":"KeyboardButton"},{"id":"1748655686","predicate":"keyboardButtonCallback","params":[{"name":"text","type":"string"},{"name":"data","type":"bytes"}],"type":"KeyboardButton"},{"id":"-1318425559","predicate":"keyboardButtonRequestPhone","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"-59151553","predicate":"keyboardButtonRequestGeoLocation","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"90744648","predicate":"keyboardButtonSwitchInline","params":[{"name":"flags","type":"#"},{"name":"same_peer","type":"flags.0?true"},{"name":"text","type":"string"},{"name":"query","type":"string"}],"type":"KeyboardButton"},{"id":"1218642516","predicate":"replyInlineMarkup","params":[{"name":"rows","type":"Vector<KeyboardButtonRow>"}],"type":"ReplyMarkup"},{"id":"-1324486149","predicate":"messages.botCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"alert","type":"flags.1?true"},{"name":"has_url","type":"flags.3?true"},{"name":"message","type":"flags.0?string"},{"name":"url","type":"flags.2?string"}],"type":"messages.BotCallbackAnswer"},{"id":"-415938591","predicate":"updateBotCallbackQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"peer","type":"Peer"},{"name":"msg_id","type":"int"},{"name":"chat_instance","type":"long"},{"name":"data","type":"flags.0?bytes"},{"name":"game_short_name","type":"flags.1?string"}],"type":"Update"},{"id":"649453030","predicate":"messages.messageEditData","params":[{"name":"flags","type":"#"},{"name":"caption","type":"flags.0?true"}],"type":"messages.MessageEditData"},{"id":"-469536605","predicate":"updateEditMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-190472735","predicate":"inputBotInlineMessageMediaGeo","params":[{"name":"flags","type":"#"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-1431327288","predicate":"inputBotInlineMessageMediaVenue","params":[{"name":"flags","type":"#"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"766443943","predicate":"inputBotInlineMessageMediaContact","params":[{"name":"flags","type":"#"},{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"982505656","predicate":"botInlineMessageMediaGeo","params":[{"name":"flags","type":"#"},{"name":"geo","type":"GeoPoint"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"1130767150","predicate":"botInlineMessageMediaVenue","params":[{"name":"flags","type":"#"},{"name":"geo","type":"GeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"904770772","predicate":"botInlineMessageMediaContact","params":[{"name":"flags","type":"#"},{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1462213465","predicate":"inputBotInlineResultPhoto","params":[{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"photo","type":"InputPhoto"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"-459324","predicate":"inputBotInlineResultDocument","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"document","type":"InputDocument"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"400266251","predicate":"botInlineMediaResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"photo","type":"flags.0?Photo"},{"name":"document","type":"flags.1?Document"},{"name":"title","type":"flags.2?string"},{"name":"description","type":"flags.3?string"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"-1995686519","predicate":"inputBotInlineMessageID","params":[{"name":"dc_id","type":"int"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputBotInlineMessageID"},{"id":"-103646630","predicate":"updateInlineBotCallbackQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"msg_id","type":"InputBotInlineMessageID"},{"name":"chat_instance","type":"long"},{"name":"data","type":"flags.0?bytes"},{"name":"game_short_name","type":"flags.1?string"}],"type":"Update"},{"id":"1008755359","predicate":"inlineBotSwitchPM","params":[{"name":"text","type":"string"},{"name":"start_param","type":"string"}],"type":"InlineBotSwitchPM"},{"id":"863093588","predicate":"messages.peerDialogs","params":[{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"state","type":"updates.State"}],"type":"messages.PeerDialogs"},{"id":"-305282981","predicate":"topPeer","params":[{"name":"peer","type":"Peer"},{"name":"rating","type":"double"}],"type":"TopPeer"},{"id":"-1419371685","predicate":"topPeerCategoryBotsPM","params":[],"type":"TopPeerCategory"},{"id":"344356834","predicate":"topPeerCategoryBotsInline","params":[],"type":"TopPeerCategory"},{"id":"104314861","predicate":"topPeerCategoryCorrespondents","params":[],"type":"TopPeerCategory"},{"id":"-1122524854","predicate":"topPeerCategoryGroups","params":[],"type":"TopPeerCategory"},{"id":"371037736","predicate":"topPeerCategoryChannels","params":[],"type":"TopPeerCategory"},{"id":"-75283823","predicate":"topPeerCategoryPeers","params":[{"name":"category","type":"TopPeerCategory"},{"name":"count","type":"int"},{"name":"peers","type":"Vector<TopPeer>"}],"type":"TopPeerCategoryPeers"},{"id":"-567906571","predicate":"contacts.topPeersNotModified","params":[],"type":"contacts.TopPeers"},{"id":"1891070632","predicate":"contacts.topPeers","params":[{"name":"categories","type":"Vector<TopPeerCategoryPeers>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.TopPeers"},{"id":"892193368","predicate":"messageEntityMentionName","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"user_id","type":"int"}],"type":"MessageEntity"},{"id":"546203849","predicate":"inputMessageEntityMentionName","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"MessageEntity"},{"id":"975236280","predicate":"inputMessagesFilterChatPhotos","params":[],"type":"MessagesFilter"},{"id":"634833351","predicate":"updateReadChannelOutbox","params":[{"name":"channel_id","type":"int"},{"name":"max_id","type":"int"}],"type":"Update"},{"id":"-299124375","predicate":"updateDraftMessage","params":[{"name":"peer","type":"Peer"},{"name":"draft","type":"DraftMessage"}],"type":"Update"},{"id":"-1169445179","predicate":"draftMessageEmpty","params":[],"type":"DraftMessage"},{"id":"-40996577","predicate":"draftMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"message","type":"string"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"},{"name":"date","type":"int"}],"type":"DraftMessage"},{"id":"-1615153660","predicate":"messageActionHistoryClear","params":[],"type":"MessageAction"},{"id":"82699215","predicate":"messages.featuredStickersNotModified","params":[],"type":"messages.FeaturedStickers"},{"id":"-123893531","predicate":"messages.featuredStickers","params":[{"name":"hash","type":"int"},{"name":"sets","type":"Vector<StickerSetCovered>"},{"name":"unread","type":"Vector<long>"}],"type":"messages.FeaturedStickers"},{"id":"1461528386","predicate":"updateReadFeaturedStickers","params":[],"type":"Update"},{"id":"186120336","predicate":"messages.recentStickersNotModified","params":[],"type":"messages.RecentStickers"},{"id":"1558317424","predicate":"messages.recentStickers","params":[{"name":"hash","type":"int"},{"name":"stickers","type":"Vector<Document>"}],"type":"messages.RecentStickers"},{"id":"-1706939360","predicate":"updateRecentStickers","params":[],"type":"Update"},{"id":"1338747336","predicate":"messages.archivedStickers","params":[{"name":"count","type":"int"},{"name":"sets","type":"Vector<StickerSetCovered>"}],"type":"messages.ArchivedStickers"},{"id":"946083368","predicate":"messages.stickerSetInstallResultSuccess","params":[],"type":"messages.StickerSetInstallResult"},{"id":"904138920","predicate":"messages.stickerSetInstallResultArchive","params":[{"name":"sets","type":"Vector<StickerSetCovered>"}],"type":"messages.StickerSetInstallResult"},{"id":"1678812626","predicate":"stickerSetCovered","params":[{"name":"set","type":"StickerSet"},{"name":"cover","type":"Document"}],"type":"StickerSetCovered"},{"id":"-1574314746","predicate":"updateConfig","params":[],"type":"Update"},{"id":"861169551","predicate":"updatePtsChanged","params":[],"type":"Update"},{"id":"-1252045032","predicate":"inputMediaPhotoExternal","params":[{"name":"url","type":"string"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"-437690244","predicate":"inputMediaDocumentExternal","params":[{"name":"url","type":"string"},{"name":"caption","type":"string"}],"type":"InputMedia"},{"id":"872932635","predicate":"stickerSetMultiCovered","params":[{"name":"set","type":"StickerSet"},{"name":"covers","type":"Vector<Document>"}],"type":"StickerSetCovered"},{"id":"-1361650766","predicate":"maskCoords","params":[{"name":"n","type":"int"},{"name":"x","type":"double"},{"name":"y","type":"double"},{"name":"zoom","type":"double"}],"type":"MaskCoords"},{"id":"-1744710921","predicate":"documentAttributeHasStickers","params":[],"type":"DocumentAttribute"},{"id":"1251549527","predicate":"inputStickeredMediaPhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"InputStickeredMedia"},{"id":"70813275","predicate":"inputStickeredMediaDocument","params":[{"name":"id","type":"InputDocument"}],"type":"InputStickeredMedia"},{"id":"-1107729093","predicate":"game","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"short_name","type":"string"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"photo","type":"Photo"},{"name":"document","type":"flags.0?Document"}],"type":"Game"},{"id":"1336154098","predicate":"inputBotInlineResultGame","params":[{"name":"id","type":"string"},{"name":"short_name","type":"string"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"1262639204","predicate":"inputBotInlineMessageGame","params":[{"name":"flags","type":"#"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-580219064","predicate":"sendMessageGamePlayAction","params":[],"type":"SendMessageAction"},{"id":"-38694904","predicate":"messageMediaGame","params":[{"name":"game","type":"Game"}],"type":"MessageMedia"},{"id":"-750828557","predicate":"inputMediaGame","params":[{"name":"id","type":"InputGame"}],"type":"InputMedia"},{"id":"53231223","predicate":"inputGameID","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputGame"},{"id":"-1020139510","predicate":"inputGameShortName","params":[{"name":"bot_id","type":"InputUser"},{"name":"short_name","type":"string"}],"type":"InputGame"},{"id":"1358175439","predicate":"keyboardButtonGame","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"-1834538890","predicate":"messageActionGameScore","params":[{"name":"game_id","type":"long"},{"name":"score","type":"int"}],"type":"MessageAction"},{"id":"1493171408","predicate":"highScore","params":[{"name":"pos","type":"int"},{"name":"user_id","type":"int"},{"name":"score","type":"int"}],"type":"HighScore"},{"id":"-1707344487","predicate":"messages.highScores","params":[{"name":"scores","type":"Vector<HighScore>"},{"name":"users","type":"Vector<User>"}],"type":"messages.HighScores"}],"methods":[{"id":"-878758099","method":"invokeAfterMsg","params":[{"name":"msg_id","type":"long"},{"name":"query","type":"!X"}],"type":"X"},{"id":"1036301552","method":"invokeAfterMsgs","params":[{"name":"msg_ids","type":"Vector<long>"},{"name":"query","type":"!X"}],"type":"X"},{"id":"1877286395","method":"auth.checkPhone","params":[{"name":"phone_number","type":"string"}],"type":"auth.CheckedPhone"},{"id":"-2035355412","method":"auth.sendCode","params":[{"name":"flags","type":"#"},{"name":"allow_flashcall","type":"flags.0?true"},{"name":"phone_number","type":"string"},{"name":"current_number","type":"flags.0?Bool"},{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"}],"type":"auth.SentCode"},{"id":"453408308","method":"auth.signUp","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"auth.Authorization"},{"id":"-1126886015","method":"auth.signIn","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"auth.Authorization"},{"id":"1461180992","method":"auth.logOut","params":[],"type":"Bool"},{"id":"-1616179942","method":"auth.resetAuthorizations","params":[],"type":"Bool"},{"id":"1998331287","method":"auth.sendInvites","params":[{"name":"phone_numbers","type":"Vector<string>"},{"name":"message","type":"string"}],"type":"Bool"},{"id":"-440401971","method":"auth.exportAuthorization","params":[{"name":"dc_id","type":"int"}],"type":"auth.ExportedAuthorization"},{"id":"-470837741","method":"auth.importAuthorization","params":[{"name":"id","type":"int"},{"name":"bytes","type":"bytes"}],"type":"auth.Authorization"},{"id":"-841733627","method":"auth.bindTempAuthKey","params":[{"name":"perm_auth_key_id","type":"long"},{"name":"nonce","type":"long"},{"name":"expires_at","type":"int"},{"name":"encrypted_message","type":"bytes"}],"type":"Bool"},{"id":"1669245048","method":"account.registerDevice","params":[{"name":"token_type","type":"int"},{"name":"token","type":"string"}],"type":"Bool"},{"id":"1707432768","method":"account.unregisterDevice","params":[{"name":"token_type","type":"int"},{"name":"token","type":"string"}],"type":"Bool"},{"id":"-2067899501","method":"account.updateNotifySettings","params":[{"name":"peer","type":"InputNotifyPeer"},{"name":"settings","type":"InputPeerNotifySettings"}],"type":"Bool"},{"id":"313765169","method":"account.getNotifySettings","params":[{"name":"peer","type":"InputNotifyPeer"}],"type":"PeerNotifySettings"},{"id":"-612493497","method":"account.resetNotifySettings","params":[],"type":"Bool"},{"id":"2018596725","method":"account.updateProfile","params":[{"name":"flags","type":"#"},{"name":"first_name","type":"flags.0?string"},{"name":"last_name","type":"flags.1?string"},{"name":"about","type":"flags.2?string"}],"type":"User"},{"id":"1713919532","method":"account.updateStatus","params":[{"name":"offline","type":"Bool"}],"type":"Bool"},{"id":"-1068696894","method":"account.getWallPapers","params":[],"type":"Vector<WallPaper>"},{"id":"-1374118561","method":"account.reportPeer","params":[{"name":"peer","type":"InputPeer"},{"name":"reason","type":"ReportReason"}],"type":"Bool"},{"id":"227648840","method":"users.getUsers","params":[{"name":"id","type":"Vector<InputUser>"}],"type":"Vector<User>"},{"id":"-902781519","method":"users.getFullUser","params":[{"name":"id","type":"InputUser"}],"type":"UserFull"},{"id":"-995929106","method":"contacts.getStatuses","params":[],"type":"Vector<ContactStatus>"},{"id":"583445000","method":"contacts.getContacts","params":[{"name":"hash","type":"string"}],"type":"contacts.Contacts"},{"id":"-634342611","method":"contacts.importContacts","params":[{"name":"contacts","type":"Vector<InputContact>"},{"name":"replace","type":"Bool"}],"type":"contacts.ImportedContacts"},{"id":"-1902823612","method":"contacts.deleteContact","params":[{"name":"id","type":"InputUser"}],"type":"contacts.Link"},{"id":"1504393374","method":"contacts.deleteContacts","params":[{"name":"id","type":"Vector<InputUser>"}],"type":"Bool"},{"id":"858475004","method":"contacts.block","params":[{"name":"id","type":"InputUser"}],"type":"Bool"},{"id":"-448724803","method":"contacts.unblock","params":[{"name":"id","type":"InputUser"}],"type":"Bool"},{"id":"-176409329","method":"contacts.getBlocked","params":[{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"contacts.Blocked"},{"id":"-2065352905","method":"contacts.exportCard","params":[],"type":"Vector<int>"},{"id":"1340184318","method":"contacts.importCard","params":[{"name":"export_card","type":"Vector<int>"}],"type":"User"},{"id":"1109588596","method":"messages.getMessages","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.Messages"},{"id":"1799878989","method":"messages.getDialogs","params":[{"name":"offset_date","type":"int"},{"name":"offset_id","type":"int"},{"name":"offset_peer","type":"InputPeer"},{"name":"limit","type":"int"}],"type":"messages.Dialogs"},{"id":"-1347868602","method":"messages.getHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"offset_date","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"}],"type":"messages.Messages"},{"id":"-732523960","method":"messages.search","params":[{"name":"flags","type":"#"},{"name":"peer","type":"InputPeer"},{"name":"q","type":"string"},{"name":"filter","type":"MessagesFilter"},{"name":"min_date","type":"int"},{"name":"max_date","type":"int"},{"name":"offset","type":"int"},{"name":"max_id","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Messages"},{"id":"238054714","method":"messages.readHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"max_id","type":"int"}],"type":"messages.AffectedMessages"},{"id":"469850889","method":"messages.deleteHistory","params":[{"name":"flags","type":"#"},{"name":"just_clear","type":"flags.0?true"},{"name":"peer","type":"InputPeer"},{"name":"max_id","type":"int"}],"type":"messages.AffectedHistory"},{"id":"-1510897371","method":"messages.deleteMessages","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"94983360","method":"messages.receivedMessages","params":[{"name":"max_id","type":"int"}],"type":"Vector<ReceivedNotifyMessage>"},{"id":"-1551737264","method":"messages.setTyping","params":[{"name":"peer","type":"InputPeer"},{"name":"action","type":"SendMessageAction"}],"type":"Bool"},{"id":"-91733382","method":"messages.sendMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"message","type":"string"},{"name":"random_id","type":"long"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Updates"},{"id":"-923703407","method":"messages.sendMedia","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"media","type":"InputMedia"},{"name":"random_id","type":"long"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"Updates"},{"id":"1888354709","method":"messages.forwardMessages","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"with_my_score","type":"flags.8?true"},{"name":"from_peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"random_id","type":"Vector<long>"},{"name":"to_peer","type":"InputPeer"}],"type":"Updates"},{"id":"-820669733","method":"messages.reportSpam","params":[{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"-1460572005","method":"messages.hideReportSpam","params":[{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"913498268","method":"messages.getPeerSettings","params":[{"name":"peer","type":"InputPeer"}],"type":"PeerSettings"},{"id":"1013621127","method":"messages.getChats","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.Chats"},{"id":"998448230","method":"messages.getFullChat","params":[{"name":"chat_id","type":"int"}],"type":"messages.ChatFull"},{"id":"-599447467","method":"messages.editChatTitle","params":[{"name":"chat_id","type":"int"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-900957736","method":"messages.editChatPhoto","params":[{"name":"chat_id","type":"int"},{"name":"photo","type":"InputChatPhoto"}],"type":"Updates"},{"id":"-106911223","method":"messages.addChatUser","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"fwd_limit","type":"int"}],"type":"Updates"},{"id":"-530505962","method":"messages.deleteChatUser","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"Updates"},{"id":"164303470","method":"messages.createChat","params":[{"name":"users","type":"Vector<InputUser>"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-304838614","method":"updates.getState","params":[],"type":"updates.State"},{"id":"168039573","method":"updates.getDifference","params":[{"name":"pts","type":"int"},{"name":"date","type":"int"},{"name":"qts","type":"int"}],"type":"updates.Difference"},{"id":"-256159406","method":"photos.updateProfilePhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"UserProfilePhoto"},{"id":"1328726168","method":"photos.uploadProfilePhoto","params":[{"name":"file","type":"InputFile"}],"type":"photos.Photo"},{"id":"-2016444625","method":"photos.deletePhotos","params":[{"name":"id","type":"Vector<InputPhoto>"}],"type":"Vector<long>"},{"id":"-1291540959","method":"upload.saveFilePart","params":[{"name":"file_id","type":"long"},{"name":"file_part","type":"int"},{"name":"bytes","type":"bytes"}],"type":"Bool"},{"id":"-475607115","method":"upload.getFile","params":[{"name":"location","type":"InputFileLocation"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"upload.File"},{"id":"-990308245","method":"help.getConfig","params":[],"type":"Config"},{"id":"531836966","method":"help.getNearestDc","params":[],"type":"NearestDc"},{"id":"-1372724842","method":"help.getAppUpdate","params":[],"type":"help.AppUpdate"},{"id":"1862465352","method":"help.saveAppLog","params":[{"name":"events","type":"Vector<InputAppEvent>"}],"type":"Bool"},{"id":"1295590211","method":"help.getInviteText","params":[],"type":"help.InviteText"},{"id":"-1848823128","method":"photos.getUserPhotos","params":[{"name":"user_id","type":"InputUser"},{"name":"offset","type":"int"},{"name":"max_id","type":"long"},{"name":"limit","type":"int"}],"type":"photos.Photos"},{"id":"865483769","method":"messages.forwardMessage","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"random_id","type":"long"}],"type":"Updates"},{"id":"651135312","method":"messages.getDhConfig","params":[{"name":"version","type":"int"},{"name":"random_length","type":"int"}],"type":"messages.DhConfig"},{"id":"-162681021","method":"messages.requestEncryption","params":[{"name":"user_id","type":"InputUser"},{"name":"random_id","type":"int"},{"name":"g_a","type":"bytes"}],"type":"EncryptedChat"},{"id":"1035731989","method":"messages.acceptEncryption","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"g_b","type":"bytes"},{"name":"key_fingerprint","type":"long"}],"type":"EncryptedChat"},{"id":"-304536635","method":"messages.discardEncryption","params":[{"name":"chat_id","type":"int"}],"type":"Bool"},{"id":"2031374829","method":"messages.setEncryptedTyping","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"typing","type":"Bool"}],"type":"Bool"},{"id":"2135648522","method":"messages.readEncryptedHistory","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"max_date","type":"int"}],"type":"Bool"},{"id":"-1451792525","method":"messages.sendEncrypted","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"}],"type":"messages.SentEncryptedMessage"},{"id":"-1701831834","method":"messages.sendEncryptedFile","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"},{"name":"file","type":"InputEncryptedFile"}],"type":"messages.SentEncryptedMessage"},{"id":"852769188","method":"messages.sendEncryptedService","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"}],"type":"messages.SentEncryptedMessage"},{"id":"1436924774","method":"messages.receivedQueue","params":[{"name":"max_qts","type":"int"}],"type":"Vector<long>"},{"id":"-562337987","method":"upload.saveBigFilePart","params":[{"name":"file_id","type":"long"},{"name":"file_part","type":"int"},{"name":"file_total_parts","type":"int"},{"name":"bytes","type":"bytes"}],"type":"Bool"},{"id":"1769565673","method":"initConnection","params":[{"name":"api_id","type":"int"},{"name":"device_model","type":"string"},{"name":"system_version","type":"string"},{"name":"app_version","type":"string"},{"name":"lang_code","type":"string"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-1663104819","method":"help.getSupport","params":[],"type":"help.Support"},{"id":"916930423","method":"messages.readMessageContents","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"655677548","method":"account.checkUsername","params":[{"name":"username","type":"string"}],"type":"Bool"},{"id":"1040964988","method":"account.updateUsername","params":[{"name":"username","type":"string"}],"type":"User"},{"id":"301470424","method":"contacts.search","params":[{"name":"q","type":"string"},{"name":"limit","type":"int"}],"type":"contacts.Found"},{"id":"-623130288","method":"account.getPrivacy","params":[{"name":"key","type":"InputPrivacyKey"}],"type":"account.PrivacyRules"},{"id":"-906486552","method":"account.setPrivacy","params":[{"name":"key","type":"InputPrivacyKey"},{"name":"rules","type":"Vector<InputPrivacyRule>"}],"type":"account.PrivacyRules"},{"id":"1099779595","method":"account.deleteAccount","params":[{"name":"reason","type":"string"}],"type":"Bool"},{"id":"150761757","method":"account.getAccountTTL","params":[],"type":"AccountDaysTTL"},{"id":"608323678","method":"account.setAccountTTL","params":[{"name":"ttl","type":"AccountDaysTTL"}],"type":"Bool"},{"id":"-627372787","method":"invokeWithLayer","params":[{"name":"layer","type":"int"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-113456221","method":"contacts.resolveUsername","params":[{"name":"username","type":"string"}],"type":"contacts.ResolvedPeer"},{"id":"149257707","method":"account.sendChangePhoneCode","params":[{"name":"flags","type":"#"},{"name":"allow_flashcall","type":"flags.0?true"},{"name":"phone_number","type":"string"},{"name":"current_number","type":"flags.0?Bool"}],"type":"auth.SentCode"},{"id":"1891839707","method":"account.changePhone","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"User"},{"id":"479598769","method":"messages.getAllStickers","params":[{"name":"hash","type":"int"}],"type":"messages.AllStickers"},{"id":"954152242","method":"account.updateDeviceLocked","params":[{"name":"period","type":"int"}],"type":"Bool"},{"id":"1738800940","method":"auth.importBotAuthorization","params":[{"name":"flags","type":"int"},{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"},{"name":"bot_auth_token","type":"string"}],"type":"auth.Authorization"},{"id":"623001124","method":"messages.getWebPagePreview","params":[{"name":"message","type":"string"}],"type":"MessageMedia"},{"id":"-484392616","method":"account.getAuthorizations","params":[],"type":"account.Authorizations"},{"id":"-545786948","method":"account.resetAuthorization","params":[{"name":"hash","type":"long"}],"type":"Bool"},{"id":"1418342645","method":"account.getPassword","params":[],"type":"account.Password"},{"id":"-1131605573","method":"account.getPasswordSettings","params":[{"name":"current_password_hash","type":"bytes"}],"type":"account.PasswordSettings"},{"id":"-92517498","method":"account.updatePasswordSettings","params":[{"name":"current_password_hash","type":"bytes"},{"name":"new_settings","type":"account.PasswordInputSettings"}],"type":"Bool"},{"id":"174260510","method":"auth.checkPassword","params":[{"name":"password_hash","type":"bytes"}],"type":"auth.Authorization"},{"id":"-661144474","method":"auth.requestPasswordRecovery","params":[],"type":"auth.PasswordRecovery"},{"id":"1319464594","method":"auth.recoverPassword","params":[{"name":"code","type":"string"}],"type":"auth.Authorization"},{"id":"-1080796745","method":"invokeWithoutUpdates","params":[{"name":"query","type":"!X"}],"type":"X"},{"id":"2106086025","method":"messages.exportChatInvite","params":[{"name":"chat_id","type":"int"}],"type":"ExportedChatInvite"},{"id":"1051570619","method":"messages.checkChatInvite","params":[{"name":"hash","type":"string"}],"type":"ChatInvite"},{"id":"1817183516","method":"messages.importChatInvite","params":[{"name":"hash","type":"string"}],"type":"Updates"},{"id":"639215886","method":"messages.getStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"}],"type":"messages.StickerSet"},{"id":"-946871200","method":"messages.installStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"},{"name":"archived","type":"Bool"}],"type":"messages.StickerSetInstallResult"},{"id":"-110209570","method":"messages.uninstallStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"}],"type":"Bool"},{"id":"-421563528","method":"messages.startBot","params":[{"name":"bot","type":"InputUser"},{"name":"peer","type":"InputPeer"},{"name":"random_id","type":"long"},{"name":"start_param","type":"string"}],"type":"Updates"},{"id":"-1189013126","method":"help.getAppChangelog","params":[],"type":"help.AppChangelog"},{"id":"-993483427","method":"messages.getMessagesViews","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"increment","type":"Bool"}],"type":"Vector<int>"},{"id":"-871347913","method":"channels.readHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"max_id","type":"int"}],"type":"Bool"},{"id":"-2067661490","method":"channels.deleteMessages","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"-787622117","method":"channels.deleteUserHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"}],"type":"messages.AffectedHistory"},{"id":"-32999408","method":"channels.reportSpam","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"id","type":"Vector<int>"}],"type":"Bool"},{"id":"-1814580409","method":"channels.getMessages","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"messages.Messages"},{"id":"618237842","method":"channels.getParticipants","params":[{"name":"channel","type":"InputChannel"},{"name":"filter","type":"ChannelParticipantsFilter"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"channels.ChannelParticipants"},{"id":"1416484774","method":"channels.getParticipant","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"}],"type":"channels.ChannelParticipant"},{"id":"176122811","method":"channels.getChannels","params":[{"name":"id","type":"Vector<InputChannel>"}],"type":"messages.Chats"},{"id":"141781513","method":"channels.getFullChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"messages.ChatFull"},{"id":"-192332417","method":"channels.createChannel","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.0?true"},{"name":"megagroup","type":"flags.1?true"},{"name":"title","type":"string"},{"name":"about","type":"string"}],"type":"Updates"},{"id":"333610782","method":"channels.editAbout","params":[{"name":"channel","type":"InputChannel"},{"name":"about","type":"string"}],"type":"Bool"},{"id":"-344583728","method":"channels.editAdmin","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"role","type":"ChannelParticipantRole"}],"type":"Updates"},{"id":"1450044624","method":"channels.editTitle","params":[{"name":"channel","type":"InputChannel"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-248621111","method":"channels.editPhoto","params":[{"name":"channel","type":"InputChannel"},{"name":"photo","type":"InputChatPhoto"}],"type":"Updates"},{"id":"283557164","method":"channels.checkUsername","params":[{"name":"channel","type":"InputChannel"},{"name":"username","type":"string"}],"type":"Bool"},{"id":"890549214","method":"channels.updateUsername","params":[{"name":"channel","type":"InputChannel"},{"name":"username","type":"string"}],"type":"Bool"},{"id":"615851205","method":"channels.joinChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"-130635115","method":"channels.leaveChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"429865580","method":"channels.inviteToChannel","params":[{"name":"channel","type":"InputChannel"},{"name":"users","type":"Vector<InputUser>"}],"type":"Updates"},{"id":"-1502421484","method":"channels.kickFromChannel","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"kicked","type":"Bool"}],"type":"Updates"},{"id":"-950663035","method":"channels.exportInvite","params":[{"name":"channel","type":"InputChannel"}],"type":"ExportedChatInvite"},{"id":"-1072619549","method":"channels.deleteChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"-1154295872","method":"updates.getChannelDifference","params":[{"name":"channel","type":"InputChannel"},{"name":"filter","type":"ChannelMessagesFilter"},{"name":"pts","type":"int"},{"name":"limit","type":"int"}],"type":"updates.ChannelDifference"},{"id":"-326379039","method":"messages.toggleChatAdmins","params":[{"name":"chat_id","type":"int"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"-1444503762","method":"messages.editChatAdmin","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"is_admin","type":"Bool"}],"type":"Bool"},{"id":"363051235","method":"messages.migrateChat","params":[{"name":"chat_id","type":"int"}],"type":"Updates"},{"id":"-1640190800","method":"messages.searchGlobal","params":[{"name":"q","type":"string"},{"name":"offset_date","type":"int"},{"name":"offset_peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Messages"},{"id":"889286899","method":"help.getTermsOfService","params":[],"type":"help.TermsOfService"},{"id":"2016638777","method":"messages.reorderStickerSets","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"order","type":"Vector<long>"}],"type":"Bool"},{"id":"864953444","method":"messages.getDocumentByHash","params":[{"name":"sha256","type":"bytes"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"}],"type":"Document"},{"id":"-1080395925","method":"messages.searchGifs","params":[{"name":"q","type":"string"},{"name":"offset","type":"int"}],"type":"messages.FoundGifs"},{"id":"-2084618926","method":"messages.getSavedGifs","params":[{"name":"hash","type":"int"}],"type":"messages.SavedGifs"},{"id":"846868683","method":"messages.saveGif","params":[{"name":"id","type":"InputDocument"},{"name":"unsave","type":"Bool"}],"type":"Bool"},{"id":"1364105629","method":"messages.getInlineBotResults","params":[{"name":"flags","type":"#"},{"name":"bot","type":"InputUser"},{"name":"peer","type":"InputPeer"},{"name":"geo_point","type":"flags.0?InputGeoPoint"},{"name":"query","type":"string"},{"name":"offset","type":"string"}],"type":"messages.BotResults"},{"id":"-346119674","method":"messages.setInlineBotResults","params":[{"name":"flags","type":"#"},{"name":"gallery","type":"flags.0?true"},{"name":"private","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"results","type":"Vector<InputBotInlineResult>"},{"name":"cache_time","type":"int"},{"name":"next_offset","type":"flags.2?string"},{"name":"switch_pm","type":"flags.3?InlineBotSwitchPM"}],"type":"Bool"},{"id":"-1318189314","method":"messages.sendInlineBotResult","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"random_id","type":"long"},{"name":"query_id","type":"long"},{"name":"id","type":"string"}],"type":"Updates"},{"id":"1231065863","method":"channels.toggleInvites","params":[{"name":"channel","type":"InputChannel"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"-934882771","method":"channels.exportMessageLink","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"int"}],"type":"ExportedMessageLink"},{"id":"527021574","method":"channels.toggleSignatures","params":[{"name":"channel","type":"InputChannel"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"-1490162350","method":"channels.updatePinnedMessage","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.0?true"},{"name":"channel","type":"InputChannel"},{"name":"id","type":"int"}],"type":"Updates"},{"id":"1056025023","method":"auth.resendCode","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"}],"type":"auth.SentCode"},{"id":"520357240","method":"auth.cancelCode","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"}],"type":"Bool"},{"id":"-39416522","method":"messages.getMessageEditData","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"}],"type":"messages.MessageEditData"},{"id":"-829299510","method":"messages.editMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"message","type":"flags.11?string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Updates"},{"id":"319564933","method":"messages.editInlineBotMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"id","type":"InputBotInlineMessageID"},{"name":"message","type":"flags.11?string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Bool"},{"id":"-2130010132","method":"messages.getBotCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"game","type":"flags.1?true"},{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"data","type":"flags.0?bytes"}],"type":"messages.BotCallbackAnswer"},{"id":"-920136629","method":"messages.setBotCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"alert","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"message","type":"flags.0?string"},{"name":"url","type":"flags.2?string"}],"type":"Bool"},{"id":"-728224331","method":"contacts.getTopPeers","params":[{"name":"flags","type":"#"},{"name":"correspondents","type":"flags.0?true"},{"name":"bots_pm","type":"flags.1?true"},{"name":"bots_inline","type":"flags.2?true"},{"name":"groups","type":"flags.10?true"},{"name":"channels","type":"flags.15?true"},{"name":"offset","type":"int"},{"name":"limit","type":"int"},{"name":"hash","type":"int"}],"type":"contacts.TopPeers"},{"id":"451113900","method":"contacts.resetTopPeerRating","params":[{"name":"category","type":"TopPeerCategory"},{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"764901049","method":"messages.getPeerDialogs","params":[{"name":"peers","type":"Vector<InputPeer>"}],"type":"messages.PeerDialogs"},{"id":"-1137057461","method":"messages.saveDraft","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"peer","type":"InputPeer"},{"name":"message","type":"string"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Bool"},{"id":"1782549861","method":"messages.getAllDrafts","params":[],"type":"Updates"},{"id":"766298703","method":"messages.getFeaturedStickers","params":[{"name":"hash","type":"int"}],"type":"messages.FeaturedStickers"},{"id":"1527873830","method":"messages.readFeaturedStickers","params":[{"name":"id","type":"Vector<long>"}],"type":"Bool"},{"id":"1587647177","method":"messages.getRecentStickers","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"},{"name":"hash","type":"int"}],"type":"messages.RecentStickers"},{"id":"958863608","method":"messages.saveRecentSticker","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"},{"name":"id","type":"InputDocument"},{"name":"unsave","type":"Bool"}],"type":"Bool"},{"id":"-1986437075","method":"messages.clearRecentStickers","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"}],"type":"Bool"},{"id":"1475442322","method":"messages.getArchivedStickers","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"offset_id","type":"long"},{"name":"limit","type":"int"}],"type":"messages.ArchivedStickers"},{"id":"353818557","method":"account.sendConfirmPhoneCode","params":[{"name":"flags","type":"#"},{"name":"allow_flashcall","type":"flags.0?true"},{"name":"hash","type":"string"},{"name":"current_number","type":"flags.0?Bool"}],"type":"auth.SentCode"},{"id":"1596029123","method":"account.confirmPhone","params":[{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"Bool"},{"id":"-1920105769","method":"channels.getAdminedPublicChannels","params":[],"type":"messages.Chats"},{"id":"1706608543","method":"messages.getMaskStickers","params":[{"name":"hash","type":"int"}],"type":"messages.AllStickers"},{"id":"-866424884","method":"messages.getAttachedStickers","params":[{"name":"media","type":"InputStickeredMedia"}],"type":"Vector<StickerSetCovered>"},{"id":"-1907842680","method":"auth.dropTempAuthKeys","params":[{"name":"except_auth_keys","type":"Vector<long>"}],"type":"Bool"},{"id":"-1896289088","method":"messages.setGameScore","params":[{"name":"flags","type":"#"},{"name":"edit_message","type":"flags.0?true"},{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"score","type":"int"}],"type":"Updates"},{"id":"363700068","method":"messages.setInlineGameScore","params":[{"name":"flags","type":"#"},{"name":"edit_message","type":"flags.0?true"},{"name":"id","type":"InputBotInlineMessageID"},{"name":"user_id","type":"InputUser"},{"name":"score","type":"int"}],"type":"Bool"},{"id":"-400399203","method":"messages.getGameHighScores","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"messages.HighScores"},{"id":"258170395","method":"messages.getInlineGameHighScores","params":[{"name":"id","type":"InputBotInlineMessageID"},{"name":"user_id","type":"InputUser"}],"type":"messages.HighScores"}]}

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = {"constructors":[{"id":"481674261","predicate":"vector","params":[],"type":"Vector t"},{"id":"85337187","predicate":"resPQ","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"pq","type":"bytes"},{"name":"server_public_key_fingerprints","type":"Vector<long>"}],"type":"ResPQ"},{"id":"-2083955988","predicate":"p_q_inner_data","params":[{"name":"pq","type":"bytes"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce","type":"int256"}],"type":"P_Q_inner_data"},{"id":"2043348061","predicate":"server_DH_params_fail","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash","type":"int128"}],"type":"Server_DH_Params"},{"id":"-790100132","predicate":"server_DH_params_ok","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"encrypted_answer","type":"bytes"}],"type":"Server_DH_Params"},{"id":"-1249309254","predicate":"server_DH_inner_data","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"g","type":"int"},{"name":"dh_prime","type":"bytes"},{"name":"g_a","type":"bytes"},{"name":"server_time","type":"int"}],"type":"Server_DH_inner_data"},{"id":"1715713620","predicate":"client_DH_inner_data","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"retry_id","type":"long"},{"name":"g_b","type":"bytes"}],"type":"Client_DH_Inner_Data"},{"id":"1003222836","predicate":"dh_gen_ok","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash1","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"1188831161","predicate":"dh_gen_retry","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash2","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"-1499615742","predicate":"dh_gen_fail","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash3","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"-212046591","predicate":"rpc_result","params":[{"name":"req_msg_id","type":"long"},{"name":"result","type":"Object"}],"type":"RpcResult"},{"id":"558156313","predicate":"rpc_error","params":[{"name":"error_code","type":"int"},{"name":"error_message","type":"string"}],"type":"RpcError"},{"id":"1579864942","predicate":"rpc_answer_unknown","params":[],"type":"RpcDropAnswer"},{"id":"-847714938","predicate":"rpc_answer_dropped_running","params":[],"type":"RpcDropAnswer"},{"id":"-1539647305","predicate":"rpc_answer_dropped","params":[{"name":"msg_id","type":"long"},{"name":"seq_no","type":"int"},{"name":"bytes","type":"int"}],"type":"RpcDropAnswer"},{"id":"155834844","predicate":"future_salt","params":[{"name":"valid_since","type":"int"},{"name":"valid_until","type":"int"},{"name":"salt","type":"long"}],"type":"FutureSalt"},{"id":"-1370486635","predicate":"future_salts","params":[{"name":"req_msg_id","type":"long"},{"name":"now","type":"int"},{"name":"salts","type":"vector<future_salt>"}],"type":"FutureSalts"},{"id":"880243653","predicate":"pong","params":[{"name":"msg_id","type":"long"},{"name":"ping_id","type":"long"}],"type":"Pong"},{"id":"-501201412","predicate":"destroy_session_ok","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"},{"id":"1658015945","predicate":"destroy_session_none","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"},{"id":"-1631450872","predicate":"new_session_created","params":[{"name":"first_msg_id","type":"long"},{"name":"unique_id","type":"long"},{"name":"server_salt","type":"long"}],"type":"NewSession"},{"id":"1945237724","predicate":"msg_container","params":[{"name":"messages","type":"vector<%Message>"}],"type":"MessageContainer"},{"id":"1538843921","predicate":"message","params":[{"name":"msg_id","type":"long"},{"name":"seqno","type":"int"},{"name":"bytes","type":"int"},{"name":"body","type":"Object"}],"type":"Message"},{"id":"-530561358","predicate":"msg_copy","params":[{"name":"orig_message","type":"Message"}],"type":"MessageCopy"},{"id":"812830625","predicate":"gzip_packed","params":[{"name":"packed_data","type":"bytes"}],"type":"Object"},{"id":"1658238041","predicate":"msgs_ack","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgsAck"},{"id":"-1477445615","predicate":"bad_msg_notification","params":[{"name":"bad_msg_id","type":"long"},{"name":"bad_msg_seqno","type":"int"},{"name":"error_code","type":"int"}],"type":"BadMsgNotification"},{"id":"-307542917","predicate":"bad_server_salt","params":[{"name":"bad_msg_id","type":"long"},{"name":"bad_msg_seqno","type":"int"},{"name":"error_code","type":"int"},{"name":"new_server_salt","type":"long"}],"type":"BadMsgNotification"},{"id":"2105940488","predicate":"msg_resend_req","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgResendReq"},{"id":"-630588590","predicate":"msgs_state_req","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgsStateReq"},{"id":"81704317","predicate":"msgs_state_info","params":[{"name":"req_msg_id","type":"long"},{"name":"info","type":"bytes"}],"type":"MsgsStateInfo"},{"id":"-1933520591","predicate":"msgs_all_info","params":[{"name":"msg_ids","type":"Vector<long>"},{"name":"info","type":"bytes"}],"type":"MsgsAllInfo"},{"id":"661470918","predicate":"msg_detailed_info","params":[{"name":"msg_id","type":"long"},{"name":"answer_msg_id","type":"long"},{"name":"bytes","type":"int"},{"name":"status","type":"int"}],"type":"MsgDetailedInfo"},{"id":"-2137147681","predicate":"msg_new_detailed_info","params":[{"name":"answer_msg_id","type":"long"},{"name":"bytes","type":"int"},{"name":"status","type":"int"}],"type":"MsgDetailedInfo"}],"methods":[{"id":"1615239032","method":"req_pq","params":[{"name":"nonce","type":"int128"}],"type":"ResPQ"},{"id":"-686627650","method":"req_DH_params","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"public_key_fingerprint","type":"long"},{"name":"encrypted_data","type":"bytes"}],"type":"Server_DH_Params"},{"id":"-184262881","method":"set_client_DH_params","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"encrypted_data","type":"bytes"}],"type":"Set_client_DH_params_answer"},{"id":"1491380032","method":"rpc_drop_answer","params":[{"name":"req_msg_id","type":"long"}],"type":"RpcDropAnswer"},{"id":"-1188971260","method":"get_future_salts","params":[{"name":"num","type":"int"}],"type":"FutureSalts"},{"id":"2059302892","method":"ping","params":[{"name":"ping_id","type":"long"}],"type":"Pong"},{"id":"-213746804","method":"ping_delay_disconnect","params":[{"name":"ping_id","type":"long"},{"name":"disconnect_delay","type":"int"}],"type":"Pong"},{"id":"-414113498","method":"destroy_session","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"},{"id":"-1835453025","method":"http_wait","params":[{"name":"max_delay","type":"int"},{"name":"wait_after","type":"int"},{"name":"max_wait","type":"int"}],"type":"HttpWait"}]}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(117);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(124);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(127);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(161);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(171);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(173);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(191);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(197);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(253);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(255);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(265);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(287);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(289);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(296);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(297);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(311);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(323);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(33);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(330);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(332);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(339);

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(43);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(47);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(51);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(56);

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(57);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(7);

/***/ })
/******/ ]);
});
//# sourceMappingURL=mtproto2-browser.js.map