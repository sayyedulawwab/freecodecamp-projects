function convertToRoman(num) {
   let decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ],
      romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ],
      romanized = '',
      dec, div;

  for (let i = 0; i < decimalValue.length; i++) {
    dec = decimalValue[i];
    div = Math.floor(num / dec);
    
    if(div > 0) {
      romanized += romanNumeral[i].repeat(div);
      num = num % dec;
    }
  }
  
  return romanized;
}

console.log(convertToRoman(36));
