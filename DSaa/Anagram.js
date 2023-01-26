//String Anagram
//'hello' -> 'llheo'
//'raju' -> 'jaru'

//

//condition
//length check(for both Strings)
// String 'hello'
// {h:1,e:1,l:2,o:1}

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }

  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  } //for

  return true;
}

// function isAnagram(string1,string2)
const check = isAnagram("helllo", "llheo");
console.log(check);
