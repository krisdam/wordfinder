function letterFinder (word, match){
    var w_length = word.length
    for (var k = 0; k< w_length; k++){
        if (word[k] == match){
            console.log('Found the', match, 'at', k)
        }
        else {
            console.log ("---No match found at", k)
        }
    } 
}
letterFinder('finder', 'f')
