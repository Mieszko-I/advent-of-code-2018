const input = 554401;
const scoreboard = [3, 7, 1, 0]
let cur1 = 0;
let cur2 = 1;
let i = 0;

while (true) {

    let curNew = scoreboard[cur1] + scoreboard[cur2];
    curNew = String(curNew);

    for (let l of curNew) {
        scoreboard.push(parseInt(l));
    }

    cur1 = (cur1 + scoreboard[cur1] + 1) % scoreboard.length;
    cur2 = (cur2 + scoreboard[cur2] + 1) % scoreboard.length;

    if (scoreboard.length >= String(input).length) {

        const curRecipes = scoreboard.slice(i, i + String(input).length).reduce((a, b) => String(a) + String(b));
        i++;

        if (curRecipes == input) {
            console.log(i - 1);
            break;
        }

    }

}