// Anagram
// sachin => cshain

//condition
//lenght check (for both Strings)
//String hello
//{h:0,e:0,l:0,e:0}
//complexity : linear (On)

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let count = {};
  for (let letter of str1) {
    count[letter] = (count[letter] || 0) + 1;
  }

  for (let item of str2) {
    if (!count[item]) {
      return false;
    }
    count[item] -= 1;
  }
  return true;
}

const result = isAnagram("hello", "lldeo");
console.log("result", result);
