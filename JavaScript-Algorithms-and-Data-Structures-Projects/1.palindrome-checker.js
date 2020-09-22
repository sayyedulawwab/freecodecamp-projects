function palindrome(str) {
  let string = str.replace(/[\W_]/g, "").toLowerCase();
  let reversedString = str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("");
  console.log(string)
  console.log(reversedString)
  if(string===reversedString){ 
    return true
    }else {
      return false;
    };
}



console.log(palindrome("eye"));
