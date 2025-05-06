console.log(0.1 + 0.2)
 // .1 10

// console.log(((0.7654 * 100) + (0.2 * 100))/100)

// 39.08737 -> 39.09
const val = 30000.98734 * 1000 // 3908.7

console.log(Math.round(val) / 1000)

const roundToDecimalPlace = (value, decimalDigit=2 ) => {
    const intValue = Math.round(value * 10**decimalDigit);
    return intValue / 10**decimalDigit
}

const f = roundToDecimalPlace(3.9876) // 
const d = roundToDecimalPlace(3.34) // 
