/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var EPS = require( '@stdlib/constants-float32-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var asecf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( asecf instanceof Error )
};


// FIXTURES //

var largerNegative = require( './fixtures/julia/larger_negative.json' );
var largerPositive = require( './fixtures/julia/larger_positive.json' );
var largeNegative = require( './fixtures/julia/large_negative.json' );
var largePositive = require( './fixtures/julia/large_positive.json' );
var mediumNegative = require( './fixtures/julia/medium_negative.json' );
var mediumPositive = require( './fixtures/julia/medium_positive.json' );
var hugeNegative = require( './fixtures/julia/huge_negative.json' );
var hugePositive = require( './fixtures/julia/huge_positive.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.true( typeof asecf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the inverse (arc) secant on the interval `[-3.0,-1.0]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = mediumNegative.x;
	expected = mediumNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asecf( x[i] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[i]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 2.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the inverse (arc) secant on the interval `[1.0,3.0]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = mediumPositive.x;
	expected = mediumPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asecf( x[i] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[i]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 68.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the inverse (arc) secant on the interval `[3.0,100.0]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = largePositive.x;
	expected = largePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asecf( x[i] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[i]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the inverse (arc) secant on the interval `[-100.0,-3.0]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = largeNegative.x;
	expected = largeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asecf( x[i] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[i]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the inverse (arc) secant on the interval `[100.0,1000.0]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = largerPositive.x;
	expected = largerPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asecf( x[i] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[i]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the inverse (arc) secant on the interval `[-1000.0,-100.0]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = largerNegative.x;
	expected = largerNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asecf( x[i] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[i]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the inverse (arc) secant on the interval `[-1e20,-1e28]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = hugeNegative.x;
	expected = hugeNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asecf( x[i] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[i]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the inverse (arc) secant on the interval `[1e30,1e38]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = hugePositive.x;
	expected = hugePositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asecf( x[i] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.strictEqual( y, e, 'x: '+x[i]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.0 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = asecf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `+0`', opts, function test( t ) {
	var v = asecf( 0.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `-0`', opts, function test( t ) {
	var v = asecf( -0.0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` on the interval `(-1, 1)`', opts, function test( t ) {
	var v = asecf( 0.5 );
	var w = asecf( -0.5 );

	t.strictEqual( isnanf( v ), true, 'returns expected value' );
	t.strictEqual( isnanf( w ), true, 'returns expected value' );
	t.end();
});
