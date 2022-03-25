const names = document.getElementById('sentence');
const pass = document.getElementById('letter');
const form = document.getElementById('form')

const output = document.getElementById('Output')

function getSentence() {
    return document.getElementById('sentence').value;
}
function getChar() {
    return document.getElementById('letter').value;
}


form.addEventListener('submit', (e) => {

    let outputValue = [];
    let outputString = [];

    if (names.value === '') {
        outputValue.push("Sentence cannot be empty ")
    }
    if (pass.value.length < 1) {
        outputValue.push("letter cannot be empty ")
    }
    if (pass.value.length > 1) {
        outputValue.push("letter must be 1 Char")
    }

    if (outputValue.length > 0) {
        e.preventDefault();
        output.innerText = outputValue.join(', ')

    }
    else {
        
        let sentence = getSentence();
        let char = getChar();

        let idx = sentence.indexOf(char);

        if (idx==-1) {
            e.preventDefault();
            output.innerText = ("The letter does not exists in the sentence")
        }
        else {
            let s = sentence.slice(idx + 1);
            outputString.push(s);
            e.preventDefault();
            output.innerText = outputString;
        }
    }

})