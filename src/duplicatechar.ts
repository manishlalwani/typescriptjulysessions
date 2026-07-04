function duplicateChar() {

    let charCount = new Map();
    let input = 'programming';

    for (let char of input) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }



    for (let [char, count] of charCount) {
        if (count > 1) {
            console.log(char);
        }
    }
}

duplicateChar();