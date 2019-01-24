function biggestInArray(arr) {

    var max = parseInt(arr[0]);

    for (n = 1; n < arr.length; n++) {

        if (parseInt(arr[n]) > max) {
            max = parseInt(arr[n]);
        }
    }

    return max;
}

function solve() {

    var points = [];
    var Xs = [];
    var Ys = [];
    var input = document.querySelector('.code').innerText;
    var bufor = 0;

    for (i = 0; i < input.length; i++) {

        if (input.charAt(i) == ',') {
            Xs.push(input.substring(bufor, i));
            bufor = i + 2;
        } else if (input.charAt(i) == '\n') {
            Ys.push(input.substring(bufor, i));
            bufor = i + 1;
        }

    }

    for (i = 0; i < Xs.length; i++) {
        points.push([Xs[i], Ys[i]]);
    }

    var max_x = biggestInArray(Xs) + 1;
    var max_y = biggestInArray(Ys) + 1;
    var system = new Array(parseInt(max_x * max_y));
    var dis_sum = 0;


    for (i = 0; i < max_x; i++) {

        for (j = 0; j < max_y; j++) {
            dis_sum = 0;

            for (x = 0; x < points.length; x++) {

                dis_sum += Math.abs(points[x][0] - i) + Math.abs(points[x][1] - j);

            }


            if (dis_sum < 10000) {
                system[i + j * max_x] = true;
            } else {
                system[i + j * max_x] = false;
            }

        }
    }


    var sum = 0;

    for (i = 0; i < system.length; i++) {

        if (system[i]) {
            sum++;
        }

    }


    return sum;
}