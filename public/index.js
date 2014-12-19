(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';


module.exports = require('./lib/');

},{"./lib/":15}],2:[function(require,module,exports){
// List of valid entities
//
// Generate with ./support/entities.js script
//
'use strict';

/*eslint quotes:0*/
module.exports = {
  "Aacute":"\u00C1",
  "aacute":"\u00E1",
  "Abreve":"\u0102",
  "abreve":"\u0103",
  "ac":"\u223E",
  "acd":"\u223F",
  "acE":"\u223E\u0333",
  "Acirc":"\u00C2",
  "acirc":"\u00E2",
  "acute":"\u00B4",
  "Acy":"\u0410",
  "acy":"\u0430",
  "AElig":"\u00C6",
  "aelig":"\u00E6",
  "af":"\u2061",
  "Afr":"\uD835\uDD04",
  "afr":"\uD835\uDD1E",
  "Agrave":"\u00C0",
  "agrave":"\u00E0",
  "alefsym":"\u2135",
  "aleph":"\u2135",
  "Alpha":"\u0391",
  "alpha":"\u03B1",
  "Amacr":"\u0100",
  "amacr":"\u0101",
  "amalg":"\u2A3F",
  "AMP":"\u0026",
  "amp":"\u0026",
  "And":"\u2A53",
  "and":"\u2227",
  "andand":"\u2A55",
  "andd":"\u2A5C",
  "andslope":"\u2A58",
  "andv":"\u2A5A",
  "ang":"\u2220",
  "ange":"\u29A4",
  "angle":"\u2220",
  "angmsd":"\u2221",
  "angmsdaa":"\u29A8",
  "angmsdab":"\u29A9",
  "angmsdac":"\u29AA",
  "angmsdad":"\u29AB",
  "angmsdae":"\u29AC",
  "angmsdaf":"\u29AD",
  "angmsdag":"\u29AE",
  "angmsdah":"\u29AF",
  "angrt":"\u221F",
  "angrtvb":"\u22BE",
  "angrtvbd":"\u299D",
  "angsph":"\u2222",
  "angst":"\u00C5",
  "angzarr":"\u237C",
  "Aogon":"\u0104",
  "aogon":"\u0105",
  "Aopf":"\uD835\uDD38",
  "aopf":"\uD835\uDD52",
  "ap":"\u2248",
  "apacir":"\u2A6F",
  "apE":"\u2A70",
  "ape":"\u224A",
  "apid":"\u224B",
  "apos":"\u0027",
  "ApplyFunction":"\u2061",
  "approx":"\u2248",
  "approxeq":"\u224A",
  "Aring":"\u00C5",
  "aring":"\u00E5",
  "Ascr":"\uD835\uDC9C",
  "ascr":"\uD835\uDCB6",
  "Assign":"\u2254",
  "ast":"\u002A",
  "asymp":"\u2248",
  "asympeq":"\u224D",
  "Atilde":"\u00C3",
  "atilde":"\u00E3",
  "Auml":"\u00C4",
  "auml":"\u00E4",
  "awconint":"\u2233",
  "awint":"\u2A11",
  "backcong":"\u224C",
  "backepsilon":"\u03F6",
  "backprime":"\u2035",
  "backsim":"\u223D",
  "backsimeq":"\u22CD",
  "Backslash":"\u2216",
  "Barv":"\u2AE7",
  "barvee":"\u22BD",
  "Barwed":"\u2306",
  "barwed":"\u2305",
  "barwedge":"\u2305",
  "bbrk":"\u23B5",
  "bbrktbrk":"\u23B6",
  "bcong":"\u224C",
  "Bcy":"\u0411",
  "bcy":"\u0431",
  "bdquo":"\u201E",
  "becaus":"\u2235",
  "Because":"\u2235",
  "because":"\u2235",
  "bemptyv":"\u29B0",
  "bepsi":"\u03F6",
  "bernou":"\u212C",
  "Bernoullis":"\u212C",
  "Beta":"\u0392",
  "beta":"\u03B2",
  "beth":"\u2136",
  "between":"\u226C",
  "Bfr":"\uD835\uDD05",
  "bfr":"\uD835\uDD1F",
  "bigcap":"\u22C2",
  "bigcirc":"\u25EF",
  "bigcup":"\u22C3",
  "bigodot":"\u2A00",
  "bigoplus":"\u2A01",
  "bigotimes":"\u2A02",
  "bigsqcup":"\u2A06",
  "bigstar":"\u2605",
  "bigtriangledown":"\u25BD",
  "bigtriangleup":"\u25B3",
  "biguplus":"\u2A04",
  "bigvee":"\u22C1",
  "bigwedge":"\u22C0",
  "bkarow":"\u290D",
  "blacklozenge":"\u29EB",
  "blacksquare":"\u25AA",
  "blacktriangle":"\u25B4",
  "blacktriangledown":"\u25BE",
  "blacktriangleleft":"\u25C2",
  "blacktriangleright":"\u25B8",
  "blank":"\u2423",
  "blk12":"\u2592",
  "blk14":"\u2591",
  "blk34":"\u2593",
  "block":"\u2588",
  "bne":"\u003D\u20E5",
  "bnequiv":"\u2261\u20E5",
  "bNot":"\u2AED",
  "bnot":"\u2310",
  "Bopf":"\uD835\uDD39",
  "bopf":"\uD835\uDD53",
  "bot":"\u22A5",
  "bottom":"\u22A5",
  "bowtie":"\u22C8",
  "boxbox":"\u29C9",
  "boxDL":"\u2557",
  "boxDl":"\u2556",
  "boxdL":"\u2555",
  "boxdl":"\u2510",
  "boxDR":"\u2554",
  "boxDr":"\u2553",
  "boxdR":"\u2552",
  "boxdr":"\u250C",
  "boxH":"\u2550",
  "boxh":"\u2500",
  "boxHD":"\u2566",
  "boxHd":"\u2564",
  "boxhD":"\u2565",
  "boxhd":"\u252C",
  "boxHU":"\u2569",
  "boxHu":"\u2567",
  "boxhU":"\u2568",
  "boxhu":"\u2534",
  "boxminus":"\u229F",
  "boxplus":"\u229E",
  "boxtimes":"\u22A0",
  "boxUL":"\u255D",
  "boxUl":"\u255C",
  "boxuL":"\u255B",
  "boxul":"\u2518",
  "boxUR":"\u255A",
  "boxUr":"\u2559",
  "boxuR":"\u2558",
  "boxur":"\u2514",
  "boxV":"\u2551",
  "boxv":"\u2502",
  "boxVH":"\u256C",
  "boxVh":"\u256B",
  "boxvH":"\u256A",
  "boxvh":"\u253C",
  "boxVL":"\u2563",
  "boxVl":"\u2562",
  "boxvL":"\u2561",
  "boxvl":"\u2524",
  "boxVR":"\u2560",
  "boxVr":"\u255F",
  "boxvR":"\u255E",
  "boxvr":"\u251C",
  "bprime":"\u2035",
  "Breve":"\u02D8",
  "breve":"\u02D8",
  "brvbar":"\u00A6",
  "Bscr":"\u212C",
  "bscr":"\uD835\uDCB7",
  "bsemi":"\u204F",
  "bsim":"\u223D",
  "bsime":"\u22CD",
  "bsol":"\u005C",
  "bsolb":"\u29C5",
  "bsolhsub":"\u27C8",
  "bull":"\u2022",
  "bullet":"\u2022",
  "bump":"\u224E",
  "bumpE":"\u2AAE",
  "bumpe":"\u224F",
  "Bumpeq":"\u224E",
  "bumpeq":"\u224F",
  "Cacute":"\u0106",
  "cacute":"\u0107",
  "Cap":"\u22D2",
  "cap":"\u2229",
  "capand":"\u2A44",
  "capbrcup":"\u2A49",
  "capcap":"\u2A4B",
  "capcup":"\u2A47",
  "capdot":"\u2A40",
  "CapitalDifferentialD":"\u2145",
  "caps":"\u2229\uFE00",
  "caret":"\u2041",
  "caron":"\u02C7",
  "Cayleys":"\u212D",
  "ccaps":"\u2A4D",
  "Ccaron":"\u010C",
  "ccaron":"\u010D",
  "Ccedil":"\u00C7",
  "ccedil":"\u00E7",
  "Ccirc":"\u0108",
  "ccirc":"\u0109",
  "Cconint":"\u2230",
  "ccups":"\u2A4C",
  "ccupssm":"\u2A50",
  "Cdot":"\u010A",
  "cdot":"\u010B",
  "cedil":"\u00B8",
  "Cedilla":"\u00B8",
  "cemptyv":"\u29B2",
  "cent":"\u00A2",
  "CenterDot":"\u00B7",
  "centerdot":"\u00B7",
  "Cfr":"\u212D",
  "cfr":"\uD835\uDD20",
  "CHcy":"\u0427",
  "chcy":"\u0447",
  "check":"\u2713",
  "checkmark":"\u2713",
  "Chi":"\u03A7",
  "chi":"\u03C7",
  "cir":"\u25CB",
  "circ":"\u02C6",
  "circeq":"\u2257",
  "circlearrowleft":"\u21BA",
  "circlearrowright":"\u21BB",
  "circledast":"\u229B",
  "circledcirc":"\u229A",
  "circleddash":"\u229D",
  "CircleDot":"\u2299",
  "circledR":"\u00AE",
  "circledS":"\u24C8",
  "CircleMinus":"\u2296",
  "CirclePlus":"\u2295",
  "CircleTimes":"\u2297",
  "cirE":"\u29C3",
  "cire":"\u2257",
  "cirfnint":"\u2A10",
  "cirmid":"\u2AEF",
  "cirscir":"\u29C2",
  "ClockwiseContourIntegral":"\u2232",
  "CloseCurlyDoubleQuote":"\u201D",
  "CloseCurlyQuote":"\u2019",
  "clubs":"\u2663",
  "clubsuit":"\u2663",
  "Colon":"\u2237",
  "colon":"\u003A",
  "Colone":"\u2A74",
  "colone":"\u2254",
  "coloneq":"\u2254",
  "comma":"\u002C",
  "commat":"\u0040",
  "comp":"\u2201",
  "compfn":"\u2218",
  "complement":"\u2201",
  "complexes":"\u2102",
  "cong":"\u2245",
  "congdot":"\u2A6D",
  "Congruent":"\u2261",
  "Conint":"\u222F",
  "conint":"\u222E",
  "ContourIntegral":"\u222E",
  "Copf":"\u2102",
  "copf":"\uD835\uDD54",
  "coprod":"\u2210",
  "Coproduct":"\u2210",
  "COPY":"\u00A9",
  "copy":"\u00A9",
  "copysr":"\u2117",
  "CounterClockwiseContourIntegral":"\u2233",
  "crarr":"\u21B5",
  "Cross":"\u2A2F",
  "cross":"\u2717",
  "Cscr":"\uD835\uDC9E",
  "cscr":"\uD835\uDCB8",
  "csub":"\u2ACF",
  "csube":"\u2AD1",
  "csup":"\u2AD0",
  "csupe":"\u2AD2",
  "ctdot":"\u22EF",
  "cudarrl":"\u2938",
  "cudarrr":"\u2935",
  "cuepr":"\u22DE",
  "cuesc":"\u22DF",
  "cularr":"\u21B6",
  "cularrp":"\u293D",
  "Cup":"\u22D3",
  "cup":"\u222A",
  "cupbrcap":"\u2A48",
  "CupCap":"\u224D",
  "cupcap":"\u2A46",
  "cupcup":"\u2A4A",
  "cupdot":"\u228D",
  "cupor":"\u2A45",
  "cups":"\u222A\uFE00",
  "curarr":"\u21B7",
  "curarrm":"\u293C",
  "curlyeqprec":"\u22DE",
  "curlyeqsucc":"\u22DF",
  "curlyvee":"\u22CE",
  "curlywedge":"\u22CF",
  "curren":"\u00A4",
  "curvearrowleft":"\u21B6",
  "curvearrowright":"\u21B7",
  "cuvee":"\u22CE",
  "cuwed":"\u22CF",
  "cwconint":"\u2232",
  "cwint":"\u2231",
  "cylcty":"\u232D",
  "Dagger":"\u2021",
  "dagger":"\u2020",
  "daleth":"\u2138",
  "Darr":"\u21A1",
  "dArr":"\u21D3",
  "darr":"\u2193",
  "dash":"\u2010",
  "Dashv":"\u2AE4",
  "dashv":"\u22A3",
  "dbkarow":"\u290F",
  "dblac":"\u02DD",
  "Dcaron":"\u010E",
  "dcaron":"\u010F",
  "Dcy":"\u0414",
  "dcy":"\u0434",
  "DD":"\u2145",
  "dd":"\u2146",
  "ddagger":"\u2021",
  "ddarr":"\u21CA",
  "DDotrahd":"\u2911",
  "ddotseq":"\u2A77",
  "deg":"\u00B0",
  "Del":"\u2207",
  "Delta":"\u0394",
  "delta":"\u03B4",
  "demptyv":"\u29B1",
  "dfisht":"\u297F",
  "Dfr":"\uD835\uDD07",
  "dfr":"\uD835\uDD21",
  "dHar":"\u2965",
  "dharl":"\u21C3",
  "dharr":"\u21C2",
  "DiacriticalAcute":"\u00B4",
  "DiacriticalDot":"\u02D9",
  "DiacriticalDoubleAcute":"\u02DD",
  "DiacriticalGrave":"\u0060",
  "DiacriticalTilde":"\u02DC",
  "diam":"\u22C4",
  "Diamond":"\u22C4",
  "diamond":"\u22C4",
  "diamondsuit":"\u2666",
  "diams":"\u2666",
  "die":"\u00A8",
  "DifferentialD":"\u2146",
  "digamma":"\u03DD",
  "disin":"\u22F2",
  "div":"\u00F7",
  "divide":"\u00F7",
  "divideontimes":"\u22C7",
  "divonx":"\u22C7",
  "DJcy":"\u0402",
  "djcy":"\u0452",
  "dlcorn":"\u231E",
  "dlcrop":"\u230D",
  "dollar":"\u0024",
  "Dopf":"\uD835\uDD3B",
  "dopf":"\uD835\uDD55",
  "Dot":"\u00A8",
  "dot":"\u02D9",
  "DotDot":"\u20DC",
  "doteq":"\u2250",
  "doteqdot":"\u2251",
  "DotEqual":"\u2250",
  "dotminus":"\u2238",
  "dotplus":"\u2214",
  "dotsquare":"\u22A1",
  "doublebarwedge":"\u2306",
  "DoubleContourIntegral":"\u222F",
  "DoubleDot":"\u00A8",
  "DoubleDownArrow":"\u21D3",
  "DoubleLeftArrow":"\u21D0",
  "DoubleLeftRightArrow":"\u21D4",
  "DoubleLeftTee":"\u2AE4",
  "DoubleLongLeftArrow":"\u27F8",
  "DoubleLongLeftRightArrow":"\u27FA",
  "DoubleLongRightArrow":"\u27F9",
  "DoubleRightArrow":"\u21D2",
  "DoubleRightTee":"\u22A8",
  "DoubleUpArrow":"\u21D1",
  "DoubleUpDownArrow":"\u21D5",
  "DoubleVerticalBar":"\u2225",
  "DownArrow":"\u2193",
  "Downarrow":"\u21D3",
  "downarrow":"\u2193",
  "DownArrowBar":"\u2913",
  "DownArrowUpArrow":"\u21F5",
  "DownBreve":"\u0311",
  "downdownarrows":"\u21CA",
  "downharpoonleft":"\u21C3",
  "downharpoonright":"\u21C2",
  "DownLeftRightVector":"\u2950",
  "DownLeftTeeVector":"\u295E",
  "DownLeftVector":"\u21BD",
  "DownLeftVectorBar":"\u2956",
  "DownRightTeeVector":"\u295F",
  "DownRightVector":"\u21C1",
  "DownRightVectorBar":"\u2957",
  "DownTee":"\u22A4",
  "DownTeeArrow":"\u21A7",
  "drbkarow":"\u2910",
  "drcorn":"\u231F",
  "drcrop":"\u230C",
  "Dscr":"\uD835\uDC9F",
  "dscr":"\uD835\uDCB9",
  "DScy":"\u0405",
  "dscy":"\u0455",
  "dsol":"\u29F6",
  "Dstrok":"\u0110",
  "dstrok":"\u0111",
  "dtdot":"\u22F1",
  "dtri":"\u25BF",
  "dtrif":"\u25BE",
  "duarr":"\u21F5",
  "duhar":"\u296F",
  "dwangle":"\u29A6",
  "DZcy":"\u040F",
  "dzcy":"\u045F",
  "dzigrarr":"\u27FF",
  "Eacute":"\u00C9",
  "eacute":"\u00E9",
  "easter":"\u2A6E",
  "Ecaron":"\u011A",
  "ecaron":"\u011B",
  "ecir":"\u2256",
  "Ecirc":"\u00CA",
  "ecirc":"\u00EA",
  "ecolon":"\u2255",
  "Ecy":"\u042D",
  "ecy":"\u044D",
  "eDDot":"\u2A77",
  "Edot":"\u0116",
  "eDot":"\u2251",
  "edot":"\u0117",
  "ee":"\u2147",
  "efDot":"\u2252",
  "Efr":"\uD835\uDD08",
  "efr":"\uD835\uDD22",
  "eg":"\u2A9A",
  "Egrave":"\u00C8",
  "egrave":"\u00E8",
  "egs":"\u2A96",
  "egsdot":"\u2A98",
  "el":"\u2A99",
  "Element":"\u2208",
  "elinters":"\u23E7",
  "ell":"\u2113",
  "els":"\u2A95",
  "elsdot":"\u2A97",
  "Emacr":"\u0112",
  "emacr":"\u0113",
  "empty":"\u2205",
  "emptyset":"\u2205",
  "EmptySmallSquare":"\u25FB",
  "emptyv":"\u2205",
  "EmptyVerySmallSquare":"\u25AB",
  "emsp":"\u2003",
  "emsp13":"\u2004",
  "emsp14":"\u2005",
  "ENG":"\u014A",
  "eng":"\u014B",
  "ensp":"\u2002",
  "Eogon":"\u0118",
  "eogon":"\u0119",
  "Eopf":"\uD835\uDD3C",
  "eopf":"\uD835\uDD56",
  "epar":"\u22D5",
  "eparsl":"\u29E3",
  "eplus":"\u2A71",
  "epsi":"\u03B5",
  "Epsilon":"\u0395",
  "epsilon":"\u03B5",
  "epsiv":"\u03F5",
  "eqcirc":"\u2256",
  "eqcolon":"\u2255",
  "eqsim":"\u2242",
  "eqslantgtr":"\u2A96",
  "eqslantless":"\u2A95",
  "Equal":"\u2A75",
  "equals":"\u003D",
  "EqualTilde":"\u2242",
  "equest":"\u225F",
  "Equilibrium":"\u21CC",
  "equiv":"\u2261",
  "equivDD":"\u2A78",
  "eqvparsl":"\u29E5",
  "erarr":"\u2971",
  "erDot":"\u2253",
  "Escr":"\u2130",
  "escr":"\u212F",
  "esdot":"\u2250",
  "Esim":"\u2A73",
  "esim":"\u2242",
  "Eta":"\u0397",
  "eta":"\u03B7",
  "ETH":"\u00D0",
  "eth":"\u00F0",
  "Euml":"\u00CB",
  "euml":"\u00EB",
  "euro":"\u20AC",
  "excl":"\u0021",
  "exist":"\u2203",
  "Exists":"\u2203",
  "expectation":"\u2130",
  "ExponentialE":"\u2147",
  "exponentiale":"\u2147",
  "fallingdotseq":"\u2252",
  "Fcy":"\u0424",
  "fcy":"\u0444",
  "female":"\u2640",
  "ffilig":"\uFB03",
  "fflig":"\uFB00",
  "ffllig":"\uFB04",
  "Ffr":"\uD835\uDD09",
  "ffr":"\uD835\uDD23",
  "filig":"\uFB01",
  "FilledSmallSquare":"\u25FC",
  "FilledVerySmallSquare":"\u25AA",
  "fjlig":"\u0066\u006A",
  "flat":"\u266D",
  "fllig":"\uFB02",
  "fltns":"\u25B1",
  "fnof":"\u0192",
  "Fopf":"\uD835\uDD3D",
  "fopf":"\uD835\uDD57",
  "ForAll":"\u2200",
  "forall":"\u2200",
  "fork":"\u22D4",
  "forkv":"\u2AD9",
  "Fouriertrf":"\u2131",
  "fpartint":"\u2A0D",
  "frac12":"\u00BD",
  "frac13":"\u2153",
  "frac14":"\u00BC",
  "frac15":"\u2155",
  "frac16":"\u2159",
  "frac18":"\u215B",
  "frac23":"\u2154",
  "frac25":"\u2156",
  "frac34":"\u00BE",
  "frac35":"\u2157",
  "frac38":"\u215C",
  "frac45":"\u2158",
  "frac56":"\u215A",
  "frac58":"\u215D",
  "frac78":"\u215E",
  "frasl":"\u2044",
  "frown":"\u2322",
  "Fscr":"\u2131",
  "fscr":"\uD835\uDCBB",
  "gacute":"\u01F5",
  "Gamma":"\u0393",
  "gamma":"\u03B3",
  "Gammad":"\u03DC",
  "gammad":"\u03DD",
  "gap":"\u2A86",
  "Gbreve":"\u011E",
  "gbreve":"\u011F",
  "Gcedil":"\u0122",
  "Gcirc":"\u011C",
  "gcirc":"\u011D",
  "Gcy":"\u0413",
  "gcy":"\u0433",
  "Gdot":"\u0120",
  "gdot":"\u0121",
  "gE":"\u2267",
  "ge":"\u2265",
  "gEl":"\u2A8C",
  "gel":"\u22DB",
  "geq":"\u2265",
  "geqq":"\u2267",
  "geqslant":"\u2A7E",
  "ges":"\u2A7E",
  "gescc":"\u2AA9",
  "gesdot":"\u2A80",
  "gesdoto":"\u2A82",
  "gesdotol":"\u2A84",
  "gesl":"\u22DB\uFE00",
  "gesles":"\u2A94",
  "Gfr":"\uD835\uDD0A",
  "gfr":"\uD835\uDD24",
  "Gg":"\u22D9",
  "gg":"\u226B",
  "ggg":"\u22D9",
  "gimel":"\u2137",
  "GJcy":"\u0403",
  "gjcy":"\u0453",
  "gl":"\u2277",
  "gla":"\u2AA5",
  "glE":"\u2A92",
  "glj":"\u2AA4",
  "gnap":"\u2A8A",
  "gnapprox":"\u2A8A",
  "gnE":"\u2269",
  "gne":"\u2A88",
  "gneq":"\u2A88",
  "gneqq":"\u2269",
  "gnsim":"\u22E7",
  "Gopf":"\uD835\uDD3E",
  "gopf":"\uD835\uDD58",
  "grave":"\u0060",
  "GreaterEqual":"\u2265",
  "GreaterEqualLess":"\u22DB",
  "GreaterFullEqual":"\u2267",
  "GreaterGreater":"\u2AA2",
  "GreaterLess":"\u2277",
  "GreaterSlantEqual":"\u2A7E",
  "GreaterTilde":"\u2273",
  "Gscr":"\uD835\uDCA2",
  "gscr":"\u210A",
  "gsim":"\u2273",
  "gsime":"\u2A8E",
  "gsiml":"\u2A90",
  "GT":"\u003E",
  "Gt":"\u226B",
  "gt":"\u003E",
  "gtcc":"\u2AA7",
  "gtcir":"\u2A7A",
  "gtdot":"\u22D7",
  "gtlPar":"\u2995",
  "gtquest":"\u2A7C",
  "gtrapprox":"\u2A86",
  "gtrarr":"\u2978",
  "gtrdot":"\u22D7",
  "gtreqless":"\u22DB",
  "gtreqqless":"\u2A8C",
  "gtrless":"\u2277",
  "gtrsim":"\u2273",
  "gvertneqq":"\u2269\uFE00",
  "gvnE":"\u2269\uFE00",
  "Hacek":"\u02C7",
  "hairsp":"\u200A",
  "half":"\u00BD",
  "hamilt":"\u210B",
  "HARDcy":"\u042A",
  "hardcy":"\u044A",
  "hArr":"\u21D4",
  "harr":"\u2194",
  "harrcir":"\u2948",
  "harrw":"\u21AD",
  "Hat":"\u005E",
  "hbar":"\u210F",
  "Hcirc":"\u0124",
  "hcirc":"\u0125",
  "hearts":"\u2665",
  "heartsuit":"\u2665",
  "hellip":"\u2026",
  "hercon":"\u22B9",
  "Hfr":"\u210C",
  "hfr":"\uD835\uDD25",
  "HilbertSpace":"\u210B",
  "hksearow":"\u2925",
  "hkswarow":"\u2926",
  "hoarr":"\u21FF",
  "homtht":"\u223B",
  "hookleftarrow":"\u21A9",
  "hookrightarrow":"\u21AA",
  "Hopf":"\u210D",
  "hopf":"\uD835\uDD59",
  "horbar":"\u2015",
  "HorizontalLine":"\u2500",
  "Hscr":"\u210B",
  "hscr":"\uD835\uDCBD",
  "hslash":"\u210F",
  "Hstrok":"\u0126",
  "hstrok":"\u0127",
  "HumpDownHump":"\u224E",
  "HumpEqual":"\u224F",
  "hybull":"\u2043",
  "hyphen":"\u2010",
  "Iacute":"\u00CD",
  "iacute":"\u00ED",
  "ic":"\u2063",
  "Icirc":"\u00CE",
  "icirc":"\u00EE",
  "Icy":"\u0418",
  "icy":"\u0438",
  "Idot":"\u0130",
  "IEcy":"\u0415",
  "iecy":"\u0435",
  "iexcl":"\u00A1",
  "iff":"\u21D4",
  "Ifr":"\u2111",
  "ifr":"\uD835\uDD26",
  "Igrave":"\u00CC",
  "igrave":"\u00EC",
  "ii":"\u2148",
  "iiiint":"\u2A0C",
  "iiint":"\u222D",
  "iinfin":"\u29DC",
  "iiota":"\u2129",
  "IJlig":"\u0132",
  "ijlig":"\u0133",
  "Im":"\u2111",
  "Imacr":"\u012A",
  "imacr":"\u012B",
  "image":"\u2111",
  "ImaginaryI":"\u2148",
  "imagline":"\u2110",
  "imagpart":"\u2111",
  "imath":"\u0131",
  "imof":"\u22B7",
  "imped":"\u01B5",
  "Implies":"\u21D2",
  "in":"\u2208",
  "incare":"\u2105",
  "infin":"\u221E",
  "infintie":"\u29DD",
  "inodot":"\u0131",
  "Int":"\u222C",
  "int":"\u222B",
  "intcal":"\u22BA",
  "integers":"\u2124",
  "Integral":"\u222B",
  "intercal":"\u22BA",
  "Intersection":"\u22C2",
  "intlarhk":"\u2A17",
  "intprod":"\u2A3C",
  "InvisibleComma":"\u2063",
  "InvisibleTimes":"\u2062",
  "IOcy":"\u0401",
  "iocy":"\u0451",
  "Iogon":"\u012E",
  "iogon":"\u012F",
  "Iopf":"\uD835\uDD40",
  "iopf":"\uD835\uDD5A",
  "Iota":"\u0399",
  "iota":"\u03B9",
  "iprod":"\u2A3C",
  "iquest":"\u00BF",
  "Iscr":"\u2110",
  "iscr":"\uD835\uDCBE",
  "isin":"\u2208",
  "isindot":"\u22F5",
  "isinE":"\u22F9",
  "isins":"\u22F4",
  "isinsv":"\u22F3",
  "isinv":"\u2208",
  "it":"\u2062",
  "Itilde":"\u0128",
  "itilde":"\u0129",
  "Iukcy":"\u0406",
  "iukcy":"\u0456",
  "Iuml":"\u00CF",
  "iuml":"\u00EF",
  "Jcirc":"\u0134",
  "jcirc":"\u0135",
  "Jcy":"\u0419",
  "jcy":"\u0439",
  "Jfr":"\uD835\uDD0D",
  "jfr":"\uD835\uDD27",
  "jmath":"\u0237",
  "Jopf":"\uD835\uDD41",
  "jopf":"\uD835\uDD5B",
  "Jscr":"\uD835\uDCA5",
  "jscr":"\uD835\uDCBF",
  "Jsercy":"\u0408",
  "jsercy":"\u0458",
  "Jukcy":"\u0404",
  "jukcy":"\u0454",
  "Kappa":"\u039A",
  "kappa":"\u03BA",
  "kappav":"\u03F0",
  "Kcedil":"\u0136",
  "kcedil":"\u0137",
  "Kcy":"\u041A",
  "kcy":"\u043A",
  "Kfr":"\uD835\uDD0E",
  "kfr":"\uD835\uDD28",
  "kgreen":"\u0138",
  "KHcy":"\u0425",
  "khcy":"\u0445",
  "KJcy":"\u040C",
  "kjcy":"\u045C",
  "Kopf":"\uD835\uDD42",
  "kopf":"\uD835\uDD5C",
  "Kscr":"\uD835\uDCA6",
  "kscr":"\uD835\uDCC0",
  "lAarr":"\u21DA",
  "Lacute":"\u0139",
  "lacute":"\u013A",
  "laemptyv":"\u29B4",
  "lagran":"\u2112",
  "Lambda":"\u039B",
  "lambda":"\u03BB",
  "Lang":"\u27EA",
  "lang":"\u27E8",
  "langd":"\u2991",
  "langle":"\u27E8",
  "lap":"\u2A85",
  "Laplacetrf":"\u2112",
  "laquo":"\u00AB",
  "Larr":"\u219E",
  "lArr":"\u21D0",
  "larr":"\u2190",
  "larrb":"\u21E4",
  "larrbfs":"\u291F",
  "larrfs":"\u291D",
  "larrhk":"\u21A9",
  "larrlp":"\u21AB",
  "larrpl":"\u2939",
  "larrsim":"\u2973",
  "larrtl":"\u21A2",
  "lat":"\u2AAB",
  "lAtail":"\u291B",
  "latail":"\u2919",
  "late":"\u2AAD",
  "lates":"\u2AAD\uFE00",
  "lBarr":"\u290E",
  "lbarr":"\u290C",
  "lbbrk":"\u2772",
  "lbrace":"\u007B",
  "lbrack":"\u005B",
  "lbrke":"\u298B",
  "lbrksld":"\u298F",
  "lbrkslu":"\u298D",
  "Lcaron":"\u013D",
  "lcaron":"\u013E",
  "Lcedil":"\u013B",
  "lcedil":"\u013C",
  "lceil":"\u2308",
  "lcub":"\u007B",
  "Lcy":"\u041B",
  "lcy":"\u043B",
  "ldca":"\u2936",
  "ldquo":"\u201C",
  "ldquor":"\u201E",
  "ldrdhar":"\u2967",
  "ldrushar":"\u294B",
  "ldsh":"\u21B2",
  "lE":"\u2266",
  "le":"\u2264",
  "LeftAngleBracket":"\u27E8",
  "LeftArrow":"\u2190",
  "Leftarrow":"\u21D0",
  "leftarrow":"\u2190",
  "LeftArrowBar":"\u21E4",
  "LeftArrowRightArrow":"\u21C6",
  "leftarrowtail":"\u21A2",
  "LeftCeiling":"\u2308",
  "LeftDoubleBracket":"\u27E6",
  "LeftDownTeeVector":"\u2961",
  "LeftDownVector":"\u21C3",
  "LeftDownVectorBar":"\u2959",
  "LeftFloor":"\u230A",
  "leftharpoondown":"\u21BD",
  "leftharpoonup":"\u21BC",
  "leftleftarrows":"\u21C7",
  "LeftRightArrow":"\u2194",
  "Leftrightarrow":"\u21D4",
  "leftrightarrow":"\u2194",
  "leftrightarrows":"\u21C6",
  "leftrightharpoons":"\u21CB",
  "leftrightsquigarrow":"\u21AD",
  "LeftRightVector":"\u294E",
  "LeftTee":"\u22A3",
  "LeftTeeArrow":"\u21A4",
  "LeftTeeVector":"\u295A",
  "leftthreetimes":"\u22CB",
  "LeftTriangle":"\u22B2",
  "LeftTriangleBar":"\u29CF",
  "LeftTriangleEqual":"\u22B4",
  "LeftUpDownVector":"\u2951",
  "LeftUpTeeVector":"\u2960",
  "LeftUpVector":"\u21BF",
  "LeftUpVectorBar":"\u2958",
  "LeftVector":"\u21BC",
  "LeftVectorBar":"\u2952",
  "lEg":"\u2A8B",
  "leg":"\u22DA",
  "leq":"\u2264",
  "leqq":"\u2266",
  "leqslant":"\u2A7D",
  "les":"\u2A7D",
  "lescc":"\u2AA8",
  "lesdot":"\u2A7F",
  "lesdoto":"\u2A81",
  "lesdotor":"\u2A83",
  "lesg":"\u22DA\uFE00",
  "lesges":"\u2A93",
  "lessapprox":"\u2A85",
  "lessdot":"\u22D6",
  "lesseqgtr":"\u22DA",
  "lesseqqgtr":"\u2A8B",
  "LessEqualGreater":"\u22DA",
  "LessFullEqual":"\u2266",
  "LessGreater":"\u2276",
  "lessgtr":"\u2276",
  "LessLess":"\u2AA1",
  "lesssim":"\u2272",
  "LessSlantEqual":"\u2A7D",
  "LessTilde":"\u2272",
  "lfisht":"\u297C",
  "lfloor":"\u230A",
  "Lfr":"\uD835\uDD0F",
  "lfr":"\uD835\uDD29",
  "lg":"\u2276",
  "lgE":"\u2A91",
  "lHar":"\u2962",
  "lhard":"\u21BD",
  "lharu":"\u21BC",
  "lharul":"\u296A",
  "lhblk":"\u2584",
  "LJcy":"\u0409",
  "ljcy":"\u0459",
  "Ll":"\u22D8",
  "ll":"\u226A",
  "llarr":"\u21C7",
  "llcorner":"\u231E",
  "Lleftarrow":"\u21DA",
  "llhard":"\u296B",
  "lltri":"\u25FA",
  "Lmidot":"\u013F",
  "lmidot":"\u0140",
  "lmoust":"\u23B0",
  "lmoustache":"\u23B0",
  "lnap":"\u2A89",
  "lnapprox":"\u2A89",
  "lnE":"\u2268",
  "lne":"\u2A87",
  "lneq":"\u2A87",
  "lneqq":"\u2268",
  "lnsim":"\u22E6",
  "loang":"\u27EC",
  "loarr":"\u21FD",
  "lobrk":"\u27E6",
  "LongLeftArrow":"\u27F5",
  "Longleftarrow":"\u27F8",
  "longleftarrow":"\u27F5",
  "LongLeftRightArrow":"\u27F7",
  "Longleftrightarrow":"\u27FA",
  "longleftrightarrow":"\u27F7",
  "longmapsto":"\u27FC",
  "LongRightArrow":"\u27F6",
  "Longrightarrow":"\u27F9",
  "longrightarrow":"\u27F6",
  "looparrowleft":"\u21AB",
  "looparrowright":"\u21AC",
  "lopar":"\u2985",
  "Lopf":"\uD835\uDD43",
  "lopf":"\uD835\uDD5D",
  "loplus":"\u2A2D",
  "lotimes":"\u2A34",
  "lowast":"\u2217",
  "lowbar":"\u005F",
  "LowerLeftArrow":"\u2199",
  "LowerRightArrow":"\u2198",
  "loz":"\u25CA",
  "lozenge":"\u25CA",
  "lozf":"\u29EB",
  "lpar":"\u0028",
  "lparlt":"\u2993",
  "lrarr":"\u21C6",
  "lrcorner":"\u231F",
  "lrhar":"\u21CB",
  "lrhard":"\u296D",
  "lrm":"\u200E",
  "lrtri":"\u22BF",
  "lsaquo":"\u2039",
  "Lscr":"\u2112",
  "lscr":"\uD835\uDCC1",
  "Lsh":"\u21B0",
  "lsh":"\u21B0",
  "lsim":"\u2272",
  "lsime":"\u2A8D",
  "lsimg":"\u2A8F",
  "lsqb":"\u005B",
  "lsquo":"\u2018",
  "lsquor":"\u201A",
  "Lstrok":"\u0141",
  "lstrok":"\u0142",
  "LT":"\u003C",
  "Lt":"\u226A",
  "lt":"\u003C",
  "ltcc":"\u2AA6",
  "ltcir":"\u2A79",
  "ltdot":"\u22D6",
  "lthree":"\u22CB",
  "ltimes":"\u22C9",
  "ltlarr":"\u2976",
  "ltquest":"\u2A7B",
  "ltri":"\u25C3",
  "ltrie":"\u22B4",
  "ltrif":"\u25C2",
  "ltrPar":"\u2996",
  "lurdshar":"\u294A",
  "luruhar":"\u2966",
  "lvertneqq":"\u2268\uFE00",
  "lvnE":"\u2268\uFE00",
  "macr":"\u00AF",
  "male":"\u2642",
  "malt":"\u2720",
  "maltese":"\u2720",
  "Map":"\u2905",
  "map":"\u21A6",
  "mapsto":"\u21A6",
  "mapstodown":"\u21A7",
  "mapstoleft":"\u21A4",
  "mapstoup":"\u21A5",
  "marker":"\u25AE",
  "mcomma":"\u2A29",
  "Mcy":"\u041C",
  "mcy":"\u043C",
  "mdash":"\u2014",
  "mDDot":"\u223A",
  "measuredangle":"\u2221",
  "MediumSpace":"\u205F",
  "Mellintrf":"\u2133",
  "Mfr":"\uD835\uDD10",
  "mfr":"\uD835\uDD2A",
  "mho":"\u2127",
  "micro":"\u00B5",
  "mid":"\u2223",
  "midast":"\u002A",
  "midcir":"\u2AF0",
  "middot":"\u00B7",
  "minus":"\u2212",
  "minusb":"\u229F",
  "minusd":"\u2238",
  "minusdu":"\u2A2A",
  "MinusPlus":"\u2213",
  "mlcp":"\u2ADB",
  "mldr":"\u2026",
  "mnplus":"\u2213",
  "models":"\u22A7",
  "Mopf":"\uD835\uDD44",
  "mopf":"\uD835\uDD5E",
  "mp":"\u2213",
  "Mscr":"\u2133",
  "mscr":"\uD835\uDCC2",
  "mstpos":"\u223E",
  "Mu":"\u039C",
  "mu":"\u03BC",
  "multimap":"\u22B8",
  "mumap":"\u22B8",
  "nabla":"\u2207",
  "Nacute":"\u0143",
  "nacute":"\u0144",
  "nang":"\u2220\u20D2",
  "nap":"\u2249",
  "napE":"\u2A70\u0338",
  "napid":"\u224B\u0338",
  "napos":"\u0149",
  "napprox":"\u2249",
  "natur":"\u266E",
  "natural":"\u266E",
  "naturals":"\u2115",
  "nbsp":"\u00A0",
  "nbump":"\u224E\u0338",
  "nbumpe":"\u224F\u0338",
  "ncap":"\u2A43",
  "Ncaron":"\u0147",
  "ncaron":"\u0148",
  "Ncedil":"\u0145",
  "ncedil":"\u0146",
  "ncong":"\u2247",
  "ncongdot":"\u2A6D\u0338",
  "ncup":"\u2A42",
  "Ncy":"\u041D",
  "ncy":"\u043D",
  "ndash":"\u2013",
  "ne":"\u2260",
  "nearhk":"\u2924",
  "neArr":"\u21D7",
  "nearr":"\u2197",
  "nearrow":"\u2197",
  "nedot":"\u2250\u0338",
  "NegativeMediumSpace":"\u200B",
  "NegativeThickSpace":"\u200B",
  "NegativeThinSpace":"\u200B",
  "NegativeVeryThinSpace":"\u200B",
  "nequiv":"\u2262",
  "nesear":"\u2928",
  "nesim":"\u2242\u0338",
  "NestedGreaterGreater":"\u226B",
  "NestedLessLess":"\u226A",
  "NewLine":"\u000A",
  "nexist":"\u2204",
  "nexists":"\u2204",
  "Nfr":"\uD835\uDD11",
  "nfr":"\uD835\uDD2B",
  "ngE":"\u2267\u0338",
  "nge":"\u2271",
  "ngeq":"\u2271",
  "ngeqq":"\u2267\u0338",
  "ngeqslant":"\u2A7E\u0338",
  "nges":"\u2A7E\u0338",
  "nGg":"\u22D9\u0338",
  "ngsim":"\u2275",
  "nGt":"\u226B\u20D2",
  "ngt":"\u226F",
  "ngtr":"\u226F",
  "nGtv":"\u226B\u0338",
  "nhArr":"\u21CE",
  "nharr":"\u21AE",
  "nhpar":"\u2AF2",
  "ni":"\u220B",
  "nis":"\u22FC",
  "nisd":"\u22FA",
  "niv":"\u220B",
  "NJcy":"\u040A",
  "njcy":"\u045A",
  "nlArr":"\u21CD",
  "nlarr":"\u219A",
  "nldr":"\u2025",
  "nlE":"\u2266\u0338",
  "nle":"\u2270",
  "nLeftarrow":"\u21CD",
  "nleftarrow":"\u219A",
  "nLeftrightarrow":"\u21CE",
  "nleftrightarrow":"\u21AE",
  "nleq":"\u2270",
  "nleqq":"\u2266\u0338",
  "nleqslant":"\u2A7D\u0338",
  "nles":"\u2A7D\u0338",
  "nless":"\u226E",
  "nLl":"\u22D8\u0338",
  "nlsim":"\u2274",
  "nLt":"\u226A\u20D2",
  "nlt":"\u226E",
  "nltri":"\u22EA",
  "nltrie":"\u22EC",
  "nLtv":"\u226A\u0338",
  "nmid":"\u2224",
  "NoBreak":"\u2060",
  "NonBreakingSpace":"\u00A0",
  "Nopf":"\u2115",
  "nopf":"\uD835\uDD5F",
  "Not":"\u2AEC",
  "not":"\u00AC",
  "NotCongruent":"\u2262",
  "NotCupCap":"\u226D",
  "NotDoubleVerticalBar":"\u2226",
  "NotElement":"\u2209",
  "NotEqual":"\u2260",
  "NotEqualTilde":"\u2242\u0338",
  "NotExists":"\u2204",
  "NotGreater":"\u226F",
  "NotGreaterEqual":"\u2271",
  "NotGreaterFullEqual":"\u2267\u0338",
  "NotGreaterGreater":"\u226B\u0338",
  "NotGreaterLess":"\u2279",
  "NotGreaterSlantEqual":"\u2A7E\u0338",
  "NotGreaterTilde":"\u2275",
  "NotHumpDownHump":"\u224E\u0338",
  "NotHumpEqual":"\u224F\u0338",
  "notin":"\u2209",
  "notindot":"\u22F5\u0338",
  "notinE":"\u22F9\u0338",
  "notinva":"\u2209",
  "notinvb":"\u22F7",
  "notinvc":"\u22F6",
  "NotLeftTriangle":"\u22EA",
  "NotLeftTriangleBar":"\u29CF\u0338",
  "NotLeftTriangleEqual":"\u22EC",
  "NotLess":"\u226E",
  "NotLessEqual":"\u2270",
  "NotLessGreater":"\u2278",
  "NotLessLess":"\u226A\u0338",
  "NotLessSlantEqual":"\u2A7D\u0338",
  "NotLessTilde":"\u2274",
  "NotNestedGreaterGreater":"\u2AA2\u0338",
  "NotNestedLessLess":"\u2AA1\u0338",
  "notni":"\u220C",
  "notniva":"\u220C",
  "notnivb":"\u22FE",
  "notnivc":"\u22FD",
  "NotPrecedes":"\u2280",
  "NotPrecedesEqual":"\u2AAF\u0338",
  "NotPrecedesSlantEqual":"\u22E0",
  "NotReverseElement":"\u220C",
  "NotRightTriangle":"\u22EB",
  "NotRightTriangleBar":"\u29D0\u0338",
  "NotRightTriangleEqual":"\u22ED",
  "NotSquareSubset":"\u228F\u0338",
  "NotSquareSubsetEqual":"\u22E2",
  "NotSquareSuperset":"\u2290\u0338",
  "NotSquareSupersetEqual":"\u22E3",
  "NotSubset":"\u2282\u20D2",
  "NotSubsetEqual":"\u2288",
  "NotSucceeds":"\u2281",
  "NotSucceedsEqual":"\u2AB0\u0338",
  "NotSucceedsSlantEqual":"\u22E1",
  "NotSucceedsTilde":"\u227F\u0338",
  "NotSuperset":"\u2283\u20D2",
  "NotSupersetEqual":"\u2289",
  "NotTilde":"\u2241",
  "NotTildeEqual":"\u2244",
  "NotTildeFullEqual":"\u2247",
  "NotTildeTilde":"\u2249",
  "NotVerticalBar":"\u2224",
  "npar":"\u2226",
  "nparallel":"\u2226",
  "nparsl":"\u2AFD\u20E5",
  "npart":"\u2202\u0338",
  "npolint":"\u2A14",
  "npr":"\u2280",
  "nprcue":"\u22E0",
  "npre":"\u2AAF\u0338",
  "nprec":"\u2280",
  "npreceq":"\u2AAF\u0338",
  "nrArr":"\u21CF",
  "nrarr":"\u219B",
  "nrarrc":"\u2933\u0338",
  "nrarrw":"\u219D\u0338",
  "nRightarrow":"\u21CF",
  "nrightarrow":"\u219B",
  "nrtri":"\u22EB",
  "nrtrie":"\u22ED",
  "nsc":"\u2281",
  "nsccue":"\u22E1",
  "nsce":"\u2AB0\u0338",
  "Nscr":"\uD835\uDCA9",
  "nscr":"\uD835\uDCC3",
  "nshortmid":"\u2224",
  "nshortparallel":"\u2226",
  "nsim":"\u2241",
  "nsime":"\u2244",
  "nsimeq":"\u2244",
  "nsmid":"\u2224",
  "nspar":"\u2226",
  "nsqsube":"\u22E2",
  "nsqsupe":"\u22E3",
  "nsub":"\u2284",
  "nsubE":"\u2AC5\u0338",
  "nsube":"\u2288",
  "nsubset":"\u2282\u20D2",
  "nsubseteq":"\u2288",
  "nsubseteqq":"\u2AC5\u0338",
  "nsucc":"\u2281",
  "nsucceq":"\u2AB0\u0338",
  "nsup":"\u2285",
  "nsupE":"\u2AC6\u0338",
  "nsupe":"\u2289",
  "nsupset":"\u2283\u20D2",
  "nsupseteq":"\u2289",
  "nsupseteqq":"\u2AC6\u0338",
  "ntgl":"\u2279",
  "Ntilde":"\u00D1",
  "ntilde":"\u00F1",
  "ntlg":"\u2278",
  "ntriangleleft":"\u22EA",
  "ntrianglelefteq":"\u22EC",
  "ntriangleright":"\u22EB",
  "ntrianglerighteq":"\u22ED",
  "Nu":"\u039D",
  "nu":"\u03BD",
  "num":"\u0023",
  "numero":"\u2116",
  "numsp":"\u2007",
  "nvap":"\u224D\u20D2",
  "nVDash":"\u22AF",
  "nVdash":"\u22AE",
  "nvDash":"\u22AD",
  "nvdash":"\u22AC",
  "nvge":"\u2265\u20D2",
  "nvgt":"\u003E\u20D2",
  "nvHarr":"\u2904",
  "nvinfin":"\u29DE",
  "nvlArr":"\u2902",
  "nvle":"\u2264\u20D2",
  "nvlt":"\u003C\u20D2",
  "nvltrie":"\u22B4\u20D2",
  "nvrArr":"\u2903",
  "nvrtrie":"\u22B5\u20D2",
  "nvsim":"\u223C\u20D2",
  "nwarhk":"\u2923",
  "nwArr":"\u21D6",
  "nwarr":"\u2196",
  "nwarrow":"\u2196",
  "nwnear":"\u2927",
  "Oacute":"\u00D3",
  "oacute":"\u00F3",
  "oast":"\u229B",
  "ocir":"\u229A",
  "Ocirc":"\u00D4",
  "ocirc":"\u00F4",
  "Ocy":"\u041E",
  "ocy":"\u043E",
  "odash":"\u229D",
  "Odblac":"\u0150",
  "odblac":"\u0151",
  "odiv":"\u2A38",
  "odot":"\u2299",
  "odsold":"\u29BC",
  "OElig":"\u0152",
  "oelig":"\u0153",
  "ofcir":"\u29BF",
  "Ofr":"\uD835\uDD12",
  "ofr":"\uD835\uDD2C",
  "ogon":"\u02DB",
  "Ograve":"\u00D2",
  "ograve":"\u00F2",
  "ogt":"\u29C1",
  "ohbar":"\u29B5",
  "ohm":"\u03A9",
  "oint":"\u222E",
  "olarr":"\u21BA",
  "olcir":"\u29BE",
  "olcross":"\u29BB",
  "oline":"\u203E",
  "olt":"\u29C0",
  "Omacr":"\u014C",
  "omacr":"\u014D",
  "Omega":"\u03A9",
  "omega":"\u03C9",
  "Omicron":"\u039F",
  "omicron":"\u03BF",
  "omid":"\u29B6",
  "ominus":"\u2296",
  "Oopf":"\uD835\uDD46",
  "oopf":"\uD835\uDD60",
  "opar":"\u29B7",
  "OpenCurlyDoubleQuote":"\u201C",
  "OpenCurlyQuote":"\u2018",
  "operp":"\u29B9",
  "oplus":"\u2295",
  "Or":"\u2A54",
  "or":"\u2228",
  "orarr":"\u21BB",
  "ord":"\u2A5D",
  "order":"\u2134",
  "orderof":"\u2134",
  "ordf":"\u00AA",
  "ordm":"\u00BA",
  "origof":"\u22B6",
  "oror":"\u2A56",
  "orslope":"\u2A57",
  "orv":"\u2A5B",
  "oS":"\u24C8",
  "Oscr":"\uD835\uDCAA",
  "oscr":"\u2134",
  "Oslash":"\u00D8",
  "oslash":"\u00F8",
  "osol":"\u2298",
  "Otilde":"\u00D5",
  "otilde":"\u00F5",
  "Otimes":"\u2A37",
  "otimes":"\u2297",
  "otimesas":"\u2A36",
  "Ouml":"\u00D6",
  "ouml":"\u00F6",
  "ovbar":"\u233D",
  "OverBar":"\u203E",
  "OverBrace":"\u23DE",
  "OverBracket":"\u23B4",
  "OverParenthesis":"\u23DC",
  "par":"\u2225",
  "para":"\u00B6",
  "parallel":"\u2225",
  "parsim":"\u2AF3",
  "parsl":"\u2AFD",
  "part":"\u2202",
  "PartialD":"\u2202",
  "Pcy":"\u041F",
  "pcy":"\u043F",
  "percnt":"\u0025",
  "period":"\u002E",
  "permil":"\u2030",
  "perp":"\u22A5",
  "pertenk":"\u2031",
  "Pfr":"\uD835\uDD13",
  "pfr":"\uD835\uDD2D",
  "Phi":"\u03A6",
  "phi":"\u03C6",
  "phiv":"\u03D5",
  "phmmat":"\u2133",
  "phone":"\u260E",
  "Pi":"\u03A0",
  "pi":"\u03C0",
  "pitchfork":"\u22D4",
  "piv":"\u03D6",
  "planck":"\u210F",
  "planckh":"\u210E",
  "plankv":"\u210F",
  "plus":"\u002B",
  "plusacir":"\u2A23",
  "plusb":"\u229E",
  "pluscir":"\u2A22",
  "plusdo":"\u2214",
  "plusdu":"\u2A25",
  "pluse":"\u2A72",
  "PlusMinus":"\u00B1",
  "plusmn":"\u00B1",
  "plussim":"\u2A26",
  "plustwo":"\u2A27",
  "pm":"\u00B1",
  "Poincareplane":"\u210C",
  "pointint":"\u2A15",
  "Popf":"\u2119",
  "popf":"\uD835\uDD61",
  "pound":"\u00A3",
  "Pr":"\u2ABB",
  "pr":"\u227A",
  "prap":"\u2AB7",
  "prcue":"\u227C",
  "prE":"\u2AB3",
  "pre":"\u2AAF",
  "prec":"\u227A",
  "precapprox":"\u2AB7",
  "preccurlyeq":"\u227C",
  "Precedes":"\u227A",
  "PrecedesEqual":"\u2AAF",
  "PrecedesSlantEqual":"\u227C",
  "PrecedesTilde":"\u227E",
  "preceq":"\u2AAF",
  "precnapprox":"\u2AB9",
  "precneqq":"\u2AB5",
  "precnsim":"\u22E8",
  "precsim":"\u227E",
  "Prime":"\u2033",
  "prime":"\u2032",
  "primes":"\u2119",
  "prnap":"\u2AB9",
  "prnE":"\u2AB5",
  "prnsim":"\u22E8",
  "prod":"\u220F",
  "Product":"\u220F",
  "profalar":"\u232E",
  "profline":"\u2312",
  "profsurf":"\u2313",
  "prop":"\u221D",
  "Proportion":"\u2237",
  "Proportional":"\u221D",
  "propto":"\u221D",
  "prsim":"\u227E",
  "prurel":"\u22B0",
  "Pscr":"\uD835\uDCAB",
  "pscr":"\uD835\uDCC5",
  "Psi":"\u03A8",
  "psi":"\u03C8",
  "puncsp":"\u2008",
  "Qfr":"\uD835\uDD14",
  "qfr":"\uD835\uDD2E",
  "qint":"\u2A0C",
  "Qopf":"\u211A",
  "qopf":"\uD835\uDD62",
  "qprime":"\u2057",
  "Qscr":"\uD835\uDCAC",
  "qscr":"\uD835\uDCC6",
  "quaternions":"\u210D",
  "quatint":"\u2A16",
  "quest":"\u003F",
  "questeq":"\u225F",
  "QUOT":"\u0022",
  "quot":"\u0022",
  "rAarr":"\u21DB",
  "race":"\u223D\u0331",
  "Racute":"\u0154",
  "racute":"\u0155",
  "radic":"\u221A",
  "raemptyv":"\u29B3",
  "Rang":"\u27EB",
  "rang":"\u27E9",
  "rangd":"\u2992",
  "range":"\u29A5",
  "rangle":"\u27E9",
  "raquo":"\u00BB",
  "Rarr":"\u21A0",
  "rArr":"\u21D2",
  "rarr":"\u2192",
  "rarrap":"\u2975",
  "rarrb":"\u21E5",
  "rarrbfs":"\u2920",
  "rarrc":"\u2933",
  "rarrfs":"\u291E",
  "rarrhk":"\u21AA",
  "rarrlp":"\u21AC",
  "rarrpl":"\u2945",
  "rarrsim":"\u2974",
  "Rarrtl":"\u2916",
  "rarrtl":"\u21A3",
  "rarrw":"\u219D",
  "rAtail":"\u291C",
  "ratail":"\u291A",
  "ratio":"\u2236",
  "rationals":"\u211A",
  "RBarr":"\u2910",
  "rBarr":"\u290F",
  "rbarr":"\u290D",
  "rbbrk":"\u2773",
  "rbrace":"\u007D",
  "rbrack":"\u005D",
  "rbrke":"\u298C",
  "rbrksld":"\u298E",
  "rbrkslu":"\u2990",
  "Rcaron":"\u0158",
  "rcaron":"\u0159",
  "Rcedil":"\u0156",
  "rcedil":"\u0157",
  "rceil":"\u2309",
  "rcub":"\u007D",
  "Rcy":"\u0420",
  "rcy":"\u0440",
  "rdca":"\u2937",
  "rdldhar":"\u2969",
  "rdquo":"\u201D",
  "rdquor":"\u201D",
  "rdsh":"\u21B3",
  "Re":"\u211C",
  "real":"\u211C",
  "realine":"\u211B",
  "realpart":"\u211C",
  "reals":"\u211D",
  "rect":"\u25AD",
  "REG":"\u00AE",
  "reg":"\u00AE",
  "ReverseElement":"\u220B",
  "ReverseEquilibrium":"\u21CB",
  "ReverseUpEquilibrium":"\u296F",
  "rfisht":"\u297D",
  "rfloor":"\u230B",
  "Rfr":"\u211C",
  "rfr":"\uD835\uDD2F",
  "rHar":"\u2964",
  "rhard":"\u21C1",
  "rharu":"\u21C0",
  "rharul":"\u296C",
  "Rho":"\u03A1",
  "rho":"\u03C1",
  "rhov":"\u03F1",
  "RightAngleBracket":"\u27E9",
  "RightArrow":"\u2192",
  "Rightarrow":"\u21D2",
  "rightarrow":"\u2192",
  "RightArrowBar":"\u21E5",
  "RightArrowLeftArrow":"\u21C4",
  "rightarrowtail":"\u21A3",
  "RightCeiling":"\u2309",
  "RightDoubleBracket":"\u27E7",
  "RightDownTeeVector":"\u295D",
  "RightDownVector":"\u21C2",
  "RightDownVectorBar":"\u2955",
  "RightFloor":"\u230B",
  "rightharpoondown":"\u21C1",
  "rightharpoonup":"\u21C0",
  "rightleftarrows":"\u21C4",
  "rightleftharpoons":"\u21CC",
  "rightrightarrows":"\u21C9",
  "rightsquigarrow":"\u219D",
  "RightTee":"\u22A2",
  "RightTeeArrow":"\u21A6",
  "RightTeeVector":"\u295B",
  "rightthreetimes":"\u22CC",
  "RightTriangle":"\u22B3",
  "RightTriangleBar":"\u29D0",
  "RightTriangleEqual":"\u22B5",
  "RightUpDownVector":"\u294F",
  "RightUpTeeVector":"\u295C",
  "RightUpVector":"\u21BE",
  "RightUpVectorBar":"\u2954",
  "RightVector":"\u21C0",
  "RightVectorBar":"\u2953",
  "ring":"\u02DA",
  "risingdotseq":"\u2253",
  "rlarr":"\u21C4",
  "rlhar":"\u21CC",
  "rlm":"\u200F",
  "rmoust":"\u23B1",
  "rmoustache":"\u23B1",
  "rnmid":"\u2AEE",
  "roang":"\u27ED",
  "roarr":"\u21FE",
  "robrk":"\u27E7",
  "ropar":"\u2986",
  "Ropf":"\u211D",
  "ropf":"\uD835\uDD63",
  "roplus":"\u2A2E",
  "rotimes":"\u2A35",
  "RoundImplies":"\u2970",
  "rpar":"\u0029",
  "rpargt":"\u2994",
  "rppolint":"\u2A12",
  "rrarr":"\u21C9",
  "Rrightarrow":"\u21DB",
  "rsaquo":"\u203A",
  "Rscr":"\u211B",
  "rscr":"\uD835\uDCC7",
  "Rsh":"\u21B1",
  "rsh":"\u21B1",
  "rsqb":"\u005D",
  "rsquo":"\u2019",
  "rsquor":"\u2019",
  "rthree":"\u22CC",
  "rtimes":"\u22CA",
  "rtri":"\u25B9",
  "rtrie":"\u22B5",
  "rtrif":"\u25B8",
  "rtriltri":"\u29CE",
  "RuleDelayed":"\u29F4",
  "ruluhar":"\u2968",
  "rx":"\u211E",
  "Sacute":"\u015A",
  "sacute":"\u015B",
  "sbquo":"\u201A",
  "Sc":"\u2ABC",
  "sc":"\u227B",
  "scap":"\u2AB8",
  "Scaron":"\u0160",
  "scaron":"\u0161",
  "sccue":"\u227D",
  "scE":"\u2AB4",
  "sce":"\u2AB0",
  "Scedil":"\u015E",
  "scedil":"\u015F",
  "Scirc":"\u015C",
  "scirc":"\u015D",
  "scnap":"\u2ABA",
  "scnE":"\u2AB6",
  "scnsim":"\u22E9",
  "scpolint":"\u2A13",
  "scsim":"\u227F",
  "Scy":"\u0421",
  "scy":"\u0441",
  "sdot":"\u22C5",
  "sdotb":"\u22A1",
  "sdote":"\u2A66",
  "searhk":"\u2925",
  "seArr":"\u21D8",
  "searr":"\u2198",
  "searrow":"\u2198",
  "sect":"\u00A7",
  "semi":"\u003B",
  "seswar":"\u2929",
  "setminus":"\u2216",
  "setmn":"\u2216",
  "sext":"\u2736",
  "Sfr":"\uD835\uDD16",
  "sfr":"\uD835\uDD30",
  "sfrown":"\u2322",
  "sharp":"\u266F",
  "SHCHcy":"\u0429",
  "shchcy":"\u0449",
  "SHcy":"\u0428",
  "shcy":"\u0448",
  "ShortDownArrow":"\u2193",
  "ShortLeftArrow":"\u2190",
  "shortmid":"\u2223",
  "shortparallel":"\u2225",
  "ShortRightArrow":"\u2192",
  "ShortUpArrow":"\u2191",
  "shy":"\u00AD",
  "Sigma":"\u03A3",
  "sigma":"\u03C3",
  "sigmaf":"\u03C2",
  "sigmav":"\u03C2",
  "sim":"\u223C",
  "simdot":"\u2A6A",
  "sime":"\u2243",
  "simeq":"\u2243",
  "simg":"\u2A9E",
  "simgE":"\u2AA0",
  "siml":"\u2A9D",
  "simlE":"\u2A9F",
  "simne":"\u2246",
  "simplus":"\u2A24",
  "simrarr":"\u2972",
  "slarr":"\u2190",
  "SmallCircle":"\u2218",
  "smallsetminus":"\u2216",
  "smashp":"\u2A33",
  "smeparsl":"\u29E4",
  "smid":"\u2223",
  "smile":"\u2323",
  "smt":"\u2AAA",
  "smte":"\u2AAC",
  "smtes":"\u2AAC\uFE00",
  "SOFTcy":"\u042C",
  "softcy":"\u044C",
  "sol":"\u002F",
  "solb":"\u29C4",
  "solbar":"\u233F",
  "Sopf":"\uD835\uDD4A",
  "sopf":"\uD835\uDD64",
  "spades":"\u2660",
  "spadesuit":"\u2660",
  "spar":"\u2225",
  "sqcap":"\u2293",
  "sqcaps":"\u2293\uFE00",
  "sqcup":"\u2294",
  "sqcups":"\u2294\uFE00",
  "Sqrt":"\u221A",
  "sqsub":"\u228F",
  "sqsube":"\u2291",
  "sqsubset":"\u228F",
  "sqsubseteq":"\u2291",
  "sqsup":"\u2290",
  "sqsupe":"\u2292",
  "sqsupset":"\u2290",
  "sqsupseteq":"\u2292",
  "squ":"\u25A1",
  "Square":"\u25A1",
  "square":"\u25A1",
  "SquareIntersection":"\u2293",
  "SquareSubset":"\u228F",
  "SquareSubsetEqual":"\u2291",
  "SquareSuperset":"\u2290",
  "SquareSupersetEqual":"\u2292",
  "SquareUnion":"\u2294",
  "squarf":"\u25AA",
  "squf":"\u25AA",
  "srarr":"\u2192",
  "Sscr":"\uD835\uDCAE",
  "sscr":"\uD835\uDCC8",
  "ssetmn":"\u2216",
  "ssmile":"\u2323",
  "sstarf":"\u22C6",
  "Star":"\u22C6",
  "star":"\u2606",
  "starf":"\u2605",
  "straightepsilon":"\u03F5",
  "straightphi":"\u03D5",
  "strns":"\u00AF",
  "Sub":"\u22D0",
  "sub":"\u2282",
  "subdot":"\u2ABD",
  "subE":"\u2AC5",
  "sube":"\u2286",
  "subedot":"\u2AC3",
  "submult":"\u2AC1",
  "subnE":"\u2ACB",
  "subne":"\u228A",
  "subplus":"\u2ABF",
  "subrarr":"\u2979",
  "Subset":"\u22D0",
  "subset":"\u2282",
  "subseteq":"\u2286",
  "subseteqq":"\u2AC5",
  "SubsetEqual":"\u2286",
  "subsetneq":"\u228A",
  "subsetneqq":"\u2ACB",
  "subsim":"\u2AC7",
  "subsub":"\u2AD5",
  "subsup":"\u2AD3",
  "succ":"\u227B",
  "succapprox":"\u2AB8",
  "succcurlyeq":"\u227D",
  "Succeeds":"\u227B",
  "SucceedsEqual":"\u2AB0",
  "SucceedsSlantEqual":"\u227D",
  "SucceedsTilde":"\u227F",
  "succeq":"\u2AB0",
  "succnapprox":"\u2ABA",
  "succneqq":"\u2AB6",
  "succnsim":"\u22E9",
  "succsim":"\u227F",
  "SuchThat":"\u220B",
  "Sum":"\u2211",
  "sum":"\u2211",
  "sung":"\u266A",
  "Sup":"\u22D1",
  "sup":"\u2283",
  "sup1":"\u00B9",
  "sup2":"\u00B2",
  "sup3":"\u00B3",
  "supdot":"\u2ABE",
  "supdsub":"\u2AD8",
  "supE":"\u2AC6",
  "supe":"\u2287",
  "supedot":"\u2AC4",
  "Superset":"\u2283",
  "SupersetEqual":"\u2287",
  "suphsol":"\u27C9",
  "suphsub":"\u2AD7",
  "suplarr":"\u297B",
  "supmult":"\u2AC2",
  "supnE":"\u2ACC",
  "supne":"\u228B",
  "supplus":"\u2AC0",
  "Supset":"\u22D1",
  "supset":"\u2283",
  "supseteq":"\u2287",
  "supseteqq":"\u2AC6",
  "supsetneq":"\u228B",
  "supsetneqq":"\u2ACC",
  "supsim":"\u2AC8",
  "supsub":"\u2AD4",
  "supsup":"\u2AD6",
  "swarhk":"\u2926",
  "swArr":"\u21D9",
  "swarr":"\u2199",
  "swarrow":"\u2199",
  "swnwar":"\u292A",
  "szlig":"\u00DF",
  "Tab":"\u0009",
  "target":"\u2316",
  "Tau":"\u03A4",
  "tau":"\u03C4",
  "tbrk":"\u23B4",
  "Tcaron":"\u0164",
  "tcaron":"\u0165",
  "Tcedil":"\u0162",
  "tcedil":"\u0163",
  "Tcy":"\u0422",
  "tcy":"\u0442",
  "tdot":"\u20DB",
  "telrec":"\u2315",
  "Tfr":"\uD835\uDD17",
  "tfr":"\uD835\uDD31",
  "there4":"\u2234",
  "Therefore":"\u2234",
  "therefore":"\u2234",
  "Theta":"\u0398",
  "theta":"\u03B8",
  "thetasym":"\u03D1",
  "thetav":"\u03D1",
  "thickapprox":"\u2248",
  "thicksim":"\u223C",
  "ThickSpace":"\u205F\u200A",
  "thinsp":"\u2009",
  "ThinSpace":"\u2009",
  "thkap":"\u2248",
  "thksim":"\u223C",
  "THORN":"\u00DE",
  "thorn":"\u00FE",
  "Tilde":"\u223C",
  "tilde":"\u02DC",
  "TildeEqual":"\u2243",
  "TildeFullEqual":"\u2245",
  "TildeTilde":"\u2248",
  "times":"\u00D7",
  "timesb":"\u22A0",
  "timesbar":"\u2A31",
  "timesd":"\u2A30",
  "tint":"\u222D",
  "toea":"\u2928",
  "top":"\u22A4",
  "topbot":"\u2336",
  "topcir":"\u2AF1",
  "Topf":"\uD835\uDD4B",
  "topf":"\uD835\uDD65",
  "topfork":"\u2ADA",
  "tosa":"\u2929",
  "tprime":"\u2034",
  "TRADE":"\u2122",
  "trade":"\u2122",
  "triangle":"\u25B5",
  "triangledown":"\u25BF",
  "triangleleft":"\u25C3",
  "trianglelefteq":"\u22B4",
  "triangleq":"\u225C",
  "triangleright":"\u25B9",
  "trianglerighteq":"\u22B5",
  "tridot":"\u25EC",
  "trie":"\u225C",
  "triminus":"\u2A3A",
  "TripleDot":"\u20DB",
  "triplus":"\u2A39",
  "trisb":"\u29CD",
  "tritime":"\u2A3B",
  "trpezium":"\u23E2",
  "Tscr":"\uD835\uDCAF",
  "tscr":"\uD835\uDCC9",
  "TScy":"\u0426",
  "tscy":"\u0446",
  "TSHcy":"\u040B",
  "tshcy":"\u045B",
  "Tstrok":"\u0166",
  "tstrok":"\u0167",
  "twixt":"\u226C",
  "twoheadleftarrow":"\u219E",
  "twoheadrightarrow":"\u21A0",
  "Uacute":"\u00DA",
  "uacute":"\u00FA",
  "Uarr":"\u219F",
  "uArr":"\u21D1",
  "uarr":"\u2191",
  "Uarrocir":"\u2949",
  "Ubrcy":"\u040E",
  "ubrcy":"\u045E",
  "Ubreve":"\u016C",
  "ubreve":"\u016D",
  "Ucirc":"\u00DB",
  "ucirc":"\u00FB",
  "Ucy":"\u0423",
  "ucy":"\u0443",
  "udarr":"\u21C5",
  "Udblac":"\u0170",
  "udblac":"\u0171",
  "udhar":"\u296E",
  "ufisht":"\u297E",
  "Ufr":"\uD835\uDD18",
  "ufr":"\uD835\uDD32",
  "Ugrave":"\u00D9",
  "ugrave":"\u00F9",
  "uHar":"\u2963",
  "uharl":"\u21BF",
  "uharr":"\u21BE",
  "uhblk":"\u2580",
  "ulcorn":"\u231C",
  "ulcorner":"\u231C",
  "ulcrop":"\u230F",
  "ultri":"\u25F8",
  "Umacr":"\u016A",
  "umacr":"\u016B",
  "uml":"\u00A8",
  "UnderBar":"\u005F",
  "UnderBrace":"\u23DF",
  "UnderBracket":"\u23B5",
  "UnderParenthesis":"\u23DD",
  "Union":"\u22C3",
  "UnionPlus":"\u228E",
  "Uogon":"\u0172",
  "uogon":"\u0173",
  "Uopf":"\uD835\uDD4C",
  "uopf":"\uD835\uDD66",
  "UpArrow":"\u2191",
  "Uparrow":"\u21D1",
  "uparrow":"\u2191",
  "UpArrowBar":"\u2912",
  "UpArrowDownArrow":"\u21C5",
  "UpDownArrow":"\u2195",
  "Updownarrow":"\u21D5",
  "updownarrow":"\u2195",
  "UpEquilibrium":"\u296E",
  "upharpoonleft":"\u21BF",
  "upharpoonright":"\u21BE",
  "uplus":"\u228E",
  "UpperLeftArrow":"\u2196",
  "UpperRightArrow":"\u2197",
  "Upsi":"\u03D2",
  "upsi":"\u03C5",
  "upsih":"\u03D2",
  "Upsilon":"\u03A5",
  "upsilon":"\u03C5",
  "UpTee":"\u22A5",
  "UpTeeArrow":"\u21A5",
  "upuparrows":"\u21C8",
  "urcorn":"\u231D",
  "urcorner":"\u231D",
  "urcrop":"\u230E",
  "Uring":"\u016E",
  "uring":"\u016F",
  "urtri":"\u25F9",
  "Uscr":"\uD835\uDCB0",
  "uscr":"\uD835\uDCCA",
  "utdot":"\u22F0",
  "Utilde":"\u0168",
  "utilde":"\u0169",
  "utri":"\u25B5",
  "utrif":"\u25B4",
  "uuarr":"\u21C8",
  "Uuml":"\u00DC",
  "uuml":"\u00FC",
  "uwangle":"\u29A7",
  "vangrt":"\u299C",
  "varepsilon":"\u03F5",
  "varkappa":"\u03F0",
  "varnothing":"\u2205",
  "varphi":"\u03D5",
  "varpi":"\u03D6",
  "varpropto":"\u221D",
  "vArr":"\u21D5",
  "varr":"\u2195",
  "varrho":"\u03F1",
  "varsigma":"\u03C2",
  "varsubsetneq":"\u228A\uFE00",
  "varsubsetneqq":"\u2ACB\uFE00",
  "varsupsetneq":"\u228B\uFE00",
  "varsupsetneqq":"\u2ACC\uFE00",
  "vartheta":"\u03D1",
  "vartriangleleft":"\u22B2",
  "vartriangleright":"\u22B3",
  "Vbar":"\u2AEB",
  "vBar":"\u2AE8",
  "vBarv":"\u2AE9",
  "Vcy":"\u0412",
  "vcy":"\u0432",
  "VDash":"\u22AB",
  "Vdash":"\u22A9",
  "vDash":"\u22A8",
  "vdash":"\u22A2",
  "Vdashl":"\u2AE6",
  "Vee":"\u22C1",
  "vee":"\u2228",
  "veebar":"\u22BB",
  "veeeq":"\u225A",
  "vellip":"\u22EE",
  "Verbar":"\u2016",
  "verbar":"\u007C",
  "Vert":"\u2016",
  "vert":"\u007C",
  "VerticalBar":"\u2223",
  "VerticalLine":"\u007C",
  "VerticalSeparator":"\u2758",
  "VerticalTilde":"\u2240",
  "VeryThinSpace":"\u200A",
  "Vfr":"\uD835\uDD19",
  "vfr":"\uD835\uDD33",
  "vltri":"\u22B2",
  "vnsub":"\u2282\u20D2",
  "vnsup":"\u2283\u20D2",
  "Vopf":"\uD835\uDD4D",
  "vopf":"\uD835\uDD67",
  "vprop":"\u221D",
  "vrtri":"\u22B3",
  "Vscr":"\uD835\uDCB1",
  "vscr":"\uD835\uDCCB",
  "vsubnE":"\u2ACB\uFE00",
  "vsubne":"\u228A\uFE00",
  "vsupnE":"\u2ACC\uFE00",
  "vsupne":"\u228B\uFE00",
  "Vvdash":"\u22AA",
  "vzigzag":"\u299A",
  "Wcirc":"\u0174",
  "wcirc":"\u0175",
  "wedbar":"\u2A5F",
  "Wedge":"\u22C0",
  "wedge":"\u2227",
  "wedgeq":"\u2259",
  "weierp":"\u2118",
  "Wfr":"\uD835\uDD1A",
  "wfr":"\uD835\uDD34",
  "Wopf":"\uD835\uDD4E",
  "wopf":"\uD835\uDD68",
  "wp":"\u2118",
  "wr":"\u2240",
  "wreath":"\u2240",
  "Wscr":"\uD835\uDCB2",
  "wscr":"\uD835\uDCCC",
  "xcap":"\u22C2",
  "xcirc":"\u25EF",
  "xcup":"\u22C3",
  "xdtri":"\u25BD",
  "Xfr":"\uD835\uDD1B",
  "xfr":"\uD835\uDD35",
  "xhArr":"\u27FA",
  "xharr":"\u27F7",
  "Xi":"\u039E",
  "xi":"\u03BE",
  "xlArr":"\u27F8",
  "xlarr":"\u27F5",
  "xmap":"\u27FC",
  "xnis":"\u22FB",
  "xodot":"\u2A00",
  "Xopf":"\uD835\uDD4F",
  "xopf":"\uD835\uDD69",
  "xoplus":"\u2A01",
  "xotime":"\u2A02",
  "xrArr":"\u27F9",
  "xrarr":"\u27F6",
  "Xscr":"\uD835\uDCB3",
  "xscr":"\uD835\uDCCD",
  "xsqcup":"\u2A06",
  "xuplus":"\u2A04",
  "xutri":"\u25B3",
  "xvee":"\u22C1",
  "xwedge":"\u22C0",
  "Yacute":"\u00DD",
  "yacute":"\u00FD",
  "YAcy":"\u042F",
  "yacy":"\u044F",
  "Ycirc":"\u0176",
  "ycirc":"\u0177",
  "Ycy":"\u042B",
  "ycy":"\u044B",
  "yen":"\u00A5",
  "Yfr":"\uD835\uDD1C",
  "yfr":"\uD835\uDD36",
  "YIcy":"\u0407",
  "yicy":"\u0457",
  "Yopf":"\uD835\uDD50",
  "yopf":"\uD835\uDD6A",
  "Yscr":"\uD835\uDCB4",
  "yscr":"\uD835\uDCCE",
  "YUcy":"\u042E",
  "yucy":"\u044E",
  "Yuml":"\u0178",
  "yuml":"\u00FF",
  "Zacute":"\u0179",
  "zacute":"\u017A",
  "Zcaron":"\u017D",
  "zcaron":"\u017E",
  "Zcy":"\u0417",
  "zcy":"\u0437",
  "Zdot":"\u017B",
  "zdot":"\u017C",
  "zeetrf":"\u2128",
  "ZeroWidthSpace":"\u200B",
  "Zeta":"\u0396",
  "zeta":"\u03B6",
  "Zfr":"\u2128",
  "zfr":"\uD835\uDD37",
  "ZHcy":"\u0416",
  "zhcy":"\u0436",
  "zigrarr":"\u21DD",
  "Zopf":"\u2124",
  "zopf":"\uD835\uDD6B",
  "Zscr":"\uD835\uDCB5",
  "zscr":"\uD835\uDCCF",
  "zwj":"\u200D",
  "zwnj":"\u200C"
};

},{}],3:[function(require,module,exports){
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks

'use strict';

var html_blocks = {};

[
  'article',
  'aside',
  'button',
  'blockquote',
  'body',
  'canvas',
  'caption',
  'col',
  'colgroup',
  'dd',
  'div',
  'dl',
  'dt',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'iframe',
  'li',
  'map',
  'object',
  'ol',
  'output',
  'p',
  'pre',
  'progress',
  'script',
  'section',
  'style',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'tr',
  'thead',
  'ul',
  'video'
].forEach(function (name) { html_blocks[name] = true; });


module.exports = html_blocks;

},{}],4:[function(require,module,exports){
// Regexps to match html elements

'use strict';


function replace(regex, options) {
  regex = regex.source;
  options = options || '';

  return function self(name, val) {
    if (!name) {
      return new RegExp(regex, options);
    }
    val = val.source || val;
    regex = regex.replace(name, val);
    return self;
  };
}


var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;

var unquoted      = /[^"'=<>`\x00-\x20]+/;
var single_quoted = /'[^']*'/;
var double_quoted = /"[^"]*"/;

/*eslint no-spaced-func:0*/
var attr_value  = replace(/(?:unquoted|single_quoted|double_quoted)/)
                    ('unquoted', unquoted)
                    ('single_quoted', single_quoted)
                    ('double_quoted', double_quoted)
                    ();

var attribute   = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
                    ('attr_name', attr_name)
                    ('attr_value', attr_value)
                    ();

var open_tag    = replace(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)
                    ('attribute', attribute)
                    ();

var close_tag   = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
var comment     = /<!--([^-]+|[-][^-]+)*-->/;
var processing  = /<[?].*?[?]>/;
var declaration = /<![A-Z]+\s+[^>]*>/;
var cdata       = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/;

var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
  ('open_tag', open_tag)
  ('close_tag', close_tag)
  ('comment', comment)
  ('processing', processing)
  ('declaration', declaration)
  ('cdata', cdata)
  ();


module.exports.HTML_TAG_RE = HTML_TAG_RE;

},{}],5:[function(require,module,exports){
// List of valid url schemas, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#autolinks

'use strict';


module.exports = [
  'coap',
  'doi',
  'javascript',
  'aaa',
  'aaas',
  'about',
  'acap',
  'cap',
  'cid',
  'crid',
  'data',
  'dav',
  'dict',
  'dns',
  'file',
  'ftp',
  'geo',
  'go',
  'gopher',
  'h323',
  'http',
  'https',
  'iax',
  'icap',
  'im',
  'imap',
  'info',
  'ipp',
  'iris',
  'iris.beep',
  'iris.xpc',
  'iris.xpcs',
  'iris.lwz',
  'ldap',
  'mailto',
  'mid',
  'msrp',
  'msrps',
  'mtqp',
  'mupdate',
  'news',
  'nfs',
  'ni',
  'nih',
  'nntp',
  'opaquelocktoken',
  'pop',
  'pres',
  'rtsp',
  'service',
  'session',
  'shttp',
  'sieve',
  'sip',
  'sips',
  'sms',
  'snmp',
  'soap.beep',
  'soap.beeps',
  'tag',
  'tel',
  'telnet',
  'tftp',
  'thismessage',
  'tn3270',
  'tip',
  'tv',
  'urn',
  'vemmi',
  'ws',
  'wss',
  'xcon',
  'xcon-userid',
  'xmlrpc.beep',
  'xmlrpc.beeps',
  'xmpp',
  'z39.50r',
  'z39.50s',
  'adiumxtra',
  'afp',
  'afs',
  'aim',
  'apt',
  'attachment',
  'aw',
  'beshare',
  'bitcoin',
  'bolo',
  'callto',
  'chrome',
  'chrome-extension',
  'com-eventbrite-attendee',
  'content',
  'cvs',
  'dlna-playsingle',
  'dlna-playcontainer',
  'dtn',
  'dvb',
  'ed2k',
  'facetime',
  'feed',
  'finger',
  'fish',
  'gg',
  'git',
  'gizmoproject',
  'gtalk',
  'hcp',
  'icon',
  'ipn',
  'irc',
  'irc6',
  'ircs',
  'itms',
  'jar',
  'jms',
  'keyparc',
  'lastfm',
  'ldaps',
  'magnet',
  'maps',
  'market',
  'message',
  'mms',
  'ms-help',
  'msnim',
  'mumble',
  'mvn',
  'notes',
  'oid',
  'palm',
  'paparazzi',
  'platform',
  'proxy',
  'psyc',
  'query',
  'res',
  'resource',
  'rmi',
  'rsync',
  'rtmp',
  'secondlife',
  'sftp',
  'sgn',
  'skype',
  'smb',
  'soldat',
  'spotify',
  'ssh',
  'steam',
  'svn',
  'teamspeak',
  'things',
  'udp',
  'unreal',
  'ut2004',
  'ventrilo',
  'view-source',
  'webcal',
  'wtai',
  'wyciwyg',
  'xfire',
  'xri',
  'ymsgr'
];

},{}],6:[function(require,module,exports){
// Utilities
//
'use strict';


function _class(obj) { return Object.prototype.toString.call(obj); }

function isString(obj) { return _class(obj) === '[object String]'; }

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function has(object, key) {
  return object ? _hasOwnProperty.call(object, key) : false;
}

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

////////////////////////////////////////////////////////////////////////////////

var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}

var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
var entities = require('./entities');

function replaceEntityPattern(match, name) {
  var code = 0;

  if (has(entities, name)) {
    return entities[name];
  } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16)
    :
      parseInt(name.slice(1), 10);
    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }
  return match;
}

function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

////////////////////////////////////////////////////////////////////////////////

exports.assign            = assign;
exports.isString          = isString;
exports.has               = has;
exports.unescapeMd        = unescapeMd;
exports.isValidEntityCode = isValidEntityCode;
exports.fromCodePoint     = fromCodePoint;
exports.replaceEntities   = replaceEntities;
exports.escapeHtml        = escapeHtml;

},{"./entities":2}],7:[function(require,module,exports){
// Commonmark default options

'use strict';


module.exports = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'block',
        'inline',
        'references',
        'abbr2'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fences',
        'heading',
        'hr',
        'htmlblock',
        'lheading',
        'list',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'htmltag',
        'links',
        'newline',
        'text'
      ]
    }
  }
};

},{}],8:[function(require,module,exports){
// Remarkable default options

'use strict';


module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'block',
        'inline',
        'references',
        'replacements',
        'linkify',
        'smartquotes',
        'references',
        'abbr2',
        'footnote_tail'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fences',
        'heading',
        'hr',
        'htmlblock',
        'lheading',
        'list',
        'paragraph',
        'table'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'del',
        'emphasis',
        'entity',
        'escape',
        'footnote_ref',
        'htmltag',
        'links',
        'newline',
        'text'
      ]
    }
  }
};

},{}],9:[function(require,module,exports){
// Remarkable default options

'use strict';


module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    // Don't restrict core/block/inline rules
    core: {},
    block: {},
    inline: {}
  }
};

},{}],10:[function(require,module,exports){
'use strict';


var replaceEntities = require('../common/utils').replaceEntities;


module.exports = function normalizeLink(url) {
  var normalized = replaceEntities(url);

  // We don't care much about result of mailformed URIs,
  // but shoud not throw exception.
  try {
    normalized = decodeURI(normalized);
  } catch (__) {}

  return encodeURI(normalized);
};

},{"../common/utils":6}],11:[function(require,module,exports){
'use strict';

module.exports = function normalizeReference(str) {
  // use .toUpperCase() instead of .toLowerCase()
  // here to avoid a conflict with Object.prototype
  // members (most notably, `__proto__`)
  return str.trim().replace(/\s+/g, ' ').toUpperCase();
};

},{}],12:[function(require,module,exports){
// Parse link destination
//
// on success it returns a string and updates state.pos;
// on failure it returns null
//
'use strict';


var normalizeLink = require('./normalize_link');
var unescapeMd    = require('../common/utils').unescapeMd;


module.exports = function parseLinkDestination(state, pos) {
  var code, level, link,
      start = pos,
      max = state.posMax;

  if (state.src.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = state.src.charCodeAt(pos);
      if (code === 0x0A /* \n */) { return false; }
      if (code === 0x3E /* > */) {
        link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
        if (!state.parser.validateLink(link)) { return false; }
        state.pos = pos + 1;
        state.linkContent = link;
        return true;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return false;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = state.src.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
      if (level > 1) { break; }
    }

    if (code === 0x29 /* ) */) {
      level--;
      if (level < 0) { break; }
    }

    pos++;
  }

  if (start === pos) { return false; }

  link = normalizeLink(unescapeMd(state.src.slice(start, pos)));
  if (!state.parser.validateLink(link)) { return false; }

  state.linkContent = link;
  state.pos = pos;
  return true;
};

},{"../common/utils":6,"./normalize_link":10}],13:[function(require,module,exports){
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//
'use strict';

module.exports = function parseLinkLabel(state, start) {
  var level, found, marker,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos,
      oldFlag = state.isInLabel;

  if (state.isInLabel) { return -1; }

  if (state.labelUnmatchedScopes) {
    state.labelUnmatchedScopes--;
    return -1;
  }

  state.pos = start + 1;
  state.isInLabel = true;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5B /* [ */) {
      level++;
    } else if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    state.parser.skipToken(state);
  }

  if (found) {
    labelEnd = state.pos;
    state.labelUnmatchedScopes = 0;
  } else {
    state.labelUnmatchedScopes = level - 1;
  }

  // restore old state
  state.pos = oldPos;
  state.isInLabel = oldFlag;

  return labelEnd;
};

},{}],14:[function(require,module,exports){
// Parse link title
//
// on success it returns a string and updates state.pos;
// on failure it returns null
//
'use strict';


var unescapeMd = require('../common/utils').unescapeMd;


module.exports = function parseLinkTitle(state, pos) {
  var code,
      start = pos,
      max = state.posMax,
      marker = state.src.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return false; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = state.src.charCodeAt(pos);
    if (code === marker) {
      state.pos = pos + 1;
      state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
      return true;
    }
    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    pos++;
  }

  return false;
};

},{"../common/utils":6}],15:[function(require,module,exports){
// Main perser class

'use strict';


var assign       = require('./common/utils').assign;
var isString     = require('./common/utils').isString;
var Renderer     = require('./renderer');
var ParserCore   = require('./parser_core');
var ParserBlock  = require('./parser_block');
var ParserInline = require('./parser_inline');
var Ruler        = require('./ruler');

var config = {
  'default': require('./configs/default'),
  full: require('./configs/full'),
  commonmark: require('./configs/commonmark')
};


function StateCore(self, src, env) {
  this.src = src;
  this.env = env;
  this.options = self.options;
  this.tokens = [];
  this.inlineMode = false;

  this.inline = self.inline;
  this.block = self.block;
  this.renderer = self.renderer;
  this.typographer = self.typographer;
}

// Main class
//
function Remarkable(presetName, options) {
  if (!options) {
    if (!isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }

  this.inline   = new ParserInline();
  this.block    = new ParserBlock();
  this.core     = new ParserCore();
  this.renderer = new Renderer();
  this.ruler    = new Ruler();

  this.options  = {};
  this.configure(config[presetName]);

  if (options) { this.set(options); }
}


// Set options, if you did not passed those to constructor
//
Remarkable.prototype.set = function (options) {
  assign(this.options, options);
};


// Batch loader for components rules states & options
//
Remarkable.prototype.configure = function (presets) {
  var self = this;

  if (!presets) { throw new Error('Wrong `remarkable` preset, check name/content'); }

  if (presets.options) { self.set(presets.options); }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enable(presets.components[name].rules, true);
      }
    });
  }
};


// Sugar for curried plugins init:
//
// var md = new Remarkable();
//
// md.use(plugin1)
//   .use(plugin2, opts)
//   .use(plugin3);
//
Remarkable.prototype.use = function (plugin, opts) {
  plugin(this, opts);
  return this;
};


// Parse input string, returns tokens array. Modify `env` with
// definitions data.
//
Remarkable.prototype.parse = function (src, env) {
  var state = new StateCore(this, src, env);

  this.core.process(state);

  return state.tokens;
};

// Main method that does all magic :)
//
Remarkable.prototype.render = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parse(src, env), this.options, env);
};


// Parse content as single string
//
Remarkable.prototype.parseInline = function (src, env) {
  var state = new StateCore(this, src, env);

  state.inlineMode = true;
  this.core.process(state);

  return state.tokens;
};

// Render single string, without wrapping it to paragraphs
//
Remarkable.prototype.renderInline = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parseInline(src, env), this.options, env);
};


module.exports = Remarkable;

// Expose helpers, useful for custom renderer functions
module.exports.utils = require('./common/utils');

},{"./common/utils":6,"./configs/commonmark":7,"./configs/default":8,"./configs/full":9,"./parser_block":16,"./parser_core":17,"./parser_inline":18,"./renderer":19,"./ruler":20}],16:[function(require,module,exports){
// Block parser


'use strict';


var Ruler           = require('./ruler');
var StateBlock      = require('./rules_block/state_block');


var _rules = [
  [ 'code',       require('./rules_block/code') ],
  [ 'fences',     require('./rules_block/fences'),     [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'blockquote', require('./rules_block/blockquote'), [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'hr',         require('./rules_block/hr'),         [ 'paragraph', 'blockquote', 'list' ] ],
  [ 'list',       require('./rules_block/list'),       [ 'paragraph', 'blockquote' ] ],
  [ 'footnote',   require('./rules_block/footnote'),   [ 'paragraph' ] ],
  [ 'heading',    require('./rules_block/heading'),    [ 'paragraph', 'blockquote' ] ],
  [ 'lheading',   require('./rules_block/lheading') ],
  [ 'htmlblock',  require('./rules_block/htmlblock'),  [ 'paragraph', 'blockquote' ] ],
  [ 'table',      require('./rules_block/table'),      [ 'paragraph' ] ],
  [ 'deflist',    require('./rules_block/deflist'),    [ 'paragraph' ] ],
  [ 'paragraph',  require('./rules_block/paragraph') ]
];


// Block Parser class
//
function ParserBlock() {
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
  }
}


// Generate tokens for input range
//
ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) { break; }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.tShift[line] < state.blkIndent) { break; }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) { break; }
    }

    // set state.tight iff we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;

      // two empty lines should stop the parser in list mode
      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
      state.line = line;
    }
  }
};

var TABS_SCAN_RE = /[\n\t]/g;
var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
var SPACES_RE    = /\u00a0/g;

ParserBlock.prototype.parse = function (src, options, env, outTokens) {
  var state, lineStart = 0, lastTabPos = 0;

  if (!src) { return []; }

  // Normalize spaces
  src = src.replace(SPACES_RE, ' ');

  // Normalize newlines
  src = src.replace(NEWLINES_RE, '\n');

  // Replace tabs with proper number of spaces (1..4)
  if (src.indexOf('\t') >= 0) {
    src = src.replace(TABS_SCAN_RE, function (match, offset) {
      var result;
      if (src.charCodeAt(offset) === 0x0A) {
        lineStart = offset + 1;
        lastTabPos = 0;
        return match;
      }
      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
      lastTabPos = offset - lineStart + 1;
      return result;
    });
  }

  state = new StateBlock(
    src,
    this,
    options,
    env,
    outTokens
  );

  this.tokenize(state, state.line, state.lineMax);
};


module.exports = ParserBlock;

},{"./ruler":20,"./rules_block/blockquote":21,"./rules_block/code":22,"./rules_block/deflist":23,"./rules_block/fences":24,"./rules_block/footnote":25,"./rules_block/heading":26,"./rules_block/hr":27,"./rules_block/htmlblock":28,"./rules_block/lheading":29,"./rules_block/list":30,"./rules_block/paragraph":31,"./rules_block/state_block":32,"./rules_block/table":33}],17:[function(require,module,exports){
// Class of top level (`core`)  rules
//
'use strict';


var Ruler  = require('./ruler');


var _rules = [
  [ 'block',          require('./rules_core/block')          ],
  [ 'abbr',           require('./rules_core/abbr')           ],
  [ 'references',     require('./rules_core/references')     ],
  [ 'inline',         require('./rules_core/inline')         ],
  [ 'footnote_tail',  require('./rules_core/footnote_tail')  ],
  [ 'abbr2',          require('./rules_core/abbr2')          ],
  [ 'replacements',   require('./rules_core/replacements')   ],
  [ 'smartquotes',    require('./rules_core/smartquotes')    ],
  [ 'linkify',        require('./rules_core/linkify')        ]
];


function Core() {
  this.options = {};

  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


Core.prototype.process = function (state) {
  var i, l, rules;

  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};


module.exports = Core;

},{"./ruler":20,"./rules_core/abbr":34,"./rules_core/abbr2":35,"./rules_core/block":36,"./rules_core/footnote_tail":37,"./rules_core/inline":38,"./rules_core/linkify":39,"./rules_core/references":40,"./rules_core/replacements":41,"./rules_core/smartquotes":42}],18:[function(require,module,exports){
// Inline parser

'use strict';


var Ruler           = require('./ruler');
var StateInline     = require('./rules_inline/state_inline');
var replaceEntities = require('./common/utils').replaceEntities;

////////////////////////////////////////////////////////////////////////////////
// Parser rules

var _rules = [
  [ 'text',            require('./rules_inline/text') ],
  [ 'newline',         require('./rules_inline/newline') ],
  [ 'escape',          require('./rules_inline/escape') ],
  [ 'backticks',       require('./rules_inline/backticks') ],
  [ 'del',             require('./rules_inline/del') ],
  [ 'ins',             require('./rules_inline/ins') ],
  [ 'mark',            require('./rules_inline/mark') ],
  [ 'emphasis',        require('./rules_inline/emphasis') ],
  [ 'sub',             require('./rules_inline/sub') ],
  [ 'sup',             require('./rules_inline/sup') ],
  [ 'links',           require('./rules_inline/links') ],
  [ 'footnote_inline', require('./rules_inline/footnote_inline') ],
  [ 'footnote_ref',    require('./rules_inline/footnote_ref') ],
  [ 'autolink',        require('./rules_inline/autolink') ],
  [ 'htmltag',         require('./rules_inline/htmltag') ],
  [ 'entity',          require('./rules_inline/entity') ]
];


var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file' ];

function validateLink(url) {
  var str = url.trim().toLowerCase();

  // Care about digital entities "javascript&#x3A;alert(1)"
  str = replaceEntities(str);

  if (str.indexOf(':') >= 0 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) >= 0) {
    return false;
  }
  return true;
}

// Inline Parser class
//
function ParserInline() {
  // By default CommonMark allows too much in links
  // If you need to restrict it - override this with your validator.
  this.validateLink = validateLink;

  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken = function (state) {
  var i, cached_pos, pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length;

  if ((cached_pos = state.cacheGet(pos)) > 0) {
    state.pos = cached_pos;
    return;
  }

  for (i = 0; i < len; i++) {
    if (rules[i](state, true)) {
      state.cacheSet(pos, state.pos);
      return;
    }
  }

  state.pos++;
  state.cacheSet(pos, state.pos);
};


// Generate tokens for input range
//
ParserInline.prototype.tokenize = function (state) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax;

  while (state.pos < end) {

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, false);
      if (ok) { break; }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};


// Parse input string.
//
ParserInline.prototype.parse = function (str, options, env, outTokens) {
  var state = new StateInline(str, this, options, env, outTokens);

  this.tokenize(state);
};


module.exports = ParserInline;

},{"./common/utils":6,"./ruler":20,"./rules_inline/autolink":43,"./rules_inline/backticks":44,"./rules_inline/del":45,"./rules_inline/emphasis":46,"./rules_inline/entity":47,"./rules_inline/escape":48,"./rules_inline/footnote_inline":49,"./rules_inline/footnote_ref":50,"./rules_inline/htmltag":51,"./rules_inline/ins":52,"./rules_inline/links":53,"./rules_inline/mark":54,"./rules_inline/newline":55,"./rules_inline/state_inline":56,"./rules_inline/sub":57,"./rules_inline/sup":58,"./rules_inline/text":59}],19:[function(require,module,exports){
'use strict';


var assign          = require('./common/utils').assign;
var has             = require('./common/utils').has;
var unescapeMd      = require('./common/utils').unescapeMd;
var replaceEntities = require('./common/utils').replaceEntities;
var escapeHtml      = require('./common/utils').escapeHtml;


////////////////////////////////////////////////////////////////////////////////
// Helpers

function nextToken(tokens, idx) {
  if (++idx >= tokens.length - 2) { return idx; }
  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
      (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
      (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
    return nextToken(tokens, idx + 2);
  }
  return idx;
}


// check if we need to hide '\n' before next token
function getBreak(tokens, idx) {
  idx = nextToken(tokens, idx);
  if (idx < tokens.length &&
      tokens[idx].type === 'list_item_close') {
    return '';
  }

  return '\n';
}

////////////////////////////////////////////////////////////////////////////////

var rules = {};



rules.blockquote_open = function (/* tokens, idx, options, env */) {
  return '<blockquote>\n';
};
rules.blockquote_close = function (tokens, idx /*, options, env */) {
  return '</blockquote>' + getBreak(tokens, idx);
};


rules.code = function (tokens, idx /*, options, env */) {
  if (tokens[idx].block) {
    return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
  }

  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
};


rules.fence = function (tokens, idx, options, env, self) {
  var token = tokens[idx];
  var langClass = '';
  var langPrefix = options.langPrefix;
  var langName = '', fenceName;
  var highlighted;

  if (token.params) {

    //
    // ```foo bar
    //
    // Try custom renderer "foo" first. That will simplify overwrite
    // for diagrams, latex, and any other fenced block with custom look
    //

    fenceName = token.params.split(/\s+/g)[0];

    if (has(self.rules.fence_custom, fenceName)) {
      return self.rules.fence_custom[fenceName](tokens, idx, options, env, self);
    }

    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
    langClass = ' class="' + langPrefix + langName + '"';
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }


  return  '<pre><code' + langClass + '>'
        + highlighted
        + '</code></pre>' + getBreak(tokens, idx);
};

rules.fence_custom = {};

rules.heading_open = function (tokens, idx /*, options, env */) {
  return '<h' + tokens[idx].hLevel + '>';
};
rules.heading_close = function (tokens, idx /*, options, env */) {
  return '</h' + tokens[idx].hLevel + '>\n';
};


rules.hr = function (tokens, idx, options /*, env */) {
  return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
};


rules.bullet_list_open = function (/* tokens, idx, options, env */) {
  return '<ul>\n';
};
rules.bullet_list_close = function (tokens, idx /*, options, env */) {
  return '</ul>' + getBreak(tokens, idx);
};
rules.list_item_open = function (/* tokens, idx, options, env */) {
  return '<li>';
};
rules.list_item_close = function (/* tokens, idx, options, env */) {
  return '</li>\n';
};
rules.ordered_list_open = function (tokens, idx /*, options, env */) {
  var token = tokens[idx];
  return '<ol'
    + (token.order > 1 ? ' start="' + token.order + '"' : '')
    + '>\n';
};
rules.ordered_list_close = function (tokens, idx /*, options, env */) {
  return '</ol>' + getBreak(tokens, idx);
};


rules.paragraph_open = function (tokens, idx /*, options, env */) {
  return tokens[idx].tight ? '' : '<p>';
};
rules.paragraph_close = function (tokens, idx /*, options, env */) {
  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
  return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
};


rules.link_open = function (tokens, idx /*, options, env */) {
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + '>';
};
rules.link_close = function (/* tokens, idx, options, env */) {
  return '</a>';
};


rules.image = function (tokens, idx, options /*, env */) {
  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(tokens[idx].alt)) : '') + '"';
  var suffix = options.xhtmlOut ? ' /' : '';
  return '<img' + src + alt + title + suffix + '>';
};


rules.table_open = function (/* tokens, idx, options, env */) {
  return '<table>\n';
};
rules.table_close = function (/* tokens, idx, options, env */) {
  return '</table>\n';
};
rules.thead_open = function (/* tokens, idx, options, env */) {
  return '<thead>\n';
};
rules.thead_close = function (/* tokens, idx, options, env */) {
  return '</thead>\n';
};
rules.tbody_open = function (/* tokens, idx, options, env */) {
  return '<tbody>\n';
};
rules.tbody_close = function (/* tokens, idx, options, env */) {
  return '</tbody>\n';
};
rules.tr_open = function (/* tokens, idx, options, env */) {
  return '<tr>';
};
rules.tr_close = function (/* tokens, idx, options, env */) {
  return '</tr>\n';
};
rules.th_open = function (tokens, idx /*, options, env */) {
  var token = tokens[idx];
  return '<th'
    + (token.align ? ' style="text-align:' + token.align + '"' : '')
    + '>';
};
rules.th_close = function (/* tokens, idx, options, env */) {
  return '</th>';
};
rules.td_open = function (tokens, idx /*, options, env */) {
  var token = tokens[idx];
  return '<td'
    + (token.align ? ' style="text-align:' + token.align + '"' : '')
    + '>';
};
rules.td_close = function (/* tokens, idx, options, env */) {
  return '</td>';
};


rules.strong_open = function (/* tokens, idx, options, env */) {
  return '<strong>';
};
rules.strong_close = function (/* tokens, idx, options, env */) {
  return '</strong>';
};
rules.em_open = function (/* tokens, idx, options, env */) {
  return '<em>';
};
rules.em_close = function (/* tokens, idx, options, env */) {
  return '</em>';
};


rules.del_open = function (/* tokens, idx, options, env */) {
  return '<del>';
};
rules.del_close = function (/* tokens, idx, options, env */) {
  return '</del>';
};


rules.ins_open = function (/* tokens, idx, options, env */) {
  return '<ins>';
};
rules.ins_close = function (/* tokens, idx, options, env */) {
  return '</ins>';
};


rules.mark_open = function (/* tokens, idx, options, env */) {
  return '<mark>';
};
rules.mark_close = function (/* tokens, idx, options, env */) {
  return '</mark>';
};


rules.sub = function (tokens, idx /*, options, env */) {
  return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
};
rules.sup = function (tokens, idx /*, options, env */) {
  return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
};


rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};


rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};


rules.htmlblock = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
rules.htmltag = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};


rules.abbr_open = function (tokens, idx /*, options, env */) {
  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
};
rules.abbr_close = function (/* tokens, idx, options, env */) {
  return '</abbr>';
};


rules.footnote_ref = function (tokens, idx) {
  var n = Number(tokens[idx].id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
};
rules.footnote_block_open = function (tokens, idx, options) {
  return (options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') +
         '<section class="footnotes">\n' +
         '<ol class="footnotes-list">\n';
};
rules.footnote_block_close = function () {
  return '</ol>\n</section>\n';
};
rules.footnote_open = function (tokens, idx) {
  var id = Number(tokens[idx].id + 1).toString();
  return '<li id="fn' + id + '"  class="footnote-item">';
};
rules.footnote_close = function () {
  return '</li>\n';
};
rules.footnote_anchor = function (tokens, idx) {
  var n = Number(tokens[idx].id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
};


rules.dl_open = function() {
  return '<dl>\n';
};
rules.dt_open = function() {
  return '<dt>';
};
rules.dd_open = function() {
  return '<dd>';
};
rules.dl_close = function() {
  return '</dl>\n';
};
rules.dt_close = function() {
  return '</dt>\n';
};
rules.dd_close = function() {
  return '</dd>\n';
};


// Renderer class
function Renderer() {
  // Clone rules object to allow local modifications
  this.rules = assign({}, rules);
  // exported helper, for custom rules only
  this.getBreak = getBreak;
}


Renderer.prototype.renderInline = function (tokens, options, env) {
  var result = '',
      _rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    result += _rules[tokens[i].type](tokens, i, options, env, this);
  }

  return result;
};


Renderer.prototype.render = function (tokens, options, env) {
  var i, len,
      result = '',
      _rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else {
      result += _rules[tokens[i].type](tokens, i, options, env, this);
    }
  }

  return result;
};

module.exports = Renderer;

},{"./common/utils":6}],20:[function(require,module,exports){
// Ruler is helper class to build responsibility chains from parse rules.
// It allows:
//
// - easy stack rules chains
// - getting main chain and named chains content (as arrays of functions)
//
'use strict';


////////////////////////////////////////////////////////////////////////////////

function Ruler() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly


// Find rule index by name
//
Ruler.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};


// Build rules lookup cache
//
Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return; }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      if (chain && rule.alt.indexOf(chain) < 0) { return; }

      self.__cache__[chain].push(rule.fn);
    });
  });
};


////////////////////////////////////////////////////////////////////////////////
// Public methods


// Replace rule function
//
Ruler.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};


// Add rule to chain before one with given name.
//
Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


// Add rule to chain after one with given name.
//
Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

// Add rule to the end of chain.
//
Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


// Enable list of rules by names. If `strict` is true, then all non listed
// rules will be disabled.
//
Ruler.prototype.enable = function (list, strict) {
  if (!Array.isArray(list)) {
    list = [ list ];
  }

  // In strict mode disable all existing rules first
  if (strict) {
    this.__rules__.forEach(function (rule) {
      rule.enabled = false;
    });
  }

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) { throw new Error('Rules manager: invalid rule name ' + name); }
    this.__rules__[idx].enabled = true;

  }, this);

  this.__cache__ = null;
};


// Disable list of rules by names.
//
Ruler.prototype.disable = function (list) {
  if (!Array.isArray(list)) {
    list = [ list ];
  }

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) { throw new Error('Rules manager: invalid rule name ' + name); }
    this.__rules__[idx].enabled = false;

  }, this);

  this.__cache__ = null;
};


// Get rules list as array of functions.
//
Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }

  return this.__cache__[chainName];
};

module.exports = Ruler;

},{}],21:[function(require,module,exports){
// Block quotes

'use strict';


module.exports = function blockquote(state, startLine, endLine, silent) {
  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
      terminatorRules,
      i, l, terminate,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos > max) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

  if (state.level >= state.options.maxNesting) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  // skip one optional space after '>'
  if (state.src.charCodeAt(pos) === 0x20) { pos++; }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  oldBMarks = [ state.bMarks[startLine] ];
  state.bMarks[startLine] = pos;

  // check if we have an empty blockquote
  pos = pos < max ? state.skipSpaces(pos) : pos;
  lastLineEmpty = pos >= max;

  oldTShift = [ state.tShift[startLine] ];
  state.tShift[startLine] = pos - state.bMarks[startLine];

  terminatorRules = state.parser.ruler.getRules('blockquote');

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
      // This line is inside the blockquote.

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20) { pos++; }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      pos = pos < max ? state.skipSpaces(pos) : pos;
      lastLineEmpty = pos >= max;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    oldBMarks.push(state.bMarks[nextLine]);
    oldTShift.push(state.tShift[nextLine]);

    // A negative number means that this is a paragraph continuation;
    //
    // Any negative number will do the job here, but it's better for it
    // to be large enough to make any bugs obvious.
    state.tShift[nextLine] = -1337;
  }

  oldParentType = state.parentType;
  state.parentType = 'blockquote';
  state.tokens.push({
    type: 'blockquote_open',
    lines: lines = [ startLine, 0 ],
    level: state.level++
  });
  state.parser.tokenize(state, startLine, nextLine);
  state.tokens.push({
    type: 'blockquote_close',
    level: --state.level
  });
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
  }
  state.blkIndent = oldIndent;

  return true;
};

},{}],22:[function(require,module,exports){
// Code block (4 spaces padded)

'use strict';


module.exports = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last;

  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = nextLine;
  state.tokens.push({
    type: 'code',
    content: state.getLines(startLine, last, 4 + state.blkIndent, true),
    block: true,
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],23:[function(require,module,exports){
// Definition lists

'use strict';


// Search `[:~][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipMarker(state, line) {
  var pos, marker,
      start = state.bMarks[line] + state.tShift[line],
      max = state.eMarks[line];

  if (start >= max) { return -1; }

  // Check bullet
  marker = state.src.charCodeAt(start++);
  if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }

  pos = state.skipSpaces(start);

  // require space after ":"
  if (start === pos) { return -1; }

  // no empty definitions, e.g. "  : "
  if (pos >= max) { return -1; }

  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].tight = true;
      state.tokens[i].tight = true;
      i += 2;
    }
  }
}

module.exports = function deflist(state, startLine, endLine, silent) {
  var contentStart,
      ddLine,
      dtLine,
      itemLines,
      listLines,
      listTokIdx,
      nextLine,
      oldIndent,
      oldDDIndent,
      oldParentType,
      oldTShift,
      oldTight,
      prevEmptyEnd,
      tight;

  if (silent) {
    // quirk: validation mode validates a dd block only, not a whole deflist
    if (state.ddIndent < 0) { return false; }
    return skipMarker(state, startLine) >= 0;
  }

  nextLine = startLine + 1;
  if (state.isEmpty(nextLine)) {
    if (++nextLine > endLine) { return false; }
  }

  if (state.tShift[nextLine] < state.blkIndent) { return false; }
  contentStart = skipMarker(state, nextLine);
  if (contentStart < 0) { return false; }

  if (state.level >= state.options.maxNesting) { return false; }

  // Start list
  listTokIdx = state.tokens.length;

  state.tokens.push({
    type: 'dl_open',
    lines: listLines = [ startLine, 0 ],
    level: state.level++
  });

  //
  // Iterate list items
  //

  dtLine = startLine;
  ddLine = nextLine;

  // One definition list can contain multiple DTs,
  // and one DT can be followed by multiple DDs.
  //
  // Thus, there is two loops here, and label is
  // needed to break out of the second one
  //
  /*eslint no-labels:0,block-scoped-var:0*/
  OUTER:
  for (;;) {
    tight = true;
    prevEmptyEnd = false;

    state.tokens.push({
      type: 'dt_open',
      lines: [ dtLine, dtLine ],
      level: state.level++
    });
    state.tokens.push({
      type: 'inline',
      content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
      level: state.level + 1,
      lines: [ dtLine, dtLine ],
      children: []
    });
    state.tokens.push({
      type: 'dt_close',
      level: --state.level
    });

    for (;;) {
      state.tokens.push({
        type: 'dd_open',
        lines: itemLines = [ nextLine, 0 ],
        level: state.level++
      });

      oldTight = state.tight;
      oldDDIndent = state.ddIndent;
      oldIndent = state.blkIndent;
      oldTShift = state.tShift[ddLine];
      oldParentType = state.parentType;
      state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
      state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
      state.tight = true;
      state.parentType = 'deflist';

      state.parser.tokenize(state, ddLine, endLine, true);

      // If any of list item is tight, mark list as tight
      if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      // Item become loose if finish with empty line,
      // but we should filter last element, because it means list finish
      prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);

      state.tShift[ddLine] = oldTShift;
      state.tight = oldTight;
      state.parentType = oldParentType;
      state.blkIndent = oldIndent;
      state.ddIndent = oldDDIndent;

      state.tokens.push({
        type: 'dd_close',
        level: --state.level
      });

      itemLines[1] = nextLine = state.line;

      if (nextLine >= endLine) { break OUTER; }

      if (state.tShift[nextLine] < state.blkIndent) { break OUTER; }
      contentStart = skipMarker(state, nextLine);
      if (contentStart < 0) { break; }

      ddLine = nextLine;

      // go to the next loop iteration:
      // insert DD tag and repeat checking
    }

    if (nextLine >= endLine) { break; }
    dtLine = nextLine;

    if (state.isEmpty(dtLine)) { break; }
    if (state.tShift[dtLine] < state.blkIndent) { break; }

    ddLine = dtLine + 1;
    if (ddLine >= endLine) { break; }
    if (state.isEmpty(ddLine)) { ddLine++; }
    if (ddLine >= endLine) { break; }

    if (state.tShift[ddLine] < state.blkIndent) { break; }
    contentStart = skipMarker(state, ddLine);
    if (contentStart < 0) { break; }

    // go to the next loop iteration:
    // insert DT and DD tags and repeat checking
  }

  // Finilize list
  state.tokens.push({
    type: 'dl_close',
    level: --state.level
  });
  listLines[1] = nextLine;

  state.line = nextLine;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};

},{}],24:[function(require,module,exports){
// fences (``` lang, ~~~ lang)

'use strict';


module.exports = function fences(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  params = state.src.slice(pos, max).trim();

  if (params.indexOf('`') >= 0) { return false; }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.tShift[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.tShift[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);
  state.tokens.push({
    type: 'fence',
    params: params,
    content: state.getLines(startLine + 1, nextLine, len, true),
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],25:[function(require,module,exports){
// Process footnote reference list

'use strict';


module.exports = function footnote(state, startLine, endLine, silent) {
  var oldBMark, oldTShift, oldParentType, pos, label,
      start = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // line should be at least 5 chars - "[^x]:"
  if (start + 4 > max) { return false; }

  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  for (pos = start + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x20) { return false; }
    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
      break;
    }
  }

  if (pos === start + 2) { return false; } // no empty footnote labels
  if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
  if (silent) { return true; }
  pos++;

  if (!state.env.footnotes) { state.env.footnotes = {}; }
  if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
  label = state.src.slice(start + 2, pos - 2);
  state.env.footnotes.refs[':' + label] = -1;

  state.tokens.push({
    type: 'footnote_reference_open',
    label: label,
    level: state.level++
  });

  oldBMark = state.bMarks[startLine];
  oldTShift = state.tShift[startLine];
  oldParentType = state.parentType;
  state.tShift[startLine] = state.skipSpaces(pos) - pos;
  state.bMarks[startLine] = pos;
  state.blkIndent += 4;
  state.parentType = 'footnote';

  if (state.tShift[startLine] < state.blkIndent) {
    state.tShift[startLine] += state.blkIndent;
    state.bMarks[startLine] -= state.blkIndent;
  }

  state.parser.tokenize(state, startLine, endLine, true);

  state.parentType = oldParentType;
  state.blkIndent -= 4;
  state.tShift[startLine] = oldTShift;
  state.bMarks[startLine] = oldBMark;

  state.tokens.push({
    type: 'footnote_reference_close',
    level: --state.level
  });

  return true;
};

},{}],26:[function(require,module,exports){
// heading (#, ##, ...)

'use strict';


module.exports = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos >= max) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipCharsBack(max, 0x20, pos); // space
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
    max = tmp;
  }

  state.line = startLine + 1;

  state.tokens.push({ type: 'heading_open',
    hLevel: level,
    lines: [ startLine, state.line ],
    level: state.level
  });

  // only if header is not empty
  if (pos < max) {
    state.tokens.push({
      type: 'inline',
      content: state.src.slice(pos, max).trim(),
      level: state.level + 1,
      lines: [ startLine, state.line ],
      children: []
    });
  }
  state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });

  return true;
};

},{}],27:[function(require,module,exports){
// Horizontal rule

'use strict';


module.exports = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch,
      pos = state.bMarks[startLine],
      max = state.eMarks[startLine];

  pos += state.tShift[startLine];

  if (pos > max) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 one

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && ch !== 0x20/* space */) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;
  state.tokens.push({
    type: 'hr',
    lines: [ startLine, state.line ],
    level: state.level
  });

  return true;
};

},{}],28:[function(require,module,exports){
// HTML block

'use strict';


var block_names = require('../common/html_blocks');


var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;

function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}

module.exports = function htmlblock(state, startLine, endLine, silent) {
  var ch, match, nextLine,
      pos = state.bMarks[startLine],
      max = state.eMarks[startLine],
      shift = state.tShift[startLine];

  pos += shift;

  if (!state.options.html) { return false; }

  if (shift > 3 || pos + 2 >= max) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  ch = state.src.charCodeAt(pos + 1);

  if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
    // Directive start / comment start / processing instruction start
    if (silent) { return true; }

  } else if (ch === 0x2F/* / */ || isLetter(ch)) {

    // Probably start or end of tag
    if (ch === 0x2F/* \ */) {
      // closing tag
      match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
      if (!match) { return false; }
    } else {
      // opening tag
      match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
      if (!match) { return false; }
    }
    // Make sure tag name is valid
    if (block_names[match[1].toLowerCase()] !== true) { return false; }
    if (silent) { return true; }

  } else {
    return false;
  }

  // If we are here - we detected HTML block.
  // Let's roll down till empty line (block end).
  nextLine = startLine + 1;
  while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
    nextLine++;
  }

  state.line = nextLine;
  state.tokens.push({
    type: 'htmlblock',
    level: state.level,
    lines: [ startLine, state.line ],
    content: state.getLines(startLine, nextLine, 0, true)
  });

  return true;
};

},{"../common/html_blocks":3}],29:[function(require,module,exports){
// lheading (---, ===)

'use strict';


module.exports = function lheading(state, startLine, endLine/*, silent*/) {
  var marker, pos, max,
      next = startLine + 1;

  if (next >= endLine) { return false; }
  if (state.tShift[next] < state.blkIndent) { return false; }

  // Scan next line

  if (state.tShift[next] - state.blkIndent > 3) { return false; }

  pos = state.bMarks[next] + state.tShift[next];
  max = state.eMarks[next];

  if (pos >= max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }

  pos = state.skipChars(pos, marker);

  pos = state.skipSpaces(pos);

  if (pos < max) { return false; }

  pos = state.bMarks[startLine] + state.tShift[startLine];

  state.line = next + 1;
  state.tokens.push({
    type: 'heading_open',
    hLevel: marker === 0x3D/* = */ ? 1 : 2,
    lines: [ startLine, state.line ],
    level: state.level
  });
  state.tokens.push({
    type: 'inline',
    content: state.src.slice(pos, state.eMarks[startLine]).trim(),
    level: state.level + 1,
    lines: [ startLine, state.line - 1 ],
    children: []
  });
  state.tokens.push({
    type: 'heading_close',
    hLevel: marker === 0x3D/* = */ ? 1 : 2,
    level: state.level
  });

  return true;
};

},{}],30:[function(require,module,exports){
// Lists

'use strict';


// Search `[-+*][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  if (pos >= max) { return -1; }

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
    // " 1.test " - is not a list item
    return -1;
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos arter marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
    // " 1.test " - is not a list item
    return -1;
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].tight = true;
      state.tokens[i].tight = true;
      i += 2;
    }
  }
}


module.exports = function list(state, startLine, endLine, silent) {
  var nextLine,
      indent,
      oldTShift,
      oldIndent,
      oldTight,
      oldParentType,
      start,
      posAfterMarker,
      max,
      indentAfterMarker,
      markerValue,
      markerCharCode,
      isOrdered,
      contentStart,
      listTokIdx,
      prevEmptyEnd,
      listLines,
      itemLines,
      tight = true,
      terminatorRules,
      i, l, terminate;

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }

  if (state.level >= state.options.maxNesting) { return false; }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

    state.tokens.push({
      type: 'ordered_list_open',
      order: markerValue,
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });

  } else {
    state.tokens.push({
      type: 'bullet_list_open',
      lines: listLines = [ startLine, 0 ],
      level: state.level++
    });
  }

  //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.parser.ruler.getRules('list');

  while (nextLine < endLine) {
    contentStart = state.skipSpaces(posAfterMarker);
    max = state.eMarks[nextLine];

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = contentStart - posAfterMarker;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // If indent is less than 1, assume that it's one, example:
    //  "-\n  test"
    if (indentAfterMarker < 1) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;

    // Run subparser & write tokens
    state.tokens.push({
      type: 'list_item_open',
      lines: itemLines = [ startLine, 0 ],
      level: state.level++
    });

    oldIndent = state.blkIndent;
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldParentType = state.parentType;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.blkIndent = indent;
    state.tight = true;
    state.parentType = 'list';

    state.parser.tokenize(state, startLine, endLine, true);

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = oldIndent;
    state.tShift[startLine] = oldTShift;
    state.tight = oldTight;
    state.parentType = oldParentType;

    state.tokens.push({
      type: 'list_item_close',
      level: --state.level
    });

    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) { break; }

    if (state.isEmpty(nextLine)) {
      break;
    }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.tShift[nextLine] < state.blkIndent) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finilize list
  state.tokens.push({
    type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
    level: --state.level
  });
  listLines[1] = nextLine;

  state.line = nextLine;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};

},{}],31:[function(require,module,exports){
// Paragraph

'use strict';


module.exports = function paragraph(state, startLine/*, endLine*/) {
  var endLine, content, terminate, i, l,
      nextLine = startLine + 1,
      terminatorRules;

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  if (nextLine < endLine && !state.isEmpty(nextLine)) {
    terminatorRules = state.parser.ruler.getRules('paragraph');

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }

      // Some tags can terminate paragraph without empty line.
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) { break; }
    }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;
  if (content.length) {
    state.tokens.push({
      type: 'paragraph_open',
      tight: false,
      lines: [ startLine, state.line ],
      level: state.level
    });
    state.tokens.push({
      type: 'inline',
      content: content,
      level: state.level + 1,
      lines: [ startLine, state.line ],
      children: []
    });
    state.tokens.push({
      type: 'paragraph_close',
      tight: false,
      level: state.level
    });
  }

  return true;
};

},{}],32:[function(require,module,exports){
// Parser state class

'use strict';


function StateBlock(src, parser, options, env, tokens) {
  var ch, s, start, pos, len, indent, indent_found;

  this.src = src;

  // Shortcuts to simplify nested calls
  this.parser = parser;

  this.options = options;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // indent for each line

  // block parser variables
  this.blkIndent  = 0; // required block content indent
                       // (for example, if we are in list)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.parentType = 'root'; // if `list`, block parser stops on two newlines
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent = 0;
  indent_found = false;

  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (ch === 0x20/* space */) {
        indent++;
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);

      indent_found = false;
      indent = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, first, last, queue, shift,
      line = begin;

  if (begin >= end) {
    return '';
  }

  // Opt: don't use push queue for single line;
  if (line + 1 === end) {
    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
    last = keepLastLF ? this.bMarks[end] : this.eMarks[end - 1];
    return this.src.slice(first, last);
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    shift = this.tShift[line];
    if (shift > indent) { shift = indent; }
    if (shift < 0) { shift = 0; }

    first = this.bMarks[line] + shift;

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    queue[i] = this.src.slice(first, last);
  }

  return queue.join('');
};


module.exports = StateBlock;

},{}],33:[function(require,module,exports){
// GFM table, non-standard

'use strict';


function getLine(state, line) {
  var pos = state.bMarks[line] + state.blkIndent,
      max = state.eMarks[line];

  return state.src.substr(pos, max - pos);
}


module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, nextLine, rows,
      aligns, t, tableLines, tbodyLines;

  // should have at least three lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.tShift[nextLine] < state.blkIndent) { return false; }

  // first character of the second line should be '|' or '-'

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  ch = state.src.charCodeAt(pos);
  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

  lineText = getLine(state, startLine + 1);
  if (!/^[-:| ]+$/.test(lineText)) { return false; }

  rows = lineText.split('|');
  if (rows <= 2) { return false; }
  aligns = [];
  for (i = 0; i < rows.length; i++) {
    t = rows[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === rows.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  rows = lineText.replace(/^\||\|$/g, '').split('|');
  if (aligns.length !== rows.length) { return false; }
  if (silent) { return true; }

  state.tokens.push({
    type: 'table_open',
    lines: tableLines = [ startLine, 0 ],
    level: state.level++
  });
  state.tokens.push({
    type: 'thead_open',
    lines: [ startLine, startLine + 1 ],
    level: state.level++
  });

  state.tokens.push({
    type: 'tr_open',
    lines: [ startLine, startLine + 1 ],
    level: state.level++
  });
  for (i = 0; i < rows.length; i++) {
    state.tokens.push({
      type: 'th_open',
      align: aligns[i],
      lines: [ startLine, startLine + 1 ],
      level: state.level++
    });
    state.tokens.push({
      type: 'inline',
      content: rows[i].trim(),
      lines: [ startLine, startLine + 1 ],
      level: state.level,
      children: []
    });
    state.tokens.push({ type: 'th_close', level: --state.level });
  }
  state.tokens.push({ type: 'tr_close', level: --state.level });
  state.tokens.push({ type: 'thead_close', level: --state.level });

  state.tokens.push({
    type: 'tbody_open',
    lines: tbodyLines = [ startLine + 2, 0 ],
    level: state.level++
  });

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.tShift[nextLine] < state.blkIndent) { break; }

    lineText = getLine(state, nextLine).trim();
    if (lineText.indexOf('|') === -1) { break; }
    rows = lineText.replace(/^\||\|$/g, '').split('|');

    state.tokens.push({ type: 'tr_open', level: state.level++ });
    for (i = 0; i < rows.length; i++) {
      state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
      state.tokens.push({
        type: 'inline',
        content: rows[i].replace(/^\|? *| *\|?$/g, ''),
        level: state.level,
        children: []
      });
      state.tokens.push({ type: 'td_close', level: --state.level });
    }
    state.tokens.push({ type: 'tr_close', level: --state.level });
  }
  state.tokens.push({ type: 'tbody_close', level: --state.level });
  state.tokens.push({ type: 'table_close', level: --state.level });

  tableLines[1] = tbodyLines[1] = nextLine;
  state.line = nextLine;
  return true;
};

},{}],34:[function(require,module,exports){
// Parse abbreviation definitions, i.e. `*[abbr]: description`
//

'use strict';


var StateInline    = require('../rules_inline/state_inline');
var parseLinkLabel = require('../helpers/parse_link_label');


function parseAbbr(str, parserInline, options, env) {
  var state, labelEnd, pos, max, label, title;

  if (str.charCodeAt(0) !== 0x2A/* * */) { return -1; }
  if (str.charCodeAt(1) !== 0x5B/* [ */) { return -1; }

  if (str.indexOf(']:') === -1) { return -1; }

  state = new StateInline(str, parserInline, options, env, []);
  labelEnd = parseLinkLabel(state, 1);

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

  max = state.posMax;

  // abbr title is always one line, so looking for ending "\n" here
  for (pos = labelEnd + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x0A) { break; }
  }

  label = str.slice(2, labelEnd);
  title = str.slice(labelEnd + 2, pos).trim();
  if (title.length === 0) { return -1; }
  if (!env.abbreviations) { env.abbreviations = {}; }
  // prepend ':' to avoid conflict with Object.prototype members
  if (typeof env.abbreviations[':' + label] === 'undefined') {
    env.abbreviations[':' + label] = title;
  }

  return pos;
}

module.exports = function abbr(state) {
  var tokens = state.tokens, i, l, content, pos;

  if (state.inlineMode) {
    return;
  }

  // Parse inlines
  for (i = 1, l = tokens.length - 1; i < l; i++) {
    if (tokens[i - 1].type === 'paragraph_open' &&
        tokens[i].type === 'inline' &&
        tokens[i + 1].type === 'paragraph_close') {

      content = tokens[i].content;
      while (content.length) {
        pos = parseAbbr(content, state.inline, state.options, state.env);
        if (pos < 0) { break; }
        content = content.slice(pos).trim();
      }

      tokens[i].content = content;
      if (!content.length) {
        tokens[i - 1].tight = true;
        tokens[i + 1].tight = true;
      }
    }
  }
};

},{"../helpers/parse_link_label":13,"../rules_inline/state_inline":56}],35:[function(require,module,exports){
// Enclose abbreviations in <abbr> tags
//
'use strict';


var PUNCT_CHARS = ' \n()[]\'".,!?-';


// from Google closure library
// http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021
function regEscape(s) {
  return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
}


module.exports = function abbr2(state) {
  var i, j, l, tokens, token, text, nodes, pos, level, reg, m, regText,
      blockTokens = state.tokens;

  if (!state.env.abbreviations) { return; }
  if (!state.env.abbrRegExp) {
    regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])'
            + '(' + Object.keys(state.env.abbreviations).map(function (x) {
                      return x.substr(1);
                    }).sort(function (a, b) {
                      return b.length - a.length;
                    }).map(regEscape).join('|') + ')'
            + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
    state.env.abbrRegExp = new RegExp(regText, 'g');
  }
  reg = state.env.abbrRegExp;

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') { continue; }
    tokens = blockTokens[j].children;

    // We scan from the end, to keep position when new tags added.
    for (i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token.type !== 'text') { continue; }

      pos = 0;
      text = token.content;
      reg.lastIndex = 0;
      level = token.level;
      nodes = [];

      while ((m = reg.exec(text))) {
        if (reg.lastIndex > pos) {
          nodes.push({
            type: 'text',
            content: text.slice(pos, m.index + m[1].length),
            level: level
          });
        }

        nodes.push({
          type: 'abbr_open',
          title: state.env.abbreviations[':' + m[2]],
          level: level++
        });
        nodes.push({
          type: 'text',
          content: m[2],
          level: level
        });
        nodes.push({
          type: 'abbr_close',
          level: --level
        });
        pos = reg.lastIndex - m[3].length;
      }

      if (!nodes.length) { continue; }

      if (pos < text.length) {
        nodes.push({
          type: 'text',
          content: text.slice(pos),
          level: level
        });
      }

      // replace current node
      blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
    }
  }
};

},{}],36:[function(require,module,exports){
'use strict';

module.exports = function block(state) {

  if (state.inlineMode) {
    state.tokens.push({
      type: 'inline',
      content: state.src.replace(/\n/g, ' ').trim(),
      level: 0,
      lines: [ 0, 1 ],
      children: []
    });

  } else {
    state.block.parse(state.src, state.options, state.env, state.tokens);
  }
};

},{}],37:[function(require,module,exports){
'use strict';


module.exports = function footnote_block(state) {
  var i, l, j, t, lastParagraph, list, tokens, current, currentLabel,
      level = 0,
      insideRef = false,
      refTokens = {};

  if (!state.env.footnotes) { return; }

  state.tokens = state.tokens.filter(function(tok) {
    if (tok.type === 'footnote_reference_open') {
      insideRef = true;
      current = [];
      currentLabel = tok.label;
      return false;
    }
    if (tok.type === 'footnote_reference_close') {
      insideRef = false;
      // prepend ':' to avoid conflict with Object.prototype members
      refTokens[':' + currentLabel] = current;
      return false;
    }
    if (insideRef) { current.push(tok); }
    return !insideRef;
  });

  if (!state.env.footnotes.list) { return; }
  list = state.env.footnotes.list;

  state.tokens.push({
    type: 'footnote_block_open',
    level: level++
  });
  for (i = 0, l = list.length; i < l; i++) {
    state.tokens.push({
      type: 'footnote_open',
      id: i,
      level: level++
    });

    if (list[i].tokens) {
      tokens = [];
      tokens.push({
        type: 'paragraph_open',
        tight: false,
        level: level++
      });
      tokens.push({
        type: 'inline',
        content: '',
        level: level,
        children: list[i].tokens
      });
      tokens.push({
        type: 'paragraph_close',
        tight: false,
        level: --level
      });
    } else if (list[i].label) {
      tokens = refTokens[':' + list[i].label];
    }

    state.tokens = state.tokens.concat(tokens);
    if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
      lastParagraph = state.tokens.pop();
    } else {
      lastParagraph = null;
    }

    t = list[i].count > 0 ? list[i].count : 1;
    for (j = 0; j < t; j++) {
      state.tokens.push({
        type: 'footnote_anchor',
        id: i,
        subId: j,
        level: level
      });
    }

    if (lastParagraph) {
      state.tokens.push(lastParagraph);
    }

    state.tokens.push({
      type: 'footnote_close',
      level: --level
    });
  }
  state.tokens.push({
    type: 'footnote_block_close',
    level: --level
  });
};

},{}],38:[function(require,module,exports){
'use strict';

module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.inline.parse(tok.content, state.options, state.env, tok.children);
    }
  }
};

},{}],39:[function(require,module,exports){
// Replace link-like texts with link nodes.
//
// Currently restricted by `inline.validateLink()` to http/https/ftp
//
'use strict';


var Autolinker = require('autolinker');


var LINK_SCAN_RE = /www|@|\:\/\//;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}

// Stupid fabric to avoid singletons, for thread safety.
// Required for engines like Nashorn.
//
function createLinkifier() {
  var links = [];
  var autolinker = new Autolinker({
    stripPrefix: false,
    url: true,
    email: true,
    twitter: false,
    replaceFn: function (autolinker, match) {
      // Only collect matched strings but don't change anything.
      switch (match.getType()) {
        /*eslint default-case:0*/
        case 'url':
          links.push({
            text: match.matchedText,
            url: match.getUrl()
          });
          break;
        case 'email':
          links.push({
            text: match.matchedText,
            // normalize email protocol
            url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
          });
          break;
      }
      return false;
    }
  });

  return {
    links: links,
    autolinker: autolinker
  };
}


module.exports = function linkify(state) {
  var i, j, l, tokens, token, text, nodes, ln, pos, level, htmlLinkLevel,
      blockTokens = state.tokens,
      linkifier = null, links, autolinker;

  if (!state.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') { continue; }
    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];

      // Skip content of markdown links
      if (token.type === 'link_close') {
        i--;
        while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (token.type === 'htmltag') {
        if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(token.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {

        // Init linkifier in lazy manner, only if required.
        if (!linkifier) {
          linkifier = createLinkifier();
          links = linkifier.links;
          autolinker = linkifier.autolinker;
        }

        text = token.content;
        links.length = 0;
        autolinker.link(text);

        if (!links.length) { continue; }

        // Now split string to nodes
        nodes = [];
        level = token.level;

        for (ln = 0; ln < links.length; ln++) {

          if (!state.inline.validateLink(links[ln].url)) { continue; }

          pos = text.indexOf(links[ln].text);

          if (pos) {
            level = level;
            nodes.push({
              type: 'text',
              content: text.slice(0, pos),
              level: level
            });
          }
          nodes.push({
            type: 'link_open',
            href: links[ln].url,
            title: '',
            level: level++
          });
          nodes.push({
            type: 'text',
            content: links[ln].text,
            level: level
          });
          nodes.push({
            type: 'link_close',
            level: --level
          });
          text = text.slice(pos + links[ln].text.length);
        }
        if (text.length) {
          nodes.push({
            type: 'text',
            content: text,
            level: level
          });
        }

        // replace current node
        blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
      }
    }
  }
};

},{"autolinker":60}],40:[function(require,module,exports){
'use strict';


var StateInline          = require('../rules_inline/state_inline');
var parseLinkLabel       = require('../helpers/parse_link_label');
var parseLinkDestination = require('../helpers/parse_link_destination');
var parseLinkTitle       = require('../helpers/parse_link_title');
var normalizeReference   = require('../helpers/normalize_reference');


function parseReference(str, parser, options, env) {
  var state, labelEnd, pos, max, code, start, href, title, label;

  if (str.charCodeAt(0) !== 0x5B/* [ */) { return -1; }

  if (str.indexOf(']:') === -1) { return -1; }

  state = new StateInline(str, parser, options, env, []);
  labelEnd = parseLinkLabel(state, 0);

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }

  max = state.posMax;

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    code = state.src.charCodeAt(pos);
    if (code !== 0x20 && code !== 0x0A) { break; }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  if (!parseLinkDestination(state, pos)) { return -1; }
  href = state.linkContent;
  pos = state.pos;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (pos = pos + 1; pos < max; pos++) {
    code = state.src.charCodeAt(pos);
    if (code !== 0x20 && code !== 0x0A) { break; }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
    title = state.linkContent;
    pos = state.pos;
  } else {
    title = '';
    pos = start;
  }

  // ensure that the end of the line is empty
  while (pos < max && state.src.charCodeAt(pos) === 0x20/* space */) { pos++; }
  if (pos < max && state.src.charCodeAt(pos) !== 0x0A) { return -1; }

  label = normalizeReference(str.slice(1, labelEnd));
  if (typeof env.references[label] === 'undefined') {
    env.references[label] = { title: title, href: href };
  }

  return pos;
}


module.exports = function references(state) {
  var tokens = state.tokens, i, l, content, pos;

  state.env.references = state.env.references || {};

  if (state.inlineMode) {
    return;
  }

  // Scan definitions in paragraph inlines
  for (i = 1, l = tokens.length - 1; i < l; i++) {
    if (tokens[i].type === 'inline' &&
        tokens[i - 1].type === 'paragraph_open' &&
        tokens[i + 1].type === 'paragraph_close') {

      content = tokens[i].content;
      while (content.length) {
        pos = parseReference(content, state.inline, state.options, state.env);
        if (pos < 0) { break; }
        content = content.slice(pos).trim();
      }

      tokens[i].content = content;
      if (!content.length) {
        tokens[i - 1].tight = true;
        tokens[i + 1].tight = true;
      }
    }
  }
};

},{"../helpers/normalize_reference":11,"../helpers/parse_link_destination":12,"../helpers/parse_link_label":13,"../helpers/parse_link_title":14,"../rules_inline/state_inline":56}],41:[function(require,module,exports){
// Simple typographyc replacements
//
'use strict';

// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  'c': '©',
  'r': '®',
  'p': '§',
  'tm': '™'
};

function replaceScopedAbbr(str) {
  if (str.indexOf('(') < 0) { return str; }

  return str.replace(SCOPED_ABBR_RE, function(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  });
}


module.exports = function replace(state) {
  var i, token, text, inlineTokens, blkIdx;

  if (!state.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    inlineTokens = state.tokens[blkIdx].children;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];
      if (token.type === 'text') {
        text = token.content;

        text = replaceScopedAbbr(text);

        if (RARE_RE.test(text)) {
          text = text.replace(/\+-/g, '±')
                      // .., ..., ....... -> …
                      // but ?..... & !..... -> ?.. & !..
                      .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
                      .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
                      // em-dash
                      .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
                      // en-dash
                      .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
                      .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
        }

        token.content = text;
      }
    }
  }
};

},{}],42:[function(require,module,exports){
// Convert straight quotation marks to typographic ones
//
'use strict';


var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var PUNCT_RE = /[-\s()\[\]]/;
var APOSTROPHE = '’';

// This function returns true if the character at `pos`
// could be inside a word.
function isLetter(str, pos) {
  if (pos < 0 || pos >= str.length) { return false; }
  return !PUNCT_RE.test(str[pos]);
}


function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + 1);
}


module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
      canOpen, canClose, j, isSingle, blkIdx, tokens,
      stack;

  if (!state.options.typographer) { return; }

  stack = [];

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    tokens = state.tokens[blkIdx].children;
    stack.length = 0;

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];

      if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }

      thisLevel = tokens[i].level;

      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) { break; }
      }
      stack.length = j + 1;

      text = token.content;
      pos = 0;
      max = text.length;

      /*eslint no-labels:0,block-scoped-var:0*/
      OUTER:
      while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text);
        if (!t) { break; }

        lastSpace = !isLetter(text, t.index - 1);
        pos = t.index + 1;
        isSingle = (t[0] === "'");
        nextSpace = !isLetter(text, pos);

        if (!nextSpace && !lastSpace) {
          // middle of word
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
          continue;
        }

        canOpen = !nextSpace;
        canClose = !lastSpace;

        if (canClose) {
          // this could be a closing quote, rewind the stack to get a match
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) { break; }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
                token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
              } else {
                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
                token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
              }
              stack.length = j;
              continue OUTER;
            }
          }
        }

        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
    }
  }
};

},{}],43:[function(require,module,exports){
// Process autolinks '<protocol:...>'

'use strict';

var url_schemas   = require('../common/url_schemas');
var normalizeLink = require('../helpers/normalize_link');


/*eslint max-len:0*/
var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;


module.exports = function autolink(state, silent) {
  var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  tail = state.src.slice(pos);

  if (tail.indexOf('>') < 0) { return false; }

  linkMatch = tail.match(AUTOLINK_RE);

  if (linkMatch) {
    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }

    url = linkMatch[0].slice(1, -1);
    fullUrl = normalizeLink(url);
    if (!state.parser.validateLink(url)) { return false; }

    if (!silent) {
      state.push({
        type: 'link_open',
        href: fullUrl,
        level: state.level
      });
      state.push({
        type: 'text',
        content: url,
        level: state.level + 1
      });
      state.push({ type: 'link_close', level: state.level });
    }

    state.pos += linkMatch[0].length;
    return true;
  }

  emailMatch = tail.match(EMAIL_RE);

  if (emailMatch) {

    url = emailMatch[0].slice(1, -1);

    fullUrl = normalizeLink('mailto:' + url);
    if (!state.parser.validateLink(fullUrl)) { return false; }

    if (!silent) {
      state.push({
        type: 'link_open',
        href: fullUrl,
        level: state.level
      });
      state.push({
        type: 'text',
        content: url,
        level: state.level + 1
      });
      state.push({ type: 'link_close', level: state.level });
    }

    state.pos += emailMatch[0].length;
    return true;
  }

  return false;
};

},{"../common/url_schemas":5,"../helpers/normalize_link":10}],44:[function(require,module,exports){
// Parse backticks

'use strict';

module.exports = function backticks(state, silent) {
  var start, max, marker, matchStart, matchEnd,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);

  matchStart = matchEnd = pos;

  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    if (matchEnd - matchStart === marker.length) {
      if (!silent) {
        state.push({
          type: 'code',
          content: state.src.slice(pos, matchStart)
                              .replace(/[ \n]+/g, ' ')
                              .trim(),
          block: false,
          level: state.level
        });
      }
      state.pos = matchEnd;
      return true;
    }
  }

  if (!silent) { state.pending += marker; }
  state.pos += marker.length;
  return true;
};

},{}],45:[function(require,module,exports){
// Process ~~deleted text~~

'use strict';

module.exports = function del(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x7E/* ~ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x7E/* ~ */) { return false; }
  if (nextChar === 0x7E/* ~ */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x7E/* ~ */) { pos++; }
  if (pos > start + 3) {
    // sequence of 4+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x7E/* ~ */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x7E/* ~ */ && lastChar !== 0x7E/* ~ */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '~~'
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '~~'
            stack++;
          } // else {
            //  // standalone ' ~~ ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'del_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'del_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
};

},{}],46:[function(require,module,exports){
// Process *this* and _that_

'use strict';


function isAlphaNum(code) {
  return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
         (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
         (code >= 0x61 /* a */ && code <= 0x7A /* z */);
}

// parse sequence of emphasis markers,
// "start" should point at a valid marker
function scanDelims(state, start) {
  var pos = start, lastChar, nextChar, count,
      can_open = true,
      can_close = true,
      max = state.posMax,
      marker = state.src.charCodeAt(start);

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;

  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
  if (pos >= max) { can_open = false; }
  count = pos - start;

  if (count >= 4) {
    // sequence of four or more unescaped markers can't start/end an emphasis
    can_open = can_close = false;
  } else {
    nextChar = pos < max ? state.src.charCodeAt(pos) : -1;

    // check whitespace conditions
    if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
    if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }

    if (marker === 0x5F /* _ */) {
      // check if we aren't inside the word
      if (isAlphaNum(lastChar)) { can_open = false; }
      if (isAlphaNum(nextChar)) { can_close = false; }
    }
  }

  return {
    can_open: can_open,
    can_close: can_close,
    delims: count
  };
}

module.exports = function emphasis(state, silent) {
  var startCount,
      count,
      found,
      oldCount,
      newCount,
      stack,
      res,
      max = state.posMax,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode

  res = scanDelims(state, start);
  startCount = res.delims;
  if (!res.can_open) {
    state.pos += startCount;
    if (!silent) { state.pending += state.src.slice(start, state.pos); }
    return true;
  }

  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + startCount;
  stack = [ startCount ];

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === marker) {
      res = scanDelims(state, state.pos);
      count = res.delims;
      if (res.can_close) {
        oldCount = stack.pop();
        newCount = count;

        while (oldCount !== newCount) {
          if (newCount < oldCount) {
            stack.push(oldCount - newCount);
            break;
          }

          // assert(newCount > oldCount)
          newCount -= oldCount;

          if (stack.length === 0) { break; }
          state.pos += oldCount;
          oldCount = stack.pop();
        }

        if (stack.length === 0) {
          startCount = oldCount;
          found = true;
          break;
        }
        state.pos += count;
        continue;
      }

      if (res.can_open) { stack.push(count); }
      state.pos += count;
      continue;
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + startCount;

  if (!silent) {
    if (startCount === 2 || startCount === 3) {
      state.push({ type: 'strong_open', level: state.level++ });
    }
    if (startCount === 1 || startCount === 3) {
      state.push({ type: 'em_open', level: state.level++ });
    }

    state.parser.tokenize(state);

    if (startCount === 1 || startCount === 3) {
      state.push({ type: 'em_close', level: --state.level });
    }
    if (startCount === 2 || startCount === 3) {
      state.push({ type: 'strong_close', level: --state.level });
    }
  }

  state.pos = state.posMax + startCount;
  state.posMax = max;
  return true;
};

},{}],47:[function(require,module,exports){
// Process html entity - &#123;, &#xAF;, &quot;, ...

'use strict';

var entities          = require('../common/entities');
var has               = require('../common/utils').has;
var isValidEntityCode = require('../common/utils').isValidEntityCode;
var fromCodePoint     = require('../common/utils').fromCodePoint;


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


module.exports = function entity(state, silent) {
  var ch, code, match, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

  if (pos + 1 < max) {
    ch = state.src.charCodeAt(pos + 1);

    if (ch === 0x23 /* # */) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        if (has(entities, match[1])) {
          if (!silent) { state.pending += entities[match[1]]; }
          state.pos += match[0].length;
          return true;
        }
      }
    }
  }

  if (!silent) { state.pending += '&'; }
  state.pos++;
  return true;
};

},{"../common/entities":2,"../common/utils":6}],48:[function(require,module,exports){
// Proceess escaped chars and hardbreaks

'use strict';

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


module.exports = function escape(state, silent) {
  var ch, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

  pos++;

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) { state.pending += state.src[pos]; }
      state.pos += 2;
      return true;
    }

    if (ch === 0x0A) {
      if (!silent) {
        state.push({
          type: 'hardbreak',
          level: state.level
        });
      }

      pos++;
      // skip leading whitespaces from next line
      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

      state.pos = pos;
      return true;
    }
  }

  if (!silent) { state.pending += '\\'; }
  state.pos++;
  return true;
};

},{}],49:[function(require,module,exports){
// Process inline footnotes (^[...])

'use strict';

var parseLinkLabel = require('../helpers/parse_link_label');


module.exports = function footnote_inline(state, silent) {
  var labelStart,
      labelEnd,
      footnoteId,
      oldLength,
      max = state.posMax,
      start = state.pos;

  if (start + 2 >= max) { return false; }
  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  labelStart = start + 2;
  labelEnd = parseLinkLabel(state, start + 1);

  // parser failed to find ']', so it's not a valid note
  if (labelEnd < 0) { return false; }

  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    if (!state.env.footnotes) { state.env.footnotes = {}; }
    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
    footnoteId = state.env.footnotes.list.length;

    state.pos = labelStart;
    state.posMax = labelEnd;

    state.push({
      type: 'footnote_ref',
      id: footnoteId,
      level: state.level
    });
    state.linkLevel++;
    oldLength = state.tokens.length;
    state.parser.tokenize(state);
    state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
    state.linkLevel--;
  }

  state.pos = labelEnd + 1;
  state.posMax = max;
  return true;
};

},{"../helpers/parse_link_label":13}],50:[function(require,module,exports){
// Process footnote references ([^...])

'use strict';


module.exports = function footnote_ref(state, silent) {
  var label,
      pos,
      footnoteId,
      footnoteSubId,
      max = state.posMax,
      start = state.pos;

  // should be at least 4 chars - "[^x]"
  if (start + 3 > max) { return false; }

  if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  for (pos = start + 2; pos < max; pos++) {
    if (state.src.charCodeAt(pos) === 0x20) { return false; }
    if (state.src.charCodeAt(pos) === 0x0A) { return false; }
    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
      break;
    }
  }

  if (pos === start + 2) { return false; } // no empty footnote labels
  if (pos >= max) { return false; }
  pos++;

  label = state.src.slice(start + 2, pos - 1);
  if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

  if (!silent) {
    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

    if (state.env.footnotes.refs[':' + label] < 0) {
      footnoteId = state.env.footnotes.list.length;
      state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
      state.env.footnotes.refs[':' + label] = footnoteId;
    } else {
      footnoteId = state.env.footnotes.refs[':' + label];
    }

    footnoteSubId = state.env.footnotes.list[footnoteId].count;
    state.env.footnotes.list[footnoteId].count++;

    state.push({
      type: 'footnote_ref',
      id: footnoteId,
      subId: footnoteSubId,
      level: state.level
    });
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{}],51:[function(require,module,exports){
// Process html tags

'use strict';


var HTML_TAG_RE = require('../common/html_re').HTML_TAG_RE;


function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


module.exports = function htmltag(state, silent) {
  var ch, match, max, pos = state.pos;

  if (!state.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    state.push({
      type: 'htmltag',
      content: state.src.slice(pos, pos + match[0].length),
      level: state.level
    });
  }
  state.pos += match[0].length;
  return true;
};

},{"../common/html_re":4}],52:[function(require,module,exports){
// Process ++inserted text++

'use strict';

module.exports = function ins(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x2B/* + */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x2B/* + */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x2B/* + */) { return false; }
  if (nextChar === 0x2B/* + */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x2B/* + */) { pos++; }
  if (pos !== start + 2) {
    // sequence of 3+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x2B/* + */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x2B/* + */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x2B/* + */ && lastChar !== 0x2B/* + */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '++'
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '++'
            stack++;
          } // else {
            //  // standalone ' ++ ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'ins_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'ins_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
};

},{}],53:[function(require,module,exports){
// Process [links](<to> "stuff")

'use strict';

var parseLinkLabel       = require('../helpers/parse_link_label');
var parseLinkDestination = require('../helpers/parse_link_destination');
var parseLinkTitle       = require('../helpers/parse_link_title');
var normalizeReference   = require('../helpers/normalize_reference');


module.exports = function links(state, silent) {
  var labelStart,
      labelEnd,
      label,
      href,
      title,
      pos,
      ref,
      code,
      isImage = false,
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (marker === 0x21/* ! */) {
    isImage = true;
    marker = state.src.charCodeAt(++start);
  }

  if (marker !== 0x5B/* [ */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  labelStart = start + 1;
  labelEnd = parseLinkLabel(state, start);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    if (parseLinkDestination(state, pos)) {
      href = state.linkContent;
      pos = state.pos;
    } else {
      href = '';
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
      title = state.linkContent;
      pos = state.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (code !== 0x20 && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //

    // do not allow nested reference links
    if (state.linkLevel > 0) { return false; }

    // [foo]  [bar]
    //      ^^ optional whitespace (can include newlines)
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (code !== 0x20 && code !== 0x0A) { break; }
    }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = start - 1;
      }
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    if (isImage) {
      state.push({
        type: 'image',
        src: href,
        title: title,
        alt: state.src.substr(labelStart, labelEnd - labelStart),
        level: state.level
      });
    } else {
      state.push({
        type: 'link_open',
        href: href,
        title: title,
        level: state.level++
      });
      state.linkLevel++;
      state.parser.tokenize(state);
      state.linkLevel--;
      state.push({ type: 'link_close', level: --state.level });
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{"../helpers/normalize_reference":11,"../helpers/parse_link_destination":12,"../helpers/parse_link_label":13,"../helpers/parse_link_title":14}],54:[function(require,module,exports){
// Process ==highlighted text==

'use strict';

module.exports = function del(state, silent) {
  var found,
      pos,
      stack,
      max = state.posMax,
      start = state.pos,
      lastChar,
      nextChar;

  if (state.src.charCodeAt(start) !== 0x3D/* = */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x3D/* = */) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
  nextChar = state.src.charCodeAt(start + 2);

  if (lastChar === 0x3D/* = */) { return false; }
  if (nextChar === 0x3D/* = */) { return false; }
  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }

  pos = start + 2;
  while (pos < max && state.src.charCodeAt(pos) === 0x3D/* = */) { pos++; }
  if (pos !== start + 2) {
    // sequence of 3+ markers taking as literal, same as in a emphasis
    state.pos += pos - start;
    if (!silent) { state.pending += state.src.slice(start, pos); }
    return true;
  }

  state.pos = start + 2;
  stack = 1;

  while (state.pos + 1 < max) {
    if (state.src.charCodeAt(state.pos) === 0x3D/* = */) {
      if (state.src.charCodeAt(state.pos + 1) === 0x3D/* = */) {
        lastChar = state.src.charCodeAt(state.pos - 1);
        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
        if (nextChar !== 0x3D/* = */ && lastChar !== 0x3D/* = */) {
          if (lastChar !== 0x20 && lastChar !== 0x0A) {
            // closing '=='
            stack--;
          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
            // opening '=='
            stack++;
          } // else {
            //  // standalone ' == ' indented with spaces
            // }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }

    state.parser.skipToken(state);
  }

  if (!found) {
    // parser failed to find ending tag, so it's not valid emphasis
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  if (!silent) {
    state.push({ type: 'mark_open', level: state.level++ });
    state.parser.tokenize(state);
    state.push({ type: 'mark_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = max;
  return true;
};

},{}],55:[function(require,module,exports){
// Proceess '\n'

'use strict';

module.exports = function newline(state, silent) {
  var pmax, max, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        state.pending = state.pending.replace(/ +$/, '');
        state.push({
          type: 'hardbreak',
          level: state.level
        });
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push({
          type: 'softbreak',
          level: state.level
        });
      }

    } else {
      state.push({
        type: 'softbreak',
        level: state.level
      });
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }

  state.pos = pos;
  return true;
};

},{}],56:[function(require,module,exports){
// Inline parser state

'use strict';


function StateInline(src, parserInline, options, env, outTokens) {
  this.src = src;
  this.env = env;
  this.options = options;
  this.parser = parserInline;
  this.tokens = outTokens;
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
                          // optimization of pairs parse (emphasis, strikes).

  // Link parser state vars

  this.isInLabel = false; // Set true when seek link label - we should disable
                          // "paired" rules (emphasis, strikes) to not skip
                          // tailing `]`

  this.linkLevel = 0;     // Increment for each nesting link. Used to prevent
                          // nesting in definitions

  this.linkContent = '';  // Temporary storage for link url

  this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
                                 // (backtrack optimization)
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  this.tokens.push({
    type: 'text',
    content: this.pending,
    level: this.pendingLevel
  });
  this.pending = '';
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (token) {
  if (this.pending) {
    this.pushPending();
  }

  this.tokens.push(token);
  this.pendingLevel = this.level;
};


// Store value to cache.
// !!! Implementation has parser-specific optimizations
// !!! keys MUST be integer, >= 0; values MUST be integer, > 0
//
StateInline.prototype.cacheSet = function (key, val) {
  for (var i = this.cache.length; i <= key; i++) {
    this.cache.push(0);
  }

  this.cache[key] = val;
};


// Get cache value
//
StateInline.prototype.cacheGet = function (key) {
  return key < this.cache.length ? this.cache[key] : 0;
};


module.exports = StateInline;

},{}],57:[function(require,module,exports){
// Process ~subscript~

'use strict';

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

module.exports = function sub(state, silent) {
  var found,
      content,
      max = state.posMax,
      start = state.pos;

  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 2 >= max) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + 1;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
      found = true;
      break;
    }

    state.parser.skipToken(state);
  }

  if (!found || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 1, state.pos);

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 1;

  if (!silent) {
    state.push({
      type: 'sub',
      level: state.level,
      content: content.replace(UNESCAPE_RE, '$1')
    });
  }

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
};

},{}],58:[function(require,module,exports){
// Process ^superscript^

'use strict';

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

module.exports = function sup(state, silent) {
  var found,
      content,
      max = state.posMax,
      start = state.pos;

  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 2 >= max) { return false; }
  if (state.level >= state.options.maxNesting) { return false; }

  state.pos = start + 1;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
      found = true;
      break;
    }

    state.parser.skipToken(state);
  }

  if (!found || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 1, state.pos);

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 1;

  if (!silent) {
    state.push({
      type: 'sup',
      level: state.level,
      content: content.replace(UNESCAPE_RE, '$1')
    });
  }

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
};

},{}],59:[function(require,module,exports){
// Skip text characters for text token, place those to pending buffer
// and increment current pos

'use strict';


// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x5C/* \ */:
    case 0x60/* ` */:
    case 0x2A/* * */:
    case 0x5F/* _ */:
    case 0x5E/* ^ */:
    case 0x5B/* [ */:
    case 0x5D/* ] */:
    case 0x21/* ! */:
    case 0x26/* & */:
    case 0x3C/* < */:
    case 0x3E/* > */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x40/* @ */:
    case 0x7E/* ~ */:
    case 0x2B/* + */:
    case 0x3D/* = */:
    case 0x3A/* : */:
      return true;
    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

},{}],60:[function(require,module,exports){
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Autolinker'] = factory();
  }
}(this, function () {

	/*!
	 * Autolinker.js
	 * 0.15.0
	 *
	 * Copyright(c) 2014 Gregory Jacobs <greg@greg-jacobs.com>
	 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
	 *
	 * https://github.com/gregjacobs/Autolinker.js
	 */
	/**
	 * @class Autolinker
	 * @extends Object
	 * 
	 * Utility class used to process a given string of text, and wrap the URLs, email addresses, and Twitter handles in 
	 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
	 * 
	 * Any of the configuration options may be provided in an Object (map) provided to the Autolinker constructor, which
	 * will configure how the {@link #link link()} method will process the links.
	 * 
	 * For example:
	 * 
	 *     var autolinker = new Autolinker( {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     
	 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
	 * be more convenient for one-off uses. For example:
	 * 
	 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * ## Custom Replacements of Links
	 * 
	 * If the configuration options do not provide enough flexibility, a {@link #replaceFn} may be provided to fully customize
	 * the output of Autolinker. This function is called once for each URL/Email/Twitter handle match that is encountered.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
	 *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
	 *                         tag.setAttr( 'rel', 'nofollow' );
	 *                         tag.addClass( 'external-link' );
	 *                         
	 *                         return tag;
	 *                         
	 *                     } else {
	 *                         return true;  // let Autolinker perform its normal anchor tag replacement
	 *                     }
	 *                     
	 *                 case 'email' :
	 *                     var email = match.getEmail();
	 *                     console.log( "email: ", email );
	 *                     
	 *                     if( email === "my@own.address" ) {
	 *                         return false;  // don't auto-link this particular email address; leave as-is
	 *                     } else {
	 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
	 *                     }
	 *                 
	 *                 case 'twitter' :
	 *                     var twitterHandle = match.getTwitterHandle();
	 *                     console.log( twitterHandle );
	 *                     
	 *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
	 *             }
	 *         }
	 *     } );
	 * 
	 * 
	 * The function may return the following values:
	 * 
	 * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
	 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
	 * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
	 *   the match.
	 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
	 * 
	 * @constructor
	 * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
	 */
	var Autolinker = function( cfg ) {
		Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.

		this.matchValidator = new Autolinker.MatchValidator();
	};


	Autolinker.prototype = {
		constructor : Autolinker,  // fix constructor property

		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,

		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,

		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,

		/**
		 * @cfg {Boolean} newWindow
		 * 
		 * `true` if the links should open in a new window, `false` otherwise.
		 */
		newWindow : true,

		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text, 
		 * `false` otherwise.
		 */
		stripPrefix : true,

		/**
		 * @cfg {Number} truncate
		 * 
		 * A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of 
		 * a link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by 
		 * adding a two period ellipsis ('..') to the end of the string.
		 * 
		 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
		 * something like this: 'yahoo.com/some/long/pat..'
		 */

		/**
		 * @cfg {String} className
		 * 
		 * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
		 * plus url/email/twitter suffixes for styling url/email/twitter links differently.
		 * 
		 * For example, if this config is provided as "myLink", then:
		 * 
		 * - URL links will have the CSS classes: "myLink myLink-url"
		 * - Email links will have the CSS classes: "myLink myLink-email", and
		 * - Twitter links will have the CSS classes: "myLink myLink-twitter"
		 */
		className : "",

		/**
		 * @cfg {Function} replaceFn
		 * 
		 * A function to individually process each URL/Email/Twitter match found in the input string.
		 * 
		 * See the class's description for usage.
		 * 
		 * This function is called with the following parameters:
		 * 
		 * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
		 *   as the instance's {@link #getTagBuilder tag builder}).
		 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
		 *   {@link Autolinker.match.Url URL}/{@link Autolinker.match.Email email}/{@link Autolinker.match.Twitter Twitter}
		 *   match that the `replaceFn` is currently processing.
		 */


		/**
		 * @private
		 * @property {RegExp} htmlCharacterEntitiesRegex
		 *
		 * The regular expression that matches common HTML character entities.
		 * 
		 * Ignoring &amp; as it could be part of a query string -- handling it separately.
		 */
		htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/gi,

		/**
		 * @private
		 * @property {RegExp} matcherRegex
		 * 
		 * The regular expression that matches URLs, email addresses, and Twitter handles.
		 * 
		 * This regular expression has the following capturing groups:
		 * 
		 * 1. Group that is used to determine if there is a Twitter handle match (i.e. \@someTwitterUser). Simply check for its 
		 *    existence to determine if there is a Twitter handle match. The next couple of capturing groups give information 
		 *    about the Twitter handle match.
		 * 2. The whitespace character before the \@sign in a Twitter handle. This is needed because there are no lookbehinds in
		 *    JS regular expressions, and can be used to reconstruct the original string in a replace().
		 * 3. The Twitter handle itself in a Twitter match. If the match is '@someTwitterUser', the handle is 'someTwitterUser'.
		 * 4. Group that matches an email address. Used to determine if the match is an email address, as well as holding the full 
		 *    address. Ex: 'me@my.com'
		 * 5. Group that matches a URL in the input text. Ex: 'http://google.com', 'www.google.com', or just 'google.com'.
		 *    This also includes a path, url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
		 * 6. Group that matches a protocol URL (i.e. 'http://google.com'). This is used to match protocol URLs with just a single
		 *    word, like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * 7. A protocol-relative ('//') match for the case of a 'www.' prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. We need to know the character before the '//' in order to determine if it is a valid match
		 *    or the // was in a string we don't want to auto-link.
		 * 8. A protocol-relative ('//') match for the case of a known TLD prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. See #6 for more info. 
		 */
		matcherRegex : (function() {
			var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs

			    emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)

			    protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
			    wwwRegex = /(?:www\.)/,                             // starting with 'www.'
			    domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
			    tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)

			    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
			    // http://blog.codinghorror.com/the-problem-with-urls/
			    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;

			return new RegExp( [
				'(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace() 
					// *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and 
					// *** Capturing group $3, which matches the actual twitter handle
					twitterRegex.source,
				')',

				'|',

				'(',  // *** Capturing group $4, which is used to determine an email match
					emailRegex.source,
					domainNameRegex.source,
					tldRegex.source,
				')',

				'|',

				'(',  // *** Capturing group $5, which is used to match a URL
					'(?:', // parens to cover match for protocol (optional), and domain
						'(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
							protocolRegex.source,
							domainNameRegex.source,
						')',

						'|',

						'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
							'(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							wwwRegex.source,
							domainNameRegex.source,
						')',

						'|',

						'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
							'(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							domainNameRegex.source,
							tldRegex.source,
						')',
					')',

					'(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
				')'
			].join( "" ), 'gi' );
		} )(),

		/**
		 * @private
		 * @property {RegExp} charBeforeProtocolRelMatchRegex
		 * 
		 * The regular expression used to retrieve the character before a protocol-relative URL match.
		 * 
		 * This is used in conjunction with the {@link #matcherRegex}, which needs to grab the character before a protocol-relative
		 * '//' due to the lack of a negative look-behind in JavaScript regular expressions. The character before the match is stripped
		 * from the URL.
		 */
		charBeforeProtocolRelMatchRegex : /^(.)?\/\//,

		/**
		 * @private
		 * @property {Autolinker.MatchValidator} matchValidator
		 * 
		 * The MatchValidator object, used to filter out any false positives from the {@link #matcherRegex}. See
		 * {@link Autolinker.MatchValidator} for details.
		 */

		/**
		 * @private
		 * @property {Autolinker.HtmlParser} htmlParser
		 * 
		 * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
		 * in the {@link #getHtmlParser} method.
		 */

		/**
		 * @private
		 * @property {Autolinker.AnchorTagBuilder} tagBuilder
		 * 
		 * The AnchorTagBuilder instance used to build the URL/email/Twitter replacement anchor tags. This is lazily instantiated
		 * in the {@link #getTagBuilder} method.
		 */


		/**
		 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
		 * Does not link URLs found within HTML tags.
		 * 
		 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
		 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
		 * 
		 * This method finds the text around any HTML elements in the input `textOrHtml`, which will be the text that is processed.
		 * Any original HTML elements will be left as-is, as well as the text that is already wrapped in anchor (&lt;a&gt;) tags.
		 * 
		 * @param {String} textOrHtml The HTML or text to link URLs, email addresses, and Twitter handles within (depending on if
		 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
		 * @return {String} The HTML, with URLs/emails/Twitter handles automatically linked.
		 */
		link : function( textOrHtml ) {
			var me = this,  // for closure
			    htmlParser = this.getHtmlParser(),
			    htmlCharacterEntitiesRegex = this.htmlCharacterEntitiesRegex,
			    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
			    resultHtml = [];

			htmlParser.parse( textOrHtml, {
				// Process HTML nodes in the input `textOrHtml`
				processHtmlNode : function( tagText, tagName, isClosingTag ) {
					if( tagName === 'a' ) {
						if( !isClosingTag ) {  // it's the start <a> tag
							anchorTagStackCount++;
						} else {   // it's the end </a> tag
							anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
						}
					}
					resultHtml.push( tagText );  // now add the text of the tag itself verbatim
				},

				// Process text nodes in the input `textOrHtml`
				processTextNode : function( text ) {
					if( anchorTagStackCount === 0 ) {
						// If we're not within an <a> tag, process the text node
						var unescapedText = Autolinker.Util.splitAndCapture( text, htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array

						for ( var i = 0, len = unescapedText.length; i < len; i++ ) {
							var textToProcess = unescapedText[ i ],
							    processedTextNode = me.processTextNode( textToProcess );

							resultHtml.push( processedTextNode );
						}

					} else {
						// `text` is within an <a> tag, simply append the text - we do not want to autolink anything 
						// already within an <a>...</a> tag
						resultHtml.push( text );
					}
				}
			} );

			return resultHtml.join( "" );
		},


		/**
		 * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.HtmlParser}
		 */
		getHtmlParser : function() {
			var htmlParser = this.htmlParser;

			if( !htmlParser ) {
				htmlParser = this.htmlParser = new Autolinker.HtmlParser();
			}

			return htmlParser;
		},


		/**
		 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
		 * if it does not yet exist.
		 * 
		 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that 
		 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
		 * 
		 *     var html = Autolinker.link( "Test google.com", {
		 *         replaceFn : function( autolinker, match ) {
		 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
		 *             tag.setAttr( 'rel', 'nofollow' );
		 *             
		 *             return tag;
		 *         }
		 *     } );
		 *     
		 *     // generated html:
		 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
		 * 
		 * @return {Autolinker.AnchorTagBuilder}
		 */
		getTagBuilder : function() {
			var tagBuilder = this.tagBuilder;

			if( !tagBuilder ) {
				tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
					newWindow   : this.newWindow,
					truncate    : this.truncate,
					className   : this.className
				} );
			}

			return tagBuilder;
		},


		/**
		 * Process the text that lies inbetween HTML tags. This method does the actual wrapping of URLs with
		 * anchor tags.
		 * 
		 * @private
		 * @param {String} text The text to auto-link.
		 * @return {String} The text with anchor tags auto-filled.
		 */
		processTextNode : function( text ) {
			var me = this;  // for closure

			return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 ) {
				var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 );  // match description object

				// Return out with no changes for match types that are disabled (url, email, twitter), or for matches that are 
				// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
				if( !matchDescObj ) {
					return matchStr;

				} else {
					// Generate the replacement text for the match
					var matchReturnVal = me.createMatchReturnVal( matchDescObj.match, matchDescObj.matchStr );
					return matchDescObj.prefixStr + matchReturnVal + matchDescObj.suffixStr;
				}
			} );
		},


		/**
		 * Processes a candidate match from the {@link #matcherRegex}. 
		 * 
		 * Not all matches found by the regex are actual URL/email/Twitter matches, as determined by the {@link #matchValidator}. In
		 * this case, the method returns `null`. Otherwise, a valid Object with `prefixStr`, `match`, and `suffixStr` is returned.
		 * 
		 * @private
		 * @param {String} matchStr The full match that was found by the {@link #matcherRegex}.
		 * @param {String} twitterMatch The matched text of a Twitter handle, if the match is a Twitter match.
		 * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char before the @ sign in a Twitter handle match. This 
		 *   is needed because of no lookbehinds in JS regexes, and is need to re-include the character for the anchor tag replacement.
		 * @param {String} twitterHandle The actual Twitter user (i.e the word after the @ sign in a Twitter match).
		 * @param {String} emailAddressMatch The matched email address for an email address match.
		 * @param {String} urlMatch The matched URL string for a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative match from a 'www' url, with the character that 
		 *   comes before the '//'.
		 * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative match from a TLD (top level domain) match, with 
		 *   the character that comes before the '//'.
		 *   
		 * @return {Object} A "match description object". This will be `null` if the match was invalid, or if a match type is disabled.
		 *   Otherwise, this will be an Object (map) with the following properties:
		 * @return {String} return.prefixStr The char(s) that should be prepended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {String} return.suffixStr The char(s) that should be appended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {String} return.matchStr The `matchStr`, fixed up to remove characters that are no longer needed (which have been
		 *   added to `prefixStr` and `suffixStr`).
		 * @return {Autolinker.match.Match} return.match The Match object that represents the match that was found.
		 */
		processCandidateMatch : function( 
			matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, 
			emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch
		) {
			var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
			    match,  // Will be an Autolinker.match.Match object

			    prefixStr = "",       // A string to use to prefix the anchor tag that is created. This is needed for the Twitter handle match
			    suffixStr = "";       // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.


			// Return out with `null` for match types that are disabled (url, email, twitter), or for matches that are 
			// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
			if(
				( twitterMatch && !this.twitter ) || ( emailAddressMatch && !this.email ) || ( urlMatch && !this.urls ) ||
				!this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch ) 
			) {
				return null;
			}

			// Handle a closing parenthesis at the end of the match, and exclude it if there is not a matching open parenthesis
			// in the match itself. 
			if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
				matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
				suffixStr = ")";  // this will be added after the generated <a> tag
			}


			if( emailAddressMatch ) {
				match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );

			} else if( twitterMatch ) {
				// fix up the `matchStr` if there was a preceding whitespace char, which was needed to determine the match 
				// itself (since there are no look-behinds in JS regexes)
				if( twitterHandlePrefixWhitespaceChar ) {
					prefixStr = twitterHandlePrefixWhitespaceChar;
					matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
				}
				match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );

			} else {  // url match
				// If it's a protocol-relative '//' match, remove the character before the '//' (which the matcherRegex needed
				// to match due to the lack of a negative look-behind in JavaScript regular expressions)
				if( protocolRelativeMatch ) {
					var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";

					if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
						prefixStr = charBeforeMatch;
						matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
					}
				}

				match = new Autolinker.match.Url( {
					matchedText : matchStr,
					url : matchStr,
					protocolUrlMatch : !!protocolUrlMatch,
					protocolRelativeMatch : !!protocolRelativeMatch,
					stripPrefix : this.stripPrefix
				} );
			}

			return {
				prefixStr : prefixStr,
				suffixStr : suffixStr,
				matchStr  : matchStr,
				match     : match
			};
		},


		/**
		 * Determines if a match found has an unmatched closing parenthesis. If so, this parenthesis will be removed
		 * from the match itself, and appended after the generated anchor tag in {@link #processTextNode}.
		 * 
		 * A match may have an extra closing parenthesis at the end of the match because the regular expression must include parenthesis
		 * for URLs such as "wikipedia.com/something_(disambiguation)", which should be auto-linked. 
		 * 
		 * However, an extra parenthesis *will* be included when the URL itself is wrapped in parenthesis, such as in the case of
		 * "(wikipedia.com/something_(disambiguation))". In this case, the last closing parenthesis should *not* be part of the URL 
		 * itself, and this method will return `true`.
		 * 
		 * @private
		 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
		 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at the end of the `matchStr`, `false` otherwise.
		 */
		matchHasUnbalancedClosingParen : function( matchStr ) {
			var lastChar = matchStr.charAt( matchStr.length - 1 );

			if( lastChar === ')' ) {
				var openParensMatch = matchStr.match( /\(/g ),
				    closeParensMatch = matchStr.match( /\)/g ),
				    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
				    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;

				if( numOpenParens < numCloseParens ) {
					return true;
				}
			}

			return false;
		},


		/**
		 * Creates the return string value for a given match in the input string, for the {@link #processTextNode} method.
		 * 
		 * This method handles the {@link #replaceFn}, if one was provided.
		 * 
		 * @private
		 * @param {Autolinker.match.Match} match The Match object that represents the match.
		 * @param {String} matchStr The original match string, after having been preprocessed to fix match edge cases (see
		 *   the `prefixStr` and `suffixStr` vars in {@link #processTextNode}.
		 * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
		 *   may be the `matchStr` itself if the match is not to be replaced.
		 */
		createMatchReturnVal : function( match, matchStr ) {
			// Handle a custom `replaceFn` being provided
			var replaceFnResult;
			if( this.replaceFn ) {
				replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
			}

			if( typeof replaceFnResult === 'string' ) {
				return replaceFnResult;  // `replaceFn` returned a string, use that

			} else if( replaceFnResult === false ) {
				return matchStr;  // no replacement for the match

			} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
				return replaceFnResult.toString();

			} else {  // replaceFnResult === true, or no/unknown return value from function
				// Perform Autolinker's default anchor tag generation
				var tagBuilder = this.getTagBuilder(),
				    anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance

				return anchorTag.toString();
			}
		}

	};


	/**
	 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
	 * Does not link URLs found within HTML tags.
	 * 
	 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
	 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 * 
	 * Example:
	 * 
	 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
	 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
	 * 
	 * @static
	 * @param {String} textOrHtml The HTML or text to find URLs, email addresses, and Twitter handles within (depending on if
	 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker class, specified in an Object (map).
	 *   See the class description for an example call.
	 * @return {String} The HTML text, with URLs automatically linked
	 */
	Autolinker.link = function( textOrHtml, options ) {
		var autolinker = new Autolinker( options );
		return autolinker.link( textOrHtml );
	};


	// Namespace for `match` classes
	Autolinker.match = {};
	/*global Autolinker */
	/*jshint eqnull:true, boss:true */
	/**
	 * @class Autolinker.Util
	 * @singleton
	 * 
	 * A few utility methods for Autolinker.
	 */
	Autolinker.Util = {

		/**
		 * @property {Function} abstractMethod
		 * 
		 * A function object which represents an abstract method.
		 */
		abstractMethod : function() { throw "abstract"; },


		/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`.
		 * 
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */
		assign : function( dest, src ) {
			for( var prop in src ) {
				if( src.hasOwnProperty( prop ) ) {
					dest[ prop ] = src[ prop ];
				}
			}

			return dest;
		},


		/**
		 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
		 * 
		 * @param {Function} superclass The constructor function for the superclass.
		 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
		 *   special property `constructor`, which will be used as the new subclass's constructor function.
		 * @return {Function} The new subclass function.
		 */
		extend : function( superclass, protoProps ) {
			var superclassProto = superclass.prototype;

			var F = function() {};
			F.prototype = superclassProto;

			var subclass;
			if( protoProps.hasOwnProperty( 'constructor' ) ) {
				subclass = protoProps.constructor;
			} else {
				subclass = function() { superclassProto.constructor.apply( this, arguments ); };
			}

			var subclassProto = subclass.prototype = new F();  // set up prototype chain
			subclassProto.constructor = subclass;  // fix constructor property
			subclassProto.superclass = superclassProto;

			delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
			Autolinker.Util.assign( subclassProto, protoProps );

			return subclass;
		},


		/**
		 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
		 * end of the string (by default, two periods: '..'). If the `str` length does not exceed 
		 * `len`, the string will be returned unchanged.
		 * 
		 * @param {String} str The string to truncate and add an ellipsis to.
		 * @param {Number} truncateLen The length to truncate the string at.
		 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
		 *   when truncated. Defaults to '..'
		 */
		ellipsis : function( str, truncateLen, ellipsisChars ) {
			if( str.length > truncateLen ) {
				ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
				str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
			}
			return str;
		},


		/**
		 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
		 * 
		 * @param {Array} arr The array to find an element of.
		 * @param {*} element The element to find in the array, and return the index of.
		 * @return {Number} The index of the `element`, or -1 if it was not found.
		 */
		indexOf : function( arr, element ) {
			if( Array.prototype.indexOf ) {
				return arr.indexOf( element );

			} else {
				for( var i = 0, len = arr.length; i < len; i++ ) {
					if( arr[ i ] === element ) return i;
				}
				return -1;
			}
		},



		/**
		 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
		 * with a regular expression that contains capturing parenthesis.
		 * 
		 * For example:
		 * 
		 *     // Modern browsers: 
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
		 *     
		 *     // Old IE (including IE8):
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
		 *     
		 * This method emulates the functionality of modern browsers for the old IE case.
		 * 
		 * @param {String} str The string to split.
		 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
		 *   character(s) will be spliced into the array, as in the "modern browsers" example in the 
		 *   description of this method. 
		 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
		 *   Note #2: for simplicity's sake, the regular expression does not need 
		 *   to contain capturing parenthesis - it will be assumed that any match has them.
		 * @return {String[]} The split array of strings, with the splitting character(s) included.
		 */
		splitAndCapture : function( str, splitRegex ) {
			if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );

			var result = [],
			    lastIdx = 0,
			    match;

			while( match = splitRegex.exec( str ) ) {
				result.push( str.substring( lastIdx, match.index ) );
				result.push( match[ 0 ] );  // push the splitting char(s)

				lastIdx = match.index + match[ 0 ].length;
			}
			result.push( str.substring( lastIdx ) );

			return result;
		}

	};
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.HtmlParser
	 * @extends Object
	 * 
	 * An HTML parser implementation which simply walks an HTML string and calls the provided visitor functions to process 
	 * HTML and text nodes.
	 * 
	 * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, basically ignoring HTML tags.
	 */
	Autolinker.HtmlParser = Autolinker.Util.extend( Object, {

		/**
		 * @private
		 * @property {RegExp} htmlRegex
		 * 
		 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
		 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
		 * 
		 * Capturing groups:
		 * 
		 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
		 * 2. If it is an end tag, this group will have the '/'.
		 * 3. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
		 */
		htmlRegex : (function() {
			var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
			    attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
			    attrValueRegex = /(?:".*?"|'.*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
			    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'

			return new RegExp( [
				// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
				'(?:',
					'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag

						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',  // one or more whitespace chars before an attribute

							// Either:
							// A. attr="value", or 
							// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
							'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
						')*',
					'>',
				')',

				'|',

				// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
				'(?:',
					'<(/)?',  // Beginning of a tag. Either '<' for a start tag, or '</' for an end tag. 
					          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.

						// *** Capturing Group 3 - The tag name
						'(' + tagNameRegex.source + ')',

						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',                // one or more whitespace chars before an attribute
							nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
						')*',

						'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
					'>',
				')'
			].join( "" ), 'gi' );
		} )(),


		/**
		 * Walks an HTML string, calling the `options.processHtmlNode` function for each HTML tag that is encountered, and calling
		 * the `options.processTextNode` function when each text around HTML tags is encountered.
		 * 
		 * @param {String} html The HTML to parse.
		 * @param {Object} [options] An Object (map) which may contain the following properties:
		 * 
		 * @param {Function} [options.processHtmlNode] A visitor function which allows processing of an encountered HTML node.
		 *   This function is called with the following arguments:
		 * @param {String} [options.processHtmlNode.tagText] The HTML tag text that was found.
		 * @param {String} [options.processHtmlNode.tagName] The tag name for the HTML tag that was found. Ex: 'a' for an anchor tag.
		 * @param {String} [options.processHtmlNode.isClosingTag] `true` if the tag is a closing tag (ex: &lt;/a&gt;), `false` otherwise.
		 *  
		 * @param {Function} [options.processTextNode] A visitor function which allows processing of an encountered text node.
		 *   This function is called with the following arguments:
		 * @param {String} [options.processTextNode.text] The text node that was matched.
		 */
		parse : function( html, options ) {
			options = options || {};

			var processHtmlNodeVisitor = options.processHtmlNode || function() {},
			    processTextNodeVisitor = options.processTextNode || function() {},
			    htmlRegex = this.htmlRegex,
			    currentResult,
			    lastIndex = 0;

			// Loop over the HTML string, ignoring HTML tags, and processing the text that lies between them,
			// wrapping the URLs in anchor tags
			while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
				var tagText = currentResult[ 0 ],
				    tagName = currentResult[ 1 ] || currentResult[ 3 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a") 
				    isClosingTag = !!currentResult[ 2 ],
				    inBetweenTagsText = html.substring( lastIndex, currentResult.index );

				if( inBetweenTagsText ) {
					processTextNodeVisitor( inBetweenTagsText );
				}

				processHtmlNodeVisitor( tagText, tagName.toLowerCase(), isClosingTag );

				lastIndex = currentResult.index + tagText.length;
			}

			// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
			if( lastIndex < html.length ) {
				var text = html.substring( lastIndex );

				if( text ) {
					processTextNodeVisitor( text );
				}
			}
		}

	} );
	/*global Autolinker */
	/*jshint boss:true */
	/**
	 * @class Autolinker.HtmlTag
	 * @extends Object
	 * 
	 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
	 * 
	 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
	 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
	 * 
	 * ## Examples
	 * 
	 * Example instantiation:
	 * 
	 *     var tag = new Autolinker.HtmlTag( {
	 *         tagName : 'a',
	 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
	 *         innerHtml : 'Google'
	 *     } );
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 *     // Individual accessor methods
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 * 
	 * 
	 * Using mutator methods (which may be used in combination with instantiation config properties):
	 * 
	 *     var tag = new Autolinker.HtmlTag();
	 *     tag.setTagName( 'a' );
	 *     tag.setAttr( 'href', 'http://google.com' );
	 *     tag.addClass( 'external-link' );
	 *     tag.setInnerHtml( 'Google' );
	 *     
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 * 
	 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *     
	 *     
	 * ## Example use with a new tag for the replacement
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = new Autolinker.HtmlTag( {
	 *                 tagName : 'button',
	 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
	 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
	 *             } );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
	 */
	Autolinker.HtmlTag = Autolinker.Util.extend( Object, {

		/**
		 * @cfg {String} tagName
		 * 
		 * The tag name. Ex: 'a', 'button', etc.
		 * 
		 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toString}
		 * is executed.
		 */

		/**
		 * @cfg {Object.<String, String>} attrs
		 * 
		 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
		 * values are the attribute values.
		 */

		/**
		 * @cfg {String} innerHtml
		 * 
		 * The inner HTML for the tag. 
		 * 
		 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym 
		 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
		 * if you prefer, but this one is recommended.
		 */

		/**
		 * @cfg {String} innerHTML
		 * 
		 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
		 * for acronym names.
		 */


		/**
		 * @protected
		 * @property {RegExp} whitespaceRegex
		 * 
		 * Regular expression used to match whitespace in a string of CSS classes.
		 */
		whitespaceRegex : /\s+/,


		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );

			this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
		},


		/**
		 * Sets the tag name that will be used to generate the tag with.
		 * 
		 * @param {String} tagName
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setTagName : function( tagName ) {
			this.tagName = tagName;
			return this;
		},


		/**
		 * Retrieves the tag name.
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName || "";
		},


		/**
		 * Sets an attribute on the HtmlTag.
		 * 
		 * @param {String} attrName The attribute name to set.
		 * @param {String} attrValue The attribute value to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttr : function( attrName, attrValue ) {
			var tagAttrs = this.getAttrs();
			tagAttrs[ attrName ] = attrValue;

			return this;
		},


		/**
		 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
		 * 
		 * @param {String} name The attribute name to retrieve.
		 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
		 */
		getAttr : function( attrName ) {
			return this.getAttrs()[ attrName ];
		},


		/**
		 * Sets one or more attributes on the HtmlTag.
		 * 
		 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttrs : function( attrs ) {
			var tagAttrs = this.getAttrs();
			Autolinker.Util.assign( tagAttrs, attrs );

			return this;
		},


		/**
		 * Retrieves the attributes Object (map) for the HtmlTag.
		 * 
		 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
		 */
		getAttrs : function() {
			return this.attrs || ( this.attrs = {} );
		},


		/**
		 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setClass : function( cssClass ) {
			return this.setAttr( 'class', cssClass );
		},


		/**
		 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to add.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		addClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    newClasses = cssClass.split( whitespaceRegex ),
			    newClass;

			while( newClass = newClasses.shift() ) {
				if( indexOf( classes, newClass ) === -1 ) {
					classes.push( newClass );
				}
			}

			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},


		/**
		 * Convenience method to remove one or more CSS classes from the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to remove.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		removeClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    removeClasses = cssClass.split( whitespaceRegex ),
			    removeClass;

			while( classes.length && ( removeClass = removeClasses.shift() ) ) {
				var idx = indexOf( classes, removeClass );
				if( idx !== -1 ) {
					classes.splice( idx, 1 );
				}
			}

			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},


		/**
		 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
		 * there are multiple.
		 * 
		 * @return {String}
		 */
		getClass : function() {
			return this.getAttrs()[ 'class' ] || "";
		},


		/**
		 * Convenience method to check if the tag has a CSS class or not.
		 * 
		 * @param {String} cssClass The CSS class to check for.
		 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
		 */
		hasClass : function( cssClass ) {
			return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
		},


		/**
		 * Sets the inner HTML for the tag.
		 * 
		 * @param {String} html The inner HTML to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setInnerHtml : function( html ) {
			this.innerHtml = html;

			return this;
		},


		/**
		 * Retrieves the inner HTML for the tag.
		 * 
		 * @return {String}
		 */
		getInnerHtml : function() {
			return this.innerHtml || "";
		},


		/**
		 * Override of superclass method used to generate the HTML string for the tag.
		 * 
		 * @return {String}
		 */
		toString : function() {
			var tagName = this.getTagName(),
			    attrsStr = this.buildAttrsStr();

			attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes

			return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
		},


		/**
		 * Support method for {@link #toString}, returns the string space-separated key="value" pairs, used to populate 
		 * the stringified HtmlTag.
		 * 
		 * @protected
		 * @return {String} Example return: `attr1="value1" attr2="value2"`
		 */
		buildAttrsStr : function() {
			if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string

			var attrs = this.getAttrs(),
			    attrsArr = [];

			for( var prop in attrs ) {
				if( attrs.hasOwnProperty( prop ) ) {
					attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
				}
			}
			return attrsArr.join( " " );
		}

	} );
	/*global Autolinker */
	/*jshint scripturl:true */
	/**
	 * @private
	 * @class Autolinker.MatchValidator
	 * @extends Object
	 * 
	 * Used by Autolinker to filter out false positives from the {@link Autolinker#matcherRegex}.
	 * 
	 * Due to the limitations of regular expressions (including the missing feature of look-behinds in JS regular expressions),
	 * we cannot always determine the validity of a given match. This class applies a bit of additional logic to filter out any
	 * false positives that have been matched by the {@link Autolinker#matcherRegex}.
	 */
	Autolinker.MatchValidator = Autolinker.Util.extend( Object, {

		/**
		 * @private
		 * @property {RegExp} invalidProtocolRelMatchRegex
		 * 
		 * The regular expression used to check a potential protocol-relative URL match, coming from the 
		 * {@link Autolinker#matcherRegex}. A protocol-relative URL is, for example, "//yahoo.com"
		 * 
		 * This regular expression checks to see if there is a word character before the '//' match in order to determine if 
		 * we should actually autolink a protocol-relative URL. This is needed because there is no negative look-behind in 
		 * JavaScript regular expressions. 
		 * 
		 * For instance, we want to autolink something like "Go to: //google.com", but we don't want to autolink something 
		 * like "abc//google.com"
		 */
		invalidProtocolRelMatchRegex : /^[\w]\/\//,

		/**
		 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
		 * 
		 * @private
		 * @property {RegExp} hasFullProtocolRegex
		 */
		hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,

		/**
		 * Regex to find the URI scheme, such as 'mailto:'.
		 * 
		 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
		 * 
		 * @private
		 * @property {RegExp} uriSchemeRegex
		 */
		uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,

		/**
		 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
		 * 
		 * @private
		 * @property {RegExp} hasWordCharAfterProtocolRegex
		 */
		hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,


		/**
		 * Determines if a given match found by {@link Autolinker#processTextNode} is valid. Will return `false` for:
		 * 
		 * 1) URL matches which do not have at least have one period ('.') in the domain name (effectively skipping over 
		 *    matches like "abc:def"). However, URL matches with a protocol will be allowed (ex: 'http://localhost')
		 * 2) URL matches which do not have at least one word character in the domain name (effectively skipping over
		 *    matches like "git:1.0").
		 * 3) A protocol-relative url match (a URL beginning with '//') whose previous character is a word character 
		 *    (effectively skipping over strings like "abc//google.com")
		 * 
		 * Otherwise, returns `true`.
		 * 
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if the match given is valid and should be processed, or `false` if the match is invalid and/or 
		 *   should just not be processed.
		 */
		isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
			if(
				( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
				this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
				this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
				this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
			) {
				return false;
			}

			return true;
		},


		/**
		 * Determines if the URI scheme is a valid scheme to be autolinked. Returns `false` if the scheme is 
		 * 'javascript:' or 'vbscript:'
		 * 
		 * @private
		 * @param {String} uriSchemeMatch The match URL string for a full URI scheme match. Ex: 'http://yahoo.com' 
		 *   or 'mailto:a@a.com'.
		 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
		 */
		isValidUriScheme : function( uriSchemeMatch ) {
			var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ];

			return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
		},


		/**
		 * Determines if a URL match does not have either:
		 * 
		 * a) a full protocol (i.e. 'http://'), or
		 * b) at least one dot ('.') in the domain name (for a non-full-protocol match).
		 * 
		 * Either situation is considered an invalid URL (ex: 'git:d' does not have either the '://' part, or at least one dot
		 * in the domain name. If the match was 'git:abc.com', we would consider this valid.)
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @return {Boolean} `true` if the URL match does not have a full protocol, or at least one dot ('.') in a non-full-protocol
		 *   match.
		 */
		urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
			return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
		},


		/**
		 * Determines if a URL match does not have at least one word character after the protocol (i.e. in the domain name).
		 * 
		 * At least one letter character must exist in the domain name after a protocol match. Ex: skip over something 
		 * like "git:1.0"
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to
		 *   know whether or not we have a protocol in the URL string, in order to check for a word character after the protocol
		 *   separator (':').
		 * @return {Boolean} `true` if the URL match does not have at least one word character in it after the protocol, `false`
		 *   otherwise.
		 */
		urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
			if( urlMatch && protocolUrlMatch ) {
				return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
			} else {
				return false;
			}
		},


		/**
		 * Determines if a protocol-relative match is an invalid one. This method returns `true` if there is a `protocolRelativeMatch`,
		 * and that match contains a word character before the '//' (i.e. it must contain whitespace or nothing before the '//' in
		 * order to be considered valid).
		 * 
		 * @private
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if it is an invalid protocol-relative match, `false` otherwise.
		 */
		isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
			return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
		}

	} );
	/*global Autolinker */
	/*jshint sub:true */
	/**
	 * @protected
	 * @class Autolinker.AnchorTagBuilder
	 * @extends Object
	 * 
	 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
	 * 
	 * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may 
	 * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
	 * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 */
	Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {

		/**
		 * @cfg {Boolean} newWindow
		 * @inheritdoc Autolinker#newWindow
		 */

		/**
		 * @cfg {Number} truncate
		 * @inheritdoc Autolinker#truncate
		 */

		/**
		 * @cfg {String} className
		 * @inheritdoc Autolinker#className
		 */


		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},


		/**
		 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,
		 * via its `match` object.
		 * 
		 * @param {Autolinker.match.Match} match The Match instance to generate an anchor tag from.
		 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
		 */
		build : function( match ) {
			var tag = new Autolinker.HtmlTag( {
				tagName   : 'a',
				attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
				innerHtml : this.processAnchorText( match.getAnchorText() )
			} );

			return tag;
		},


		/**
		 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.
		 * 
		 * @protected
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @param {String} href The href for the anchor tag.
		 * @return {Object} A key/value Object (map) of the anchor tag's attributes. 
		 */
		createAttrs : function( matchType, anchorHref ) {
			var attrs = {
				'href' : anchorHref  // we'll always have the `href` attribute
			};

			var cssClass = this.createCssClass( matchType );
			if( cssClass ) {
				attrs[ 'class' ] = cssClass;
			}
			if( this.newWindow ) {
				attrs[ 'target' ] = "_blank";
			}

			return attrs;
		},


		/**
		 * Creates the CSS class that will be used for a given anchor tag, based on the `matchType` and the {@link #className}
		 * config.
		 * 
		 * @private
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @return {String} The CSS class string for the link. Example return: "myLink myLink-url". If no {@link #className}
		 *   was configured, returns an empty string.
		 */
		createCssClass : function( matchType ) {
			var className = this.className;

			if( !className ) 
				return "";
			else
				return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", or "myLink myLink-twitter"
		},


		/**
		 * Processes the `anchorText` by truncating the text according to the {@link #truncate} config.
		 * 
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The processed `anchorText`.
		 */
		processAnchorText : function( anchorText ) {
			anchorText = this.doTruncate( anchorText );

			return anchorText;
		},


		/**
		 * Performs the truncation of the `anchorText`, if the `anchorText` is longer than the {@link #truncate} option.
		 * Truncates the text to 2 characters fewer than the {@link #truncate} option, and adds ".." to the end.
		 * 
		 * @private
		 * @param {String} text The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The truncated anchor text.
		 */
		doTruncate : function( anchorText ) {
			return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
		}

	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.match.Match
	 * 
	 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a 
	 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                 case 'email' :
	 *                     console.log( "email: ", match.getEmail() );
	 *                     
	 *                 case 'twitter' :
	 *                     console.log( "twitter: ", match.getTwitterHandle() );
	 *             }
	 *         }
	 *     } );
	 *     
	 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
	 */
	Autolinker.match.Match = Autolinker.Util.extend( Object, {

		/**
		 * @cfg {String} matchedText (required)
		 * 
		 * The original text that was matched.
		 */


		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},


		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,


		/**
		 * Returns the original text that was matched.
		 * 
		 * @return {String}
		 */
		getMatchedText : function() {
			return this.matchedText;
		},


		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorHref : Autolinker.Util.abstractMethod,


		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorText : Autolinker.Util.abstractMethod

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Email
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Email match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {

		/**
		 * @cfg {String} email (required)
		 * 
		 * The email address that was matched.
		 */


		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'email';
		},


		/**
		 * Returns the email address that was matched.
		 * 
		 * @return {String}
		 */
		getEmail : function() {
			return this.email;
		},


		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'mailto:' + this.email;
		},


		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return this.email;
		}

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Twitter
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Twitter match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {

		/**
		 * @cfg {String} twitterHandle (required)
		 * 
		 * The Twitter handle that was matched.
		 */


		/**
		 * Returns the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'twitter';
		},


		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getTwitterHandle : function() {
			return this.twitterHandle;
		},


		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'https://twitter.com/' + this.twitterHandle;
		},


		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return '@' + this.twitterHandle;
		}

	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Url
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Url match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {

		/**
		 * @cfg {String} url (required)
		 * 
		 * The url that was matched.
		 */

		/**
		 * @cfg {Boolean} protocolUrlMatch (required)
		 * 
		 * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
		 * known TLD match.
		 */

		/**
		 * @cfg {Boolean} protocolRelativeMatch (required)
		 * 
		 * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
		 * and will be either http:// or https:// based on the protocol that the site is loaded under.
		 */

		/**
		 * @cfg {Boolean} stripPrefix (required)
		 * @inheritdoc Autolinker#stripPrefix
		 */


		/**
		 * @private
		 * @property {RegExp} urlPrefixRegex
		 * 
		 * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
		 */
		urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,

		/**
		 * @private
		 * @property {RegExp} protocolRelativeRegex
		 * 
		 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
		 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
		 */
		protocolRelativeRegex : /^\/\//,

		/**
		 * @private
		 * @property {Boolean} protocolPrepended
		 * 
		 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
		 * {@link #url} did not have a protocol)
		 */
		protocolPrepended : false,


		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'url';
		},


		/**
		 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
		 * match was missing a protocol.
		 * 
		 * @return {String}
		 */
		getUrl : function() {
			var url = this.url;

			// if the url string doesn't begin with a protocol, assume 'http://'
			if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
				url = this.url = 'http://' + url;

				this.protocolPrepended = true;
			}

			return url;
		},


		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			var url = this.getUrl();

			return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html 
		},


		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			var anchorText = this.getUrl();

			if( this.protocolRelativeMatch ) {
				// Strip off any protocol-relative '//' from the anchor text
				anchorText = this.stripProtocolRelativePrefix( anchorText );
			}
			if( this.stripPrefix ) {
				anchorText = this.stripUrlPrefix( anchorText );
			}
			anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one

			return anchorText;
		},


		// ---------------------------------------

		// Utility Functionality

		/**
		 * Strips the URL prefix (such as "http://" or "https://") from the given text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   url prefix (such as stripping off "http://")
		 * @return {String} The `anchorText`, with the prefix stripped.
		 */
		stripUrlPrefix : function( text ) {
			return text.replace( this.urlPrefixRegex, '' );
		},


		/**
		 * Strips any protocol-relative '//' from the anchor text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   protocol-relative prefix (such as stripping off "//")
		 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
		 */
		stripProtocolRelativePrefix : function( text ) {
			return text.replace( this.protocolRelativeRegex, '' );
		},


		/**
		 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
		 * 
		 * @private
		 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
		 *   slash ('/') that may exist.
		 * @return {String} The `anchorText`, with the trailing slash removed.
		 */
		removeTrailingSlash : function( anchorText ) {
			if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
				anchorText = anchorText.slice( 0, -1 );
			}
			return anchorText;
		}

	} );

	return Autolinker;


}));

},{}],61:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
"use strict";
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]);
angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]);
angular.module('ui.bootstrap.transition', []).factory('$transition', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {
  var $transition = function(element, trigger, options) {
    options = options || {};
    var deferred = $q.defer();
    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
    var transitionEndHandler = function(event) {
      $rootScope.$apply(function() {
        element.unbind(endEventName, transitionEndHandler);
        deferred.resolve(element);
      });
    };
    if (endEventName) {
      element.bind(endEventName, transitionEndHandler);
    }
    $timeout(function() {
      if (angular.isString(trigger)) {
        element.addClass(trigger);
      } else if (angular.isFunction(trigger)) {
        trigger(element);
      } else if (angular.isObject(trigger)) {
        element.css(trigger);
      }
      if (!endEventName) {
        deferred.resolve(element);
      }
    });
    deferred.promise.cancel = function() {
      if (endEventName) {
        element.unbind(endEventName, transitionEndHandler);
      }
      deferred.reject('Transition cancelled');
    };
    return deferred.promise;
  };
  var transElement = document.createElement('trans');
  var transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'transition': 'transitionend'
  };
  var animationEndEventNames = {
    'WebkitTransition': 'webkitAnimationEnd',
    'MozTransition': 'animationend',
    'OTransition': 'oAnimationEnd',
    'transition': 'animationend'
  };
  function findEndEventName(endEventNames) {
    for (var name in endEventNames) {
      if (transElement.style[name] !== undefined) {
        return endEventNames[name];
      }
    }
  }
  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
  return $transition;
}]);
angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', ['$transition', function($transition) {
  return {link: function(scope, element, attrs) {
      var initialAnimSkip = true;
      var currentTransition;
      function doTransition(change) {
        var newTransition = $transition(element, change);
        if (currentTransition) {
          currentTransition.cancel();
        }
        currentTransition = newTransition;
        newTransition.then(newTransitionDone, newTransitionDone);
        return newTransition;
        function newTransitionDone() {
          if (currentTransition === newTransition) {
            currentTransition = undefined;
          }
        }
      }
      function expand() {
        if (initialAnimSkip) {
          initialAnimSkip = false;
          expandDone();
        } else {
          element.removeClass('collapse').addClass('collapsing');
          doTransition({height: element[0].scrollHeight + 'px'}).then(expandDone);
        }
      }
      function expandDone() {
        element.removeClass('collapsing');
        element.addClass('collapse in');
        element.css({height: 'auto'});
      }
      function collapse() {
        if (initialAnimSkip) {
          initialAnimSkip = false;
          collapseDone();
          element.css({height: 0});
        } else {
          element.css({height: element[0].scrollHeight + 'px'});
          var x = element[0].offsetWidth;
          element.removeClass('collapse in').addClass('collapsing');
          doTransition({height: 0}).then(collapseDone);
        }
      }
      function collapseDone() {
        element.removeClass('collapsing');
        element.addClass('collapse');
      }
      scope.$watch(attrs.collapse, function(shouldCollapse) {
        if (shouldCollapse) {
          collapse();
        } else {
          expand();
        }
      });
    }};
}]);
angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', {closeOthers: true}).controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function($scope, $attrs, accordionConfig) {
  this.groups = [];
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if (closeOthers) {
      angular.forEach(this.groups, function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
  };
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);
    groupScope.$on('$destroy', function(event) {
      that.removeGroup(groupScope);
    });
  };
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  };
}]).directive('accordion', function() {
  return {
    restrict: 'EA',
    controller: 'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
}).directive('accordionGroup', function() {
  return {
    require: '^accordion',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/accordion/accordion-group.html',
    scope: {
      heading: '@',
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);
      scope.$watch('isOpen', function(value) {
        if (value) {
          accordionCtrl.closeOthers(scope);
        }
      });
      scope.toggleOpen = function() {
        if (!scope.isDisabled) {
          scope.isOpen = !scope.isOpen;
        }
      };
    }
  };
}).directive('accordionHeading', function() {
  return {
    restrict: 'EA',
    transclude: true,
    template: '',
    replace: true,
    require: '^accordionGroup',
    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
      accordionGroupCtrl.setHeading(transclude(scope, function() {}));
    }
  };
}).directive('accordionTransclude', function() {
  return {
    require: '^accordionGroup',
    link: function(scope, element, attr, controller) {
      scope.$watch(function() {
        return controller[attr.accordionTransclude];
      }, function(heading) {
        if (heading) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
});
angular.module('ui.bootstrap.alert', []).controller('AlertController', ['$scope', '$attrs', function($scope, $attrs) {
  $scope.closeable = 'close' in $attrs;
  this.close = $scope.close;
}]).directive('alert', function() {
  return {
    restrict: 'EA',
    controller: 'AlertController',
    templateUrl: 'template/alert/alert.html',
    transclude: true,
    replace: true,
    scope: {
      type: '@',
      close: '&'
    }
  };
}).directive('dismissOnTimeout', ['$timeout', function($timeout) {
  return {
    require: 'alert',
    link: function(scope, element, attrs, alertCtrl) {
      $timeout(function() {
        alertCtrl.close();
      }, parseInt(attrs.dismissOnTimeout, 10));
    }
  };
}]);
angular.module('ui.bootstrap.bindHtml', []).directive('bindHtmlUnsafe', function() {
  return function(scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
    scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
});
angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}]).directive('btnRadio', function() {
  return {
    require: ['btnRadio', 'ngModel'],
    controller: 'ButtonsController',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };
      element.bind(buttonsCtrl.toggleEvent, function() {
        var isActive = element.hasClass(buttonsCtrl.activeClass);
        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function() {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
}).directive('btnCheckbox', function() {
  return {
    require: ['btnCheckbox', 'ngModel'],
    controller: 'ButtonsController',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }
      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }
      function getCheckboxValue(attributeValue, defaultValue) {
        var val = scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };
      element.bind(buttonsCtrl.toggleEvent, function() {
        scope.$apply(function() {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', ['$scope', '$timeout', '$interval', '$transition', function($scope, $timeout, $interval, $transition) {
  var self = this,
      slides = self.slides = $scope.slides = [],
      currentIndex = -1,
      currentInterval,
      isPlaying;
  self.currentSlide = null;
  var destroyed = false;
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = slides.indexOf(nextSlide);
    if (direction === undefined) {
      direction = nextIndex > currentIndex ? 'next' : 'prev';
    }
    if (nextSlide && nextSlide !== self.currentSlide) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition.cancel();
        $timeout(goNext);
      } else {
        goNext();
      }
    }
    function goNext() {
      if (destroyed) {
        return;
      }
      if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
        nextSlide.$element.addClass(direction);
        var reflow = nextSlide.$element[0].offsetWidth;
        angular.forEach(slides, function(slide) {
          angular.extend(slide, {
            direction: '',
            entering: false,
            leaving: false,
            active: false
          });
        });
        angular.extend(nextSlide, {
          direction: direction,
          active: true,
          entering: true
        });
        angular.extend(self.currentSlide || {}, {
          direction: direction,
          leaving: true
        });
        $scope.$currentTransition = $transition(nextSlide.$element, {});
        (function(next, current) {
          $scope.$currentTransition.then(function() {
            transitionDone(next, current);
          }, function() {
            transitionDone(next, current);
          });
        }(nextSlide, self.currentSlide));
      } else {
        transitionDone(nextSlide, self.currentSlide);
      }
      self.currentSlide = nextSlide;
      currentIndex = nextIndex;
      restartTimer();
    }
    function transitionDone(next, current) {
      angular.extend(next, {
        direction: '',
        active: true,
        leaving: false,
        entering: false
      });
      angular.extend(current || {}, {
        direction: '',
        active: false,
        leaving: false,
        entering: false
      });
      $scope.$currentTransition = null;
    }
  };
  $scope.$on('$destroy', function() {
    destroyed = true;
  });
  self.indexOfSlide = function(slide) {
    return slides.indexOf(slide);
  };
  $scope.next = function() {
    var newIndex = (currentIndex + 1) % slides.length;
    if (!$scope.$currentTransition) {
      return self.select(slides[newIndex], 'next');
    }
  };
  $scope.prev = function() {
    var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    if (!$scope.$currentTransition) {
      return self.select(slides[newIndex], 'prev');
    }
  };
  $scope.isActive = function(slide) {
    return self.currentSlide === slide;
  };
  $scope.$watch('interval', restartTimer);
  $scope.$on('$destroy', resetTimer);
  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }
  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }
  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }
  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };
  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };
  self.addSlide = function(slide, element) {
    slide.$element = element;
    slides.push(slide);
    if (slides.length === 1 || slide.active) {
      self.select(slides[slides.length - 1]);
      if (slides.length == 1) {
        $scope.play();
      }
    } else {
      slide.active = false;
    }
  };
  self.removeSlide = function(slide) {
    var index = slides.indexOf(slide);
    slides.splice(index, 1);
    if (slides.length > 0 && slide.active) {
      if (index >= slides.length) {
        self.select(slides[index - 1]);
      } else {
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
    }
  };
}]).directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'template/carousel/carousel.html',
    scope: {
      interval: '=',
      noTransition: '=',
      noPause: '='
    }
  };
}]).directive('slide', function() {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: {active: '=?'},
    link: function(scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });
      scope.$watch('active', function(active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
});
angular.module('ui.bootstrap.dateparser', []).service('dateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {
  this.parsers = {};
  var formatCodeToRegex = {
    'yyyy': {
      regex: '\\d{4}',
      apply: function(value) {
        this.year = +value;
      }
    },
    'yy': {
      regex: '\\d{2}',
      apply: function(value) {
        this.year = +value + 2000;
      }
    },
    'y': {
      regex: '\\d{1,4}',
      apply: function(value) {
        this.year = +value;
      }
    },
    'MMMM': {
      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
      apply: function(value) {
        this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value);
      }
    },
    'MMM': {
      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
      apply: function(value) {
        this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value);
      }
    },
    'MM': {
      regex: '0[1-9]|1[0-2]',
      apply: function(value) {
        this.month = value - 1;
      }
    },
    'M': {
      regex: '[1-9]|1[0-2]',
      apply: function(value) {
        this.month = value - 1;
      }
    },
    'dd': {
      regex: '[0-2][0-9]{1}|3[0-1]{1}',
      apply: function(value) {
        this.date = +value;
      }
    },
    'd': {
      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
      apply: function(value) {
        this.date = +value;
      }
    },
    'EEEE': {regex: $locale.DATETIME_FORMATS.DAY.join('|')},
    'EEE': {regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')}
  };
  function createParser(format) {
    var map = [],
        regex = format.split('');
    angular.forEach(formatCodeToRegex, function(data, code) {
      var index = format.indexOf(code);
      if (index > -1) {
        format = format.split('');
        regex[index] = '(' + data.regex + ')';
        format[index] = '$';
        for (var i = index + 1,
            n = index + code.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');
        map.push({
          index: index,
          apply: data.apply
        });
      }
    });
    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }
  this.parse = function(input, format) {
    if (!angular.isString(input) || !format) {
      return input;
    }
    format = $locale.DATETIME_FORMATS[format] || format;
    if (!this.parsers[format]) {
      this.parsers[format] = createParser(format);
    }
    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex);
    if (results && results.length) {
      var fields = {
        year: 1900,
        month: 0,
        date: 1,
        hours: 0
      },
          dt;
      for (var i = 1,
          n = results.length; i < n; i++) {
        var mapper = map[i - 1];
        if (mapper.apply) {
          mapper.apply.call(fields, results[i]);
        }
      }
      if (isValid(fields.year, fields.month, fields.date)) {
        dt = new Date(fields.year, fields.month, fields.date, fields.hours);
      }
      return dt;
    }
  };
  function isValid(year, month, date) {
    if (month === 1 && date > 28) {
      return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    }
    if (month === 3 || month === 5 || month === 8 || month === 10) {
      return date < 31;
    }
    return true;
  }
}]);
angular.module('ui.bootstrap.position', []).factory('$position', ['$document', '$window', function($document, $window) {
  function getStyle(el, cssprop) {
    if (el.currentStyle) {
      return el.currentStyle[cssprop];
    } else if ($window.getComputedStyle) {
      return $window.getComputedStyle(el)[cssprop];
    }
    return el.style[cssprop];
  }
  function isStaticPositioned(element) {
    return (getStyle(element, 'position') || 'static') === 'static';
  }
  var parentOffsetEl = function(element) {
    var docDomEl = $document[0];
    var offsetParent = element.offsetParent || docDomEl;
    while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
      offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docDomEl;
  };
  return {
    position: function(element) {
      var elBCR = this.offset(element);
      var offsetParentBCR = {
        top: 0,
        left: 0
      };
      var offsetParentEl = parentOffsetEl(element[0]);
      if (offsetParentEl != $document[0]) {
        offsetParentBCR = this.offset(angular.element(offsetParentEl));
        offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
        offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
      }
      var boundingClientRect = element[0].getBoundingClientRect();
      return {
        width: boundingClientRect.width || element.prop('offsetWidth'),
        height: boundingClientRect.height || element.prop('offsetHeight'),
        top: elBCR.top - offsetParentBCR.top,
        left: elBCR.left - offsetParentBCR.left
      };
    },
    offset: function(element) {
      var boundingClientRect = element[0].getBoundingClientRect();
      return {
        width: boundingClientRect.width || element.prop('offsetWidth'),
        height: boundingClientRect.height || element.prop('offsetHeight'),
        top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
        left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
      };
    },
    positionElements: function(hostEl, targetEl, positionStr, appendToBody) {
      var positionStrParts = positionStr.split('-');
      var pos0 = positionStrParts[0],
          pos1 = positionStrParts[1] || 'center';
      var hostElPos,
          targetElWidth,
          targetElHeight,
          targetElPos;
      hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
      targetElWidth = targetEl.prop('offsetWidth');
      targetElHeight = targetEl.prop('offsetHeight');
      var shiftWidth = {
        center: function() {
          return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
        },
        left: function() {
          return hostElPos.left;
        },
        right: function() {
          return hostElPos.left + hostElPos.width;
        }
      };
      var shiftHeight = {
        center: function() {
          return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
        },
        top: function() {
          return hostElPos.top;
        },
        bottom: function() {
          return hostElPos.top + hostElPos.height;
        }
      };
      switch (pos0) {
        case 'right':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: shiftWidth[pos0]()
          };
          break;
        case 'left':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: hostElPos.left - targetElWidth
          };
          break;
        case 'bottom':
          targetElPos = {
            top: shiftHeight[pos0](),
            left: shiftWidth[pos1]()
          };
          break;
        default:
          targetElPos = {
            top: hostElPos.top - targetElHeight,
            left: shiftWidth[pos1]()
          };
          break;
      }
      return targetElPos;
    }
  };
}]);
angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position']).constant('datepickerConfig', {
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  datepickerMode: 'day',
  minMode: 'day',
  maxMode: 'year',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
}).controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$timeout', '$log', 'dateFilter', 'datepickerConfig', function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
  var self = this,
      ngModelCtrl = {$setViewValue: angular.noop};
  this.modes = ['day', 'month', 'year'];
  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle', 'minMode', 'maxMode', 'showWeeks', 'startingDay', 'yearRange'], function(key, index) {
    self[key] = angular.isDefined($attrs[key]) ? (index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
  });
  angular.forEach(['minDate', 'maxDate'], function(key) {
    if ($attrs[key]) {
      $scope.$parent.$watch($parse($attrs[key]), function(value) {
        self[key] = value ? new Date(value) : null;
        self.refreshView();
      });
    } else {
      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
    }
  });
  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
  this.activeDate = angular.isDefined($attrs.initDate) ? $scope.$parent.$eval($attrs.initDate) : new Date();
  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };
  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = function() {
      self.render();
    };
  };
  this.render = function() {
    if (ngModelCtrl.$modelValue) {
      var date = new Date(ngModelCtrl.$modelValue),
          isValid = !isNaN(date);
      if (isValid) {
        this.activeDate = date;
      } else {
        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
      }
      ngModelCtrl.$setValidity('date', isValid);
    }
    this.refreshView();
  };
  this.refreshView = function() {
    if (this.element) {
      this._refreshView();
      var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
      ngModelCtrl.$setValidity('date-disabled', !date || (this.element && !this.isDisabled(date)));
    }
  };
  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
    return {
      date: date,
      label: dateFilter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      current: this.compare(date, new Date()) === 0
    };
  };
  this.isDisabled = function(date) {
    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({
      date: date,
      mode: $scope.datepickerMode
    })));
  };
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };
  $scope.select = function(date) {
    if ($scope.datepickerMode === self.minMode) {
      var dt = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      ngModelCtrl.$setViewValue(dt);
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
    }
  };
  $scope.move = function(direction) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };
  $scope.toggleMode = function(direction) {
    direction = direction || 1;
    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
      return;
    }
    $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
  };
  $scope.keys = {
    13: 'enter',
    32: 'space',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  var focusElement = function() {
    $timeout(function() {
      self.element[0].focus();
    }, 0, false);
  };
  $scope.$on('datepicker.focus', focusElement);
  $scope.keydown = function(evt) {
    var key = $scope.keys[evt.which];
    if (!key || evt.shiftKey || evt.altKey) {
      return;
    }
    evt.preventDefault();
    evt.stopPropagation();
    if (key === 'enter' || key === 'space') {
      if (self.isDisabled(self.activeDate)) {
        return;
      }
      $scope.select(self.activeDate);
      focusElement();
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
      focusElement();
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };
}]).directive('datepicker', function() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      datepickerMode: '=?',
      dateDisabled: '&'
    },
    require: ['datepicker', '?^ngModel'],
    controller: 'DatepickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        datepickerCtrl.init(ngModelCtrl);
      }
    }
  };
}).directive('daypicker', ['dateFilter', function(dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/day.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      scope.showWeeks = ctrl.showWeeks;
      ctrl.step = {months: 1};
      ctrl.element = element;
      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function getDaysInMonth(year, month) {
        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
      }
      function getDates(startDate, n) {
        var dates = new Array(n),
            current = new Date(startDate),
            i = 0;
        current.setHours(12);
        while (i < n) {
          dates[i++] = new Date(current);
          current.setDate(current.getDate() + 1);
        }
        return dates;
      }
      ctrl._refreshView = function() {
        var year = ctrl.activeDate.getFullYear(),
            month = ctrl.activeDate.getMonth(),
            firstDayOfMonth = new Date(year, month, 1),
            difference = ctrl.startingDay - firstDayOfMonth.getDay(),
            numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference,
            firstDate = new Date(firstDayOfMonth);
        if (numDisplayedFromPreviousMonth > 0) {
          firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        var days = getDates(firstDate, 42);
        for (var i = 0; i < 42; i++) {
          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
            secondary: days[i].getMonth() !== month,
            uid: scope.uniqueId + '-' + i
          });
        }
        scope.labels = new Array(7);
        for (var j = 0; j < 7; j++) {
          scope.labels[j] = {
            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
            full: dateFilter(days[j].date, 'EEEE')
          };
        }
        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
        scope.rows = ctrl.split(days, 7);
        if (scope.showWeeks) {
          scope.weekNumbers = [];
          var weekNumber = getISO8601WeekNumber(scope.rows[0][0].date),
              numWeeks = scope.rows.length;
          while (scope.weekNumbers.push(weekNumber++) < numWeeks) {}
        }
      };
      ctrl.compare = function(date1, date2) {
        return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
      };
      function getISO8601WeekNumber(date) {
        var checkDate = new Date(date);
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
      }
      ctrl.handleKeyDown = function(key, evt) {
        var date = ctrl.activeDate.getDate();
        if (key === 'left') {
          date = date - 1;
        } else if (key === 'up') {
          date = date - 7;
        } else if (key === 'right') {
          date = date + 1;
        } else if (key === 'down') {
          date = date + 7;
        } else if (key === 'pageup' || key === 'pagedown') {
          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? -1 : 1);
          ctrl.activeDate.setMonth(month, 1);
          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
        } else if (key === 'home') {
          date = 1;
        } else if (key === 'end') {
          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
        }
        ctrl.activeDate.setDate(date);
      };
      ctrl.refreshView();
    }
  };
}]).directive('monthpicker', ['dateFilter', function(dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/month.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      ctrl.step = {years: 1};
      ctrl.element = element;
      ctrl._refreshView = function() {
        var months = new Array(12),
            year = ctrl.activeDate.getFullYear();
        for (var i = 0; i < 12; i++) {
          months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), {uid: scope.uniqueId + '-' + i});
        }
        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
        scope.rows = ctrl.split(months, 3);
      };
      ctrl.compare = function(date1, date2) {
        return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
      };
      ctrl.handleKeyDown = function(key, evt) {
        var date = ctrl.activeDate.getMonth();
        if (key === 'left') {
          date = date - 1;
        } else if (key === 'up') {
          date = date - 3;
        } else if (key === 'right') {
          date = date + 1;
        } else if (key === 'down') {
          date = date + 3;
        } else if (key === 'pageup' || key === 'pagedown') {
          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? -1 : 1);
          ctrl.activeDate.setFullYear(year);
        } else if (key === 'home') {
          date = 0;
        } else if (key === 'end') {
          date = 11;
        }
        ctrl.activeDate.setMonth(date);
      };
      ctrl.refreshView();
    }
  };
}]).directive('yearpicker', ['dateFilter', function(dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/year.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      var range = ctrl.yearRange;
      ctrl.step = {years: range};
      ctrl.element = element;
      function getStartingYear(year) {
        return parseInt((year - 1) / range, 10) * range + 1;
      }
      ctrl._refreshView = function() {
        var years = new Array(range);
        for (var i = 0,
            start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++) {
          years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), {uid: scope.uniqueId + '-' + i});
        }
        scope.title = [years[0].label, years[range - 1].label].join(' - ');
        scope.rows = ctrl.split(years, 5);
      };
      ctrl.compare = function(date1, date2) {
        return date1.getFullYear() - date2.getFullYear();
      };
      ctrl.handleKeyDown = function(key, evt) {
        var date = ctrl.activeDate.getFullYear();
        if (key === 'left') {
          date = date - 1;
        } else if (key === 'up') {
          date = date - 5;
        } else if (key === 'right') {
          date = date + 1;
        } else if (key === 'down') {
          date = date + 5;
        } else if (key === 'pageup' || key === 'pagedown') {
          date += (key === 'pageup' ? -1 : 1) * ctrl.step.years;
        } else if (key === 'home') {
          date = getStartingYear(ctrl.activeDate.getFullYear());
        } else if (key === 'end') {
          date = getStartingYear(ctrl.activeDate.getFullYear()) + range - 1;
        }
        ctrl.activeDate.setFullYear(date);
      };
      ctrl.refreshView();
    }
  };
}]).constant('datepickerPopupConfig', {
  datepickerPopup: 'yyyy-MM-dd',
  currentText: 'Today',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false,
  showButtonBar: true
}).directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig', function($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    scope: {
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@',
      dateDisabled: '&'
    },
    link: function(scope, element, attrs, ngModel) {
      var dateFormat,
          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
      scope.getText = function(key) {
        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
      };
      attrs.$observe('datepickerPopup', function(value) {
        dateFormat = value || datepickerPopupConfig.datepickerPopup;
        ngModel.$render();
      });
      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
      popupEl.attr({
        'ng-model': 'date',
        'ng-change': 'dateSelection()'
      });
      function cameltoDash(string) {
        return string.replace(/([A-Z])/g, function($1) {
          return '-' + $1.toLowerCase();
        });
      }
      var datepickerEl = angular.element(popupEl.children()[0]);
      if (attrs.datepickerOptions) {
        angular.forEach(scope.$parent.$eval(attrs.datepickerOptions), function(value, option) {
          datepickerEl.attr(cameltoDash(option), value);
        });
      }
      scope.watchData = {};
      angular.forEach(['minDate', 'maxDate', 'datepickerMode'], function(key) {
        if (attrs[key]) {
          var getAttribute = $parse(attrs[key]);
          scope.$parent.$watch(getAttribute, function(value) {
            scope.watchData[key] = value;
          });
          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
          if (key === 'datepickerMode') {
            var setAttribute = getAttribute.assign;
            scope.$watch('watchData.' + key, function(value, oldvalue) {
              if (value !== oldvalue) {
                setAttribute(scope.$parent, value);
              }
            });
          }
        }
      });
      if (attrs.dateDisabled) {
        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
      }
      function parseDate(viewValue) {
        if (!viewValue) {
          ngModel.$setValidity('date', true);
          return null;
        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
          ngModel.$setValidity('date', true);
          return viewValue;
        } else if (angular.isString(viewValue)) {
          var date = dateParser.parse(viewValue, dateFormat) || new Date(viewValue);
          if (isNaN(date)) {
            ngModel.$setValidity('date', false);
            return undefined;
          } else {
            ngModel.$setValidity('date', true);
            return date;
          }
        } else {
          ngModel.$setValidity('date', false);
          return undefined;
        }
      }
      ngModel.$parsers.unshift(parseDate);
      scope.dateSelection = function(dt) {
        if (angular.isDefined(dt)) {
          scope.date = dt;
        }
        ngModel.$setViewValue(scope.date);
        ngModel.$render();
        if (closeOnDateSelection) {
          scope.isOpen = false;
          element[0].focus();
        }
      };
      element.bind('input change keyup', function() {
        scope.$apply(function() {
          scope.date = ngModel.$modelValue;
        });
      });
      ngModel.$render = function() {
        var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
        element.val(date);
        scope.date = parseDate(ngModel.$modelValue);
      };
      var documentClickBind = function(event) {
        if (scope.isOpen && event.target !== element[0]) {
          scope.$apply(function() {
            scope.isOpen = false;
          });
        }
      };
      var keydown = function(evt, noApply) {
        scope.keydown(evt);
      };
      element.bind('keydown', keydown);
      scope.keydown = function(evt) {
        if (evt.which === 27) {
          evt.preventDefault();
          evt.stopPropagation();
          scope.close();
        } else if (evt.which === 40 && !scope.isOpen) {
          scope.isOpen = true;
        }
      };
      scope.$watch('isOpen', function(value) {
        if (value) {
          scope.$broadcast('datepicker.focus');
          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
          scope.position.top = scope.position.top + element.prop('offsetHeight');
          $document.bind('click', documentClickBind);
        } else {
          $document.unbind('click', documentClickBind);
        }
      });
      scope.select = function(date) {
        if (date === 'today') {
          var today = new Date();
          if (angular.isDate(ngModel.$modelValue)) {
            date = new Date(ngModel.$modelValue);
            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
          } else {
            date = new Date(today.setHours(0, 0, 0, 0));
          }
        }
        scope.dateSelection(date);
      };
      scope.close = function() {
        scope.isOpen = false;
        element[0].focus();
      };
      var $popup = $compile(popupEl)(scope);
      popupEl.remove();
      if (appendToBody) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }
      scope.$on('$destroy', function() {
        $popup.remove();
        element.unbind('keydown', keydown);
        $document.unbind('click', documentClickBind);
      });
    }
  };
}]).directive('datepickerPopupWrap', function() {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link: function(scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});
angular.module('ui.bootstrap.dropdown', []).constant('dropdownConfig', {openClass: 'open'}).service('dropdownService', ['$document', function($document) {
  var openScope = null;
  this.open = function(dropdownScope) {
    if (!openScope) {
      $document.bind('click', closeDropdown);
      $document.bind('keydown', escapeKeyBind);
    }
    if (openScope && openScope !== dropdownScope) {
      openScope.isOpen = false;
    }
    openScope = dropdownScope;
  };
  this.close = function(dropdownScope) {
    if (openScope === dropdownScope) {
      openScope = null;
      $document.unbind('click', closeDropdown);
      $document.unbind('keydown', escapeKeyBind);
    }
  };
  var closeDropdown = function(evt) {
    if (!openScope) {
      return;
    }
    var toggleElement = openScope.getToggleElement();
    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
      return;
    }
    openScope.$apply(function() {
      openScope.isOpen = false;
    });
  };
  var escapeKeyBind = function(evt) {
    if (evt.which === 27) {
      openScope.focusToggleElement();
      closeDropdown();
    }
  };
}]).controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate) {
  var self = this,
      scope = $scope.$new(),
      openClass = dropdownConfig.openClass,
      getIsOpen,
      setIsOpen = angular.noop,
      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;
  this.init = function(element) {
    self.$element = element;
    if ($attrs.isOpen) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;
      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }
  };
  this.toggle = function(open) {
    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
  };
  this.isOpen = function() {
    return scope.isOpen;
  };
  scope.getToggleElement = function() {
    return self.toggleElement;
  };
  scope.focusToggleElement = function() {
    if (self.toggleElement) {
      self.toggleElement[0].focus();
    }
  };
  scope.$watch('isOpen', function(isOpen, wasOpen) {
    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);
    if (isOpen) {
      scope.focusToggleElement();
      dropdownService.open(scope);
    } else {
      dropdownService.close(scope);
    }
    setIsOpen($scope, isOpen);
    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
      toggleInvoker($scope, {open: !!isOpen});
    }
  });
  $scope.$on('$locationChangeSuccess', function() {
    scope.isOpen = false;
  });
  $scope.$on('$destroy', function() {
    scope.$destroy();
  });
}]).directive('dropdown', function() {
  return {
    controller: 'DropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init(element);
    }
  };
}).directive('dropdownToggle', function() {
  return {
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }
      dropdownCtrl.toggleElement = element;
      var toggleDropdown = function(event) {
        event.preventDefault();
        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };
      element.bind('click', toggleDropdown);
      element.attr({
        'aria-haspopup': true,
        'aria-expanded': false
      });
      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });
      scope.$on('$destroy', function() {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});
angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition']).factory('$$stackedMap', function() {
  return {createNew: function() {
      var stack = [];
      return {
        add: function(key, value) {
          stack.push({
            key: key,
            value: value
          });
        },
        get: function(key) {
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              return stack[i];
            }
          }
        },
        keys: function() {
          var keys = [];
          for (var i = 0; i < stack.length; i++) {
            keys.push(stack[i].key);
          }
          return keys;
        },
        top: function() {
          return stack[stack.length - 1];
        },
        remove: function(key) {
          var idx = -1;
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              idx = i;
              break;
            }
          }
          return stack.splice(idx, 1)[0];
        },
        removeTop: function() {
          return stack.splice(stack.length - 1, 1)[0];
        },
        length: function() {
          return stack.length;
        }
      };
    }};
}).directive('modalBackdrop', ['$timeout', function($timeout) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/modal/backdrop.html',
    link: function(scope, element, attrs) {
      scope.backdropClass = attrs.backdropClass || '';
      scope.animate = false;
      $timeout(function() {
        scope.animate = true;
      });
    }
  };
}]).directive('modalWindow', ['$modalStack', '$timeout', function($modalStack, $timeout) {
  return {
    restrict: 'EA',
    scope: {
      index: '@',
      animate: '='
    },
    replace: true,
    transclude: true,
    templateUrl: function(tElement, tAttrs) {
      return tAttrs.templateUrl || 'template/modal/window.html';
    },
    link: function(scope, element, attrs) {
      element.addClass(attrs.windowClass || '');
      scope.size = attrs.size;
      $timeout(function() {
        scope.animate = true;
        if (!element[0].querySelectorAll('[autofocus]').length) {
          element[0].focus();
        }
      });
      scope.close = function(evt) {
        var modal = $modalStack.getTop();
        if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
          evt.preventDefault();
          evt.stopPropagation();
          $modalStack.dismiss(modal.key, 'backdrop click');
        }
      };
    }
  };
}]).directive('modalTransclude', function() {
  return {link: function($scope, $element, $attrs, controller, $transclude) {
      $transclude($scope.$parent, function(clone) {
        $element.empty();
        $element.append(clone);
      });
    }};
}).factory('$modalStack', ['$transition', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap', function($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {
  var OPENED_MODAL_CLASS = 'modal-open';
  var backdropDomEl,
      backdropScope;
  var openedWindows = $$stackedMap.createNew();
  var $modalStack = {};
  function backdropIndex() {
    var topBackdropIndex = -1;
    var opened = openedWindows.keys();
    for (var i = 0; i < opened.length; i++) {
      if (openedWindows.get(opened[i]).value.backdrop) {
        topBackdropIndex = i;
      }
    }
    return topBackdropIndex;
  }
  $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
    if (backdropScope) {
      backdropScope.index = newBackdropIndex;
    }
  });
  function removeModalWindow(modalInstance) {
    var body = $document.find('body').eq(0);
    var modalWindow = openedWindows.get(modalInstance).value;
    openedWindows.remove(modalInstance);
    removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, function() {
      modalWindow.modalScope.$destroy();
      body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
      checkRemoveBackdrop();
    });
  }
  function checkRemoveBackdrop() {
    if (backdropDomEl && backdropIndex() == -1) {
      var backdropScopeRef = backdropScope;
      removeAfterAnimate(backdropDomEl, backdropScope, 150, function() {
        backdropScopeRef.$destroy();
        backdropScopeRef = null;
      });
      backdropDomEl = undefined;
      backdropScope = undefined;
    }
  }
  function removeAfterAnimate(domEl, scope, emulateTime, done) {
    scope.animate = false;
    var transitionEndEventName = $transition.transitionEndEventName;
    if (transitionEndEventName) {
      var timeout = $timeout(afterAnimating, emulateTime);
      domEl.bind(transitionEndEventName, function() {
        $timeout.cancel(timeout);
        afterAnimating();
        scope.$apply();
      });
    } else {
      $timeout(afterAnimating);
    }
    function afterAnimating() {
      if (afterAnimating.done) {
        return;
      }
      afterAnimating.done = true;
      domEl.remove();
      if (done) {
        done();
      }
    }
  }
  $document.bind('keydown', function(evt) {
    var modal;
    if (evt.which === 27) {
      modal = openedWindows.top();
      if (modal && modal.value.keyboard) {
        evt.preventDefault();
        $rootScope.$apply(function() {
          $modalStack.dismiss(modal.key, 'escape key press');
        });
      }
    }
  });
  $modalStack.open = function(modalInstance, modal) {
    openedWindows.add(modalInstance, {
      deferred: modal.deferred,
      modalScope: modal.scope,
      backdrop: modal.backdrop,
      keyboard: modal.keyboard
    });
    var body = $document.find('body').eq(0),
        currBackdropIndex = backdropIndex();
    if (currBackdropIndex >= 0 && !backdropDomEl) {
      backdropScope = $rootScope.$new(true);
      backdropScope.index = currBackdropIndex;
      var angularBackgroundDomEl = angular.element('<div modal-backdrop></div>');
      angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
      backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
      body.append(backdropDomEl);
    }
    var angularDomEl = angular.element('<div modal-window></div>');
    angularDomEl.attr({
      'template-url': modal.windowTemplateUrl,
      'window-class': modal.windowClass,
      'size': modal.size,
      'index': openedWindows.length() - 1,
      'animate': 'animate'
    }).html(modal.content);
    var modalDomEl = $compile(angularDomEl)(modal.scope);
    openedWindows.top().value.modalDomEl = modalDomEl;
    body.append(modalDomEl);
    body.addClass(OPENED_MODAL_CLASS);
  };
  $modalStack.close = function(modalInstance, result) {
    var modalWindow = openedWindows.get(modalInstance);
    if (modalWindow) {
      modalWindow.value.deferred.resolve(result);
      removeModalWindow(modalInstance);
    }
  };
  $modalStack.dismiss = function(modalInstance, reason) {
    var modalWindow = openedWindows.get(modalInstance);
    if (modalWindow) {
      modalWindow.value.deferred.reject(reason);
      removeModalWindow(modalInstance);
    }
  };
  $modalStack.dismissAll = function(reason) {
    var topModal = this.getTop();
    while (topModal) {
      this.dismiss(topModal.key, reason);
      topModal = this.getTop();
    }
  };
  $modalStack.getTop = function() {
    return openedWindows.top();
  };
  return $modalStack;
}]).provider('$modal', function() {
  var $modalProvider = {
    options: {
      backdrop: true,
      keyboard: true
    },
    $get: ['$injector', '$rootScope', '$q', '$http', '$templateCache', '$controller', '$modalStack', function($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
      var $modal = {};
      function getTemplatePromise(options) {
        return options.template ? $q.when(options.template) : $http.get(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl, {cache: $templateCache}).then(function(result) {
          return result.data;
        });
      }
      function getResolvePromises(resolves) {
        var promisesArr = [];
        angular.forEach(resolves, function(value) {
          if (angular.isFunction(value) || angular.isArray(value)) {
            promisesArr.push($q.when($injector.invoke(value)));
          }
        });
        return promisesArr;
      }
      $modal.open = function(modalOptions) {
        var modalResultDeferred = $q.defer();
        var modalOpenedDeferred = $q.defer();
        var modalInstance = {
          result: modalResultDeferred.promise,
          opened: modalOpenedDeferred.promise,
          close: function(result) {
            $modalStack.close(modalInstance, result);
          },
          dismiss: function(reason) {
            $modalStack.dismiss(modalInstance, reason);
          }
        };
        modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
        modalOptions.resolve = modalOptions.resolve || {};
        if (!modalOptions.template && !modalOptions.templateUrl) {
          throw new Error('One of template or templateUrl options is required.');
        }
        var templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
        templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {
          var modalScope = (modalOptions.scope || $rootScope).$new();
          modalScope.$close = modalInstance.close;
          modalScope.$dismiss = modalInstance.dismiss;
          var ctrlInstance,
              ctrlLocals = {};
          var resolveIter = 1;
          if (modalOptions.controller) {
            ctrlLocals.$scope = modalScope;
            ctrlLocals.$modalInstance = modalInstance;
            angular.forEach(modalOptions.resolve, function(value, key) {
              ctrlLocals[key] = tplAndVars[resolveIter++];
            });
            ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
            if (modalOptions.controllerAs) {
              modalScope[modalOptions.controllerAs] = ctrlInstance;
            }
          }
          $modalStack.open(modalInstance, {
            scope: modalScope,
            deferred: modalResultDeferred,
            content: tplAndVars[0],
            backdrop: modalOptions.backdrop,
            keyboard: modalOptions.keyboard,
            backdropClass: modalOptions.backdropClass,
            windowClass: modalOptions.windowClass,
            windowTemplateUrl: modalOptions.windowTemplateUrl,
            size: modalOptions.size
          });
        }, function resolveError(reason) {
          modalResultDeferred.reject(reason);
        });
        templateAndResolvePromise.then(function() {
          modalOpenedDeferred.resolve(true);
        }, function() {
          modalOpenedDeferred.reject(false);
        });
        return modalInstance;
      };
      return $modal;
    }]
  };
  return $modalProvider;
});
angular.module('ui.bootstrap.pagination', []).controller('PaginationController', ['$scope', '$attrs', '$parse', function($scope, $attrs, $parse) {
  var self = this,
      ngModelCtrl = {$setViewValue: angular.noop},
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
  this.init = function(ngModelCtrl_, config) {
    ngModelCtrl = ngModelCtrl_;
    this.config = config;
    ngModelCtrl.$render = function() {
      self.render();
    };
    if ($attrs.itemsPerPage) {
      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
        self.itemsPerPage = parseInt(value, 10);
        $scope.totalPages = self.calculateTotalPages();
      });
    } else {
      this.itemsPerPage = config.itemsPerPage;
    }
  };
  this.calculateTotalPages = function() {
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  };
  this.render = function() {
    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
  };
  $scope.selectPage = function(page) {
    if ($scope.page !== page && page > 0 && page <= $scope.totalPages) {
      ngModelCtrl.$setViewValue(page);
      ngModelCtrl.$render();
    }
  };
  $scope.getText = function(key) {
    return $scope[key + 'Text'] || self.config[key + 'Text'];
  };
  $scope.noPrevious = function() {
    return $scope.page === 1;
  };
  $scope.noNext = function() {
    return $scope.page === $scope.totalPages;
  };
  $scope.$watch('totalItems', function() {
    $scope.totalPages = self.calculateTotalPages();
  });
  $scope.$watch('totalPages', function(value) {
    setNumPages($scope.$parent, value);
    if ($scope.page > value) {
      $scope.selectPage(value);
    } else {
      ngModelCtrl.$render();
    }
  });
}]).constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
}).directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@'
    },
    require: ['pagination', '?ngModel'],
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pagination.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      if (!ngModelCtrl) {
        return;
      }
      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;
      paginationCtrl.init(ngModelCtrl, paginationConfig);
      if (attrs.maxSize) {
        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
          maxSize = parseInt(value, 10);
          paginationCtrl.render();
        });
      }
      function makePage(number, text, isActive) {
        return {
          number: number,
          text: text,
          active: isActive
        };
      }
      function getPages(currentPage, totalPages) {
        var pages = [];
        var startPage = 1,
            endPage = totalPages;
        var isMaxSized = (angular.isDefined(maxSize) && maxSize < totalPages);
        if (isMaxSized) {
          if (rotate) {
            startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
            endPage = startPage + maxSize - 1;
            if (endPage > totalPages) {
              endPage = totalPages;
              startPage = endPage - maxSize + 1;
            }
          } else {
            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;
            endPage = Math.min(startPage + maxSize - 1, totalPages);
          }
        }
        for (var number = startPage; number <= endPage; number++) {
          var page = makePage(number, number, number === currentPage);
          pages.push(page);
        }
        if (isMaxSized && !rotate) {
          if (startPage > 1) {
            var previousPageSet = makePage(startPage - 1, '...', false);
            pages.unshift(previousPageSet);
          }
          if (endPage < totalPages) {
            var nextPageSet = makePage(endPage + 1, '...', false);
            pages.push(nextPageSet);
          }
        }
        return pages;
      }
      var originalRender = paginationCtrl.render;
      paginationCtrl.render = function() {
        originalRender();
        if (scope.page > 0 && scope.page <= scope.totalPages) {
          scope.pages = getPages(scope.page, scope.totalPages);
        }
      };
    }
  };
}]).constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
}).directive('pager', ['pagerConfig', function(pagerConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@'
    },
    require: ['pager', '?ngModel'],
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pager.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      if (!ngModelCtrl) {
        return;
      }
      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
      paginationCtrl.init(ngModelCtrl, pagerConfig);
    }
  };
}]);
angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml']).provider('$tooltip', function() {
  var defaultOptions = {
    placement: 'top',
    animation: true,
    popupDelay: 0
  };
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur'
  };
  var globalOptions = {};
  this.options = function(value) {
    angular.extend(globalOptions, value);
  };
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  this.$get = ['$window', '$compile', '$timeout', '$document', '$position', '$interpolate', function($window, $compile, $timeout, $document, $position, $interpolate) {
    return function $tooltip(type, prefix, defaultTriggerShow) {
      var options = angular.extend({}, defaultOptions, globalOptions);
      function getTriggers(trigger) {
        var show = trigger || options.trigger || defaultTriggerShow;
        var hide = triggerMap[show] || show;
        return {
          show: show,
          hide: hide
        };
      }
      var directiveName = snake_case(type);
      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'title' + endSym + '" ' + 'content="' + startSym + 'content' + endSym + '" ' + 'placement="' + startSym + 'placement' + endSym + '" ' + 'animation="animation" ' + 'is-open="isOpen"' + '>' + '</div>';
      return {
        restrict: 'EA',
        compile: function(tElem, tAttrs) {
          var tooltipLinker = $compile(template);
          return function link(scope, element, attrs) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var popupTimeout;
            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
            var triggers = getTriggers(undefined);
            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
            var ttScope = scope.$new(true);
            var positionTooltip = function() {
              var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
              ttPosition.top += 'px';
              ttPosition.left += 'px';
              tooltip.css(ttPosition);
            };
            ttScope.isOpen = false;
            function toggleTooltipBind() {
              if (!ttScope.isOpen) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }
            function showTooltipBind() {
              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                return;
              }
              prepareTooltip();
              if (ttScope.popupDelay) {
                if (!popupTimeout) {
                  popupTimeout = $timeout(show, ttScope.popupDelay, false);
                  popupTimeout.then(function(reposition) {
                    reposition();
                  });
                }
              } else {
                show()();
              }
            }
            function hideTooltipBind() {
              scope.$apply(function() {
                hide();
              });
            }
            function show() {
              popupTimeout = null;
              if (transitionTimeout) {
                $timeout.cancel(transitionTimeout);
                transitionTimeout = null;
              }
              if (!ttScope.content) {
                return angular.noop;
              }
              createTooltip();
              tooltip.css({
                top: 0,
                left: 0,
                display: 'block'
              });
              if (appendToBody) {
                $document.find('body').append(tooltip);
              } else {
                element.after(tooltip);
              }
              positionTooltip();
              ttScope.isOpen = true;
              ttScope.$digest();
              return positionTooltip;
            }
            function hide() {
              ttScope.isOpen = false;
              $timeout.cancel(popupTimeout);
              popupTimeout = null;
              if (ttScope.animation) {
                if (!transitionTimeout) {
                  transitionTimeout = $timeout(removeTooltip, 500);
                }
              } else {
                removeTooltip();
              }
            }
            function createTooltip() {
              if (tooltip) {
                removeTooltip();
              }
              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, angular.noop);
            }
            function removeTooltip() {
              transitionTimeout = null;
              if (tooltip) {
                tooltip.remove();
                tooltip = null;
              }
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }
            function prepareTooltip() {
              prepPlacement();
              prepPopupDelay();
            }
            attrs.$observe(type, function(val) {
              ttScope.content = val;
              if (!val && ttScope.isOpen) {
                hide();
              }
            });
            attrs.$observe(prefix + 'Title', function(val) {
              ttScope.title = val;
            });
            function prepPlacement() {
              var val = attrs[prefix + 'Placement'];
              ttScope.placement = angular.isDefined(val) ? val : options.placement;
            }
            function prepPopupDelay() {
              var val = attrs[prefix + 'PopupDelay'];
              var delay = parseInt(val, 10);
              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
            }
            var unregisterTriggers = function() {
              element.unbind(triggers.show, showTooltipBind);
              element.unbind(triggers.hide, hideTooltipBind);
            };
            function prepTriggers() {
              var val = attrs[prefix + 'Trigger'];
              unregisterTriggers();
              triggers = getTriggers(val);
              if (triggers.show === triggers.hide) {
                element.bind(triggers.show, toggleTooltipBind);
              } else {
                element.bind(triggers.show, showTooltipBind);
                element.bind(triggers.hide, hideTooltipBind);
              }
            }
            prepTriggers();
            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;
            if (appendToBody) {
              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                if (ttScope.isOpen) {
                  hide();
                }
              });
            }
            scope.$on('$destroy', function onDestroyTooltip() {
              $timeout.cancel(transitionTimeout);
              $timeout.cancel(popupTimeout);
              unregisterTriggers();
              removeTooltip();
              ttScope = null;
            });
          };
        }
      };
    };
  }];
}).directive('tooltipPopup', function() {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', ['$tooltip', function($tooltip) {
  return $tooltip('tooltip', 'tooltip', 'mouseenter');
}]).directive('tooltipHtmlUnsafePopup', function() {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', ['$tooltip', function($tooltip) {
  return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
}]);
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function() {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', ['$tooltip', function($tooltip) {
  return $tooltip('popover', 'popover', 'click');
}]);
angular.module('ui.bootstrap.progressbar', []).constant('progressConfig', {
  animate: true,
  max: 100
}).controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
  var self = this,
      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
  this.bars = [];
  $scope.max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max;
  this.addBar = function(bar, element) {
    if (!animate) {
      element.css({'transition': 'none'});
    }
    this.bars.push(bar);
    bar.$watch('value', function(value) {
      bar.percent = +(100 * value / $scope.max).toFixed(2);
    });
    bar.$on('$destroy', function() {
      element = null;
      self.removeBar(bar);
    });
  };
  this.removeBar = function(bar) {
    this.bars.splice(this.bars.indexOf(bar), 1);
  };
}]).directive('progress', function() {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'ProgressController',
    require: 'progress',
    scope: {},
    templateUrl: 'template/progressbar/progress.html'
  };
}).directive('bar', function() {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    require: '^progress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/bar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element);
    }
  };
}).directive('progressbar', function() {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'ProgressController',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/progressbar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]));
    }
  };
});
angular.module('ui.bootstrap.rating', []).constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
}).controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl = {$setViewValue: angular.noop};
  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;
    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
    var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
    $scope.range = this.buildTemplateObjects(ratingStates);
  };
  this.buildTemplateObjects = function(states) {
    for (var i = 0,
        n = states.length; i < n; i++) {
      states[i] = angular.extend({index: i}, {
        stateOn: this.stateOn,
        stateOff: this.stateOff
      }, states[i]);
    }
    return states;
  };
  $scope.rate = function(value) {
    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
      ngModelCtrl.$setViewValue(value);
      ngModelCtrl.$render();
    }
  };
  $scope.enter = function(value) {
    if (!$scope.readonly) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };
  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };
  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
    }
  };
  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
  };
}]).directive('rating', function() {
  return {
    restrict: 'EA',
    require: ['rating', 'ngModel'],
    scope: {
      readonly: '=?',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        ratingCtrl.init(ngModelCtrl);
      }
    }
  };
});
angular.module('ui.bootstrap.tabs', []).controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
  var ctrl = this,
      tabs = ctrl.tabs = $scope.tabs = [];
  ctrl.select = function(selectedTab) {
    angular.forEach(tabs, function(tab) {
      if (tab.active && tab !== selectedTab) {
        tab.active = false;
        tab.onDeselect();
      }
    });
    selectedTab.active = true;
    selectedTab.onSelect();
  };
  ctrl.addTab = function addTab(tab) {
    tabs.push(tab);
    if (tabs.length === 1) {
      tab.active = true;
    } else if (tab.active) {
      ctrl.select(tab);
    }
  };
  ctrl.removeTab = function removeTab(tab) {
    var index = tabs.indexOf(tab);
    if (tab.active && tabs.length > 1 && !destroyed) {
      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
      ctrl.select(tabs[newActiveIndex]);
    }
    tabs.splice(index, 1);
  };
  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });
}]).directive('tabset', function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {type: '@'},
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
    }
  };
}).directive('tab', ['$parse', function($parse) {
  return {
    require: '^tabset',
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/tabs/tab.html',
    transclude: true,
    scope: {
      active: '=?',
      heading: '@',
      onSelect: '&select',
      onDeselect: '&deselect'
    },
    controller: function() {},
    compile: function(elm, attrs, transclude) {
      return function postLink(scope, elm, attrs, tabsetCtrl) {
        scope.$watch('active', function(active) {
          if (active) {
            tabsetCtrl.select(scope);
          }
        });
        scope.disabled = false;
        if (attrs.disabled) {
          scope.$parent.$watch($parse(attrs.disabled), function(value) {
            scope.disabled = !!value;
          });
        }
        scope.select = function() {
          if (!scope.disabled) {
            scope.active = true;
          }
        };
        tabsetCtrl.addTab(scope);
        scope.$on('$destroy', function() {
          tabsetCtrl.removeTab(scope);
        });
        scope.$transcludeFn = transclude;
      };
    }
  };
}]).directive('tabHeadingTransclude', [function() {
  return {
    restrict: 'A',
    require: '^tab',
    link: function(scope, elm, attrs, tabCtrl) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
}]).directive('tabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName && (node.hasAttribute('tab-heading') || node.hasAttribute('data-tab-heading') || node.tagName.toLowerCase() === 'tab-heading' || node.tagName.toLowerCase() === 'data-tab-heading');
  }
});
;
angular.module('ui.bootstrap.timepicker', []).constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: null,
  readonlyInput: false,
  mousewheel: true
}).controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
  var selected = new Date(),
      ngModelCtrl = {$setViewValue: angular.noop},
      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
  this.init = function(ngModelCtrl_, inputs) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;
    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1);
    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
    if (mousewheel) {
      this.setupMousewheelEvents(hoursInputEl, minutesInputEl);
    }
    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents(hoursInputEl, minutesInputEl);
  };
  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = parseInt(value, 10);
    });
  }
  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = parseInt(value, 10);
    });
  }
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;
      if (ngModelCtrl.$error.time) {
        var hours = getHoursFromTemplate(),
            minutes = getMinutesFromTemplate();
        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
          selected.setHours(hours);
          refresh();
        }
      } else {
        updateTemplate();
      }
    });
  }
  function getHoursFromTemplate() {
    var hours = parseInt($scope.hours, 10);
    var valid = ($scope.showMeridian) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
    if (!valid) {
      return undefined;
    }
    if ($scope.showMeridian) {
      if (hours === 12) {
        hours = 0;
      }
      if ($scope.meridian === meridians[1]) {
        hours = hours + 12;
      }
    }
    return hours;
  }
  function getMinutesFromTemplate() {
    var minutes = parseInt($scope.minutes, 10);
    return (minutes >= 0 && minutes < 60) ? minutes : undefined;
  }
  function pad(value) {
    return (angular.isDefined(value) && value.toString().length < 2) ? '0' + value : value;
  }
  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
      return (e.detail || delta > 0);
    };
    hoursInputEl.bind('mousewheel wheel', function(e) {
      $scope.$apply((isScrollingUp(e)) ? $scope.incrementHours() : $scope.decrementHours());
      e.preventDefault();
    });
    minutesInputEl.bind('mousewheel wheel', function(e) {
      $scope.$apply((isScrollingUp(e)) ? $scope.incrementMinutes() : $scope.decrementMinutes());
      e.preventDefault();
    });
  };
  this.setupInputEvents = function(hoursInputEl, minutesInputEl) {
    if ($scope.readonlyInput) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      return;
    }
    var invalidate = function(invalidHours, invalidMinutes) {
      ngModelCtrl.$setViewValue(null);
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
      }
      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
      }
    };
    $scope.updateHours = function() {
      var hours = getHoursFromTemplate();
      if (angular.isDefined(hours)) {
        selected.setHours(hours);
        refresh('h');
      } else {
        invalidate(true);
      }
    };
    hoursInputEl.bind('blur', function(e) {
      if (!$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply(function() {
          $scope.hours = pad($scope.hours);
        });
      }
    });
    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate();
      if (angular.isDefined(minutes)) {
        selected.setMinutes(minutes);
        refresh('m');
      } else {
        invalidate(undefined, true);
      }
    };
    minutesInputEl.bind('blur', function(e) {
      if (!$scope.invalidMinutes && $scope.minutes < 10) {
        $scope.$apply(function() {
          $scope.minutes = pad($scope.minutes);
        });
      }
    });
  };
  this.render = function() {
    var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
    if (isNaN(date)) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if (date) {
        selected = date;
      }
      makeValid();
      updateTemplate();
    }
  };
  function refresh(keyboardChange) {
    makeValid();
    ngModelCtrl.$setViewValue(new Date(selected));
    updateTemplate(keyboardChange);
  }
  function makeValid() {
    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
  }
  function updateTemplate(keyboardChange) {
    var hours = selected.getHours(),
        minutes = selected.getMinutes();
    if ($scope.showMeridian) {
      hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
    }
    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
    $scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
  }
  function addMinutes(minutes) {
    var dt = new Date(selected.getTime() + minutes * 60000);
    selected.setHours(dt.getHours(), dt.getMinutes());
    refresh();
  }
  $scope.incrementHours = function() {
    addMinutes(hourStep * 60);
  };
  $scope.decrementHours = function() {
    addMinutes(-hourStep * 60);
  };
  $scope.incrementMinutes = function() {
    addMinutes(minuteStep);
  };
  $scope.decrementMinutes = function() {
    addMinutes(-minuteStep);
  };
  $scope.toggleMeridian = function() {
    addMinutes(12 * 60 * ((selected.getHours() < 12) ? 1 : -1));
  };
}]).directive('timepicker', function() {
  return {
    restrict: 'EA',
    require: ['timepicker', '?^ngModel'],
    controller: 'TimepickerController',
    replace: true,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        timepickerCtrl.init(ngModelCtrl, element.find('input'));
      }
    }
  };
});
angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml']).factory('typeaheadParser', ['$parse', function($parse) {
  var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
  return {parse: function(input) {
      var match = input.match(TYPEAHEAD_REGEXP);
      if (!match) {
        throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' + ' but got "' + input + '".');
      }
      return {
        itemName: match[3],
        source: $parse(match[4]),
        viewMapper: $parse(match[2] || match[1]),
        modelMapper: $parse(match[1])
      };
    }};
}]).directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser', function($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {
  var HOT_KEYS = [9, 13, 27, 38, 40];
  return {
    require: 'ngModel',
    link: function(originalScope, element, attrs, modelCtrl) {
      var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;
      var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
      var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
      var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
      var onSelectCallback = $parse(attrs.typeaheadOnSelect);
      var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
      var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;
      var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;
      var $setModelValue = $parse(attrs.ngModel).assign;
      var parserResult = typeaheadParser.parse(attrs.typeahead);
      var hasFocus;
      var scope = originalScope.$new();
      originalScope.$on('$destroy', function() {
        scope.$destroy();
      });
      var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      element.attr({
        'aria-autocomplete': 'list',
        'aria-expanded': false,
        'aria-owns': popupId
      });
      var popUpEl = angular.element('<div typeahead-popup></div>');
      popUpEl.attr({
        id: popupId,
        matches: 'matches',
        active: 'activeIdx',
        select: 'select(activeIdx)',
        query: 'query',
        position: 'position'
      });
      if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
      }
      var resetMatches = function() {
        scope.matches = [];
        scope.activeIdx = -1;
        element.attr('aria-expanded', false);
      };
      var getMatchId = function(index) {
        return popupId + '-option-' + index;
      };
      scope.$watch('activeIdx', function(index) {
        if (index < 0) {
          element.removeAttr('aria-activedescendant');
        } else {
          element.attr('aria-activedescendant', getMatchId(index));
        }
      });
      var getMatchesAsync = function(inputValue) {
        var locals = {$viewValue: inputValue};
        isLoadingSetter(originalScope, true);
        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
          var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
          if (onCurrentRequest && hasFocus) {
            if (matches.length > 0) {
              scope.activeIdx = focusFirst ? 0 : -1;
              scope.matches.length = 0;
              for (var i = 0; i < matches.length; i++) {
                locals[parserResult.itemName] = matches[i];
                scope.matches.push({
                  id: getMatchId(i),
                  label: parserResult.viewMapper(scope, locals),
                  model: matches[i]
                });
              }
              scope.query = inputValue;
              scope.position = appendToBody ? $position.offset(element) : $position.position(element);
              scope.position.top = scope.position.top + element.prop('offsetHeight');
              element.attr('aria-expanded', true);
            } else {
              resetMatches();
            }
          }
          if (onCurrentRequest) {
            isLoadingSetter(originalScope, false);
          }
        }, function() {
          resetMatches();
          isLoadingSetter(originalScope, false);
        });
      };
      resetMatches();
      scope.query = undefined;
      var timeoutPromise;
      var scheduleSearchWithTimeout = function(inputValue) {
        timeoutPromise = $timeout(function() {
          getMatchesAsync(inputValue);
        }, waitTime);
      };
      var cancelPreviousTimeout = function() {
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }
      };
      modelCtrl.$parsers.unshift(function(inputValue) {
        hasFocus = true;
        if (inputValue && inputValue.length >= minSearch) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }
        if (isEditable) {
          return inputValue;
        } else {
          if (!inputValue) {
            modelCtrl.$setValidity('editable', true);
            return inputValue;
          } else {
            modelCtrl.$setValidity('editable', false);
            return undefined;
          }
        }
      });
      modelCtrl.$formatters.push(function(modelValue) {
        var candidateViewValue,
            emptyViewValue;
        var locals = {};
        if (inputFormatter) {
          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);
        } else {
          locals[parserResult.itemName] = modelValue;
          candidateViewValue = parserResult.viewMapper(originalScope, locals);
          locals[parserResult.itemName] = undefined;
          emptyViewValue = parserResult.viewMapper(originalScope, locals);
          return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
        }
      });
      scope.select = function(activeIdx) {
        var locals = {};
        var model,
            item;
        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
        model = parserResult.modelMapper(originalScope, locals);
        $setModelValue(originalScope, model);
        modelCtrl.$setValidity('editable', true);
        onSelectCallback(originalScope, {
          $item: item,
          $model: model,
          $label: parserResult.viewMapper(originalScope, locals)
        });
        resetMatches();
        $timeout(function() {
          element[0].focus();
        }, 0, false);
      };
      element.bind('keydown', function(evt) {
        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
          return;
        }
        if (scope.activeIdx == -1 && (evt.which === 13 || evt.which === 9)) {
          return;
        }
        evt.preventDefault();
        if (evt.which === 40) {
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();
        } else if (evt.which === 38) {
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();
        } else if (evt.which === 13 || evt.which === 9) {
          scope.$apply(function() {
            scope.select(scope.activeIdx);
          });
        } else if (evt.which === 27) {
          evt.stopPropagation();
          resetMatches();
          scope.$digest();
        }
      });
      element.bind('blur', function(evt) {
        hasFocus = false;
      });
      var dismissClickHandler = function(evt) {
        if (element[0] !== evt.target) {
          resetMatches();
          scope.$digest();
        }
      };
      $document.bind('click', dismissClickHandler);
      originalScope.$on('$destroy', function() {
        $document.unbind('click', dismissClickHandler);
        if (appendToBody) {
          $popup.remove();
        }
      });
      var $popup = $compile(popUpEl)(scope);
      if (appendToBody) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }
    }
  };
}]).directive('typeaheadPopup', function() {
  return {
    restrict: 'EA',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: true,
    templateUrl: 'template/typeahead/typeahead-popup.html',
    link: function(scope, element, attrs) {
      scope.templateUrl = attrs.templateUrl;
      scope.isOpen = function() {
        return scope.matches.length > 0;
      };
      scope.isActive = function(matchIdx) {
        return scope.active == matchIdx;
      };
      scope.selectActive = function(matchIdx) {
        scope.active = matchIdx;
      };
      scope.selectMatch = function(activeIdx) {
        scope.select({activeIdx: activeIdx});
      };
    }
  };
}).directive('typeaheadMatch', ['$http', '$templateCache', '$compile', '$parse', function($http, $templateCache, $compile, $parse) {
  return {
    restrict: 'EA',
    scope: {
      index: '=',
      match: '=',
      query: '='
    },
    link: function(scope, element, attrs) {
      var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
      $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent) {
        element.replaceWith($compile(tplContent.trim())(scope));
      });
    }
  };
}]).filter('typeaheadHighlight', function() {
  function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function(matchItem, query) {
    return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
  };
});
angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion-group.html", "<div class=\"panel panel-default\">\n" + "  <div class=\"panel-heading\">\n" + "    <h4 class=\"panel-title\">\n" + "      <a href class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" + "    </h4>\n" + "  </div>\n" + "  <div class=\"panel-collapse\" collapse=\"!isOpen\">\n" + "	  <div class=\"panel-body\" ng-transclude></div>\n" + "  </div>\n" + "</div>\n" + "");
}]);
angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion.html", "<div class=\"panel-group\" ng-transclude></div>");
}]);
angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/alert/alert.html", "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissable' : null]\" role=\"alert\">\n" + "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n" + "        <span aria-hidden=\"true\">&times;</span>\n" + "        <span class=\"sr-only\">Close</span>\n" + "    </button>\n" + "    <div ng-transclude></div>\n" + "</div>\n" + "");
}]);
angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/carousel.html", "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" + "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" + "        <li ng-repeat=\"slide in slides track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" + "    </ol>\n" + "    <div class=\"carousel-inner\" ng-transclude></div>\n" + "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" + "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" + "</div>\n" + "");
}]);
angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/slide.html", "<div ng-class=\"{\n" + "    'active': leaving || (active && !entering),\n" + "    'prev': (next || active) && direction=='prev',\n" + "    'next': (next || active) && direction=='next',\n" + "    'right': direction=='prev',\n" + "    'left': direction=='next'\n" + "  }\" class=\"item text-center\" ng-transclude></div>\n" + "");
}]);
angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/datepicker.html", "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" + "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" + "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" + "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" + "</div>");
}]);
angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/day.html", "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "    <tr>\n" + "      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" + "      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" + "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" + "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current}\">{{dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
}]);
angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/month.html", "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" + "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
}]);
angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\">\n" + "	<li ng-transclude></li>\n" + "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" + "		<span class=\"btn-group pull-left\">\n" + "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\">{{ getText('current') }}</button>\n" + "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" + "		</span>\n" + "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" + "	</li>\n" + "</ul>\n" + "");
}]);
angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/year.html", "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" + "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
}]);
angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/backdrop.html", "<div class=\"modal-backdrop fade {{ backdropClass }}\"\n" + "     ng-class=\"{in: animate}\"\n" + "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" + "></div>\n" + "");
}]);
angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/window.html", "<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" + "    <div class=\"modal-dialog\" ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\"><div class=\"modal-content\" modal-transclude></div></div>\n" + "</div>");
}]);
angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pager.html", "<ul class=\"pager\">\n" + "  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" + "  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" + "</ul>");
}]);
angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pagination.html", "<ul class=\"pagination\">\n" + "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1)\">{{getText('first')}}</a></li>\n" + "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" + "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" + "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" + "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages)\">{{getText('last')}}</a></li>\n" + "</ul>");
}]);
angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html", "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" + "</div>\n" + "");
}]);
angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-popup.html", "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" + "</div>\n" + "");
}]);
angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover.html", "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" + "  <div class=\"arrow\"></div>\n" + "\n" + "  <div class=\"popover-inner\">\n" + "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" + "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" + "  </div>\n" + "</div>\n" + "");
}]);
angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/bar.html", "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>");
}]);
angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progress.html", "<div class=\"progress\" ng-transclude></div>");
}]);
angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progressbar.html", "<div class=\"progress\">\n" + "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n" + "</div>");
}]);
angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/rating/rating.html", "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" + "    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\">\n" + "        <span class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" + "    </i>\n" + "</span>");
}]);
angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tab.html", "<li ng-class=\"{active: active, disabled: disabled}\">\n" + "  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" + "</li>\n" + "");
}]);
angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tabset.html", "<div>\n" + "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" + "  <div class=\"tab-content\">\n" + "    <div class=\"tab-pane\" \n" + "         ng-repeat=\"tab in tabs\" \n" + "         ng-class=\"{active: tab.active}\"\n" + "         tab-content-transclude=\"tab\">\n" + "    </div>\n" + "  </div>\n" + "</div>\n" + "");
}]);
angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/timepicker/timepicker.html", "<table>\n" + "	<tbody>\n" + "		<tr class=\"text-center\">\n" + "			<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "			<td>&nbsp;</td>\n" + "			<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "			<td ng-show=\"showMeridian\"></td>\n" + "		</tr>\n" + "		<tr>\n" + "			<td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" + "				<input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" + "			</td>\n" + "			<td>:</td>\n" + "			<td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" + "				<input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" + "			</td>\n" + "			<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" + "		</tr>\n" + "		<tr class=\"text-center\">\n" + "			<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "			<td>&nbsp;</td>\n" + "			<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "			<td ng-show=\"showMeridian\"></td>\n" + "		</tr>\n" + "	</tbody>\n" + "</table>\n" + "");
}]);
angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-match.html", "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
}]);
angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-popup.html", "<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" + "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">\n" + "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" + "    </li>\n" + "</ul>\n" + "");
}]);


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/bower_components/angular-bootstrap/ui-bootstrap-tpls.js
; browserify_shim__define__module__export__(typeof angular.module('ui.bootstrap').name != "undefined" ? angular.module('ui.bootstrap').name : window.angular.module('ui.bootstrap').name);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],62:[function(require,module,exports){
"use strict";
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
  module.exports = 'ui.router';
}
(function(window, angular, undefined) {
  'use strict';
  var isDefined = angular.isDefined,
      isFunction = angular.isFunction,
      isString = angular.isString,
      isObject = angular.isObject,
      isArray = angular.isArray,
      forEach = angular.forEach,
      extend = angular.extend,
      copy = angular.copy;
  function inherit(parent, extra) {
    return extend(new (extend(function() {}, {prototype: parent}))(), extra);
  }
  function merge(dst) {
    forEach(arguments, function(obj) {
      if (obj !== dst) {
        forEach(obj, function(value, key) {
          if (!dst.hasOwnProperty(key))
            dst[key] = value;
        });
      }
    });
    return dst;
  }
  function ancestors(first, second) {
    var path = [];
    for (var n in first.path) {
      if (first.path[n] !== second.path[n])
        break;
      path.push(first.path[n]);
    }
    return path;
  }
  function objectKeys(object) {
    if (Object.keys) {
      return Object.keys(object);
    }
    var result = [];
    angular.forEach(object, function(val, key) {
      result.push(key);
    });
    return result;
  }
  function indexOf(array, value) {
    if (Array.prototype.indexOf) {
      return array.indexOf(value, Number(arguments[2]) || 0);
    }
    var len = array.length >>> 0,
        from = Number(arguments[2]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0)
      from += len;
    for (; from < len; from++) {
      if (from in array && array[from] === value)
        return from;
    }
    return -1;
  }
  function inheritParams(currentParams, newParams, $current, $to) {
    var parents = ancestors($current, $to),
        parentParams,
        inherited = {},
        inheritList = [];
    for (var i in parents) {
      if (!parents[i].params)
        continue;
      parentParams = objectKeys(parents[i].params);
      if (!parentParams.length)
        continue;
      for (var j in parentParams) {
        if (indexOf(inheritList, parentParams[j]) >= 0)
          continue;
        inheritList.push(parentParams[j]);
        inherited[parentParams[j]] = currentParams[parentParams[j]];
      }
    }
    return extend({}, inherited, newParams);
  }
  function equalForKeys(a, b, keys) {
    if (!keys) {
      keys = [];
      for (var n in a)
        keys.push(n);
    }
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (a[k] != b[k])
        return false;
    }
    return true;
  }
  function filterByKeys(keys, values) {
    var filtered = {};
    forEach(keys, function(name) {
      filtered[name] = values[name];
    });
    return filtered;
  }
  function indexBy(array, propName) {
    var result = {};
    forEach(array, function(item) {
      result[item[propName]] = item;
    });
    return result;
  }
  function pick(obj) {
    var copy = {};
    var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    forEach(keys, function(key) {
      if (key in obj)
        copy[key] = obj[key];
    });
    return copy;
  }
  function omit(obj) {
    var copy = {};
    var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    for (var key in obj) {
      if (indexOf(keys, key) == -1)
        copy[key] = obj[key];
    }
    return copy;
  }
  function pluck(collection, key) {
    var result = isArray(collection) ? [] : {};
    forEach(collection, function(val, i) {
      result[i] = isFunction(key) ? key(val) : val[key];
    });
    return result;
  }
  function filter(collection, callback) {
    var array = isArray(collection);
    var result = array ? [] : {};
    forEach(collection, function(val, i) {
      if (callback(val, i)) {
        result[array ? result.length : i] = val;
      }
    });
    return result;
  }
  function map(collection, callback) {
    var result = isArray(collection) ? [] : {};
    forEach(collection, function(val, i) {
      result[i] = callback(val, i);
    });
    return result;
  }
  angular.module('ui.router.util', ['ng']);
  angular.module('ui.router.router', ['ui.router.util']);
  angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);
  angular.module('ui.router', ['ui.router.state']);
  angular.module('ui.router.compat', ['ui.router']);
  $Resolve.$inject = ['$q', '$injector'];
  function $Resolve($q, $injector) {
    var VISIT_IN_PROGRESS = 1,
        VISIT_DONE = 2,
        NOTHING = {},
        NO_DEPENDENCIES = [],
        NO_LOCALS = NOTHING,
        NO_PARENT = extend($q.when(NOTHING), {
          $$promises: NOTHING,
          $$values: NOTHING
        });
    this.study = function(invocables) {
      if (!isObject(invocables))
        throw new Error("'invocables' must be an object");
      var invocableKeys = objectKeys(invocables || {});
      var plan = [],
          cycle = [],
          visited = {};
      function visit(value, key) {
        if (visited[key] === VISIT_DONE)
          return;
        cycle.push(key);
        if (visited[key] === VISIT_IN_PROGRESS) {
          cycle.splice(0, indexOf(cycle, key));
          throw new Error("Cyclic dependency: " + cycle.join(" -> "));
        }
        visited[key] = VISIT_IN_PROGRESS;
        if (isString(value)) {
          plan.push(key, [function() {
            return $injector.get(value);
          }], NO_DEPENDENCIES);
        } else {
          var params = $injector.annotate(value);
          forEach(params, function(param) {
            if (param !== key && invocables.hasOwnProperty(param))
              visit(invocables[param], param);
          });
          plan.push(key, value, params);
        }
        cycle.pop();
        visited[key] = VISIT_DONE;
      }
      forEach(invocables, visit);
      invocables = cycle = visited = null;
      function isResolve(value) {
        return isObject(value) && value.then && value.$$promises;
      }
      return function(locals, parent, self) {
        if (isResolve(locals) && self === undefined) {
          self = parent;
          parent = locals;
          locals = null;
        }
        if (!locals)
          locals = NO_LOCALS;
        else if (!isObject(locals)) {
          throw new Error("'locals' must be an object");
        }
        if (!parent)
          parent = NO_PARENT;
        else if (!isResolve(parent)) {
          throw new Error("'parent' must be a promise returned by $resolve.resolve()");
        }
        var resolution = $q.defer(),
            result = resolution.promise,
            promises = result.$$promises = {},
            values = extend({}, locals),
            wait = 1 + plan.length / 3,
            merged = false;
        function done() {
          if (!--wait) {
            if (!merged)
              merge(values, parent.$$values);
            result.$$values = values;
            result.$$promises = result.$$promises || true;
            delete result.$$inheritedValues;
            resolution.resolve(values);
          }
        }
        function fail(reason) {
          result.$$failure = reason;
          resolution.reject(reason);
        }
        if (isDefined(parent.$$failure)) {
          fail(parent.$$failure);
          return result;
        }
        if (parent.$$inheritedValues) {
          merge(values, omit(parent.$$inheritedValues, invocableKeys));
        }
        extend(promises, parent.$$promises);
        if (parent.$$values) {
          merged = merge(values, omit(parent.$$values, invocableKeys));
          result.$$inheritedValues = omit(parent.$$values, invocableKeys);
          done();
        } else {
          if (parent.$$inheritedValues) {
            result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
          }
          parent.then(done, fail);
        }
        for (var i = 0,
            ii = plan.length; i < ii; i += 3) {
          if (locals.hasOwnProperty(plan[i]))
            done();
          else
            invoke(plan[i], plan[i + 1], plan[i + 2]);
        }
        function invoke(key, invocable, params) {
          var invocation = $q.defer(),
              waitParams = 0;
          function onfailure(reason) {
            invocation.reject(reason);
            fail(reason);
          }
          forEach(params, function(dep) {
            if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
              waitParams++;
              promises[dep].then(function(result) {
                values[dep] = result;
                if (!(--waitParams))
                  proceed();
              }, onfailure);
            }
          });
          if (!waitParams)
            proceed();
          function proceed() {
            if (isDefined(result.$$failure))
              return;
            try {
              invocation.resolve($injector.invoke(invocable, self, values));
              invocation.promise.then(function(result) {
                values[key] = result;
                done();
              }, onfailure);
            } catch (e) {
              onfailure(e);
            }
          }
          promises[key] = invocation.promise;
        }
        return result;
      };
    };
    this.resolve = function(invocables, locals, parent, self) {
      return this.study(invocables)(locals, parent, self);
    };
  }
  angular.module('ui.router.util').service('$resolve', $Resolve);
  $TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
  function $TemplateFactory($http, $templateCache, $injector) {
    this.fromConfig = function(config, params, locals) {
      return (isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null);
    };
    this.fromString = function(template, params) {
      return isFunction(template) ? template(params) : template;
    };
    this.fromUrl = function(url, params) {
      if (isFunction(url))
        url = url(params);
      if (url == null)
        return null;
      else
        return $http.get(url, {
          cache: $templateCache,
          headers: {Accept: 'text/html'}
        }).then(function(response) {
          return response.data;
        });
    };
    this.fromProvider = function(provider, params, locals) {
      return $injector.invoke(provider, null, locals || {params: params});
    };
  }
  angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);
  var $$UMFP;
  function UrlMatcher(pattern, config, parentMatcher) {
    config = extend({params: {}}, isObject(config) ? config : {});
    var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        compiled = '^',
        last = 0,
        m,
        segments = this.segments = [],
        parentParams = parentMatcher ? parentMatcher.params : {},
        params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
        paramNames = [];
    function addParameter(id, type, config, location) {
      paramNames.push(id);
      if (parentParams[id])
        return parentParams[id];
      if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id))
        throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
      if (params[id])
        throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
      params[id] = new $$UMFP.Param(id, type, config, location);
      return params[id];
    }
    function quoteRegExp(string, pattern, squash) {
      var surroundPattern = ['', ''],
          result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
      if (!pattern)
        return result;
      switch (squash) {
        case false:
          surroundPattern = ['(', ')'];
          break;
        case true:
          surroundPattern = ['?(', ')?'];
          break;
        default:
          surroundPattern = ['(' + squash + "|", ')?'];
          break;
      }
      return result + surroundPattern[0] + pattern + surroundPattern[1];
    }
    this.source = pattern;
    function matchDetails(m, isSearch) {
      var id,
          regexp,
          segment,
          type,
          cfg,
          arrayMode;
      id = m[2] || m[3];
      cfg = config.params[id];
      segment = pattern.substring(last, m.index);
      regexp = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
      type = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), {pattern: new RegExp(regexp)});
      return {
        id: id,
        regexp: regexp,
        segment: segment,
        type: type,
        cfg: cfg
      };
    }
    var p,
        param,
        segment;
    while ((m = placeholder.exec(pattern))) {
      p = matchDetails(m, false);
      if (p.segment.indexOf('?') >= 0)
        break;
      param = addParameter(p.id, p.type, p.cfg, "path");
      compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash);
      segments.push(p.segment);
      last = placeholder.lastIndex;
    }
    segment = pattern.substring(last);
    var i = segment.indexOf('?');
    if (i >= 0) {
      var search = this.sourceSearch = segment.substring(i);
      segment = segment.substring(0, i);
      this.sourcePath = pattern.substring(0, last + i);
      if (search.length > 0) {
        last = 0;
        while ((m = searchPlaceholder.exec(search))) {
          p = matchDetails(m, true);
          param = addParameter(p.id, p.type, p.cfg, "search");
          last = placeholder.lastIndex;
        }
      }
    } else {
      this.sourcePath = pattern;
      this.sourceSearch = '';
    }
    compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
    segments.push(segment);
    this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
    this.prefix = segments[0];
    this.$$paramNames = paramNames;
  }
  UrlMatcher.prototype.concat = function(pattern, config) {
    var defaultConfig = {
      caseInsensitive: $$UMFP.caseInsensitive(),
      strict: $$UMFP.strictMode(),
      squash: $$UMFP.defaultSquashPolicy()
    };
    return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
  };
  UrlMatcher.prototype.toString = function() {
    return this.source;
  };
  UrlMatcher.prototype.exec = function(path, searchParams) {
    var m = this.regexp.exec(path);
    if (!m)
      return null;
    searchParams = searchParams || {};
    var paramNames = this.parameters(),
        nTotal = paramNames.length,
        nPath = this.segments.length - 1,
        values = {},
        i,
        j,
        cfg,
        paramName;
    if (nPath !== m.length - 1)
      throw new Error("Unbalanced capture group in route '" + this.source + "'");
    function decodePathArray(string) {
      function reverseString(str) {
        return str.split("").reverse().join("");
      }
      function unquoteDashes(str) {
        return str.replace(/\\-/, "-");
      }
      var split = reverseString(string).split(/-(?!\\)/);
      var allReversed = map(split, reverseString);
      return map(allReversed, unquoteDashes).reverse();
    }
    for (i = 0; i < nPath; i++) {
      paramName = paramNames[i];
      var param = this.params[paramName];
      var paramVal = m[i + 1];
      for (j = 0; j < param.replace; j++) {
        if (param.replace[j].from === paramVal)
          paramVal = param.replace[j].to;
      }
      if (paramVal && param.array === true)
        paramVal = decodePathArray(paramVal);
      values[paramName] = param.value(paramVal);
    }
    for (; i < nTotal; i++) {
      paramName = paramNames[i];
      values[paramName] = this.params[paramName].value(searchParams[paramName]);
    }
    return values;
  };
  UrlMatcher.prototype.parameters = function(param) {
    if (!isDefined(param))
      return this.$$paramNames;
    return this.params[param] || null;
  };
  UrlMatcher.prototype.validates = function(params) {
    return this.params.$$validates(params);
  };
  UrlMatcher.prototype.format = function(values) {
    values = values || {};
    var segments = this.segments,
        params = this.parameters(),
        paramset = this.params;
    if (!this.validates(values))
      return null;
    var i,
        search = false,
        nPath = segments.length - 1,
        nTotal = params.length,
        result = segments[0];
    function encodeDashes(str) {
      return encodeURIComponent(str).replace(/-/g, function(c) {
        return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    for (i = 0; i < nTotal; i++) {
      var isPathParam = i < nPath;
      var name = params[i],
          param = paramset[name],
          value = param.value(values[name]);
      var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
      var squash = isDefaultValue ? param.squash : false;
      var encoded = param.type.encode(value);
      if (isPathParam) {
        var nextSegment = segments[i + 1];
        if (squash === false) {
          if (encoded != null) {
            if (isArray(encoded)) {
              result += map(encoded, encodeDashes).join("-");
            } else {
              result += encodeURIComponent(encoded);
            }
          }
          result += nextSegment;
        } else if (squash === true) {
          var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
          result += nextSegment.match(capture)[1];
        } else if (isString(squash)) {
          result += squash + nextSegment;
        }
      } else {
        if (encoded == null || (isDefaultValue && squash !== false))
          continue;
        if (!isArray(encoded))
          encoded = [encoded];
        encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
        result += (search ? '&' : '?') + (name + '=' + encoded);
        search = true;
      }
    }
    return result;
  };
  function Type(config) {
    extend(this, config);
  }
  Type.prototype.is = function(val, key) {
    return true;
  };
  Type.prototype.encode = function(val, key) {
    return val;
  };
  Type.prototype.decode = function(val, key) {
    return val;
  };
  Type.prototype.equals = function(a, b) {
    return a == b;
  };
  Type.prototype.$subPattern = function() {
    var sub = this.pattern.toString();
    return sub.substr(1, sub.length - 2);
  };
  Type.prototype.pattern = /.*/;
  Type.prototype.toString = function() {
    return "{Type:" + this.name + "}";
  };
  Type.prototype.$asArray = function(mode, isSearch) {
    if (!mode)
      return this;
    if (mode === "auto" && !isSearch)
      throw new Error("'auto' array mode is for query parameters only");
    return new ArrayType(this, mode);
    function ArrayType(type, mode) {
      function bindTo(type, callbackName) {
        return function() {
          return type[callbackName].apply(type, arguments);
        };
      }
      function arrayWrap(val) {
        return isArray(val) ? val : (isDefined(val) ? [val] : []);
      }
      function arrayUnwrap(val) {
        switch (val.length) {
          case 0:
            return undefined;
          case 1:
            return mode === "auto" ? val[0] : val;
          default:
            return val;
        }
      }
      function falsey(val) {
        return !val;
      }
      function arrayHandler(callback, allTruthyMode) {
        return function handleArray(val) {
          val = arrayWrap(val);
          var result = map(val, callback);
          if (allTruthyMode === true)
            return filter(result, falsey).length === 0;
          return arrayUnwrap(result);
        };
      }
      function arrayEqualsHandler(callback) {
        return function handleArray(val1, val2) {
          var left = arrayWrap(val1),
              right = arrayWrap(val2);
          if (left.length !== right.length)
            return false;
          for (var i = 0; i < left.length; i++) {
            if (!callback(left[i], right[i]))
              return false;
          }
          return true;
        };
      }
      this.encode = arrayHandler(bindTo(type, 'encode'));
      this.decode = arrayHandler(bindTo(type, 'decode'));
      this.is = arrayHandler(bindTo(type, 'is'), true);
      this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
      this.pattern = type.pattern;
      this.$arrayMode = mode;
    }
  };
  function $UrlMatcherFactory() {
    $$UMFP = this;
    var isCaseInsensitive = false,
        isStrictMode = true,
        defaultSquashPolicy = false;
    function valToString(val) {
      return val != null ? val.toString().replace(/\//g, "%2F") : val;
    }
    function valFromString(val) {
      return val != null ? val.toString().replace(/%2F/g, "/") : val;
    }
    function regexpMatches(val) {
      return this.pattern.test(val);
    }
    var $types = {},
        enqueue = true,
        typeQueue = [],
        injector,
        defaultTypes = {
          string: {
            encode: valToString,
            decode: valFromString,
            is: regexpMatches,
            pattern: /[^/]*/
          },
          int: {
            encode: valToString,
            decode: function(val) {
              return parseInt(val, 10);
            },
            is: function(val) {
              return isDefined(val) && this.decode(val.toString()) === val;
            },
            pattern: /\d+/
          },
          bool: {
            encode: function(val) {
              return val ? 1 : 0;
            },
            decode: function(val) {
              return parseInt(val, 10) !== 0;
            },
            is: function(val) {
              return val === true || val === false;
            },
            pattern: /0|1/
          },
          date: {
            encode: function(val) {
              if (!this.is(val))
                return undefined;
              return [val.getFullYear(), ('0' + (val.getMonth() + 1)).slice(-2), ('0' + val.getDate()).slice(-2)].join("-");
            },
            decode: function(val) {
              if (this.is(val))
                return val;
              var match = this.capture.exec(val);
              return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
            },
            is: function(val) {
              return val instanceof Date && !isNaN(val.valueOf());
            },
            equals: function(a, b) {
              return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
            },
            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
          },
          json: {
            encode: angular.toJson,
            decode: angular.fromJson,
            is: angular.isObject,
            equals: angular.equals,
            pattern: /[^/]*/
          },
          any: {
            encode: angular.identity,
            decode: angular.identity,
            is: angular.identity,
            equals: angular.equals,
            pattern: /.*/
          }
        };
    function getDefaultConfig() {
      return {
        strict: isStrictMode,
        caseInsensitive: isCaseInsensitive
      };
    }
    function isInjectable(value) {
      return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
    }
    $UrlMatcherFactory.$$getDefaultValue = function(config) {
      if (!isInjectable(config.value))
        return config.value;
      if (!injector)
        throw new Error("Injectable functions cannot be called at configuration time");
      return injector.invoke(config.value);
    };
    this.caseInsensitive = function(value) {
      if (isDefined(value))
        isCaseInsensitive = value;
      return isCaseInsensitive;
    };
    this.strictMode = function(value) {
      if (isDefined(value))
        isStrictMode = value;
      return isStrictMode;
    };
    this.defaultSquashPolicy = function(value) {
      if (!isDefined(value))
        return defaultSquashPolicy;
      if (value !== true && value !== false && !isString(value))
        throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
      defaultSquashPolicy = value;
      return value;
    };
    this.compile = function(pattern, config) {
      return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
    };
    this.isMatcher = function(o) {
      if (!isObject(o))
        return false;
      var result = true;
      forEach(UrlMatcher.prototype, function(val, name) {
        if (isFunction(val)) {
          result = result && (isDefined(o[name]) && isFunction(o[name]));
        }
      });
      return result;
    };
    this.type = function(name, definition, definitionFn) {
      if (!isDefined(definition))
        return $types[name];
      if ($types.hasOwnProperty(name))
        throw new Error("A type named '" + name + "' has already been defined.");
      $types[name] = new Type(extend({name: name}, definition));
      if (definitionFn) {
        typeQueue.push({
          name: name,
          def: definitionFn
        });
        if (!enqueue)
          flushTypeQueue();
      }
      return this;
    };
    function flushTypeQueue() {
      while (typeQueue.length) {
        var type = typeQueue.shift();
        if (type.pattern)
          throw new Error("You cannot override a type's .pattern at runtime.");
        angular.extend($types[type.name], injector.invoke(type.def));
      }
    }
    forEach(defaultTypes, function(type, name) {
      $types[name] = new Type(extend({name: name}, type));
    });
    $types = inherit($types, {});
    this.$get = ['$injector', function($injector) {
      injector = $injector;
      enqueue = false;
      flushTypeQueue();
      forEach(defaultTypes, function(type, name) {
        if (!$types[name])
          $types[name] = new Type(type);
      });
      return this;
    }];
    this.Param = function Param(id, type, config, location) {
      var self = this;
      config = unwrapShorthand(config);
      type = getType(config, type, location);
      var arrayMode = getArrayMode();
      type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
      if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
        config.value = "";
      var isOptional = config.value !== undefined;
      var squash = getSquashPolicy(config, isOptional);
      var replace = getReplace(config, arrayMode, isOptional, squash);
      function unwrapShorthand(config) {
        var keys = isObject(config) ? objectKeys(config) : [];
        var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 && indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
        if (isShorthand)
          config = {value: config};
        config.$$fn = isInjectable(config.value) ? config.value : function() {
          return config.value;
        };
        return config;
      }
      function getType(config, urlType, location) {
        if (config.type && urlType)
          throw new Error("Param '" + id + "' has two type configurations.");
        if (urlType)
          return urlType;
        if (!config.type)
          return (location === "config" ? $types.any : $types.string);
        return config.type instanceof Type ? config.type : new Type(config.type);
      }
      function getArrayMode() {
        var arrayDefaults = {array: (location === "search" ? "auto" : false)};
        var arrayParamNomenclature = id.match(/\[\]$/) ? {array: true} : {};
        return extend(arrayDefaults, arrayParamNomenclature, config).array;
      }
      function getSquashPolicy(config, isOptional) {
        var squash = config.squash;
        if (!isOptional || squash === false)
          return false;
        if (!isDefined(squash) || squash == null)
          return defaultSquashPolicy;
        if (squash === true || isString(squash))
          return squash;
        throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
      }
      function getReplace(config, arrayMode, isOptional, squash) {
        var replace,
            configuredKeys,
            defaultPolicy = [{
              from: "",
              to: (isOptional || arrayMode ? undefined : "")
            }, {
              from: null,
              to: (isOptional || arrayMode ? undefined : "")
            }];
        replace = isArray(config.replace) ? config.replace : [];
        if (isString(squash))
          replace.push({
            from: squash,
            to: undefined
          });
        configuredKeys = map(replace, function(item) {
          return item.from;
        });
        return filter(defaultPolicy, function(item) {
          return indexOf(configuredKeys, item.from) === -1;
        }).concat(replace);
      }
      function $$getDefaultValue() {
        if (!injector)
          throw new Error("Injectable functions cannot be called at configuration time");
        return injector.invoke(config.$$fn);
      }
      function $value(value) {
        function hasReplaceVal(val) {
          return function(obj) {
            return obj.from === val;
          };
        }
        function $replace(value) {
          var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) {
            return obj.to;
          });
          return replacement.length ? replacement[0] : value;
        }
        value = $replace(value);
        return isDefined(value) ? self.type.decode(value) : $$getDefaultValue();
      }
      function toString() {
        return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}";
      }
      extend(this, {
        id: id,
        type: type,
        location: location,
        array: arrayMode,
        squash: squash,
        replace: replace,
        isOptional: isOptional,
        value: $value,
        dynamic: undefined,
        config: config,
        toString: toString
      });
    };
    function ParamSet(params) {
      extend(this, params || {});
    }
    ParamSet.prototype = {
      $$new: function() {
        return inherit(this, extend(new ParamSet(), {$$parent: this}));
      },
      $$keys: function() {
        var keys = [],
            chain = [],
            parent = this,
            ignore = objectKeys(ParamSet.prototype);
        while (parent) {
          chain.push(parent);
          parent = parent.$$parent;
        }
        chain.reverse();
        forEach(chain, function(paramset) {
          forEach(objectKeys(paramset), function(key) {
            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1)
              keys.push(key);
          });
        });
        return keys;
      },
      $$values: function(paramValues) {
        var values = {},
            self = this;
        forEach(self.$$keys(), function(key) {
          values[key] = self[key].value(paramValues && paramValues[key]);
        });
        return values;
      },
      $$equals: function(paramValues1, paramValues2) {
        var equal = true,
            self = this;
        forEach(self.$$keys(), function(key) {
          var left = paramValues1 && paramValues1[key],
              right = paramValues2 && paramValues2[key];
          if (!self[key].type.equals(left, right))
            equal = false;
        });
        return equal;
      },
      $$validates: function $$validate(paramValues) {
        var result = true,
            isOptional,
            val,
            param,
            self = this;
        forEach(this.$$keys(), function(key) {
          param = self[key];
          val = paramValues[key];
          isOptional = !val && param.isOptional;
          result = result && (isOptional || !!param.type.is(val));
        });
        return result;
      },
      $$parent: undefined
    };
    this.ParamSet = ParamSet;
  }
  angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
  angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) {}]);
  $UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
  function $UrlRouterProvider($locationProvider, $urlMatcherFactory) {
    var rules = [],
        otherwise = null,
        interceptDeferred = false,
        listener;
    function regExpPrefix(re) {
      var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
      return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
    }
    function interpolate(pattern, match) {
      return pattern.replace(/\$(\$|\d{1,2})/, function(m, what) {
        return match[what === '$' ? 0 : Number(what)];
      });
    }
    this.rule = function(rule) {
      if (!isFunction(rule))
        throw new Error("'rule' must be a function");
      rules.push(rule);
      return this;
    };
    this.otherwise = function(rule) {
      if (isString(rule)) {
        var redirect = rule;
        rule = function() {
          return redirect;
        };
      } else if (!isFunction(rule))
        throw new Error("'rule' must be a function");
      otherwise = rule;
      return this;
    };
    function handleIfMatch($injector, handler, match) {
      if (!match)
        return false;
      var result = $injector.invoke(handler, handler, {$match: match});
      return isDefined(result) ? result : true;
    }
    this.when = function(what, handler) {
      var redirect,
          handlerIsString = isString(handler);
      if (isString(what))
        what = $urlMatcherFactory.compile(what);
      if (!handlerIsString && !isFunction(handler) && !isArray(handler))
        throw new Error("invalid 'handler' in when()");
      var strategies = {
        matcher: function(what, handler) {
          if (handlerIsString) {
            redirect = $urlMatcherFactory.compile(handler);
            handler = ['$match', function($match) {
              return redirect.format($match);
            }];
          }
          return extend(function($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
          }, {prefix: isString(what.prefix) ? what.prefix : ''});
        },
        regex: function(what, handler) {
          if (what.global || what.sticky)
            throw new Error("when() RegExp must not be global or sticky");
          if (handlerIsString) {
            redirect = handler;
            handler = ['$match', function($match) {
              return interpolate(redirect, $match);
            }];
          }
          return extend(function($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path()));
          }, {prefix: regExpPrefix(what)});
        }
      };
      var check = {
        matcher: $urlMatcherFactory.isMatcher(what),
        regex: what instanceof RegExp
      };
      for (var n in check) {
        if (check[n])
          return this.rule(strategies[n](what, handler));
      }
      throw new Error("invalid 'what' in when()");
    };
    this.deferIntercept = function(defer) {
      if (defer === undefined)
        defer = true;
      interceptDeferred = defer;
    };
    this.$get = $get;
    $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
    function $get($location, $rootScope, $injector, $browser) {
      var baseHref = $browser.baseHref(),
          location = $location.url(),
          lastPushedUrl;
      function appendBasePath(url, isHtml5, absolute) {
        if (baseHref === '/')
          return url;
        if (isHtml5)
          return baseHref.slice(0, -1) + url;
        if (absolute)
          return baseHref.slice(1) + url;
        return url;
      }
      function update(evt) {
        if (evt && evt.defaultPrevented)
          return;
        var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
        lastPushedUrl = undefined;
        if (ignoreUpdate)
          return true;
        function check(rule) {
          var handled = rule($injector, $location);
          if (!handled)
            return false;
          if (isString(handled))
            $location.replace().url(handled);
          return true;
        }
        var n = rules.length,
            i;
        for (i = 0; i < n; i++) {
          if (check(rules[i]))
            return;
        }
        if (otherwise)
          check(otherwise);
      }
      function listen() {
        listener = listener || $rootScope.$on('$locationChangeSuccess', update);
        return listener;
      }
      if (!interceptDeferred)
        listen();
      return {
        sync: function() {
          update();
        },
        listen: function() {
          return listen();
        },
        update: function(read) {
          if (read) {
            location = $location.url();
            return;
          }
          if ($location.url() === location)
            return;
          $location.url(location);
          $location.replace();
        },
        push: function(urlMatcher, params, options) {
          $location.url(urlMatcher.format(params || {}));
          lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
          if (options && options.replace)
            $location.replace();
        },
        href: function(urlMatcher, params, options) {
          if (!urlMatcher.validates(params))
            return null;
          var isHtml5 = $locationProvider.html5Mode();
          if (angular.isObject(isHtml5)) {
            isHtml5 = isHtml5.enabled;
          }
          var url = urlMatcher.format(params);
          options = options || {};
          if (!isHtml5 && url !== null) {
            url = "#" + $locationProvider.hashPrefix() + url;
          }
          url = appendBasePath(url, isHtml5, options.absolute);
          if (!options.absolute || !url) {
            return url;
          }
          var slash = (!isHtml5 && url ? '/' : ''),
              port = $location.port();
          port = (port === 80 || port === 443 ? '' : ':' + port);
          return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
        }
      };
    }
  }
  angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);
  $StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
  function $StateProvider($urlRouterProvider, $urlMatcherFactory) {
    var root,
        states = {},
        $state,
        queue = {},
        abstractKey = 'abstract';
    var stateBuilder = {
      parent: function(state) {
        if (isDefined(state.parent) && state.parent)
          return findState(state.parent);
        var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
        return compositeName ? findState(compositeName[1]) : root;
      },
      data: function(state) {
        if (state.parent && state.parent.data) {
          state.data = state.self.data = extend({}, state.parent.data, state.data);
        }
        return state.data;
      },
      url: function(state) {
        var url = state.url,
            config = {params: state.params || {}};
        if (isString(url)) {
          if (url.charAt(0) == '^')
            return $urlMatcherFactory.compile(url.substring(1), config);
          return (state.parent.navigable || root).url.concat(url, config);
        }
        if (!url || $urlMatcherFactory.isMatcher(url))
          return url;
        throw new Error("Invalid url '" + url + "' in state '" + state + "'");
      },
      navigable: function(state) {
        return state.url ? state : (state.parent ? state.parent.navigable : null);
      },
      ownParams: function(state) {
        var params = state.url && state.url.params || new $$UMFP.ParamSet();
        forEach(state.params || {}, function(config, id) {
          if (!params[id])
            params[id] = new $$UMFP.Param(id, null, config, "config");
        });
        return params;
      },
      params: function(state) {
        return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
      },
      views: function(state) {
        var views = {};
        forEach(isDefined(state.views) ? state.views : {'': state}, function(view, name) {
          if (name.indexOf('@') < 0)
            name += '@' + state.parent.name;
          views[name] = view;
        });
        return views;
      },
      path: function(state) {
        return state.parent ? state.parent.path.concat(state) : [];
      },
      includes: function(state) {
        var includes = state.parent ? extend({}, state.parent.includes) : {};
        includes[state.name] = true;
        return includes;
      },
      $delegates: {}
    };
    function isRelative(stateName) {
      return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
    }
    function findState(stateOrName, base) {
      if (!stateOrName)
        return undefined;
      var isStr = isString(stateOrName),
          name = isStr ? stateOrName : stateOrName.name,
          path = isRelative(name);
      if (path) {
        if (!base)
          throw new Error("No reference point given for path '" + name + "'");
        base = findState(base);
        var rel = name.split("."),
            i = 0,
            pathLength = rel.length,
            current = base;
        for (; i < pathLength; i++) {
          if (rel[i] === "" && i === 0) {
            current = base;
            continue;
          }
          if (rel[i] === "^") {
            if (!current.parent)
              throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
            current = current.parent;
            continue;
          }
          break;
        }
        rel = rel.slice(i).join(".");
        name = current.name + (current.name && rel ? "." : "") + rel;
      }
      var state = states[name];
      if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
        return state;
      }
      return undefined;
    }
    function queueState(parentName, state) {
      if (!queue[parentName]) {
        queue[parentName] = [];
      }
      queue[parentName].push(state);
    }
    function flushQueuedChildren(parentName) {
      var queued = queue[parentName] || [];
      while (queued.length) {
        registerState(queued.shift());
      }
    }
    function registerState(state) {
      state = inherit(state, {
        self: state,
        resolve: state.resolve || {},
        toString: function() {
          return this.name;
        }
      });
      var name = state.name;
      if (!isString(name) || name.indexOf('@') >= 0)
        throw new Error("State must have a valid name");
      if (states.hasOwnProperty(name))
        throw new Error("State '" + name + "'' is already defined");
      var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.')) : (isString(state.parent)) ? state.parent : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name : '';
      if (parentName && !states[parentName]) {
        return queueState(parentName, state.self);
      }
      for (var key in stateBuilder) {
        if (isFunction(stateBuilder[key]))
          state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
      }
      states[name] = state;
      if (!state[abstractKey] && state.url) {
        $urlRouterProvider.when(state.url, ['$match', '$stateParams', function($match, $stateParams) {
          if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
            $state.transitionTo(state, $match, {
              inherit: true,
              location: false
            });
          }
        }]);
      }
      flushQueuedChildren(name);
      return state;
    }
    function isGlob(text) {
      return text.indexOf('*') > -1;
    }
    function doesStateMatchGlob(glob) {
      var globSegments = glob.split('.'),
          segments = $state.$current.name.split('.');
      if (globSegments[0] === '**') {
        segments = segments.slice(indexOf(segments, globSegments[1]));
        segments.unshift('**');
      }
      if (globSegments[globSegments.length - 1] === '**') {
        segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
        segments.push('**');
      }
      if (globSegments.length != segments.length) {
        return false;
      }
      for (var i = 0,
          l = globSegments.length; i < l; i++) {
        if (globSegments[i] === '*') {
          segments[i] = '*';
        }
      }
      return segments.join('') === globSegments.join('');
    }
    root = registerState({
      name: '',
      url: '^',
      views: null,
      'abstract': true
    });
    root.navigable = null;
    this.decorator = decorator;
    function decorator(name, func) {
      if (isString(name) && !isDefined(func)) {
        return stateBuilder[name];
      }
      if (!isFunction(func) || !isString(name)) {
        return this;
      }
      if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
        stateBuilder.$delegates[name] = stateBuilder[name];
      }
      stateBuilder[name] = func;
      return this;
    }
    this.state = state;
    function state(name, definition) {
      if (isObject(name))
        definition = name;
      else
        definition.name = name;
      registerState(definition);
      return this;
    }
    this.$get = $get;
    $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
    function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $urlRouter, $location, $urlMatcherFactory) {
      var TransitionSuperseded = $q.reject(new Error('transition superseded'));
      var TransitionPrevented = $q.reject(new Error('transition prevented'));
      var TransitionAborted = $q.reject(new Error('transition aborted'));
      var TransitionFailed = $q.reject(new Error('transition failed'));
      function handleRedirect(redirect, state, params, options) {
        var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);
        if (evt.defaultPrevented) {
          $urlRouter.update();
          return TransitionAborted;
        }
        if (!evt.retry) {
          return null;
        }
        if (options.$retry) {
          $urlRouter.update();
          return TransitionFailed;
        }
        var retryTransition = $state.transition = $q.when(evt.retry);
        retryTransition.then(function() {
          if (retryTransition !== $state.transition)
            return TransitionSuperseded;
          redirect.options.$retry = true;
          return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
        }, function() {
          return TransitionAborted;
        });
        $urlRouter.update();
        return retryTransition;
      }
      root.locals = {
        resolve: null,
        globals: {$stateParams: {}}
      };
      $state = {
        params: {},
        current: root.self,
        $current: root,
        transition: null
      };
      $state.reload = function reload() {
        return $state.transitionTo($state.current, $stateParams, {
          reload: true,
          inherit: false,
          notify: true
        });
      };
      $state.go = function go(to, params, options) {
        return $state.transitionTo(to, params, extend({
          inherit: true,
          relative: $state.$current
        }, options));
      };
      $state.transitionTo = function transitionTo(to, toParams, options) {
        toParams = toParams || {};
        options = extend({
          location: true,
          inherit: false,
          relative: null,
          notify: true,
          reload: false,
          $retry: false
        }, options || {});
        var from = $state.$current,
            fromParams = $state.params,
            fromPath = from.path;
        var evt,
            toState = findState(to, options.relative);
        if (!isDefined(toState)) {
          var redirect = {
            to: to,
            toParams: toParams,
            options: options
          };
          var redirectResult = handleRedirect(redirect, from.self, fromParams, options);
          if (redirectResult) {
            return redirectResult;
          }
          to = redirect.to;
          toParams = redirect.toParams;
          options = redirect.options;
          toState = findState(to, options.relative);
          if (!isDefined(toState)) {
            if (!options.relative)
              throw new Error("No such state '" + to + "'");
            throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
          }
        }
        if (toState[abstractKey])
          throw new Error("Cannot transition to abstract state '" + to + "'");
        if (options.inherit)
          toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
        if (!toState.params.$$validates(toParams))
          return TransitionFailed;
        toParams = toState.params.$$values(toParams);
        to = toState;
        var toPath = to.path;
        var keep = 0,
            state = toPath[keep],
            locals = root.locals,
            toLocals = [];
        if (!options.reload) {
          while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
            locals = toLocals[keep] = state.locals;
            keep++;
            state = toPath[keep];
          }
        }
        if (shouldTriggerReload(to, from, locals, options)) {
          if (to.self.reloadOnSearch !== false)
            $urlRouter.update();
          $state.transition = null;
          return $q.when($state.current);
        }
        toParams = filterByKeys(to.params.$$keys(), toParams || {});
        if (options.notify) {
          if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
            $urlRouter.update();
            return TransitionPrevented;
          }
        }
        var resolved = $q.when(locals);
        for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
          locals = toLocals[l] = inherit(locals);
          resolved = resolveState(state, toParams, state === to, resolved, locals, options);
        }
        var transition = $state.transition = resolved.then(function() {
          var l,
              entering,
              exiting;
          if ($state.transition !== transition)
            return TransitionSuperseded;
          for (l = fromPath.length - 1; l >= keep; l--) {
            exiting = fromPath[l];
            if (exiting.self.onExit) {
              $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
            }
            exiting.locals = null;
          }
          for (l = keep; l < toPath.length; l++) {
            entering = toPath[l];
            entering.locals = toLocals[l];
            if (entering.self.onEnter) {
              $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
            }
          }
          if ($state.transition !== transition)
            return TransitionSuperseded;
          $state.$current = to;
          $state.current = to.self;
          $state.params = toParams;
          copy($state.params, $stateParams);
          $state.transition = null;
          if (options.location && to.navigable) {
            $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
              $$avoidResync: true,
              replace: options.location === 'replace'
            });
          }
          if (options.notify) {
            $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
          }
          $urlRouter.update(true);
          return $state.current;
        }, function(error) {
          if ($state.transition !== transition)
            return TransitionSuperseded;
          $state.transition = null;
          evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
          if (!evt.defaultPrevented) {
            $urlRouter.update();
          }
          return $q.reject(error);
        });
        return transition;
      };
      $state.is = function is(stateOrName, params, options) {
        options = extend({relative: $state.$current}, options || {});
        var state = findState(stateOrName, options.relative);
        if (!isDefined(state)) {
          return undefined;
        }
        if ($state.$current !== state) {
          return false;
        }
        return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
      };
      $state.includes = function includes(stateOrName, params, options) {
        options = extend({relative: $state.$current}, options || {});
        if (isString(stateOrName) && isGlob(stateOrName)) {
          if (!doesStateMatchGlob(stateOrName)) {
            return false;
          }
          stateOrName = $state.$current.name;
        }
        var state = findState(stateOrName, options.relative);
        if (!isDefined(state)) {
          return undefined;
        }
        if (!isDefined($state.$current.includes[state.name])) {
          return false;
        }
        return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
      };
      $state.href = function href(stateOrName, params, options) {
        options = extend({
          lossy: true,
          inherit: true,
          absolute: false,
          relative: $state.$current
        }, options || {});
        var state = findState(stateOrName, options.relative);
        if (!isDefined(state))
          return null;
        if (options.inherit)
          params = inheritParams($stateParams, params || {}, $state.$current, state);
        var nav = (state && options.lossy) ? state.navigable : state;
        if (!nav || nav.url === undefined || nav.url === null) {
          return null;
        }
        return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys(), params || {}), {absolute: options.absolute});
      };
      $state.get = function(stateOrName, context) {
        if (arguments.length === 0)
          return map(objectKeys(states), function(name) {
            return states[name].self;
          });
        var state = findState(stateOrName, context || $state.$current);
        return (state && state.self) ? state.self : null;
      };
      function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
        var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
        var locals = {$stateParams: $stateParams};
        dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
        var promises = [dst.resolve.then(function(globals) {
          dst.globals = globals;
        })];
        if (inherited)
          promises.push(inherited);
        forEach(state.views, function(view, name) {
          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
          injectables.$template = [function() {
            return $view.load(name, {
              view: view,
              locals: locals,
              params: $stateParams,
              notify: options.notify
            }) || '';
          }];
          promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function(result) {
            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
              var injectLocals = angular.extend({}, injectables, locals);
              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
            } else {
              result.$$controller = view.controller;
            }
            result.$$state = state;
            result.$$controllerAs = view.controllerAs;
            dst[name] = result;
          }));
        });
        return $q.all(promises).then(function(values) {
          return dst;
        });
      }
      return $state;
    }
    function shouldTriggerReload(to, from, locals, options) {
      if (to === from && ((locals === from.locals && !options.reload) || (to.self.reloadOnSearch === false))) {
        return true;
      }
    }
  }
  angular.module('ui.router.state').value('$stateParams', {}).provider('$state', $StateProvider);
  $ViewProvider.$inject = [];
  function $ViewProvider() {
    this.$get = $get;
    $get.$inject = ['$rootScope', '$templateFactory'];
    function $get($rootScope, $templateFactory) {
      return {load: function load(name, options) {
          var result,
              defaults = {
                template: null,
                controller: null,
                view: null,
                locals: null,
                notify: true,
                async: true,
                params: {}
              };
          options = extend(defaults, options);
          if (options.view) {
            result = $templateFactory.fromConfig(options.view, options.params, options.locals);
          }
          if (result && options.notify) {
            $rootScope.$broadcast('$viewContentLoading', options);
          }
          return result;
        }};
    }
  }
  angular.module('ui.router.state').provider('$view', $ViewProvider);
  function $ViewScrollProvider() {
    var useAnchorScroll = false;
    this.useAnchorScroll = function() {
      useAnchorScroll = true;
    };
    this.$get = ['$anchorScroll', '$timeout', function($anchorScroll, $timeout) {
      if (useAnchorScroll) {
        return $anchorScroll;
      }
      return function($element) {
        $timeout(function() {
          $element[0].scrollIntoView();
        }, 0, false);
      };
    }];
  }
  angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);
  $ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
  function $ViewDirective($state, $injector, $uiViewScroll, $interpolate) {
    function getService() {
      return ($injector.has) ? function(service) {
        return $injector.has(service) ? $injector.get(service) : null;
      } : function(service) {
        try {
          return $injector.get(service);
        } catch (e) {
          return null;
        }
      };
    }
    var service = getService(),
        $animator = service('$animator'),
        $animate = service('$animate');
    function getRenderer(attrs, scope) {
      var statics = function() {
        return {
          enter: function(element, target, cb) {
            target.after(element);
            cb();
          },
          leave: function(element, cb) {
            element.remove();
            cb();
          }
        };
      };
      if ($animate) {
        return {
          enter: function(element, target, cb) {
            var promise = $animate.enter(element, null, target, cb);
            if (promise && promise.then)
              promise.then(cb);
          },
          leave: function(element, cb) {
            var promise = $animate.leave(element, cb);
            if (promise && promise.then)
              promise.then(cb);
          }
        };
      }
      if ($animator) {
        var animate = $animator && $animator(scope, attrs);
        return {
          enter: function(element, target, cb) {
            animate.enter(element, null, target);
            cb();
          },
          leave: function(element, cb) {
            animate.leave(element);
            cb();
          }
        };
      }
      return statics();
    }
    var directive = {
      restrict: 'ECA',
      terminal: true,
      priority: 400,
      transclude: 'element',
      compile: function(tElement, tAttrs, $transclude) {
        return function(scope, $element, attrs) {
          var previousEl,
              currentEl,
              currentScope,
              latestLocals,
              onloadExp = attrs.onload || '',
              autoScrollExp = attrs.autoscroll,
              renderer = getRenderer(attrs, scope);
          scope.$on('$stateChangeSuccess', function() {
            updateView(false);
          });
          scope.$on('$viewContentLoading', function() {
            updateView(false);
          });
          updateView(true);
          function cleanupLastView() {
            if (previousEl) {
              previousEl.remove();
              previousEl = null;
            }
            if (currentScope) {
              currentScope.$destroy();
              currentScope = null;
            }
            if (currentEl) {
              renderer.leave(currentEl, function() {
                previousEl = null;
              });
              previousEl = currentEl;
              currentEl = null;
            }
          }
          function updateView(firstTime) {
            var newScope,
                name = getUiViewName(scope, attrs, $element, $interpolate),
                previousLocals = name && $state.$current && $state.$current.locals[name];
            if (!firstTime && previousLocals === latestLocals)
              return;
            newScope = scope.$new();
            latestLocals = $state.$current.locals[name];
            var clone = $transclude(newScope, function(clone) {
              renderer.enter(clone, $element, function onUiViewEnter() {
                if (currentScope) {
                  currentScope.$emit('$viewContentAnimationEnded');
                }
                if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                  $uiViewScroll(clone);
                }
              });
              cleanupLastView();
            });
            currentEl = clone;
            currentScope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          }
        };
      }
    };
    return directive;
  }
  $ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
  function $ViewDirectiveFill($compile, $controller, $state, $interpolate) {
    return {
      restrict: 'ECA',
      priority: -400,
      compile: function(tElement) {
        var initial = tElement.html();
        return function(scope, $element, attrs) {
          var current = $state.$current,
              name = getUiViewName(scope, attrs, $element, $interpolate),
              locals = current && current.locals[name];
          if (!locals) {
            return;
          }
          $element.data('$uiView', {
            name: name,
            state: locals.$$state
          });
          $element.html(locals.$template ? locals.$template : initial);
          var link = $compile($element.contents());
          if (locals.$$controller) {
            locals.$scope = scope;
            var controller = $controller(locals.$$controller, locals);
            if (locals.$$controllerAs) {
              scope[locals.$$controllerAs] = controller;
            }
            $element.data('$ngControllerController', controller);
            $element.children().data('$ngControllerController', controller);
          }
          link(scope);
        };
      }
    };
  }
  function getUiViewName(scope, attrs, element, $interpolate) {
    var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
    var inherited = element.inheritedData('$uiView');
    return name.indexOf('@') >= 0 ? name : (name + '@' + (inherited ? inherited.state.name : ''));
  }
  angular.module('ui.router.state').directive('uiView', $ViewDirective);
  angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);
  function parseStateRef(ref, current) {
    var preparsed = ref.match(/^\s*({[^}]*})\s*$/),
        parsed;
    if (preparsed)
      ref = current + '(' + preparsed[1] + ')';
    parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
    if (!parsed || parsed.length !== 4)
      throw new Error("Invalid state ref '" + ref + "'");
    return {
      state: parsed[1],
      paramExpr: parsed[3] || null
    };
  }
  function stateContext(el) {
    var stateData = el.parent().inheritedData('$uiView');
    if (stateData && stateData.state && stateData.state.name) {
      return stateData.state;
    }
  }
  $StateRefDirective.$inject = ['$state', '$timeout'];
  function $StateRefDirective($state, $timeout) {
    var allowedOptions = ['location', 'inherit', 'reload'];
    return {
      restrict: 'A',
      require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
      link: function(scope, element, attrs, uiSrefActive) {
        var ref = parseStateRef(attrs.uiSref, $state.current.name);
        var params = null,
            url = null,
            base = stateContext(element) || $state.$current;
        var newHref = null,
            isAnchor = element.prop("tagName") === "A";
        var isForm = element[0].nodeName === "FORM";
        var attr = isForm ? "action" : "href",
            nav = true;
        var options = {
          relative: base,
          inherit: true
        };
        var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
        angular.forEach(allowedOptions, function(option) {
          if (option in optionsOverride) {
            options[option] = optionsOverride[option];
          }
        });
        var update = function(newVal) {
          if (newVal)
            params = angular.copy(newVal);
          if (!nav)
            return;
          newHref = $state.href(ref.state, params, options);
          var activeDirective = uiSrefActive[1] || uiSrefActive[0];
          if (activeDirective) {
            activeDirective.$$setStateInfo(ref.state, params);
          }
          if (newHref === null) {
            nav = false;
            return false;
          }
          attrs.$set(attr, newHref);
        };
        if (ref.paramExpr) {
          scope.$watch(ref.paramExpr, function(newVal, oldVal) {
            if (newVal !== params)
              update(newVal);
          }, true);
          params = angular.copy(scope.$eval(ref.paramExpr));
        }
        update();
        if (isForm)
          return;
        element.bind("click", function(e) {
          var button = e.which || e.button;
          if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target'))) {
            var transition = $timeout(function() {
              $state.go(ref.state, params, options);
            });
            e.preventDefault();
            var ignorePreventDefaultCount = isAnchor && !newHref ? 1 : 0;
            e.preventDefault = function() {
              if (ignorePreventDefaultCount-- <= 0)
                $timeout.cancel(transition);
            };
          }
        });
      }
    };
  }
  $StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
  function $StateRefActiveDirective($state, $stateParams, $interpolate) {
    return {
      restrict: "A",
      controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
        var state,
            params,
            activeClass;
        activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);
        this.$$setStateInfo = function(newState, newParams) {
          state = $state.get(newState, stateContext($element));
          params = newParams;
          update();
        };
        $scope.$on('$stateChangeSuccess', update);
        function update() {
          if (isMatch()) {
            $element.addClass(activeClass);
          } else {
            $element.removeClass(activeClass);
          }
        }
        function isMatch() {
          if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
            return state && $state.is(state.name, params);
          } else {
            return state && $state.includes(state.name, params);
          }
        }
      }]
    };
  }
  angular.module('ui.router.state').directive('uiSref', $StateRefDirective).directive('uiSrefActive', $StateRefActiveDirective).directive('uiSrefActiveEq', $StateRefActiveDirective);
  $IsStateFilter.$inject = ['$state'];
  function $IsStateFilter($state) {
    var isFilter = function(state) {
      return $state.is(state);
    };
    isFilter.$stateful = true;
    return isFilter;
  }
  $IncludedByStateFilter.$inject = ['$state'];
  function $IncludedByStateFilter($state) {
    var includesFilter = function(state) {
      return $state.includes(state);
    };
    includesFilter.$stateful = true;
    return includesFilter;
  }
  angular.module('ui.router.state').filter('isState', $IsStateFilter).filter('includedByState', $IncludedByStateFilter);
})(window, window.angular);


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/bower_components/angular-ui-router/release/angular-ui-router.js
},{}],63:[function(require,module,exports){
(function (global){
"use strict";
"use strict";
var angular = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null);
module.exports = angular.module("remarkable", []).constant("Remarkable", require("remarkable")).provider("md", require("./remarkable-provider")).filter("md", ["md", function(md) {
  return md.render;
}]).directive("md", require("./remarkable-directive")).name;


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/remarkable/index.js
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./remarkable-directive":64,"./remarkable-provider":65,"remarkable":1}],64:[function(require,module,exports){
"use strict";
module.exports = function(md) {
  return {
    restrict: "A",
    scope: {md: "="},
    link: function($scope, $el) {
      var render = function(val) {
        $el.html(md.render(val));
      };
      render($scope.md);
      var mdWatch = $scope.$watch("md", render);
      $scope.$on("destroy", mdWatch());
    }
  };
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/remarkable/remarkable-directive.js
},{}],65:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function remarkableProvider() {
  var preset,
      options;
  preset = "full";
  options = {
    html: true,
    quotes: "„“",
    breaks: true
  };
  this.preset = function(value) {
    preset = value;
  };
  this.options = function(value) {
    options = value;
  };
  this.$get = ["Remarkable", function(Remarkable) {
    return new Remarkable(preset, options);
  }];
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/remarkable/remarkable-provider.js
},{}],66:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function(Restangular, $window) {
  Restangular.addFullRequestInterceptor(function(el, op, what, url, headers) {
    if (headers.Authorization) {
      return;
    }
    var token = $window.localStorage.getItem("authToken");
    if (!token) {
      return;
    }
    headers.Authorization = "Bearer " + token;
    return {headers: headers};
  });
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/rest/auth-interceptor.js
},{}],67:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function($window, $q, Users) {
  var self = this;
  var _identity = undefined;
  var _authenticated = false;
  this.authenticated = function() {
    return _authenticated;
  };
  this.authenticate = function(identity, token) {
    if (identity) {
      _identity = identity;
      _authenticated = true;
    }
    if (token) {
      $window.localStorage.setItem("authToken", token.token);
      $window.localStorage.setItem("id", token._id);
    }
  };
  this.inauthenticate = function() {
    _identity = undefined;
    _authenticated = false;
    $window.localStorage.removeItem("authToken");
    $window.localStorage.removeItem("id");
  };
  this.identity = function() {
    return $q(function(resolve, reject) {
      if (_authenticated) {
        return reject(_identity);
      }
      var token = $window.localStorage.getItem("authToken");
      var id = $window.localStorage.getItem("id");
      if (!token || !id) {
        return reject(_identity);
      }
      return Users.one(id).get().then(function(data) {
        return self.authenticate(data);
      }, function() {
        return self.inauthenticate();
      }).finally(function() {
        return resolve(_identity);
      });
    });
  };
  return this;
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/rest/auth-service.js
},{}],68:[function(require,module,exports){
(function (global){
"use strict";
var angular = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null);
module.exports = angular.module("rest", ["restangular"]).config(["RestangularProvider", function(RestangularProvider) {
  RestangularProvider.setBaseUrl("/api");
  RestangularProvider.setRestangularFields({id: "_id"});
  RestangularProvider.setDefaultHttpFields({cache: true});
}]).run(require("./auth-interceptor")).factory("Users", ["Restangular", function(Restangular) {
  return Restangular.service("users");
}]).factory("Tokens", ["Restangular", function(Restangular) {
  return Restangular.service("tokens");
}]).factory("Units", ["Restangular", function(Restangular) {
  return Restangular.service("units");
}]).factory("authService", require("./auth-service")).factory("unitService", require("./unit-service")).directive("userAvailable", require("./user-available-validator")).directive("userExists", require("./user-exists-validator")).name;


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/rest/index.js
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./auth-interceptor":66,"./auth-service":67,"./unit-service":69,"./user-available-validator":70,"./user-exists-validator":71}],69:[function(require,module,exports){
"use strict";
module.exports = function(Units) {
  this.setRequires = function() {
    this.status.requires = _.map(this.units, function(unit) {
      return _.pick(unit, "_id", "title");
    });
  };
  this.updateRequires = function() {
    this.status.requires = _.chain(this.units).reject({title: this.unit.title}).map(function(unit) {
      var temp = _.pick(unit, "_id", "title");
      temp.checked = _.contains(this.unit.requires, unit._id);
      return temp;
    }, this).value();
  };
  this.saveRequires = function() {
    this.unit.requires = _.chain(this.status.requires).filter("checked").map("_id").value();
  };
  return this;
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/rest/unit-service.js
},{}],70:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function($q, Restangular) {
  return {
    require: "ngModel",
    restrict: "A",
    link: function(scope, el, attrs, c) {
      c.$asyncValidators.userAvailable = function(value) {
        var query = {};
        query[attrs.name] = value;
        return Restangular.all("users").head(query).then(function() {
          return $q.reject("exists");
        }, function() {
          return true;
        });
      };
    }
  };
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/rest/user-available-validator.js
},{}],71:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function($q, Restangular) {
  return {
    require: "ngModel",
    restrict: "A",
    link: function(scope, el, attrs, c) {
      c.$asyncValidators.userExists = function(value) {
        var query = {};
        query[attrs.name] = value;
        return Restangular.all("users").head(query).then(function() {
          return true;
        }, function() {
          return $q.reject("not exists");
        });
      };
    }
  };
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/rest/user-exists-validator.js
},{}],72:[function(require,module,exports){
(function (global){
"use strict";
module.exports = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null).module("ui", ["ui.router"]).filter("unitStatus", require("./unit-status-filter.js")).filter("title", require("./title-filter.js")).filter("titleCase", require("./title-case-filter")).name;


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/ui/index.js
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./title-case-filter":73,"./title-filter.js":74,"./unit-status-filter.js":75}],73:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function() {
  return function(title) {
    if (!title) {
      return;
    }
    var splitInput,
        out,
        temp;
    splitInput = title.split(" ");
    out = "";
    temp = "";
    _.forEach(splitInput, function(word) {
      temp = word.charAt(0).toUpperCase() + word.slice(1);
      out = out + temp;
    });
    return out;
  };
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/ui/title-case-filter.js
},{}],74:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function() {
  return function(unit) {
    if (!unit) {
      return;
    }
    if (!unit.title) {
      return;
    }
    if (unit.subtitle) {
      return unit.title + ": " + unit.subtitle;
    }
    return unit.title;
  };
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/ui/title-filter.js
},{}],75:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function() {
  return function(id, user, units) {
    var unit,
        deps;
    if (!id) {
      return;
    }
    if (!user) {
      user = {};
    }
    if (user.done && _.contains(user.done, id)) {
      return "done";
    }
    if (!units) {
      return "ready";
    }
    unit = _.find(units, {_id: id});
    if (!unit) {
      return;
    }
    if (!unit.requires || unit.requires.length === 0) {
      return "ready";
    }
    if (!user.done || user.done.length === 0) {
      return "unready";
    }
    deps = _.difference(unit.requires, user.done);
    if (deps.length === 0) {
      return "ready";
    }
    return "unready";
  };
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/components/ui/unit-status-filter.js
},{}],76:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function(units) {
  this.units = units;
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/content/content-controller.js
},{}],77:[function(require,module,exports){
"use strict";
module.exports = function() {};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/content/unit/description/description-controller.js
},{}],78:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function($scope, $stateParams) {
  this.topic = _.find($scope.unit.unit.topics, {_id: $stateParams.topic});
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/content/unit/topic/topic-controller.js
},{}],79:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function(unit) {
  this.unit = unit;
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/content/unit/unit-controller.js
},{}],80:[function(require,module,exports){
"use strict";
module.exports = function() {
  this.format = "rtf";
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/download/download-controller.js
},{}],81:[function(require,module,exports){
(function (global){
"use strict";
"use strict";
var angular = (typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null);
module.exports = angular.module("wbt", [require("angular-ui-router"), require("angular-bootstrap"), require("./components/remarkable"), "ngMessages", "ngSanitize", "ngAria", require("./components/rest"), require("./components/ui")]).config(require("./wbt-config")).controller("contentCtrl", require("./content/content-controller")).controller("unitCtrl", require("./content/unit/unit-controller")).controller("descriptionCtrl", require("./content/unit/description/description-controller")).controller("topicCtrl", require("./content/unit/topic/topic-controller")).controller("downloadCtrl", require("./download/download-controller")).controller("userCtrl", require("./user/user-controller")).controller("loginCtrl", require("./login/login-controller")).controller("registerCtrl", require("./register/register-controller")).run(["$rootScope", "$state", "$stateParams", "authService", function($rootScope, $state, $stateParams, authService) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.authService = authService;
  var handleStateError = function(event, toState, toParams, fromState, fromParams, error) {
    console.log(error);
  };
  $rootScope.$on('$stateChangeError', handleStateError);
  authService.identity().then(function(data) {
    $rootScope.identity = data;
  });
}]).name;


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/index.js
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/remarkable":63,"./components/rest":68,"./components/ui":72,"./content/content-controller":76,"./content/unit/description/description-controller":77,"./content/unit/topic/topic-controller":78,"./content/unit/unit-controller":79,"./download/download-controller":80,"./login/login-controller":82,"./register/register-controller":83,"./user/user-controller":84,"./wbt-config":85,"angular-bootstrap":61,"angular-ui-router":62}],82:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function($window, authService, Tokens) {
  var self = this;
  this.loginData = {};
  this.login = function() {
    var email = self.loginData.email;
    var password = self.loginData.password;
    if (!email || !password) {
      return;
    }
    var str = email + ":" + password;
    Tokens.one(email).get({}, {Authorization: str}).then(function(data) {
      authService.authenticate(null, data);
      return authService.identity();
    }, function() {
      return authService.inauthenticate();
    });
  };
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/login/login-controller.js
},{}],83:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function(Users, Tokens, authService) {
  var self = this;
  this.registerData = {};
  this.register = function() {
    return Users.post(self.registerData).then(function(data) {
      authService.authenticate(data);
      var email = self.registerData.email;
      var password = self.registerData.password;
      var str = email + ":" + password;
      return Tokens.one(email).get({}, {Authorization: str});
    }, function() {
      return authService.inauthenticate();
    }).then(function(data) {
      authService.authenticate(null, data);
      console.log(data);
    });
  };
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/register/register-controller.js
},{}],84:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function() {};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/user/user-controller.js
},{}],85:[function(require,module,exports){
"use strict";
"use strict";
module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider.state("home", {
    url: "/home",
    templateUrl: "home/home.html",
    data: {access: "public"}
  }).state("content", {
    url: "/content",
    templateUrl: "content/content.html",
    resolve: {units: ["Units", function(Units) {
        return Units.getList();
      }]},
    controller: "contentCtrl as content",
    data: {access: "public"}
  }).state("content.unit", {
    url: "/:unit",
    templateUrl: "content/unit/unit.html",
    resolve: {unit: ["Units", "$stateParams", function(Units, $stateParams) {
        return Units.one($stateParams.unit).get();
      }]},
    controller: "unitCtrl as unit",
    abstract: true,
    data: {access: "user"}
  }).state("content.unit.description", {
    url: "/description",
    templateUrl: "content/unit/description/description.html",
    controller: "descriptionCtrl"
  }).state("content.unit.topic", {
    url: "/:topic",
    templateUrl: "content/unit/topic/topic.html",
    controller: "topicCtrl as topic"
  }).state("software", {
    url: "/software",
    templateUrl: "software/software.html",
    data: {menuText: "Statistiksoftware"}
  }).state("download", {
    url: "/download",
    templateUrl: "download/download.html",
    controller: "downloadCtrl as download",
    data: {roles: ["user"]}
  }).state("contact", {
    url: "/contact",
    templateUrl: "contact/contact.html",
    data: {access: "public"}
  }).state("login", {
    url: "/login",
    templateUrl: "login/login.html",
    controller: "loginCtrl as login",
    data: {access: "public"}
  }).state("register", {
    url: "/register",
    templateUrl: "register/register.html",
    controller: "registerCtrl as register",
    data: {access: "public"}
  }).state("user", {
    url: "/user/:id",
    templateUrl: "user/user.html",
    controller: "userCtrl as user",
    data: {access: "user"}
  });
  $urlRouterProvider.otherwise("/home");
};


//# sourceURL=/Users/Shared/Dropbox/Entwicklung/statistikwbt/src/wbt-config.js
},{}]},{},[81]);
