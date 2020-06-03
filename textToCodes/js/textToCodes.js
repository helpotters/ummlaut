//This snippet takes the text and outputs the unicode for linux typing

function wordToArray(word){
  //turn word into an array to work with, removes all spaces
  let wordArray = word.trim().replace(/ /g, '').split('');
  return wordArray;
}
function wordArrayToNumArray(wordList){
  let numberArray = [];
  for (let i = 0; i < wordList.length; i++) {
    //the charCodeAt function only works on strings
    let testChar = wordList[i].toString();
    let newNum  = testChar.charCodeAt(0);
    //string times a primitive number returns a Number
    numberArray.push(newNum*1);
  }
  return numberArray;
}
function removeLatinChars(word){
  //remove all english latin characters from wordToArray
  console.log(word.length);
  let workingArray = word;
  for (let i = 0; i < word.length; i++) {
    let code = word[i].toString();
    console.log("Working on: " + code);
    let testCode = code.charCodeAt(0);
    console.log(testCode);
    if((testCode > 64 && testCode < 91) || //upper alpha
      (testCode > 96 && testCode < 123)//lower alpha
    ){
      console.log("To remove: " + testCode + " char: " + code);
      word.splice(i,1);
      i--;
    }
  }
  console.log(word);
  return word.toString();
}
function charDecimalToHexidecimal(input){
  //repair function to sort through the array
  let remainderArray = [];
  //this loop divides and stores the remainders for the conversion table
  for (let wholeNumber = input; Math.trunc(wholeNumber) !== 0; wholeNumber = wholeNumber/16) {
    let result = Math.trunc(wholeNumber)%16;
    remainderArray.push(result);
  }
  //looped sorter to map array to its hex counterpart
  for(let i = 0; i < remainderArray.length; i++){
    //numerical half of hex-code 0-9
      //it equals itself numerical, so skip this loop
    //alphabetical half of hex-code A-F
      //destructively edit the array with replace
    if (remainderArray[i] >= 10) {
      //the numbers 10-16 has a simple unicode that easily is converted
      //from 10-15 to the right latin character by using unicode
      //hack > manual table
      let alphaConversion = String.fromCharCode(remainderArray[i]+55);
      //alphanumerical replacement!
      remainderArray.splice(i,1, alphaConversion);
    }
  }
  //the significant encoding is completed, the empty space is filled
  //so it is UTF 16 hex compliant
  while (remainderArray.length< 4 ) {
    remainderArray.push(0);
  }
  let hexCode = remainderArray.reverse().join('');
  console.log("Final Array: " + hexCode);
  return hexCode;
}

function wordToCodes(input){
  //works with all of the options in order to output the appropriate choices
  let stepOne = wordToArray(input);
  let stepTwo = removeLatinChars(stepOne);
  let stepThree = wordArrayToNumArray(stepTwo);
  let hexArray = [];
  for (var i = 0; i < stepThree.length; i++) {
    let newHex = charDecimalToHexidecimal(stepThree[i]);
    hexArray.push(newHex);
  }
  return hexArray;
}
