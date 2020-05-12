class convert {
    constructor(API, run) {

        this.binary = binary;
        this.hexadecimal = hexadecimal;
        this.decimal = decimal;

    }
    static decimalToBinary(x) {
            const binary = x.toString(2);
            return binary;

    }
    static decimalToHexadecimal(x) {
            const hexadecimal = x.toString(16);
            return hexadecimal;

    }
    static binaryToHexadecimal(x) {
        if(isNaN(parseInt(x, 2))) {
            throw new TypeError("Your input isn't a binary code");
        }
        else {
            const hexadecimal = parseInt(x, 2).toString(16);
            return hexadecimal;

        }
    }
    static hexadecimalToBinary(x) {
            const binary = parseInt(x, 16).toString(2);
            return binary;

    }
    static hexadecimalToDecimal(x) {
        if(isNaN(parseInt(x, 16))) {
            throw new TypeError("Your input isn't a hexadecimal code");

        }
        else {
            const decimal = parseInt(x, 16);
            return decimal;

        }
    }
    static binaryToDecimal(x) {
        if(isNaN(parseInt(x, 2))) {
            throw new TypeError("Your input isn't a binary code");
        }
        else {
            const decimal = parseInt(x, 2);
            return decimal;

        }
    }
}

module.exports = convert;