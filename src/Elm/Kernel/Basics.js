

// ARITHMETIC

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_rem = F2(function(a, b) { return a % b; });
var _Basics_div = F2(function(a, b) { return (a / b) | 0; });
var _Basics_floatDiv = F2(function(a, b) { return a / b; });

var _Basics_mod = F2(function(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MATH STUFF

var _Basics_sqrt = Math.sqrt;

var _Basics_logBase = F2(function(base, n)
{
	return Math.log(n) / Math.log(base);
});

function _Basics_negate(n)
{
	return -n;
}

function _Basics_abs(n)
{
	return n < 0 ? -n : n;
}

function _Basics_toFloat(x)
{
	return x;
};

var _Basics_isNaN = isNaN;

function _Basics_isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;

function _Basics_truncate(n)
{
	return n | 0;
}


// BOOLEANS

var _Basics_xor = F2(function(a, b)
{
	return a !== b;
});

function _Basics_not(b)
{
	return !b;
}


// ANGLES

function _Basics_degrees(d)
{
	return d * Math.PI / 180;
}

function _Basics_turns(t)
{
	return 2 * Math.PI * t;
}