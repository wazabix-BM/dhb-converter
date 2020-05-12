# dhb-converter

> This package will be used to convert a bases numbers 10, 2, or 16 to binary for (10 and 16) and hexadecimal (for 2 and 10)

## Contact me

If you have any questions do not hesitate to join me on my [`discord server`](https://discord.gg/ES52WDg)

## API

* <a href = "#deciToBin"><code>convert<b>.decimalToBinary()</b></code></a>
* <a href = "#deciToHexa"><code>convert<b>.decimalToHexadecimal()</b></code></a>
* <a href = "#binToHexa"><code>convert<b>.binaryToHexadecimal()</b></code></a>
* <a href = "#binToDeci"><code>convert<b>.binaryToDecimal()</b></code></a>
* <a href = "#hexaToBin"><code>convert<b>.hexadecimalToBin()</b></code></a>
* <a href = "#hexaToDeci"><code>convert<b>.hexadecimalToDecimal()</b></code></a>

<a name = "hexaToDeci"></a>

## Convert the hexadecimal code to decimal

```js
const { convert } = require('dhb-converter');
const x = 50;
const value = convert.hexadecimalToDecimal(x);

/*
* Now let's use our funtion
*/

console.log(value); /* () => For this exemple "x = 50", so the answer is 80 */
```

---------------------------------------------------------------------------------

<a name = "deciToHexa"></a>

## Convert the decimal to hexadecimal code

```js
const { convert } = require('dhb-converter');
const x = 50;
const value = convert.decimalToHexadecimal(x);

console.log(value); /* () => For this exemple "x = 50", so the answer is 32 */
```

---------------------------------------------------------------------------------

<a name = "deciToBin"></a>

## Convert the decimal to binary code

```js
const { convert } = require('dhb-converter');
const x = 50;
const value = convert.decimalToBinary(x);

console.log(value); /* () => For this exemple "x = 50", so the answer is 110010 */
```

---------------------------------------------------------------------------------

<a name = "binToHexa"></a>

## Convert the binary code to hexadecimal code

```js
const { convert } = require('dhb-converter');
const x = 110010;
const value = convert.binaryToHexadecimal(x);

console.log(value); /* () => For this exemple "x = 110010", so the answer is 32 */
```

---------------------------------------------------------------------------------

<a name = "binToDeci"></a>

## Convert the binary code to decimal

```js
const { convert } = require('dhb-converter');
const x = 110010;
const value = convert.binaryToDecimal(x);

console.log(value); /* () => For this exemple "x = 110010", so the answer is 50 */
```

---------------------------------------------------------------------------------

<a name = "binToHexa"></a>

## Convert the binary code to hexadecimal code

```js
const { convert } = require('dhb-converter');
const x = 110010;
const value = convert.binaryToHexadecimal(x);

console.log(value); /* () => For this exemple "x = 110010", so the answer is 32 */
```

---------------------------------------------------------------------------------

<a name = "hexaToBin"></a>

## Convert the hexadecimal code to binary code

```js
const { convert } = require('dhb-converter');
const x = 32;
const value = convert.hexadecimalToBinary(x);

console.log(value); /* () => For this exemple "x = 32", so the answer is 110010 */
```

## MIT License

Copyright (c) 2019 wazabix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE."# dhb-converter" 
