function getMeta(arr, start) {

    let sum = 0;

    if(arr[start] == 0) {
        let meta = arr[start+1];
        arr.splice(start, 2);

        for(let i = 0; i<meta; i++) {
            sum += arr[start+i];
        }

        arr.splice(start, meta);

        arr[start-2]--;

        return sum;

    } else {

        sum += getMeta(arr, start+2);
        sum += getMeta(arr, start);

    }

    return sum;
}

function solve() {

    const data = document.querySelector('.code').innerText;
    const get = [];
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

        meta = getMeta(get, 0);


        return meta;

}
