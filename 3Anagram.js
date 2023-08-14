// Anagram
// sachin => cshain

//condition
//lenght check (for both Strings)
//String hello
//{h:0,e:0,l:0,e:0}

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let count = {};
  for (let letter of str1) {
    count[letter] = (count[letter] || 0) + 1;
  }
  console.log("count", count);
}

const result = isAnagram("hello", "llheo");
console.log("result", result);
