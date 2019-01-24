function smallestInArray(arr) {

    var min = arr[0];

    for (n = 1; n < arr.length; n++) {
        if (arr[n] < min) {
            min = arr[n];
        }
    }

    return min;
}

function setDelete(j) {

    var letter;

    switch (j) {
        case 0:
            letter = 'a';
            break;

        case 1:
            letter = 'b';
            break;

        case 2:
            letter = 'c';
            break;

        case 3:
            letter = 'd';
            break;

        case 4:
            letter = 'e';
            break;

        case 5:
            letter = 'f';
            break;

        case 6:
            letter = 'g';
            break;

        case 7:
            letter = 'h';
            break;

        case 8:
            letter = 'i';
            break;

        case 9:
            letter = 'j';
            break;

        case 10:
            letter = 'k';
            break;

        case 11:
            letter = 'l';
            break;

        case 12:
            letter = 'm';
            break;

        case 13:
            letter = 'n';
            break;

        case 14:
            letter = 'o';
            break;

        case 15:
            letter = 'p';
            break;

        case 16:
            letter = 'q';
            break;

        case 17:
            letter = 'r';
            break;

        case 18:
            letter = 's';
            break;

        case 19:
            letter = 't';
            break;

        case 20:
            letter = 'u';
            break;

        case 21:
            letter = 'v';
            break;

        case 22:
            letter = 'w';
            break;

        case 23:
            letter = 'x';
            break;

        case 24:
            letter = 'y';
            break;

        case 25:
            letter = 'z';
            break;

    }

    return letter;
}

function solve() {

    var values = [];

    for (var j = 0; j < 26; j++) {

        var input = document.querySelector('.code').innerText;
        var changed = true;
        var toDelete = setDelete(j);




        for (x = 0; x < input.length; x++) {

            if (input.charAt(x).toLowerCase() == toDelete) {
                input = input.substring(0, x) + input.substr(x + 1);
                x--;
            }
        }

        while (changed) {
            changed = false;

            for (i = 0; i < input.length - 1; i++) {

                if (input.charAt(i) != input.charAt(i + 1) && input.charAt(i).toLowerCase() == input.charAt(i + 1).toLowerCase()) {
                    input = input.substring(0, i) + input.substr(i + 1);
                    input = input.substring(0, i) + input.substr(i + 1);
                    i--;
                    changed = true;

                }

            }


        }

        values[j] = input.length;

    }

    return smallestInArray(values);

}