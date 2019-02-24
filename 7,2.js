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

    var smallest = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[smallest]) {
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

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > biggest) {
            biggest = arr[i];
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

function whoDid(arr, val) {

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr[i].length; j++) {

            if (arr[i][j] == val) {
                return i;
            }

        }

    }
    return -1;

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

    var at_once = [];
    var new_at_once = [];
    var poss;
    var exists;
    var worker;
    var different;
    var workers = [0, 0, 0, 0, 0];
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

            if(all[i] == steps[j][0]) {
                different = false;
            }

        }

        if(different) {
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

        at_once.sort(function(a, b) {
            return a - b;
        });

        if (at_once[0]) {
            while (at_once[0]) {

                worker = SmallestArrId(workers);
                workers[worker] += at_once[0] + 60;
                workers_work[worker].push(numToLet(at_once[0] - 1));
                new_at_once.push(at_once.splice(0, 1)[0]);
debugger;
            }
        } else {

            for (var i = 0; i < workers.length; i++) {
                if (workers[i] < workers[whoDid(workers_work, numToLet(new_at_once[0] - 1))]) {
                    workers[i] = workers[whoDid(workers_work, numToLet(new_at_once[0] - 1))];
                }
            }

            for (var i = 0; i < steps.length; i++) {

                if (steps[i][0] == numToLet(new_at_once[0] - 1)) {
                    steps.splice(i, 1);
                    i--;
                }

            }
            new_at_once.splice(0, 1);
        }

    }



    solution = biggestArr(workers);

    return solution;
}




    // var data = document.querySelector('.code').innerText;

    // function part1(data){
    //     data = data.split('\n').map(a => a.match(/ [A-Z] /g).map(a => a.trim()));
    //     let counts = [];
    //     [].concat(...data).filter((e, i, a) => i == a.indexOf(e)).forEach((e, i, a) => {
    //         counts.push({
    //             c: e,
    //             r: () => data.filter(b => b[1] == e)
    //         })
    //     });
        
    //     var result = '';
    //     while(counts.filter(a => a).length){
    //         var next = counts
    //             .filter(a => !a.r().length)
    //             .sort((a, b) => b.c > a.c ? -1 : 1)[0];
    //         delete counts[counts.indexOf(next)]
    //         result += next.c;
    //         data.filter(a => a[0] == next.c).forEach(a => {
    //             delete data[data.indexOf(a)]
    //         });
    //     }
    //     return result;
    // }
    
    // console.log(part1(data));
    
    // function part2(data, workers){
    //     data = data.split('\n').map(a => a.match(/ [A-Z] /g).map(a => a.trim()));
    //     let counts = [];
    //     [].concat(...data).filter((e, i, a) => i == a.indexOf(e)).forEach((e, i, a) => {
    //         counts.push({
    //             c: e,
    //             r: () => data.filter(b => b[1] == e),
    //             t: 60 + e.charCodeAt() - 64
    //         })
    //     });
    //     var stash = [];
    //     var count = -1;
    //     var result = '';
    //     var desired = counts.length;
    //     while(result.length != desired){
    //         count++;
    //         let newStash = [];
    //         stash.forEach(e => {
    //             if(e.t > 1){
    //                 newStash.push({c: e.c, t: e.t - 1});
    //             }
    //             else {
    //                 result += e.c;
    //                 data.filter(a => a[0] == e.c).forEach(a => {
    //                     delete data[data.indexOf(a)]
    //                 });
    //             }            
    //         });
    //         stash = newStash;
    //         if(stash.length == workers)
    //             continue; 
    //         var candidates = counts
    //             .filter(a => !a.r().length)
    //             .sort((a, b) => b.c > a.c ? -1 : 1).slice(0, workers - stash.length);
    //         candidates.forEach(e => {
    //             delete counts[counts.indexOf(e)]
    //             stash.push({
    //                 c: e.c,
    //                 t: e.t
    //             });
    //         })
    //     }
    //     return count ;
    // }
    
    // console.log(part2(data, 5))

