function SmallestArrId(arr) {

    var smallest = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] < arr[smallest][0] && arr[i][1] == false) {
            smallest = i;
        }
    }

    return smallest;
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

    for (var i = 0; i < arr.length; i++) {

        if (arr[i][0] > biggest) {
            biggest = arr[i][0];
        }

    }

    return biggest;
}

function isThere(v, arr) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == v) {
            return true;
        }

    }

    return false;
}


const get = `Step A must be finished before step I can begin.
Step M must be finished before step Q can begin.
Step B must be finished before step S can begin.
Step G must be finished before step N can begin.
Step Y must be finished before step R can begin.
Step E must be finished before step H can begin.
Step K must be finished before step L can begin.
Step H must be finished before step Z can begin.
Step C must be finished before step P can begin.
Step W must be finished before step U can begin.
Step V must be finished before step L can begin.
Step O must be finished before step N can begin.
Step U must be finished before step I can begin.
Step D must be finished before step P can begin.
Step Q must be finished before step L can begin.
Step F must be finished before step Z can begin.
Step L must be finished before step N can begin.
Step P must be finished before step S can begin.
Step I must be finished before step S can begin.
Step S must be finished before step R can begin.
Step T must be finished before step N can begin.
Step N must be finished before step X can begin.
Step Z must be finished before step J can begin.
Step R must be finished before step J can begin.
Step J must be finished before step X can begin.
Step E must be finished before step I can begin.
Step T must be finished before step R can begin.
Step I must be finished before step N can begin.
Step K must be finished before step C can begin.
Step B must be finished before step D can begin.
Step K must be finished before step T can begin.
Step E must be finished before step P can begin.
Step F must be finished before step I can begin.
Step O must be finished before step U can begin.
Step I must be finished before step J can begin.
Step S must be finished before step Z can begin.
Step L must be finished before step J can begin.
Step F must be finished before step T can begin.
Step F must be finished before step P can begin.
Step I must be finished before step T can begin.
Step G must be finished before step S can begin.
Step V must be finished before step U can begin.
Step F must be finished before step R can begin.
Step L must be finished before step R can begin.
Step Y must be finished before step D can begin.
Step M must be finished before step E can begin.
Step U must be finished before step L can begin.
Step C must be finished before step D can begin.
Step W must be finished before step N can begin.
Step S must be finished before step N can begin.
Step O must be finished before step S can begin.
Step B must be finished before step T can begin.
Step V must be finished before step T can begin.
Step S must be finished before step X can begin.
Step V must be finished before step P can begin.
Step F must be finished before step L can begin.
Step P must be finished before step R can begin.
Step D must be finished before step N can begin.
Step C must be finished before step L can begin.
Step O must be finished before step Q can begin.
Step N must be finished before step Z can begin.
Step Y must be finished before step L can begin.
Step B must be finished before step K can begin.
Step P must be finished before step Z can begin.
Step V must be finished before step Z can begin.
Step U must be finished before step J can begin.
Step Q must be finished before step S can begin.
Step H must be finished before step F can begin.
Step E must be finished before step O can begin.
Step D must be finished before step F can begin.
Step D must be finished before step X can begin.
Step L must be finished before step S can begin.
Step Z must be finished before step R can begin.
Step K must be finished before step X can begin.
Step M must be finished before step V can begin.
Step A must be finished before step M can begin.
Step B must be finished before step W can begin.
Step A must be finished before step P can begin.
Step W must be finished before step Q can begin.
Step R must be finished before step X can begin.
Step M must be finished before step H can begin.
Step F must be finished before step S can begin.
Step K must be finished before step Q can begin.
Step Y must be finished before step Q can begin.
Step W must be finished before step S can begin.
Step Q must be finished before step T can begin.
Step K must be finished before step H can begin.
Step K must be finished before step D can begin.
Step E must be finished before step T can begin.
Step Y must be finished before step E can begin.
Step A must be finished before step O can begin.
Step G must be finished before step E can begin.
Step C must be finished before step O can begin.
Step G must be finished before step H can begin.
Step Y must be finished before step I can begin.
Step V must be finished before step S can begin.
Step B must be finished before step R can begin.
Step B must be finished before step X can begin.
Step V must be finished before step I can begin.
Step N must be finished before step J can begin.
Step H must be finished before step I can begin.`;

var steps = [];
var all = [];
var done = [];
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

var at_once = [];
var new_at_once = [];
var poss;
var exists;
var worker;
var different;
var workers = [
    [0, false],
    [0, false],
    [0, false],
    [0, false],
    [0, false]
];
var workers_work = [
    [],
    [],
    [],
    [],
    []
];
var solution = 0;

for (var i = 0; i < all.length; i++) {
    different = true;

    for (var j = 0; j < steps.length; j++) {

        if (all[i] == steps[j][0]) {
            different = false;
        }

    }

    if (different) {
        steps.push([all[i], '-']);
    }

}

while (steps[0]) {

    for (var i = 0; i < 26; i++) {
        poss = true;
        exists = false;

        for (var j = 0; j < steps.length; j++) {

            if (steps[j][1] == numToLet(i)) {
                poss = false;
            }
            if (steps[j][0] == numToLet(i)) {
                exists = true;
            }

        }

        if (poss && exists && !isThere(numToLet(i), done)) {

            at_once.push(i + 1);
            done.push(numToLet(i));

        }

    }

    at_once.sort(function (a, b) {
        return a - b;
    });

    if (at_once[0]) {
        while (at_once[0]) {

            worker = SmallestArrId(workers);
            workers[worker][0] += at_once[0] + 60;
            workers[worker][1] = true;
            workers_work[worker].push(numToLet(at_once[0] - 1));
            new_at_once.push(at_once.splice(0, 1)[0]);

        }
    } else {

        worker = 0;

        for (var i = 0; i < workers.length; i++) {
            if(workers[worker][1] == false && workers[i][1] == true) {
                worker = i;
            } else if (workers[i][0] < workers[worker][0] && workers[i][1] == true) {
                worker = i;
            }
        }

        for (var i = 0; i < workers.length; i++) {
            if (workers[i][0] < workers[worker][0]) {
                workers[i][0] = workers[worker][0];
                workers[i][1] = false;
            }
        }

        workers[worker][1] = false;

        for (var i = 0; i < steps.length; i++) {

            if (steps[i][0] == workers_work[worker][workers_work[worker].length - 1]) {
                steps.splice(i, 1);
                i--;
            }

        }

        for (var i = 0; i < new_at_once.length; i++) {

            if (numToLet(new_at_once[i] - 1) == workers_work[worker][workers_work[worker].length - 1]) {
                new_at_once.splice(i, 1);
                break;
            }

        }

    }

}

solution = biggestArr(workers);

console.log(solution);