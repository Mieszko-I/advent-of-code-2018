const smallestX = (prev, cur) => {
    if (prev.x < cur.x) {
        return prev
    } else {
        return cur
    }
};

const biggestX = (prev, cur) => {
    if (prev.x > cur.x) {
        return prev
    } else {
        return cur
    }
};

const solve = () => {

    let points = [];
    const input = document.querySelector('.code').innerText;
    let check = false;
    let bufor;
    let type = 0;
    let x, y, v_x, v_y;

    class Point {
        constructor(x, y, v_x, v_y) {
            this.x = x;
            this.y = y;
            this.v_x = v_x;
            this.v_y = v_y;
        }
    }

    for (let i = 0; i < input.length; i++) {

        if ((input.charAt(i) == '-' || Number.isInteger(parseInt(input.charAt(i)))) && input.charAt(bufor) != '-' && isNaN(input.charAt(bufor))) {

            check = true;
            bufor = i;

        } else if (check && isNaN(input.charAt(i))) {

            switch (type) {
                case 0:
                    x = parseInt(input.substring(bufor, i));
                    break;

                case 1:
                    y = parseInt(input.substring(bufor, i));
                    break;

                case 2:
                    v_x = parseInt(input.substring(bufor, i));
                    break;

                case 3:
                    v_y = parseInt(input.substring(bufor, i));
                    break;
            }
            check = false;
            bufor = undefined;
            type++;
            if (type > 3) type = 0;

        }

        if (!isNaN(x) && !isNaN(y) && !isNaN(v_x) && !isNaN(v_y)) {
            points.push(new Point(x, y, v_x, v_y));
            x = undefined;
            y = undefined;
            v_x = undefined;
            v_y = undefined;
        }

    }

    let new_points = [];
    let diff_new, diff_old;
    let iterations = 0;

    while (true) {
        iterations++;

        diff_old = points.reduce(biggestX).x - points.reduce(smallestX).x;

        new_points = points.map((val, b) => {
            return {
                v_x: val.v_x,
                v_y: val.v_y,
                x: val.x + val.v_x,
                y: val.y + val.v_y
            };
        });

        diff_new = new_points.reduce(biggestX).x - new_points.reduce(smallestX).x;

        if (diff_new > diff_old) {
            break;
        }

        points = new_points;
        new_points = [];

    }

    return --iterations;
};