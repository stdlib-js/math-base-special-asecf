<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# asecf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [inverse (arc) secant][arcsecant] of a single-precision floating-point number.



<section class="usage">

## Usage

```javascript
import asecf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asecf@deno/mod.js';
```

#### asecf( x )

Computes the [inverse (arc) secant][arcsecant] of a single-precision floating-point number.

```javascript
var v = asecf( 1.0 );
// returns 0.0

v = asecf( 2.0 );
// returns ~1.0472

v = asecf( NaN );
// returns NaN
```

The domain of `x` is restricted to the intervals `[-inf, -1]` and `[1, inf]`. For `x` outside of these intervals, the function returns `NaN`.

```javascript
var v = asecf( -0.5 );
// returns NaN

v = asecf( 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@deno/mod.js';
import asecf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asecf@deno/mod.js';

var x = linspace( 1.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( asecf( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/asec`][@stdlib/math/base/special/asec]</span><span class="delimiter">: </span><span class="description">compute the inverse (arc) secant of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/asech`][@stdlib/math/base/special/asech]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsecant of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/acosf`][@stdlib/math/base/special/acosf]</span><span class="delimiter">: </span><span class="description">compute the arccosine of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-asecf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-asecf

[test-image]: https://github.com/stdlib-js/math-base-special-asecf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-asecf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-asecf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-asecf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-asecf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-asecf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-asecf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-asecf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-asecf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-asecf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-asecf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-asecf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-asecf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-asecf/main/LICENSE

[arcsecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/asec]: https://github.com/stdlib-js/math-base-special-asec/tree/deno

[@stdlib/math/base/special/asech]: https://github.com/stdlib-js/math-base-special-asech/tree/deno

[@stdlib/math/base/special/acosf]: https://github.com/stdlib-js/math-base-special-acosf/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
