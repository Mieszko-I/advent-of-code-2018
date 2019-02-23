function ArrNumMinDif(arr, num) {

    var diff = 0;
    var diff_index = 'none';

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] - num < diff || diff_index == 'none') {
            diff = arr[i] - num;
            diff_index = i;
        }

    }

    return [diff, diff_index];

}

function SmallestArrId(arr) {

    var smallest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[smallest] || typeof smallest == 'undefined') {
            smallest = i;
        }
    }

    return smallest;

}

function letToNum(let) {

    switch (let) {

        case 'A':
            return 1;
        case 'B':
            return 2;
        case 'C':
            return 3;
        case 'D':
            return 4;
        case 'E':
            return 5;
        case 'F':
            return 6;
        case 'G':
            return 7;
        case 'H':
            return 8;
        case 'I':
            return 9;
        case 'J':
            return 10;
        case 'K':
            return 11;
        case 'L':
            return 12;
        case 'M':
            return 13;
        case 'N':
            return 14;
        case 'O':
            return 15;
        case 'P':
            return 16;
        case 'Q':
            return 17;
        case 'R':
            return 18;
        case 'S':
            return 19;
        case 'T':
            return 20;
        case 'U':
            return 21;
        case 'V':
            return 22;
        case 'W':
            return 23;
        case 'X':
            return 24;
        case 'Y':
            return 25;
        case 'Z':
            return 26;

    }
    
}

function numToLet(num) {

    switch (num) {

        case 0:
            return 'A';
        case 1:
            return 'B';
        case 2:
            return 'C';
        case 3:
            return 'D';
        case 4:
            return 'E';
        case 5:
            return 'F';
        case 6:
            return 'G';
        case 7:
            return 'H';
        case 8:
            return 'I';
        case 9:
            return 'J';
        case 10:
            return 'K';
        case 11:
            return 'L';
        case 12:
            return 'M';
        case 13:
            return 'N';
        case 14:
            return 'O';
        case 15:
            return 'P';
        case 16:
            return 'Q';
        case 17:
            return 'R';
        case 18:
            return 'S';
        case 19:
            return 'T';
        case 20:
            return 'U';
        case 21:
            return 'V';
        case 22:
            return 'W';
        case 23:
            return 'X';
        case 24:
            return 'Y';
        case 25:
            return 'Z';

    }

}

function biggestArr(arr) {

    var biggest = 0;

    for(var i = 0; i<arr.length; i++) {

        if(arr[i] > biggest) {
            biggest = arr[i];
        }

    }

    return biggest;
}

function solve() {

    var steps = [];
    var all = [];
    var done = [];
    const get = document.querySelector('.code').innerText;
    var next = 0;
    var all_c = true;
    const CHARS_IN_LINE = 49;
    var first_command;


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
debugger;
    var at_once = [];
    var poss;
    var exists;
    var workers = [0, 0];
    var solution = 0;

    while (typeof steps[0] !== 'undefined') {

        for (var i = 0; i < 26; i++) {
            poss = true;
            exists = false;

            for (var j = 0; j < steps.length; j++) {

                if (steps[j][1] == numToLet(i)) {
                    poss = false;
                }
                if (steps[j][0] = numToLet(i)) {
                    exists = true;
                }

            }

            if (poss && exists) {

                at_once.push(i+1);
                done.push(numToLet(i));

            }

        }
debugger;
        while (typeof at_once[0] != 'undefined') {

            for (var i = 0; i < workers.length; i++) {

                if (typeof at_once[0] == 'undefined') {
                    break;
                } else if (workers[i] <= solution) {
                    workers[i] += at_once[0];
                    at_once.splice(0, 1);
                }

            }

            solution += ArrNumMinDif(workers, solution)[0];

        }
    }
debugger;
    for (i = done.length; i++;) {

        for (j = 0; j < all.length; j++) {

            if (done[i] == all[j]) {

                all.splice(j, 1);
                j--;
                break;
            }

        }

    }

    workers[SmallestArrId(workers)] += letToNum(all[0]);

    solution += solution - biggestArr(workers);

    return solution;

}