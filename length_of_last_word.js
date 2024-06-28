var s="hello world";
var lengthOfLastWord = function(s) {
    debugger;
    s=s.trim();//remove space 
   let words=s.split(" ");
   let lastword = words[words.length-1];
   return lastword.length;
};
console.log(lengthOfLastWord(s))