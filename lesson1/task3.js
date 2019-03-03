for (var i = 0; i < 9; i++) {
    var line = '';
    var firstSymbol = ' ';
    var secondSymbol = ' '
    if (i % 2 == 0) {
        firstSymbol = '#'
    } else {
        secondSymbol = '#'
    }
    for (var a = 0; a < 4; a++) {
        line += firstSymbol;
        line += secondSymbol;
    }
    console.log(line);
}