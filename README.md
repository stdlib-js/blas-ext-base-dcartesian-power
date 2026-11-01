<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# dcartesianPower

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the Cartesian power for a double-precision floating-point strided array.



<section class="usage">

## Usage

To use in Observable,

```javascript
dcartesianPower = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dcartesian-power@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dcartesianPower = require( 'path/to/vendor/umd/blas-ext-base-dcartesian-power/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dcartesian-power@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dcartesianPower;
})();
</script>
```

#### dcartesianPower( order, N, k, x, strideX, out, LDO )

Computes the Cartesian power for a double-precision floating-point strided array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0 ] );
var out = new Float64Array( 8 );

dcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 );
// out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **order**: storage layout. Must be either `'row-major'` or `'column-major'`.
-   **N**: number of indexed elements.
-   **k**: power.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **out**: output [`Float64Array`][@stdlib/array/float64].
-   **LDO**: stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`).

The `N`, `k`, and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the Cartesian power of every other element:

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 0.0, 2.0, 0.0 ] );
var out = new Float64Array( 8 );

dcartesianPower( 'row-major', 2, 2, x, 2, out, 2 );
// out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial array:
var x0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

// Create an offset view:
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Output array:
var out = new Float64Array( 8 );

dcartesianPower( 'row-major', 2, 2, x1, 1, out, 2 );
// out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
```

<!-- lint disable maximum-heading-length -->

#### dcartesianPower.ndarray( N, k, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut )

<!-- lint enable maximum-heading-length -->

Computes the Cartesian power for a double-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0 ] );
var out = new Float64Array( 8 );

dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0 );
// out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: power.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **offsetX**: starting index for `x`.
-   **out**: output [`Float64Array`][@stdlib/array/float64].
-   **strideOut1**: stride length for the first dimension of `out`.
-   **strideOut2**: stride length for the second dimension of `out`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to access only the last two elements:

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 0.0, 0.0, 1.0, 2.0 ] );
var out = new Float64Array( 8 );

dcartesianPower.ndarray( 2, 2, x, 1, 2, out, 2, 1, 0 );
// out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `k`-tuples are stored as rows in the output matrix, where the `j`-th column contains the `j`-th element of each tuple.
-   For an input array of length `N`, the output array must contain at least `N^k * k` indexed elements.
-   For row-major order, the `LDO` parameter must be greater than or equal to `max(1,k)`. For column-major order, the `LDO` parameter must be greater than or equal to `max(1,N^k)`.
-   If `N <= 0` or `k <= 0`, both functions return `out` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dcartesian-power@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var N = 2;
var k = 3;
var x = discreteUniform( N, 1, 10, {
    'dtype': 'float64'
});
console.log( x );

var out = new Float64Array( pow( N, k ) * k );
dcartesianPower( 'row-major', N, k, x, 1, out, k );
console.log( out );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dcartesian-power.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dcartesian-power

[test-image]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dcartesian-power/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dcartesian-power?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dcartesian-power.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dcartesian-power/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dcartesian-power/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dcartesian-power/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
