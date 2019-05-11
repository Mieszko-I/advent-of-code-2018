const input = 554401;
const scoreboard = [3, 7, 1, 0]
let cur1 = 0;
let cur2 = 1;

while (scoreboard.length < input + 10) {

    let curNew = scoreboard[cur1] + scoreboard[cur2];
    curNew = String(curNew);

    for (let l of curNew) {
        scoreboard.push(parseInt(l));
    }

    cur1 = (cur1 + scoreboard[cur1] + 1) % scoreboard.length;
    cur2 = (cur2 + scoreboard[cur2] + 1) % scoreboard.length;

}

console.log(scoreboard.slice(input, input + 10).reduce((a, b) => String(a) + String(b)));