const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const a = { '10': '.', '11': '-'};
    const space = "**********";
    
    var arr = expr.match(/.{1,10}/g);
    var str, b = '';
    var ans = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == space) { ans[i] = ' '; }
        else {
            str = String(arr[i]).match(/.{1,2}/g);
            b = '';
            for (var j = 0; j < 5; j++) {
            if (str[j] !== '00') {
                b += a[str[j]];
            } 
            ans[i] = MORSE_TABLE[b];
            }
        }
    }
    
    return (ans.join(''));
}

module.exports = {
    decode
}