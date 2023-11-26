const dummy = [
    {
        city_mpg: 17,
        class: "midsize-large station wagon",
        combination_mpg: 19,
        cylinders: 4,
        displacement: 2.4,
        drive: "awd",
        fuel_type: "gas",
        highway_mpg: 22,
        make: "mitsubishi",
        model: "expo",
        transmission: "a",
        year: 1993
    },
    {
        city_mpg: 18,
        class: "midsize-large station wagon",
        combination_mpg: 20,
        cylinders: 4,
        displacement: 2.4,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 24,
        make: "mitsubishi",
        model: "expo",
        transmission: "a",
        year: 1993
    },
    {
        city_mpg: 17,
        class: "midsize-large station wagon",
        combination_mpg: 19,
        cylinders: 4,
        displacement: 2.4,
        drive: "awd",
        fuel_type: "gas",
        highway_mpg: 22,
        make: "mitsubishi",
        model: "expo",
        transmission: "m",
        year: 1993
    },
    {
        city_mpg: 19,
        class: "midsize-large station wagon",
        combination_mpg: 21,
        cylinders: 4,
        displacement: 2.4,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        make: "mitsubishi",
        model: "expo",
        transmission: "m",
        year: 1993
    },
    {
        city_mpg: 21,
        class: "midsize-large station wagon",
        combination_mpg: 23,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        make: "mitsubishi",
        model: "expo.lrv",
        transmission: "a",
        year: 1993
    },
    {
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 24,
        cylinders: 4,
        displacement: 1.6,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        make: "toyota",
        model: "corolla",
        transmission: "a",
        year: 1993
    },
    {
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.6,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 31,
        make: "toyota",
        model: "corolla",
        transmission: "m",
        year: 1993
    },
    {
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 25,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 30,
        make: "toyota",
        model: "corolla",
        transmission: "a",
        year: 1993
    },
    {
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 30,
        make: "toyota",
        model: "corolla",
        transmission: "m",
        year: 1993
    },
    {
        city_mpg: 18,
        class: "midsize car",
        combination_mpg: 21,
        cylinders: 4,
        displacement: 2.2,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        make: "toyota",
        model: "camry",
        transmission: "a",
        year: 1993
    },
    {
        city_mpg: 18,
        class: 'standard sport utility vehicle',
        combination_mpg: 19,
        cylinders: 4,
        displacement: 2,
        drive: '4wd',
        fuel_type: 'gas',
        highway_mpg: 21,
        make: 'land rover',
        model: 'defender 90',
        transmission: 'a',
        year: 2023
    },
    {
        city_mpg: 15,
        class: 'small sport utility vehicle',
        combination_mpg: 28,
        cylinders: 4,
        displacement: 2.5,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 32,
        make: 'kia',
        model: 'sportage fwd',
        transmission: 'a',
        year: 2023
    },
    {
        city_mpg: 23,
        class: 'standard sport utility vehicle',
        combination_mpg: 19,
        cylinders: 4,
        displacement: 2,
        drive: '4wd',
        fuel_type: 'gas',
        highway_mpg: 21,
        make: 'land rover',
        model: 'defender 90',
        transmission: 'a',
        year: 2023
    },
    {
        city_mpg: 25,
        class: 'small sport utility vehicle',
        combination_mpg: 28,
        cylinders: 4,
        displacement: 2.5,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 32,
        make: 'kia',
        model: 'sportage fwd',
        transmission: 'a',
        year: 2023
    },
    {
        "city_mpg": 18,
        "class": "small station wagon",
        "combination_mpg": 21,
        "cylinders": 4,
        "displacement": 2.2,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 24,
        "make": "honda",
        "model": "accord wagon",
        "transmission": "a",
        "year": 1993
    },
    {
        "city_mpg": 20,
        "class": "small station wagon",
        "combination_mpg": 22,
        "cylinders": 4,
        "displacement": 2.2,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 26,
        "make": "honda",
        "model": "accord wagon",
        "transmission": "m",
        "year": 1993
    },
    {
        "city_mpg": 25,
        "class": "two seater",
        "combination_mpg": 28,
        "cylinders": 4,
        "displacement": 1.5,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 33,
        "make": "honda",
        "model": "civic del sol",
        "transmission": "a",
        "year": 1994
    },
    {
        "city_mpg": 30,
        "class": "two seater",
        "combination_mpg": 33,
        "cylinders": 4,
        "displacement": 1.5,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 37,
        "make": "honda",
        "model": "civic del sol",
        "transmission": "m",
        "year": 1994
    },
    {
        "city_mpg": 23,
        "class": "two seater",
        "combination_mpg": 26,
        "cylinders": 4,
        "displacement": 1.6,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 30,
        "make": "honda",
        "model": "civic del sol",
        "transmission": "a",
        "year": 1994
    }
]


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getKey() {
        return this.data.make;
    }

    displayNode() {
        console.log("Brand: " + this.data.make);
        console.table(this.data);
    }
}

class LinkedList {
    constructor() {
        this.first = null;
    }

    insert(newNode) {
        let key = newNode.getKey();
        let current = this.first;
        let prev = null;

        while (current && current.data.make < key) {
            prev = current;
            current = current.next;
        }

        if (prev === null) this.first = newNode;
        else prev.next = newNode;

        newNode.next = current;
    }

    displayList() {
        console.log("car: ")
        let current = this.first;
        while (current) {
            // console.log(current.data.make);
            current.displayNode();
            current = current.next;
        }
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31) + key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    insert(key, data) {
        const index = this.hash(key);
        let current = this.table[index];

        if (!current) {
            this.table[index] = new LinkedList(data);
            return;
        }

        current.insert(new Node(data));
    }

    get(key) {
        const index = this.hash(key);
        let current = this.table[index];

        while (current) {
            if (current.data.make === key) {
                return current.data;
            }
            current = current.next;
        }

        return null;
    }

    displayTable() {
        console.log("table: ")
        this.table.forEach((data, index) => {
            console.log(index);
            data.displayList();
        });
    }
}


const hashTable = new HashTable(100);

// Insert data
dummy.forEach(data => {
    hashTable.insert(data.make, data);
});

// Display the table
hashTable.displayTable();

