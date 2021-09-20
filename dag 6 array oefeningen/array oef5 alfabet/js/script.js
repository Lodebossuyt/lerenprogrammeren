var eersteArray = [];
var tweedeArray = [];

for(var i = 97;i<123;i++){
    var alphabet = String.fromCharCode(i);
    eersteArray.push(alphabet);

}
for(var i = 0; i<=26;i++) {
    var ascii = eersteArray[i].charCodeAt(0);
    var asciiPush = parseInt(ascii - 32);
    var alphabet = String.fromCharCode(asciiPush);
    tweedeArray.push(alphabet);
    console.log(tweedeArray[i]);
}
