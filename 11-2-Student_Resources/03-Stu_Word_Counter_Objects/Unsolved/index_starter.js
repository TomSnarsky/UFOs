// Initialize the function
function countword(s1) {

  // Convert string to an array of words
  
  let strarray = s1.split();

  // An object to hold word frequency

  let strarrayfreq = []

  // Iterate through the array and count the occurrence of each word

  strarray.forEach(element => {
    if(strarray.includes(element)===false) {
      strarray.push([element, 1])
    }else if(strarray.includes(element)===true) {
      let tempindex = strarray.findIndex(element);
      strarrayfreq[tempindex][1]++;
    }

  });
return srtarrayfreq;
}
//  Call the function with the string as a parameter.

countword("yo ho yo ho burn the man down")