function palindrome(str) {
  // Good luck!
  var len = str.length;
  var halfLen = str.length/2;
  var cntr = str.length-1; 
  var letNum = /^[A-Za-z0-9]+$/;
  var newarr ="";

  for(var i = 0; i < len; i++)
  {
    var charat = str.charAt(i); 
   
    var tester = letNum.test(charat);

    if(tester==true){
      newarr +=charat;
    }
  }

  newarr = newarr.toLowerCase();
  cntr = newarr.length -1;
  
  for(var i = 0; i < halfLen+1; i++)
  {
    if(i==cntr)
    {
      break; //escape and don't do anything
    } 
  
    if(newarr.charAt(i)!==newarr.charAt(cntr))
    {
      return false; //if different return with false immediately 
    }
    cntr--; 
  }
  return true;
}


palindrome("1 eye for of 1 eye.");
//palindrome("eye");
