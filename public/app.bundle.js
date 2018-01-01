webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
(function (global, factory) {

	"use strict";

	if (typeof module === "object" && typeof module.exports === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	var support = {};

	function DOMEval(code, doc) {
		doc = doc || document;

		var script = doc.createElement("script");

		script.text = code;
		doc.head.appendChild(script).parentNode.removeChild(script);
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module


	var version = "3.1.1",


	// Define a local copy of jQuery
	jQuery = function (selector, context) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function (all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function () {
			return slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function (num) {

			// Return all the elements in a clean array
			if (num == null) {
				return slice.call(this);
			}

			// Return just the one element from the set
			return num < 0 ? this[num + this.length] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function (elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function (callback) {
			return jQuery.each(this, callback);
		},

		map: function (callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function () {
			return this.pushStack(slice.apply(this, arguments));
		},

		first: function () {
			return this.eq(0);
		},

		last: function () {
			return this.eq(-1);
		},

		eq: function (i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function () {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function (msg) {
			throw new Error(msg);
		},

		noop: function () {},

		isFunction: function (obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function (obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function (obj) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN(obj - parseFloat(obj));
		},

		isPlainObject: function (obj) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}

			proto = getProto(obj);

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if (!proto) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},

		isEmptyObject: function (obj) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for (name in obj) {
				return false;
			}
			return true;
		},

		type: function (obj) {
			if (obj == null) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function (code) {
			DOMEval(code);
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function (string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function (elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function (obj, callback) {
			var length,
			    i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function (text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function (arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function (elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function (first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function (elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function (elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function (fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = slice.call(arguments, 2);
			proxy = function () {
				return fn.apply(context || this, args.concat(slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function (a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function (list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",


		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + identifier + ")"),
			"CLASS": new RegExp("^\\.(" + identifier + ")"),
			"TAG": new RegExp("^(" + identifier + "|[*])"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,


		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function (_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    fcssescape = function (ch, asCodePoint) {
			if (asCodePoint) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if (ch === "\0") {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function () {
			setDocument();
		},
		    disabledAncestor = addCombinator(function (elem) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		}, { dir: "parentNode", next: "legend" });

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,


			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

			results = results || [];

			// Return early from calls with invalid selector or context
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			// Try to shortcut find operations (as opposed to filters) in HTML documents
			if (!seed) {

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;

				if (documentIsHTML) {

					// If the selector is sufficiently simple, try using a "get*By*" DOM method
					// (excepting DocumentFragment context, where the methods don't exist)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

						// ID selector
						if (m = match[1]) {

							// Document context
							if (nodeType === 9) {
								if (elem = context.getElementById(m)) {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}

								// Element context
							} else {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

									results.push(elem);
									return results;
								}
							}

							// Type selector
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Class selector
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// Take advantage of querySelectorAll
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;

							// qSA looks outside Element context, which is not what we want
							// Thanks to Andrew Dupont for this workaround technique
							// Support: IE <=8
							// Exclude object elements
						} else if (context.nodeName.toLowerCase() !== "object") {

							// Capture the context ID, setting it first if necessary
							if (nid = context.getAttribute("id")) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", nid = expando);
							}

							// Prefix every selector in the list
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");

							// Expand context for sibling selectors
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
		function assert(fn) {
			var el = document.createElement("fieldset");

			try {
				return !!fn(el);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				// release memory in IE
				el = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
		function createDisabledPseudo(disabled) {

			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
			return function (elem) {

				// Only certain elements can match :enabled or :disabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
				if ("form" in elem) {

					// Check for inherited disabledness on relevant non-disabled elements:
					// * listed form-associated elements in a disabled fieldset
					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
					// * option elements in a disabled optgroup
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
					// All such elements have a "form" property.
					if (elem.parentNode && elem.disabled === false) {

						// Option elements defer to a parent optgroup if present
						if ("label" in elem) {
							if ("label" in elem.parentNode) {
								return elem.parentNode.disabled === disabled;
							} else {
								return elem.disabled === disabled;
							}
						}

						// Support: IE 6 - 11
						// Use the isDisabled shortcut property to check for disabled fieldset ancestors
						return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
					}

					return elem.disabled === disabled;

					// Try to winnow out elements that can't be disabled before trusting the disabled property.
					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
					// even exist on them, let alone have a boolean value.
				} else if ("label" in elem) {
					return elem.disabled === disabled;
				}

				// Remaining elements are neither :enabled nor :disabled
				return false;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// Return early if doc is invalid or already selected
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Update global variables
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);

			// Support: IE 9-11, Edge
			// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
			if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

				// Support: IE 11, Edge
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);

					// Support: IE 9 - 10 only
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (el) {
				el.className = "i";
				return !el.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programmatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});

			// ID filter and find
			if (support.getById) {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var elem = context.getElementById(id);
						return elem ? [elem] : [];
					}
				};
			} else {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};

				// Support: IE 6 - 7 only
				// getElementById is not reliable as a find shortcut
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var node,
						    i,
						    elems,
						    elem = context.getElementById(id);

						if (elem) {

							// Verify the id attribute
							node = elem.getAttributeNode("id");
							if (node && node.value === id) {
								return [elem];
							}

							// Fall back on getElementsByName
							elems = context.getElementsByName(id);
							i = 0;
							while (elem = elems[i++]) {
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
							}
						}

						return [];
					}
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See https://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(document.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (el) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// https://bugs.jquery.com/ticket/12359
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibling-combinator selector` fails
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Support: IE9-11+
					// IE's :disabled selector does not pick up the children of disabled fieldsets
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (el) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(el, "*");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully self-exclusive
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return document;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.escape = function (sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function (match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function (match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function (match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function (nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function (className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function (name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function (type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[expando] || (node[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								// Use previously-cached element index if available
								if (useCache) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if (diff === false) {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

											// Cache the index of each encountered element
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

												uniqueCache[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function (pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function (elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function (elem) {
					return elem === docElem;
				},

				"focus": function (elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": createDisabledPseudo(false),
				"disabled": createDisabledPseudo(true),

				"checked": function (elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function (elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function (elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function (elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function (elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function (elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function (elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[key] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function (seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is only one selector in the list and no seed
			// (the latter of which guarantees us context)
			if (match.length === 1) {

				// Reduce context if the leading compound selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (el) {
			// Should return 1, but returns 4 (following)
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;

	var dir = function (elem, dir, until) {
		var matched = [],
		    truncate = until !== undefined;

		while ((elem = elem[dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};

	var siblings = function (n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		// Single element
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if (typeof qualifier !== "string") {
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if (risSimple.test(qualifier)) {
			return jQuery.filter(qualifier, elements, not);
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter(qualifier, elements);
		return jQuery.grep(elements, function (elem) {
			return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		if (elems.length === 1 && elem.nodeType === 1) {
			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		}

		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function (selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			ret = this.pushStack([]);

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function (selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function (selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function (selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {

							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					if (elem) {

						// Inject the element directly into the jQuery object
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || root).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) :

			// Execute immediately if ready is not present
			selector(jQuery);
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		has: function (target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function (selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);

			// Positional selectors never match, since there's no _selection_ context
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function (elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function (selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function (selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function (elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function (elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function (elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function (elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function (elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function (elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function (elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function (elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function (elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function (elem) {
			return siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function (elem) {
			return siblings(elem.firstChild);
		},
		contents: function (elem) {
			return elem.contentDocument || jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,


		// Last fire value for non-forgettable lists
		memory,


		// Flag to know if list was already fired
		fired,


		// Flag to prevent firing
		locked,


		// Actual callback list
		list = [],


		// Queue of execution data for repeatable lists
		queue = [],


		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,


		// Fire callbacks
		fire = function () {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {

					// Run callback and check for early termination
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if (!options.memory) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if (locked) {

				// Keep an empty list if we have data for future add calls
				if (memory) {
					list = [];

					// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},


		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function () {
				if (list) {

					// If we have memory from a past run, we should fire after adding
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}

					(function add(args) {
						jQuery.each(args, function (_, arg) {
							if (jQuery.isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && jQuery.type(arg) !== "string") {

								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);

					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function () {
				jQuery.each(arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);

						// Handle firing indexes
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function (fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function () {
				if (list) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function () {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function () {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function () {
				locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked: function () {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function (context, args) {
				if (!locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function () {
				self.fireWith(this, arguments);
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function () {
				return !!fired;
			}
		};

		return self;
	};

	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if (value && jQuery.isFunction(method = value.promise)) {
				method.call(value).done(resolve).fail(reject);

				// Other thenables
			} else if (value && jQuery.isFunction(method = value.then)) {
				method.call(value, resolve, reject);

				// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call(undefined, value);
			}

			// For Promises/A+, convert exceptions into rejections
			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
			// Deferred#then to conditionally suppress rejection.
		} catch (value) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call(undefined, value);
		}
	}

	jQuery.extend({

		Deferred: function (func) {
			var tuples = [

			// action, add listener, callbacks,
			// ... .then handlers, argument index, [final state]
			["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    state = "pending",
			    promise = {
				state: function () {
					return state;
				},
				always: function () {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch": function (fn) {
					return promise.then(null, fn);
				},

				// Keep pipe for back-compat
				pipe: function () /* fnDone, fnFail, fnProgress */{
					var fns = arguments;

					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function () {
							var that = this,
							    args = arguments,
							    mightThrow = function () {
								var returned, then;

								// Support: Promises/A+ section 2.3.3.3.3
								// https://promisesaplus.com/#point-59
								// Ignore double-resolution attempts
								if (depth < maxDepth) {
									return;
								}

								returned = handler.apply(that, args);

								// Support: Promises/A+ section 2.3.1
								// https://promisesaplus.com/#point-48
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}

								// Support: Promises/A+ sections 2.3.3.1, 3.5
								// https://promisesaplus.com/#point-54
								// https://promisesaplus.com/#point-75
								// Retrieve `then` only once
								then = returned && (

								// Support: Promises/A+ section 2.3.4
								// https://promisesaplus.com/#point-64
								// Only check objects and functions for thenability
								typeof returned === "object" || typeof returned === "function") && returned.then;

								// Handle a returned thenable
								if (jQuery.isFunction(then)) {

									// Special processors (notify) just wait for resolution
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

										// Normal processors (resolve) also hook into progress
									} else {

										// ...and disregard older resolution values
										maxDepth++;

										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}

									// Handle all other returned values
								} else {

									// Only substitute handlers pass on context
									// and multiple values (non-spec behavior)
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}

									// Process the value(s)
									// Default process is resolve
									(special || deferred.resolveWith)(that, args);
								}
							},


							// Only normal processors (resolve) catch and reject exceptions
							process = special ? mightThrow : function () {
								try {
									mightThrow();
								} catch (e) {

									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}

									// Support: Promises/A+ section 2.3.3.3.4.1
									// https://promisesaplus.com/#point-61
									// Ignore post-resolution exceptions
									if (depth + 1 >= maxDepth) {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}

										deferred.rejectWith(that, args);
									}
								}
							};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if (depth) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function (newDefer) {

						// progress_handlers.add( ... )
						tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

						// fulfilled_handlers.add( ... )
						tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

						// rejected_handlers.add( ... )
						tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function (obj) {
					return obj != null ? jQuery.extend(obj, promise) : promise;
				}
			},
			    deferred = {};

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[3 - i][2].disable,

					// progress_callbacks.lock
					tuples[0][2].lock);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add(tuple[3].fire);

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function (singleValue) {
			var

			// count of uncompleted subordinates
			remaining = arguments.length,


			// count of unprocessed arguments
			i = remaining,


			// subordinate fulfillment data
			resolveContexts = Array(i),
			    resolveValues = slice.call(arguments),


			// the master Deferred
			master = jQuery.Deferred(),


			// subordinate callback factory
			updateFunc = function (i) {
				return function (value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
					if (! --remaining) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

			// Single- and empty arguments are adopted like Promise.resolve
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}

			return master.promise();
		}
	});

	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function (error, stack) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};

	jQuery.readyException = function (error) {
		window.setTimeout(function () {
			throw error;
		});
	};

	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function (fn) {

		readyList.then(fn)

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch(function (error) {
			jQuery.readyException(error);
		});

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function (hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function (wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);
		}
	});

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout(jQuery.ready);
	} else {

		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", completed);

		// A fallback to window.onload, that will always work
		window.addEventListener("load", completed);
	}

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function (elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		if (chainable) {
			return elems;
		}

		// Gets
		if (bulk) {
			return fn.call(elems);
		}

		return len ? fn(elems[0], key) : emptyGet;
	};
	var acceptData = function (owner) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function (owner) {

			// Check if the owner object already has a cache
			var value = owner[this.expando];

			// If not, create one
			if (!value) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (acceptData(owner)) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if (owner.nodeType) {
						owner[this.expando] = value;

						// Otherwise secure it in a non-enumerable property
						// configurable must be true to allow the property to be
						// deleted when data is removed
					} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							configurable: true
						});
					}
				}
			}

			return value;
		},
		set: function (owner, data, value) {
			var prop,
			    cache = this.cache(owner);

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if (typeof data === "string") {
				cache[jQuery.camelCase(data)] = value;

				// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for (prop in data) {
					cache[jQuery.camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get: function (owner, key) {
			return key === undefined ? this.cache(owner) :

			// Always use camelCase key (gh-2257)
			owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
		},
		access: function (owner, key, value) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				return this.get(owner, key);
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function (owner, key) {
			var i,
			    cache = owner[this.expando];

			if (cache === undefined) {
				return;
			}

			if (key !== undefined) {

				// Support array or space separated string of keys
				if (jQuery.isArray(key)) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map(jQuery.camelCase);
				} else {
					key = jQuery.camelCase(key);

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}

				i = key.length;

				while (i--) {
					delete cache[key[i]];
				}
			}

			// Remove the expando if there's no more data
			if (key === undefined || jQuery.isEmptyObject(cache)) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData: function (owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;

	function getData(data) {
		if (data === "true") {
			return true;
		}

		if (data === "false") {
			return false;
		}

		if (data === "null") {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if (data === +data + "") {
			return +data;
		}

		if (rbrace.test(data)) {
			return JSON.parse(data);
		}

		return data;
	}

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function (elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},

		data: function (elem, name, data) {
			return dataUser.access(elem, name, data);
		},

		removeData: function (elem, name) {
			dataUser.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function (elem, name, data) {
			return dataPriv.access(elem, name, data);
		},

		_removeData: function (elem, name) {
			dataPriv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function (key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);

					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if (typeof key === "object") {
				return this.each(function () {
					dataUser.set(this, key);
				});
			}

			return access(this, function (value) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {

					// We always store the camelCased key
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function (key) {
			return this.each(function () {
				dataUser.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function (elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function (elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function () {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function (elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function (type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function (type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function (type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function (type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function () {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" || elem.style.display === "" &&

		// Otherwise, check computed style
		// Support: Firefox <=43 - 45
		// Disconnected elements can have computed display: none, so first confirm that elem is
		// in the document.
		jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};

	var swap = function (elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale = 1,
		    maxIterations = 20,
		    currentValue = tween ? function () {
			return tween.cur();
		} : function () {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


		// Starting value computation is required for potential unit mismatches
		initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style(elem, prop, initialInUnit + unit);

				// Update scale, tolerating zero or NaN from tween.cur()
				// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};

	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];

		if (display) {
			return display;
		}

		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");

		temp.parentNode.removeChild(temp);

		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;

		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;

		// Determine new display value for elements that need to change
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			display = elem.style.display;
			if (show) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";

					// Remember what we're overwriting
					dataPriv.set(elem, "display", display);
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for (index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		show: function () {
			return showHide(this, true);
		},
		hide: function () {
			return showHide(this);
		},
		toggle: function (state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = /^(?:checkbox|radio)$/i;

	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

	var rscriptType = /^$|\/(?:java|ecma)script/i;

	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [1, "<select multiple='multiple'>", "</select>"],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if (typeof context.getElementsByTagName !== "undefined") {
			ret = context.getElementsByTagName(tag || "*");
		} else if (typeof context.querySelectorAll !== "undefined") {
			ret = context.querySelectorAll(tag || "*");
		} else {
			ret = [];
		}

		if (tag === undefined || tag && jQuery.nodeName(context, tag)) {
			return jQuery.merge([context], ret);
		}

		return ret;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (jQuery.type(elem) === "object") {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, tmp.childNodes);

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while (elem = nodes[i++]) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(fragment.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		return fragment;
	}

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	function on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if (typeof types === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function (event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function (elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function (elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove data and the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},

		dispatch: function (nativeEvent) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix(nativeEvent);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;

			for (i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function (event, handlers) {
			var i,
			    handleObj,
			    sel,
			    matchedHandlers,
			    matchedSelectors,
			    handlerQueue = [],
			    delegateCount = handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!(event.type === "click" && event.button >= 1)) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
						matchedHandlers = [];
						matchedSelectors = {};
						for (i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matchedSelectors[sel] === undefined) {
								matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matchedSelectors[sel]) {
								matchedHandlers.push(handleObj);
							}
						}
						if (matchedHandlers.length) {
							handlerQueue.push({ elem: cur, handlers: matchedHandlers });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if (delegateCount < handlers.length) {
				handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		addProp: function (name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction(hook) ? function () {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function () {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},

				set: function (value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					});
				}
			});
		},

		fix: function (originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function () {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function () {
					if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function (event) {
					return jQuery.nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function (event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {

		// This "if" is needed for plain objects
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

			// Support: Android <=2.3 only
			src.returnValue === false ? returnTrue : returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function () {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function () {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function (event) {
			var button = event.button;

			// Add which for key events
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				if (button & 1) {
					return 1;
				}

				if (button & 2) {
					return 3;
				}

				if (button & 4) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp);

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function (event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	jQuery.fn.extend({

		on: function (types, selector, data, fn) {
			return on(this, types, selector, data, fn);
		},
		one: function (types, selector, data, fn) {
			return on(this, types, selector, data, fn, 1);
		},
		off: function (types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if (typeof types === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});

	var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,


	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget(elem, content) {
		if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

			return elem.getElementsByTagName("tbody")[0] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);

			dataUser.set(dest, udataCur);
		}
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    isFunction = jQuery.isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (isFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

							if (node.src) {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc);
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;

		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function (html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function (elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function (elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (data = elem[dataPriv.expando]) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		detach: function (selector) {
			return remove(this, selector, true);
		},

		remove: function (selector) {
			return remove(this, selector);
		},

		text: function (value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function () {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function () {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function () {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function () {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function () {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function (dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function (value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function () {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function (elem) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = window;
		}

		return view.getComputedStyle(elem);
	};

	(function () {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if (!div) {
				return;
			}

			div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild(container);

			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild(container);

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    pixelMarginRightVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
		container.appendChild(div);

		jQuery.extend(support, {
			pixelPosition: function () {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function () {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function () {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function () {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		});
	})();

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,
		    style = elem.style;

		computed = computed || getStyles(elem);

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function () {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// Shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	function setPositiveNumber(elem, value, subtract) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec(value);
		return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i,
		    val = 0;

		// If we already have the right measurement, avoid augmentation
		if (extra === (isBorderBox ? "border" : "content")) {
			i = 4;

			// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for (; i < 4; i += 2) {

			// Both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {

				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// At this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// At this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
		    valueIsBorderBox = true,
		    styles = getStyles(elem),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if (elem.getClientRects().length) {
			val = elem.getBoundingClientRect()[name];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function (elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function (elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    style = elem.style;

			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					style[name] = value;
				}
			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function (elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function (elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && (

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function (elem, value, extra) {
				var matches,
				    styles = extra && getStyles(elem),
				    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

				// Convert to pixels if value adjustment is needed
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

					elem.style[name] = value;
					value = jQuery.css(elem, name);
				}

				return setPositiveNumber(elem, value, subtract);
			}
		};
	});

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function (value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function (name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function (elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function () {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function (percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function (tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function (tween) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function (tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function (p) {
			return p;
		},
		swing: function (p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    timerId,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;

	function raf() {
		if (timerId) {
			window.requestAnimationFrame(raf);
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");

		// Queue-skipping animations hijack the fx hooks
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Detect show/hide animations
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;

						// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if (isBox && elem.nodeType === 1) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}

			// Animate inline elements as inline-block
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {

					// Restore the original display value at the end of pure show/hide animations
					if (!propTween) {
						anim.done(function () {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// Implement show/hide animations
		propTween = false;
		for (prop in orig) {

			// General show/hide setup for this element animation
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if (toggle) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if (hidden) {
					showHide([elem], true);
				}

				/* eslint-disable no-loop-func */

				anim.done(function () {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}

			// Per-property setup
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function () {

			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function () {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


			// Support: Android 2.3 only
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			if (percent < 1 && length) {
				return remaining;
			} else {
				deferred.resolveWith(elem, [animation]);
				return false;
			}
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function (prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function (gotoEnd) {
				var index = 0,


				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (jQuery.isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		// attach callbacks from options
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function (props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnothtmlwhite);
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function (callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if (jQuery.fx.off || document.hidden) {
			opt.duration = 0;
		} else {
			if (typeof opt.duration !== "number") {
				if (opt.duration in jQuery.fx.speeds) {
					opt.duration = jQuery.fx.speeds[opt.duration];
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function (speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHiddenWithinTree).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function (prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function () {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function (type, clearQueue, gotoEnd) {
			var stopQueue = function (hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function (type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		if (timer()) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.stop = function () {
		if (window.cancelAnimationFrame) {
			window.cancelAnimationFrame(timerId);
		} else {
			window.clearInterval(timerId);
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function (name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function (name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function (elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function (elem, value) {
					if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function (elem, value) {
			var name,
			    i = 0,


			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match(rnothtmlwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					elem.removeAttribute(name);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function (elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();

			if (!isXML) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function (name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function (name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		prop: function (elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return elem[name] = value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function (elem) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					if (tabindex) {
						return parseInt(tabindex, 10);
					}

					if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function (elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function (elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse(value) {
		var tokens = value.match(rnothtmlwhite) || [];
		return tokens.join(" ");
	}

	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}

	jQuery.fn.extend({
		addClass: function (value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function (value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function (value, stateVal) {
			var type = typeof value;

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (type === "string") {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = value.match(rnothtmlwhite) || [];

					while (className = classNames[i++]) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// Store className if set
						dataPriv.set(this, "__className__", className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},

		hasClass: function (selector) {
			var className,
			    elem,
			    i = 0;

			className = " " + selector + " ";
			while (elem = this[i++]) {
				if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function (value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if (typeof ret === "string") {
						return ret.replace(rreturn, "");
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function (elem) {

					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
				}
			},
			select: {
				get: function (elem) {
					var value,
					    option,
					    i,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length;

					if (index < 0) {
						i = max;
					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

						// Don't return options that are disabled or in a disabled optgroup
						!option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function (elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						/* eslint-disable no-cond-assign */

						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function (elem, value) {
				if (jQuery.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend(jQuery.event, {

		trigger: function (event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function (type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true
			});

			jQuery.event.trigger(e, null, elem);
		}

	});

	jQuery.fn.extend({

		trigger: function (type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function (type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function (fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	support.focusin = "onfocusin" in window;

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function (event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function () {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function () {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = /\?/;

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);
				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function (key, valueOrFunction) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&");
	};

	jQuery.fn.extend({
		serialize: function () {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				if (val == null) {
					return null;
				}

				if (jQuery.isArray(val)) {
					return jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					});
				}

				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rantiCache = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Anchor tag for parsing the document origin
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

			if (jQuery.isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {

					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},


		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function (target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function (url, options) {

			// If url is an object, simulate pre-1.5 signature
			if (typeof url === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,


			// URL without anti-cache param
			cacheURL,


			// Response headers
			responseHeadersString,
			    responseHeaders,


			// timeout handle
			timeoutTimer,


			// Url cleanup var
			urlAnchor,


			// Request state (becomes false upon send and true upon completion)
			completed,


			// To know if global events are to be dispatched
			fireGlobals,


			// Loop variable
			i,


			// uncached part of the url
			uncached,


			// Create the final options object
			s = jQuery.ajaxSetup({}, options),


			// Callbacks context
			callbackContext = s.context || s,


			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),


			// Status-dependent callbacks
			statusCode = s.statusCode || {},


			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},


			// Default abort message
			strAbort = "canceled",


			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function (key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function () {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function (name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function (type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function (map) {
					var code;
					if (map) {
						if (completed) {

							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for (code in map) {
								statusCode[code] = [statusCode[code], map[code]];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function (statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR);

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (completed) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace(rhash, "");

			// More options handling for requests with no content
			if (!s.hasContent) {

				// Remember the hash so we can put it back
				uncached = s.url.slice(cacheURL.length);

				// If data is available, append data to url
				if (s.data) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

				// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (completed) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Rethrow post-completion exceptions
					if (completed) {
						throw e;
					}

					// Propagate others as results
					done(-1, e);
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Ignore repeat invocations
				if (completed) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(statusCode);
				statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function (url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function (url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// Shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function (html) {
			var wrap;

			if (this[0]) {
				if (jQuery.isFunction(html)) {
					html = html.call(this[0]);
				}

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function (html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function (html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function (selector) {
			this.parent(selector).not("body").each(function () {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});

	jQuery.expr.pseudos.hidden = function (elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function (elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	};

	var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function (headers, complete) {
					var i,
					    xhr = options.xhr();

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					callback = function (type) {
						return function () {
							if (callback) {
								callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if (typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback("error");

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function () {

							// Check readyState before timeout as it changes
							if (xhr.readyState === 4) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout(function () {
									if (callback) {
										errorCallback();
									}
								});
							}
						};
					}

					// Create the abort callback
					callback = callback("abort");

					try {

						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (callback) {
							throw e;
						}
					}
				},

				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});

	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function (s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, callback;
			return {
				send: function (_, complete) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", callback = function (evt) {
						script.remove();
						callback = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild(script[0]);
				},
				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// Force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = function () {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	}();

	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (typeof data !== "string") {
			return [];
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if (!context) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && typeof params === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.pseudos.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	/**
  * Gets a window from an element
  */
	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function (elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function (options) {

			// Preserve chaining for setter
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var docElem,
			    win,
			    rect,
			    doc,
			    elem = this[0];

			if (!elem) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if (!elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if (rect.width || rect.height) {
				doc = elem.ownerDocument;
				win = getWindow(doc);
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function () {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
					left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function () {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});

	jQuery.fn.extend({

		bind: function (types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function (types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function (selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function (selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	jQuery.parseJSON = JSON.parse;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var AppConfig = function AppConfig($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist(["self", "https://wind-bow.gomix.me/twitch-api/users/**"]);
};

exports.default = AppConfig;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


var MainController = function MainController($scope, members) {

	$scope.onlineUsers = [];
	$scope.offlineUsers = [];
	$scope.invalid = [];

	$scope.users = members.users;

	$scope.state = function (online, offline) {
		$scope.online = online;
		$scope.offline = offline;
	};

	// This function needs to be curried to pass the name of the user to the invalid array
	// Since it won't be on the returned obeject.
	var formatUserData = function formatUserData(user) {
		return function (response) {
			if (response.status == 200) {
				if (response.data.error) {
					// If the user doesn't exist, the response object contains
					// an error property rather than throwing an error
					// These are the "Closed" Accounts	
					$scope.invalid.push({ "name": user });
				} else {
					//Next if the user exists, make a second request to get more data
					members.getStreams(user, formatStreamData(user, response.data));
				}
			}
		};
	};

	//This function needs to be curried becuase userData has information that 
	//streamData does not and both are need for a status update.
	var formatStreamData = function formatStreamData(user, userData) {
		return function (response) {
			if (response.status == 200) {
				var streamData = response.data;
				if (streamData.stream) {
					// These are the online users
					$scope.onlineUsers.push({ userData: userData, streamData: streamData });
				} else {
					// These are the offline users
					$scope.offlineUsers.push({ "name": user, userData: userData });
				}
			}
		};
	};

	$scope.users.forEach(function (user) {
		return members.getUser(user, formatUserData(user));
	});
};

exports.default = MainController;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function members($http) {

	this.users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

	this.getUser = function (user, callback) {
		$http.jsonp('https://wind-bow.gomix.me/twitch-api/users/' + user).then(callback).catch(console.log);
	};

	this.getStreams = function (user, callback) {
		var config = { headers: { 'Client-ID': 'di3ur1s4mxgvhj4xoshs7jbf2midww0' } };

		$http.get('https://api.twitch.tv/kraken/streams/' + user, config).then(callback).catch(console.log);
	};
};

exports.default = members;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line import/no-webpack-loader-syntax
module.exports = __webpack_require__(20);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _angularSanitize = __webpack_require__(0);

var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

var _AppConfig = __webpack_require__(3);

var _AppConfig2 = _interopRequireDefault(_AppConfig);

var _MainController = __webpack_require__(4);

var _MainController2 = _interopRequireDefault(_MainController);

var _members = __webpack_require__(5);

var _members2 = _interopRequireDefault(_members);

__webpack_require__(6);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('Twitch', [_angularSanitize2.default]).config(["$sceDelegateProvider", _AppConfig2.default]).service('members', ['$http', _members2.default]).controller('MainController', ['$scope', 'members', _MainController2.default]);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0; i < l; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function Collapse(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
    this.transitioning = null;

    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }

    if (this.options.toggle) this.toggle();
  };

  Collapse.VERSION = '3.3.7';

  Collapse.TRANSITION_DURATION = 350;

  Collapse.DEFAULTS = {
    toggle: true
  };

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return;

    var activesData;
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse');
      if (activesData && activesData.transitioning) return;
    }

    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    if (actives && actives.length) {
      Plugin.call(actives, 'hide');
      activesData || actives.data('bs.collapse', null);
    }

    var dimension = this.dimension();

    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

    this.transitioning = 1;

    var complete = function complete() {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return;

    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    var dimension = this.dimension();

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

    this.transitioning = 1;

    var complete = function complete() {
      this.transitioning = 0;
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
  };

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };

  Collapse.prototype.getParent = function () {
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);
      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
    }, this)).end();
  };

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in');

    $element.attr('aria-expanded', isOpen);
    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
  };

  function getTargetFromTrigger($trigger) {
    var href;
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

    return $(target);
  }

  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.collapse;

  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse;

  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };

  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this = $(this);

    if (!$this.attr('data-target')) e.preventDefault();

    var $target = getTargetFromTrigger($this);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();

    Plugin.call($target, option);
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;

    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };

  Modal.VERSION = '3.3.7';

  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

    this.$element.trigger(e);

    if (this.isShown || e.isDefaultPrevented()) return;

    this.isShown = true;

    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');

    this.escape();
    this.resize();

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
      });
    });

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.show().scrollTop(0);

      that.adjustDialog();

      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.addClass('in');

      that.enforceFocus();

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

      transition ? that.$dialog // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();

    e = $.Event('hide.bs.modal');

    this.$element.trigger(e);

    if (!this.isShown || e.isDefaultPrevented()) return;

    this.isShown = false;

    this.escape();
    this.resize();

    $(document).off('focusin.bs.modal');

    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

    this.$dialog.off('mousedown.dismiss.bs.modal');

    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };

  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal');
    }
  };

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
    } else {
      $(window).off('resize.bs.modal');
    }
  };

  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetAdjustments();
      that.resetScrollbar();
      that.$element.trigger('hidden.bs.modal');
    });
  };

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;

      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return;
        }
        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
      }, this));

      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');

      if (!callback) return;

      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');

      var callbackRemove = function callbackRemove() {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog();
  };

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    });
  };

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    });
  };

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
  };

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad);
  };

  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }

  var old = $.fn.modal;

  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;

  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };

  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

    if ($this.is('a')) e.preventDefault();

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(11);
var ieee754 = __webpack_require__(16);
var isArray = __webpack_require__(17);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

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
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
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

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
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
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
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
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).Buffer))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	var fixedCss = css.replace(/url *\( *(.+?) *\)/g, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.css = __webpack_require__ (24);
module.exports.js = __webpack_require__ (21);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__ (13);
__webpack_require__ (12);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, ".btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active:hover,\n.btn-default:active:focus,\n.btn-default:active.focus,\n.btn-default.active:hover,\n.btn-default.active:focus,\n.btn-default.active.focus,\n.open > .btn-default.dropdown-toggle:hover,\n.open > .btn-default.dropdown-toggle:focus,\n.open > .btn-default.dropdown-toggle.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-default.disabled:hover,\n.btn-default.disabled:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled]:hover,\n.btn-default[disabled]:focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default:hover,\nfieldset[disabled] .btn-default:focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:hover,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar:before,\n.btn-toolbar:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-toolbar:after {\n  clear: both;\n}\n\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle,\n.btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret,\n.btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret,\n.dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-group-vertical > .btn-group:after {\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\ninput[type=\"radio\"][disabled],\ninput[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed;\n}\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\n\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\n\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.has-feedback {\n  position: relative;\n}\n\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  content: \" \";\n  display: table;\n}\n\n.form-horizontal .form-group:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container:before,\n.container:after {\n  content: \" \";\n  display: table;\n}\n\n.container:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container-fluid:before,\n.container-fluid:after {\n  content: \" \";\n  display: table;\n}\n\n.container-fluid:after {\n  clear: both;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.row:before,\n.row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1,\n.col-sm-1,\n.col-md-1,\n.col-lg-1,\n.col-xs-2,\n.col-sm-2,\n.col-md-2,\n.col-lg-2,\n.col-xs-3,\n.col-sm-3,\n.col-md-3,\n.col-lg-3,\n.col-xs-4,\n.col-sm-4,\n.col-md-4,\n.col-lg-4,\n.col-xs-5,\n.col-sm-5,\n.col-md-5,\n.col-lg-5,\n.col-xs-6,\n.col-sm-6,\n.col-md-6,\n.col-lg-6,\n.col-xs-7,\n.col-sm-7,\n.col-md-7,\n.col-lg-7,\n.col-xs-8,\n.col-sm-8,\n.col-md-8,\n.col-lg-8,\n.col-xs-9,\n.col-sm-9,\n.col-md-9,\n.col-lg-9,\n.col-xs-10,\n.col-sm-10,\n.col-md-10,\n.col-lg-10,\n.col-xs-11,\n.col-sm-11,\n.col-md-11,\n.col-lg-11,\n.col-xs-12,\n.col-sm-12,\n.col-md-12,\n.col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n@media (min-width: 768px) {\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    float: left;\n  }\n\n  .col-sm-1 {\n    width: 8.33333%;\n  }\n\n  .col-sm-2 {\n    width: 16.66667%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333%;\n  }\n\n  .col-sm-5 {\n    width: 41.66667%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333%;\n  }\n\n  .col-sm-8 {\n    width: 66.66667%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333%;\n  }\n\n  .col-sm-11 {\n    width: 91.66667%;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-pull-0 {\n    right: auto;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-push-0 {\n    left: auto;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    float: left;\n  }\n\n  .col-md-1 {\n    width: 8.33333%;\n  }\n\n  .col-md-2 {\n    width: 16.66667%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-4 {\n    width: 33.33333%;\n  }\n\n  .col-md-5 {\n    width: 41.66667%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-7 {\n    width: 58.33333%;\n  }\n\n  .col-md-8 {\n    width: 66.66667%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-10 {\n    width: 83.33333%;\n  }\n\n  .col-md-11 {\n    width: 91.66667%;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-pull-0 {\n    right: auto;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-push-0 {\n    left: auto;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    float: left;\n  }\n\n  .col-lg-1 {\n    width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-pull-0 {\n    right: auto;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-push-0 {\n    left: auto;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.nav:before,\n.nav:after {\n  content: \" \";\n  display: table;\n}\n\n.nav:after {\n  clear: both;\n}\n\n.nav > li {\n  position: relative;\n  display: block;\n}\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.nav > li.disabled > a {\n  color: #777777;\n}\n\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #337ab7;\n}\n\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.nav > li > a > img {\n  max-width: none;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #ddd;\n}\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n\n.nav-pills > li {\n  float: left;\n}\n\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n\n.nav-stacked > li {\n  float: none;\n}\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n\n.nav-justified,\n.nav-tabs.nav-justified {\n  width: 100%;\n}\n\n.nav-justified > li,\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n\n.nav-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n\n@media (min-width: 768px) {\n  .nav-justified > li,\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n\n  .nav-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n\n.nav-tabs-justified,\n.nav-tabs.nav-justified {\n  border-bottom: 0;\n}\n\n.nav-tabs-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n\n.nav-tabs-justified > .active > a,\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .nav-tabs-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar:before,\n.navbar:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n\n.navbar-header:before,\n.navbar-header:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-header:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n\n.navbar-collapse:before,\n.navbar-collapse:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-collapse:after {\n  clear: both;\n}\n\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-header,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-brand > img {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle:focus {\n  outline: 0;\n}\n\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n\n  .navbar-nav > li {\n    float: left;\n  }\n\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.navbar-btn.btn-sm,\n.btn-group-sm > .navbar-btn.btn {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.navbar-btn.btn-xs,\n.btn-group-xs > .navbar-btn.btn {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-brand {\n  color: #777;\n}\n\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-text {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n\n.navbar-default .navbar-link {\n  color: #777;\n}\n\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n\n.navbar-default .btn-link {\n  color: #777;\n}\n\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n\n.navbar-default .btn-link[disabled]:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:hover,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909;\n}\n\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #090909;\n}\n\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #090909;\n  color: #fff;\n}\n\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link[disabled]:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh1 .small,\nh2 small,\nh2 .small,\nh3 small,\nh3 .small,\nh4 small,\nh4 .small,\nh5 small,\nh5 .small,\nh6 small,\nh6 .small,\n.h1 small,\n.h1 .small,\n.h2 small,\n.h2 .small,\n.h3 small,\n.h3 .small,\n.h4 small,\n.h4 .small,\n.h5 small,\n.h5 .small,\n.h6 small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\nh1 small,\nh1 .small,\n.h1 small,\n.h1 .small,\nh2 small,\nh2 .small,\n.h2 small,\n.h2 .small,\nh3 small,\nh3 .small,\n.h3 small,\n.h3 .small {\n  font-size: 65%;\n}\n\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh4 small,\nh4 .small,\n.h4 small,\n.h4 .small,\nh5 small,\nh5 .small,\n.h5 small,\n.h5 .small,\nh6 small,\nh6 .small,\n.h6 small,\n.h6 .small {\n  font-size: 75%;\n}\n\nh1,\n.h1 {\n  font-size: 36px;\n}\n\nh2,\n.h2 {\n  font-size: 30px;\n}\n\nh3,\n.h3 {\n  font-size: 24px;\n}\n\nh4,\n.h4 {\n  font-size: 18px;\n}\n\nh5,\n.h5 {\n  font-size: 14px;\n}\n\nh6,\n.h6 {\n  font-size: 12px;\n}\n\np {\n  margin: 0 0 10px;\n}\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\n\nsmall,\n.small {\n  font-size: 85%;\n}\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase,\n.initialism {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-muted {\n  color: #777777;\n}\n\n.text-primary {\n  color: #337ab7;\n}\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n\n.text-success {\n  color: #3c763d;\n}\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n\n.text-info {\n  color: #31708f;\n}\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n\n.text-warning {\n  color: #8a6d3b;\n}\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n\n.text-danger {\n  color: #a94442;\n}\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n\n.bg-primary {\n  color: #fff;\n}\n\n.bg-primary {\n  background-color: #337ab7;\n}\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n\n.bg-success {\n  background-color: #dff0d8;\n}\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n\n.bg-info {\n  background-color: #d9edf7;\n}\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n\n.bg-warning {\n  background-color: #fcf8e3;\n}\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n\n.bg-danger {\n  background-color: #f2dede;\n}\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nul ul,\nul ol,\nol ul,\nol ol {\n  margin-bottom: 0;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\ndt,\ndd {\n  line-height: 1.42857;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n.dl-horizontal dd:before,\n.dl-horizontal dd:after {\n  content: \" \";\n  display: table;\n}\n\n.dl-horizontal dd:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n\n.initialism {\n  font-size: 90%;\n}\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857;\n  color: #777777;\n}\n\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n\n.blockquote-reverse footer:before,\n.blockquote-reverse small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n\n.blockquote-reverse footer:after,\n.blockquote-reverse small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857;\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-right {\n  float: right !important;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.affix {\n  position: fixed;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtbG9hZGVyL25vLW9wLmpzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19oaWRlLXRleHQuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fb3BhY2l0eS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19pbWFnZS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19sYWJlbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzZXQtZmlsdGVyLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Jlc2l6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19yZXNwb25zaXZlLXZpc2liaWxpdHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fc2l6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL190YWItZm9jdXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzZXQtdGV4dC5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL190ZXh0LWVtcGhhc2lzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RleHQtb3ZlcmZsb3cuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fdmVuZG9yLXByZWZpeGVzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2FsZXJ0cy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19idXR0b25zLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3BhbmVscy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19wYWdpbmF0aW9uLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2xpc3QtZ3JvdXAuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fbmF2LWRpdmlkZXIuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fZm9ybXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcHJvZ3Jlc3MtYmFyLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RhYmxlLXJvdy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19iYWNrZ3JvdW5kLXZhcmlhbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fYm9yZGVyLXJhZGl1cy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmFkaWVudHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fY2xlYXJmaXguc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fY2VudGVyLWJsb2NrLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX25hdi12ZXJ0aWNhbC1hbGlnbi5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmlkLWZyYW1ld29yay5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmlkLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdmFyaWFibGVzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2J1dHRvbi1ncm91cHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19mb3Jtcy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2dyaWQuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19uYXZzLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbmF2YmFyLnNjc3MiLCJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdHlwZS5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Rvb2x0aXAuc2NzcyIsIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL191dGlsaXRpZXMuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdmFyaWFibGVzXCI7XG4kaWNvbi1mb250LXBhdGg6IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2ZvbnRzL2Jvb3RzdHJhcC9cIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19idXR0b25zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9uLWdyb3Vwc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Zvcm1zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZ3JpZFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25hdnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19uYXZiYXJcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190eXBlXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdG9vbHRpcFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3V0aWxpdGllc1wiO1xuXG4iLCIvLyBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFV0aWxpdGllc1xuQGltcG9ydCBcIm1peGlucy9oaWRlLXRleHRcIjtcbkBpbXBvcnQgXCJtaXhpbnMvb3BhY2l0eVwiO1xuQGltcG9ydCBcIm1peGlucy9pbWFnZVwiO1xuQGltcG9ydCBcIm1peGlucy9sYWJlbHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzZXQtZmlsdGVyXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Jlc2l6ZVwiO1xuQGltcG9ydCBcIm1peGlucy9yZXNwb25zaXZlLXZpc2liaWxpdHlcIjtcbkBpbXBvcnQgXCJtaXhpbnMvc2l6ZVwiO1xuQGltcG9ydCBcIm1peGlucy90YWItZm9jdXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzZXQtdGV4dFwiO1xuQGltcG9ydCBcIm1peGlucy90ZXh0LWVtcGhhc2lzXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtb3ZlcmZsb3dcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdmVuZG9yLXByZWZpeGVzXCI7XG5cbi8vIENvbXBvbmVudHNcbkBpbXBvcnQgXCJtaXhpbnMvYWxlcnRzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2J1dHRvbnNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcGFuZWxzXCI7XG5AaW1wb3J0IFwibWl4aW5zL3BhZ2luYXRpb25cIjtcbkBpbXBvcnQgXCJtaXhpbnMvbGlzdC1ncm91cFwiO1xuQGltcG9ydCBcIm1peGlucy9uYXYtZGl2aWRlclwiO1xuQGltcG9ydCBcIm1peGlucy9mb3Jtc1wiO1xuQGltcG9ydCBcIm1peGlucy9wcm9ncmVzcy1iYXJcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdGFibGUtcm93XCI7XG5cbi8vIFNraW5zXG5AaW1wb3J0IFwibWl4aW5zL2JhY2tncm91bmQtdmFyaWFudFwiO1xuQGltcG9ydCBcIm1peGlucy9ib3JkZXItcmFkaXVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyYWRpZW50c1wiO1xuXG4vLyBMYXlvdXRcbkBpbXBvcnQgXCJtaXhpbnMvY2xlYXJmaXhcIjtcbkBpbXBvcnQgXCJtaXhpbnMvY2VudGVyLWJsb2NrXCI7XG5AaW1wb3J0IFwibWl4aW5zL25hdi12ZXJ0aWNhbC1hbGlnblwiO1xuQGltcG9ydCBcIm1peGlucy9ncmlkLWZyYW1ld29ya1wiO1xuQGltcG9ydCBcIm1peGlucy9ncmlkXCI7XG4iLCIvLyBDU1MgaW1hZ2UgcmVwbGFjZW1lbnRcbi8vXG4vLyBIZWFkcyB1cCEgdjMgbGF1bmNoZWQgd2l0aCBvbmx5IGAuaGlkZS10ZXh0KClgLCBidXQgcGVyIG91ciBwYXR0ZXJuIGZvclxuLy8gbWl4aW5zIGJlaW5nIHJldXNlZCBhcyBjbGFzc2VzIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhpcyBkb2Vzbid0IGhvbGQgdXAuIEFzXG4vLyBvZiB2My4wLjEgd2UgaGF2ZSBhZGRlZCBgLnRleHQtaGlkZSgpYCBhbmQgZGVwcmVjYXRlZCBgLmhpZGUtdGV4dCgpYC5cbi8vXG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2NvbW1pdC9hYTAzOTZlYWU3NTdcblxuLy8gRGVwcmVjYXRlZCBhcyBvZiB2My4wLjEgKGhhcyBiZWVuIHJlbW92ZWQgaW4gdjQpXG5AbWl4aW4gaGlkZS10ZXh0KCkge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gTmV3IG1peGluIHRvIHVzZSBhcyBvZiB2My4wLjFcbkBtaXhpbiB0ZXh0LWhpZGUoKSB7XG4gIEBpbmNsdWRlIGhpZGUtdGV4dDtcbn1cbiIsIi8vIE9wYWNpdHlcblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIC8vIElFOCBmaWx0ZXJcbiAgJG9wYWNpdHktaWU6ICgkb3BhY2l0eSAqIDEwMCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XG59XG4iLCIvLyBJbWFnZSBNaXhpbnNcbi8vIC0gUmVzcG9uc2l2ZSBpbWFnZVxuLy8gLSBSZXRpbmEgaW1hZ2VcblxuXG4vLyBSZXNwb25zaXZlIGltYWdlXG4vL1xuLy8gS2VlcCBpbWFnZXMgZnJvbSBzY2FsaW5nIGJleW9uZCB0aGUgd2lkdGggb2YgdGhlaXIgcGFyZW50cy5cbkBtaXhpbiBpbWctcmVzcG9uc2l2ZSgkZGlzcGxheTogYmxvY2spIHtcbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIG1heC13aWR0aDogMTAwJTsgLy8gUGFydCAxOiBTZXQgYSBtYXhpbXVtIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnRcbiAgaGVpZ2h0OiBhdXRvOyAvLyBQYXJ0IDI6IFNjYWxlIHRoZSBoZWlnaHQgYWNjb3JkaW5nIHRvIHRoZSB3aWR0aCwgb3RoZXJ3aXNlIHlvdSBnZXQgc3RyZXRjaGluZ1xufVxuXG5cbi8vIFJldGluYSBpbWFnZVxuLy9cbi8vIFNob3J0IHJldGluYSBtaXhpbiBmb3Igc2V0dGluZyBiYWNrZ3JvdW5kLWltYWdlIGFuZCAtc2l6ZS4gTm90ZSB0aGF0IHRoZVxuLy8gc3BlbGxpbmcgb2YgYG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpb2AgaXMgaW50ZW50aW9uYWwuXG5AbWl4aW4gaW1nLXJldGluYSgkZmlsZS0xeCwgJGZpbGUtMngsICR3aWR0aC0xeCwgJGhlaWdodC0xeCkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgdHdicy1pbWFnZS1wYXRoKFwiI3skZmlsZS0xeH1cIiksIFwiI3skZmlsZS0xeH1cIikpO1xuXG4gIEBtZWRpYVxuICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgIC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICBtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICAgICAgICAgIG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWltYWdlLXBhdGgoXCIjeyRmaWxlLTJ4fVwiKSwgXCIjeyRmaWxlLTJ4fVwiKSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAkd2lkdGgtMXggJGhlaWdodC0xeDtcbiAgfVxufVxuIiwiLy8gTGFiZWxzXG5cbkBtaXhpbiBsYWJlbC12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5IGFuZCBiZWxvdy5cblxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cbiIsIi8vIFJlc2l6ZSBhbnl0aGluZ1xuXG5AbWl4aW4gcmVzaXphYmxlKCRkaXJlY3Rpb24pIHtcbiAgcmVzaXplOiAkZGlyZWN0aW9uOyAvLyBPcHRpb25zOiBob3Jpem9udGFsLCB2ZXJ0aWNhbCwgYm90aFxuICBvdmVyZmxvdzogYXV0bzsgLy8gUGVyIENTUzMgVUksIGByZXNpemVgIG9ubHkgYXBwbGllcyB3aGVuIGBvdmVyZmxvd2AgaXNuJ3QgYHZpc2libGVgXG59XG4iLCIvLyBSZXNwb25zaXZlIHV0aWxpdGllc1xuXG4vL1xuLy8gTW9yZSBlYXNpbHkgaW5jbHVkZSBhbGwgdGhlIHN0YXRlcyBmb3IgcmVzcG9uc2l2ZS11dGlsaXRpZXMubGVzcy5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgkcGFyZW50KSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGFibGUjeyRwYXJlbnR9ICB7IGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgdHIjeyRwYXJlbnR9ICAgICB7IGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gIHRoI3skcGFyZW50fSxcbiAgdGQjeyRwYXJlbnR9ICAgICB7IGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxufVxuXG4vLyBbY29udmVydGVyXSAkcGFyZW50IGhhY2tcbkBtaXhpbiByZXNwb25zaXZlLWludmlzaWJpbGl0eSgkcGFyZW50KSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLy8gU2l6aW5nIHNob3J0Y3V0c1xuXG5AbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gc3F1YXJlKCRzaXplKSB7XG4gIEBpbmNsdWRlIHNpemUoJHNpemUsICRzaXplKTtcbn1cbiIsIi8vIFdlYktpdC1zdHlsZSBmb2N1c1xuXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBXZWJLaXQtc3BlY2lmaWMuIE90aGVyIGJyb3dzZXJzIHdpbGwga2VlcCB0aGVpciBkZWZhdWx0IG91dGxpbmUgc3R5bGUuXG4gIC8vIChJbml0aWFsbHkgdHJpZWQgdG8gYWxzbyBmb3JjZSBkZWZhdWx0IHZpYSBgb3V0bGluZTogaW5pdGlhbGAsXG4gIC8vIGJ1dCB0aGF0IHNlZW1zIHRvIGVycm9uZW91c2x5IHJlbW92ZSB0aGUgb3V0bGluZSBpbiBGaXJlZm94IGFsdG9nZXRoZXIuKVxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuIiwiQG1peGluIHJlc2V0LXRleHQoKSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgLy8gV2UgZGVsaWJlcmF0ZWx5IGRvIE5PVCByZXNldCBmb250LXNpemUuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbGluZS1icmVhazogYXV0bztcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyAvLyBGYWxsYmFjayBmb3Igd2hlcmUgYHN0YXJ0YCBpcyBub3Qgc3VwcG9ydGVkXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG4iLCIvLyBUeXBvZ3JhcGh5XG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHRleHQtZW1waGFzaXMtdmFyaWFudCgkcGFyZW50LCAkY29sb3IpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgfVxuICBhI3skcGFyZW50fTpob3ZlcixcbiAgYSN7JHBhcmVudH06Zm9jdXMge1xuICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICB9XG59XG4iLCIvLyBUZXh0IG92ZXJmbG93XG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIi8vIFZlbmRvciBQcmVmaXhlc1xuLy9cbi8vIEFsbCB2ZW5kb3IgbWl4aW5zIGFyZSBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBkdWUgdG8gdGhlIGludHJvZHVjdGlvbiBvZlxuLy8gQXV0b3ByZWZpeGVyIGluIG91ciBHcnVudGZpbGUuIFRoZXkgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gdjQuXG5cbi8vIC0gQW5pbWF0aW9uc1xuLy8gLSBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyAtIEJveCBzaGFkb3dcbi8vIC0gQm94IHNpemluZ1xuLy8gLSBDb250ZW50IGNvbHVtbnNcbi8vIC0gSHlwaGVuc1xuLy8gLSBQbGFjZWhvbGRlciB0ZXh0XG4vLyAtIFRyYW5zZm9ybWF0aW9uc1xuLy8gLSBUcmFuc2l0aW9uc1xuLy8gLSBVc2VyIFNlbGVjdFxuXG5cbi8vIEFuaW1hdGlvbnNcbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbiAgICAgICAtby1hbmltYXRpb246ICRhbmltYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1uYW1lKCRuYW1lKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcbn1cbkBtaXhpbiBhbmltYXRpb24tZHVyYXRpb24oJGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1kZWxheSgkZGVsYXkpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbkBtaXhpbiBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50KCRpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAkaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG59XG5AbWl4aW4gYW5pbWF0aW9uLWRpcmVjdGlvbigkZGlyZWN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1maWxsLW1vZGUoJGZpbGwtbW9kZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6ICRmaWxsLW1vZGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogJGZpbGwtbW9kZTtcbn1cblxuLy8gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gUHJldmVudCBicm93c2VycyBmcm9tIGZsaWNrZXJpbmcgd2hlbiB1c2luZyBDU1MgM0QgdHJhbnNmb3Jtcy5cbi8vIERlZmF1bHQgdmFsdWUgaXMgYHZpc2libGVgLCBidXQgY2FuIGJlIGNoYW5nZWQgdG8gYGhpZGRlbmBcblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZpc2liaWxpdHkpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbn1cblxuLy8gRHJvcCBzaGFkb3dzXG4vL1xuLy8gTm90ZTogRGVwcmVjYXRlZCBgLmJveC1zaGFkb3coKWAgYXMgb2YgdjMuMS4wIHNpbmNlIGFsbCBvZiBCb290c3RyYXAnc1xuLy8gc3VwcG9ydGVkIGJyb3dzZXJzIHRoYXQgaGF2ZSBib3ggc2hhZG93IGNhcGFiaWxpdGllcyBub3cgc3VwcG9ydCBpdC5cblxuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuLy8gQm94IHNpemluZ1xuQG1peGluIGJveC1zaXppbmcoJGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6ICRib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiAkYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG5AbWl4aW4gY29udGVudC1jb2x1bW5zKCRjb2x1bW4tY291bnQsICRjb2x1bW4tZ2FwOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6ICRjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiAkY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogJGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbkBtaXhpbiBoeXBoZW5zKCRtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiAkbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiAkbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiAkbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiAkbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiAkbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBvcGFjaXR5OiAxOyAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNlxuICB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuQG1peGluIHNjYWxlKCRyYXRpby4uLikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTtcbn1cblxuQG1peGluIHNjYWxlWCgkcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoJHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xufVxuQG1peGluIHNjYWxlWSgkcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoJHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xufVxuQG1peGluIHNrZXcoJHgsICR5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNDg4NTsgSUU5K1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKCR4KSBza2V3WSgkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlKCR4LCAkeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlM2QoJHgsICR5LCAkeikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbn1cbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gcm90YXRlWCgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG59XG5AbWl4aW4gcm90YXRlWSgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6ICRwZXJzcGVjdGl2ZTtcbiAgICAgLW1vei1wZXJzcGVjdGl2ZTogJHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiAkcGVyc3BlY3RpdmU7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUtb3JpZ2luKCRwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xufVxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJG9yaWdpbikge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XG4gICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luOyAvLyBJRTkgb25seVxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XG59XG5cblxuLy8gVHJhbnNpdGlvbnNcblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXByb3BlcnR5KCR0cmFuc2l0aW9uLXByb3BlcnR5Li4uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHRyYW5zaXRpb24tcHJvcGVydHk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHRyYW5zaXRpb24tcHJvcGVydHk7XG59XG5AbWl4aW4gdHJhbnNpdGlvbi1kZWxheSgkdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xufVxuQG1peGluIHRyYW5zaXRpb24tZHVyYXRpb24oJHRyYW5zaXRpb24tZHVyYXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG59XG5AbWl4aW4gdHJhbnNpdGlvbi10cmFuc2Zvcm0oJHRyYW5zaXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gJHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuQG1peGluIHVzZXItc2VsZWN0KCRzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogJHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogJHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogJHNlbGVjdDtcbn1cbiIsIi8vIEFsZXJ0c1xuXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG4iLCIvLyBCdXR0b24gdmFyaWFudHNcbi8vXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcblxuQG1peGluIGJ1dHRvbi12YXJpYW50KCRjb2xvciwgJGJhY2tncm91bmQsICRib3JkZXIpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcblxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTAlKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgMjUlKTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTAlKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgMTIlKTtcbiAgfVxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gIC5vcGVuID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAxMiUpO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTclKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAyNSUpO1xuICAgIH1cbiAgfVxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gIC5vcGVuID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cbiAgJi5kaXNhYmxlZCxcbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLmJhZGdlIHtcbiAgICBjb2xvcjogJGJhY2tncm91bmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG59XG5cbi8vIEJ1dHRvbiBzaXplc1xuQG1peGluIGJ1dHRvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG59XG4iLCIvLyBQYW5lbHNcblxuQG1peGluIHBhbmVsLXZhcmlhbnQoJGJvcmRlciwgJGhlYWRpbmctdGV4dC1jb2xvciwgJGhlYWRpbmctYmctY29sb3IsICRoZWFkaW5nLWJvcmRlcikge1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG5cbiAgJiA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgICBjb2xvcjogJGhlYWRpbmctdGV4dC1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGluZy1iZy1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRoZWFkaW5nLWJvcmRlcjtcblxuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gICAgLmJhZGdlIHtcbiAgICAgIGNvbG9yOiAkaGVhZGluZy1iZy1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkaW5nLXRleHQtY29sb3I7XG4gICAgfVxuICB9XG4gICYgPiAucGFuZWwtZm9vdGVyIHtcbiAgICArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXI7XG4gICAgfVxuICB9XG59XG4iLCIvLyBQYWdpbmF0aW9uXG5cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGJvcmRlci1yYWRpdXMpIHtcbiAgPiBsaSB7XG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBMaXN0IEdyb3Vwc1xuXG5AbWl4aW4gbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoJHN0YXRlLCAkYmFja2dyb3VuZCwgJGNvbG9yKSB7XG4gIC5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9IHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuXG4gICAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmLCBidXR0b24mIHRvIGEubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSwgYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX1cbiAgfVxuXG4gIGEubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSxcbiAgYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0ge1xuICAgIGNvbG9yOiAkY29sb3I7XG5cbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcbiAgICB9XG4gICAgJi5hY3RpdmUsXG4gICAgJi5hY3RpdmU6aG92ZXIsXG4gICAgJi5hY3RpdmU6Zm9jdXMge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEhvcml6b250YWwgZGl2aWRlcnNcbi8vXG4vLyBEaXZpZGVycyAoYmFzaWNhbGx5IGFuIGhyKSB3aXRoaW4gZHJvcGRvd25zIGFuZCBuYXYgbGlzdHNcblxuQG1peGluIG5hdi1kaXZpZGVyKCRjb2xvcjogI2U1ZTVlNSkge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAoKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpIC0gMSkgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xufVxuIiwiLy8gRm9ybSB2YWxpZGF0aW9uIHN0YXRlc1xuLy9cbi8vIFVzZWQgaW4gZm9ybXMubGVzcyB0byBnZW5lcmF0ZSB0aGUgZm9ybSB2YWxpZGF0aW9uIENTUyBmb3Igd2FybmluZ3MsIGVycm9ycyxcbi8vIGFuZCBzdWNjZXNzZXMuXG5cbkBtaXhpbiBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkdGV4dC1jb2xvcjogIzU1NSwgJGJvcmRlci1jb2xvcjogI2NjYywgJGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUpIHtcbiAgLy8gQ29sb3IgdGhlIGxhYmVsIGFuZCBoZWxwIHRleHRcbiAgLmhlbHAtYmxvY2ssXG4gIC5jb250cm9sLWxhYmVsLFxuICAucmFkaW8sXG4gIC5jaGVja2JveCxcbiAgLnJhZGlvLWlubGluZSxcbiAgLmNoZWNrYm94LWlubGluZSxcbiAgJi5yYWRpbyBsYWJlbCxcbiAgJi5jaGVja2JveCBsYWJlbCxcbiAgJi5yYWRpby1pbmxpbmUgbGFiZWwsXG4gICYuY2hlY2tib3gtaW5saW5lIGxhYmVsICB7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICB9XG4gIC8vIFNldCB0aGUgYm9yZGVyIGFuZCBib3ggc2hhZG93IG9uIHNwZWNpZmljIGlucHV0cyB0byBtYXRjaFxuICAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSk7IC8vIFJlZGVjbGFyZSBzbyB0cmFuc2l0aW9ucyB3b3JrXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLWNvbG9yLCAxMCUpO1xuICAgICAgJHNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA2cHggbGlnaHRlbigkYm9yZGVyLWNvbG9yLCAyMCUpO1xuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygkc2hhZG93KTtcbiAgICB9XG4gIH1cbiAgLy8gU2V0IHZhbGlkYXRpb24gc3RhdGVzIGFsc28gZm9yIGFkZG9uc1xuICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbiAgLy8gT3B0aW9uYWwgZmVlZGJhY2sgaWNvblxuICAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gIH1cbn1cblxuXG4vLyBGb3JtIGNvbnRyb2wgZm9jdXMgc3RhdGVcbi8vXG4vLyBHZW5lcmF0ZSBhIGN1c3RvbWl6ZWQgZm9jdXMgc3RhdGUgYW5kIGZvciBhbnkgaW5wdXQgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbG9yLFxuLy8gd2hpY2ggZGVmYXVsdHMgdG8gdGhlIGAkaW5wdXQtYm9yZGVyLWZvY3VzYCB2YXJpYWJsZS5cbi8vXG4vLyBXZSBoaWdobHkgZW5jb3VyYWdlIHlvdSB0byBub3QgY3VzdG9taXplIHRoZSBkZWZhdWx0IHZhbHVlLCBidXQgaW5zdGVhZCB1c2Vcbi8vIHRoaXMgdG8gdHdlYWsgY29sb3JzIG9uIGFuIGFzLW5lZWRlZCBiYXNpcy4gVGhpcyBhZXN0aGV0aWMgY2hhbmdlIGlzIGJhc2VkIG9uXG4vLyBXZWJLaXQncyBkZWZhdWx0IHN0eWxlcywgYnV0IGFwcGxpY2FibGUgdG8gYSB3aWRlciByYW5nZSBvZiBicm93c2Vycy4gSXRzXG4vLyB1c2FiaWxpdHkgYW5kIGFjY2Vzc2liaWxpdHkgc2hvdWxkIGJlIHRha2VuIGludG8gYWNjb3VudCB3aXRoIGFueSBjaGFuZ2UuXG4vL1xuLy8gRXhhbXBsZSB1c2FnZTogY2hhbmdlIHRoZSBkZWZhdWx0IGJsdWUgYm9yZGVyIGFuZCBzaGFkb3cgdG8gd2hpdGUgZm9yIGJldHRlclxuLy8gY29udHJhc3QgYWdhaW5zdCBhIGRhcmsgZ3JheSBiYWNrZ3JvdW5kLlxuQG1peGluIGZvcm0tY29udHJvbC1mb2N1cygkY29sb3I6ICRpbnB1dC1ib3JkZXItZm9jdXMpIHtcbiAgJGNvbG9yLXJnYmE6IHJnYmEocmVkKCRjb2xvciksIGdyZWVuKCRjb2xvciksIGJsdWUoJGNvbG9yKSwgLjYpO1xuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggJGNvbG9yLXJnYmEpO1xuICB9XG59XG5cbi8vIEZvcm0gY29udHJvbCBzaXppbmdcbi8vXG4vLyBSZWxhdGl2ZSB0ZXh0IHNpemUsIHBhZGRpbmcsIGFuZCBib3JkZXItcmFkaWkgY2hhbmdlcyBmb3IgZm9ybSBjb250cm9scy4gRm9yXG4vLyBob3Jpem9udGFsIHNpemluZywgd3JhcCBjb250cm9scyBpbiB0aGUgcHJlZGVmaW5lZCBncmlkIGNsYXNzZXMuIGA8c2VsZWN0PmBcbi8vIGVsZW1lbnQgZ2V0cyBzcGVjaWFsIGxvdmUgYmVjYXVzZSBpdCdzIHNwZWNpYWwsIGFuZCB0aGF0J3MgYSBmYWN0IVxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gaW5wdXQtc2l6ZSgkcGFyZW50LCAkaW5wdXQtaGVpZ2h0LCAkcGFkZGluZy12ZXJ0aWNhbCwgJHBhZGRpbmctaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYm9yZGVyLXJhZGl1cykge1xuICAjeyRwYXJlbnR9IHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4gICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIHNlbGVjdCN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgfVxuXG4gIHRleHRhcmVhI3skcGFyZW50fSxcbiAgc2VsZWN0W211bHRpcGxlXSN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuIiwiLy8gUHJvZ3Jlc3MgYmFyc1xuXG5AbWl4aW4gcHJvZ3Jlc3MtYmFyLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAvLyBEZXByZWNhdGVkIHBhcmVudCBjbGFzcyByZXF1aXJlbWVudCBhcyBvZiB2My4yLjBcbiAgLnByb2dyZXNzLXN0cmlwZWQgJiB7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtc3RyaXBlZDtcbiAgfVxufVxuIiwiLy8gVGFibGVzXG5cbkBtaXhpbiB0YWJsZS1yb3ctdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kKSB7XG4gIC8vIEV4YWN0IHNlbGVjdG9ycyBiZWxvdyByZXF1aXJlZCB0byBvdmVycmlkZSBgLnRhYmxlLXN0cmlwZWRgIGFuZCBwcmV2ZW50XG4gIC8vIGluaGVyaXRhbmNlIHRvIG5lc3RlZCB0YWJsZXMuXG4gIC50YWJsZSA+IHRoZWFkID4gdHIsXG4gIC50YWJsZSA+IHRib2R5ID4gdHIsXG4gIC50YWJsZSA+IHRmb290ID4gdHIge1xuICAgID4gdGQuI3skc3RhdGV9LFxuICAgID4gdGguI3skc3RhdGV9LFxuICAgICYuI3skc3RhdGV9ID4gdGQsXG4gICAgJi4jeyRzdGF0ZX0gPiB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cblxuICAvLyBIb3ZlciBzdGF0ZXMgZm9yIGAudGFibGUtaG92ZXJgXG4gIC8vIE5vdGU6IHRoaXMgaXMgbm90IGF2YWlsYWJsZSBmb3IgY2VsbHMgb3Igcm93cyB3aXRoaW4gYHRoZWFkYCBvciBgdGZvb3RgLlxuICAudGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyIHtcbiAgICA+IHRkLiN7JHN0YXRlfTpob3ZlcixcbiAgICA+IHRoLiN7JHN0YXRlfTpob3ZlcixcbiAgICAmLiN7JHN0YXRlfTpob3ZlciA+IHRkLFxuICAgICY6aG92ZXIgPiAuI3skc3RhdGV9LFxuICAgICYuI3skc3RhdGV9OmhvdmVyID4gdGgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCA1JSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb250ZXh0dWFsIGJhY2tncm91bmRzXG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIGJnLXZhcmlhbnQoJHBhcmVudCwgJGNvbG9yKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgfVxuICBhI3skcGFyZW50fTpob3ZlcixcbiAgYSN7JHBhcmVudH06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcblxuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWxlZnQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbiIsIi8vIEdyYWRpZW50c1xuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMCwgRmlyZWZveCAxNissIE9wZXJhIDEyLjEwKywgU2FmYXJpIDcrLCBDaHJvbWUgMjYrXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAgLy8gU2FmYXJpIDUuMS02LCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAgLy8gT3BlcmEgMTJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwLCBGaXJlZm94IDE2KywgT3BlcmEgMTIuMTArLCBTYWZhcmkgNyssIENocm9tZSAyNitcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMS02LCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTAsIEZpcmVmb3ggMTYrLCBPcGVyYSAxMi4xMCssIFNhZmFyaSA3KywgQ2hyb21lIDI2K1xufVxuQG1peGluIGdyYWRpZW50LWhvcml6b250YWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5AbWl4aW4gZ3JhZGllbnQtc3RyaXBlZCgkY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4iLCIvLyBDbGVhcmZpeFxuLy9cbi8vIEZvciBtb2Rlcm4gYnJvd3NlcnNcbi8vIDEuIFRoZSBzcGFjZSBjb250ZW50IGlzIG9uZSB3YXkgdG8gYXZvaWQgYW4gT3BlcmEgYnVnIHdoZW4gdGhlXG4vLyAgICBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlIGlzIGluY2x1ZGVkIGFueXdoZXJlIGVsc2UgaW4gdGhlIGRvY3VtZW50LlxuLy8gICAgT3RoZXJ3aXNlIGl0IGNhdXNlcyBzcGFjZSB0byBhcHBlYXIgYXQgdGhlIHRvcCBhbmQgYm90dG9tIG9mIGVsZW1lbnRzXG4vLyAgICB0aGF0IGFyZSBjbGVhcmZpeGVkLlxuLy8gMi4gVGhlIHVzZSBvZiBgdGFibGVgIHJhdGhlciB0aGFuIGBibG9ja2AgaXMgb25seSBuZWNlc3NhcnkgaWYgdXNpbmdcbi8vICAgIGA6YmVmb3JlYCB0byBjb250YWluIHRoZSB0b3AtbWFyZ2lucyBvZiBjaGlsZCBlbGVtZW50cy5cbi8vXG4vLyBTb3VyY2U6IGh0dHA6Ly9uaWNvbGFzZ2FsbGFnaGVyLmNvbS9taWNyby1jbGVhcmZpeC1oYWNrL1xuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLy8gMVxuICAgIGRpc3BsYXk6IHRhYmxlOyAvLyAyXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cbiIsIi8vIENlbnRlci1hbGlnbiBhIGJsb2NrIGxldmVsIGVsZW1lbnRcblxuQG1peGluIGNlbnRlci1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iLCIvLyBOYXZiYXIgdmVydGljYWwgYWxpZ25cbi8vXG4vLyBWZXJ0aWNhbGx5IGNlbnRlciBlbGVtZW50cyBpbiB0aGUgbmF2YmFyLlxuLy8gRXhhbXBsZTogYW4gZWxlbWVudCBoYXMgYSBoZWlnaHQgb2YgMzBweCwgc28gd3JpdGUgb3V0IGAubmF2YmFyLXZlcnRpY2FsLWFsaWduKDMwcHgpO2AgdG8gY2FsY3VsYXRlIHRoZSBhcHByb3ByaWF0ZSB0b3AgbWFyZ2luLlxuXG5AbWl4aW4gbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRlbGVtZW50LWhlaWdodCkge1xuICBtYXJnaW4tdG9wOiAoKCRuYXZiYXItaGVpZ2h0IC0gJGVsZW1lbnQtaGVpZ2h0KSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiAoKCRuYXZiYXItaGVpZ2h0IC0gJGVsZW1lbnQtaGVpZ2h0KSAvIDIpO1xufVxuIiwiLy8gRnJhbWV3b3JrIGdyaWQgZ2VuZXJhdGlvblxuLy9cbi8vIFVzZWQgb25seSBieSBCb290c3RyYXAgdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIGdyaWQgY2xhc3NlcyBnaXZlblxuLy8gYW55IHZhbHVlIG9mIGAkZ3JpZC1jb2x1bW5zYC5cblxuLy8gW2NvbnZlcnRlcl0gVGhpcyBpcyBkZWZpbmVkIHJlY3Vyc2l2ZWx5IGluIExFU1MsIGJ1dCBTYXNzIHN1cHBvcnRzIHJlYWwgbG9vcHNcbkBtaXhpbiBtYWtlLWdyaWQtY29sdW1ucygkaTogMSwgJGxpc3Q6IFwiLmNvbC14cy0jeyRpfSwgLmNvbC1zbS0jeyRpfSwgLmNvbC1tZC0jeyRpfSwgLmNvbC1sZy0jeyRpfVwiKSB7XG4gIEBmb3IgJGkgZnJvbSAoMSArIDEpIHRocm91Z2ggJGdyaWQtY29sdW1ucyB7XG4gICAgJGxpc3Q6IFwiI3skbGlzdH0sIC5jb2wteHMtI3skaX0sIC5jb2wtc20tI3skaX0sIC5jb2wtbWQtI3skaX0sIC5jb2wtbGctI3skaX1cIjtcbiAgfVxuICAjeyRsaXN0fSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGNvbGxhcHNpbmcgd2hlbiBlbXB0eVxuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAvLyBJbm5lciBndXR0ZXIgdmlhIHBhZGRpbmdcbiAgICBwYWRkaW5nLWxlZnQ6ICBjZWlsKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSk7XG4gICAgcGFkZGluZy1yaWdodDogZmxvb3IoKCRncmlkLWd1dHRlci13aWR0aCAvIDIpKTtcbiAgfVxufVxuXG5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgZGVmaW5lZCByZWN1cnNpdmVseSBpbiBMRVNTLCBidXQgU2FzcyBzdXBwb3J0cyByZWFsIGxvb3BzXG5AbWl4aW4gZmxvYXQtZ3JpZC1jb2x1bW5zKCRjbGFzcywgJGk6IDEsICRsaXN0OiBcIi5jb2wtI3skY2xhc3N9LSN7JGl9XCIpIHtcbiAgQGZvciAkaSBmcm9tICgxICsgMSkgdGhyb3VnaCAkZ3JpZC1jb2x1bW5zIHtcbiAgICAkbGlzdDogXCIjeyRsaXN0fSwgLmNvbC0jeyRjbGFzc30tI3skaX1cIjtcbiAgfVxuICAjeyRsaXN0fSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cblxuXG5AbWl4aW4gY2FsYy1ncmlkLWNvbHVtbigkaW5kZXgsICRjbGFzcywgJHR5cGUpIHtcbiAgQGlmICgkdHlwZSA9PSB3aWR0aCkgYW5kICgkaW5kZXggPiAwKSB7XG4gICAgLmNvbC0jeyRjbGFzc30tI3skaW5kZXh9IHtcbiAgICAgIHdpZHRoOiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVzaCkgYW5kICgkaW5kZXggPiAwKSB7XG4gICAgLmNvbC0jeyRjbGFzc30tcHVzaC0jeyRpbmRleH0ge1xuICAgICAgbGVmdDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1c2gpIGFuZCAoJGluZGV4ID09IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdXNoLTAge1xuICAgICAgbGVmdDogYXV0bztcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBwdWxsKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdWxsLSN7JGluZGV4fSB7XG4gICAgICByaWdodDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1bGwpIGFuZCAoJGluZGV4ID09IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdWxsLTAge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gb2Zmc2V0KSB7XG4gICAgLmNvbC0jeyRjbGFzc30tb2Zmc2V0LSN7JGluZGV4fSB7XG4gICAgICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBbY29udmVydGVyXSBUaGlzIGlzIGRlZmluZWQgcmVjdXJzaXZlbHkgaW4gTEVTUywgYnV0IFNhc3Mgc3VwcG9ydHMgcmVhbCBsb29wc1xuQG1peGluIGxvb3AtZ3JpZC1jb2x1bW5zKCRjb2x1bW5zLCAkY2xhc3MsICR0eXBlKSB7XG4gIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJGNvbHVtbnMge1xuICAgIEBpbmNsdWRlIGNhbGMtZ3JpZC1jb2x1bW4oJGksICRjbGFzcywgJHR5cGUpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIGdyaWQgZm9yIHNwZWNpZmljIGNsYXNzXG5AbWl4aW4gbWFrZS1ncmlkKCRjbGFzcykge1xuICBAaW5jbHVkZSBmbG9hdC1ncmlkLWNvbHVtbnMoJGNsYXNzKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCB3aWR0aCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgcHVsbCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgcHVzaCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgb2Zmc2V0KTtcbn1cbiIsIi8vIEdyaWQgc3lzdGVtXG4vL1xuLy8gR2VuZXJhdGUgc2VtYW50aWMgZ3JpZCBjb2x1bW5zIHdpdGggdGhlc2UgbWl4aW5zLlxuXG4vLyBDZW50ZXJlZCBjb250YWluZXIgZWxlbWVudFxuQG1peGluIGNvbnRhaW5lci1maXhlZCgkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAgZmxvb3IoKCRndXR0ZXIgLyAyKSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNlaWwoKCRndXR0ZXIgLyAyKSk7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuXG4vLyBDcmVhdGVzIGEgd3JhcHBlciBmb3IgYSBzZXJpZXMgb2YgY29sdW1uc1xuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tbGVmdDogIGNlaWwoKCRndXR0ZXIgLyAtMikpO1xuICBtYXJnaW4tcmlnaHQ6IGZsb29yKCgkZ3V0dGVyIC8gLTIpKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBleHRyYSBzbWFsbCBjb2x1bW5zXG5AbWl4aW4gbWFrZS14cy1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcbn1cbkBtaXhpbiBtYWtlLXhzLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xufVxuQG1peGluIG1ha2UteHMtY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5AbWl4aW4gbWFrZS14cy1jb2x1bW4tcHVsbCgkY29sdW1ucykge1xuICByaWdodDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBzbWFsbCBjb2x1bW5zXG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLXNtLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2Utc20tY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBtZWRpdW0gY29sdW1uc1xuQG1peGluIG1ha2UtbWQtY29sdW1uKCRjb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogICgkZ3V0dGVyIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4tb2Zmc2V0KCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbWQtY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLW1kLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuXG4vLyBHZW5lcmF0ZSB0aGUgbGFyZ2UgY29sdW1uc1xuQG1peGluIG1ha2UtbGctY29sdW1uKCRjb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogICgkZ3V0dGVyIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4tb2Zmc2V0KCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbGctY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLWxnLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuIiwiJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlcjogZmFsc2UgIWRlZmF1bHQ7XG4vL1xuLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vPT0gQ29sb3JzXG4vL1xuLy8jIyBHcmF5IGFuZCBicmFuZCBjb2xvcnMgZm9yIHVzZSBhY3Jvc3MgQm9vdHN0cmFwLlxuXG4kZ3JheS1iYXNlOiAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRncmF5LWRhcmtlcjogICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDEzLjUlKSAhZGVmYXVsdDsgLy8gIzIyMlxuJGdyYXktZGFyazogICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMjAlKSAhZGVmYXVsdDsgICAvLyAjMzMzXG4kZ3JheTogICAgICAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAzMy41JSkgIWRlZmF1bHQ7IC8vICM1NTVcbiRncmF5LWxpZ2h0OiAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDQ2LjclKSAhZGVmYXVsdDsgLy8gIzc3N1xuJGdyYXktbGlnaHRlcjogICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgOTMuNSUpICFkZWZhdWx0OyAvLyAjZWVlXG5cbiRicmFuZC1wcmltYXJ5OiAgICAgICAgIGRhcmtlbigjNDI4YmNhLCA2LjUlKSAhZGVmYXVsdDsgLy8gIzMzN2FiN1xuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzVjYjg1YyAhZGVmYXVsdDtcbiRicmFuZC1pbmZvOiAgICAgICAgICAgICM1YmMwZGUgIWRlZmF1bHQ7XG4kYnJhbmQtd2FybmluZzogICAgICAgICAjZjBhZDRlICFkZWZhdWx0O1xuJGJyYW5kLWRhbmdlcjogICAgICAgICAgI2Q5NTM0ZiAhZGVmYXVsdDtcblxuXG4vLz09IFNjYWZmb2xkaW5nXG4vL1xuLy8jIyBTZXR0aW5ncyBmb3Igc29tZSBvZiB0aGUgbW9zdCBnbG9iYWwgc3R5bGVzLlxuXG4vLyoqIEJhY2tncm91bmQgY29sb3IgZm9yIGA8Ym9keT5gLlxuJGJvZHktYmc6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogR2xvYmFsIHRleHQgY29sb3Igb24gYDxib2R5PmAuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuXG4vLyoqIEdsb2JhbCB0ZXh0dWFsIGxpbmsgY29sb3IuXG4kbGluay1jb2xvcjogICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbi8vKiogTGluayBob3ZlciBjb2xvciBzZXQgdmlhIGBkYXJrZW4oKWAgZnVuY3Rpb24uXG4kbGluay1ob3Zlci1jb2xvcjogICAgICBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSkgIWRlZmF1bHQ7XG4vLyoqIExpbmsgaG92ZXIgZGVjb3JhdGlvbi5cbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IHVuZGVybGluZSAhZGVmYXVsdDtcblxuXG4vLz09IFR5cG9ncmFwaHlcbi8vXG4vLyMjIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1zZXJpZjogICAgICAgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmICFkZWZhdWx0O1xuLy8qKiBEZWZhdWx0IG1vbm9zcGFjZSBmb250cyBmb3IgYDxjb2RlPmAsIGA8a2JkPmAsIGFuZCBgPHByZT5gLlxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlOiAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKSAhZGVmYXVsdDsgLy8gfjE4cHhcbiRmb250LXNpemUtc21hbGw6ICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMC44NSkpICFkZWZhdWx0OyAvLyB+MTJweFxuXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjYpKSAhZGVmYXVsdDsgLy8gfjM2cHhcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuMTUpKSAhZGVmYXVsdDsgLy8gfjMwcHhcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS43KSkgIWRlZmF1bHQ7IC8vIH4yNHB4XG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKSAhZGVmYXVsdDsgLy8gfjE4cHhcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSkgIWRlZmF1bHQ7IC8vIH4xMnB4XG5cbi8vKiogVW5pdC1sZXNzIGBsaW5lLWhlaWdodGAgZm9yIHVzZSBpbiBjb21wb25lbnRzIGxpa2UgYnV0dG9ucy5cbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgMS40Mjg1NzE0MjkgIWRlZmF1bHQ7IC8vIDIwLzE0XG4vLyoqIENvbXB1dGVkIFwibGluZS1oZWlnaHRcIiAoYGZvbnQtc2l6ZWAgKiBgbGluZS1oZWlnaHRgKSBmb3IgdXNlIHdpdGggYG1hcmdpbmAsIGBwYWRkaW5nYCwgZXRjLlxuJGxpbmUtaGVpZ2h0LWNvbXB1dGVkOiAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UpKSAhZGVmYXVsdDsgLy8gfjIwcHhcblxuLy8qKiBCeSBkZWZhdWx0LCB0aGlzIGluaGVyaXRzIGZyb20gdGhlIGA8Ym9keT5gLlxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgIDEuMSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcblxuXG4vLz09IEljb25vZ3JhcGh5XG4vL1xuLy8jIyBTcGVjaWZ5IGN1c3RvbSBsb2NhdGlvbiBhbmQgZmlsZW5hbWUgb2YgdGhlIGluY2x1ZGVkIEdseXBoaWNvbnMgaWNvbiBmb250LiBVc2VmdWwgZm9yIHRob3NlIGluY2x1ZGluZyBCb290c3RyYXAgdmlhIEJvd2VyLlxuXG4vLyoqIExvYWQgZm9udHMgZnJvbSB0aGlzIGRpcmVjdG9yeS5cblxuLy8gW2NvbnZlcnRlcl0gSWYgJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciBpZiB1c2VkLCBwcm92aWRlIHBhdGggcmVsYXRpdmUgdG8gdGhlIGFzc2V0cyBsb2FkIHBhdGguXG4vLyBbY29udmVydGVyXSBUaGlzIGlzIGJlY2F1c2Ugc29tZSBhc3NldCBoZWxwZXJzLCBzdWNoIGFzIFNwcm9ja2V0cywgZG8gbm90IHdvcmsgd2l0aCBmaWxlLXJlbGF0aXZlIHBhdGhzLlxuJGljb24tZm9udC1wYXRoOiBpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCBcImJvb3RzdHJhcC9cIiwgXCIuLi9mb250cy9ib290c3RyYXAvXCIpICFkZWZhdWx0O1xuXG4vLyoqIEZpbGUgbmFtZSBmb3IgYWxsIGZvbnQgZmlsZXMuXG4kaWNvbi1mb250LW5hbWU6ICAgICAgICAgIFwiZ2x5cGhpY29ucy1oYWxmbGluZ3MtcmVndWxhclwiICFkZWZhdWx0O1xuLy8qKiBFbGVtZW50IElEIHdpdGhpbiBTVkcgaWNvbiBmaWxlLlxuJGljb24tZm9udC1zdmctaWQ6ICAgICAgICBcImdseXBoaWNvbnNfaGFsZmxpbmdzcmVndWxhclwiICFkZWZhdWx0O1xuXG5cbi8vPT0gQ29tcG9uZW50c1xuLy9cbi8vIyMgRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLiBWYWx1ZXMgYmFzZWQgb24gMTRweCB0ZXh0IGFuZCAxLjQyOCBsaW5lLWhlaWdodCAofjIwcHggdG8gc3RhcnQpLlxuXG4kcGFkZGluZy1iYXNlLXZlcnRpY2FsOiAgICAgNnB4ICFkZWZhdWx0O1xuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAgIDEycHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsOiAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogIDE2cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAgICA1cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAgMTBweCAhZGVmYXVsdDtcblxuJHBhZGRpbmcteHMtdmVydGljYWw6ICAgICAgIDFweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXhzLWhvcml6b250YWw6ICAgICA1cHggIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1sYXJnZTogICAgICAgICAxLjMzMzMzMzMgIWRlZmF1bHQ7IC8vIGV4dHJhIGRlY2ltYWxzIGZvciBXaW4gOC4xIENocm9tZVxuJGxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgIDRweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICA2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgM3B4ICFkZWZhdWx0O1xuXG4vLyoqIEdsb2JhbCBjb2xvciBmb3IgYWN0aXZlIGl0ZW1zIChlLmcuLCBuYXZzIG9yIGRyb3Bkb3ducykuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogR2xvYmFsIGJhY2tncm91bmQgY29sb3IgZm9yIGFjdGl2ZSBpdGVtcyAoZS5nLiwgbmF2cyBvciBkcm9wZG93bnMpLlxuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyoqIFdpZHRoIG9mIHRoZSBgYm9yZGVyYCBmb3IgZ2VuZXJhdGluZyBjYXJldHMgdGhhdCBpbmRpY2F0ZSBkcm9wZG93bnMuXG4kY2FyZXQtd2lkdGgtYmFzZTogICAgICAgICAgNHB4ICFkZWZhdWx0O1xuLy8qKiBDYXJldHMgaW5jcmVhc2Ugc2xpZ2h0bHkgaW4gc2l6ZSBmb3IgbGFyZ2VyIGNvbXBvbmVudHMuXG4kY2FyZXQtd2lkdGgtbGFyZ2U6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gVGFibGVzXG4vL1xuLy8jIyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbi8vKiogUGFkZGluZyBmb3IgYDx0aD5gcyBhbmQgYDx0ZD5gcy5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgICAgOHB4ICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGZvciBjZWxscyBpbiBgLnRhYmxlLWNvbmRlbnNlZGAuXG4kdGFibGUtY29uZGVuc2VkLWNlbGwtcGFkZGluZzogIDVweCAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IGJhY2tncm91bmQgY29sb3IgdXNlZCBmb3IgYWxsIHRhYmxlcy5cbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4vLyoqIEJhY2tncm91bmQgY29sb3IgdXNlZCBmb3IgYC50YWJsZS1zdHJpcGVkYC5cbiR0YWJsZS1iZy1hY2NlbnQ6ICAgICAgICAgICAgICAgI2Y5ZjlmOSAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBgLnRhYmxlLWhvdmVyYC5cbiR0YWJsZS1iZy1ob3ZlcjogICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiR0YWJsZS1iZy1hY3RpdmU6ICAgICAgICAgICAgICAgJHRhYmxlLWJnLWhvdmVyICFkZWZhdWx0O1xuXG4vLyoqIEJvcmRlciBjb2xvciBmb3IgdGFibGUgYW5kIGNlbGwgYm9yZGVycy5cbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuXG4vLz09IEJ1dHRvbnNcbi8vXG4vLyMjIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgIG5vcm1hbCAhZGVmYXVsdDtcblxuJGJ0bi1kZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcbiRidG4tZGVmYXVsdC1iZzogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWRlZmF1bHQtYm9yZGVyOiAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4kYnRuLXByaW1hcnktY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1wcmltYXJ5LWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kYnRuLXByaW1hcnktYm9yZGVyOiAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1wcmltYXJ5LWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tc3VjY2Vzcy1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbiRidG4tc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXN1Y2Nlc3MtYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1pbmZvLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4taW5mby1iZzogICAgICAgICAgICAgICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuJGJ0bi1pbmZvLWJvcmRlcjogICAgICAgICAgICAgICAgZGFya2VuKCRidG4taW5mby1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLXdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi13YXJuaW5nLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kYnRuLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgICBkYXJrZW4oJGJ0bi13YXJuaW5nLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWRhbmdlci1iZzogICAgICAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuJGJ0bi1kYW5nZXItYm9yZGVyOiAgICAgICAgICAgICAgZGFya2VuKCRidG4tZGFuZ2VyLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuXG4vLz09IEZvcm1zXG4vL1xuLy8jI1xuXG4vLyoqIGA8aW5wdXQ+YCBiYWNrZ3JvdW5kIGNvbG9yXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBgPGlucHV0IGRpc2FibGVkPmAgYmFja2dyb3VuZCBjb2xvclxuJGlucHV0LWJnLWRpc2FibGVkOiAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIGZvciBgPGlucHV0PmBzXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheSAhZGVmYXVsdDtcbi8vKiogYDxpbnB1dD5gIGJvcmRlciBjb2xvclxuJGlucHV0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcblxuLy8gVE9ETzogUmVuYW1lIGAkaW5wdXQtYm9yZGVyLXJhZGl1c2AgdG8gYCRpbnB1dC1ib3JkZXItcmFkaXVzLWJhc2VgIGluIHY0XG4vLyoqIERlZmF1bHQgYC5mb3JtLWNvbnRyb2xgIGJvcmRlciByYWRpdXNcbi8vIFRoaXMgaGFzIG5vIGVmZmVjdCBvbiBgPHNlbGVjdD5gcyBpbiBzb21lIGJyb3dzZXJzLCBkdWUgdG8gdGhlIGxpbWl0ZWQgc3R5bGFiaWxpdHkgb2YgYDxzZWxlY3Q+YHMgaW4gQ1NTLlxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbi8vKiogTGFyZ2UgYC5mb3JtLWNvbnRyb2xgIGJvcmRlciByYWRpdXNcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuLy8qKiBTbWFsbCBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgJGJvcmRlci1yYWRpdXMtc21hbGwgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciBpbnB1dHMgb24gZm9jdXNcbiRpbnB1dC1ib3JkZXItZm9jdXM6ICAgICAgICAgICAgICM2NmFmZTkgIWRlZmF1bHQ7XG5cbi8vKiogUGxhY2Vob2xkZXIgdGV4dCBjb2xvclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgICAgIzk5OSAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IGAuZm9ybS1jb250cm9sYCBoZWlnaHRcbiRpbnB1dC1oZWlnaHQtYmFzZTogICAgICAgICAgICAgICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCAqIDIpICsgMikgIWRlZmF1bHQ7XG4vLyoqIExhcmdlIGAuZm9ybS1jb250cm9sYCBoZWlnaHRcbiRpbnB1dC1oZWlnaHQtbGFyZ2U6ICAgICAgICAgICAgIChjZWlsKCRmb250LXNpemUtbGFyZ2UgKiAkbGluZS1oZWlnaHQtbGFyZ2UpICsgKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcbi8vKiogU21hbGwgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1zbWFsbDogICAgICAgICAgICAgKGZsb29yKCRmb250LXNpemUtc21hbGwgKiAkbGluZS1oZWlnaHQtc21hbGwpICsgKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcblxuLy8qKiBgLmZvcm0tZ3JvdXBgIG1hcmdpblxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgMTVweCAhZGVmYXVsdDtcblxuJGxlZ2VuZC1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRsZWdlbmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNlNWU1ZTUgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBmb3IgdGV4dHVhbCBpbnB1dCBhZGRvbnNcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIEJvcmRlciBjb2xvciBmb3IgdGV4dHVhbCBpbnB1dCBhZGRvbnNcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXIgIWRlZmF1bHQ7XG5cbi8vKiogRGlzYWJsZWQgY3Vyc29yIGZvciBmb3JtIGNvbnRyb2xzIGFuZCBidXR0b25zLlxuJGN1cnNvci1kaXNhYmxlZDogICAgICAgICAgICAgICAgbm90LWFsbG93ZWQgIWRlZmF1bHQ7XG5cblxuLy89PSBEcm9wZG93bnNcbi8vXG4vLyMjIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuLy8qKiBCYWNrZ3JvdW5kIGZvciB0aGUgZHJvcGRvd24gbWVudS5cbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIERyb3Bkb3duIG1lbnUgYGJvcmRlci1jb2xvcmAuXG4kZHJvcGRvd24tYm9yZGVyOiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4xNSkgIWRlZmF1bHQ7XG4vLyoqIERyb3Bkb3duIG1lbnUgYGJvcmRlci1jb2xvcmAgKipmb3IgSUU4KiouXG4kZHJvcGRvd24tZmFsbGJhY2stYm9yZGVyOiAgICAgICAjY2NjICFkZWZhdWx0O1xuLy8qKiBEaXZpZGVyIGNvbG9yIGZvciBiZXR3ZWVuIGRyb3Bkb3duIGl0ZW1zLlxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcblxuLy8qKiBEcm9wZG93biBsaW5rIHRleHQgY29sb3IuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuLy8qKiBIb3ZlciBjb2xvciBmb3IgZHJvcGRvd24gbGlua3MuXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICBkYXJrZW4oJGdyYXktZGFyaywgNSUpICFkZWZhdWx0O1xuLy8qKiBIb3ZlciBiYWNrZ3JvdW5kIGZvciBkcm9wZG93biBsaW5rcy5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbi8vKiogQWN0aXZlIGRyb3Bkb3duIG1lbnUgaXRlbSB0ZXh0IGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4vLyoqIEFjdGl2ZSBkcm9wZG93biBtZW51IGl0ZW0gYmFja2dyb3VuZCBjb2xvci5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4vLyoqIERpc2FibGVkIGRyb3Bkb3duIG1lbnUgaXRlbSBiYWNrZ3JvdW5kIGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vKiogVGV4dCBjb2xvciBmb3IgaGVhZGVycyB3aXRoaW4gZHJvcGRvd24gbWVudXMuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBEZXByZWNhdGVkIGAkZHJvcGRvd24tY2FyZXQtY29sb3JgIGFzIG9mIHYzLjEuMFxuJGRyb3Bkb3duLWNhcmV0LWNvbG9yOiAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcblxuXG4vLy0tIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cbi8vXG4vLyBOb3RlOiBUaGVzZSB2YXJpYWJsZXMgYXJlIG5vdCBnZW5lcmF0ZWQgaW50byB0aGUgQ3VzdG9taXplci5cblxuJHppbmRleC1uYXZiYXI6ICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcbiR6aW5kZXgtbmF2YmFyLWZpeGVkOiAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tncm91bmQ6ICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcblxuXG4vLz09IE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcbi8vXG4vLyMjIERlZmluZSB0aGUgYnJlYWtwb2ludHMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbi8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4teHNgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi14czogICAgICAgICAgICAgICAgICA0ODBweCAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi14cy1taW5gIGFzIG9mIHYzLjIuMFxuJHNjcmVlbi14cy1taW46ICAgICAgICAgICAgICAkc2NyZWVuLXhzICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXBob25lYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tcGhvbmU6ICAgICAgICAgICAgICAgJHNjcmVlbi14cy1taW4gIWRlZmF1bHQ7XG5cbi8vIFNtYWxsIHNjcmVlbiAvIHRhYmxldFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXNtYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tc206ICAgICAgICAgICAgICAgICAgNzY4cHggIWRlZmF1bHQ7XG4kc2NyZWVuLXNtLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tc20gIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tdGFibGV0YCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tdGFibGV0OiAgICAgICAgICAgICAgJHNjcmVlbi1zbS1taW4gIWRlZmF1bHQ7XG5cbi8vIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbWRgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1tZDogICAgICAgICAgICAgICAgICA5OTJweCAhZGVmYXVsdDtcbiRzY3JlZW4tbWQtbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1tZCAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1kZXNrdG9wYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tZGVza3RvcDogICAgICAgICAgICAgJHNjcmVlbi1tZC1taW4gIWRlZmF1bHQ7XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWxnYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tbGc6ICAgICAgICAgICAgICAgICAgMTIwMHB4ICFkZWZhdWx0O1xuJHNjcmVlbi1sZy1taW46ICAgICAgICAgICAgICAkc2NyZWVuLWxnICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWxnLWRlc2t0b3BgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1sZy1kZXNrdG9wOiAgICAgICAgICAkc2NyZWVuLWxnLW1pbiAhZGVmYXVsdDtcblxuLy8gU28gbWVkaWEgcXVlcmllcyBkb24ndCBvdmVybGFwIHdoZW4gcmVxdWlyZWQsIHByb3ZpZGUgYSBtYXhpbXVtXG4kc2NyZWVuLXhzLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLXNtLW1pbiAtIDEpICFkZWZhdWx0O1xuJHNjcmVlbi1zbS1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1tZC1taW4gLSAxKSAhZGVmYXVsdDtcbiRzY3JlZW4tbWQtbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tbGctbWluIC0gMSkgIWRlZmF1bHQ7XG5cblxuLy89PSBHcmlkIHN5c3RlbVxuLy9cbi8vIyMgRGVmaW5lIHlvdXIgY3VzdG9tIHJlc3BvbnNpdmUgZ3JpZC5cblxuLy8qKiBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZ3JpZC5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbi8vKiogUGFkZGluZyBiZXR3ZWVuIGNvbHVtbnMuIEdldHMgZGl2aWRlZCBpbiBoYWxmIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgMzBweCAhZGVmYXVsdDtcbi8vIE5hdmJhciBjb2xsYXBzZVxuLy8qKiBQb2ludCBhdCB3aGljaCB0aGUgbmF2YmFyIGJlY29tZXMgdW5jb2xsYXBzZWQuXG4kZ3JpZC1mbG9hdC1icmVha3BvaW50OiAgICAgJHNjcmVlbi1zbS1taW4gIWRlZmF1bHQ7XG4vLyoqIFBvaW50IGF0IHdoaWNoIHRoZSBuYXZiYXIgYmVnaW5zIGNvbGxhcHNpbmcuXG4kZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heDogKCRncmlkLWZsb2F0LWJyZWFrcG9pbnQgLSAxKSAhZGVmYXVsdDtcblxuXG4vLz09IENvbnRhaW5lciBzaXplc1xuLy9cbi8vIyMgRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gU21hbGwgc2NyZWVuIC8gdGFibGV0XG4kY29udGFpbmVyLXRhYmxldDogICAgICAgICAgICAgKDcyMHB4ICsgJGdyaWQtZ3V0dGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vKiogRm9yIGAkc2NyZWVuLXNtLW1pbmAgYW5kIHVwLlxuJGNvbnRhaW5lci1zbTogICAgICAgICAgICAgICAgICRjb250YWluZXItdGFibGV0ICFkZWZhdWx0O1xuXG4vLyBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcFxuJGNvbnRhaW5lci1kZXNrdG9wOiAgICAgICAgICAgICg5NDBweCArICRncmlkLWd1dHRlci13aWR0aCkgIWRlZmF1bHQ7XG4vLyoqIEZvciBgJHNjcmVlbi1tZC1taW5gIGFuZCB1cC5cbiRjb250YWluZXItbWQ6ICAgICAgICAgICAgICAgICAkY29udGFpbmVyLWRlc2t0b3AgIWRlZmF1bHQ7XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuJGNvbnRhaW5lci1sYXJnZS1kZXNrdG9wOiAgICAgICgxMTQwcHggKyAkZ3JpZC1ndXR0ZXItd2lkdGgpICFkZWZhdWx0O1xuLy8qKiBGb3IgYCRzY3JlZW4tbGctbWluYCBhbmQgdXAuXG4kY29udGFpbmVyLWxnOiAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci1sYXJnZS1kZXNrdG9wICFkZWZhdWx0O1xuXG5cbi8vPT0gTmF2YmFyXG4vL1xuLy8jI1xuXG4vLyBCYXNpY3Mgb2YgYSBuYXZiYXJcbiRuYXZiYXItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgNTBweCAhZGVmYXVsdDtcbiRuYXZiYXItbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICFkZWZhdWx0O1xuJG5hdmJhci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw6ICAgICAgICBmbG9vcigoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikpICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsOiAgICAgICAgICAoKCRuYXZiYXItaGVpZ2h0IC0gJGxpbmUtaGVpZ2h0LWNvbXB1dGVkKSAvIDIpICFkZWZhdWx0O1xuJG5hdmJhci1jb2xsYXBzZS1tYXgtaGVpZ2h0OiAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuJG5hdmJhci1kZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAjNzc3ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAjZjhmOGY4ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJvcmRlcjogICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJnLCA2LjUlKSAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIGxpbmtzXG4kbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjogICAgICAgICAgICAgICAgIzc3NyAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgICM1NTUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAgZGFya2VuKCRuYXZiYXItZGVmYXVsdC1iZywgNi41JSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgI2NjYyAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWJnOiAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIGJyYW5kIGxhYmVsXG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgJG5hdmJhci1kZWZhdWx0LWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgZGFya2VuKCRuYXZiYXItZGVmYXVsdC1icmFuZC1jb2xvciwgMTAlKSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1iZzogICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIHRvZ2dsZVxuJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ob3Zlci1iZzogICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWljb24tYmFyLWJnOiAgICAgICAgIzg4OCAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC10b2dnbGUtYm9yZGVyLWNvbG9yOiAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vPT09IEludmVydGVkIG5hdmJhclxuLy8gUmVzZXQgaW52ZXJ0ZWQgbmF2YmFyIGJhc2ljc1xuJG5hdmJhci1pbnZlcnNlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWxpZ2h0LCAxNSUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAjMjIyICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJvcmRlcjogICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1pbnZlcnNlLWJnLCAxMCUpICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgbGlua3NcbiRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1saWdodCwgMTUlKSAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAgICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1pbnZlcnNlLWJnLCAxMCUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAjNDQ0ICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtYmc6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gSW52ZXJ0ZWQgbmF2YmFyIGJyYW5kIGxhYmVsXG4kbmF2YmFyLWludmVyc2UtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gSW52ZXJ0ZWQgbmF2YmFyIHRvZ2dsZVxuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1ob3Zlci1iZzogICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1pY29uLWJhci1iZzogICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1ib3JkZXItY29sb3I6ICAgICAgICAjMzMzICFkZWZhdWx0O1xuXG5cbi8vPT0gTmF2c1xuLy9cbi8vIyNcblxuLy89PT0gU2hhcmVkIG5hdiBzdHlsZXNcbiRuYXYtbGluay1wYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTBweCAxNXB4ICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kbmF2LWRpc2FibGVkLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJG5hdi1kaXNhYmxlZC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy89PSBUYWJzXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgJGdyYXkgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgICNkZGQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1qdXN0aWZpZWQtbGluay1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRuYXYtdGFicy1qdXN0aWZpZWQtYWN0aXZlLWxpbmstYm9yZGVyLWNvbG9yOiAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG5cbi8vPT0gUGlsbHNcbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vPT0gUGFnaW5hdGlvblxuLy9cbi8vIyNcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyOiAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlcjogICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlcjogICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cblxuLy89PSBQYWdlclxuLy9cbi8vIyNcblxuJHBhZ2VyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYmcgIWRlZmF1bHQ7XG4kcGFnZXItYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFnZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kcGFnZXItaG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHBhZ2VyLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2VyLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG4kcGFnZXItZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvciAhZGVmYXVsdDtcblxuXG4vLz09IEp1bWJvdHJvblxuLy9cbi8vIyNcblxuJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1oZWFkaW5nLWNvbG9yOiAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tZm9udC1zaXplOiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1oZWFkaW5nLWZvbnQtc2l6ZTogICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogNC41KSkgIWRlZmF1bHQ7XG5cblxuLy89PSBGb3JtIHN0YXRlcyBhbmQgYWxlcnRzXG4vL1xuLy8jIyBEZWZpbmUgY29sb3JzIGZvciBmb3JtIGZlZWRiYWNrIHN0YXRlcyBhbmQsIGJ5IGRlZmF1bHQsIGFsZXJ0cy5cblxuJHN0YXRlLXN1Y2Nlc3MtdGV4dDogICAgICAgICAgICAgIzNjNzYzZCAhZGVmYXVsdDtcbiRzdGF0ZS1zdWNjZXNzLWJnOiAgICAgICAgICAgICAgICNkZmYwZDggIWRlZmF1bHQ7XG4kc3RhdGUtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtc3VjY2Vzcy1iZywgLTEwKSwgNSUpICFkZWZhdWx0O1xuXG4kc3RhdGUtaW5mby10ZXh0OiAgICAgICAgICAgICAgICAjMzE3MDhmICFkZWZhdWx0O1xuJHN0YXRlLWluZm8tYmc6ICAgICAgICAgICAgICAgICAgI2Q5ZWRmNyAhZGVmYXVsdDtcbiRzdGF0ZS1pbmZvLWJvcmRlcjogICAgICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1pbmZvLWJnLCAtMTApLCA3JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS13YXJuaW5nLXRleHQ6ICAgICAgICAgICAgICM4YTZkM2IgIWRlZmF1bHQ7XG4kc3RhdGUtd2FybmluZy1iZzogICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuJHN0YXRlLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgZGFya2VuKGFkanVzdC1odWUoJHN0YXRlLXdhcm5pbmctYmcsIC0xMCksIDUlKSAhZGVmYXVsdDtcblxuJHN0YXRlLWRhbmdlci10ZXh0OiAgICAgICAgICAgICAgI2E5NDQ0MiAhZGVmYXVsdDtcbiRzdGF0ZS1kYW5nZXItYmc6ICAgICAgICAgICAgICAgICNmMmRlZGUgIWRlZmF1bHQ7XG4kc3RhdGUtZGFuZ2VyLWJvcmRlcjogICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtZGFuZ2VyLWJnLCAtMTApLCA1JSkgIWRlZmF1bHQ7XG5cblxuLy89PSBUb29sdGlwc1xuLy9cbi8vIyNcblxuLy8qKiBUb29sdGlwIG1heCB3aWR0aFxuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4vLyoqIFRvb2x0aXAgdGV4dCBjb2xvclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yXG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG5cbi8vKiogVG9vbHRpcCBhcnJvdyB3aWR0aFxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuLy8qKiBUb29sdGlwIGFycm93IGNvbG9yXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuXG4vLz09IFBvcG92ZXJzXG4vL1xuLy8jI1xuXG4vLyoqIFBvcG92ZXIgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgbWF4aW11bSB3aWR0aFxuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBib3JkZXIgY29sb3JcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwuMikgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgZmFsbGJhY2sgYm9yZGVyIGNvbG9yXG4kcG9wb3Zlci1mYWxsYmFjay1ib3JkZXItY29sb3I6ICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbi8vKiogUG9wb3ZlciB0aXRsZSBiYWNrZ3JvdW5kIGNvbG9yXG4kcG9wb3Zlci10aXRsZS1iZzogICAgICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuXG4vLyoqIFBvcG92ZXIgYXJyb3cgd2lkdGhcbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBhcnJvdyBjb2xvclxuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IHdpZHRoXG4kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDogICAgICAgICAgICgkcG9wb3Zlci1hcnJvdy13aWR0aCArIDEpICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICAgIGZhZGVfaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAwLjA1KSAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBvdXRlciBhcnJvdyBmYWxsYmFjayBjb2xvclxuJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I6ICBkYXJrZW4oJHBvcG92ZXItZmFsbGJhY2stYm9yZGVyLWNvbG9yLCAyMCUpICFkZWZhdWx0O1xuXG5cbi8vPT0gTGFiZWxzXG4vL1xuLy8jI1xuXG4vLyoqIERlZmF1bHQgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLWRlZmF1bHQtYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIFByaW1hcnkgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXByaW1hcnktYmc6ICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4vLyoqIFN1Y2Nlc3MgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgJGJyYW5kLXN1Y2Nlc3MgIWRlZmF1bHQ7XG4vLyoqIEluZm8gbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLWluZm8tYmc6ICAgICAgICAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG4vLyoqIFdhcm5pbmcgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXdhcm5pbmctYmc6ICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4vLyoqIERhbmdlciBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtZGFuZ2VyLWJnOiAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgbGFiZWwgdGV4dCBjb2xvclxuJGxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogRGVmYXVsdCB0ZXh0IGNvbG9yIG9mIGEgbGlua2VkIGxhYmVsXG4kbGFiZWwtbGluay1ob3Zlci1jb2xvcjogICAgICAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gTW9kYWxzXG4vL1xuLy8jI1xuXG4vLyoqIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuLy8qKiBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIHRpdGxlXG4kbW9kYWwtdGl0bGUtcGFkZGluZzogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuLy8qKiBNb2RhbCB0aXRsZSBsaW5lLWhlaWdodFxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBtb2RhbCBjb250ZW50IGFyZWFcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogTW9kYWwgY29udGVudCBib3JkZXIgY29sb3JcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwuMikgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGNvbnRlbnQgYm9yZGVyIGNvbG9yICoqZm9yIElFOCoqXG4kbW9kYWwtY29udGVudC1mYWxsYmFjay1ib3JkZXItY29sb3I6ICAgICAgICAgICM5OTkgIWRlZmF1bHQ7XG5cbi8vKiogTW9kYWwgYmFja2Ryb3AgYmFja2dyb3VuZCBjb2xvclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbi8vKiogTW9kYWwgYmFja2Ryb3Agb3BhY2l0eVxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgLjUgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGhlYWRlciBib3JkZXIgY29sb3JcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICNlNWU1ZTUgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGZvb3RlciBib3JkZXIgY29sb3JcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICA5MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgIDYwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBBbGVydHNcbi8vXG4vLyMjIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZzogICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cbiRhbGVydC1zdWNjZXNzLWJnOiAgICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLWJnICFkZWZhdWx0O1xuJGFsZXJ0LXN1Y2Nlc3MtdGV4dDogICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1zdWNjZXNzLWJvcmRlcjogICAgICAgICRzdGF0ZS1zdWNjZXNzLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LWluZm8tYmc6ICAgICAgICAgICAgICAgJHN0YXRlLWluZm8tYmcgIWRlZmF1bHQ7XG4kYWxlcnQtaW5mby10ZXh0OiAgICAgICAgICAgICAkc3RhdGUtaW5mby10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LWluZm8tYm9yZGVyOiAgICAgICAgICAgJHN0YXRlLWluZm8tYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtd2FybmluZy1iZzogICAgICAgICAgICAkc3RhdGUtd2FybmluZy1iZyAhZGVmYXVsdDtcbiRhbGVydC13YXJuaW5nLXRleHQ6ICAgICAgICAgICRzdGF0ZS13YXJuaW5nLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtd2FybmluZy1ib3JkZXI6ICAgICAgICAkc3RhdGUtd2FybmluZy1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC1kYW5nZXItYmc6ICAgICAgICAgICAgICRzdGF0ZS1kYW5nZXItYmcgIWRlZmF1bHQ7XG4kYWxlcnQtZGFuZ2VyLXRleHQ6ICAgICAgICAgICAkc3RhdGUtZGFuZ2VyLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtZGFuZ2VyLWJvcmRlcjogICAgICAgICAkc3RhdGUtZGFuZ2VyLWJvcmRlciAhZGVmYXVsdDtcblxuXG4vLz09IFByb2dyZXNzIGJhcnNcbi8vXG4vLyMjXG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgd2hvbGUgcHJvZ3Jlc3MgY29tcG9uZW50XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBQcm9ncmVzcyBiYXIgdGV4dCBjb2xvclxuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogVmFyaWFibGUgZm9yIHNldHRpbmcgcm91bmRlZCBjb3JuZXJzIG9uIHByb2dyZXNzIGJhci5cbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogRGVmYXVsdCBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuLy8qKiBTdWNjZXNzIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1zdWNjZXNzLWJnOiAgICAgJGJyYW5kLXN1Y2Nlc3MgIWRlZmF1bHQ7XG4vLyoqIFdhcm5pbmcgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmc6ICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbi8vKiogRGFuZ2VyIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1kYW5nZXItYmc6ICAgICAgJGJyYW5kLWRhbmdlciAhZGVmYXVsdDtcbi8vKiogSW5mbyBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItaW5mby1iZzogICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuXG5cbi8vPT0gTGlzdCBncm91cFxuLy9cbi8vIyNcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9uIGAubGlzdC1ncm91cC1pdGVtYFxuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBgLmxpc3QtZ3JvdXAtaXRlbWAgYm9yZGVyIGNvbG9yXG4kbGlzdC1ncm91cC1ib3JkZXI6ICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4vLyoqIExpc3QgZ3JvdXAgYm9yZGVyIHJhZGl1c1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3Igb2Ygc2luZ2xlIGxpc3QgaXRlbXMgb24gaG92ZXJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBvZiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbi8vKiogQm9yZGVyIGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGVsZW1lbnRzXG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyOiAgICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBmb3IgY29udGVudCB3aXRoaW4gYWN0aXZlIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWFjdGl2ZS10ZXh0LWNvbG9yOiAgbGlnaHRlbigkbGlzdC1ncm91cC1hY3RpdmUtYmcsIDQwJSkgIWRlZmF1bHQ7XG5cbi8vKiogVGV4dCBjb2xvciBvZiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIGZvciBjb250ZW50IHdpdGhpbiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC10ZXh0LWNvbG9yOiAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtbGluay1jb2xvcjogICAgICAgICAjNTU1ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtbGluay1ob3Zlci1jb2xvcjogICAkbGlzdC1ncm91cC1saW5rLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtbGluay1oZWFkaW5nLWNvbG9yOiAjMzMzICFkZWZhdWx0O1xuXG5cbi8vPT0gUGFuZWxzXG4vL1xuLy8jI1xuXG4kcGFuZWwtYmc6ICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhbmVsLWJvZHktcGFkZGluZzogICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRwYW5lbC1oZWFkaW5nLXBhZGRpbmc6ICAgICAgIDEwcHggMTVweCAhZGVmYXVsdDtcbiRwYW5lbC1mb290ZXItcGFkZGluZzogICAgICAgICRwYW5lbC1oZWFkaW5nLXBhZGRpbmcgIWRlZmF1bHQ7XG4kcGFuZWwtYm9yZGVyLXJhZGl1czogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEJvcmRlciBjb2xvciBmb3IgZWxlbWVudHMgd2l0aGluIHBhbmVsc1xuJHBhbmVsLWlubmVyLWJvcmRlcjogICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRwYW5lbC1mb290ZXItYmc6ICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbiRwYW5lbC1kZWZhdWx0LXRleHQ6ICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kcGFuZWwtZGVmYXVsdC1ib3JkZXI6ICAgICAgICAjZGRkICFkZWZhdWx0O1xuJHBhbmVsLWRlZmF1bHQtaGVhZGluZy1iZzogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuJHBhbmVsLXByaW1hcnktdGV4dDogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYW5lbC1wcmltYXJ5LWJvcmRlcjogICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJHBhbmVsLXByaW1hcnktaGVhZGluZy1iZzogICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYW5lbC1zdWNjZXNzLXRleHQ6ICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLXRleHQgIWRlZmF1bHQ7XG4kcGFuZWwtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAkc3RhdGUtc3VjY2Vzcy1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtc3VjY2Vzcy1oZWFkaW5nLWJnOiAgICAkc3RhdGUtc3VjY2Vzcy1iZyAhZGVmYXVsdDtcblxuJHBhbmVsLWluZm8tdGV4dDogICAgICAgICAgICAgJHN0YXRlLWluZm8tdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1pbmZvLWJvcmRlcjogICAgICAgICAgICRzdGF0ZS1pbmZvLWJvcmRlciAhZGVmYXVsdDtcbiRwYW5lbC1pbmZvLWhlYWRpbmctYmc6ICAgICAgICRzdGF0ZS1pbmZvLWJnICFkZWZhdWx0O1xuXG4kcGFuZWwtd2FybmluZy10ZXh0OiAgICAgICAgICAkc3RhdGUtd2FybmluZy10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLXdhcm5pbmctYm9yZGVyOiAgICAgICAgJHN0YXRlLXdhcm5pbmctYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLXdhcm5pbmctaGVhZGluZy1iZzogICAgJHN0YXRlLXdhcm5pbmctYmcgIWRlZmF1bHQ7XG5cbiRwYW5lbC1kYW5nZXItdGV4dDogICAgICAgICAgICRzdGF0ZS1kYW5nZXItdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1kYW5nZXItYm9yZGVyOiAgICAgICAgICRzdGF0ZS1kYW5nZXItYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLWRhbmdlci1oZWFkaW5nLWJnOiAgICAgJHN0YXRlLWRhbmdlci1iZyAhZGVmYXVsdDtcblxuXG4vLz09IFRodW1ibmFpbHNcbi8vXG4vLyMjXG5cbi8vKiogUGFkZGluZyBhcm91bmQgdGhlIHRodW1ibmFpbCBpbWFnZVxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuLy8qKiBUaHVtYm5haWwgYmFja2dyb3VuZCBjb2xvclxuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBib3JkZXIgY29sb3JcbiR0aHVtYm5haWwtYm9yZGVyOiAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBib3JkZXIgcmFkaXVzXG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEN1c3RvbSB0ZXh0IGNvbG9yIGZvciB0aHVtYm5haWwgY2FwdGlvbnNcbiR0aHVtYm5haWwtY2FwdGlvbi1jb2xvcjogICAgICR0ZXh0LWNvbG9yICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGFyb3VuZCB0aGUgdGh1bWJuYWlsIGNhcHRpb25cbiR0aHVtYm5haWwtY2FwdGlvbi1wYWRkaW5nOiAgIDlweCAhZGVmYXVsdDtcblxuXG4vLz09IFdlbGxzXG4vL1xuLy8jI1xuXG4kd2VsbC1iZzogICAgICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHdlbGwtYm9yZGVyOiAgICAgICAgICAgICAgICAgZGFya2VuKCR3ZWxsLWJnLCA3JSkgIWRlZmF1bHQ7XG5cblxuLy89PSBCYWRnZXNcbi8vXG4vLyMjXG5cbiRiYWRnZS1jb2xvcjogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIExpbmtlZCBiYWRnZSB0ZXh0IGNvbG9yIG9uIGhvdmVyXG4kYmFkZ2UtbGluay1ob3Zlci1jb2xvcjogICAgICAjZmZmICFkZWZhdWx0O1xuJGJhZGdlLWJnOiAgICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vKiogQmFkZ2UgdGV4dCBjb2xvciBpbiBhY3RpdmUgbmF2IGxpbmtcbiRiYWRnZS1hY3RpdmUtY29sb3I6ICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuLy8qKiBCYWRnZSBiYWNrZ3JvdW5kIGNvbG9yIGluIGFjdGl2ZSBuYXYgbGlua1xuJGJhZGdlLWFjdGl2ZS1iZzogICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1saW5lLWhlaWdodDogICAgICAgICAgIDEgIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAxMHB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gQnJlYWRjcnVtYnNcbi8vXG4vLyMjXG5cbiRicmVhZGNydW1iLXBhZGRpbmctdmVydGljYWw6ICAgOHB4ICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy1ob3Jpem9udGFsOiAxNXB4ICFkZWZhdWx0O1xuLy8qKiBCcmVhZGNydW1iIGJhY2tncm91bmQgY29sb3JcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbi8vKiogQnJlYWRjcnVtYiB0ZXh0IGNvbG9yXG4kYnJlYWRjcnVtYi1jb2xvcjogICAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4vLyoqIFRleHQgY29sb3Igb2YgY3VycmVudCBwYWdlIGluIHRoZSBicmVhZGNydW1iXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBUZXh0dWFsIHNlcGFyYXRvciBmb3IgYmV0d2VlbiBicmVhZGNydW1iIGVsZW1lbnRzXG4kYnJlYWRjcnVtYi1zZXBhcmF0b3I6ICAgICAgICAgIFwiL1wiICFkZWZhdWx0O1xuXG5cbi8vPT0gQ2Fyb3VzZWxcbi8vXG4vLyMjXG5cbiRjYXJvdXNlbC10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgwLDAsMCwuNikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLz09IENsb3NlXG4vL1xuLy8jI1xuXG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICBib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgIDAgMXB4IDAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLz09IENvZGVcbi8vXG4vLyMjXG5cbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICNjNzI1NGUgIWRlZmF1bHQ7XG4kY29kZS1iZzogICAgICAgICAgICAgICAgICAgICAjZjlmMmY0ICFkZWZhdWx0O1xuXG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcblxuJHByZS1iZzogICAgICAgICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kcHJlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBUeXBlXG4vL1xuLy8jI1xuXG4vLyoqIEhvcml6b250YWwgb2Zmc2V0IGZvciBmb3JtcyBhbmQgbGlzdHMuXG4kY29tcG9uZW50LW9mZnNldC1ob3Jpem9udGFsOiAxODBweCAhZGVmYXVsdDtcbi8vKiogVGV4dCBtdXRlZCBjb2xvclxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEFiYnJldmlhdGlvbnMgYW5kIGFjcm9ueW1zIGJvcmRlciBjb2xvclxuJGFiYnItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEhlYWRpbmdzIHNtYWxsIGNvbG9yXG4kaGVhZGluZ3Mtc21hbGwtY29sb3I6ICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBzbWFsbCBjb2xvclxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEJsb2NrcXVvdGUgZm9udCBzaXplXG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4vLyoqIEJsb2NrcXVvdGUgYm9yZGVyIGNvbG9yXG4kYmxvY2txdW90ZS1ib3JkZXItY29sb3I6ICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuLy8qKiBQYWdlIGhlYWRlciBib3JkZXIgY29sb3JcbiRwYWdlLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFdpZHRoIG9mIGhvcml6b250YWwgZGVzY3JpcHRpb24gbGlzdCB0aXRsZXNcbiRkbC1ob3Jpem9udGFsLW9mZnNldDogICAgICAgICRjb21wb25lbnQtb2Zmc2V0LWhvcml6b250YWwgIWRlZmF1bHQ7XG4vLyoqIFBvaW50IGF0IHdoaWNoIC5kbC1ob3Jpem9udGFsIGJlY29tZXMgaG9yaXpvbnRhbFxuJGRsLWhvcml6b250YWwtYnJlYWtwb2ludDogICAgJGdyaWQtZmxvYXQtYnJlYWtwb2ludCAhZGVmYXVsdDtcbi8vKiogSG9yaXpvbnRhbCBsaW5lIGNvbG9yLlxuJGhyLWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiIsIi8vXG4vLyBCdXR0b25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2Ugc3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvLyBGb3IgaW5wdXQuYnRuXG4gIGZvbnQtd2VpZ2h0OiAkYnRuLWZvbnQtd2VpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFJlc2V0IHVudXN1YWwgRmlyZWZveC1vbi1BbmRyb2lkIGRlZmF1bHQgc3R5bGU7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2lzc3Vlcy8yMTRcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRwYWRkaW5nLWJhc2UtdmVydGljYWwsICRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1iYXNlLCAkbGluZS1oZWlnaHQtYmFzZSwgJGJ0bi1ib3JkZXItcmFkaXVzLWJhc2UpO1xuICBAaW5jbHVkZSB1c2VyLXNlbGVjdChub25lKTtcblxuICAmLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBAaW5jbHVkZSB0YWItZm9jdXM7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgY29sb3I6ICRidG4tZGVmYXVsdC1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLC4xMjUpKTtcbiAgfVxuXG4gICYuZGlzYWJsZWQsXG4gICZbZGlzYWJsZWRdLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIEBpbmNsdWRlIG9wYWNpdHkoLjY1KTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmIHRvIGEuYnRuXG59XG5cbmEuYnRuIHtcbiAgJi5kaXNhYmxlZCxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvLyBGdXR1cmUtcHJvb2YgZGlzYWJsaW5nIG9mIGNsaWNrcyBvbiBgPGE+YCBlbGVtZW50c1xuICB9XG59XG5cblxuLy8gQWx0ZXJuYXRlIGJ1dHRvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tZGVmYXVsdCB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tZGVmYXVsdC1jb2xvciwgJGJ0bi1kZWZhdWx0LWJnLCAkYnRuLWRlZmF1bHQtYm9yZGVyKTtcbn1cbi5idG4tcHJpbWFyeSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tcHJpbWFyeS1jb2xvciwgJGJ0bi1wcmltYXJ5LWJnLCAkYnRuLXByaW1hcnktYm9yZGVyKTtcbn1cbi8vIFN1Y2Nlc3MgYXBwZWFycyBhcyBncmVlblxuLmJ0bi1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1zdWNjZXNzLWNvbG9yLCAkYnRuLXN1Y2Nlc3MtYmcsICRidG4tc3VjY2Vzcy1ib3JkZXIpO1xufVxuLy8gSW5mbyBhcHBlYXJzIGFzIGJsdWUtZ3JlZW5cbi5idG4taW5mbyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4taW5mby1jb2xvciwgJGJ0bi1pbmZvLWJnLCAkYnRuLWluZm8tYm9yZGVyKTtcbn1cbi8vIFdhcm5pbmcgYXBwZWFycyBhcyBvcmFuZ2Vcbi5idG4td2FybmluZyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4td2FybmluZy1jb2xvciwgJGJ0bi13YXJuaW5nLWJnLCAkYnRuLXdhcm5pbmctYm9yZGVyKTtcbn1cbi8vIERhbmdlciBhbmQgZXJyb3IgYXBwZWFyIGFzIHJlZFxuLmJ0bi1kYW5nZXIge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLWRhbmdlci1jb2xvciwgJGJ0bi1kYW5nZXItYmcsICRidG4tZGFuZ2VyLWJvcmRlcik7XG59XG5cblxuLy8gTGluayBidXR0b25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1ha2UgYSBidXR0b24gbG9vayBhbmQgYmVoYXZlIGxpa2UgYSBsaW5rXG4uYnRuLWxpbmsge1xuICBjb2xvcjogJGxpbmstY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgJixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cbiAgJixcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogJGxpbmstaG92ZXItZGVjb3JhdGlvbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEJ1dHRvbiBTaXplc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1sZyB7XG4gIC8vIGxpbmUtaGVpZ2h0OiBlbnN1cmUgZXZlbi1udW1iZXJlZCBoZWlnaHQgb2YgYnV0dG9uIG5leHQgdG8gbGFyZ2UgaW5wdXRcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWwsICRmb250LXNpemUtbGFyZ2UsICRsaW5lLWhlaWdodC1sYXJnZSwgJGJ0bi1ib3JkZXItcmFkaXVzLWxhcmdlKTtcbn1cbi5idG4tc20ge1xuICAvLyBsaW5lLWhlaWdodDogZW5zdXJlIHByb3BlciBoZWlnaHQgb2YgYnV0dG9uIG5leHQgdG8gc21hbGwgaW5wdXRcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHBhZGRpbmctc21hbGwtdmVydGljYWwsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWwsICRmb250LXNpemUtc21hbGwsICRsaW5lLWhlaWdodC1zbWFsbCwgJGJ0bi1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbn1cbi5idG4teHMge1xuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkcGFkZGluZy14cy12ZXJ0aWNhbCwgJHBhZGRpbmcteHMtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1zbWFsbCwgJGxpbmUtaGVpZ2h0LXNtYWxsLCAkYnRuLWJvcmRlci1yYWRpdXMtc21hbGwpO1xufVxuXG5cbi8vIEJsb2NrIGJ1dHRvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gVmVydGljYWxseSBzcGFjZSBvdXQgbXVsdGlwbGUgYmxvY2sgYnV0dG9uc1xuLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi8vIFNwZWNpZmljaXR5IG92ZXJyaWRlc1xuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xuICAmLmJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi8vXG4vLyBCdXR0b24gZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNYWtlIHRoZSBkaXYgYmVoYXZlIGxpa2UgYSBidXR0b25cbi5idG4tZ3JvdXAsXG4uYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8vIG1hdGNoIC5idG4gYWxpZ25tZW50IGdpdmVuIGZvbnQtc2l6ZSBoYWNrIGFib3ZlXG4gID4gLmJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIEJyaW5nIHRoZSBcImFjdGl2ZVwiIGJ1dHRvbiB0byB0aGUgZnJvbnRcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUsXG4gICAgJi5hY3RpdmUge1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cbn1cblxuLy8gUHJldmVudCBkb3VibGUgYm9yZGVycyB3aGVuIGJ1dHRvbnMgYXJlIG5leHQgdG8gZWFjaCBvdGhlclxuLmJ0bi1ncm91cCB7XG4gIC5idG4gKyAuYnRuLFxuICAuYnRuICsgLmJ0bi1ncm91cCxcbiAgLmJ0bi1ncm91cCArIC5idG4sXG4gIC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxufVxuXG4vLyBPcHRpb25hbDogR3JvdXAgbXVsdGlwbGUgYnV0dG9uIGdyb3VwcyB0b2dldGhlciBmb3IgYSB0b29sYmFyXG4uYnRuLXRvb2xiYXIge1xuICBtYXJnaW4tbGVmdDogLTVweDsgLy8gT2Zmc2V0IHRoZSBmaXJzdCBjaGlsZCdzIG1hcmdpblxuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICAuYnRuLFxuICAuYnRuLWdyb3VwLFxuICAuaW5wdXQtZ3JvdXAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwLFxuICA+IC5pbnB1dC1ncm91cCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuXG4uYnRuLWdyb3VwID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi8vIFNldCBjb3JuZXJzIGluZGl2aWR1YWwgYmVjYXVzZSBzb21ldGltZXMgYSBzaW5nbGUgYnV0dG9uIGNhbiBiZSBpbiBhIC5idG4tZ3JvdXAgYW5kIHdlIG5lZWQgOmZpcnN0LWNoaWxkIGFuZCA6bGFzdC1jaGlsZCB0byBib3RoIG1hdGNoXG4uYnRuLWdyb3VwID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICAmOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKDApO1xuICB9XG59XG4vLyBOZWVkIC5kcm9wZG93bi10b2dnbGUgc2luY2UgOmxhc3QtY2hpbGQgZG9lc24ndCBhcHBseSwgZ2l2ZW4gdGhhdCBhIC5kcm9wZG93bi1tZW51IGlzIHVzZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgaXRcbi5idG4tZ3JvdXAgPiAuYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCksXG4uYnRuLWdyb3VwID4gLmRyb3Bkb3duLXRvZ2dsZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygwKTtcbn1cblxuLy8gQ3VzdG9tIGVkaXRzIGZvciBpbmNsdWRpbmcgYnRuLWdyb3VwcyB3aXRoaW4gYnRuLWdyb3VwcyAodXNlZnVsIGZvciBpbmNsdWRpbmcgZHJvcGRvd24gYnV0dG9ucyB3aXRoaW4gYSBidG4tZ3JvdXApXG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gID4gLmJ0bjpsYXN0LWNoaWxkLFxuICA+IC5kcm9wZG93bi10b2dnbGUge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoMCk7XG4gIH1cbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApO1xufVxuXG4vLyBPbiBhY3RpdmUgYW5kIG9wZW4sIGRvbid0IHNob3cgb3V0bGluZVxuLmJ0bi1ncm91cCAuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZSxcbi5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgb3V0bGluZTogMDtcbn1cblxuXG4vLyBTaXppbmdcbi8vXG4vLyBSZW1peCB0aGUgZGVmYXVsdCBidXR0b24gc2l6aW5nIGNsYXNzZXMgaW50byBuZXcgb25lcyBmb3IgZWFzaWVyIG1hbmlwdWxhdGlvbi5cblxuLmJ0bi1ncm91cC14cyA+IC5idG4geyBAZXh0ZW5kIC5idG4teHM7IH1cbi5idG4tZ3JvdXAtc20gPiAuYnRuIHsgQGV4dGVuZCAuYnRuLXNtOyB9XG4uYnRuLWdyb3VwLWxnID4gLmJ0biB7IEBleHRlbmQgLmJ0bi1sZzsgfVxuXG5cbi8vIFNwbGl0IGJ1dHRvbiBkcm9wZG93bnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gR2l2ZSB0aGUgbGluZSBiZXR3ZWVuIGJ1dHRvbnMgc29tZSBkZXB0aFxuLmJ0bi1ncm91cCA+IC5idG4gKyAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWxnICsgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLy8gVGhlIGNsaWNrYWJsZSBidXR0b24gZm9yIHRvZ2dsaW5nIHRoZSBtZW51XG4vLyBSZW1vdmUgdGhlIGdyYWRpZW50IGFuZCBzZXQgdGhlIHNhbWUgaW5zZXQgc2hhZG93IGFzIHRoZSA6YWN0aXZlIHN0YXRlXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSkpO1xuXG4gIC8vIFNob3cgbm8gc2hhZG93IGZvciBgLmJ0bi1saW5rYCBzaW5jZSBpdCBoYXMgbm8gb3RoZXIgYnV0dG9uIHN0eWxlcy5cbiAgJi5idG4tbGluayB7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxufVxuXG5cbi8vIFJlcG9zaXRpb24gdGhlIGNhcmV0XG4uYnRuIC5jYXJldCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLy8gQ2FyZXRzIGluIG90aGVyIGJ1dHRvbiBzaXplc1xuLmJ0bi1sZyAuY2FyZXQge1xuICBib3JkZXItd2lkdGg6ICRjYXJldC13aWR0aC1sYXJnZSAkY2FyZXQtd2lkdGgtbGFyZ2UgMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbi8vIFVwc2lkZSBkb3duIGNhcmV0cyBmb3IgLmRyb3B1cFxuLmRyb3B1cCAuYnRuLWxnIC5jYXJldCB7XG4gIGJvcmRlci13aWR0aDogMCAkY2FyZXQtd2lkdGgtbGFyZ2UgJGNhcmV0LXdpZHRoLWxhcmdlO1xufVxuXG5cbi8vIFZlcnRpY2FsIGJ1dHRvbiBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1ncm91cC12ZXJ0aWNhbCB7XG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwLFxuICA+IC5idG4tZ3JvdXAgPiAuYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBDbGVhciBmbG9hdHMgc28gZHJvcGRvd24gbWVudXMgY2FuIGJlIHByb3Blcmx5IHBsYWNlZFxuICA+IC5idG4tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGNsZWFyZml4O1xuICAgID4gLmJ0biB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gIH1cblxuICA+IC5idG4gKyAuYnRuLFxuICA+IC5idG4gKyAuYnRuLWdyb3VwLFxuICA+IC5idG4tZ3JvdXAgKyAuYnRuLFxuICA+IC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuIHtcbiAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gICY6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoJGJ0bi1ib3JkZXItcmFkaXVzLWJhc2UpO1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKDApO1xuICB9XG4gICY6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoJGJ0bi1ib3JkZXItcmFkaXVzLWJhc2UpO1xuICB9XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgPiAuYnRuOmxhc3QtY2hpbGQsXG4gID4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoMCk7XG4gIH1cbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG59XG5cblxuLy8gSnVzdGlmaWVkIGJ1dHRvbiBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1ncm91cC1qdXN0aWZpZWQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiAxJTtcbiAgfVxuICA+IC5idG4tZ3JvdXAgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICA+IC5idG4tZ3JvdXAgLmRyb3Bkb3duLW1lbnUge1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cblxuXG4vLyBDaGVja2JveCBhbmQgcmFkaW8gb3B0aW9uc1xuLy9cbi8vIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGJyb3dzZXIncyBmb3JtIHZhbGlkYXRpb24gZmVlZGJhY2ssIHBvd2VyZWQgYnkgdGhlXG4vLyBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgd2UgaGF2ZSB0byBcImhpZGVcIiB0aGUgaW5wdXRzIHZpYSBgY2xpcGAuIFdlIGNhbm5vdCB1c2Vcbi8vIGBkaXNwbGF5OiBub25lO2Agb3IgYHZpc2liaWxpdHk6IGhpZGRlbjtgIGFzIHRoYXQgYWxzbyBoaWRlcyB0aGUgcG9wb3Zlci5cbi8vIFNpbXBseSB2aXN1YWxseSBoaWRpbmcgdGhlIGlucHV0cyB2aWEgYG9wYWNpdHlgIHdvdWxkIGxlYXZlIHRoZW0gY2xpY2thYmxlIGluXG4vLyBjZXJ0YWluIGNhc2VzIHdoaWNoIGlzIHByZXZlbnRlZCBieSB1c2luZyBgY2xpcGAgYW5kIGBwb2ludGVyLWV2ZW50c2AuXG4vLyBUaGlzIHdheSwgd2UgZW5zdXJlIGEgRE9NIGVsZW1lbnQgaXMgdmlzaWJsZSB0byBwb3NpdGlvbiB0aGUgcG9wb3ZlciBmcm9tLlxuLy9cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMjc5NCBhbmRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzE0NTU5IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG5bZGF0YS10b2dnbGU9XCJidXR0b25zXCJdIHtcbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAgPiAuYnRuIHtcbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBGb3Jtc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBOb3JtYWxpemUgbm9uLWNvbnRyb2xzXG4vL1xuLy8gUmVzdHlsZSBhbmQgYmFzZWxpbmUgbm9uLWNvbnRyb2wgZm9ybSBlbGVtZW50cy5cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgLy8gQ2hyb21lIGFuZCBGaXJlZm94IHNldCBhIGBtaW4td2lkdGg6IG1pbi1jb250ZW50O2Agb24gZmllbGRzZXRzLFxuICAvLyBzbyB3ZSByZXNldCB0aGF0IHRvIGVuc3VyZSBpdCBiZWhhdmVzIG1vcmUgbGlrZSBhIHN0YW5kYXJkIGJsb2NrIGVsZW1lbnQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzEyMzU5LlxuICBtaW4td2lkdGg6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBmb250LXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjUpO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6ICRsZWdlbmQtY29sb3I7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsZWdlbmQtYm9yZGVyLWNvbG9yO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlOyAvLyBGb3JjZSBJRTggdG8gd3JhcCBsb25nIGNvbnRlbnQgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzEzMTQxKVxuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi8vIE5vcm1hbGl6ZSBmb3JtIGNvbnRyb2xzXG4vL1xuLy8gV2hpbGUgbW9zdCBvZiBvdXIgZm9ybSBzdHlsZXMgcmVxdWlyZSBleHRyYSBjbGFzc2VzLCBzb21lIGJhc2ljIG5vcm1hbGl6YXRpb25cbi8vIGlzIHJlcXVpcmVkIHRvIGVuc3VyZSBvcHRpbXVtIGRpc3BsYXkgd2l0aCBvciB3aXRob3V0IHRob3NlIGNsYXNzZXMgdG8gYmV0dGVyXG4vLyBhZGRyZXNzIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzLlxuXG4vLyBPdmVycmlkZSBjb250ZW50LWJveCBpbiBOb3JtYWxpemUgKCogaXNuJ3Qgc3BlY2lmaWMgZW5vdWdoKVxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XG59XG5cbi8vIFBvc2l0aW9uIHJhZGlvcyBhbmQgY2hlY2tib3hlcyBiZXR0ZXJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgbWFyZ2luLXRvcDogMXB4IFxcOTsgLy8gSUU4LTlcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gTWFrZSByYW5nZSBpbnB1dHMgYmVoYXZlIGxpa2UgdGV4dHVhbCBmb3JtIGNvbnRyb2xzXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIE1ha2UgbXVsdGlwbGUgc2VsZWN0IGVsZW1lbnRzIGhlaWdodCBub3QgZml4ZWRcbnNlbGVjdFttdWx0aXBsZV0sXG5zZWxlY3Rbc2l6ZV0ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8vIEZvY3VzIGZvciBmaWxlLCByYWRpbywgYW5kIGNoZWNrYm94XG5pbnB1dFt0eXBlPVwiZmlsZVwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyB7XG4gIEBpbmNsdWRlIHRhYi1mb2N1cztcbn1cblxuLy8gQWRqdXN0IG91dHB1dCBlbGVtZW50XG5vdXRwdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGNvbG9yOiAkaW5wdXQtY29sb3I7XG59XG5cblxuLy8gQ29tbW9uIGZvcm0gY29udHJvbHNcbi8vXG4vLyBTaGFyZWQgc2l6ZSBhbmQgdHlwZSByZXNldHMgZm9yIGZvcm0gY29udHJvbHMuIEFwcGx5IGAuZm9ybS1jb250cm9sYCB0byBhbnlcbi8vIG9mIHRoZSBmb2xsb3dpbmcgZm9ybSBjb250cm9sczpcbi8vXG4vLyBzZWxlY3Rcbi8vIHRleHRhcmVhXG4vLyBpbnB1dFt0eXBlPVwidGV4dFwiXVxuLy8gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl1cbi8vIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXVxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl1cbi8vIGlucHV0W3R5cGU9XCJtb250aFwiXVxuLy8gaW5wdXRbdHlwZT1cInRpbWVcIl1cbi8vIGlucHV0W3R5cGU9XCJ3ZWVrXCJdXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdXG4vLyBpbnB1dFt0eXBlPVwiZW1haWxcIl1cbi8vIGlucHV0W3R5cGU9XCJ1cmxcIl1cbi8vIGlucHV0W3R5cGU9XCJzZWFyY2hcIl1cbi8vIGlucHV0W3R5cGU9XCJ0ZWxcIl1cbi8vIGlucHV0W3R5cGU9XCJjb2xvclwiXVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTsgLy8gTWFrZSBpbnB1dHMgYXQgbGVhc3QgdGhlIGhlaWdodCBvZiB0aGVpciBidXR0b24gY291bnRlcnBhcnQgKGJhc2UgbGluZS1oZWlnaHQgKyBwYWRkaW5nICsgYm9yZGVyKVxuICBwYWRkaW5nOiAkcGFkZGluZy1iYXNlLXZlcnRpY2FsICRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZXNldCB1bnVzdWFsIEZpcmVmb3gtb24tQW5kcm9pZCBkZWZhdWx0IHN0eWxlOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9pc3N1ZXMvMjE0XG4gIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzOyAvLyBOb3RlOiBUaGlzIGhhcyBubyBlZmZlY3Qgb24gPHNlbGVjdD5zIGluIHNvbWUgYnJvd3NlcnMsIGR1ZSB0byB0aGUgbGltaXRlZCBzdHlsYWJpbGl0eSBvZiA8c2VsZWN0PnMgaW4gQ1NTLlxuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpKTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzKTtcblxuICAvLyBDdXN0b21pemUgdGhlIGA6Zm9jdXNgIHN0YXRlIHRvIGltaXRhdGUgbmF0aXZlIFdlYktpdCBzdHlsZXMuXG4gIEBpbmNsdWRlIGZvcm0tY29udHJvbC1mb2N1cztcblxuICAvLyBQbGFjZWhvbGRlclxuICBAaW5jbHVkZSBwbGFjZWhvbGRlcjtcblxuICAvLyBVbnN0eWxlIHRoZSBjYXJldCBvbiBgPHNlbGVjdD5gcyBpbiBJRTEwKy5cbiAgJjo6LW1zLWV4cGFuZCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLy8gRGlzYWJsZWQgYW5kIHJlYWQtb25seSBpbnB1dHNcbiAgLy9cbiAgLy8gSFRNTDUgc2F5cyB0aGF0IGNvbnRyb2xzIHVuZGVyIGEgZmllbGRzZXQgPiBsZWdlbmQ6Zmlyc3QtY2hpbGQgd29uJ3QgYmVcbiAgLy8gZGlzYWJsZWQgaWYgdGhlIGZpZWxkc2V0IGlzIGRpc2FibGVkLiBEdWUgdG8gaW1wbGVtZW50YXRpb24gZGlmZmljdWx0eSwgd2VcbiAgLy8gZG9uJ3QgaG9ub3IgdGhhdCBlZGdlIGNhc2U7IHdlIHN0eWxlIHRoZW0gYXMgZGlzYWJsZWQgYW55d2F5LlxuICAmW2Rpc2FibGVkXSxcbiAgJltyZWFkb25seV0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmctZGlzYWJsZWQ7XG4gICAgb3BhY2l0eTogMTsgLy8gaU9TIGZpeCBmb3IgdW5yZWFkYWJsZSBkaXNhYmxlZCBjb250ZW50OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTY1NVxuICB9XG5cbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgdGV4dGFyZWEmIHRvIHRleHRhcmVhLmZvcm0tY29udHJvbFxufVxuXG4vLyBSZXNldCBoZWlnaHQgZm9yIGB0ZXh0YXJlYWBzXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblxuLy8gU2VhcmNoIGlucHV0cyBpbiBpT1Ncbi8vXG4vLyBUaGlzIG92ZXJyaWRlcyB0aGUgZXh0cmEgcm91bmRlZCBjb3JuZXJzIG9uIHNlYXJjaCBpbnB1dHMgaW4gaU9TIHNvIHRoYXQgb3VyXG4vLyBgLmZvcm0tY29udHJvbGAgY2xhc3MgY2FuIHByb3Blcmx5IHN0eWxlIHRoZW0uIE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBzaW1wbHlcbi8vIGJlIGFkZGVkIHRvIGAuZm9ybS1jb250cm9sYCBhcyBpdCdzIG5vdCBzcGVjaWZpYyBlbm91Z2guIEZvciBkZXRhaWxzLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE1ODYuXG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cblxuLy8gU3BlY2lhbCBzdHlsZXMgZm9yIGlPUyB0ZW1wb3JhbCBpbnB1dHNcbi8vXG4vLyBJbiBNb2JpbGUgU2FmYXJpLCBzZXR0aW5nIGBkaXNwbGF5OiBibG9ja2Agb24gdGVtcG9yYWwgaW5wdXRzIGNhdXNlcyB0aGVcbi8vIHRleHQgd2l0aGluIHRoZSBpbnB1dCB0byBiZWNvbWUgdmVydGljYWxseSBtaXNhbGlnbmVkLiBBcyBhIHdvcmthcm91bmQsIHdlXG4vLyBzZXQgYSBwaXhlbCBsaW5lLWhlaWdodCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIGhlaWdodCBvZiB0aGUgaW5wdXQsIGJ1dCBvbmx5XG4vLyBmb3IgU2FmYXJpLiBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzOTg0OFxuLy9cbi8vIE5vdGUgdGhhdCBhcyBvZiA5LjMsIGlPUyBkb2Vzbid0IHN1cHBvcnQgYHdlZWtgLlxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuICBpbnB1dFt0eXBlPVwidGltZVwiXSxcbiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxuICBpbnB1dFt0eXBlPVwibW9udGhcIl0ge1xuICAgICYuZm9ybS1jb250cm9sIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWJhc2U7XG4gICAgfVxuXG4gICAgJi5pbnB1dC1zbSxcbiAgICAuaW5wdXQtZ3JvdXAtc20gJiB7XG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICB9XG5cbiAgICAmLmlucHV0LWxnLFxuICAgIC5pbnB1dC1ncm91cC1sZyAmIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEZvcm0gZ3JvdXBzXG4vL1xuLy8gRGVzaWduZWQgdG8gaGVscCB3aXRoIHRoZSBvcmdhbml6YXRpb24gYW5kIHNwYWNpbmcgb2YgdmVydGljYWwgZm9ybXMuIEZvclxuLy8gaG9yaXpvbnRhbCBmb3JtcywgdXNlIHRoZSBwcmVkZWZpbmVkIGdyaWQgY2xhc3Nlcy5cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAkZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tO1xufVxuXG5cbi8vIENoZWNrYm94ZXMgYW5kIHJhZGlvc1xuLy9cbi8vIEluZGVudCB0aGUgbGFiZWxzIHRvIHBvc2l0aW9uIHJhZGlvcy9jaGVja2JveGVzIGFzIGhhbmdpbmcgY29udHJvbHMuXG5cbi5yYWRpbyxcbi5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgbGFiZWwge1xuICAgIG1pbi1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDsgLy8gRW5zdXJlIHRoZSBpbnB1dCBkb2Vzbid0IGp1bXAgd2hlbiB0aGVyZSBpcyBubyB0ZXh0XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4ucmFkaW8taW5saW5lIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4uY2hlY2tib3gtaW5saW5lIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBtYXJnaW4tdG9wOiA0cHggXFw5O1xufVxuXG4ucmFkaW8gKyAucmFkaW8sXG4uY2hlY2tib3ggKyAuY2hlY2tib3gge1xuICBtYXJnaW4tdG9wOiAtNXB4OyAvLyBNb3ZlIHVwIHNpYmxpbmcgcmFkaW9zIG9yIGNoZWNrYm94ZXMgZm9yIHRpZ2h0ZXIgc3BhY2luZ1xufVxuXG4vLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgb24gc2FtZSBsaW5lXG4ucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYWRpby1pbmxpbmUgKyAucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSArIC5jaGVja2JveC1pbmxpbmUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDsgLy8gc3BhY2Ugb3V0IGNvbnNlY3V0aXZlIGlubGluZSBjb250cm9sc1xufVxuXG4vLyBBcHBseSBzYW1lIGRpc2FibGVkIGN1cnNvciB0d2VhayBhcyBmb3IgaW5wdXRzXG4vLyBTb21lIHNwZWNpYWwgY2FyZSBpcyBuZWVkZWQgYmVjYXVzZSA8bGFiZWw+cyBkb24ndCBpbmhlcml0IHRoZWlyIHBhcmVudCdzIGBjdXJzb3JgLlxuLy9cbi8vIE5vdGU6IE5laXRoZXIgcmFkaW9zIG5vciBjaGVja2JveGVzIGNhbiBiZSByZWFkb25seS5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICZbZGlzYWJsZWRdLFxuICAmLmRpc2FibGVkLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICB9XG59XG4vLyBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIGRpcmVjdGx5IG9uIDxsYWJlbD5zXG4ucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSB7XG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cbi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgb24gZWxlbWVudHMgd2l0aCA8bGFiZWw+IGRlc2NlbmRhbnRzXG4ucmFkaW8sXG4uY2hlY2tib3gge1xuICAmLmRpc2FibGVkLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgbGFiZWwge1xuICAgICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFN0YXRpYyBmb3JtIGNvbnRyb2wgdGV4dFxuLy9cbi8vIEFwcGx5IGNsYXNzIHRvIGEgYHBgIGVsZW1lbnQgdG8gbWFrZSBhbnkgc3RyaW5nIG9mIHRleHQgYWxpZ24gd2l0aCBsYWJlbHMgaW5cbi8vIGEgaG9yaXpvbnRhbCBmb3JtIGxheW91dC5cblxuLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAvLyBTaXplIGl0IGFwcHJvcHJpYXRlbHkgbmV4dCB0byByZWFsIGZvcm0gY29udHJvbHNcbiAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7XG4gIHBhZGRpbmctYm90dG9tOiAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpO1xuICAvLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBgcGBcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICRmb250LXNpemUtYmFzZSk7XG5cbiAgJi5pbnB1dC1sZyxcbiAgJi5pbnB1dC1zbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cblxuXG4vLyBGb3JtIGNvbnRyb2wgc2l6aW5nXG4vL1xuLy8gQnVpbGQgb24gYC5mb3JtLWNvbnRyb2xgIHdpdGggbW9kaWZpZXIgY2xhc3NlcyB0byBkZWNyZWFzZSBvciBpbmNyZWFzZSB0aGVcbi8vIGhlaWdodCBhbmQgZm9udC1zaXplIG9mIGZvcm0gY29udHJvbHMuXG4vL1xuLy8gVGhlIGAuZm9ybS1ncm91cC0qIGZvcm0tY29udHJvbGAgdmFyaWF0aW9ucyBhcmUgc2FkbHkgZHVwbGljYXRlZCB0byBhdm9pZCB0aGVcbi8vIGlzc3VlIGRvY3VtZW50ZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xNTA3NC5cblxuQGluY2x1ZGUgaW5wdXQtc2l6ZSgnLmlucHV0LXNtJywgJGlucHV0LWhlaWdodC1zbWFsbCwgJHBhZGRpbmctc21hbGwtdmVydGljYWwsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWwsICRmb250LXNpemUtc21hbGwsICRsaW5lLWhlaWdodC1zbWFsbCwgJGlucHV0LWJvcmRlci1yYWRpdXMtc21hbGwpO1xuLmZvcm0tZ3JvdXAtc20ge1xuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gICAgcGFkZGluZzogJHBhZGRpbmctc21hbGwtdmVydGljYWwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1zbWFsbDtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbDtcbiAgfVxuICBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gIH1cbiAgdGV4dGFyZWEuZm9ybS1jb250cm9sLFxuICBzZWxlY3RbbXVsdGlwbGVdLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gICAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICRmb250LXNpemUtc21hbGwpO1xuICAgIHBhZGRpbmc6ICgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCArIDEpICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtc21hbGw7XG4gIH1cbn1cblxuQGluY2x1ZGUgaW5wdXQtc2l6ZSgnLmlucHV0LWxnJywgJGlucHV0LWhlaWdodC1sYXJnZSwgJHBhZGRpbmctbGFyZ2UtdmVydGljYWwsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWwsICRmb250LXNpemUtbGFyZ2UsICRsaW5lLWhlaWdodC1sYXJnZSwgJGlucHV0LWJvcmRlci1yYWRpdXMtbGFyZ2UpO1xuLmZvcm0tZ3JvdXAtbGcge1xuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgcGFkZGluZzogJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1sYXJnZTtcbiAgICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cy1sYXJnZTtcbiAgfVxuICBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gIH1cbiAgdGV4dGFyZWEuZm9ybS1jb250cm9sLFxuICBzZWxlY3RbbXVsdGlwbGVdLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICRmb250LXNpemUtbGFyZ2UpO1xuICAgIHBhZGRpbmc6ICgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCArIDEpICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxhcmdlO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtbGFyZ2U7XG4gIH1cbn1cblxuXG4vLyBGb3JtIGNvbnRyb2wgZmVlZGJhY2sgc3RhdGVzXG4vL1xuLy8gQXBwbHkgY29udGV4dHVhbCBhbmQgc2VtYW50aWMgc3RhdGVzIHRvIGluZGl2aWR1YWwgZm9ybSBjb250cm9scy5cblxuLmhhcy1mZWVkYmFjayB7XG4gIC8vIEVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZ1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLy8gRW5zdXJlIGljb25zIGRvbid0IG92ZXJsYXAgdGV4dFxuICAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAoJGlucHV0LWhlaWdodC1iYXNlICogMS4yNSk7XG4gIH1cbn1cbi8vIEZlZWRiYWNrIGljb24gKHJlcXVpcmVzIC5nbHlwaGljb24gY2xhc3Nlcylcbi5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7IC8vIEVuc3VyZSBpY29uIGlzIGFib3ZlIGlucHV0IGdyb3Vwc1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWJhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5wdXQtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmlucHV0LWdyb3VwLWxnICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2wgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgd2lkdGg6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG59XG4uaW5wdXQtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmlucHV0LWdyb3VwLXNtICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgd2lkdGg6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG59XG5cbi8vIEZlZWRiYWNrIHN0YXRlc1xuLmhhcy1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLXN1Y2Nlc3MtdGV4dCwgJHN0YXRlLXN1Y2Nlc3MtdGV4dCwgJHN0YXRlLXN1Y2Nlc3MtYmcpO1xufVxuLmhhcy13YXJuaW5nIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLXdhcm5pbmctdGV4dCwgJHN0YXRlLXdhcm5pbmctdGV4dCwgJHN0YXRlLXdhcm5pbmctYmcpO1xufVxuLmhhcy1lcnJvciB7XG4gIEBpbmNsdWRlIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCRzdGF0ZS1kYW5nZXItdGV4dCwgJHN0YXRlLWRhbmdlci10ZXh0LCAkc3RhdGUtZGFuZ2VyLWJnKTtcbn1cblxuLy8gUmVwb3NpdGlvbiBmZWVkYmFjayBpY29uIGlmIGlucHV0IGhhcyB2aXNpYmxlIGxhYmVsIGFib3ZlXG4uaGFzLWZlZWRiYWNrIGxhYmVsIHtcblxuICAmIH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgdG9wOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgNSk7IC8vIEhlaWdodCBvZiB0aGUgYGxhYmVsYCBhbmQgaXRzIG1hcmdpblxuICB9XG4gICYuc3Itb25seSB+IC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHRvcDogMDtcbiAgfVxufVxuXG5cbi8vIEhlbHAgdGV4dFxuLy9cbi8vIEFwcGx5IHRvIGFueSBlbGVtZW50IHlvdSB3aXNoIHRvIGNyZWF0ZSBsaWdodCB0ZXh0IGZvciBwbGFjZW1lbnQgaW1tZWRpYXRlbHlcbi8vIGJlbG93IGEgZm9ybSBjb250cm9sLiBVc2UgZm9yIGdlbmVyYWwgaGVscCwgZm9ybWF0dGluZywgb3IgaW5zdHJ1Y3Rpb25hbCB0ZXh0LlxuXG4uaGVscC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvLyBhY2NvdW50IGZvciBhbnkgZWxlbWVudCB1c2luZyBoZWxwLWJsb2NrXG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IGxpZ2h0ZW4oJHRleHQtY29sb3IsIDI1JSk7IC8vIGxpZ2h0ZW4gdGhlIHRleHQgc29tZSBmb3IgY29udHJhc3Rcbn1cblxuXG4vLyBJbmxpbmUgZm9ybXNcbi8vXG4vLyBNYWtlIGZvcm1zIGFwcGVhciBpbmxpbmUoLWJsb2NrKSBieSBhZGRpbmcgdGhlIGAuZm9ybS1pbmxpbmVgIGNsYXNzLiBJbmxpbmVcbi8vIGZvcm1zIGJlZ2luIHN0YWNrZWQgb24gZXh0cmEgc21hbGwgKG1vYmlsZSkgZGV2aWNlcyBhbmQgdGhlbiBnbyBpbmxpbmUgd2hlblxuLy8gdmlld3BvcnRzIHJlYWNoIDw3NjhweC5cbi8vXG4vLyBSZXF1aXJlcyB3cmFwcGluZyBpbnB1dHMgYW5kIGxhYmVscyB3aXRoIGAuZm9ybS1ncm91cGAgZm9yIHByb3BlciBkaXNwbGF5IG9mXG4vLyBkZWZhdWx0IEhUTUwgZm9ybSBjb250cm9scyBhbmQgb3VyIGN1c3RvbSBmb3JtIGNvbnRyb2xzIChlLmcuLCBpbnB1dCBncm91cHMpLlxuLy9cbi8vIEhlYWRzIHVwISBUaGlzIGlzIG1peGluLWVkIGludG8gYC5uYXZiYXItZm9ybWAgaW4gbmF2YmFycy5sZXNzLlxuXG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgZnJvbSBgLmZvcm0taW5saW5lYCBmb3IgbGlic2FzcyBjb21wYXRpYmlsaXR5XG5AbWl4aW4gZm9ybS1pbmxpbmUge1xuXG4gIC8vIEtpY2sgaW4gdGhlIGlubGluZVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAvLyBJbmxpbmUtYmxvY2sgYWxsIHRoZSB0aGluZ3MgZm9yIFwiaW5saW5lXCJcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAvLyBJbiBuYXZiYXItZm9ybSwgYWxsb3cgZm9sa3MgdG8gKm5vdCogdXNlIGAuZm9ybS1ncm91cGBcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiBhdXRvOyAvLyBQcmV2ZW50IGxhYmVscyBmcm9tIHN0YWNraW5nIGFib3ZlIGlucHV0cyBpbiBgLmZvcm0tZ3JvdXBgXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3RhdGljIGNvbnRyb2xzIGJlaGF2ZSBsaWtlIHJlZ3VsYXIgb25lc1xuICAgIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgLmlucHV0LWdyb3VwLWFkZG9uLFxuICAgICAgLmlucHV0LWdyb3VwLWJ0bixcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbnB1dCBncm91cHMgbmVlZCB0aGF0IDEwMCUgd2lkdGggdGhvdWdoXG4gICAgLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gb24gcmFkaW9zL2NoZWNrYm94ZXMgdGhhdCB3ZXJlIHVzZWQgZm9yIHN0YWNraW5nLCBhbmRcbiAgICAvLyB0aGVuIHVuZG8gdGhlIGZsb2F0aW5nIG9mIHJhZGlvcyBhbmQgY2hlY2tib3hlcyB0byBtYXRjaC5cbiAgICAucmFkaW8sXG4gICAgLmNoZWNrYm94IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gICAgLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAvLyBSZS1vdmVycmlkZSB0aGUgZmVlZGJhY2sgaWNvbi5cbiAgICAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgfVxufVxuLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGFzIGBAbWl4aW4gZm9ybS1pbmxpbmVgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbi5mb3JtLWlubGluZSB7XG4gIEBpbmNsdWRlIGZvcm0taW5saW5lO1xufVxuXG5cblxuLy8gSG9yaXpvbnRhbCBmb3Jtc1xuLy9cbi8vIEhvcml6b250YWwgZm9ybXMgYXJlIGJ1aWx0IG9uIGdyaWQgY2xhc3NlcyBhbmQgYWxsb3cgeW91IHRvIGNyZWF0ZSBmb3JtcyB3aXRoXG4vLyBsYWJlbHMgb24gdGhlIGxlZnQgYW5kIGlucHV0cyBvbiB0aGUgcmlnaHQuXG5cbi5mb3JtLWhvcml6b250YWwge1xuXG4gIC8vIENvbnNpc3RlbnQgdmVydGljYWwgYWxpZ25tZW50IG9mIHJhZGlvcyBhbmQgY2hlY2tib3hlc1xuICAvL1xuICAvLyBMYWJlbHMgYWxzbyBnZXQgc29tZSByZXNldCBzdHlsZXMsIGJ1dCB0aGF0IGlzIHNjb3BlZCB0byBhIG1lZGlhIHF1ZXJ5IGJlbG93LlxuICAucmFkaW8sXG4gIC5jaGVja2JveCxcbiAgLnJhZGlvLWlubGluZSxcbiAgLmNoZWNrYm94LWlubGluZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpOyAvLyBEZWZhdWx0IHBhZGRpbmcgcGx1cyBhIGJvcmRlclxuICB9XG4gIC8vIEFjY291bnQgZm9yIHBhZGRpbmcgd2UncmUgYWRkaW5nIHRvIGVuc3VyZSB0aGUgYWxpZ25tZW50IGFuZCBvZiBoZWxwIHRleHRcbiAgLy8gYW5kIG90aGVyIGNvbnRlbnQgYmVsb3cgaXRlbXNcbiAgLnJhZGlvLFxuICAuY2hlY2tib3gge1xuICAgIG1pbi1oZWlnaHQ6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpKTtcbiAgfVxuXG4gIC8vIE1ha2UgZm9ybSBncm91cHMgYmVoYXZlIGxpa2Ugcm93c1xuICAuZm9ybS1ncm91cCB7XG4gICAgQGluY2x1ZGUgbWFrZS1yb3c7XG4gIH1cblxuICAvLyBSZXNldCBzcGFjaW5nIGFuZCByaWdodCBhbGlnbiBsYWJlbHMsIGJ1dCBzY29wZSB0byBtZWRpYSBxdWVyaWVzIHNvIHRoYXRcbiAgLy8gbGFiZWxzIG9uIG5hcnJvdyB2aWV3cG9ydHMgc3RhY2sgdGhlIHNhbWUgYXMgYSBkZWZhdWx0IGZvcm0gZXhhbXBsZS5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgLmNvbnRyb2wtbGFiZWwge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7IC8vIERlZmF1bHQgcGFkZGluZyBwbHVzIGEgYm9yZGVyXG4gICAgfVxuICB9XG5cbiAgLy8gVmFsaWRhdGlvbiBzdGF0ZXNcbiAgLy9cbiAgLy8gUmVwb3NpdGlvbiB0aGUgaWNvbiBiZWNhdXNlIGl0J3Mgbm93IHdpdGhpbiBhIGdyaWQgY29sdW1uIGFuZCBjb2x1bW5zIGhhdmVcbiAgLy8gYHBvc2l0aW9uOiByZWxhdGl2ZTtgIG9uIHRoZW0uIEFsc28gYWNjb3VudHMgZm9yIHRoZSBncmlkIGd1dHRlciBwYWRkaW5nLlxuICAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHJpZ2h0OiBmbG9vcigoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikpO1xuICB9XG5cbiAgLy8gRm9ybSBncm91cCBzaXplc1xuICAvL1xuICAvLyBRdWljayB1dGlsaXR5IGNsYXNzIGZvciBhcHBseWluZyBgLmlucHV0LWxnYCBhbmQgYC5pbnB1dC1zbWAgc3R5bGVzIHRvIHRoZVxuICAvLyBpbnB1dHMgYW5kIGxhYmVscyB3aXRoaW4gYSBgLmZvcm0tZ3JvdXBgLlxuICAuZm9ybS1ncm91cC1sZyB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgKyAxKTtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxhcmdlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZm9ybS1ncm91cC1zbSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctc21hbGwtdmVydGljYWwgKyAxKTtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEdyaWQgc3lzdGVtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIENvbnRhaW5lciB3aWR0aHNcbi8vXG4vLyBTZXQgdGhlIGNvbnRhaW5lciB3aWR0aCwgYW5kIG92ZXJyaWRlIGl0IGZvciBmaXhlZCBuYXZiYXJzIGluIG1lZGlhIHF1ZXJpZXMuXG5cbi5jb250YWluZXIge1xuICBAaW5jbHVkZSBjb250YWluZXItZml4ZWQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgd2lkdGg6ICRjb250YWluZXItc207XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgd2lkdGg6ICRjb250YWluZXItbWQ7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgd2lkdGg6ICRjb250YWluZXItbGc7XG4gIH1cbn1cblxuXG4vLyBGbHVpZCBjb250YWluZXJcbi8vXG4vLyBVdGlsaXplcyB0aGUgbWl4aW4gbWVhbnQgZm9yIGZpeGVkIHdpZHRoIGNvbnRhaW5lcnMsIGJ1dCB3aXRob3V0IGFueSBkZWZpbmVkXG4vLyB3aWR0aCBmb3IgZmx1aWQsIGZ1bGwgd2lkdGggbGF5b3V0cy5cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIEBpbmNsdWRlIGNvbnRhaW5lci1maXhlZDtcbn1cblxuXG4vLyBSb3dcbi8vXG4vLyBSb3dzIGNvbnRhaW4gYW5kIGNsZWFyIHRoZSBmbG9hdHMgb2YgeW91ciBjb2x1bW5zLlxuXG4ucm93IHtcbiAgQGluY2x1ZGUgbWFrZS1yb3c7XG59XG5cblxuLy8gQ29sdW1uc1xuLy9cbi8vIENvbW1vbiBzdHlsZXMgZm9yIHNtYWxsIGFuZCBsYXJnZSBncmlkIGNvbHVtbnNcblxuQGluY2x1ZGUgbWFrZS1ncmlkLWNvbHVtbnM7XG5cblxuLy8gRXh0cmEgc21hbGwgZ3JpZFxuLy9cbi8vIENvbHVtbnMsIG9mZnNldHMsIHB1c2hlcywgYW5kIHB1bGxzIGZvciBleHRyYSBzbWFsbCBkZXZpY2VzIGxpa2Vcbi8vIHNtYXJ0cGhvbmVzLlxuXG5AaW5jbHVkZSBtYWtlLWdyaWQoeHMpO1xuXG5cbi8vIFNtYWxsIGdyaWRcbi8vXG4vLyBDb2x1bW5zLCBvZmZzZXRzLCBwdXNoZXMsIGFuZCBwdWxscyBmb3IgdGhlIHNtYWxsIGRldmljZSByYW5nZSwgZnJvbSBwaG9uZXNcbi8vIHRvIHRhYmxldHMuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICBAaW5jbHVkZSBtYWtlLWdyaWQoc20pO1xufVxuXG5cbi8vIE1lZGl1bSBncmlkXG4vL1xuLy8gQ29sdW1ucywgb2Zmc2V0cywgcHVzaGVzLCBhbmQgcHVsbHMgZm9yIHRoZSBkZXNrdG9wIGRldmljZSByYW5nZS5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gIEBpbmNsdWRlIG1ha2UtZ3JpZChtZCk7XG59XG5cblxuLy8gTGFyZ2UgZ3JpZFxuLy9cbi8vIENvbHVtbnMsIG9mZnNldHMsIHB1c2hlcywgYW5kIHB1bGxzIGZvciB0aGUgbGFyZ2UgZGVza3RvcCBkZXZpY2UgcmFuZ2UuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICBAaW5jbHVkZSBtYWtlLWdyaWQobGcpO1xufVxuIiwiLy9cbi8vIE5hdnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDsgLy8gT3ZlcnJpZGUgZGVmYXVsdCB1bC9vbFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICA+IGEge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAkbmF2LWxpbmstcGFkZGluZztcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWxpbmstaG92ZXItYmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZWQgc3RhdGUgc2V0cyB0ZXh0IHRvIGdyYXkgYW5kIG51a2VzIGhvdmVyL3RhYiBlZmZlY3RzXG4gICAgJi5kaXNhYmxlZCA+IGEge1xuICAgICAgY29sb3I6ICRuYXYtZGlzYWJsZWQtbGluay1jb2xvcjtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdi1kaXNhYmxlZC1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT3BlbiBkcm9wZG93bnNcbiAgLm9wZW4gPiBhIHtcbiAgICAmLFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWxpbmstaG92ZXItYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRsaW5rLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5hdiBkaXZpZGVycyAoZGVwcmVjYXRlZCB3aXRoIHYzLjAuMSlcbiAgLy9cbiAgLy8gVGhpcyBzaG91bGQgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gdjMgd2l0aCB0aGUgZHJvcHBpbmcgb2YgYC5uYXYtbGlzdGAsIGJ1dFxuICAvLyB3ZSBtaXNzZWQgaXQuIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IHRoaXMgYW55d2hlcmUsIGJ1dCBpbiB0aGUgaW50ZXJlc3RcbiAgLy8gb2YgbWFpbnRhaW5pbmcgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBpbiBjYXNlIHlvdSB1c2UgaXQsIGl0J3MgZGVwcmVjYXRlZC5cbiAgLm5hdi1kaXZpZGVyIHtcbiAgICBAaW5jbHVkZSBuYXYtZGl2aWRlcjtcbiAgfVxuXG4gIC8vIFByZXZlbnQgSUU4IGZyb20gbWlzcGxhY2luZyBpbWdzXG4gIC8vXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9pc3N1ZXMvOTg0I2lzc3VlY29tbWVudC0zOTg1OTg5XG4gID4gbGkgPiBhID4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn1cblxuXG4vLyBUYWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEdpdmUgdGhlIHRhYnMgc29tZXRoaW5nIHRvIHNpdCBvblxuLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIE1ha2UgdGhlIGxpc3QtaXRlbXMgb3ZlcmxheSB0aGUgYm90dG9tIGJvcmRlclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG5cbiAgICAvLyBBY3R1YWwgdGFicyAoYXMgbGlua3MpXG4gICAgPiBhIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlICRib3JkZXItcmFkaXVzLWJhc2UgMCAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvciAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFjdGl2ZSBzdGF0ZSwgYW5kIGl0cyA6aG92ZXIgdG8gb3ZlcnJpZGUgbm9ybWFsIDpob3ZlclxuICAgICYuYWN0aXZlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYmc7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1ib3JkZXItY29sb3I7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIHB1bGxpbmcgdGhpcyBpbiBtYWlubHkgZm9yIGxlc3Mgc2hvcnRoYW5kXG4gICYubmF2LWp1c3RpZmllZCB7XG4gICAgQGV4dGVuZCAubmF2LWp1c3RpZmllZDtcbiAgICBAZXh0ZW5kIC5uYXYtdGFicy1qdXN0aWZpZWQ7XG4gIH1cbn1cblxuXG4vLyBQaWxsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLm5hdi1waWxscyB7XG4gID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgLy8gTGlua3MgcmVuZGVyZWQgYXMgcGlsbHNcbiAgICA+IGEge1xuICAgICAgYm9yZGVyLXJhZGl1czogJG5hdi1waWxscy1ib3JkZXItcmFkaXVzO1xuICAgIH1cbiAgICArIGxpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgfVxuXG4gICAgLy8gQWN0aXZlIHN0YXRlXG4gICAgJi5hY3RpdmUgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWJnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIFN0YWNrZWQgcGlsbHNcbi5uYXYtc3RhY2tlZCB7XG4gID4gbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgICsgbGkge1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IC8vIG5vIG5lZWQgZm9yIHRoaXMgZ2FwIGJldHdlZW4gbmF2IGl0ZW1zXG4gICAgfVxuICB9XG59XG5cblxuLy8gTmF2IHZhcmlhdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEp1c3RpZmllZCBuYXYgbGlua3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLm5hdi1qdXN0aWZpZWQge1xuICB3aWR0aDogMTAwJTtcblxuICA+IGxpIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICA+IGEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gID4gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICB0b3A6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgID4gbGkge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIHdpZHRoOiAxJTtcbiAgICAgID4gYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1vdmUgYm9yZGVycyB0byBhbmNob3JzIGluc3RlYWQgb2YgYm90dG9tIG9mIGxpc3Rcbi8vXG4vLyBNaXhpbiBmb3IgYWRkaW5nIG9uIHRvcCB0aGUgc2hhcmVkIGAubmF2LWp1c3RpZmllZGAgc3R5bGVzIGZvciBvdXIgdGFic1xuLm5hdi10YWJzLWp1c3RpZmllZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG5cbiAgPiBsaSA+IGEge1xuICAgIC8vIE92ZXJyaWRlIG1hcmdpbiBmcm9tIC5uYXYtdGFic1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuICB9XG5cbiAgPiAuYWN0aXZlID4gYSxcbiAgPiAuYWN0aXZlID4gYTpob3ZlcixcbiAgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJG5hdi10YWJzLWp1c3RpZmllZC1saW5rLWJvcmRlci1jb2xvcjtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgID4gbGkgPiBhIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbmF2LXRhYnMtanVzdGlmaWVkLWxpbmstYm9yZGVyLWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZSAkYm9yZGVyLXJhZGl1cy1iYXNlIDAgMDtcbiAgICB9XG4gICAgPiAuYWN0aXZlID4gYSxcbiAgICA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuICAgID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJG5hdi10YWJzLWp1c3RpZmllZC1hY3RpdmUtbGluay1ib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuLy8gVGFiYmFibGUgdGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBIaWRlIHRhYmJhYmxlIHBhbmVzIHRvIHN0YXJ0LCBzaG93IHRoZW0gd2hlbiBgLmFjdGl2ZWBcbi50YWItY29udGVudCB7XG4gID4gLnRhYi1wYW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gID4gLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuXG4vLyBEcm9wZG93bnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BlY2lmaWMgZHJvcGRvd25zXG4ubmF2LXRhYnMgLmRyb3Bkb3duLW1lbnUge1xuICAvLyBtYWtlIGRyb3Bkb3duIGJvcmRlciBvdmVybGFwIHRhYiBib3JkZXJcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgLy8gUmVtb3ZlIHRoZSB0b3Agcm91bmRlZCBjb3JuZXJzIGhlcmUgc2luY2UgdGhlcmUgaXMgYSBoYXJkIGVkZ2UgYWJvdmUgdGhlIG1lbnVcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG59XG4iLCIvL1xuLy8gTmF2YmFyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBXcmFwcGVyIGFuZCBiYXNlIGNsYXNzXG4vL1xuLy8gUHJvdmlkZSBhIHN0YXRpYyBuYXZiYXIgZnJvbSB3aGljaCB3ZSBleHBhbmQgdG8gY3JlYXRlIGZ1bGwtd2lkdGgsIGZpeGVkLCBhbmRcbi8vIG90aGVyIG5hdmJhciB2YXJpYXRpb25zLlxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAkbmF2YmFyLWhlaWdodDsgLy8gRW5zdXJlIGEgbmF2YmFyIGFsd2F5cyBzaG93cyAoZS5nLiwgd2l0aG91dCBhIC5uYXZiYXItYnJhbmQgaW4gY29sbGFwc2VkIG1vZGUpXG4gIG1hcmdpbi1ib3R0b206ICRuYXZiYXItbWFyZ2luLWJvdHRvbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgLy8gUHJldmVudCBmbG9hdHMgZnJvbSBicmVha2luZyB0aGUgbmF2YmFyXG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgYm9yZGVyLXJhZGl1czogJG5hdmJhci1ib3JkZXItcmFkaXVzO1xuICB9XG59XG5cblxuLy8gTmF2YmFyIGhlYWRpbmdcbi8vXG4vLyBHcm91cHMgYC5uYXZiYXItYnJhbmRgIGFuZCBgLm5hdmJhci10b2dnbGVgIGludG8gYSBzaW5nbGUgY29tcG9uZW50IGZvciBlYXN5XG4vLyBzdHlsaW5nIG9mIHJlc3BvbnNpdmUgYXNwZWN0cy5cblxuLm5hdmJhci1oZWFkZXIge1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5cblxuLy8gTmF2YmFyIGNvbGxhcHNlIChib2R5KVxuLy9cbi8vIEdyb3VwIHlvdXIgbmF2YmFyIGNvbnRlbnQgaW50byB0aGlzIGZvciBlYXN5IGNvbGxhcHNpbmcgYW5kIGV4cGFuZGluZyBhY3Jvc3Ncbi8vIHZhcmlvdXMgZGV2aWNlIHNpemVzLiBCeSBkZWZhdWx0LCB0aGlzIGNvbnRlbnQgaXMgY29sbGFwc2VkIHdoZW4gPDc2OHB4LCBidXRcbi8vIHdpbGwgZXhwYW5kIHBhc3QgdGhhdCBmb3IgYSBob3Jpem9udGFsIGRpc3BsYXkuXG4vL1xuLy8gVG8gc3RhcnQgKG9uIG1vYmlsZSBkZXZpY2VzKSB0aGUgbmF2YmFyIGxpbmtzLCBmb3JtcywgYW5kIGJ1dHRvbnMgYXJlIHN0YWNrZWRcbi8vIHZlcnRpY2FsbHkgYW5kIGluY2x1ZGUgYSBgbWF4LWhlaWdodGAgdG8gb3ZlcmZsb3cgaW4gY2FzZSB5b3UgaGF2ZSB0b28gbXVjaFxuLy8gY29udGVudCBmb3IgdGhlIHVzZXIncyB2aWV3cG9ydC5cblxuLm5hdmJhci1jb2xsYXBzZSB7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG4gIHBhZGRpbmctcmlnaHQ6ICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBwYWRkaW5nLWxlZnQ6ICAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICYuaW4ge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICYuY29sbGFwc2Uge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7IC8vIE92ZXJyaWRlIGRlZmF1bHQgc2V0dGluZ1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLmluIHtcbiAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLy8gVW5kbyB0aGUgY29sbGFwc2Ugc2lkZSBwYWRkaW5nIGZvciBuYXZiYXJzIHdpdGggY29udGFpbmVycyB0byBlbnN1cmVcbiAgICAvLyBhbGlnbm1lbnQgb2YgcmlnaHQtYWxpZ25lZCBjb250ZW50cy5cbiAgICAubmF2YmFyLWZpeGVkLXRvcCAmLFxuICAgIC5uYXZiYXItc3RhdGljLXRvcCAmLFxuICAgIC5uYXZiYXItZml4ZWQtYm90dG9tICYge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLm5hdmJhci1maXhlZC10b3AsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1heC1oZWlnaHQ6ICRuYXZiYXItY29sbGFwc2UtbWF4LWhlaWdodDtcblxuICAgIEBtZWRpYSAobWF4LWRldmljZS13aWR0aDogJHNjcmVlbi14cy1taW4pIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQm90aCBuYXZiYXIgaGVhZGVyIGFuZCBjb2xsYXBzZVxuLy9cbi8vIFdoZW4gYSBjb250YWluZXIgaXMgcHJlc2VudCwgY2hhbmdlIHRoZSBiZWhhdmlvciBvZiB0aGUgaGVhZGVyIGFuZCBjb2xsYXBzZS5cblxuLmNvbnRhaW5lcixcbi5jb250YWluZXItZmx1aWQge1xuICA+IC5uYXZiYXItaGVhZGVyLFxuICA+IC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1hcmdpbi1yaWdodDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIG1hcmdpbi1sZWZ0OiAgLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAgMDtcbiAgICB9XG4gIH1cbn1cblxuXG4vL1xuLy8gTmF2YmFyIGFsaWdubWVudCBvcHRpb25zXG4vL1xuLy8gRGlzcGxheSB0aGUgbmF2YmFyIGFjcm9zcyB0aGUgZW50aXJldHkgb2YgdGhlIHBhZ2Ugb3IgZml4ZWQgaXQgdG8gdGhlIHRvcCBvclxuLy8gYm90dG9tIG9mIHRoZSBwYWdlLlxuXG4vLyBTdGF0aWMgdG9wICh1bmZpeGVkLCBidXQgMTAwJSB3aWRlKSBuYXZiYXJcbi5uYXZiYXItc3RhdGljLXRvcCB7XG4gIHotaW5kZXg6ICR6aW5kZXgtbmF2YmFyO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbi8vIEZpeCB0aGUgdG9wL2JvdHRvbSBuYXZiYXJzIHdoZW4gc2NyZWVuIHJlYWwgZXN0YXRlIHN1cHBvcnRzIGl0XG4ubmF2YmFyLWZpeGVkLXRvcCxcbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1uYXZiYXItZml4ZWQ7XG5cbiAgLy8gVW5kbyB0aGUgcm91bmRlZCBjb3JuZXJzXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuLm5hdmJhci1maXhlZC10b3Age1xuICB0b3A6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbn1cbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvLyBvdmVycmlkZSAubmF2YmFyIGRlZmF1bHRzXG4gIGJvcmRlci13aWR0aDogMXB4IDAgMDtcbn1cblxuXG4vLyBCcmFuZC9wcm9qZWN0IG5hbWVcblxuLm5hdmJhci1icmFuZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAkbmF2YmFyLXBhZGRpbmctdmVydGljYWwgJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgaGVpZ2h0OiAkbmF2YmFyLWhlaWdodDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICA+IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIC5uYXZiYXIgPiAuY29udGFpbmVyICYsXG4gICAgLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmJhciB0b2dnbGVcbi8vXG4vLyBDdXN0b20gYnV0dG9uIGZvciB0b2dnbGluZyB0aGUgYC5uYXZiYXItY29sbGFwc2VgLCBwb3dlcmVkIGJ5IHRoZSBjb2xsYXBzZVxuLy8gSmF2YVNjcmlwdCBwbHVnaW4uXG5cbi5uYXZiYXItdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIHBhZGRpbmc6IDlweCAxMHB4O1xuICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oMzRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZXNldCB1bnVzdWFsIEZpcmVmb3gtb24tQW5kcm9pZCBkZWZhdWx0IHN0eWxlOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9pc3N1ZXMvMjE0XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4gIC8vIFdlIHJlbW92ZSB0aGUgYG91dGxpbmVgIGhlcmUsIGJ1dCBsYXRlciBjb21wZW5zYXRlIGJ5IGF0dGFjaGluZyBgOmhvdmVyYFxuICAvLyBzdHlsZXMgdG8gYDpmb2N1c2AuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICAvLyBCYXJzXG4gIC5pY29uLWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICB9XG4gIC5pY29uLWJhciArIC5pY29uLWJhciB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLy8gTmF2YmFyIG5hdiBsaW5rc1xuLy9cbi8vIEJ1aWxkcyBvbiB0b3Agb2YgdGhlIGAubmF2YCBjb21wb25lbnRzIHdpdGggaXRzIG93biBtb2RpZmllciBjbGFzcyB0byBtYWtlXG4vLyB0aGUgbmF2IHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgaG9yaXpvbnRhbCBuYXYgKGFib3ZlIDc2OHB4KS5cblxuLm5hdmJhci1uYXYge1xuICBtYXJnaW46ICgkbmF2YmFyLXBhZGRpbmctdmVydGljYWwgLyAyKSAoLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsKTtcblxuICA+IGxpID4gYSB7XG4gICAgcGFkZGluZy10b3A6ICAgIDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heCkge1xuICAgIC8vIERyb3Bkb3ducyBnZXQgY3VzdG9tIGRpc3BsYXkgd2hlbiBjb2xsYXBzZWRcbiAgICAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICA+IGxpID4gYSxcbiAgICAgIC5kcm9wZG93bi1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjVweDtcbiAgICAgIH1cbiAgICAgID4gbGkgPiBhIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFVuY29sbGFwc2UgdGhlIG5hdlxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcblxuICAgID4gbGkge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICA+IGEge1xuICAgICAgICBwYWRkaW5nLXRvcDogICAgJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmJhciBmb3JtXG4vL1xuLy8gRXh0ZW5zaW9uIG9mIHRoZSBgLmZvcm0taW5saW5lYCB3aXRoIHNvbWUgZXh0cmEgZmxhdm9yIGZvciBvcHRpbXVtIGRpc3BsYXkgaW5cbi8vIG91ciBuYXZiYXJzLlxuXG4ubmF2YmFyLWZvcm0ge1xuICBtYXJnaW4tbGVmdDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBtYXJnaW4tcmlnaHQ6IC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgcGFkZGluZzogMTBweCAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICRzaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSksIDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coJHNoYWRvdyk7XG5cbiAgLy8gTWl4aW4gYmVoYXZpb3IgZm9yIG9wdGltdW0gZGlzcGxheVxuICBAaW5jbHVkZSBmb3JtLWlubGluZTtcblxuICAuZm9ybS1ncm91cCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4KSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVmVydGljYWxseSBjZW50ZXIgaW4gZXhwYW5kZWQsIGhvcml6b250YWwgbmF2YmFyXG4gIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigkaW5wdXQtaGVpZ2h0LWJhc2UpO1xuXG4gIC8vIFVuZG8gMTAwJSB3aWR0aCBmb3IgcHVsbCBjbGFzc2VzXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG59XG5cblxuLy8gRHJvcGRvd24gbWVudXNcblxuLy8gTWVudSBwb3NpdGlvbiBhbmQgbWVudSBjYXJldHNcbi5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xufVxuLy8gTWVudSBwb3NpdGlvbiBhbmQgbWVudSBjYXJldCBzdXBwb3J0IGZvciBkcm9wdXBzIHZpYSBleHRyYSBkcm9wdXAgY2xhc3Ncbi5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCRuYXZiYXItYm9yZGVyLXJhZGl1cyk7XG4gIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKDApO1xufVxuXG5cbi8vIEJ1dHRvbnMgaW4gbmF2YmFyc1xuLy9cbi8vIFZlcnRpY2FsbHkgY2VudGVyIGEgYnV0dG9uIHdpdGhpbiBhIG5hdmJhciAod2hlbiAqbm90KiBpbiBhIGZvcm0pLlxuXG4ubmF2YmFyLWJ0biB7XG4gIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigkaW5wdXQtaGVpZ2h0LWJhc2UpO1xuXG4gICYuYnRuLXNtIHtcbiAgICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oJGlucHV0LWhlaWdodC1zbWFsbCk7XG4gIH1cbiAgJi5idG4teHMge1xuICAgIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigyMik7XG4gIH1cbn1cblxuXG4vLyBUZXh0IGluIG5hdmJhcnNcbi8vXG4vLyBBZGQgYSBjbGFzcyB0byBtYWtlIGFueSBlbGVtZW50IHByb3Blcmx5IGFsaWduIGl0c2VsZiB2ZXJ0aWNhbGx5IHdpdGhpbiB0aGUgbmF2YmFycy5cblxuLm5hdmJhci10ZXh0IHtcbiAgQGluY2x1ZGUgbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRsaW5lLWhlaWdodC1jb21wdXRlZCk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gICAgbWFyZ2luLXJpZ2h0OiAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgfVxufVxuXG5cbi8vIENvbXBvbmVudCBhbGlnbm1lbnRcbi8vXG4vLyBSZXB1cnBvc2UgdGhlIHB1bGwgdXRpbGl0aWVzIGFzIHRoZWlyIG93biBuYXZiYXIgdXRpbGl0aWVzIHRvIGF2b2lkIHNwZWNpZmljaXR5XG4vLyBpc3N1ZXMgd2l0aCBwYXJlbnRzIGFuZCBjaGFpbmluZy4gT25seSBkbyB0aGlzIHdoZW4gdGhlIG5hdmJhciBpcyB1bmNvbGxhcHNlZFxuLy8gdGhvdWdoIHNvIHRoYXQgbmF2YmFyIGNvbnRlbnRzIHByb3Blcmx5IHN0YWNrIGFuZCBhbGlnbiBpbiBtb2JpbGUuXG4vL1xuLy8gRGVjbGFyZWQgYWZ0ZXIgdGhlIG5hdmJhciBjb21wb25lbnRzIHRvIGVuc3VyZSBtb3JlIHNwZWNpZmljaXR5IG9uIHRoZSBtYXJnaW5zLlxuXG5AbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAubmF2YmFyLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuXG4gICAgfiAubmF2YmFyLXJpZ2h0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBBbHRlcm5hdGUgbmF2YmFyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRGVmYXVsdCBuYXZiYXJcbi5uYXZiYXItZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1iZztcbiAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYm9yZGVyO1xuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItYmc7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci10ZXh0IHtcbiAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWNvbG9yO1xuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgID4gbGkgPiBhIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWJnO1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5hY3RpdmUgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAuZGlzYWJsZWQgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtYmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ib3JkZXItY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC10b2dnbGUtaG92ZXItYmc7XG4gICAgfVxuICAgIC5pY29uLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWljb24tYmFyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2UsXG4gIC5uYXZiYXItZm9ybSB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYm9yZGVyO1xuICB9XG5cbiAgLy8gRHJvcGRvd24gbWVudSBpdGVtc1xuICAubmF2YmFyLW5hdiB7XG4gICAgLy8gUmVtb3ZlIGJhY2tncm91bmQgY29sb3IgZnJvbSBvcGVuIGRyb3Bkb3duXG4gICAgPiAub3BlbiA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWJnO1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heCkge1xuICAgICAgLy8gRHJvcGRvd25zIGdldCBjdXN0b20gZGlzcGxheSB3aGVuIGNvbGxhcHNlZFxuICAgICAgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICA+IGxpID4gYSB7XG4gICAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPiAuYWN0aXZlID4gYSB7XG4gICAgICAgICAgJixcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPiAuZGlzYWJsZWQgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8vIExpbmtzIGluIG5hdmJhcnNcbiAgLy9cbiAgLy8gQWRkIGEgY2xhc3MgdG8gZW5zdXJlIGxpbmtzIG91dHNpZGUgdGhlIG5hdmJhciBuYXYgYXJlIGNvbG9yZWQgY29ycmVjdGx5LlxuXG4gIC5uYXZiYXItbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgfVxuICAgICZbZGlzYWJsZWRdLFxuICAgIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBJbnZlcnNlIG5hdmJhclxuXG4ubmF2YmFyLWludmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYmc7XG4gIGJvcmRlci1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJvcmRlcjtcblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItdGV4dCB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1jb2xvcjtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICA+IGxpID4gYSB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAuYWN0aXZlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc7XG4gICAgICB9XG4gICAgfVxuICAgID4gLmRpc2FibGVkID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWJnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERhcmtlbiB0aGUgcmVzcG9uc2l2ZSBuYXYgdG9nZ2xlXG4gIC5uYXZiYXItdG9nZ2xlIHtcbiAgICBib3JkZXItY29sb3I6ICRuYXZiYXItaW52ZXJzZS10b2dnbGUtYm9yZGVyLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtdG9nZ2xlLWhvdmVyLWJnO1xuICAgIH1cbiAgICAuaWNvbi1iYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1pY29uLWJhci1iZztcbiAgICB9XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlLFxuICAubmF2YmFyLWZvcm0ge1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRuYXZiYXItaW52ZXJzZS1iZywgNyUpO1xuICB9XG5cbiAgLy8gRHJvcGRvd25zXG4gIC5uYXZiYXItbmF2IHtcbiAgICA+IC5vcGVuID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4KSB7XG4gICAgICAvLyBEcm9wZG93bnMgZ2V0IGN1c3RvbSBkaXNwbGF5XG4gICAgICAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgID4gLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYm9yZGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYm9yZGVyO1xuICAgICAgICB9XG4gICAgICAgID4gbGkgPiBhIHtcbiAgICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I7XG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IC5hY3RpdmUgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IC5kaXNhYmxlZCA+IGEge1xuICAgICAgICAgICYsXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I7XG4gICAgfVxuICAgICZbZGlzYWJsZWRdLFxuICAgIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIFR5cG9ncmFwaHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gSGVhZGluZ3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xuICBmb250LWZhbWlseTogJGhlYWRpbmdzLWZvbnQtZmFtaWx5O1xuICBmb250LXdlaWdodDogJGhlYWRpbmdzLWZvbnQtd2VpZ2h0O1xuICBsaW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0O1xuICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1zbWFsbC1jb2xvcjtcbiAgfVxufVxuXG5oMSwgLmgxLFxuaDIsIC5oMixcbmgzLCAuaDMge1xuICBtYXJnaW4tdG9wOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIG1hcmdpbi1ib3R0b206ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcblxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDY1JTtcbiAgfVxufVxuaDQsIC5oNCxcbmg1LCAuaDUsXG5oNiwgLmg2IHtcbiAgbWFyZ2luLXRvcDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG5cbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gIH1cbn1cblxuaDEsIC5oMSB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTsgfVxuaDIsIC5oMiB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMjsgfVxuaDMsIC5oMyB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMzsgfVxuaDQsIC5oNCB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNDsgfVxuaDUsIC5oNSB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNTsgfVxuaDYsIC5oNiB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNjsgfVxuXG5cbi8vIEJvZHkgdGV4dFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5wIHtcbiAgbWFyZ2luOiAwIDAgKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xufVxuXG4ubGVhZCB7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgZm9udC1zaXplOiBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4xNSkpO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNSk7XG4gIH1cbn1cblxuXG4vLyBFbXBoYXNpcyAmIG1pc2Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRXg6ICgxMnB4IHNtYWxsIGZvbnQgLyAxNHB4IGJhc2UgZm9udCkgKiAxMDAlID0gYWJvdXQgODUlXG5zbWFsbCxcbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogZmxvb3IoKDEwMCUgKiAkZm9udC1zaXplLXNtYWxsIC8gJGZvbnQtc2l6ZS1iYXNlKSk7XG59XG5cbm1hcmssXG4ubWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzdGF0ZS13YXJuaW5nLWJnO1xuICBwYWRkaW5nOiAuMmVtO1xufVxuXG4vLyBBbGlnbm1lbnRcbi50ZXh0LWxlZnQgICAgICAgICAgIHsgdGV4dC1hbGlnbjogbGVmdDsgfVxuLnRleHQtcmlnaHQgICAgICAgICAgeyB0ZXh0LWFsaWduOiByaWdodDsgfVxuLnRleHQtY2VudGVyICAgICAgICAgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbi50ZXh0LWp1c3RpZnkgICAgICAgIHsgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxuLnRleHQtbm93cmFwICAgICAgICAgeyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi8vIFRyYW5zZm9ybWF0aW9uXG4udGV4dC1sb3dlcmNhc2UgICAgICB7IHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cbi50ZXh0LXVwcGVyY2FzZSAgICAgIHsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuLnRleHQtY2FwaXRhbGl6ZSAgICAgeyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuXG4vLyBDb250ZXh0dWFsIGNvbG9yc1xuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogJHRleHQtbXV0ZWQ7XG59XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtcHJpbWFyeScsICRicmFuZC1wcmltYXJ5KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1zdWNjZXNzJywgJHN0YXRlLXN1Y2Nlc3MtdGV4dCk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtaW5mbycsICRzdGF0ZS1pbmZvLXRleHQpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LXdhcm5pbmcnLCAkc3RhdGUtd2FybmluZy10ZXh0KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1kYW5nZXInLCAkc3RhdGUtZGFuZ2VyLXRleHQpO1xuXG4vLyBDb250ZXh0dWFsIGJhY2tncm91bmRzXG4vLyBGb3Igbm93IHdlJ2xsIGxlYXZlIHRoZXNlIGFsb25nc2lkZSB0aGUgdGV4dCBjbGFzc2VzIHVudGlsIHY0IHdoZW4gd2UgY2FuXG4vLyBzYWZlbHkgc2hpZnQgdGhpbmdzIGFyb3VuZCAocGVyIFNlbVZlciBydWxlcykuXG4uYmctcHJpbWFyeSB7XG4gIC8vIEdpdmVuIHRoZSBjb250cmFzdCBoZXJlLCB0aGlzIGlzIHRoZSBvbmx5IGNsYXNzIHRvIGhhdmUgaXRzIGNvbG9yIGludmVydGVkXG4gIC8vIGF1dG9tYXRpY2FsbHkuXG4gIGNvbG9yOiAjZmZmO1xufVxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLXByaW1hcnknLCAkYnJhbmQtcHJpbWFyeSk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1zdWNjZXNzJywgJHN0YXRlLXN1Y2Nlc3MtYmcpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctaW5mbycsICRzdGF0ZS1pbmZvLWJnKTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLXdhcm5pbmcnLCAkc3RhdGUtd2FybmluZy1iZyk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1kYW5nZXInLCAkc3RhdGUtZGFuZ2VyLWJnKTtcblxuXG4vLyBQYWdlIGhlYWRlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogKCgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKSAtIDEpO1xuICBtYXJnaW46ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKiAyKSAwICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwYWdlLWhlYWRlci1ib3JkZXItY29sb3I7XG59XG5cblxuLy8gTGlzdHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVW5vcmRlcmVkIGFuZCBPcmRlcmVkIGxpc3RzXG51bCxcbm9sIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuICB1bCxcbiAgb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLy8gTGlzdCBvcHRpb25zXG5cbi8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBmcm9tIGAubGlzdC11bnN0eWxlZGAgZm9yIGxpYnNhc3MgY29tcGF0aWJpbGl0eVxuQG1peGluIGxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYXMgYEBtaXhpbiBsaXN0LXVuc3R5bGVkYCBmb3IgbGlic2FzcyBjb21wYXRpYmlsaXR5XG4ubGlzdC11bnN0eWxlZCB7XG4gIEBpbmNsdWRlIGxpc3QtdW5zdHlsZWQ7XG59XG5cblxuLy8gSW5saW5lIHR1cm5zIGxpc3QgaXRlbXMgaW50byBpbmxpbmUtYmxvY2tcbi5saXN0LWlubGluZSB7XG4gIEBpbmNsdWRlIGxpc3QtdW5zdHlsZWQ7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuXG4gID4gbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbn1cblxuLy8gRGVzY3JpcHRpb24gTGlzdHNcbmRsIHtcbiAgbWFyZ2luLXRvcDogMDsgLy8gUmVtb3ZlIGJyb3dzZXIgZGVmYXVsdFxuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG59XG5kdCxcbmRkIHtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xufVxuZHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7IC8vIFVuZG8gYnJvd3NlciBkZWZhdWx0XG59XG5cbi8vIEhvcml6b250YWwgZGVzY3JpcHRpb24gbGlzdHNcbi8vXG4vLyBEZWZhdWx0cyB0byBiZWluZyBzdGFja2VkIHdpdGhvdXQgYW55IG9mIHRoZSBiZWxvdyBzdHlsZXMgYXBwbGllZCwgdW50aWwgdGhlXG4vLyBncmlkIGJyZWFrcG9pbnQgaXMgcmVhY2hlZCAoZGVmYXVsdCBvZiB+NzY4cHgpLlxuXG4uZGwtaG9yaXpvbnRhbCB7XG4gIGRkIHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeDsgLy8gQ2xlYXIgdGhlIGZsb2F0ZWQgYGR0YCBpZiBhbiBlbXB0eSBgZGRgIGlzIHByZXNlbnRcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZGwtaG9yaXpvbnRhbC1icmVha3BvaW50KSB7XG4gICAgZHQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogKCRkbC1ob3Jpem9udGFsLW9mZnNldCAtIDIwKTtcbiAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93O1xuICAgIH1cbiAgICBkZCB7XG4gICAgICBtYXJnaW4tbGVmdDogJGRsLWhvcml6b250YWwtb2Zmc2V0O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE1pc2Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQWJicmV2aWF0aW9ucyBhbmQgYWNyb255bXNcbmFiYnJbdGl0bGVdLFxuLy8gQWRkIGRhdGEtKiBhdHRyaWJ1dGUgdG8gaGVscCBvdXQgb3VyIHRvb2x0aXAgcGx1Z2luLCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy81MjU3XG5hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICRhYmJyLWJvcmRlci1jb2xvcjtcbn1cbi5pbml0aWFsaXNtIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIEBleHRlbmQgLnRleHQtdXBwZXJjYXNlO1xufVxuXG4vLyBCbG9ja3F1b3Rlc1xuYmxvY2txdW90ZSB7XG4gIHBhZGRpbmc6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKSAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIG1hcmdpbjogMCAwICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgZm9udC1zaXplOiAkYmxvY2txdW90ZS1mb250LXNpemU7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJsb2NrcXVvdGUtYm9yZGVyLWNvbG9yO1xuXG4gIHAsXG4gIHVsLFxuICBvbCB7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gTm90ZTogRGVwcmVjYXRlZCBzbWFsbCBhbmQgLnNtYWxsIGFzIG9mIHYzLjEuMFxuICAvLyBDb250ZXh0OiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjYwXG4gIGZvb3RlcixcbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiA4MCU7IC8vIGJhY2sgdG8gZGVmYXVsdCBmb250LXNpemVcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gICAgY29sb3I6ICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcMjAxNCBcXDAwQTAnOyAvLyBlbSBkYXNoLCBuYnNwXG4gICAgfVxuICB9XG59XG5cbi8vIE9wcG9zaXRlIGFsaWdubWVudCBvZiBibG9ja3F1b3RlXG4vL1xuLy8gSGVhZHMgdXA6IGBibG9ja3F1b3RlLnB1bGwtcmlnaHRgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMS4wLlxuLmJsb2NrcXVvdGUtcmV2ZXJzZSxcbmJsb2NrcXVvdGUucHVsbC1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgJGJsb2NrcXVvdGUtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgLy8gQWNjb3VudCBmb3IgY2l0YXRpb25cbiAgZm9vdGVyLFxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICAmOmJlZm9yZSB7IGNvbnRlbnQ6ICcnOyB9XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnXFwwMEEwIFxcMjAxNCc7IC8vIG5ic3AsIGVtIGRhc2hcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkcmVzc2VzXG5hZGRyZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbn1cbiIsIi8vXG4vLyBUb29sdGlwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogJHppbmRleC10b29sdGlwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLy8gT3VyIHBhcmVudCBlbGVtZW50IGNhbiBiZSBhcmJpdHJhcnkgc2luY2UgdG9vbHRpcHMgYXJlIGJ5IGRlZmF1bHQgaW5zZXJ0ZWQgYXMgYSBzaWJsaW5nIG9mIHRoZWlyIHRhcmdldCBlbGVtZW50LlxuICAvLyBTbyByZXNldCBvdXIgZm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzIHRvIGF2b2lkIGluaGVyaXRpbmcgd2VpcmQgdmFsdWVzLlxuICBAaW5jbHVkZSByZXNldC10ZXh0O1xuICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG5cbiAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcblxuICAmLmluICAgICB7IEBpbmNsdWRlIG9wYWNpdHkoJHRvb2x0aXAtb3BhY2l0eSk7IH1cbiAgJi50b3AgICAgeyBtYXJnaW4tdG9wOiAgLTNweDsgcGFkZGluZzogJHRvb2x0aXAtYXJyb3ctd2lkdGggMDsgfVxuICAmLnJpZ2h0ICB7IG1hcmdpbi1sZWZ0OiAgM3B4OyBwYWRkaW5nOiAwICR0b29sdGlwLWFycm93LXdpZHRoOyB9XG4gICYuYm90dG9tIHsgbWFyZ2luLXRvcDogICAzcHg7IHBhZGRpbmc6ICR0b29sdGlwLWFycm93LXdpZHRoIDA7IH1cbiAgJi5sZWZ0ICAgeyBtYXJnaW4tbGVmdDogLTNweDsgcGFkZGluZzogMCAkdG9vbHRpcC1hcnJvdy13aWR0aDsgfVxufVxuXG4vLyBXcmFwcGVyIGZvciB0aGUgdG9vbHRpcCBjb250ZW50XG4udG9vbHRpcC1pbm5lciB7XG4gIG1heC13aWR0aDogJHRvb2x0aXAtbWF4LXdpZHRoO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBjb2xvcjogJHRvb2x0aXAtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRvb2x0aXAtYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG59XG5cbi8vIEFycm93c1xuLnRvb2x0aXAtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4vLyBOb3RlOiBEZXByZWNhdGVkIC50b3AtbGVmdCwgLnRvcC1yaWdodCwgLmJvdHRvbS1sZWZ0LCBhbmQgLmJvdHRvbS1yaWdodCBhcyBvZiB2My4zLjFcbi50b29sdGlwIHtcbiAgJi50b3AgLnRvb2x0aXAtYXJyb3cge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi50b3AtbGVmdCAudG9vbHRpcC1hcnJvdyB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBtYXJnaW4tYm90dG9tOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYudG9wLXJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLWJvdHRvbTogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLnJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLmxlZnQgLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoIDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYuYm90dG9tIC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYuYm90dG9tLWxlZnQgLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogMCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLmJvdHRvbS1yaWdodCAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6ICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbn1cbiIsIi8vXG4vLyBVdGlsaXR5IGNsYXNzZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gRmxvYXRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5jbGVhcmZpeCB7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuLmNlbnRlci1ibG9jayB7XG4gIEBpbmNsdWRlIGNlbnRlci1ibG9jaztcbn1cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4ucHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuXG4vLyBUb2dnbGluZyBjb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE5vdGU6IERlcHJlY2F0ZWQgLmhpZGUgaW4gZmF2b3Igb2YgLmhpZGRlbiBvciAuc3Itb25seSAoYXMgYXBwcm9wcmlhdGUpIGluIHYzLjAuMVxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnRleHQtaGlkZSB7XG4gIEBpbmNsdWRlIHRleHQtaGlkZTtcbn1cblxuXG4vLyBIaWRlIGZyb20gc2NyZWVucmVhZGVycyBhbmQgYnJvd3NlcnNcbi8vXG4vLyBDcmVkaXQ6IEhUTUw1IEJvaWxlcnBsYXRlXG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gRm9yIEFmZml4IHBsdWdpblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYWZmaXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFpQ1FBLEFBQUEsSUFBSSxDQUFDO0VBQ0gsT0FBTyxFQUFFLFlBQVk7RUFDckIsYUFBYSxFQUFFLENBQUM7RUFDaEIsV0FBVyxFRDBJb0IsTUFBTTtFQ3pJckMsVUFBVSxFQUFFLE1BQU07RUFDbEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsWUFBWSxFQUFFLFlBQVk7RUFDMUIsTUFBTSxFQUFFLE9BQU87RUFDZixnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCLE1BQU0sRUFBRSxxQkFBcUI7RUFDN0IsV0FBVyxFQUFFLE1BQU07RWpCMENuQixPQUFPLEVnQmtDbUIsR0FBRyxDQUNILElBQUk7RWhCbEM5QixTQUFTLEVnQlZlLElBQUk7RWhCVzVCLFdBQVcsRWdCQ2EsT0FBVztFaEJBbkMsYUFBYSxFZ0I4Q2EsR0FBRztFbEI0RzdCLG1CQUFtQixFbUJyTUUsSUFBSTtFbkJzTXRCLGdCQUFnQixFbUJ0TUUsSUFBSTtFbkJ1TXJCLGVBQWUsRW1Cdk1FLElBQUk7RW5Cd01qQixXQUFXLEVtQnhNRSxJQUFJLEdBa0MxQjtFQTlDRCxBQWlCSSxJQWpCQSxB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U0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxDQUFqaEI7RUFDUCxRQUFRLEVBQUUsUUFBUTtFQUVsQixVQUFVLEVBQUUsR0FBRztFQUVmLFlBQVksRUFBRyxJQUE4QjtFQUM3QyxhQUFhLEVBQUUsSUFBK0IsR0FDL0M7O0FBU0QsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVB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 */", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(18);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(23)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!../resolve-url-loader/index.js!../sass-loader/lib/loader.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"extractStyles\":false,\"styleLoaders\":[\"style-loader\",\"css-loader\",\"sass-loader\"],\"styles\":[\"buttons\",\"button-groups\",\"forms\",\"grid\",\"mixins\",\"navs\",\"navbar\",\"type\",\"tooltip\",\"utilities\"],\"scripts\":[\"modal\",\"collapse\"],\"configFilePath\":\"/Users/danielsousa/Desktop/fcc/twitch/.bootstraprc\",\"bootstrapPath\":\"/Users/danielsousa/Desktop/fcc/twitch/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!../babel-loader/lib/index.js!../babel-loader/lib/index.js!./no-op.js", function() {
			var newContent = require("!!../css-loader/index.js!../resolve-url-loader/index.js!../sass-loader/lib/loader.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"extractStyles\":false,\"styleLoaders\":[\"style-loader\",\"css-loader\",\"sass-loader\"],\"styles\":[\"buttons\",\"button-groups\",\"forms\",\"grid\",\"mixins\",\"navs\",\"navbar\",\"type\",\"tooltip\",\"utilities\"],\"scripts\":[\"modal\",\"collapse\"],\"configFilePath\":\"/Users/danielsousa/Desktop/fcc/twitch/.bootstraprc\",\"bootstrapPath\":\"/Users/danielsousa/Desktop/fcc/twitch/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!../babel-loader/lib/index.js!../babel-loader/lib/index.js!./no-op.js");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
],[8]);