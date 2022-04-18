window.addEventListener("load", function () {


/**
 * array of word to be written
 * @type {string[]}
 */
const sentences = [
    "web developer",
    "bachelor student"
];


let part = 0;
let part_index = 0;
let interval_instance;
let elmt = document.querySelector('#change');

console.log(elmt);

if (elmt !== null){
    /**
     * delete the text if all written
     */
    function Delete() {
        var text = sentences[part].substring(0, part_index - 1);
        elmt.innerHTML = text;
        part_index--;
        // if text is empty
        if (text === '') {
            clearInterval(interval_instance);
            if (part === (sentences.length - 1))
                part = 0;
            else part++;
            part_index = 0;

            setTimeout(function () {
                interval_instance = setInterval(write, 100);
            }, 1500)
        }
    }

    /**
     * write text letter after letter
     */
    function write() {
        // to take it letter by letter
        let text = sentences[part].substring(0, part_index + 1);
        elmt.innerHTML = text;
        part_index++;

        // if the full text is written
        if (text === sentences[part]) {
            clearInterval(interval_instance);
            setTimeout(function () {
                interval_instance = setInterval(Delete, 100);
            }, 1500)
        }
    }

    interval_instance = setInterval(write, 250);
}

})
