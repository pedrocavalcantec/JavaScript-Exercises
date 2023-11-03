
function JD(XString) {
    const word  = XString.split(' ');
    const word2 = word.map((word) => {
        const firstLetter = word.substring(0, 1).toUpperCase();
        const restofWord = word.substring(1);
        return firstLetter + restofWord;
    });
    return word2.join(' ');
}


 var CSV = "jose daniel, 24, true, 25.99 , 02/04/1999"
  var CSVJD = JD(CSV);
  
  console.log(CSVJD); 
  