function solve() {

    var steps = [];
    var all = [];
    const get = document.querySelector('.code').innerText;
    var next = 0;
    var all_c = true;
    const CHARS_IN_LINE = 49;
    var first_command;
    var alphabet = {

        0: 'A',
        1: 'B',
        2: 'C',
        3: 'D',
        4: 'E',
        5: 'F',
        6: 'G',
        7: 'H',
        8: 'I',
        9: 'J',
        10: 'K',
        11: 'L',
        12: 'M',
        13: 'N',
        14: 'O',
        15: 'P',
        16: 'Q',
        17: 'R',
        18: 'S',
        19: 'T',
        20: 'U',
        21: 'V',
        22: 'W',
        23: 'X',
        24: 'Y',
        25: 'Z'

    }

    for (i = 0; i < get.length; i++) {

        if (i == 5 + next * CHARS_IN_LINE) {

            first_command = get.charAt(i);

        }

        if (i == 36 + next * CHARS_IN_LINE) {
            all_c = true;

            steps.push([first_command, get.charAt(i)]);

            for (j = 0; j < all.length; j++) {

                if (get.charAt(i) == all[j]) {
                    all_c = false;
                }

            }

            if (all_c) {
                all.push(get.charAt(i));
            }

            next++;

        }

    }
    
    var solution = '';
    var check_let;
    var alph = 0;

    while (typeof steps[0] !== 'undefined') {

        var exists = false;
        var poss = true;
        check_let = alphabet[alph];
        alph++;

        for (i = 0; i < steps.length; i++) {

            if (check_let == steps[i][1]) {
                poss = false;
            }

            if (check_let == steps[i][0]) {
                exists = true;
            }

        }

        if (poss && exists) {

            solution += check_let;

            for (i = 0; i < steps.length; i++) {

                if (steps[i][0] == check_let) {

                    steps.splice(i, 1);
                    i--;

                }

            }

            alph = 0;
        }

    }

    for (i = 0; i < solution.length; i++) {

        for (j = 0; j < all.length; j++) {

            if (solution.charAt(i) == all[j]) {

                all.splice(j, 1);
                j--;
                break;
            }

        }

    }
 
    solution += all[0];

    return solution;

}