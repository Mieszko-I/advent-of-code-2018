function getMeta(arr, start, meta_arr) {

    let sum = 0;

    if (arr[start] == 0) {

        let meta = arr[start + 1];
        arr.splice(start, 2);

        if (meta_arr[0] != undefined) {

            for (let i = 0; i < meta; i++) {

                if (meta_arr[arr[start + i] - 1] != undefined) {
                    sum += meta_arr[arr[start + i] - 1];
                }

            }

            arr.splice(start, meta);
            arr[start - 2]--;

        } else {

            for (let i = 0; i < meta; i++) {
                sum += arr[start + i];
            }

            arr.splice(start, meta);
            arr[start - 2]--;

        }
    } else {

        meta_arr.push(getMeta(arr, start + 2, []));
        sum += getMeta(arr, start, meta_arr);

    }

    return sum;
}

function solve() {

    const data = document.querySelector('.code').innerText;
    const get = [];
    const meta_id = [];
    let meta = 0;
    let bufor = 0;

    for (let i = 0; i < data.length; i++) {

        if (data.charAt(i) == ' ') {
            get.push(parseInt(data.substring(bufor, i)));
            bufor = i + 1;
        }

        if (i == data.length - 1) {
            get.push(parseInt(data.substring(bufor, i + 1)));
        }

    }

    for (let i = 0; i < get[1]; i++) {
        meta_id.push(get[length - 1 - i]);
    }

    meta = getMeta(get, 0, []);


    return meta;

}