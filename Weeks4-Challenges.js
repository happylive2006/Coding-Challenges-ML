function LongestWord(sen) { 
  sen=sen.replace(/[^0-9a-zA-Z\s]/g, "")
  words = sen.split(" ");
  LongestWord = "";
  for (i = 0; i<words.length; i ++) {
  	if (words[i].length > LongestWord.length) {
  	  LongestWord = words[i]	
  	}
  }
 return LongestWord
}


   
// keep this function call here 
console.log(LongestWord("Welcome to the coding world."));