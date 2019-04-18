function biggestInArray(arr) {

    var max = parseInt(arr[0]);

    for (n = 1; n < arr.length; n++) {

        if (parseInt(arr[n]) > max) {
            max = parseInt(arr[n]);
        }
    }

    return max;
}

var input = `192, 220
91, 338
65, 319
143, 310
243, 205
237, 135
342, 197
114, 56
189, 168
194, 174
55, 331
181, 162
272, 111
201, 121
73, 88
276, 274
324, 323
201, 146
125, 301
190, 185
247, 307
157, 65
217, 181
62, 222
319, 202
86, 342
333, 339
181, 240
263, 198
200, 296
306, 228
55, 50
154, 356
54, 70
91, 91
265, 182
272, 267
118, 296
75, 140
319, 272
357, 341
193, 342
102, 334
246, 123
328, 139
229, 284
199, 309
151, 243
295, 229
201, 277
`;

var points = [];
var Xs = [];
var Ys = [];
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

console.log(sum);