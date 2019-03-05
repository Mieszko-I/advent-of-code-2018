const clockTurn = (num, arr) => {
    if (num > arr.length-1) {
        return num - arr.length;
    } else if(num < 0) {
        return arr.length + num + 1;
    } else {
        return num;
    }
};

function solve() {

    const get = document.querySelector('.code').innerText;
    let bufor = 0;
    let get_input = false;
    let players, marbles;

    for (let i = 0; i < get.length; i++) {

        if (get.charAt(i) == ' ' && bufor == 0) {
            players = parseInt(get.substring(bufor, i));
            bufor++;
        }

        if (!isNaN(get.charAt(i)) && get.charAt(i) != ' ' && bufor == 1) {
            bufor = i;
            get_input = true;
        }

        if (get_input && get.charAt(i) == ' ') {
            marbles = parseInt(get.substring(bufor, i));
        }

    }

    const circle = [0, 2, 1];
    let pointer = 1;
    const players_points = new Array(players).fill(0);

    for (let i = 3; i <= marbles; i++) {

        if (circle.length == pointer + 1) {

            circle.splice(1, 0, i);
            pointer = 1;

        } else if (!(i % 23)) {

            players_points[i % players] += i;
            players_points[i % players] += circle.splice(clockTurn(pointer - 7, circle), 1)[0];
            pointer = clockTurn(pointer - 7, circle);

        } else {

            circle.splice(pointer + 2, 0, i);
            pointer += 2;

        }

    }

    return players_points.reduce((prev, cur) => {
        if (prev >= cur) {
            return prev;
        } else {
            return cur;
        }
    });

}