const solve = () => {

    const input = document.querySelector('.code').innerText.match(/[.# \n]/g);
    let bufor = 2;
    let pots_r = [];
    const patterns = [];
    let pots_got = false;
    let new_pattern = false;

    for (i in input) {

        if (input[i] == '\n') {

            if (!pots_got) {
                pots_r = input.slice(bufor, i);
                pots_got = true;
            } else {
                bufor = parseInt(i) + 1;
                new_pattern = true;
            }

        }

        if (input[i] == ' ' && pots_got && new_pattern) {

            patterns.push(input.slice(bufor, i).reduce((a, b) => a + b) + '=' + input[parseInt(i) + 2]);
            new_pattern = false;
        }

    }

    let pots_l = new Array(pots_r.length).fill('.');
    let pat;
    let new_pots_l = [];
    let new_pots_r = [];
    const sum = [];
    const dif = [];

    for (let i = 0; i < 50000000000; i++) {

        i = parseInt(i);

        pots_r.push('.');
        pots_r.push('.');
        pots_l.push('.');
        pots_l.push('.');

        pots_l.forEach((val, index) => {

            if (index + 1 >= pots_l.length) {
                pat = '..' + val;
            } else if (index + 2 >= pots_l.length) {
                pat = '.' + pots_l[index + 1] + val;
            } else {
                pat = pots_l[index + 2] + pots_l[index + 1] + val;
            }

            pat = pots_l[index + 2] + pots_l[index + 1] + val;

            if (index - 1 < 0) {
                pat += pots_r[0] + pots_r[1];
            } else if (index - 2 < 0) {
                pat += pots_l[index - 1] + pots_r[0];
            } else {
                pat += pots_l[index - 1] + pots_l[index - 2];
            }

            for (let v of patterns) {
                if (v.slice(0, 5) == pat) {
                    new_pots_l[index] = v.charAt(6);
                    break;
                }
            }

        });

        pots_r.forEach((val, index) => {

            pat = '';

            if (index - 1 < 0) {
                pat += pots_l[1] + pots_l[0] + val;
            } else if (index - 2 < 0) {
                pat += pots_l[0] + pots_r[0] + val;
            } else {
                pat += pots_r[index - 2] + pots_r[index - 1] + val;
            }

            if (index + 1 >= pots_r.length) {
                pat += '..';
            } else if (index + 2 >= pots_r.length) {
                pat += pots_r[index + 1] + '.';
            } else {
                pat += pots_r[index + 1] + pots_r[index + 2];
            }

            for (let v of patterns) {
                if (v.slice(0, 5) == pat) {
                    new_pots_r[index] = v.charAt(6);
                    break;
                }
            }

        });

        for (let v = 0; v < pots_r.length; v++) {

            if (new_pots_l[v] == undefined) {
                new_pots_l[v] = '.';
            }

            if (new_pots_r[v] == undefined) {
                new_pots_r[v] = '.';
            }
        }

        pots_r = new_pots_r;
        pots_l = new_pots_l;
        new_pots_l = [];
        new_pots_r = [];

        let s = 0;

        for (let i = 0; i < pots_r.length; i++) {

            if (pots_r[i] == '#') {
                s += i;
            }

            if (pots_l[i] == '#') {
                s -= i + 1;
            }

        }
        sum.push(s);

        for (let i = 1; i < sum.length; i++) {
            dif.push(sum[i] - sum[i - 1]);
        }

        if (dif[dif.length - 1] == dif[dif.length - 2] && dif[dif.length - 1] == dif[dif.length - 3] && dif[dif.length - 1] == dif[dif.length - 4] && dif.length != 0) {
            s = sum[sum.length - 1] + dif[dif.length - 1] * (50000000000 - sum.length);
            return s;
        }

    }

}