var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _global$1 = /*#__PURE__*/Object.freeze({
	default: _global,
	__moduleExports: _global
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _has$1 = /*#__PURE__*/Object.freeze({
	default: _has,
	__moduleExports: _has
});

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

var _fails$1 = /*#__PURE__*/Object.freeze({
	default: _fails,
	__moduleExports: _fails
});

var require$$1 = ( _fails$1 && _fails ) || _fails$1;

// Thank's IE8 for his funny defineProperty
var _descriptors = !require$$1(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var _descriptors$1 = /*#__PURE__*/Object.freeze({
	default: _descriptors,
	__moduleExports: _descriptors
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _core$1 = /*#__PURE__*/Object.freeze({
	default: _core,
	__moduleExports: _core,
	version: _core_1
});

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _isObject$1 = /*#__PURE__*/Object.freeze({
	default: _isObject,
	__moduleExports: _isObject
});

var isObject = ( _isObject$1 && _isObject ) || _isObject$1;

var _anObject = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _anObject$1 = /*#__PURE__*/Object.freeze({
	default: _anObject,
	__moduleExports: _anObject
});

var require$$2 = ( _global$1 && _global ) || _global$1;

var document$1 = require$$2.document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document$1) && isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _domCreate$1 = /*#__PURE__*/Object.freeze({
	default: _domCreate,
	__moduleExports: _domCreate
});

var require$$0 = ( _descriptors$1 && _descriptors ) || _descriptors$1;

var require$$2$1 = ( _domCreate$1 && _domCreate ) || _domCreate$1;

var _ie8DomDefine = !require$$0 && !require$$1(function () {
  return Object.defineProperty(require$$2$1('div'), 'a', { get: function () { return 7; } }).a != 7;
});

var _ie8DomDefine$1 = /*#__PURE__*/Object.freeze({
	default: _ie8DomDefine,
	__moduleExports: _ie8DomDefine
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var _toPrimitive$1 = /*#__PURE__*/Object.freeze({
	default: _toPrimitive,
	__moduleExports: _toPrimitive
});

var anObject = ( _anObject$1 && _anObject ) || _anObject$1;

var IE8_DOM_DEFINE = ( _ie8DomDefine$1 && _ie8DomDefine ) || _ie8DomDefine$1;

var require$$16 = ( _toPrimitive$1 && _toPrimitive ) || _toPrimitive$1;

var dP = Object.defineProperty;

var f = require$$0 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = require$$16(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _objectDp$1 = /*#__PURE__*/Object.freeze({
	default: _objectDp,
	__moduleExports: _objectDp,
	f: f
});

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _propertyDesc$1 = /*#__PURE__*/Object.freeze({
	default: _propertyDesc,
	__moduleExports: _propertyDesc
});

var require$$37 = ( _objectDp$1 && _objectDp ) || _objectDp$1;

var descriptor = ( _propertyDesc$1 && _propertyDesc ) || _propertyDesc$1;

var _hide = require$$0 ? function (object, key, value) {
  return require$$37.f(object, key, descriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var _hide$1 = /*#__PURE__*/Object.freeze({
	default: _hide,
	__moduleExports: _hide
});

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _uid$1 = /*#__PURE__*/Object.freeze({
	default: _uid,
	__moduleExports: _uid
});

var require$$0$1 = ( _hide$1 && _hide ) || _hide$1;

var has = ( _has$1 && _has ) || _has$1;

var uid = ( _uid$1 && _uid ) || _uid$1;

var require$$1$1 = ( _core$1 && _core ) || _core$1;

var _redefine = createCommonjsModule(function (module) {
var SRC = uid('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require$$1$1.inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || require$$0$1(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || require$$0$1(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === require$$2) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    require$$0$1(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    require$$0$1(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _redefine$1 = /*#__PURE__*/Object.freeze({
	default: _redefine,
	__moduleExports: _redefine
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

var _aFunction$1 = /*#__PURE__*/Object.freeze({
	default: _aFunction,
	__moduleExports: _aFunction
});

var aFunction = ( _aFunction$1 && _aFunction ) || _aFunction$1;

// optional / simple context binding

var _ctx = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _ctx$1 = /*#__PURE__*/Object.freeze({
	default: _ctx,
	__moduleExports: _ctx
});

var redefine = ( _redefine$1 && _redefine ) || _redefine$1;

var ctx = ( _ctx$1 && _ctx ) || _ctx$1;

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? require$$2 : IS_STATIC ? require$$2[name] || (require$$2[name] = {}) : (require$$2[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? require$$1$1 : require$$1$1[name] || (require$$1$1[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, require$$2) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) require$$0$1(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
require$$2.core = require$$1$1;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var _export$1 = /*#__PURE__*/Object.freeze({
	default: _export,
	__moduleExports: _export
});

var _meta = createCommonjsModule(function (module) {
var META = uid('meta');


var setDesc = require$$37.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require$$1(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var _meta$1 = /*#__PURE__*/Object.freeze({
	default: _meta,
	__moduleExports: _meta,
	KEY: _meta_1,
	NEED: _meta_2,
	fastKey: _meta_3,
	getWeak: _meta_4,
	onFreeze: _meta_5
});

var SHARED = '__core-js_shared__';
var store = require$$2[SHARED] || (require$$2[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var _shared$1 = /*#__PURE__*/Object.freeze({
	default: _shared,
	__moduleExports: _shared
});

var require$$0$2 = ( _shared$1 && _shared ) || _shared$1;

var _wks = createCommonjsModule(function (module) {
var store = require$$0$2('wks');

var Symbol = require$$2.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

var _wks$1 = /*#__PURE__*/Object.freeze({
	default: _wks,
	__moduleExports: _wks
});

var require$$0$3 = ( _wks$1 && _wks ) || _wks$1;

var def = require$$37.f;

var TAG = require$$0$3('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var _setToStringTag$1 = /*#__PURE__*/Object.freeze({
	default: _setToStringTag,
	__moduleExports: _setToStringTag
});

var f$1 = require$$0$3;

var _wksExt = {
	f: f$1
};

var _wksExt$1 = /*#__PURE__*/Object.freeze({
	default: _wksExt,
	__moduleExports: _wksExt,
	f: f$1
});

var _library = false;

var _library$1 = /*#__PURE__*/Object.freeze({
	default: _library,
	__moduleExports: _library
});

var require$$0$4 = ( _library$1 && _library ) || _library$1;

var wksExt = ( _wksExt$1 && _wksExt ) || _wksExt$1;

var defineProperty = require$$37.f;
var _wksDefine = function (name) {
  var $Symbol = require$$1$1.Symbol || (require$$1$1.Symbol = require$$0$4 ? {} : require$$2.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

var _wksDefine$1 = /*#__PURE__*/Object.freeze({
	default: _wksDefine,
	__moduleExports: _wksDefine
});

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

var _cof$1 = /*#__PURE__*/Object.freeze({
	default: _cof,
	__moduleExports: _cof
});

var require$$1$2 = ( _cof$1 && _cof ) || _cof$1;

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return require$$1$2(it) == 'String' ? it.split('') : Object(it);
};

var _iobject$1 = /*#__PURE__*/Object.freeze({
	default: _iobject,
	__moduleExports: _iobject
});

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

var _defined$1 = /*#__PURE__*/Object.freeze({
	default: _defined,
	__moduleExports: _defined
});

var IObject = ( _iobject$1 && _iobject ) || _iobject$1;

var defined = ( _defined$1 && _defined ) || _defined$1;

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return IObject(defined(it));
};

var _toIobject$1 = /*#__PURE__*/Object.freeze({
	default: _toIobject,
	__moduleExports: _toIobject
});

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

var _toInteger$1 = /*#__PURE__*/Object.freeze({
	default: _toInteger,
	__moduleExports: _toInteger
});

var toInteger = ( _toInteger$1 && _toInteger ) || _toInteger$1;

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var _toLength$1 = /*#__PURE__*/Object.freeze({
	default: _toLength,
	__moduleExports: _toLength
});

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

var _toAbsoluteIndex$1 = /*#__PURE__*/Object.freeze({
	default: _toAbsoluteIndex,
	__moduleExports: _toAbsoluteIndex
});

var toIObject = ( _toIobject$1 && _toIobject ) || _toIobject$1;

var toLength = ( _toLength$1 && _toLength ) || _toLength$1;

var require$$15 = ( _toAbsoluteIndex$1 && _toAbsoluteIndex ) || _toAbsoluteIndex$1;

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = require$$15(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _arrayIncludes$1 = /*#__PURE__*/Object.freeze({
	default: _arrayIncludes,
	__moduleExports: _arrayIncludes
});

var shared = require$$0$2('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

var _sharedKey$1 = /*#__PURE__*/Object.freeze({
	default: _sharedKey,
	__moduleExports: _sharedKey
});

var require$$0$5 = ( _arrayIncludes$1 && _arrayIncludes ) || _arrayIncludes$1;

var require$$1$3 = ( _sharedKey$1 && _sharedKey ) || _sharedKey$1;

var arrayIndexOf = require$$0$5(false);
var IE_PROTO = require$$1$3('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

var _objectKeysInternal$1 = /*#__PURE__*/Object.freeze({
	default: _objectKeysInternal,
	__moduleExports: _objectKeysInternal
});

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

var _enumBugKeys$1 = /*#__PURE__*/Object.freeze({
	default: _enumBugKeys,
	__moduleExports: _enumBugKeys
});

var $keys = ( _objectKeysInternal$1 && _objectKeysInternal ) || _objectKeysInternal$1;

var require$$0$6 = ( _enumBugKeys$1 && _enumBugKeys ) || _enumBugKeys$1;

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return $keys(O, require$$0$6);
};

var _objectKeys$1 = /*#__PURE__*/Object.freeze({
	default: _objectKeys,
	__moduleExports: _objectKeys
});

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var _objectGops$1 = /*#__PURE__*/Object.freeze({
	default: _objectGops,
	__moduleExports: _objectGops,
	f: f$2
});

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

var _objectPie$1 = /*#__PURE__*/Object.freeze({
	default: _objectPie,
	__moduleExports: _objectPie,
	f: f$3
});

var getKeys = ( _objectKeys$1 && _objectKeys ) || _objectKeys$1;

var gOPS = ( _objectGops$1 && _objectGops ) || _objectGops$1;

var require$$0$7 = ( _objectPie$1 && _objectPie ) || _objectPie$1;

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = require$$0$7.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

var _enumKeys$1 = /*#__PURE__*/Object.freeze({
	default: _enumKeys,
	__moduleExports: _enumKeys
});

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return require$$1$2(arg) == 'Array';
};

var _isArray$1 = /*#__PURE__*/Object.freeze({
	default: _isArray,
	__moduleExports: _isArray
});

var _objectDps = require$$0 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) require$$37.f(O, P = keys[i++], Properties[P]);
  return O;
};

var _objectDps$1 = /*#__PURE__*/Object.freeze({
	default: _objectDps,
	__moduleExports: _objectDps
});

var document$2 = require$$2.document;
var _html = document$2 && document$2.documentElement;

var _html$1 = /*#__PURE__*/Object.freeze({
	default: _html,
	__moduleExports: _html
});

var dPs = ( _objectDps$1 && _objectDps ) || _objectDps$1;

var html = ( _html$1 && _html ) || _html$1;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = require$$1$3('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require$$2$1('iframe');
  var i = require$$0$6.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][require$$0$6[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

var _objectCreate$1 = /*#__PURE__*/Object.freeze({
	default: _objectCreate,
	__moduleExports: _objectCreate
});

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = require$$0$6.concat('length', 'prototype');

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

var _objectGopn = {
	f: f$4
};

var _objectGopn$1 = /*#__PURE__*/Object.freeze({
	default: _objectGopn,
	__moduleExports: _objectGopn,
	f: f$4
});

var gOPN = ( _objectGopn$1 && _objectGopn ) || _objectGopn$1;

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = gOPN.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(toIObject(it));
};

var _objectGopnExt = {
	f: f$5
};

var _objectGopnExt$1 = /*#__PURE__*/Object.freeze({
	default: _objectGopnExt,
	__moduleExports: _objectGopnExt,
	f: f$5
});

var gOPD = Object.getOwnPropertyDescriptor;

var f$6 = require$$0 ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = require$$16(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return descriptor(!require$$0$7.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

var _objectGopd$1 = /*#__PURE__*/Object.freeze({
	default: _objectGopd,
	__moduleExports: _objectGopd,
	f: f$6
});

var $export$1 = ( _export$1 && _export ) || _export$1;

var require$$0$8 = ( _meta$1 && _meta ) || _meta$1;

var setToStringTag = ( _setToStringTag$1 && _setToStringTag ) || _setToStringTag$1;

var require$$0$9 = ( _wksDefine$1 && _wksDefine ) || _wksDefine$1;

var enumKeys = ( _enumKeys$1 && _enumKeys ) || _enumKeys$1;

var isArray = ( _isArray$1 && _isArray ) || _isArray$1;

var create = ( _objectCreate$1 && _objectCreate ) || _objectCreate$1;

var require$$1$4 = ( _objectGopnExt$1 && _objectGopnExt ) || _objectGopnExt$1;

var require$$38 = ( _objectGopd$1 && _objectGopd ) || _objectGopd$1;

// ECMAScript 6 symbols shim





var META = require$$0$8.KEY;



















var gOPD$1 = require$$38.f;
var dP$1 = require$$37.f;
var gOPN$2 = require$$1$4.f;
var $Symbol = require$$2.Symbol;
var $JSON = require$$2.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = require$$0$3('_hidden');
var TO_PRIMITIVE = require$$0$3('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = require$$0$2('symbol-registry');
var AllSymbols = require$$0$2('symbols');
var OPSymbols = require$$0$2('op-symbols');
var ObjectProto = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = require$$2.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = require$$0 && require$$1(function () {
  return create(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = create($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = require$$16(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP$1(it, HIDDEN, descriptor(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = create(D, { enumerable: descriptor(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create$$1(it, P) {
  return P === undefined ? create(it) : $defineProperties(create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = require$$16(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = require$$16(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$2(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN$2(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, descriptor(1, value));
    };
    if (require$$0 && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  require$$38.f = $getOwnPropertyDescriptor;
  require$$37.f = $defineProperty;
  gOPN.f = require$$1$4.f = $getOwnPropertyNames;
  require$$0$7.f = $propertyIsEnumerable;
  gOPS.f = $getOwnPropertySymbols;

  if (require$$0 && !require$$0$4) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(require$$0$3(name));
  };
}

$export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)require$$0$3(es6Symbols[j++]);

for (var wellKnownSymbols = getKeys(require$$0$3.store), k = 0; wellKnownSymbols.length > k;) require$$0$9(wellKnownSymbols[k++]);

$export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export$1($export$1.S + $export$1.F * (!USE_NATIVE || require$$1(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || require$$0$1($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(require$$2.JSON, 'JSON', true);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export$1($export$1.S, 'Object', { create: create });

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export$1($export$1.S + $export$1.F * !require$$0, 'Object', { defineProperty: require$$37.f });

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export$1($export$1.S + $export$1.F * !require$$0, 'Object', { defineProperties: dPs });

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (require$$1$1.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export$1($export$1.S + $export$1.F * require$$1(function () { fn(1); }), 'Object', exp);
};

var _objectSap$1 = /*#__PURE__*/Object.freeze({
	default: _objectSap,
	__moduleExports: _objectSap
});

var require$$0$10 = ( _objectSap$1 && _objectSap ) || _objectSap$1;

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

var $getOwnPropertyDescriptor$1 = require$$38.f;

require$$0$10('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(toIObject(it), key);
  };
});

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(defined(it));
};

var _toObject$1 = /*#__PURE__*/Object.freeze({
	default: _toObject,
	__moduleExports: _toObject
});

var require$$20 = ( _toObject$1 && _toObject ) || _toObject$1;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = require$$1$3('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = require$$20(O);
  if (has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto$1 : null;
};

var _objectGpo$1 = /*#__PURE__*/Object.freeze({
	default: _objectGpo,
	__moduleExports: _objectGpo
});

var require$$23 = ( _objectGpo$1 && _objectGpo ) || _objectGpo$1;

// 19.1.2.9 Object.getPrototypeOf(O)



require$$0$10('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return require$$23(require$$20(it));
  };
});

// 19.1.2.14 Object.keys(O)



require$$0$10('keys', function () {
  return function keys(it) {
    return getKeys(require$$20(it));
  };
});

// 19.1.2.7 Object.getOwnPropertyNames(O)
require$$0$10('getOwnPropertyNames', function () {
  return require$$1$4.f;
});

// 19.1.2.5 Object.freeze(O)

var meta = require$$0$8.onFreeze;

require$$0$10('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

// 19.1.2.17 Object.seal(O)

var meta$1 = require$$0$8.onFreeze;

require$$0$10('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta$1(it)) : it;
  };
});

// 19.1.2.15 Object.preventExtensions(O)

var meta$2 = require$$0$8.onFreeze;

require$$0$10('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta$2(it)) : it;
  };
});

// 19.1.2.12 Object.isFrozen(O)


require$$0$10('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

// 19.1.2.13 Object.isSealed(O)


require$$0$10('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

// 19.1.2.11 Object.isExtensible(O)


require$$0$10('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || require$$1(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = require$$20(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = require$$0$7.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

var _objectAssign$1 = /*#__PURE__*/Object.freeze({
	default: _objectAssign,
	__moduleExports: _objectAssign
});

var assign = ( _objectAssign$1 && _objectAssign ) || _objectAssign$1;

// 19.1.3.1 Object.assign(target, source)


$export$1($export$1.S + $export$1.F, 'Object', { assign: assign });

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var _sameValue$1 = /*#__PURE__*/Object.freeze({
	default: _sameValue,
	__moduleExports: _sameValue
});

var require$$0$11 = ( _sameValue$1 && _sameValue ) || _sameValue$1;

// 19.1.3.10 Object.is(value1, value2)

$export$1($export$1.S, 'Object', { is: require$$0$11 });

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = ctx(Function.call, require$$38.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
var _setProto_1 = _setProto.set;
var _setProto_2 = _setProto.check;

var _setProto$1 = /*#__PURE__*/Object.freeze({
	default: _setProto,
	__moduleExports: _setProto,
	set: _setProto_1,
	check: _setProto_2
});

var require$$0$12 = ( _setProto$1 && _setProto ) || _setProto$1;

// 19.1.3.19 Object.setPrototypeOf(O, proto)

$export$1($export$1.S, 'Object', { setPrototypeOf: require$$0$12.set });

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = require$$0$3('toStringTag');
// ES3 wrong here
var ARG = require$$1$2(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? require$$1$2(O)
    // ES3 arguments fallback
    : (B = require$$1$2(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var _classof$1 = /*#__PURE__*/Object.freeze({
	default: _classof,
	__moduleExports: _classof
});

var classof = ( _classof$1 && _classof ) || _classof$1;

// 19.1.3.6 Object.prototype.toString()

var test = {};
test[require$$0$3('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var _invoke$1 = /*#__PURE__*/Object.freeze({
	default: _invoke,
	__moduleExports: _invoke
});

var invoke = ( _invoke$1 && _invoke ) || _invoke$1;

var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

var _bind = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

var _bind$1 = /*#__PURE__*/Object.freeze({
	default: _bind,
	__moduleExports: _bind
});

var bind = ( _bind$1 && _bind ) || _bind$1;

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


$export$1($export$1.P, 'Function', { bind: bind });

var dP$2 = require$$37.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require$$0 && dP$2(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

var HAS_INSTANCE = require$$0$3('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require$$37.f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = require$$23(O)) if (this.prototype === O) return true;
  return false;
} });

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var _stringWs$1 = /*#__PURE__*/Object.freeze({
	default: _stringWs,
	__moduleExports: _stringWs
});

var spaces = ( _stringWs$1 && _stringWs ) || _stringWs$1;

var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = require$$1(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export$1($export$1.P + $export$1.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var _stringTrim$1 = /*#__PURE__*/Object.freeze({
	default: _stringTrim,
	__moduleExports: _stringTrim
});

var require$$1$5 = ( _stringTrim$1 && _stringTrim ) || _stringTrim$1;

var $parseInt = require$$2.parseInt;
var $trim = require$$1$5.trim;

var hex = /^[-+]?0[xX]/;

var _parseInt = $parseInt(spaces + '08') !== 8 || $parseInt(spaces + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

var _parseInt$1 = /*#__PURE__*/Object.freeze({
	default: _parseInt,
	__moduleExports: _parseInt
});

var $parseInt$1 = ( _parseInt$1 && _parseInt ) || _parseInt$1;

// 18.2.5 parseInt(string, radix)
$export$1($export$1.G + $export$1.F * (parseInt != $parseInt$1), { parseInt: $parseInt$1 });

var $parseFloat = require$$2.parseFloat;
var $trim$1 = require$$1$5.trim;

var _parseFloat = 1 / $parseFloat(spaces + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim$1(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

var _parseFloat$1 = /*#__PURE__*/Object.freeze({
	default: _parseFloat,
	__moduleExports: _parseFloat
});

var $parseFloat$1 = ( _parseFloat$1 && _parseFloat ) || _parseFloat$1;

// 18.2.4 parseFloat(string)
$export$1($export$1.G + $export$1.F * (parseFloat != $parseFloat$1), { parseFloat: $parseFloat$1 });

var setPrototypeOf = require$$0$12.set;
var _inheritIfRequired = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

var _inheritIfRequired$1 = /*#__PURE__*/Object.freeze({
	default: _inheritIfRequired,
	__moduleExports: _inheritIfRequired
});

var inheritIfRequired = ( _inheritIfRequired$1 && _inheritIfRequired ) || _inheritIfRequired$1;

var gOPN$3 = gOPN.f;
var gOPD$2 = require$$38.f;
var dP$3 = require$$37.f;
var $trim$2 = require$$1$5.trim;
var NUMBER = 'Number';
var $Number = require$$2[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = require$$1$2(create(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = require$$16(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim$2(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? require$$1(function () { proto.valueOf.call(that); }) : require$$1$2(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require$$0 ? gOPN$3(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
    if (has(Base, key = keys[j$1]) && !has($Number, key)) {
      dP$3($Number, key, gOPD$2(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  redefine(require$$2, NUMBER, $Number);
}

var _aNumberValue = function (it, msg) {
  if (typeof it != 'number' && require$$1$2(it) != 'Number') throw TypeError(msg);
  return +it;
};

var _aNumberValue$1 = /*#__PURE__*/Object.freeze({
	default: _aNumberValue,
	__moduleExports: _aNumberValue
});

var _stringRepeat = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

var _stringRepeat$1 = /*#__PURE__*/Object.freeze({
	default: _stringRepeat,
	__moduleExports: _stringRepeat
});

var aNumberValue = ( _aNumberValue$1 && _aNumberValue ) || _aNumberValue$1;

var repeat = ( _stringRepeat$1 && _stringRepeat ) || _stringRepeat$1;

var $toFixed = 1.0.toFixed;
var floor$1 = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor$1(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export$1($export$1.P + $export$1.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !require$$1(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

var $toPrecision = 1.0.toPrecision;

$export$1($export$1.P + $export$1.F * (require$$1(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !require$$1(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

// 20.1.2.1 Number.EPSILON


$export$1($export$1.S, 'Number', { EPSILON: Math.pow(2, -52) });

// 20.1.2.2 Number.isFinite(number)

var _isFinite = require$$2.isFinite;

$export$1($export$1.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

// 20.1.2.3 Number.isInteger(number)

var floor$2 = Math.floor;
var _isInteger = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor$2(it) === it;
};

var _isInteger$1 = /*#__PURE__*/Object.freeze({
	default: _isInteger,
	__moduleExports: _isInteger
});

var isInteger = ( _isInteger$1 && _isInteger ) || _isInteger$1;

// 20.1.2.3 Number.isInteger(number)


$export$1($export$1.S, 'Number', { isInteger: isInteger });

// 20.1.2.4 Number.isNaN(number)


$export$1($export$1.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

// 20.1.2.5 Number.isSafeInteger(number)


var abs = Math.abs;

$export$1($export$1.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

// 20.1.2.6 Number.MAX_SAFE_INTEGER


$export$1($export$1.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

// 20.1.2.10 Number.MIN_SAFE_INTEGER


$export$1($export$1.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

// 20.1.2.12 Number.parseFloat(string)
$export$1($export$1.S + $export$1.F * (Number.parseFloat != $parseFloat$1), 'Number', { parseFloat: $parseFloat$1 });

// 20.1.2.13 Number.parseInt(string, radix)
$export$1($export$1.S + $export$1.F * (Number.parseInt != $parseInt$1), 'Number', { parseInt: $parseInt$1 });

// 20.2.2.20 Math.log1p(x)
var _mathLog1p = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

var _mathLog1p$1 = /*#__PURE__*/Object.freeze({
	default: _mathLog1p,
	__moduleExports: _mathLog1p
});

var require$$0$13 = ( _mathLog1p$1 && _mathLog1p ) || _mathLog1p$1;

// 20.2.2.3 Math.acosh(x)


var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export$1($export$1.S + $export$1.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : require$$0$13(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

// 20.2.2.5 Math.asinh(x)

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export$1($export$1.S + $export$1.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

// 20.2.2.7 Math.atanh(x)

var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export$1($export$1.S + $export$1.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

// 20.2.2.28 Math.sign(x)
var _mathSign = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

var _mathSign$1 = /*#__PURE__*/Object.freeze({
	default: _mathSign,
	__moduleExports: _mathSign
});

var sign = ( _mathSign$1 && _mathSign ) || _mathSign$1;

// 20.2.2.9 Math.cbrt(x)



$export$1($export$1.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

// 20.2.2.11 Math.clz32(x)


$export$1($export$1.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

// 20.2.2.12 Math.cosh(x)

var exp = Math.exp;

$export$1($export$1.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
var _mathExpm1 = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

var _mathExpm1$1 = /*#__PURE__*/Object.freeze({
	default: _mathExpm1,
	__moduleExports: _mathExpm1
});

var expm1 = ( _mathExpm1$1 && _mathExpm1 ) || _mathExpm1$1;

// 20.2.2.14 Math.expm1(x)



$export$1($export$1.S + $export$1.F * (expm1 != Math.expm1), 'Math', { expm1: expm1 });

// 20.2.2.16 Math.fround(x)

var pow$1 = Math.pow;
var EPSILON = pow$1(2, -52);
var EPSILON32 = pow$1(2, -23);
var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
var MIN32 = pow$1(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

var _mathFround = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

var _mathFround$1 = /*#__PURE__*/Object.freeze({
	default: _mathFround,
	__moduleExports: _mathFround
});

var fround = ( _mathFround$1 && _mathFround ) || _mathFround$1;

// 20.2.2.16 Math.fround(x)


$export$1($export$1.S, 'Math', { fround: fround });

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])

var abs$1 = Math.abs;

$export$1($export$1.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs$1(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

// 20.2.2.18 Math.imul(x, y)

var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export$1($export$1.S + $export$1.F * require$$1(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

// 20.2.2.21 Math.log10(x)


$export$1($export$1.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

// 20.2.2.20 Math.log1p(x)


$export$1($export$1.S, 'Math', { log1p: require$$0$13 });

// 20.2.2.22 Math.log2(x)


$export$1($export$1.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

// 20.2.2.28 Math.sign(x)


$export$1($export$1.S, 'Math', { sign: sign });

// 20.2.2.30 Math.sinh(x)


var exp$1 = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export$1($export$1.S + $export$1.F * require$$1(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
  }
});

// 20.2.2.33 Math.tanh(x)


var exp$2 = Math.exp;

$export$1($export$1.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
  }
});

// 20.2.2.34 Math.trunc(x)


$export$1($export$1.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export$1($export$1.S + $export$1.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (require$$15(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

$export$1($export$1.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

// 21.1.3.25 String.prototype.trim()
require$$1$5('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _stringAt$1 = /*#__PURE__*/Object.freeze({
	default: _stringAt,
	__moduleExports: _stringAt
});

var _iterators = {};

var _iterators$1 = /*#__PURE__*/Object.freeze({
	default: _iterators,
	__moduleExports: _iterators
});

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require$$0$1(IteratorPrototype, require$$0$3('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

var _iterCreate$1 = /*#__PURE__*/Object.freeze({
	default: _iterCreate,
	__moduleExports: _iterCreate
});

var require$$32 = ( _iterators$1 && _iterators ) || _iterators$1;

var $iterCreate = ( _iterCreate$1 && _iterCreate ) || _iterCreate$1;

var ITERATOR = require$$0$3('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = require$$23($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!require$$0$4 && typeof IteratorPrototype[ITERATOR] != 'function') require$$0$1(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!require$$0$4 || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    require$$0$1(proto, ITERATOR, $default);
  }
  // Plug for library
  require$$32[NAME] = $default;
  require$$32[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export$1($export$1.P + $export$1.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var _iterDefine$1 = /*#__PURE__*/Object.freeze({
	default: _iterDefine,
	__moduleExports: _iterDefine
});

var require$$0$14 = ( _stringAt$1 && _stringAt ) || _stringAt$1;

var $iterDefine = ( _iterDefine$1 && _iterDefine ) || _iterDefine$1;

var $at = require$$0$14(true);

// 21.1.3.27 String.prototype[@@iterator]()
$iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var $at$1 = require$$0$14(false);
$export$1($export$1.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at$1(this, pos);
  }
});

// 7.2.8 IsRegExp(argument)


var MATCH = require$$0$3('match');
var _isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : require$$1$2(it) == 'RegExp');
};

var _isRegexp$1 = /*#__PURE__*/Object.freeze({
	default: _isRegexp,
	__moduleExports: _isRegexp
});

var isRegExp = ( _isRegexp$1 && _isRegexp ) || _isRegexp$1;

// helper for String#{startsWith, endsWith, includes}



var _stringContext = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

var _stringContext$1 = /*#__PURE__*/Object.freeze({
	default: _stringContext,
	__moduleExports: _stringContext
});

var MATCH$1 = require$$0$3('match');
var _failsIsRegexp = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

var _failsIsRegexp$1 = /*#__PURE__*/Object.freeze({
	default: _failsIsRegexp,
	__moduleExports: _failsIsRegexp
});

var context = ( _stringContext$1 && _stringContext ) || _stringContext$1;

var require$$0$15 = ( _failsIsRegexp$1 && _failsIsRegexp ) || _failsIsRegexp$1;

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export$1($export$1.P + $export$1.F * require$$0$15(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

var INCLUDES = 'includes';

$export$1($export$1.P + $export$1.F * require$$0$15(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

$export$1($export$1.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: repeat
});

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export$1($export$1.P + $export$1.F * require$$0$15(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
var _stringHtml = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export$1($export$1.P + $export$1.F * require$$1(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

var _stringHtml$1 = /*#__PURE__*/Object.freeze({
	default: _stringHtml,
	__moduleExports: _stringHtml
});

var require$$0$16 = ( _stringHtml$1 && _stringHtml ) || _stringHtml$1;

// B.2.3.2 String.prototype.anchor(name)
require$$0$16('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

// B.2.3.3 String.prototype.big()
require$$0$16('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

// B.2.3.4 String.prototype.blink()
require$$0$16('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

// B.2.3.5 String.prototype.bold()
require$$0$16('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

// B.2.3.6 String.prototype.fixed()
require$$0$16('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

// B.2.3.7 String.prototype.fontcolor(color)
require$$0$16('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

// B.2.3.8 String.prototype.fontsize(size)
require$$0$16('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

// B.2.3.9 String.prototype.italics()
require$$0$16('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

// B.2.3.10 String.prototype.link(url)
require$$0$16('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

// B.2.3.11 String.prototype.small()
require$$0$16('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

// B.2.3.12 String.prototype.strike()
require$$0$16('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

// B.2.3.13 String.prototype.sub()
require$$0$16('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

// B.2.3.14 String.prototype.sup()
require$$0$16('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

// 20.3.3.1 / 15.9.4.4 Date.now()


$export$1($export$1.S, 'Date', { now: function () { return new Date().getTime(); } });

$export$1($export$1.P + $export$1.F * require$$1(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = require$$20(this);
    var pv = require$$16(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
var _dateToIsoString = (require$$1(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !require$$1(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

var _dateToIsoString$1 = /*#__PURE__*/Object.freeze({
	default: _dateToIsoString,
	__moduleExports: _dateToIsoString
});

var toISOString = ( _dateToIsoString$1 && _dateToIsoString ) || _dateToIsoString$1;

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()



// PhantomJS / old WebKit has a broken implementations
$export$1($export$1.P + $export$1.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime$1 = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DateProto, TO_STRING, function toString() {
    var value = getTime$1.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

var NUMBER$1 = 'number';

var _dateToPrimitive = function (hint) {
  if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
  return require$$16(anObject(this), hint != NUMBER$1);
};

var _dateToPrimitive$1 = /*#__PURE__*/Object.freeze({
	default: _dateToPrimitive,
	__moduleExports: _dateToPrimitive
});

var require$$2$2 = ( _dateToPrimitive$1 && _dateToPrimitive ) || _dateToPrimitive$1;

var TO_PRIMITIVE$1 = require$$0$3('toPrimitive');
var proto$1 = Date.prototype;

if (!(TO_PRIMITIVE$1 in proto$1)) require$$0$1(proto$1, TO_PRIMITIVE$1, require$$2$2);

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


$export$1($export$1.S, 'Array', { isArray: isArray });

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

var _iterCall$1 = /*#__PURE__*/Object.freeze({
	default: _iterCall,
	__moduleExports: _iterCall
});

// check on default Array iterator

var ITERATOR$1 = require$$0$3('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (require$$32.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _isArrayIter$1 = /*#__PURE__*/Object.freeze({
	default: _isArrayIter,
	__moduleExports: _isArrayIter
});

var _createProperty = function (object, index, value) {
  if (index in object) require$$37.f(object, index, descriptor(0, value));
  else object[index] = value;
};

var _createProperty$1 = /*#__PURE__*/Object.freeze({
	default: _createProperty,
	__moduleExports: _createProperty
});

var ITERATOR$2 = require$$0$3('iterator');

var core_getIteratorMethod = require$$1$1.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || require$$32[classof(it)];
};

var core_getIteratorMethod$1 = /*#__PURE__*/Object.freeze({
	default: core_getIteratorMethod,
	__moduleExports: core_getIteratorMethod
});

var ITERATOR$3 = require$$0$3('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

var _iterDetect$1 = /*#__PURE__*/Object.freeze({
	default: _iterDetect,
	__moduleExports: _iterDetect
});

var call = ( _iterCall$1 && _iterCall ) || _iterCall$1;

var require$$21 = ( _isArrayIter$1 && _isArrayIter ) || _isArrayIter$1;

var createProperty = ( _createProperty$1 && _createProperty ) || _createProperty$1;

var require$$25 = ( core_getIteratorMethod$1 && core_getIteratorMethod ) || core_getIteratorMethod$1;

var require$$33 = ( _iterDetect$1 && _iterDetect ) || _iterDetect$1;

$export$1($export$1.S + $export$1.F * !require$$33(function (iter) { }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = require$$20(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = require$$25(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && require$$21(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

// WebKit Array.of isn't generic
$export$1($export$1.S + $export$1.F * require$$1(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

var _strictMethod = function (method, arg) {
  return !!method && require$$1(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

var _strictMethod$1 = /*#__PURE__*/Object.freeze({
	default: _strictMethod,
	__moduleExports: _strictMethod
});

var require$$0$17 = ( _strictMethod$1 && _strictMethod ) || _strictMethod$1;

// 22.1.3.13 Array.prototype.join(separator)


var arrayJoin = [].join;

// fallback for not array-like strings
$export$1($export$1.P + $export$1.F * (IObject != Object || !require$$0$17(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

var arraySlice$1 = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export$1($export$1.P + $export$1.F * require$$1(function () {
  if (html) arraySlice$1.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = require$$1$2(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice$1.call(this, begin, end);
    var start = require$$15(begin, len);
    var upTo = require$$15(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

var $sort = [].sort;
var test$1 = [1, 2, 3];

$export$1($export$1.P + $export$1.F * (require$$1(function () {
  // IE8-
  test$1.sort(undefined);
}) || !require$$1(function () {
  // V8 bug
  test$1.sort(null);
  // Old WebKit
}) || !require$$0$17($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(require$$20(this))
      : $sort.call(require$$20(this), aFunction(comparefn));
  }
});

var SPECIES = require$$0$3('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

var _arraySpeciesConstructor$1 = /*#__PURE__*/Object.freeze({
	default: _arraySpeciesConstructor,
	__moduleExports: _arraySpeciesConstructor
});

var speciesConstructor = ( _arraySpeciesConstructor$1 && _arraySpeciesConstructor ) || _arraySpeciesConstructor$1;

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (speciesConstructor(original))(length);
};

var _arraySpeciesCreate$1 = /*#__PURE__*/Object.freeze({
	default: _arraySpeciesCreate,
	__moduleExports: _arraySpeciesCreate
});

var asc = ( _arraySpeciesCreate$1 && _arraySpeciesCreate ) || _arraySpeciesCreate$1;

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = require$$20($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var _arrayMethods$1 = /*#__PURE__*/Object.freeze({
	default: _arrayMethods,
	__moduleExports: _arrayMethods
});

var require$$28 = ( _arrayMethods$1 && _arrayMethods ) || _arrayMethods$1;

var $forEach = require$$28(0);
var STRICT = require$$0$17([].forEach, true);

$export$1($export$1.P + $export$1.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

var $map = require$$28(1);

$export$1($export$1.P + $export$1.F * !require$$0$17([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

var $filter = require$$28(2);

$export$1($export$1.P + $export$1.F * !require$$0$17([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

var $some = require$$28(3);

$export$1($export$1.P + $export$1.F * !require$$0$17([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

var $every = require$$28(4);

$export$1($export$1.P + $export$1.F * !require$$0$17([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

var _arrayReduce = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = require$$20(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

var _arrayReduce$1 = /*#__PURE__*/Object.freeze({
	default: _arrayReduce,
	__moduleExports: _arrayReduce
});

var $reduce = ( _arrayReduce$1 && _arrayReduce ) || _arrayReduce$1;

$export$1($export$1.P + $export$1.F * !require$$0$17([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

$export$1($export$1.P + $export$1.F * !require$$0$17([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

var $indexOf = require$$0$5(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export$1($export$1.P + $export$1.F * (NEGATIVE_ZERO || !require$$0$17($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

var $native$1 = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

$export$1($export$1.P + $export$1.F * (NEGATIVE_ZERO$1 || !require$$0$17($native$1)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

var _arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = require$$20(this);
  var len = toLength(O.length);
  var to = require$$15(target, len);
  var from = require$$15(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : require$$15(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

var _arrayCopyWithin$1 = /*#__PURE__*/Object.freeze({
	default: _arrayCopyWithin,
	__moduleExports: _arrayCopyWithin
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require$$0$3('unscopables');
var ArrayProto$1 = Array.prototype;
if (ArrayProto$1[UNSCOPABLES] == undefined) require$$0$1(ArrayProto$1, UNSCOPABLES, {});
var _addToUnscopables = function (key) {
  ArrayProto$1[UNSCOPABLES][key] = true;
};

var _addToUnscopables$1 = /*#__PURE__*/Object.freeze({
	default: _addToUnscopables,
	__moduleExports: _addToUnscopables
});

var require$$36 = ( _arrayCopyWithin$1 && _arrayCopyWithin ) || _arrayCopyWithin$1;

var require$$0$18 = ( _addToUnscopables$1 && _addToUnscopables ) || _addToUnscopables$1;

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


$export$1($export$1.P, 'Array', { copyWithin: require$$36 });

require$$0$18('copyWithin');

var _arrayFill = function fill(value /* , start = 0, end = @length */) {
  var O = require$$20(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = require$$15(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : require$$15(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var _arrayFill$1 = /*#__PURE__*/Object.freeze({
	default: _arrayFill,
	__moduleExports: _arrayFill
});

var require$$35 = ( _arrayFill$1 && _arrayFill ) || _arrayFill$1;

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


$export$1($export$1.P, 'Array', { fill: require$$35 });

require$$0$18('fill');

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $find = require$$28(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export$1($export$1.P + $export$1.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require$$0$18(KEY);

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $find$1 = require$$28(6);
var KEY$1 = 'findIndex';
var forced$1 = true;
// Shouldn't skip holes
if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
$export$1($export$1.P + $export$1.F * forced$1, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require$$0$18(KEY$1);

var SPECIES$1 = require$$0$3('species');

var _setSpecies = function (KEY) {
  var C = require$$2[KEY];
  if (require$$0 && C && !C[SPECIES$1]) require$$37.f(C, SPECIES$1, {
    configurable: true,
    get: function () { return this; }
  });
};

var _setSpecies$1 = /*#__PURE__*/Object.freeze({
	default: _setSpecies,
	__moduleExports: _setSpecies
});

var require$$34 = ( _setSpecies$1 && _setSpecies ) || _setSpecies$1;

require$$34('Array');

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

var _iterStep$1 = /*#__PURE__*/Object.freeze({
	default: _iterStep,
	__moduleExports: _iterStep
});

var step = ( _iterStep$1 && _iterStep ) || _iterStep$1;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = $iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
require$$32.Arguments = require$$32.Array;

require$$0$18('keys');
require$$0$18('values');
require$$0$18('entries');

var es6_array_iterator$1 = /*#__PURE__*/Object.freeze({
	default: es6_array_iterator,
	__moduleExports: es6_array_iterator
});

// 21.2.5.3 get RegExp.prototype.flags

var _flags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var _flags$1 = /*#__PURE__*/Object.freeze({
	default: _flags,
	__moduleExports: _flags
});

var getFlags = ( _flags$1 && _flags ) || _flags$1;

var dP$4 = require$$37.f;
var gOPN$4 = gOPN.f;


var $RegExp = require$$2.RegExp;
var Base$1 = $RegExp;
var proto$2 = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require$$0 && (!CORRECT_NEW || require$$1(function () {
  re2[require$$0$3('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base$1(piRE && !fiU ? p.source : p, f)
        : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? getFlags.call(p) : f)
      , tiRE ? this : proto$2, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP$4($RegExp, key, {
      configurable: true,
      get: function () { return Base$1[key]; },
      set: function (it) { Base$1[key] = it; }
    });
  };
  for (var keys$1 = gOPN$4(Base$1), i = 0; keys$1.length > i;) proxy(keys$1[i++]);
  proto$2.constructor = $RegExp;
  $RegExp.prototype = proto$2;
  redefine(require$$2, 'RegExp', $RegExp);
}

require$$34('RegExp');

// 21.2.5.3 get RegExp.prototype.flags()
if (require$$0 && /./g.flags != 'g') require$$37.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: getFlags
});

var TO_STRING$1 = 'toString';
var $toString$1 = /./[TO_STRING$1];

var define = function (fn) {
  redefine(RegExp.prototype, TO_STRING$1, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require$$1(function () { return $toString$1.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !require$$0 && R instanceof RegExp ? getFlags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString$1.name != TO_STRING$1) {
  define(function toString() {
    return $toString$1.call(this);
  });
}

var _fixReWks = function (KEY, length, exec) {
  var SYMBOL = require$$0$3(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (require$$1(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    require$$0$1(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

var _fixReWks$1 = /*#__PURE__*/Object.freeze({
	default: _fixReWks,
	__moduleExports: _fixReWks
});

var require$$0$19 = ( _fixReWks$1 && _fixReWks ) || _fixReWks$1;

// @@match logic
require$$0$19('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

// @@replace logic
require$$0$19('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

// @@search logic
require$$0$19('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

// @@split logic
require$$0$19('split', 2, function (defined, SPLIT, $split) {
  var isRegExp$$1 = isRegExp;
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp$$1(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _anInstance$1 = /*#__PURE__*/Object.freeze({
	default: _anInstance,
	__moduleExports: _anInstance
});

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : require$$25(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (require$$21(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

var _forOf$1 = /*#__PURE__*/Object.freeze({
	default: _forOf,
	__moduleExports: _forOf
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES$2 = require$$0$3('species');
var _speciesConstructor = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$2]) == undefined ? D : aFunction(S);
};

var _speciesConstructor$1 = /*#__PURE__*/Object.freeze({
	default: _speciesConstructor,
	__moduleExports: _speciesConstructor
});

var process$1 = require$$2.process;
var setTask = require$$2.setImmediate;
var clearTask = require$$2.clearImmediate;
var MessageChannel = require$$2.MessageChannel;
var Dispatch = require$$2.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require$$1$2(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (require$$2.addEventListener && typeof postMessage == 'function' && !require$$2.importScripts) {
    defer = function (id) {
      require$$2.postMessage(id + '', '*');
    };
    require$$2.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in require$$2$1('script')) {
    defer = function (id) {
      html.appendChild(require$$2$1('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};
var _task_1 = _task.set;
var _task_2 = _task.clear;

var _task$1 = /*#__PURE__*/Object.freeze({
	default: _task,
	__moduleExports: _task,
	set: _task_1,
	clear: _task_2
});

var require$$0$20 = ( _task$1 && _task ) || _task$1;

var macrotask = require$$0$20.set;
var Observer = require$$2.MutationObserver || require$$2.WebKitMutationObserver;
var process$2 = require$$2.process;
var Promise$1 = require$$2.Promise;
var isNode = require$$1$2(process$2) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(require$$2.navigator && require$$2.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    var promise = Promise$1.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(require$$2, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

var _microtask$1 = /*#__PURE__*/Object.freeze({
	default: _microtask,
	__moduleExports: _microtask
});

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

var f$7 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$7
};

var _newPromiseCapability$1 = /*#__PURE__*/Object.freeze({
	default: _newPromiseCapability,
	__moduleExports: _newPromiseCapability,
	f: f$7
});

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var _perform$1 = /*#__PURE__*/Object.freeze({
	default: _perform,
	__moduleExports: _perform
});

var newPromiseCapability = ( _newPromiseCapability$1 && _newPromiseCapability ) || _newPromiseCapability$1;

var _promiseResolve = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _promiseResolve$1 = /*#__PURE__*/Object.freeze({
	default: _promiseResolve,
	__moduleExports: _promiseResolve
});

var _redefineAll = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

var _redefineAll$1 = /*#__PURE__*/Object.freeze({
	default: _redefineAll,
	__moduleExports: _redefineAll
});

var require$$8 = ( _anInstance$1 && _anInstance ) || _anInstance$1;

var forOf = ( _forOf$1 && _forOf ) || _forOf$1;

var require$$30 = ( _speciesConstructor$1 && _speciesConstructor ) || _speciesConstructor$1;

var require$$0$21 = ( _microtask$1 && _microtask ) || _microtask$1;

var perform = ( _perform$1 && _perform ) || _perform$1;

var promiseResolve = ( _promiseResolve$1 && _promiseResolve ) || _promiseResolve$1;

var require$$11 = ( _redefineAll$1 && _redefineAll ) || _redefineAll$1;

var task = require$$0$20.set;
var microtask = require$$0$21();



var PROMISE = 'Promise';
var TypeError$1 = require$$2.TypeError;
var process$3 = require$$2.process;
var $Promise = require$$2[PROMISE];
var isNode$1 = classof(process$3) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability$1 = newGenericPromiseCapability = newPromiseCapability.f;

var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require$$0$3('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(require$$2, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode$1) {
          process$3.emit('unhandledRejection', value, promise);
        } else if (handler = require$$2.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = require$$2.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(require$$2, function () {
    var handler;
    if (isNode$1) {
      process$3.emit('rejectionHandled', promise);
    } else if (handler = require$$2.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    require$$8(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require$$11($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability$1(require$$30(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$1 ? process$3.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE$1, { Promise: $Promise });
setToStringTag($Promise, PROMISE);
require$$34(PROMISE);
Wrapper = require$$1$1[PROMISE];

// statics
$export$1($export$1.S + $export$1.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$1($export$1.S + $export$1.F * (require$$0$4 || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(require$$0$4 && this === Wrapper ? $Promise : this, x);
  }
});
$export$1($export$1.S + $export$1.F * !(USE_NATIVE$1 && require$$33(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

var _validateCollection = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var _validateCollection$1 = /*#__PURE__*/Object.freeze({
	default: _validateCollection,
	__moduleExports: _validateCollection
});

var validate = ( _validateCollection$1 && _validateCollection ) || _validateCollection$1;

var dP$5 = require$$37.f;









var fastKey = require$$0$8.fastKey;

var SIZE = require$$0 ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

var _collectionStrong = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      require$$8(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    require$$11(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (require$$0) dP$5(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    require$$34(NAME);
  }
};
var _collectionStrong_1 = _collectionStrong.getConstructor;
var _collectionStrong_2 = _collectionStrong.def;
var _collectionStrong_3 = _collectionStrong.getEntry;
var _collectionStrong_4 = _collectionStrong.setStrong;

var _collectionStrong$1 = /*#__PURE__*/Object.freeze({
	default: _collectionStrong,
	__moduleExports: _collectionStrong,
	getConstructor: _collectionStrong_1,
	def: _collectionStrong_2,
	getEntry: _collectionStrong_3,
	setStrong: _collectionStrong_4
});

var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = require$$2[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !require$$1(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    require$$11(C.prototype, methods);
    require$$0$8.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = require$$1(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = require$$33(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && require$$1(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        require$$8(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export$1($export$1.G + $export$1.W + $export$1.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var _collection$1 = /*#__PURE__*/Object.freeze({
	default: _collection,
	__moduleExports: _collection
});

var strong = ( _collectionStrong$1 && _collectionStrong ) || _collectionStrong$1;

var require$$0$22 = ( _collection$1 && _collection ) || _collection$1;

var MAP = 'Map';

// 23.1 Map Objects
var es6_map = require$$0$22(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

var es6_map$1 = /*#__PURE__*/Object.freeze({
	default: es6_map,
	__moduleExports: es6_map
});

var SET = 'Set';

// 23.2 Set Objects
var es6_set = require$$0$22(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

var es6_set$1 = /*#__PURE__*/Object.freeze({
	default: es6_set,
	__moduleExports: es6_set
});

var getWeak = require$$0$8.getWeak;







var arrayFind = require$$28(5);
var arrayFindIndex = require$$28(6);
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      require$$8(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id$1++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    require$$11(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has$$1(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
var _collectionWeak_1 = _collectionWeak.getConstructor;
var _collectionWeak_2 = _collectionWeak.def;
var _collectionWeak_3 = _collectionWeak.ufstore;

var _collectionWeak$1 = /*#__PURE__*/Object.freeze({
	default: _collectionWeak,
	__moduleExports: _collectionWeak,
	getConstructor: _collectionWeak_1,
	def: _collectionWeak_2,
	ufstore: _collectionWeak_3
});

var weak = ( _collectionWeak$1 && _collectionWeak ) || _collectionWeak$1;

var es6_weakMap = createCommonjsModule(function (module) {
var each = require$$28(0);







var WEAK_MAP = 'WeakMap';
var getWeak = require$$0$8.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require$$0$22(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (require$$1(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  require$$0$8.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});

var es6_weakMap$1 = /*#__PURE__*/Object.freeze({
	default: es6_weakMap,
	__moduleExports: es6_weakMap
});

var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require$$0$22(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(require$$2.ArrayBuffer && require$$2.DataView);
var CONSTR = ABV;
var i$1 = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i$1 < l) {
  if (Typed = require$$2[TypedArrayConstructors[i$1++]]) {
    require$$0$1(Typed.prototype, TYPED, true);
    require$$0$1(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

var _typed = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};
var _typed_1 = _typed.ABV;
var _typed_2 = _typed.CONSTR;
var _typed_3 = _typed.TYPED;
var _typed_4 = _typed.VIEW;

var _typed$1 = /*#__PURE__*/Object.freeze({
	default: _typed,
	__moduleExports: _typed,
	ABV: _typed_1,
	CONSTR: _typed_2,
	TYPED: _typed_3,
	VIEW: _typed_4
});

// https://tc39.github.io/ecma262/#sec-toindex


var _toIndex = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

var _toIndex$1 = /*#__PURE__*/Object.freeze({
	default: _toIndex,
	__moduleExports: _toIndex
});

var require$$5 = ( _typed$1 && _typed ) || _typed$1;

var require$$14 = ( _toIndex$1 && _toIndex ) || _toIndex$1;

var _typedBuffer = createCommonjsModule(function (module, exports) {











var gOPN$$1 = gOPN.f;
var dP = require$$37.f;


var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = require$$2[ARRAY_BUFFER];
var $DataView = require$$2[DATA_VIEW];
var Math = require$$2.Math;
var RangeError = require$$2.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = require$$2.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = require$$0 ? '_b' : BUFFER;
var $LENGTH = require$$0 ? '_l' : BYTE_LENGTH;
var $OFFSET = require$$0 ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = require$$14(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = require$$14(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!require$$5.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    require$$8(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = require$$14(length);
    this._b = require$$35.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    require$$8(this, $DataView, DATA_VIEW);
    require$$8(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (require$$0) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  require$$11($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!require$$1(function () {
    $ArrayBuffer(1);
  }) || !require$$1(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || require$$1(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      require$$8(this, $ArrayBuffer);
      return new BaseBuffer(require$$14(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN$$1(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) require$$0$1($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!require$$0$4) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) require$$11($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
require$$0$1($DataView[PROTOTYPE], require$$5.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
});

var _typedBuffer$1 = /*#__PURE__*/Object.freeze({
	default: _typedBuffer,
	__moduleExports: _typedBuffer
});

var require$$6 = ( _typedBuffer$1 && _typedBuffer ) || _typedBuffer$1;

var ArrayBuffer = require$$2.ArrayBuffer;

var $ArrayBuffer = require$$6.ArrayBuffer;
var $DataView = require$$6.DataView;
var $isView = require$$5.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW$1 = require$$5.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export$1($export$1.G + $export$1.W + $export$1.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export$1($export$1.S + $export$1.F * !require$$5.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW$1 in it;
  }
});

$export$1($export$1.P + $export$1.U + $export$1.F * require$$1(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = require$$15(start, len);
    var final = require$$15(end === undefined ? len : end, len);
    var result = new (require$$30(this, $ArrayBuffer))(toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require$$34(ARRAY_BUFFER);

$export$1($export$1.G + $export$1.W + $export$1.F * !require$$5.ABV, {
  DataView: require$$6.DataView
});

var require$$31 = ( es6_array_iterator$1 && es6_array_iterator ) || es6_array_iterator$1;

var _typedArray = createCommonjsModule(function (module) {
if (require$$0) {
  var LIBRARY = require$$0$4;
  var global = require$$2;
  var fails = require$$1;
  var $export = $export$1;
  var $typed = require$$5;
  var $buffer = require$$6;
  var ctx$$1 = ctx;
  var anInstance = require$$8;
  var propertyDesc = descriptor;
  var hide = require$$0$1;
  var redefineAll = require$$11;
  var toInteger$$1 = toInteger;
  var toLength$$1 = toLength;
  var toIndex = require$$14;
  var toAbsoluteIndex = require$$15;
  var toPrimitive = require$$16;
  var has$$1 = has;
  var classof$$1 = classof;
  var isObject$$1 = isObject;
  var toObject = require$$20;
  var isArrayIter = require$$21;
  var create$$1 = create;
  var getPrototypeOf = require$$23;
  var gOPN$$1 = gOPN.f;
  var getIterFn = require$$25;
  var uid$$1 = uid;
  var wks = require$$0$3;
  var createArrayMethod = require$$28;
  var createArrayIncludes = require$$0$5;
  var speciesConstructor = require$$30;
  var ArrayIterators = require$$31;
  var Iterators = require$$32;
  var $iterDetect = require$$33;
  var setSpecies = require$$34;
  var arrayFill = require$$35;
  var arrayCopyWithin = require$$36;
  var $DP = require$$37;
  var $GOPD = require$$38;
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid$$1('typed_constructor');
  var DEF_CONSTRUCTOR = uid$$1('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger$$1(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject$$1(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject$$1(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx$$1(mapfn, arguments[2], 2);
    for (i = 0, length = toLength$$1(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength$$1((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength$$1(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject$$1(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject$$1(desc)
      && has$$1(desc, 'value')
      && !has$$1(desc, 'get')
      && !has$$1(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has$$1(desc, 'writable') || desc.writable)
      && (!has$$1(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject$$1(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof$$1(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength$$1($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create$$1($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject$$1(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof$$1(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN$$1(Base).concat(gOPN$$1(TAC)) : gOPN$$1(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };
});

var _typedArray$1 = /*#__PURE__*/Object.freeze({
	default: _typedArray,
	__moduleExports: _typedArray
});

var require$$0$23 = ( _typedArray$1 && _typedArray ) || _typedArray$1;

require$$0$23('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

require$$0$23('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

require$$0$23('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

require$$0$23('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

require$$0$23('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

require$$0$23('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

require$$0$23('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

require$$0$23('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

require$$0$23('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)



var rApply = (require$$2.Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export$1($export$1.S + $export$1.F * !require$$1(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])







var rConstruct = (require$$2.Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = require$$1(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !require$$1(function () {
  rConstruct(function () { /* empty */ });
});

$export$1($export$1.S + $export$1.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)





// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export$1($export$1.S + $export$1.F * require$$1(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(require$$37.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = require$$16(propertyKey, true);
    anObject(attributes);
    try {
      require$$37.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

// 26.1.4 Reflect.deleteProperty(target, propertyKey)

var gOPD$3 = require$$38.f;


$export$1($export$1.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD$3(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

// 26.1.5 Reflect.enumerate(target)


var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
$iterCreate(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export$1($export$1.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

// 26.1.6 Reflect.get(target, propertyKey [, receiver])







function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = require$$38.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = require$$23(target))) return get(proto, propertyKey, receiver);
}

$export$1($export$1.S, 'Reflect', { get: get });

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)




$export$1($export$1.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return require$$38.f(anObject(target), propertyKey);
  }
});

// 26.1.8 Reflect.getPrototypeOf(target)




$export$1($export$1.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return require$$23(anObject(target));
  }
});

// 26.1.9 Reflect.has(target, propertyKey)


$export$1($export$1.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

// 26.1.10 Reflect.isExtensible(target)


var $isExtensible = Object.isExtensible;

$export$1($export$1.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

// all object keys, includes non-enumerable and symbols



var Reflect$1 = require$$2.Reflect;
var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

var _ownKeys$1 = /*#__PURE__*/Object.freeze({
	default: _ownKeys,
	__moduleExports: _ownKeys
});

var ownKeys = ( _ownKeys$1 && _ownKeys ) || _ownKeys$1;

// 26.1.11 Reflect.ownKeys(target)


$export$1($export$1.S, 'Reflect', { ownKeys: ownKeys });

// 26.1.12 Reflect.preventExtensions(target)


var $preventExtensions = Object.preventExtensions;

$export$1($export$1.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])









function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = require$$38.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = require$$23(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = descriptor(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = require$$38.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      require$$37.f(receiver, propertyKey, existingDescriptor);
    } else require$$37.f(receiver, propertyKey, descriptor(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export$1($export$1.S, 'Reflect', { set: set });

// 26.1.14 Reflect.setPrototypeOf(target, proto)



if (require$$0$12) $export$1($export$1.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    require$$0$12.check(target, proto);
    try {
      require$$0$12.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

// https://github.com/tc39/Array.prototype.includes

var $includes = require$$0$5(true);

$export$1($export$1.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require$$0$18('includes');

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray




var IS_CONCAT_SPREADABLE = require$$0$3('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

var _flattenIntoArray = flattenIntoArray;

var _flattenIntoArray$1 = /*#__PURE__*/Object.freeze({
	default: _flattenIntoArray,
	__moduleExports: _flattenIntoArray
});

var flattenIntoArray$1 = ( _flattenIntoArray$1 && _flattenIntoArray ) || _flattenIntoArray$1;

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap







$export$1($export$1.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = require$$20(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = asc(O, 0);
    flattenIntoArray$1(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require$$0$18('flatMap');

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten







$export$1($export$1.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = require$$20(this);
    var sourceLen = toLength(O.length);
    var A = asc(O, 0);
    flattenIntoArray$1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

require$$0$18('flatten');

// https://github.com/mathiasbynens/String.prototype.at

var $at$2 = require$$0$14(true);

$export$1($export$1.P, 'String', {
  at: function at(pos) {
    return $at$2(this, pos);
  }
});

// https://github.com/tc39/proposal-string-pad-start-end




var _stringPad = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

var _stringPad$1 = /*#__PURE__*/Object.freeze({
	default: _stringPad,
	__moduleExports: _stringPad
});

var navigator = require$$2.navigator;

var _userAgent = navigator && navigator.userAgent || '';

var _userAgent$1 = /*#__PURE__*/Object.freeze({
	default: _userAgent,
	__moduleExports: _userAgent
});

var $pad = ( _stringPad$1 && _stringPad ) || _stringPad$1;

var userAgent = ( _userAgent$1 && _userAgent ) || _userAgent$1;

// https://github.com/tc39/proposal-string-pad-start-end




// https://github.com/zloirock/core-js/issues/280
$export$1($export$1.P + $export$1.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

// https://github.com/tc39/proposal-string-pad-start-end




// https://github.com/zloirock/core-js/issues/280
$export$1($export$1.P + $export$1.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require$$1$5('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require$$1$5('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

// https://tc39.github.io/String.prototype.matchAll/





var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

$iterCreate($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export$1($export$1.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

require$$0$9('asyncIterator');

require$$0$9('observable');

// https://github.com/tc39/proposal-object-getownpropertydescriptors






$export$1($export$1.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = require$$38.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

var isEnum$1 = require$$0$7.f;
var _objectToArray = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum$1.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

var _objectToArray$1 = /*#__PURE__*/Object.freeze({
	default: _objectToArray,
	__moduleExports: _objectToArray
});

var require$$0$24 = ( _objectToArray$1 && _objectToArray ) || _objectToArray$1;

// https://github.com/tc39/proposal-object-values-entries

var $values = require$$0$24(false);

$export$1($export$1.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

// https://github.com/tc39/proposal-object-values-entries

var $entries = require$$0$24(true);

$export$1($export$1.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

// Forced replacement prototype accessors methods
var _objectForcedPam = require$$0$4 || !require$$1(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete require$$2[K];
});

var _objectForcedPam$1 = /*#__PURE__*/Object.freeze({
	default: _objectForcedPam,
	__moduleExports: _objectForcedPam
});

var require$$2$3 = ( _objectForcedPam$1 && _objectForcedPam ) || _objectForcedPam$1;

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require$$0 && $export$1($export$1.P + require$$2$3, 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    require$$37.f(require$$20(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require$$0 && $export$1($export$1.P + require$$2$3, 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    require$$37.f(require$$20(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

var getOwnPropertyDescriptor = require$$38.f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require$$0 && $export$1($export$1.P + require$$2$3, 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = require$$20(this);
    var K = require$$16(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = require$$23(O));
  }
});

var getOwnPropertyDescriptor$1 = require$$38.f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require$$0 && $export$1($export$1.P + require$$2$3, 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = require$$20(this);
    var K = require$$16(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor$1(O, K)) return D.set;
    } while (O = require$$23(O));
  }
});

var _arrayFromIterable = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

var _arrayFromIterable$1 = /*#__PURE__*/Object.freeze({
	default: _arrayFromIterable,
	__moduleExports: _arrayFromIterable
});

var from = ( _arrayFromIterable$1 && _arrayFromIterable ) || _arrayFromIterable$1;

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var _collectionToJson = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

var _collectionToJson$1 = /*#__PURE__*/Object.freeze({
	default: _collectionToJson,
	__moduleExports: _collectionToJson
});

var require$$0$25 = ( _collectionToJson$1 && _collectionToJson ) || _collectionToJson$1;

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


$export$1($export$1.P + $export$1.R, 'Map', { toJSON: require$$0$25('Map') });

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


$export$1($export$1.P + $export$1.R, 'Set', { toJSON: require$$0$25('Set') });

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function (COLLECTION) {
  $export$1($export$1.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

var _setCollectionOf$1 = /*#__PURE__*/Object.freeze({
	default: _setCollectionOf,
	__moduleExports: _setCollectionOf
});

var require$$0$26 = ( _setCollectionOf$1 && _setCollectionOf ) || _setCollectionOf$1;

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require$$0$26('Map');

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require$$0$26('Set');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require$$0$26('WeakMap');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
require$$0$26('WeakSet');

// https://tc39.github.io/proposal-setmap-offrom/





var _setCollectionFrom = function (COLLECTION) {
  $export$1($export$1.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

var _setCollectionFrom$1 = /*#__PURE__*/Object.freeze({
	default: _setCollectionFrom,
	__moduleExports: _setCollectionFrom
});

var require$$0$27 = ( _setCollectionFrom$1 && _setCollectionFrom ) || _setCollectionFrom$1;

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require$$0$27('Map');

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require$$0$27('Set');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require$$0$27('WeakMap');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
require$$0$27('WeakSet');

// https://github.com/tc39/proposal-global


$export$1($export$1.G, { global: require$$2 });

// https://github.com/tc39/proposal-global


$export$1($export$1.S, 'System', { global: require$$2 });

// https://github.com/ljharb/proposal-is-error



$export$1($export$1.S, 'Error', {
  isError: function isError(it) {
    return require$$1$2(it) === 'Error';
  }
});

// https://rwaldron.github.io/proposal-math-extensions/


$export$1($export$1.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

// https://rwaldron.github.io/proposal-math-extensions/


$export$1($export$1.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

// https://rwaldron.github.io/proposal-math-extensions/

var RAD_PER_DEG = 180 / Math.PI;

$export$1($export$1.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

// https://rwaldron.github.io/proposal-math-extensions/
var _mathScale = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

var _mathScale$1 = /*#__PURE__*/Object.freeze({
	default: _mathScale,
	__moduleExports: _mathScale
});

var require$$0$28 = ( _mathScale$1 && _mathScale ) || _mathScale$1;

// https://rwaldron.github.io/proposal-math-extensions/




$export$1($export$1.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(require$$0$28(x, inLow, inHigh, outLow, outHigh));
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


$export$1($export$1.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


$export$1($export$1.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


$export$1($export$1.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

// https://rwaldron.github.io/proposal-math-extensions/


$export$1($export$1.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

// https://rwaldron.github.io/proposal-math-extensions/

var DEG_PER_RAD = Math.PI / 180;

$export$1($export$1.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

// https://rwaldron.github.io/proposal-math-extensions/


$export$1($export$1.S, 'Math', { scale: require$$0$28 });

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


$export$1($export$1.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

// http://jfbastien.github.io/papers/Math.signbit.html


$export$1($export$1.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });

$export$1($export$1.P + $export$1.R, 'Promise', { 'finally': function (onFinally) {
  var C = require$$30(this, require$$1$1.Promise || require$$2.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

// https://github.com/tc39/proposal-promise-try




$export$1($export$1.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

var Map = ( es6_map$1 && es6_map ) || es6_map$1;

var require$$1$6 = ( es6_weakMap$1 && es6_weakMap ) || es6_weakMap$1;

var shared$1 = require$$0$2('metadata');
var store$1 = shared$1.store || (shared$1.store = new (require$$1$6)());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store$1.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store$1.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp$3 = function (O) {
  $export$1($export$1.S, 'Reflect', O);
};

var _metadata = {
  store: store$1,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp$3
};
var _metadata_1 = _metadata.store;
var _metadata_2 = _metadata.map;
var _metadata_3 = _metadata.has;
var _metadata_4 = _metadata.get;
var _metadata_5 = _metadata.set;
var _metadata_6 = _metadata.keys;
var _metadata_7 = _metadata.key;
var _metadata_8 = _metadata.exp;

var _metadata$1 = /*#__PURE__*/Object.freeze({
	default: _metadata,
	__moduleExports: _metadata,
	store: _metadata_1,
	map: _metadata_2,
	has: _metadata_3,
	get: _metadata_4,
	set: _metadata_5,
	keys: _metadata_6,
	key: _metadata_7,
	exp: _metadata_8
});

var $metadata = ( _metadata$1 && _metadata ) || _metadata$1;

var toMetaKey$1 = $metadata.key;
var ordinaryDefineOwnMetadata$1 = $metadata.set;

$metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata$1(metadataKey, metadataValue, anObject(target), toMetaKey$1(targetKey));
} });

var toMetaKey$2 = $metadata.key;
var getOrCreateMetadataMap$1 = $metadata.map;
var store$2 = $metadata.store;

$metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey$2(arguments[2]);
  var metadataMap = getOrCreateMetadataMap$1(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store$2.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store$2['delete'](target);
} });

var ordinaryHasOwnMetadata$1 = $metadata.has;
var ordinaryGetOwnMetadata$1 = $metadata.get;
var toMetaKey$3 = $metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata$1(MetadataKey, O, P);
  var parent = require$$23(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

$metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey$3(arguments[2]));
} });

var Set = ( es6_set$1 && es6_set ) || es6_set$1;

var ordinaryOwnMetadataKeys$1 = $metadata.keys;
var toMetaKey$4 = $metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys$1(O, P);
  var parent = require$$23(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

$metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey$4(arguments[1]));
} });

var ordinaryGetOwnMetadata$2 = $metadata.get;
var toMetaKey$5 = $metadata.key;

$metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata$2(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey$5(arguments[2]));
} });

var ordinaryOwnMetadataKeys$2 = $metadata.keys;
var toMetaKey$6 = $metadata.key;

$metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys$2(anObject(target), arguments.length < 2 ? undefined : toMetaKey$6(arguments[1]));
} });

var ordinaryHasOwnMetadata$2 = $metadata.has;
var toMetaKey$7 = $metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = require$$23(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

$metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey$7(arguments[2]));
} });

var ordinaryHasOwnMetadata$3 = $metadata.has;
var toMetaKey$8 = $metadata.key;

$metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata$3(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey$8(arguments[2]));
} });

var toMetaKey$9 = $metadata.key;
var ordinaryDefineOwnMetadata$2 = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata$2(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey$9(targetKey)
    );
  };
} });

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask

var microtask$1 = require$$0$21();
var process$4 = require$$2.process;
var isNode$2 = require$$1$2(process$4) == 'process';

$export$1($export$1.G, {
  asap: function asap(fn) {
    var domain = isNode$2 && process$4.domain;
    microtask$1(domain ? domain.bind(fn) : fn);
  }
});

// https://github.com/zenparsing/es-observable



var microtask$2 = require$$0$21();
var OBSERVABLE = require$$0$3('observable');






var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = require$$11({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = require$$11({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  require$$8(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

require$$11($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (require$$1$1.Promise || require$$2.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

require$$11($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask$2(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask$2(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

require$$0$1($Observable.prototype, OBSERVABLE, function () { return this; });

$export$1($export$1.G, { Observable: $Observable });

require$$34('Observable');

// ie9- setTimeout & setInterval additional parameters fix



var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap$1 = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export$1($export$1.G + $export$1.B + $export$1.F * MSIE, {
  setTimeout: wrap$1(require$$2.setTimeout),
  setInterval: wrap$1(require$$2.setInterval)
});

$export$1($export$1.G + $export$1.B, {
  setImmediate: require$$0$20.set,
  clearImmediate: require$$0$20.clear
});

var ITERATOR$4 = require$$0$3('iterator');
var TO_STRING_TAG = require$$0$3('toStringTag');
var ArrayValues = require$$32.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
  var NAME$1 = collections[i$2];
  var explicit = DOMIterables[NAME$1];
  var Collection = require$$2[NAME$1];
  var proto$3 = Collection && Collection.prototype;
  var key$1;
  if (proto$3) {
    if (!proto$3[ITERATOR$4]) require$$0$1(proto$3, ITERATOR$4, ArrayValues);
    if (!proto$3[TO_STRING_TAG]) require$$0$1(proto$3, TO_STRING_TAG, NAME$1);
    require$$32[NAME$1] = ArrayValues;
    if (explicit) for (key$1 in require$$31) if (!proto$3[key$1]) redefine(proto$3, key$1, require$$31[key$1], true);
  }
}

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof commonjsGlobal === "object" ? commonjsGlobal :
  typeof window === "object" ? window :
  typeof self === "object" ? self : commonjsGlobal
);
});

var _replacer = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

var _replacer$1 = /*#__PURE__*/Object.freeze({
	default: _replacer,
	__moduleExports: _replacer
});

var require$$0$29 = ( _replacer$1 && _replacer ) || _replacer$1;

// https://github.com/benjamingr/RexExp.escape

var $re = require$$0$29(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export$1($export$1.S, 'RegExp', { escape: function escape(it) { return $re(it); } });

var _escape = require$$1$1.RegExp.escape;

if (commonjsGlobal._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
commonjsGlobal._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define$1(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define$1(String.prototype, "padLeft", "".padStart);
define$1(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define$1(Array, key, Function.call.bind([][key]));
});

var runtime$2 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);
});

var runtime$3 = /*#__PURE__*/Object.freeze({
	default: runtime$2,
	__moduleExports: runtime$2
});

var require$$0$30 = ( runtime$3 && runtime$2 ) || runtime$3;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

var runtimeModule = require$$0$30;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

var runtimeModule$1 = /*#__PURE__*/Object.freeze({
	default: runtimeModule,
	__moduleExports: runtimeModule
});

var require$$0$31 = ( runtimeModule$1 && runtimeModule ) || runtimeModule$1;

var regenerator = require$$0$31;

// 7.1.4 ToInteger
var ceil$1 = Math.ceil;
var floor$3 = Math.floor;
var _toInteger$2 = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor$3 : ceil$1)(it);
};

var _toInteger$3 = /*#__PURE__*/Object.freeze({
	default: _toInteger$2,
	__moduleExports: _toInteger$2
});

// 7.2.1 RequireObjectCoercible(argument)
var _defined$2 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

var _defined$3 = /*#__PURE__*/Object.freeze({
	default: _defined$2,
	__moduleExports: _defined$2
});

var toInteger$1 = ( _toInteger$3 && _toInteger$2 ) || _toInteger$3;

var defined$1 = ( _defined$3 && _defined$2 ) || _defined$3;

// true  -> String#at
// false -> String#codePointAt
var _stringAt$2 = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined$1(that));
    var i = toInteger$1(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _stringAt$3 = /*#__PURE__*/Object.freeze({
	default: _stringAt$2,
	__moduleExports: _stringAt$2
});

var _library$2 = true;

var _library$3 = /*#__PURE__*/Object.freeze({
	default: _library$2,
	__moduleExports: _library$2
});

var _global$2 = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _global$3 = /*#__PURE__*/Object.freeze({
	default: _global$2,
	__moduleExports: _global$2
});

var _core$2 = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1$1 = _core$2.version;

var _core$3 = /*#__PURE__*/Object.freeze({
	default: _core$2,
	__moduleExports: _core$2,
	version: _core_1$1
});

var _aFunction$2 = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

var _aFunction$3 = /*#__PURE__*/Object.freeze({
	default: _aFunction$2,
	__moduleExports: _aFunction$2
});

var aFunction$1 = ( _aFunction$3 && _aFunction$2 ) || _aFunction$3;

// optional / simple context binding

var _ctx$2 = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _ctx$3 = /*#__PURE__*/Object.freeze({
	default: _ctx$2,
	__moduleExports: _ctx$2
});

var _isObject$2 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _isObject$3 = /*#__PURE__*/Object.freeze({
	default: _isObject$2,
	__moduleExports: _isObject$2
});

var isObject$1 = ( _isObject$3 && _isObject$2 ) || _isObject$3;

var _anObject$2 = function (it) {
  if (!isObject$1(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _anObject$3 = /*#__PURE__*/Object.freeze({
	default: _anObject$2,
	__moduleExports: _anObject$2
});

var _fails$2 = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

var _fails$3 = /*#__PURE__*/Object.freeze({
	default: _fails$2,
	__moduleExports: _fails$2
});

var require$$1$7 = ( _fails$3 && _fails$2 ) || _fails$3;

// Thank's IE8 for his funny defineProperty
var _descriptors$2 = !require$$1$7(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var _descriptors$3 = /*#__PURE__*/Object.freeze({
	default: _descriptors$2,
	__moduleExports: _descriptors$2
});

var require$$0$32 = ( _global$3 && _global$2 ) || _global$3;

var document$3 = require$$0$32.document;
// typeof document.createElement is 'object' in old IE
var is$1 = isObject$1(document$3) && isObject$1(document$3.createElement);
var _domCreate$2 = function (it) {
  return is$1 ? document$3.createElement(it) : {};
};

var _domCreate$3 = /*#__PURE__*/Object.freeze({
	default: _domCreate$2,
	__moduleExports: _domCreate$2
});

var require$$0$33 = ( _descriptors$3 && _descriptors$2 ) || _descriptors$3;

var require$$2$4 = ( _domCreate$3 && _domCreate$2 ) || _domCreate$3;

var _ie8DomDefine$2 = !require$$0$33 && !require$$1$7(function () {
  return Object.defineProperty(require$$2$4('div'), 'a', { get: function () { return 7; } }).a != 7;
});

var _ie8DomDefine$3 = /*#__PURE__*/Object.freeze({
	default: _ie8DomDefine$2,
	__moduleExports: _ie8DomDefine$2
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive$2 = function (it, S) {
  if (!isObject$1(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$1(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject$1(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$1(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var _toPrimitive$3 = /*#__PURE__*/Object.freeze({
	default: _toPrimitive$2,
	__moduleExports: _toPrimitive$2
});

var anObject$1 = ( _anObject$3 && _anObject$2 ) || _anObject$3;

var IE8_DOM_DEFINE$1 = ( _ie8DomDefine$3 && _ie8DomDefine$2 ) || _ie8DomDefine$3;

var toPrimitive = ( _toPrimitive$3 && _toPrimitive$2 ) || _toPrimitive$3;

var dP$6 = Object.defineProperty;

var f$8 = require$$0$33 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPrimitive(P, true);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return dP$6(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp$2 = {
	f: f$8
};

var _objectDp$3 = /*#__PURE__*/Object.freeze({
	default: _objectDp$2,
	__moduleExports: _objectDp$2,
	f: f$8
});

var _propertyDesc$2 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _propertyDesc$3 = /*#__PURE__*/Object.freeze({
	default: _propertyDesc$2,
	__moduleExports: _propertyDesc$2
});

var dP$7 = ( _objectDp$3 && _objectDp$2 ) || _objectDp$3;

var descriptor$1 = ( _propertyDesc$3 && _propertyDesc$2 ) || _propertyDesc$3;

var _hide$2 = require$$0$33 ? function (object, key, value) {
  return dP$7.f(object, key, descriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var _hide$3 = /*#__PURE__*/Object.freeze({
	default: _hide$2,
	__moduleExports: _hide$2
});

var hasOwnProperty$1 = {}.hasOwnProperty;
var _has$2 = function (it, key) {
  return hasOwnProperty$1.call(it, key);
};

var _has$3 = /*#__PURE__*/Object.freeze({
	default: _has$2,
	__moduleExports: _has$2
});

var require$$1$8 = ( _core$3 && _core$2 ) || _core$3;

var ctx$1 = ( _ctx$3 && _ctx$2 ) || _ctx$3;

var require$$0$34 = ( _hide$3 && _hide$2 ) || _hide$3;

var has$1 = ( _has$3 && _has$2 ) || _has$3;

var PROTOTYPE$3 = 'prototype';

var $export$2 = function (type, name, source) {
  var IS_FORCED = type & $export$2.F;
  var IS_GLOBAL = type & $export$2.G;
  var IS_STATIC = type & $export$2.S;
  var IS_PROTO = type & $export$2.P;
  var IS_BIND = type & $export$2.B;
  var IS_WRAP = type & $export$2.W;
  var exports = IS_GLOBAL ? require$$1$8 : require$$1$8[name] || (require$$1$8[name] = {});
  var expProto = exports[PROTOTYPE$3];
  var target = IS_GLOBAL ? require$$0$32 : IS_STATIC ? require$$0$32[name] : (require$$0$32[name] || {})[PROTOTYPE$3];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has$1(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx$1(out, require$$0$32)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE$3] = C[PROTOTYPE$3];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx$1(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export$2.R && expProto && !expProto[key]) require$$0$34(expProto, key, out);
    }
  }
};
// type bitmap
$export$2.F = 1;   // forced
$export$2.G = 2;   // global
$export$2.S = 4;   // static
$export$2.P = 8;   // proto
$export$2.B = 16;  // bind
$export$2.W = 32;  // wrap
$export$2.U = 64;  // safe
$export$2.R = 128; // real proto method for `library`
var _export$2 = $export$2;

var _export$3 = /*#__PURE__*/Object.freeze({
	default: _export$2,
	__moduleExports: _export$2
});

var _redefine$2 = require$$0$34;

var _redefine$3 = /*#__PURE__*/Object.freeze({
	default: _redefine$2,
	__moduleExports: _redefine$2
});

var _iterators$2 = {};

var _iterators$3 = /*#__PURE__*/Object.freeze({
	default: _iterators$2,
	__moduleExports: _iterators$2
});

var toString$2 = {}.toString;

var _cof$2 = function (it) {
  return toString$2.call(it).slice(8, -1);
};

var _cof$3 = /*#__PURE__*/Object.freeze({
	default: _cof$2,
	__moduleExports: _cof$2
});

var cof = ( _cof$3 && _cof$2 ) || _cof$3;

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject$2 = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

var _iobject$3 = /*#__PURE__*/Object.freeze({
	default: _iobject$2,
	__moduleExports: _iobject$2
});

var IObject$1 = ( _iobject$3 && _iobject$2 ) || _iobject$3;

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject$2 = function (it) {
  return IObject$1(defined$1(it));
};

var _toIobject$3 = /*#__PURE__*/Object.freeze({
	default: _toIobject$2,
	__moduleExports: _toIobject$2
});

// 7.1.15 ToLength

var min$2 = Math.min;
var _toLength$2 = function (it) {
  return it > 0 ? min$2(toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var _toLength$3 = /*#__PURE__*/Object.freeze({
	default: _toLength$2,
	__moduleExports: _toLength$2
});

var max$1 = Math.max;
var min$3 = Math.min;
var _toAbsoluteIndex$2 = function (index, length) {
  index = toInteger$1(index);
  return index < 0 ? max$1(index + length, 0) : min$3(index, length);
};

var _toAbsoluteIndex$3 = /*#__PURE__*/Object.freeze({
	default: _toAbsoluteIndex$2,
	__moduleExports: _toAbsoluteIndex$2
});

var toIObject$1 = ( _toIobject$3 && _toIobject$2 ) || _toIobject$3;

var toLength$1 = ( _toLength$3 && _toLength$2 ) || _toLength$3;

var toAbsoluteIndex = ( _toAbsoluteIndex$3 && _toAbsoluteIndex$2 ) || _toAbsoluteIndex$3;

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject$1($this);
    var length = toLength$1(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _arrayIncludes$3 = /*#__PURE__*/Object.freeze({
	default: _arrayIncludes$2,
	__moduleExports: _arrayIncludes$2
});

var SHARED$1 = '__core-js_shared__';
var store$3 = require$$0$32[SHARED$1] || (require$$0$32[SHARED$1] = {});
var _shared$2 = function (key) {
  return store$3[key] || (store$3[key] = {});
};

var _shared$3 = /*#__PURE__*/Object.freeze({
	default: _shared$2,
	__moduleExports: _shared$2
});

var id$2 = 0;
var px$1 = Math.random();
var _uid$2 = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$2 + px$1).toString(36));
};

var _uid$3 = /*#__PURE__*/Object.freeze({
	default: _uid$2,
	__moduleExports: _uid$2
});

var require$$0$35 = ( _shared$3 && _shared$2 ) || _shared$3;

var uid$1 = ( _uid$3 && _uid$2 ) || _uid$3;

var shared$2 = require$$0$35('keys');

var _sharedKey$2 = function (key) {
  return shared$2[key] || (shared$2[key] = uid$1(key));
};

var _sharedKey$3 = /*#__PURE__*/Object.freeze({
	default: _sharedKey$2,
	__moduleExports: _sharedKey$2
});

var require$$0$36 = ( _arrayIncludes$3 && _arrayIncludes$2 ) || _arrayIncludes$3;

var require$$1$9 = ( _sharedKey$3 && _sharedKey$2 ) || _sharedKey$3;

var arrayIndexOf$1 = require$$0$36(false);
var IE_PROTO$3 = require$$1$9('IE_PROTO');

var _objectKeysInternal$2 = function (object, names) {
  var O = toIObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$3) has$1(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$1(O, key = names[i++])) {
    ~arrayIndexOf$1(result, key) || result.push(key);
  }
  return result;
};

var _objectKeysInternal$3 = /*#__PURE__*/Object.freeze({
	default: _objectKeysInternal$2,
	__moduleExports: _objectKeysInternal$2
});

// IE 8- don't enum bug keys
var _enumBugKeys$2 = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

var _enumBugKeys$3 = /*#__PURE__*/Object.freeze({
	default: _enumBugKeys$2,
	__moduleExports: _enumBugKeys$2
});

var $keys$1 = ( _objectKeysInternal$3 && _objectKeysInternal$2 ) || _objectKeysInternal$3;

var enumBugKeys = ( _enumBugKeys$3 && _enumBugKeys$2 ) || _enumBugKeys$3;

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys$2 = Object.keys || function keys(O) {
  return $keys$1(O, enumBugKeys);
};

var _objectKeys$3 = /*#__PURE__*/Object.freeze({
	default: _objectKeys$2,
	__moduleExports: _objectKeys$2
});

var getKeys$1 = ( _objectKeys$3 && _objectKeys$2 ) || _objectKeys$3;

var _objectDps$2 = require$$0$33 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$1(O);
  var keys = getKeys$1(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP$7.f(O, P = keys[i++], Properties[P]);
  return O;
};

var _objectDps$3 = /*#__PURE__*/Object.freeze({
	default: _objectDps$2,
	__moduleExports: _objectDps$2
});

var document$4 = require$$0$32.document;
var _html$2 = document$4 && document$4.documentElement;

var _html$3 = /*#__PURE__*/Object.freeze({
	default: _html$2,
	__moduleExports: _html$2
});

var dPs$1 = ( _objectDps$3 && _objectDps$2 ) || _objectDps$3;

var require$$2$5 = ( _html$3 && _html$2 ) || _html$3;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$4 = require$$1$9('IE_PROTO');
var Empty$1 = function () { /* empty */ };
var PROTOTYPE$4 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict$1 = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require$$2$4('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require$$2$5.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict$1 = iframeDocument.F;
  while (i--) delete createDict$1[PROTOTYPE$4][enumBugKeys[i]];
  return createDict$1();
};

var _objectCreate$2 = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty$1[PROTOTYPE$4] = anObject$1(O);
    result = new Empty$1();
    Empty$1[PROTOTYPE$4] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$4] = O;
  } else result = createDict$1();
  return Properties === undefined ? result : dPs$1(result, Properties);
};

var _objectCreate$3 = /*#__PURE__*/Object.freeze({
	default: _objectCreate$2,
	__moduleExports: _objectCreate$2
});

var _wks$2 = createCommonjsModule(function (module) {
var store = require$$0$35('wks');

var Symbol = require$$0$32.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid$1)('Symbol.' + name));
};

$exports.store = store;
});

var _wks$3 = /*#__PURE__*/Object.freeze({
	default: _wks$2,
	__moduleExports: _wks$2
});

var require$$0$37 = ( _wks$3 && _wks$2 ) || _wks$3;

var def$1 = dP$7.f;

var TAG$2 = require$$0$37('toStringTag');

var _setToStringTag$2 = function (it, tag, stat) {
  if (it && !has$1(it = stat ? it : it.prototype, TAG$2)) def$1(it, TAG$2, { configurable: true, value: tag });
};

var _setToStringTag$3 = /*#__PURE__*/Object.freeze({
	default: _setToStringTag$2,
	__moduleExports: _setToStringTag$2
});

var create$1 = ( _objectCreate$3 && _objectCreate$2 ) || _objectCreate$3;

var setToStringTag$1 = ( _setToStringTag$3 && _setToStringTag$2 ) || _setToStringTag$3;

var IteratorPrototype$1 = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require$$0$34(IteratorPrototype$1, require$$0$37('iterator'), function () { return this; });

var _iterCreate$2 = function (Constructor, NAME, next) {
  Constructor.prototype = create$1(IteratorPrototype$1, { next: descriptor$1(1, next) });
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

var _iterCreate$3 = /*#__PURE__*/Object.freeze({
	default: _iterCreate$2,
	__moduleExports: _iterCreate$2
});

// 7.1.13 ToObject(argument)

var _toObject$2 = function (it) {
  return Object(defined$1(it));
};

var _toObject$3 = /*#__PURE__*/Object.freeze({
	default: _toObject$2,
	__moduleExports: _toObject$2
});

var toObject = ( _toObject$3 && _toObject$2 ) || _toObject$3;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$5 = require$$1$9('IE_PROTO');
var ObjectProto$2 = Object.prototype;

var _objectGpo$2 = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has$1(O, IE_PROTO$5)) return O[IE_PROTO$5];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto$2 : null;
};

var _objectGpo$3 = /*#__PURE__*/Object.freeze({
	default: _objectGpo$2,
	__moduleExports: _objectGpo$2
});

var LIBRARY = ( _library$3 && _library$2 ) || _library$3;

var $export$3 = ( _export$3 && _export$2 ) || _export$3;

var redefine$1 = ( _redefine$3 && _redefine$2 ) || _redefine$3;

var Iterators = ( _iterators$3 && _iterators$2 ) || _iterators$3;

var $iterCreate$1 = ( _iterCreate$3 && _iterCreate$2 ) || _iterCreate$3;

var getPrototypeOf = ( _objectGpo$3 && _objectGpo$2 ) || _objectGpo$3;

var ITERATOR$5 = require$$0$37('iterator');
var BUGGY$1 = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR$1 = '@@iterator';
var KEYS$1 = 'keys';
var VALUES$1 = 'values';

var returnThis$1 = function () { return this; };

var _iterDefine$2 = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate$1(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY$1 && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS$1: return function keys() { return new Constructor(this, kind); };
      case VALUES$1: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES$1;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$5] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag$1(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR$5] != 'function') require$$0$34(IteratorPrototype, ITERATOR$5, returnThis$1);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES$1) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$5])) {
    require$$0$34(proto, ITERATOR$5, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis$1;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES$1),
      keys: IS_SET ? $default : getMethod(KEYS$1),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine$1(proto, key, methods[key]);
    } else $export$3($export$3.P + $export$3.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var _iterDefine$3 = /*#__PURE__*/Object.freeze({
	default: _iterDefine$2,
	__moduleExports: _iterDefine$2
});

var require$$0$38 = ( _stringAt$3 && _stringAt$2 ) || _stringAt$3;

var require$$0$39 = ( _iterDefine$3 && _iterDefine$2 ) || _iterDefine$3;

var $at$3 = require$$0$38(true);

// 21.1.3.27 String.prototype[@@iterator]()
require$$0$39(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at$3(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _addToUnscopables$2 = function () { /* empty */ };

var _addToUnscopables$3 = /*#__PURE__*/Object.freeze({
	default: _addToUnscopables$2,
	__moduleExports: _addToUnscopables$2
});

var _iterStep$2 = function (done, value) {
  return { value: value, done: !!done };
};

var _iterStep$3 = /*#__PURE__*/Object.freeze({
	default: _iterStep$2,
	__moduleExports: _iterStep$2
});

var addToUnscopables = ( _addToUnscopables$3 && _addToUnscopables$2 ) || _addToUnscopables$3;

var step$1 = ( _iterStep$3 && _iterStep$2 ) || _iterStep$3;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator$2 = require$$0$39(Array, 'Array', function (iterated, kind) {
  this._t = toIObject$1(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step$1(1);
  }
  if (kind == 'keys') return step$1(0, index);
  if (kind == 'values') return step$1(0, O[index]);
  return step$1(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var TO_STRING_TAG$1 = require$$0$37('toStringTag');

var DOMIterables$1 = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i$3 = 0; i$3 < DOMIterables$1.length; i$3++) {
  var NAME$2 = DOMIterables$1[i$3];
  var Collection$1 = require$$0$32[NAME$2];
  var proto$4 = Collection$1 && Collection$1.prototype;
  if (proto$4 && !proto$4[TO_STRING_TAG$1]) require$$0$34(proto$4, TO_STRING_TAG$1, NAME$2);
  Iterators[NAME$2] = Iterators.Array;
}

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$3 = require$$0$37('toStringTag');
// ES3 wrong here
var ARG$1 = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet$1 = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof$2 = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet$1(O = Object(it), TAG$3)) == 'string' ? T
    // builtinTag case
    : ARG$1 ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var _classof$3 = /*#__PURE__*/Object.freeze({
	default: _classof$2,
	__moduleExports: _classof$2
});

var _anInstance$2 = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _anInstance$3 = /*#__PURE__*/Object.freeze({
	default: _anInstance$2,
	__moduleExports: _anInstance$2
});

// call something on iterator step with safe closing on error

var _iterCall$2 = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject$1(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject$1(ret.call(iterator));
    throw e;
  }
};

var _iterCall$3 = /*#__PURE__*/Object.freeze({
	default: _iterCall$2,
	__moduleExports: _iterCall$2
});

// check on default Array iterator

var ITERATOR$6 = require$$0$37('iterator');
var ArrayProto$2 = Array.prototype;

var _isArrayIter$2 = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto$2[ITERATOR$6] === it);
};

var _isArrayIter$3 = /*#__PURE__*/Object.freeze({
	default: _isArrayIter$2,
	__moduleExports: _isArrayIter$2
});

var classof$1 = ( _classof$3 && _classof$2 ) || _classof$3;

var ITERATOR$7 = require$$0$37('iterator');

var core_getIteratorMethod$2 = require$$1$8.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$7]
    || it['@@iterator']
    || Iterators[classof$1(it)];
};

var core_getIteratorMethod$3 = /*#__PURE__*/Object.freeze({
	default: core_getIteratorMethod$2,
	__moduleExports: core_getIteratorMethod$2
});

var call$1 = ( _iterCall$3 && _iterCall$2 ) || _iterCall$3;

var isArrayIter = ( _isArrayIter$3 && _isArrayIter$2 ) || _isArrayIter$3;

var getIterFn = ( core_getIteratorMethod$3 && core_getIteratorMethod$2 ) || core_getIteratorMethod$3;

var _forOf$2 = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx$1(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength$1(iterable.length); length > index; index++) {
    result = entries ? f(anObject$1(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call$1(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

var _forOf$3 = /*#__PURE__*/Object.freeze({
	default: _forOf$2,
	__moduleExports: _forOf$2
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES$3 = require$$0$37('species');
var _speciesConstructor$2 = function (O, D) {
  var C = anObject$1(O).constructor;
  var S;
  return C === undefined || (S = anObject$1(C)[SPECIES$3]) == undefined ? D : aFunction$1(S);
};

var _speciesConstructor$3 = /*#__PURE__*/Object.freeze({
	default: _speciesConstructor$2,
	__moduleExports: _speciesConstructor$2
});

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke$2 = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var _invoke$3 = /*#__PURE__*/Object.freeze({
	default: _invoke$2,
	__moduleExports: _invoke$2
});

var invoke$1 = ( _invoke$3 && _invoke$2 ) || _invoke$3;

var process$5 = require$$0$32.process;
var setTask$1 = require$$0$32.setImmediate;
var clearTask$1 = require$$0$32.clearImmediate;
var MessageChannel$1 = require$$0$32.MessageChannel;
var Dispatch$1 = require$$0$32.Dispatch;
var counter$1 = 0;
var queue$1 = {};
var ONREADYSTATECHANGE$1 = 'onreadystatechange';
var defer$1, channel$1, port$1;
var run$1 = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue$1.hasOwnProperty(id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};
var listener$1 = function (event) {
  run$1.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask$1 || !clearTask$1) {
  setTask$1 = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue$1[++counter$1] = function () {
      // eslint-disable-next-line no-new-func
      invoke$1(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer$1(counter$1);
    return counter$1;
  };
  clearTask$1 = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (cof(process$5) == 'process') {
    defer$1 = function (id) {
      process$5.nextTick(ctx$1(run$1, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch$1 && Dispatch$1.now) {
    defer$1 = function (id) {
      Dispatch$1.now(ctx$1(run$1, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel$1) {
    channel$1 = new MessageChannel$1();
    port$1 = channel$1.port2;
    channel$1.port1.onmessage = listener$1;
    defer$1 = ctx$1(port$1.postMessage, port$1, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (require$$0$32.addEventListener && typeof postMessage == 'function' && !require$$0$32.importScripts) {
    defer$1 = function (id) {
      require$$0$32.postMessage(id + '', '*');
    };
    require$$0$32.addEventListener('message', listener$1, false);
  // IE8-
  } else if (ONREADYSTATECHANGE$1 in require$$2$4('script')) {
    defer$1 = function (id) {
      require$$2$5.appendChild(require$$2$4('script'))[ONREADYSTATECHANGE$1] = function () {
        require$$2$5.removeChild(this);
        run$1.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer$1 = function (id) {
      setTimeout(ctx$1(run$1, id, 1), 0);
    };
  }
}
var _task$2 = {
  set: setTask$1,
  clear: clearTask$1
};
var _task_1$1 = _task$2.set;
var _task_2$1 = _task$2.clear;

var _task$3 = /*#__PURE__*/Object.freeze({
	default: _task$2,
	__moduleExports: _task$2,
	set: _task_1$1,
	clear: _task_2$1
});

var require$$0$40 = ( _task$3 && _task$2 ) || _task$3;

var macrotask$1 = require$$0$40.set;
var Observer$1 = require$$0$32.MutationObserver || require$$0$32.WebKitMutationObserver;
var process$6 = require$$0$32.process;
var Promise$2 = require$$0$32.Promise;
var isNode$3 = cof(process$6) == 'process';

var _microtask$2 = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode$3 && (parent = process$6.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode$3) {
    notify = function () {
      process$6.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer$1 && !(require$$0$32.navigator && require$$0$32.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer$1(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$2 && Promise$2.resolve) {
    var promise = Promise$2.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask$1.call(require$$0$32, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

var _microtask$3 = /*#__PURE__*/Object.freeze({
	default: _microtask$2,
	__moduleExports: _microtask$2
});

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability$1(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject = aFunction$1(reject);
}

var f$9 = function (C) {
  return new PromiseCapability$1(C);
};

var _newPromiseCapability$2 = {
	f: f$9
};

var _newPromiseCapability$3 = /*#__PURE__*/Object.freeze({
	default: _newPromiseCapability$2,
	__moduleExports: _newPromiseCapability$2,
	f: f$9
});

var _perform$2 = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var _perform$3 = /*#__PURE__*/Object.freeze({
	default: _perform$2,
	__moduleExports: _perform$2
});

var newPromiseCapability$2 = ( _newPromiseCapability$3 && _newPromiseCapability$2 ) || _newPromiseCapability$3;

var _promiseResolve$2 = function (C, x) {
  anObject$1(C);
  if (isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$2.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _promiseResolve$3 = /*#__PURE__*/Object.freeze({
	default: _promiseResolve$2,
	__moduleExports: _promiseResolve$2
});

var _redefineAll$2 = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else require$$0$34(target, key, src[key]);
  } return target;
};

var _redefineAll$3 = /*#__PURE__*/Object.freeze({
	default: _redefineAll$2,
	__moduleExports: _redefineAll$2
});

var SPECIES$4 = require$$0$37('species');

var _setSpecies$2 = function (KEY) {
  var C = typeof require$$1$8[KEY] == 'function' ? require$$1$8[KEY] : require$$0$32[KEY];
  if (require$$0$33 && C && !C[SPECIES$4]) dP$7.f(C, SPECIES$4, {
    configurable: true,
    get: function () { return this; }
  });
};

var _setSpecies$3 = /*#__PURE__*/Object.freeze({
	default: _setSpecies$2,
	__moduleExports: _setSpecies$2
});

var ITERATOR$8 = require$$0$37('iterator');
var SAFE_CLOSING$1 = false;

try {
  var riter$1 = [7][ITERATOR$8]();
  riter$1['return'] = function () { SAFE_CLOSING$1 = true; };
} catch (e) { /* empty */ }

var _iterDetect$2 = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING$1) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$8]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$8] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

var _iterDetect$3 = /*#__PURE__*/Object.freeze({
	default: _iterDetect$2,
	__moduleExports: _iterDetect$2
});

var anInstance = ( _anInstance$3 && _anInstance$2 ) || _anInstance$3;

var forOf$1 = ( _forOf$3 && _forOf$2 ) || _forOf$3;

var speciesConstructor$1 = ( _speciesConstructor$3 && _speciesConstructor$2 ) || _speciesConstructor$3;

var require$$1$10 = ( _microtask$3 && _microtask$2 ) || _microtask$3;

var perform$1 = ( _perform$3 && _perform$2 ) || _perform$3;

var promiseResolve$1 = ( _promiseResolve$3 && _promiseResolve$2 ) || _promiseResolve$3;

var require$$3 = ( _redefineAll$3 && _redefineAll$2 ) || _redefineAll$3;

var require$$5$1 = ( _setSpecies$3 && _setSpecies$2 ) || _setSpecies$3;

var require$$7 = ( _iterDetect$3 && _iterDetect$2 ) || _iterDetect$3;

var task$1 = require$$0$40.set;
var microtask$3 = require$$1$10();



var PROMISE$1 = 'Promise';
var TypeError$2 = require$$0$32.TypeError;
var process$7 = require$$0$32.process;
var $Promise$1 = require$$0$32[PROMISE$1];
var isNode$4 = classof$1(process$7) == 'process';
var empty$1 = function () { /* empty */ };
var Internal$1, newGenericPromiseCapability$1, OwnPromiseCapability$1, Wrapper$1;
var newPromiseCapability$3 = newGenericPromiseCapability$1 = newPromiseCapability$2.f;

var USE_NATIVE$2 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise$1.resolve(1);
    var FakePromise = (promise.constructor = {})[require$$0$37('species')] = function (exec) {
      exec(empty$1, empty$1);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$4 || typeof PromiseRejectionEvent == 'function') && promise.then(empty$1) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable$1 = function (it) {
  var then;
  return isObject$1(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify$1 = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask$3(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled$1(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$2('Promise-chain cycle'));
          } else if (then = isThenable$1(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled$1(promise);
  });
};
var onUnhandled$1 = function (promise) {
  task$1.call(require$$0$32, function () {
    var value = promise._v;
    var unhandled = isUnhandled$1(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform$1(function () {
        if (isNode$4) {
          process$7.emit('unhandledRejection', value, promise);
        } else if (handler = require$$0$32.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = require$$0$32.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$4 || isUnhandled$1(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled$1 = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled$1 = function (promise) {
  task$1.call(require$$0$32, function () {
    var handler;
    if (isNode$4) {
      process$7.emit('rejectionHandled', promise);
    } else if (handler = require$$0$32.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject$1 = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify$1(promise, true);
};
var $resolve$1 = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$2("Promise can't be resolved itself");
    if (then = isThenable$1(value)) {
      microtask$3(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx$1($resolve$1, wrapper, 1), ctx$1($reject$1, wrapper, 1));
        } catch (e) {
          $reject$1.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify$1(promise, false);
    }
  } catch (e) {
    $reject$1.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$2) {
  // 25.4.3.1 Promise(executor)
  $Promise$1 = function Promise(executor) {
    anInstance(this, $Promise$1, PROMISE$1, '_h');
    aFunction$1(executor);
    Internal$1.call(this);
    try {
      executor(ctx$1($resolve$1, this, 1), ctx$1($reject$1, this, 1));
    } catch (err) {
      $reject$1.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal$1 = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal$1.prototype = require$$3($Promise$1.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability$3(speciesConstructor$1(this, $Promise$1));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$4 ? process$7.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify$1(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability$1 = function () {
    var promise = new Internal$1();
    this.promise = promise;
    this.resolve = ctx$1($resolve$1, promise, 1);
    this.reject = ctx$1($reject$1, promise, 1);
  };
  newPromiseCapability$2.f = newPromiseCapability$3 = function (C) {
    return C === $Promise$1 || C === Wrapper$1
      ? new OwnPromiseCapability$1(C)
      : newGenericPromiseCapability$1(C);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE$2, { Promise: $Promise$1 });
setToStringTag$1($Promise$1, PROMISE$1);
require$$5$1(PROMISE$1);
Wrapper$1 = require$$1$8[PROMISE$1];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE$2, PROMISE$1, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability$3(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY || !USE_NATIVE$2), PROMISE$1, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve$1(LIBRARY && this === Wrapper$1 ? $Promise$1 : this, x);
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE$2 && require$$7(function (iter) {
  $Promise$1.all(iter)['catch'](empty$1);
})), PROMISE$1, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$3(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf$1(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$3(C);
    var reject = capability.reject;
    var result = perform$1(function () {
      forOf$1(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

$export$3($export$3.P + $export$3.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor$1(this, require$$1$8.Promise || require$$0$32.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve$1(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve$1(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

// https://github.com/tc39/proposal-promise-try




$export$3($export$3.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability$2.f(this);
  var result = perform$1(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

var promise = require$$1$8.Promise;

var promise$1 = /*#__PURE__*/Object.freeze({
	default: promise,
	__moduleExports: promise
});

var require$$0$41 = ( promise$1 && promise ) || promise$1;

var promise$2 = createCommonjsModule(function (module) {
module.exports = { "default": require$$0$41, __esModule: true };
});

var promise$3 = unwrapExports(promise$2);

var promise$4 = /*#__PURE__*/Object.freeze({
	default: promise$3,
	__moduleExports: promise$2
});

var _promise = ( promise$4 && promise$3 ) || promise$4;

var asyncToGenerator = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
});

var _asyncToGenerator = unwrapExports(asyncToGenerator);

function noop() {}

function assign$1(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function destroyEach(iterations) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d();
	}
}

function createElement(name) {
	return document.createElement(name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function linear(t) {
	return t;
}

function generateRule(
	a,
	b,
	delta,
	duration,
	ease,
	fn
) {
	var keyframes = '{\n';

	for (var p = 0; p <= 1; p += 16.666 / duration) {
		var t = a + delta * ease(p);
		keyframes += p * 100 + '%{' + fn(t) + '}\n';
	}

	return keyframes + '100% {' + fn(b) + '}\n}';
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	var hash = 5381;
	var i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro, outgroup) {
	var obj = fn(node, params);
	var duration = obj.duration || 300;
	var ease = obj.easing || linear;
	var cssText;

	// TODO share <style> tag between all transitions?
	if (obj.css && !transitionManager.stylesheet) {
		var style = createElement('style');
		document.head.appendChild(style);
		transitionManager.stylesheet = style.sheet;
	}

	if (intro) {
		if (obj.css && obj.delay) {
			cssText = node.style.cssText;
			node.style.cssText += obj.css(0);
		}

		if (obj.tick) obj.tick(0);
	}

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,
		run: function(intro, callback) {
			var program = {
				start: window.performance.now() + (obj.delay || 0),
				intro: intro,
				callback: callback
			};

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},
		start: function(program) {
			component.fire(program.intro ? 'intro.start' : 'outro.start', { node: node });

			program.a = this.t;
			program.b = program.intro ? 1 : 0;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;

				program.rule = generateRule(
					program.a,
					program.b,
					program.delta,
					program.duration,
					ease,
					obj.css
				);

				transitionManager.addRule(program.rule, program.name = '__svelte_' + hash(program.rule));

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(function(anim) {
						// when introing, discard old animations if there are any
						return anim && (program.delta < 0 || !/__svelte/.test(anim));
					})
					.concat(program.name + ' ' + program.duration + 'ms linear 1 forwards')
					.join(', ');
			}

			this.program = program;
			this.pending = null;
		},
		update: function(now) {
			var program = this.program;
			if (!program) return;

			var p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t);
		},
		done: function() {
			var program = this.program;
			this.t = program.b;
			if (obj.tick) obj.tick(this.t);
			if (obj.css) transitionManager.deleteRule(node, program.name);
			program.callback();
			program = null;
			this.running = !!this.pending;
		},
		abort: function() {
			if (obj.tick) obj.tick(1);
			if (obj.css) transitionManager.deleteRule(node, this.program.name);
			this.program = this.pending = null;
			this.running = false;
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,
	stylesheet: null,
	activeRules: {},

	add: function(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	},

	addRule: function(rule, name) {
		if (!this.activeRules[name]) {
			this.activeRules[name] = true;
			this.stylesheet.insertRule('@keyframes ' + name + ' ' + rule, this.stylesheet.cssRules.length);
		}
	},

	next: function() {
		this.running = false;

		var now = window.performance.now();
		var i = this.transitions.length;

		while (i--) {
			var transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound);
		} else if (this.stylesheet) {
			var i = this.stylesheet.cssRules.length;
			while (i--) this.stylesheet.deleteRule(i);
			this.activeRules = {};
		}
	},

	deleteRule: function(node, name) {
		node.style.animation = node.style.animation
			.split(', ')
			.filter(function(anim) {
				return anim.indexOf(name) === -1;
			})
			.join(', ');
	}
};

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = noop;

	if (detach !== false) this._fragment.u();
	this._fragment.d();
	this._fragment = null;
	this._state = {};
}

function destroyDev(detach) {
	destroy.call(this, detach);
	this.destroy = function() {
		console.warn('Component was already destroyed');
	};
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		var handler = handlers[i];

		if (!handler.__calling) {
			handler.__calling = true;
			handler.call(this, data);
			handler.__calling = false;
		}
	}
}

function get$1() {
	return this._state;
}

function init(component, options) {
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set$1(newState) {
	this._set(assign$1({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign$1(assign$1({}, oldState), newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		this.fire("state", { changed: changed, current: this._state, previous: oldState });
		this._fragment.p(changed, this._state);
		this.fire("update", { changed: changed, current: this._state, previous: oldState });
	}
}

function setDev(newState) {
	if (typeof newState !== 'object') {
		throw new Error(
			this._debugName + '.set was called without an object of data key-values to update.'
		);
	}

	this._checkReadOnly(newState);
	set$1.call(this, newState);
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

function _unmount() {
	if (this._fragment) this._fragment.u();
}

var protoDev = {
	destroy: destroyDev,
	get: get$1,
	fire,
	on,
	set: setDev,
	_recompute: noop,
	_set,
	_mount,
	_unmount,
	_differs
};

var kelvinToFahrenheit = function kelvinToFahrenheit(val) {
  return parseInt((val - 273.15) * 1.8 + 32);
};

var kelvinToCelsius = function kelvinToCelsius(val) {
  return parseInt(val - 273.15);
};

var getFiveDayForecast = function getFiveDayForecast() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { city: "" };

  return fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + input.city + "&appid=" + window.apiKey + "\n  ").then(function (response) {
    return response.json();
  }).then(function (results) {
    var forecastArr = results.list.filter(function (idx) {
      // selects the 2 o'clock pm forecast
      return new Date(idx.dt * 1000).getHours() === 14;
    });
    var weatherArr = forecastArr.map(function (obj) {
      var dt = obj.dt,
          main = obj.main,
          weather = obj.weather;

      return {
        date: new Date(dt * 1000).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric"
        }),
        temp: {
          f: kelvinToFahrenheit(main.temp),
          c: kelvinToCelsius(main.temp)
        },
        humidity: main.humidity,
        conditions: {
          description: weather[0].description,
          icon: weather[0].icon
        }
      };
    });
    return weatherArr;
  }).catch(function (err) {
    throw new Error(err);
  });
};

/*!
 * Font Awesome Free 5.0.9 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop$1 = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER$1 = null;
var _PERFORMANCE = { mark: noop$1, measure: noop$1 };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent$1 = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent$1.indexOf('MSIE') || ~userAgent$1.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var initial = WINDOW.FontAwesomeConfig || {};
var initialKeys = Object.keys(initial);

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config$1 = _extends({}, _default);

WINDOW.FontAwesomeConfig = config$1;

function update(newConfig) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$asNewDefault = params.asNewDefault,
      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

  var validKeys = Object.keys(config$1);
  var ok = asNewDefault ? function (k) {
    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
  } : function (k) {
    return ~validKeys.indexOf(k);
  };

  Object.keys(newConfig).forEach(function (configKey) {
    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
  });
}

function auto(value) {
  update({
    autoReplaceSvg: value,
    observeMutations: value
  });
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener$2 = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener$2);
}

var domready = function (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
};

var d = UNITS_IN_GRID;

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

  var val = '';

  if (startCentered && IS_IE) {
    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
  } else if (startCentered) {
    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
  } else {
    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
  }

  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
  val += 'rotate(' + transform.rotate + 'deg) ';

  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;


  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === undefined ? false : _params$watchable2;


  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _extends({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];

  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
  }

  return val;
}

var noop$2 = function noop() {};
var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
var preamble = 'FA "5.0.9"';

var begin = function begin(name) {
  p.mark(preamble + ' ' + name + ' begins');
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark(preamble + ' ' + name + ' ends');
  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
};

var perf = { begin: begin, end: end };

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};



/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;


var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}

function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}

function byOldName(name) {
  return _byOldName[name] || { prefix: null, iconName: null };
}

var styles$1 = namespace.styles;


var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return { prefix: null, iconName: null, rest: [] };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config$1.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var noop$1$1 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;

  return typeof i2svg === 'string';
}

function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config$1.autoReplaceSvg];

  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp(config$1.familyPrefix + '-.*');

    delete abstract[0].attributes.style;

    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config$1.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, { toNode: [], toSvg: [] });

    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function perform$2(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$1$1;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');

      mutations.map(mutator);

      mark();

      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation(operation) {
  disabled = true;
  operation();
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) return;

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback;


  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;

    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });

  if (!IS_DOM) return;

  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
    childList: true, attributes: true, characterData: true, subtree: true
  });
}

function disconnect() {
  if (!mo) return;

  mo.disconnect();
}

var styleParser = function (node) {
  var style = node.getAttribute('style');

  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

var classParser = function (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

var transformParser = function (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
};

var symbolParser = function (node) {
  var symbol = node.getAttribute('data-fa-symbol');

  return symbol === null ? false : symbol === '' ? true : symbol;
};

var attributesParser = function (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});

  var title = node.getAttribute('title');

  if (config$1.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
    } else {
      extraAttributes['aria-hidden'] = 'true';
    }
  }

  return extraAttributes;
};

var maskParser = function (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
};

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);

  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

var styles = namespace.styles;

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
var STYLE_TO_PREFIX = {
  'Solid': 'fas',
  'Regular': 'far',
  'Light': 'fal',
  'Brands': 'fab'
};

function findIcon(iconName, prefix) {
  var val = {
    found: false,
    width: 512,
    height: 512,
    icon: missing
  };

  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
    var icon = styles[prefix][iconName];
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    val = {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  } else if (iconName && prefix && !config$1.showMissingIcons) {
    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
  }

  return val;
}

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;


  return [node, makeInlineSvgAbstract({
    icons: {
      main: findIcon(iconName, prefix),
      mask: findIcon(mask.iconName, mask.prefix)
    },
    prefix: prefix,
    iconName: iconName,
    transform: transform,
    symbol: symbol,
    mask: mask,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;


  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config$1.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return [node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function remove(node) {
  if (typeof node.remove === 'function') {
    node.remove();
  } else if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;

  var end = perf.begin('searchPseudoElements');

  disableObservation(function () {
    toArray(root.querySelectorAll('*')).forEach(function (node) {
      [':before', ':after'].forEach(function (pos) {
        var styles = WINDOW.getComputedStyle(node, pos);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var children = toArray(node.children);
        var pseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
        })[0];

        if (pseudoElement) {
          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
            remove(pseudoElement.nextSibling);
          }
          remove(pseudoElement);
          pseudoElement = null;
        }

        if (fontFamily && !pseudoElement) {
          var content = styles.getPropertyValue('content');
          var i = DOCUMENT.createElement('i');
          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
          if (pos === ':before') {
            node.insertBefore(i, node.firstChild);
          } else {
            node.appendChild(i);
          }
        }
      });
    });
  });

  end();
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!IS_DOM) return;

  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var prefixes = Object.keys(styles);
  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');

  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);

  mark();

  perform$2(mutations, function () {
    hclAdd('active');
    hclAdd('complete');
    hclRemove('pending');

    if (typeof callback === 'function') callback();
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var mutation = generateMutation(node);

  if (mutation) {
    perform$2([mutation], callback);
  }
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config$1.familyPrefix;
  var rc = config$1.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define$2(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define$2('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define$2(key, additions[key]);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;


        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

var _cssInserted = false;

function ensureCss() {
  if (!config$1.autoAddCss) {
    return;
  }

  if (!_cssInserted) {
    insertCss(css());
  }

  _cssInserted = true;
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;


  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;


    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();

var noAuto = function noAuto() {
  auto(false);
  disconnect();
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();

      var _params$node = params.node,
          node = _params$node === undefined ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === undefined ? function () {} : _params$callback;


      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }

      onTree(node, callback);
    }
  },

  css: css,

  insertCss: function insertCss$$1() {
    insertCss(css());
  }
};

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;


  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;


  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config$1.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === undefined ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === undefined ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === undefined ? {} : _params$styles2;


  return apiObject({ type: 'text', content: content }, function () {
    ensureCss();

    return makeLayersTextAbstract({
      content: content,
      transform: _extends({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
      }
    });
  });
};

var layer = function layer(assembler) {
  return apiObject({ type: 'layer' }, function () {
    ensureCss();

    var children = [];

    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });

    return [{
      tag: 'span',
      attributes: { class: config$1.familyPrefix + '-layers' },
      children: children
    }];
  });
};

var api$1 = {
  noAuto: noAuto,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  layer: layer
};

var autoReplace = function autoReplace() {
  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
};

function bootstrap() {
  if (IS_BROWSER) {
    if (!WINDOW.FontAwesome) {
      WINDOW.FontAwesome = api$1;
    }

    domready(function () {
      if (Object.keys(namespace.styles).length > 0) {
        autoReplace();
      }

      if (config$1.observeMutations && typeof MutationObserver === 'function') {
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      }
    });
  }

  namespace.hooks = _extends({}, namespace.hooks, {

    addPack: function addPack(prefix, icons) {
      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

      build();
      autoReplace();
    },

    addShims: function addShims(shims) {
      var _namespace$shims;

      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

      build();
      autoReplace();
    }
  });
}

Object.defineProperty(api$1, 'config', {
  get: function get() {
    return config$1;
  },

  set: function set(newConfig) {
    update(newConfig);
  }
});

if (IS_DOM) bunker(bootstrap);

/*!
 * Font Awesome Free 5.0.10 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var faSearch = { prefix: 'fas', iconName: 'search', icon: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"] };
var faTimes = { prefix: 'fas', iconName: 'times', icon: [384, 512, [], "f00d", "M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"] };

/* src/components/views/CardHeader.html generated by Svelte v2.1.1 */

api$1.library.add(faSearch, faTimes);

var methods = {
	handleChange: function handleChange() {
		var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		var input = document.querySelector('.card-header__input');
		if (str === 'reset') {
			input.value = '';
		}
		this.set({
			city: input.value.split(', ')[0]
		});
	},
	handleSearch: function handleSearch() {
		this.handleChange();
	},
	handleCancel: function handleCancel() {
		this.handleChange('reset');
	},
	handleSubmit: function handleSubmit(evt) {
		// prevent form submit on <enter> keydown
		evt.preventDefault();
		return false;
	}
};

function add_css() {
	var style = createElement("style");
	style.id = 'svelte-1jo2kwh-style';
	style.textContent = ".weather-app-card__header.svelte-1jo2kwh{background-color:transparent;border-bottom:none;z-index:500}.card>hr.svelte-1jo2kwh{margin:0 1rem}.form-control.svelte-1jo2kwh{color:white;font-size:1.5rem;background-color:transparent;border:none}.fa-search.svelte-1jo2kwh,.fa-times.svelte-1jo2kwh{color:rgba(0, 0, 0, 0.4);cursor:pointer}.form-control.svelte-1jo2kwh:focus{background-color:transparent;border-color:transparent;box-shadow:none}input.svelte-1jo2kwh::-webkit-input-placeholder{color:white}input.svelte-1jo2kwh::-moz-placeholder{color:white}input.svelte-1jo2kwh:-ms-input-placeholder{color:white}input.svelte-1jo2kwh:-moz-placeholder{color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZEhlYWRlci5odG1sIiwic291cmNlcyI6WyJDYXJkSGVhZGVyLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgd2VhdGhlci1hcHAtY2FyZF9faGVhZGVyXCI+XG4gIDxkaXYgb246Y2xpY2s9XCJoYW5kbGVTZWFyY2goKVwiPlxuICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3LTc1XCI+XG4gICAgPGZvcm0gb246c3VibWl0PVwiaGFuZGxlU3VibWl0KGV2ZW50KVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2FyZC1oZWFkZXJfX2lucHV0XCIgYXJpYS1kZXNjcmliZWRieT1cInNlYXJjaEhlbHBcIiBvbjpjaGFuZ2U9XCJoYW5kbGVDaGFuZ2UoKVwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIGNpdHkuLi5cIj5cbiAgICAgICAgPHNtYWxsIGlkPVwic2VhcmNoSGVscFwiIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIiBoaWRkZW4+UGxlYXNlIGVudGVyIGEgY2l0eSB0byBzZWFyY2g8L3NtYWxsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgPGRpdiBvbjpjbGljaz1cImhhbmRsZUNhbmNlbCgpXCI+XG4gICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxocj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWVcIjtcbiAgaW1wb3J0IHsgZmFTZWFyY2gsIGZhVGltZXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWRcIjtcblxuICBmb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVNlYXJjaCwgZmFUaW1lcyk7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1ldGhvZHM6IHtcbiAgICAgIGhhbmRsZUNoYW5nZShzdHIgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1oZWFkZXJfX2lucHV0Jyk7XG4gICAgICAgIGlmIChzdHIgPT09ICdyZXNldCcpIHtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICBjaXR5OiBpbnB1dC52YWx1ZS5zcGxpdCgnLCAnKVswXVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgICB9LFxuICAgICAgaGFuZGxlQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgncmVzZXQnKTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVTdWJtaXQoZXZ0KSB7XG4gICAgICAgIC8vIHByZXZlbnQgZm9ybSBzdWJtaXQgb24gPGVudGVyPiBrZXlkb3duXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLndlYXRoZXItYXBwLWNhcmRfX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB6LWluZGV4OiA1MDA7XG4gIH1cblxuICAuY2FyZD5ociB7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLmZhLXNlYXJjaCxcbiAgLmZhLXRpbWVzIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBJRSAxMCsgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBGaXJlZm94IDE4LSAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RFLHlCQUF5QixlQUFDLENBQUMsQUFDekIsZ0JBQWdCLENBQUUsV0FBVyxDQUM3QixhQUFhLENBQUUsSUFBSSxDQUNuQixPQUFPLENBQUUsR0FBRyxBQUNkLENBQUMsQUFFRCxLQUFLLENBQUMsRUFBRSxlQUFDLENBQUMsQUFDUixNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQUFDaEIsQ0FBQyxBQUVELGFBQWEsZUFBQyxDQUFDLEFBQ2IsS0FBSyxDQUFFLEtBQUssQ0FDWixTQUFTLENBQUUsTUFBTSxDQUNqQixnQkFBZ0IsQ0FBRSxXQUFXLENBQzdCLE1BQU0sQ0FBRSxJQUFJLEFBQ2QsQ0FBQyxBQUVELHlCQUFVLENBQ1YsU0FBUyxlQUFDLENBQUMsQUFDVCxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDekIsTUFBTSxDQUFFLE9BQU8sQUFDakIsQ0FBQyxBQUVELDRCQUFhLE1BQU0sQUFBQyxDQUFDLEFBQ25CLGdCQUFnQixDQUFFLFdBQVcsQ0FDN0IsWUFBWSxDQUFFLFdBQVcsQ0FDekIsVUFBVSxDQUFFLElBQUksQUFDbEIsQ0FBQyxBQUVELG9CQUFLLDJCQUEyQixBQUFDLENBQUMsQUFFaEMsS0FBSyxDQUFFLEtBQUssQUFDZCxDQUFDLEFBRUQsb0JBQUssa0JBQWtCLEFBQUMsQ0FBQyxBQUV2QixLQUFLLENBQUUsS0FBSyxBQUNkLENBQUMsQUFFRCxvQkFBSyxzQkFBc0IsQUFBQyxDQUFDLEFBRTNCLEtBQUssQ0FBRSxLQUFLLEFBQ2QsQ0FBQyxBQUVELG9CQUFLLGlCQUFpQixBQUFDLENBQUMsQUFFdEIsS0FBSyxDQUFFLEtBQUssQUFDZCxDQUFDIn0= */";
	appendNode(style, document.head);
}

function create_main_fragment(component, state) {
	var div, div_1, text_1, div_2, form, div_3, input, text_2, small, text_7, div_4, text_10, hr;

	function click_handler(event) {
		component.handleSearch();
	}

	function change_handler(event) {
		component.handleChange();
	}

	function submit_handler(event) {
		component.handleSubmit(event);
	}

	function click_handler_1(event) {
		component.handleCancel();
	}

	return {
		c: function create() {
			div = createElement("div");
			div_1 = createElement("div");
			div_1.innerHTML = "<i class=\"fas fa-search svelte-1jo2kwh\"></i>";
			text_1 = createText("\n  ");
			div_2 = createElement("div");
			form = createElement("form");
			div_3 = createElement("div");
			input = createElement("input");
			text_2 = createText("\n        ");
			small = createElement("small");
			small.textContent = "Please enter a city to search";
			text_7 = createText("\n  ");
			div_4 = createElement("div");
			div_4.innerHTML = "<i class=\"fas fa-times svelte-1jo2kwh\"></i>";
			text_10 = createText("\n\n");
			hr = createElement("hr");
			this.h();
		},

		h: function hydrate() {
			addListener(div_1, "click", click_handler);
			addListener(input, "change", change_handler);
			setAttribute(input, "type", "text");
			input.className = "form-control card-header__input svelte-1jo2kwh";
			setAttribute(input, "aria-describedby", "searchHelp");
			input.placeholder = "Search for a city...";
			small.id = "searchHelp";
			small.className = "form-text text-muted";
			small.hidden = true;
			div_3.className = "form-group";
			addListener(form, "submit", submit_handler);
			div_2.className = "w-75";
			addListener(div_4, "click", click_handler_1);
			div.className = "card-header w-100 d-flex justify-content-between align-items-center weather-app-card__header svelte-1jo2kwh";
			hr.className = "svelte-1jo2kwh";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(div_1, div);
			appendNode(text_1, div);
			appendNode(div_2, div);
			appendNode(form, div_2);
			appendNode(div_3, form);
			appendNode(input, div_3);
			appendNode(text_2, div_3);
			appendNode(small, div_3);
			appendNode(text_7, div);
			appendNode(div_4, div);
			insertNode(text_10, target, anchor);
			insertNode(hr, target, anchor);
		},

		p: noop,

		u: function unmount() {
			detachNode(div);
			detachNode(text_10);
			detachNode(hr);
		},

		d: function destroy$$1() {
			removeListener(div_1, "click", click_handler);
			removeListener(input, "change", change_handler);
			removeListener(form, "submit", submit_handler);
			removeListener(div_4, "click", click_handler_1);
		}
	};
}

function CardHeader(options) {
	this._debugName = '<CardHeader>';
	if (!options || !options.target && !options.root) throw new Error("'target' is a required option");
	init(this, options);
	this._state = assign$1({}, options.data);

	if (!document.getElementById("svelte-1jo2kwh-style")) add_css();

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign$1(CardHeader.prototype, protoDev);
assign$1(CardHeader.prototype, methods);

CardHeader.prototype._checkReadOnly = function _checkReadOnly(newState) {};

function cubicInOut(t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
}

/* src/components/views/CardBody.html generated by Svelte v2.1.1 */

function fade_1(node, _ref) {
	var _ref$delay = _ref.delay,
	    delay = _ref$delay === undefined ? 0 : _ref$delay,
	    _ref$duration = _ref.duration,
	    duration = _ref$duration === undefined ? 400 : _ref$duration;

	var o = +getComputedStyle(node).opacity;

	return {
		delay: delay,
		duration: duration,
		easing: cubicInOut,
		css: function css(t) {
			return 'opacity: ' + t * o;
		}
	};
}
function add_css$1() {
	var style = createElement("style");
	style.id = 'svelte-13xnyib-style';
	style.textContent = ".card-body__temp.svelte-13xnyib{font-size:12rem}.weather-card__degree-symbol.svelte-13xnyib{padding-top:.75rem;font-size:6em;top:0;position:unset;line-height:unset;vertical-align:top}.card-body__status.svelte-13xnyib{margin-top:1rem}.card-body__status.svelte-13xnyib span.svelte-13xnyib:first-of-type{font-size:3em;margin:.5rem 0}.card-body__status.svelte-13xnyib span.svelte-13xnyib:nth-child(2){font-size:1.5em;margin:.25em 0;text-transform:capitalize}.card-body__status.svelte-13xnyib span.svelte-13xnyib:last-of-type{font-size:1em;margin:.25em 0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZEJvZHkuaHRtbCIsInNvdXJjZXMiOlsiQ2FyZEJvZHkuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHdlYXRoZXItYXBwLWNhcmRfX2JvZHlcIj5cbiAgeyNpZiAhY3VycmVudC5sZW5ndGh9XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlfX3RlbXBcIiB0cmFuc2l0aW9uOmZhZGU+XG4gICAgPGgxPk5vIERhdGE8L2gxPlxuICA8L2Rpdj5cbiAgezplbHNlaWYgY3VycmVudFswXSA9PT0gJ0NpdHkgbm90IGZvdW5kJ31cbiAgPGRpdiBjbGFzcz1cImNhcmQtYm9keV9fdGVtcFwiIHRyYW5zaXRpb246ZmFkZT5cbiAgICA8aDE+e2N1cnJlbnRbMF19PC9oMT5cbiAgPC9kaXY+XG4gIHs6ZWxzZX1cbiAgPGRpdiBjbGFzcz1cImNhcmQtYm9keV9fdGVtcFwiIHRyYW5zaXRpb246ZmFkZT5cbiAgICA8c3Bhbj57Y3VycmVudFswXS50ZW1wLmZ9PC9zcGFuPlxuICA8L2Rpdj5cbiAgPHN1cCBjbGFzcz1cIndlYXRoZXItY2FyZF9fZGVncmVlLXN5bWJvbFwiPiZkZWc7PC9zdXA+XG4gIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWwtMiBjYXJkLWJvZHlfX3N0YXR1c1wiPlxuICAgIDxzcGFuPkY8L3NwYW4+XG4gICAgPHNwYW4+e2N1cnJlbnRbMF0uY29uZGl0aW9ucy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgPHNwYW4+e2N1cnJlbnRbMF0uaHVtaWRpdHl9ICUgSHVtaWRpdHk8L3NwYW4+XG4gIDwvZGl2PlxuICB7L2lmfVxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZhZGUgfSBmcm9tICdzdmVsdGUtdHJhbnNpdGlvbnMnO1xuICBpbXBvcnQgeyBjdWJpY0luT3V0IH0gZnJvbSAnZWFzZXMtanNuZXh0JztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgdHJhbnNpdGlvbnM6IHtcbiAgICAgIGZhZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwIH0pIHtcbiAgICAgICAgY29uc3QgbyA9ICtnZXRDb21wdXRlZFN0eWxlKG5vZGUpLm9wYWNpdHk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkZWxheSxcbiAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6IGN1YmljSW5PdXQsXG4gICAgICAgICAgY3NzOiB0ID0+IGBvcGFjaXR5OiAke3QgKiBvfWBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuY2FyZC1ib2R5X190ZW1wIHtcbiAgICBmb250LXNpemU6IDEycmVtO1xuICB9XG5cbiAgLndlYXRoZXItY2FyZF9fZGVncmVlLXN5bWJvbCB7XG4gICAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgICBmb250LXNpemU6IDZlbTtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IHVuc2V0O1xuICAgIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgLmNhcmQtYm9keV9fc3RhdHVzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgLmNhcmQtYm9keV9fc3RhdHVzIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgbWFyZ2luOiAuNXJlbSAwO1xuICB9XG5cbiAgLmNhcmQtYm9keV9fc3RhdHVzIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogLjI1ZW0gMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuXG4gIC5jYXJkLWJvZHlfX3N0YXR1cyBzcGFuOmxhc3Qtb2YtdHlwZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAuMjVlbSAwO1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ0UsZ0JBQWdCLGVBQUMsQ0FBQyxBQUNoQixTQUFTLENBQUUsS0FBSyxBQUNsQixDQUFDLEFBRUQsNEJBQTRCLGVBQUMsQ0FBQyxBQUM1QixXQUFXLENBQUUsTUFBTSxDQUNuQixTQUFTLENBQUUsR0FBRyxDQUNkLEdBQUcsQ0FBRSxDQUFDLENBQ04sUUFBUSxDQUFFLEtBQUssQ0FDZixXQUFXLENBQUUsS0FBSyxDQUNsQixjQUFjLENBQUUsR0FBRyxBQUNyQixDQUFDLEFBRUQsa0JBQWtCLGVBQUMsQ0FBQyxBQUNsQixVQUFVLENBQUUsSUFBSSxBQUNsQixDQUFDLEFBRUQsaUNBQWtCLENBQUMsbUJBQUksY0FBYyxBQUFDLENBQUMsQUFDckMsU0FBUyxDQUFFLEdBQUcsQ0FDZCxNQUFNLENBQUUsS0FBSyxDQUFDLENBQUMsQUFDakIsQ0FBQyxBQUVELGlDQUFrQixDQUFDLG1CQUFJLFdBQVcsQ0FBQyxDQUFDLEFBQUMsQ0FBQyxBQUNwQyxTQUFTLENBQUUsS0FBSyxDQUNoQixNQUFNLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FDZixjQUFjLENBQUUsVUFBVSxBQUM1QixDQUFDLEFBRUQsaUNBQWtCLENBQUMsbUJBQUksYUFBYSxBQUFDLENBQUMsQUFDcEMsU0FBUyxDQUFFLEdBQUcsQ0FDZCxNQUFNLENBQUUsS0FBSyxDQUFDLENBQUMsQUFDakIsQ0FBQyJ9 */";
	appendNode(style, document.head);
}

function create_main_fragment$1(component, state) {
	var div, current_block_type_index, if_block;

	var if_block_creators = [create_if_block, create_if_block_1, create_if_block_2];

	var if_blocks = [];

	function select_block_type(state) {
		if (!state.current.length) return 0;
		if (state.current[0] === 'City not found') return 1;
		return 2;
	}

	current_block_type_index = select_block_type(state);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](component, state);

	return {
		c: function create() {
			div = createElement("div");
			if_block.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "card-body d-flex justify-content-center weather-app-card__body";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			if_blocks[current_block_type_index].i(div, null);
		},

		p: function update(changed, state) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(state);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, state);
			} else {
				if_block.o(function () {
					if_blocks[previous_block_index].u();
					if_blocks[previous_block_index].d();
					if_blocks[previous_block_index] = null;
				});

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](component, state);
					if_block.c();
				}
				if_block.i(div, null);
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			{
				if_blocks[current_block_type_index].u();
				if_blocks[current_block_type_index].d();
			}
		}
	};
}

// (2:2) {#if !current.length}
function create_if_block(component, state) {
	var div, div_transition, introing, outroing;

	return {
		c: function create() {
			div = createElement("div");
			div.innerHTML = "<h1>No Data</h1>";
			this.h();
		},

		h: function hydrate() {
			div.className = "card-body__temp svelte-13xnyib";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		p: noop,

		i: function intro(target, anchor) {
			if (introing) return;
			introing = true;
			outroing = false;

			component.root._aftercreate.push(function () {
				if (!div_transition) div_transition = wrapTransition(component, div, fade_1, {}, true, null);
				div_transition.run(true, function () {
					component.fire("intro.end", { node: div });
				});
			});

			this.m(target, anchor);
		},

		o: function outro(outrocallback) {
			if (outroing) return;
			outroing = true;
			introing = false;

			var outros = 1;

			div_transition.run(false, function () {
				component.fire("outro.end", { node: div });
				if (--outros === 0) outrocallback();
				div_transition = null;
			});
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop
	};
}

// (6:43) 
function create_if_block_1(component, state) {
	var div,
	    h1,
	    text_value = state.current[0],
	    text,
	    div_transition,
	    introing,
	    outroing;

	return {
		c: function create() {
			div = createElement("div");
			h1 = createElement("h1");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			div.className = "card-body__temp svelte-13xnyib";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(h1, div);
			appendNode(text, h1);
		},

		p: function update(changed, state) {
			if ((outroing || changed.current) && text_value !== (text_value = state.current[0])) {
				text.data = text_value;
			}
		},

		i: function intro(target, anchor) {
			if (introing) return;
			introing = true;
			outroing = false;

			component.root._aftercreate.push(function () {
				if (!div_transition) div_transition = wrapTransition(component, div, fade_1, {}, true, null);
				div_transition.run(true, function () {
					component.fire("intro.end", { node: div });
				});
			});

			this.m(target, anchor);
		},

		o: function outro(outrocallback) {
			if (outroing) return;
			outroing = true;
			introing = false;

			var outros = 1;

			div_transition.run(false, function () {
				component.fire("outro.end", { node: div });
				if (--outros === 0) outrocallback();
				div_transition = null;
			});
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop
	};
}

// (10:2) {:else}
function create_if_block_2(component, state) {
	var div,
	    span,
	    text_value = state.current[0].temp.f,
	    text,
	    div_transition,
	    text_2,
	    sup,
	    text_4,
	    div_1,
	    span_1,
	    text_6,
	    span_2,
	    text_7_value = state.current[0].conditions.description,
	    text_7,
	    text_8,
	    span_3,
	    text_9_value = state.current[0].humidity,
	    text_9,
	    text_10,
	    introing,
	    outroing;

	return {
		c: function create() {
			div = createElement("div");
			span = createElement("span");
			text = createText(text_value);
			text_2 = createText("\n  ");
			sup = createElement("sup");
			sup.textContent = "°";
			text_4 = createText("\n  ");
			div_1 = createElement("div");
			span_1 = createElement("span");
			span_1.textContent = "F";
			text_6 = createText("\n    ");
			span_2 = createElement("span");
			text_7 = createText(text_7_value);
			text_8 = createText("\n    ");
			span_3 = createElement("span");
			text_9 = createText(text_9_value);
			text_10 = createText(" % Humidity");
			this.h();
		},

		h: function hydrate() {
			div.className = "card-body__temp svelte-13xnyib";
			sup.className = "weather-card__degree-symbol svelte-13xnyib";
			span_1.className = "svelte-13xnyib";
			span_2.className = "svelte-13xnyib";
			span_3.className = "svelte-13xnyib";
			div_1.className = "d-flex flex-column ml-2 card-body__status svelte-13xnyib";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(span, div);
			appendNode(text, span);
			insertNode(text_2, target, anchor);
			insertNode(sup, target, anchor);
			insertNode(text_4, target, anchor);
			insertNode(div_1, target, anchor);
			appendNode(span_1, div_1);
			appendNode(text_6, div_1);
			appendNode(span_2, div_1);
			appendNode(text_7, span_2);
			appendNode(text_8, div_1);
			appendNode(span_3, div_1);
			appendNode(text_9, span_3);
			appendNode(text_10, span_3);
		},

		p: function update(changed, state) {
			if ((outroing || changed.current) && text_value !== (text_value = state.current[0].temp.f)) {
				text.data = text_value;
			}

			if ((outroing || changed.current) && text_7_value !== (text_7_value = state.current[0].conditions.description)) {
				text_7.data = text_7_value;
			}

			if ((outroing || changed.current) && text_9_value !== (text_9_value = state.current[0].humidity)) {
				text_9.data = text_9_value;
			}
		},

		i: function intro(target, anchor) {
			if (introing) return;
			introing = true;
			outroing = false;

			component.root._aftercreate.push(function () {
				if (!div_transition) div_transition = wrapTransition(component, div, fade_1, {}, true, null);
				div_transition.run(true, function () {
					component.fire("intro.end", { node: div });
				});
			});

			this.m(target, anchor);
		},

		o: function outro(outrocallback) {
			if (outroing) return;
			outroing = true;
			introing = false;

			var outros = 1;

			div_transition.run(false, function () {
				component.fire("outro.end", { node: div });
				if (--outros === 0) outrocallback();
				div_transition = null;
			});
		},

		u: function unmount() {
			detachNode(div);
			detachNode(text_2);
			detachNode(sup);
			detachNode(text_4);
			detachNode(div_1);
		},

		d: noop
	};
}

function CardBody(options) {
	this._debugName = '<CardBody>';
	if (!options || !options.target && !options.root) throw new Error("'target' is a required option");
	init(this, options);
	this._state = assign$1({}, options.data);
	if (!('current' in this._state)) console.warn("<CardBody> was created without expected data property 'current'");

	if (!document.getElementById("svelte-13xnyib-style")) add_css$1();

	if (!options.root) {
		this._oncreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$1(this, this._state);

	if (options.target) {
		if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._aftercreate);
	}
}

assign$1(CardBody.prototype, protoDev);

CardBody.prototype._checkReadOnly = function _checkReadOnly(newState) {};

/* src/components/views/CardFooter.html generated by Svelte v2.1.1 */

function fade_1$1(node, _ref) {
	var _ref$delay = _ref.delay,
	    delay = _ref$delay === undefined ? 0 : _ref$delay,
	    _ref$duration = _ref.duration,
	    duration = _ref$duration === undefined ? 400 : _ref$duration;

	var o = +getComputedStyle(node).opacity;

	return {
		delay: delay,
		duration: duration,
		easing: cubicInOut,
		css: function css(t) {
			return 'opacity: ' + t * o;
		}
	};
}
function create_main_fragment$2(component, state) {
	var current_block_type_index, if_block, if_block_anchor;

	var if_block_creators = [create_if_block$1, create_if_block_1$1, create_if_block_2$1];

	var if_blocks = [];

	function select_block_type(state) {
		if (!state.forecast.length) return 0;
		if (state.forecast[0] === 'City not found') return 1;
		return 2;
	}

	current_block_type_index = select_block_type(state);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].i(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(state);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, state);
			} else {
				if_block.o(function () {
					if_blocks[previous_block_index].u();
					if_blocks[previous_block_index].d();
					if_blocks[previous_block_index] = null;
				});

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](component, state);
					if_block.c();
				}
				if_block.i(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			{
				if_blocks[current_block_type_index].u();
				if_blocks[current_block_type_index].d();
			}
		}
	};
}

// (31:2) {#each forecast as forecasts}
function create_each_block(component, state) {
	var forecasts = state.forecasts,
	    each_value = state.each_value,
	    forecasts_index = state.forecasts_index;
	var div,
	    span,
	    text_value = forecasts.date,
	    text,
	    text_1,
	    span_1,
	    img,
	    img_src_value,
	    text_3,
	    span_2,
	    text_4_value = forecasts.temp.f,
	    text_4,
	    text_5,
	    sup,
	    text_7,
	    text_8,
	    span_3,
	    text_9_value = forecasts.temp.c,
	    text_9,
	    text_10,
	    sup_1,
	    text_12;

	return {
		c: function create() {
			div = createElement("div");
			span = createElement("span");
			text = createText(text_value);
			text_1 = createText("\n    ");
			span_1 = createElement("span");
			img = createElement("img");
			text_3 = createText("\n    ");
			span_2 = createElement("span");
			text_4 = createText(text_4_value);
			text_5 = createText("\n      ");
			sup = createElement("sup");
			sup.textContent = "°";
			text_7 = createText("F");
			text_8 = createText("\n    ");
			span_3 = createElement("span");
			text_9 = createText(text_9_value);
			text_10 = createText("\n      ");
			sup_1 = createElement("sup");
			sup_1.textContent = "°";
			text_12 = createText("C");
			this.h();
		},

		h: function hydrate() {
			span.className = "forecast-item__date";
			img.src = img_src_value = "http://openweathermap.org/img/w/" + forecasts.conditions.icon + ".png";
			img.alt = "weather icon";
			span_1.className = "forecast-item__symbol";
			sup.className = "weather-card__degree-symbol";
			span_2.className = "forecast-item__temp--f";
			sup_1.className = "weather-card__degree-symbol";
			span_3.className = "forecast-item__temp--c";
			div.className = "d-flex flex-column text-center card-footer__forecast-item";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(span, div);
			appendNode(text, span);
			appendNode(text_1, div);
			appendNode(span_1, div);
			appendNode(img, span_1);
			appendNode(text_3, div);
			appendNode(span_2, div);
			appendNode(text_4, span_2);
			appendNode(text_5, span_2);
			appendNode(sup, span_2);
			appendNode(text_7, span_2);
			appendNode(text_8, div);
			appendNode(span_3, div);
			appendNode(text_9, span_3);
			appendNode(text_10, span_3);
			appendNode(sup_1, span_3);
			appendNode(text_12, span_3);
		},

		p: function update(changed, state) {
			forecasts = state.forecasts;
			each_value = state.each_value;
			forecasts_index = state.forecasts_index;
			if (changed.forecast && text_value !== (text_value = forecasts.date)) {
				text.data = text_value;
			}

			if (changed.forecast && img_src_value !== (img_src_value = "http://openweathermap.org/img/w/" + forecasts.conditions.icon + ".png")) {
				img.src = img_src_value;
			}

			if (changed.forecast && text_4_value !== (text_4_value = forecasts.temp.f)) {
				text_4.data = text_4_value;
			}

			if (changed.forecast && text_9_value !== (text_9_value = forecasts.temp.c)) {
				text_9.data = text_9_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop
	};
}

// (1:0) {#if !forecast.length}
function create_if_block$1(component, state) {
	var div, div_transition, text_3, style, introing, outroing;

	return {
		c: function create() {
			div = createElement("div");
			div.innerHTML = "<div class=\"col-6 text-center\"><h1>No Forecast Data</h1></div>";
			text_3 = createText("\n");
			style = createElement("style");
			style.textContent = ".weather-app-card__footer {\n    color: #888;\n    background: white;\n    padding: 1rem 0;\n    border-radius: 0 0 4px 4px;\n  }";
			this.h();
		},

		h: function hydrate() {
			div.className = "card-footer d-flex justify-content-center weather-app-card__footer";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			insertNode(text_3, target, anchor);
			insertNode(style, target, anchor);
		},

		p: noop,

		i: function intro(target, anchor) {
			if (introing) return;
			introing = true;
			outroing = false;

			component.root._aftercreate.push(function () {
				if (!div_transition) div_transition = wrapTransition(component, div, fade_1$1, {}, true, null);
				div_transition.run(true, function () {
					component.fire("intro.end", { node: div });
				});
			});

			this.m(target, anchor);
		},

		o: function outro(outrocallback) {
			if (outroing) return;
			outroing = true;
			introing = false;

			var outros = 1;

			div_transition.run(false, function () {
				component.fire("outro.end", { node: div });
				if (--outros === 0) outrocallback();
				div_transition = null;
			});
		},

		u: function unmount() {
			detachNode(div);
			detachNode(text_3);
			detachNode(style);
		},

		d: noop
	};
}

// (15:42) 
function create_if_block_1$1(component, state) {
	var div,
	    div_1,
	    h1,
	    text_value = state.forecast[0],
	    text,
	    div_transition,
	    text_3,
	    style,
	    introing,
	    outroing;

	return {
		c: function create() {
			div = createElement("div");
			div_1 = createElement("div");
			h1 = createElement("h1");
			text = createText(text_value);
			text_3 = createText("\n");
			style = createElement("style");
			style.textContent = ".weather-app-card__footer {\n    color: #888;\n    background: white;\n    padding: 1rem 0;\n    border-radius: 0 0 4px 4px;\n  }";
			this.h();
		},

		h: function hydrate() {
			div_1.className = "col-6 text-center";
			div.className = "card-footer d-flex justify-content-center weather-app-card__footer";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(div_1, div);
			appendNode(h1, div_1);
			appendNode(text, h1);
			insertNode(text_3, target, anchor);
			insertNode(style, target, anchor);
		},

		p: function update(changed, state) {
			if ((outroing || changed.forecast) && text_value !== (text_value = state.forecast[0])) {
				text.data = text_value;
			}
		},

		i: function intro(target, anchor) {
			if (introing) return;
			introing = true;
			outroing = false;

			component.root._aftercreate.push(function () {
				if (!div_transition) div_transition = wrapTransition(component, div, fade_1$1, {}, true, null);
				div_transition.run(true, function () {
					component.fire("intro.end", { node: div });
				});
			});

			this.m(target, anchor);
		},

		o: function outro(outrocallback) {
			if (outroing) return;
			outroing = true;
			introing = false;

			var outros = 1;

			div_transition.run(false, function () {
				component.fire("outro.end", { node: div });
				if (--outros === 0) outrocallback();
				div_transition = null;
			});
		},

		u: function unmount() {
			detachNode(div);
			detachNode(text_3);
			detachNode(style);
		},

		d: noop
	};
}

// (29:0) {:else}
function create_if_block_2$1(component, state) {
	var div, div_transition, text_1, style, introing, outroing;

	var each_value = state.forecast;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, assign$1(assign$1({}, state), {
			each_value: each_value,
			forecasts: each_value[i],
			forecasts_index: i
		}));
	}

	return {
		c: function create() {
			div = createElement("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_1 = createText("\n");
			style = createElement("style");
			style.textContent = ".weather-app-card__footer {\n    background: white;\n    padding: 1rem 0;\n    border-radius: 0 0 4px 4px;\n  }\n\n  .card-footer__forecast-item {\n    color: gray;\n    border-right: 1px solid lightgray;\n    width: 20%;\n  }\n\n  .forecast-item__date {\n    color: #888;\n  }\n\n  .forecast-item__temp--f {\n    color: navy;\n    font-size: 1.2em;\n    font-weight: bolder;\n  }\n\n  .forecast-item__temp--c {\n    color: #888;\n    font-size: .8em;\n    margin-top: .25em;\n  }\n\n  .card-footer__forecast-item span {\n    margin: .5em 0;\n  }\n\n  .card-footer__forecast-item:last-child {\n    border-right: none;\n  }";
			this.h();
		},

		h: function hydrate() {
			div.className = "card-footer w-100 d-flex weather-app-card__footer";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			insertNode(text_1, target, anchor);
			insertNode(style, target, anchor);
		},

		p: function update(changed, state) {
			var each_value = state.forecast;

			if (changed.forecast) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign$1(assign$1({}, state), {
						each_value: each_value,
						forecasts: each_value[i],
						forecasts_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}
		},

		i: function intro(target, anchor) {
			if (introing) return;
			introing = true;
			outroing = false;

			component.root._aftercreate.push(function () {
				if (!div_transition) div_transition = wrapTransition(component, div, fade_1$1, {}, true, null);
				div_transition.run(true, function () {
					component.fire("intro.end", { node: div });
				});
			});

			this.m(target, anchor);
		},

		o: function outro(outrocallback) {
			if (outroing) return;
			outroing = true;
			introing = false;

			var outros = 1;

			div_transition.run(false, function () {
				component.fire("outro.end", { node: div });
				if (--outros === 0) outrocallback();
				div_transition = null;
			});
		},

		u: function unmount() {
			detachNode(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			detachNode(text_1);
			detachNode(style);
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

function CardFooter(options) {
	this._debugName = '<CardFooter>';
	if (!options || !options.target && !options.root) throw new Error("'target' is a required option");
	init(this, options);
	this._state = assign$1({}, options.data);
	if (!('forecast' in this._state)) console.warn("<CardFooter> was created without expected data property 'forecast'");

	if (!options.root) {
		this._oncreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$2(this, this._state);

	if (options.target) {
		if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._aftercreate);
	}
}

assign$1(CardFooter.prototype, protoDev);

CardFooter.prototype._checkReadOnly = function _checkReadOnly(newState) {};

function data$1() {
	return {
		weather: [],
		apiKey: ''
	};
}
var methods$1 = {
	getWeather: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(value) {
			var initialState, results;
			return regenerator.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							initialState = this.get();

							if (value.current.city) {
								_context.next = 3;
								break;
							}

							return _context.abrupt("return", this.set({
								weather: [],
								apiKey: initialState.apiKey
							}));

						case 3:
							results = void 0;
							_context.prev = 4;
							_context.next = 7;
							return getFiveDayForecast(value.current);

						case 7:
							results = _context.sent;
							_context.next = 13;
							break;

						case 10:
							_context.prev = 10;
							_context.t0 = _context["catch"](4);

							results = ['City not found'];

						case 13:
							return _context.abrupt("return", this.set({
								weather: results
							}));

						case 14:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, this, [[4, 10]]);
		}));

		function getWeather(_x) {
			return _ref.apply(this, arguments);
		}

		return getWeather;
	}()
};

function add_css$2() {
	var style = createElement("style");
	style.id = 'svelte-1j9k5mo-style';
	style.textContent = ".weather-app-card.svelte-1j9k5mo{color:white;background-color:rgba(74, 144, 226,\n    0.75);box-shadow:0 0 .75rem rgba(0, 0, 0, 0.5);padding:0 0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmh0bWwiLCJzb3VyY2VzIjpbIkFwcC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIjxtYWluIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxzZWN0aW9uIGNsYXNzPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQgY29sLTYgd2VhdGhlci1hcHAtY2FyZFwiPlxuICAgICAgPENhcmRIZWFkZXIgb246c3RhdGU9XCJnZXRXZWF0aGVyKGV2ZW50KVwiIC8+XG4gICAgICA8Q2FyZEJvZHkgY3VycmVudD17d2VhdGhlcn0vPlxuICAgICAgPENhcmRGb290ZXIgZm9yZWNhc3Q9e3dlYXRoZXJ9Lz5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC9tYWluPlxuXG48c3R5bGU+XG4gIC53ZWF0aGVyLWFwcC1jYXJkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsXG4gICAgMC43NSk7XG4gICAgYm94LXNoYWRvdzogMCAwIC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMCAwO1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgZ2V0V2VhdGhlckJ5Q2l0eSBmcm9tICcuL3V0aWxzL2dldFdlYXRoZXJCeUNpdHknO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2VhdGhlcjogW10sXG4gICAgICAgIGFwaUtleTogJydcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIENhcmRIZWFkZXI6ICcuL2NvbXBvbmVudHMvdmlld3MvQ2FyZEhlYWRlci5odG1sJyxcbiAgICAgIENhcmRCb2R5OiAnLi9jb21wb25lbnRzL3ZpZXdzL0NhcmRCb2R5Lmh0bWwnLFxuICAgICAgQ2FyZEZvb3RlcjogJy4vY29tcG9uZW50cy92aWV3cy9DYXJkRm9vdGVyLmh0bWwnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBnZXRXZWF0aGVyOiBhc3luYyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKCF2YWx1ZS5jdXJyZW50LmNpdHkpIHtcbiAgICAgICAgICAvLyB0aGlzIHJlc2V0cyB0aGUgY2FyZEJvZHkgYW5kIGNhcmRGb290ZXIgY29tcG9uZW50c1xuICAgICAgICAgIHJldHVybiB0aGlzLnNldCh7XG4gICAgICAgICAgICB3ZWF0aGVyOiBbXSxcbiAgICAgICAgICAgIGFwaUtleTogaW5pdGlhbFN0YXRlLmFwaUtleVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRzXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0cyA9IGF3YWl0IGdldFdlYXRoZXJCeUNpdHkodmFsdWUuY3VycmVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3VsdHMgPSBbJ0NpdHkgbm90IGZvdW5kJ107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHtcbiAgICAgICAgICB3ZWF0aGVyOiByZXN1bHRzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXRSxpQkFBaUIsZUFBQyxDQUFDLEFBQ2pCLEtBQUssQ0FBRSxLQUFLLENBQ1osZ0JBQWdCLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEMsSUFBSSxDQUFDLENBQ0wsVUFBVSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3pDLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxBQUNkLENBQUMifQ== */";
	appendNode(style, document.head);
}

function create_main_fragment$3(component, state) {
	var main, section, div, text, text_1;

	var cardheader = new CardHeader({
		root: component.root
	});

	cardheader.on("state", function (event) {
		component.getWeather(event);
	});

	var cardbody_initial_data = { current: state.weather };
	var cardbody = new CardBody({
		root: component.root,
		data: cardbody_initial_data
	});

	var cardfooter_initial_data = { forecast: state.weather };
	var cardfooter = new CardFooter({
		root: component.root,
		data: cardfooter_initial_data
	});

	return {
		c: function create() {
			main = createElement("main");
			section = createElement("section");
			div = createElement("div");
			cardheader._fragment.c();
			text = createText("\n      ");
			cardbody._fragment.c();
			text_1 = createText("\n      ");
			cardfooter._fragment.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "card col-6 weather-app-card svelte-1j9k5mo";
			section.className = "col-12 d-flex justify-content-center";
			main.className = "container";
		},

		m: function mount(target, anchor) {
			insertNode(main, target, anchor);
			appendNode(section, main);
			appendNode(div, section);
			cardheader._mount(div, null);
			appendNode(text, div);
			cardbody._mount(div, null);
			appendNode(text_1, div);
			cardfooter._mount(div, null);
		},

		p: function update(changed, state) {
			var cardbody_changes = {};
			if (changed.weather) cardbody_changes.current = state.weather;
			cardbody._set(cardbody_changes);

			var cardfooter_changes = {};
			if (changed.weather) cardfooter_changes.forecast = state.weather;
			cardfooter._set(cardfooter_changes);
		},

		u: function unmount() {
			detachNode(main);
		},

		d: function destroy$$1() {
			cardheader.destroy(false);
			cardbody.destroy(false);
			cardfooter.destroy(false);
		}
	};
}

function App(options) {
	this._debugName = '<App>';
	if (!options || !options.target && !options.root) throw new Error("'target' is a required option");
	init(this, options);
	this._state = assign$1(data$1(), options.data);
	if (!('weather' in this._state)) console.warn("<App> was created without expected data property 'weather'");

	if (!document.getElementById("svelte-1j9k5mo-style")) add_css$2();

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$3(this, this._state);

	if (options.target) {
		if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign$1(App.prototype, protoDev);
assign$1(App.prototype, methods$1);

App.prototype._checkReadOnly = function _checkReadOnly(newState) {};

// Un-comment if you want to use Bootstrap js

var app = new App({
  target: document.querySelector("#weather-app")
});

export default app;
//# sourceMappingURL=bundle.es.js.map
