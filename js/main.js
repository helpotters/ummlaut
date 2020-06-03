 //main organizing javascript
 //table of contents:
 //1. data entry
  //1.1 Data Organization and Looping
  //1.2 Event Listeners
 //2. appending to page
 //2.1 Appending Loop
  //2.2 Event Listeners
///////////////////////////////////////////////////////////////////
//1.data entry
  //1.1 data organization and looping
  function extractAndSend(){
    const textarea = document.getElementById('textarea').value;
    console.log(textarea);
    let validText= textarea.toString();
    let hexArrayValues = wordToCodes(validText);
    console.log('extracted text...');
    let nonDupHexArr = Array.from(new Set(hexArrayValues));
    appendToOutput(nonDupHexArr);
  }
  //1.2 event listeners
  const confirm = document.getElementsByTagName('button')[0];
  const strip = document.getElementsByTagName('button')[1];
  //listening...
  confirm.addEventListener('click',extractAndSend);
//2. appending to page
  //2.1 appending loop
  function appendToOutput(hexArray){
    for (let i = 0; i < hexArray.length; i++) {
      console.log(hexArray[i]);
      if (hexArray[i] == "002C") {
        console.log("Deleted: " + hexArray.splice(i,1));
        i--;
        continue;
      }
      else if (hexArray[i] !== "002C"){
        console.log('i have started an append loop');
        let unicodeValue = hexArray[i];
        console.log("Unicode Value is: " + unicodeValue);
        let altCodeValue = hexToDecimal(unicodeValue);
        console.log("ALT CODE VALUE: " + altCodeValue);
        let characterValue = String.fromCharCode(altCodeValue);
        let newCharLi = document.createElement('li');
        newCharLi.setAttribute('class','list-group-item');
        let newAltLi = document.createElement('li');
        newAltLi.setAttribute('class','list-group-item');
        let newUniLi = document.createElement('li');
        newUniLi.setAttribute('class','list-group-item');
        console.log("Codes are: " + characterValue + " " + altCodeValue + " " + unicodeValue + ".");
        newCharLi.innerHTML = characterValue;
        newAltLi.innerHTML = altCodeValue;
        newUniLi.innerHTML = unicodeValue;
        characters.appendChild(newCharLi);
        altCodes.appendChild(newAltLi);
        unicodes.appendChild(newUniLi);
      }
    }
  }
  //2.2 event listeners
  const output = document.querySelector('#output');
  const characters = document.getElementsByClassName('list-group')[1];
  const altCodes = document.getElementsByClassName('list-group')[2];
  const unicodes = document.getElementsByClassName('list-group')[3];
