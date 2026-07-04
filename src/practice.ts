function getInputVowelCount(input: string): string {

    if (input == null || input.length === 0) {
        return "Not a Valid Input";

    } else {
        input = input.trim().toLowerCase();
        //let i = 0;
        let con = 0;
        let vow = 0
        for (let s of input) {
            if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u') {
                vow += 1;
            }

        }
        return `vowels=${vow},consonants=${input.length - vow}`
    }



}

console.log(getInputVowelCount("automation"));
//console.log(getInputVowelCount(""));

console.log(getInputVowelCount("automation") === 'vowels=6,consonants=4' ? 'Pass': 'Fail');
//console.log(status);