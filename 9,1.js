function LinkedList() {}
LinkedList.prototype = {
    length: 0,
    first: null,
    last: null
};

LinkedList.Circular = function () {};
LinkedList.Circular.prototype = new LinkedList();

LinkedList.Circular.prototype.append = function (node) {
    if (this.first === null) {
        node.prev = node;
        node.next = node;
        this.first = node;
        this.last = node;
    } else {
        node.prev = this.last;
        node.next = this.first;
        this.first.prev = node;
        this.last.next = node;
        this.last = node;
    }
    this.length++;
};

LinkedList.Circular.prototype.insertAfter = function (node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    node.next.prev = newNode;
    node.next = newNode;
    if (newNode.prev == this.last) {
        this.last = newNode;
    }
    this.length++;
};

LinkedList.Circular.prototype.remove = function (node) {
    if (this.length > 1) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        if (node == this.first) {
            this.first = node.next;
        }
        if (node == this.last) {
            this.last = node.prev;
        }
    } else {
        this.first = null;
        this.last = null;
    }
    node.prev = null;
    node.next = null;
    this.length--;
    return node;
};


LinkedList.Node = function (data) {
    this.prev = null;
    this.next = null;
    this.data = data;
};





const get = '491 players; last marble is worth 71058 points';
let bufor = 0;
let get_input = false;
let players, marbles;

for (let i = 0; i < get.length; i++) {

    if (get.charAt(i) == ' ' && bufor == 0) {
        players = parseInt(get.substring(bufor, i));
        bufor++;
    }

    if (!isNaN(get.charAt(i)) && get.charAt(i) != ' ' && bufor == 1) {
        bufor = i;
        get_input = true;
    }

    if (get_input && get.charAt(i) == ' ') {
        marbles = parseInt(get.substring(bufor, i));
    }

}

const list = LinkedList.Circular.prototype;
list.append({
    v: 0
});
list.append({
    v: 1
});
list.insertAfter(list.first, {
    v: 2
});
let pointer = list.first.next;
const players_points = new Array(players).fill(0);

for (let i = 3; i <= marbles; i++) {

    if (list.last.v == pointer.v) {

        list.insertAfter(list.first, {
            v: i
        })
        pointer = list.first.next;

    } else if (!(i % 23)) {

        players_points[i % players] += i;
        players_points[i % players] += list.remove(pointer.prev.prev.prev.prev.prev.prev.prev).v;
        pointer = pointer.prev.prev.prev.prev.prev.prev;

    } else {

        list.insertAfter(pointer.next, {
            v: i
        });
        pointer = pointer.next.next;

    }

}

console.log(players_points.reduce((prev, cur) => {
    if (prev >= cur) {
        return prev;
    } else {
        return cur;
    }
}));