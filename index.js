
function noSpace(x) {
    var str = x.replace(/\s+/g, '');
    return str;
}

/* x.replace(/\s+/g,'');    /\contains the word inside that your want to replace, in our case it contains nothing, 'g' is for global, so replace everything that contains '', aka an empty space
string.replace(searchvalue, newvalue)
*/

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

    //Good description;
    //https://www.w3schools.com/jsref/jsref_replace.asp

    //From the Kata;
    //https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
