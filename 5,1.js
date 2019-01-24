
function solve() {

        var input = document.querySelector('.code').innerText;
        var changed = true;

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

    return input.length;

}