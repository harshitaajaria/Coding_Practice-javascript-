let s="III";
function roman(s)
{
let roman = 0;
    const notations = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < notations.length; i++) {
        while (s.indexOf(notations[i]) === 0) {
            roman += values[i];
            s = s.replace(notations[i], '');
        }
    }
    return roman;
}
console.log(roman(s));