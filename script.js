const dictionary = [];
function addWord(newWord) {
    dictionary[dictionary.length] = newWord;
}
function searchWord() {
    let searchedWord = document.getElementById("src").value;
    if (dictionary.includes(searchedWord)) {
        document.getElementById("output").innerHTML = "The word exists in the dictionary.";
    } else {
        document.getElementById("output").innerHTML = "The word does not exist in the dictionary."
    }
}
