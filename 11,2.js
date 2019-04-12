const solve = () => {

    const serial_n = parseInt(document.querySelector('.code').innerText);
    const power_lvl = [];

    for (let i = 0; i < 300; i++) {
        power_lvl.push(new Array(300));
    }

    for (let i = 0; i < 300; i++) {

        for (let j = 0; j < 300; j++) {

            const rack = i + 1 + 10;
            let power = rack * (j + 1);
            power += serial_n;
            power *= rack;
            power = parseInt(power.toString().charAt(power.toString().length - 3)) - 5;

            power_lvl[i][j] = power;

        }

    }

    let sum_sq;
    const sum = [];

    for (let x in power_lvl) {
        x = parseInt(x);

        for (let y in power_lvl[x]) {
            y = parseInt(y);
            sum_sq = 0;

            for (let size = 1; size <= 300; size++) {

                if(y+size > 300 || x+size > 300) {
                    break;
                }

                for(let i = y; i <= y+size-1; i++) {
                    sum_sq += power_lvl[x+size-1][i];
                }

                for(let i = x; i <= x+size-2; i++) {
                    sum_sq += power_lvl[i][y+size-1];
                }

                sum.push([sum_sq, x+1, y+1, size]);

            }

        }

    }

    return sum.reduce((a, b) => {
        if(a[0] > b[0]) {
            return a;
        } else {
            return b;
        }
    });

};