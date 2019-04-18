const countPowerLvl = (x, y, serial) => {

    let power = 0

    for (let i = x; i < x + 3; i++) {

        for (let j = y; j < y + 3; j++) {

            const rack = i + 1 + 10;
            let power_lvl = rack * (j + 1);
            power_lvl += serial;
            power_lvl *= rack;

            if (power_lvl < 100) {
                power_lvl = 0;
            } else {
                power_lvl = parseInt(power_lvl.toString().charAt(power_lvl.toString().length - 3)) - 5;
            }

            power += power_lvl;

        }

    }

    return power;
}

const serial_n = 1788;
const power_lvl = [];
const top_left = [];

for (let i = 0; i < 298; i++) {

    for (let j = 0; j < 298; j++) {

        power_lvl.push(countPowerLvl(i, j, serial_n));
        top_left.push([i + 1, j + 1]);

    }

}

const val = power_lvl.reduce((a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
});

console.log(top_left[power_lvl.indexOf(val)]);