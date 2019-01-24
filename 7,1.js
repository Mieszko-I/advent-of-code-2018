function solve() {

    var steps = [];
    const get = document.querySelector('.code').innerText;
    var next = 0;
    const CHARS_IN_LINE = 49;
    var first_command;

    for (i = 0; i < get.length; i++) {

        if (i == 7 + next * CHARS_IN_LINE) {

            first_command = get.charAt(i);
debugger;
        }

        if (i == 36 + next * CHARS_IN_LINE) {

            steps.push([first_command, get.charAt(i)]);
            next++;

        }

    }

    debugger;


}