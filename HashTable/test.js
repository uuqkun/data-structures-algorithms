const dummy = [
    {
        "city_mpg": 17,
        "class": "midsize-large station wagon",
        "combination_mpg": 19,
        "cylinders": 4,
        "displacement": 2.4,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 22,
        "make": "mitsubishi",
        "model": "expo",
        "transmission": "a",
        "year": 1993
    },
    {
        "city_mpg": 18,
        "class": "midsize-large station wagon",
        "combination_mpg": 20,
        "cylinders": 4,
        "displacement": 2.4,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 24,
        "make": "mitsubishi",
        "model": "expo",
        "transmission": "a",
        "year": 1993
    },
    {
        "city_mpg": 17,
        "class": "midsize-large station wagon",
        "combination_mpg": 19,
        "cylinders": 4,
        "displacement": 2.4,
        "drive": "awd",
        "fuel_type": "gas",
        "highway_mpg": 22,
        "make": "mitsubishi",
        "model": "expo",
        "transmission": "m",
        "year": 1993
    },
    {
        "city_mpg": 19,
        "class": "midsize-large station wagon",
        "combination_mpg": 21,
        "cylinders": 4,
        "displacement": 2.4,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 26,
        "make": "mitsubishi",
        "model": "expo",
        "transmission": "m",
        "year": 1993
    },
    {
        "city_mpg": 21,
        "class": "midsize-large station wagon",
        "combination_mpg": 23,
        "cylinders": 4,
        "displacement": 1.8,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 26,
        "make": "mitsubishi",
        "model": "expo.lrv",
        "transmission": "a",
        "year": 1993
    },
    {
        "city_mpg": 23,
        "class": "compact car",
        "combination_mpg": 24,
        "cylinders": 4,
        "displacement": 1.6,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 26,
        "make": "toyota",
        "model": "corolla",
        "transmission": "a",
        "year": 1993
    },
    {
        "city_mpg": 23,
        "class": "compact car",
        "combination_mpg": 26,
        "cylinders": 4,
        "displacement": 1.6,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 31,
        "make": "toyota",
        "model": "corolla",
        "transmission": "m",
        "year": 1993
    },
    {
        "city_mpg": 23,
        "class": "compact car",
        "combination_mpg": 25,
        "cylinders": 4,
        "displacement": 1.8,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 30,
        "make": "toyota",
        "model": "corolla",
        "transmission": "a",
        "year": 1993
    },
    {
        "city_mpg": 23,
        "class": "compact car",
        "combination_mpg": 26,
        "cylinders": 4,
        "displacement": 1.8,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 30,
        "make": "toyota",
        "model": "corolla",
        "transmission": "m",
        "year": 1993
    },
    {
        "city_mpg": 18,
        "class": "midsize car",
        "combination_mpg": 21,
        "cylinders": 4,
        "displacement": 2.2,
        "drive": "fwd",
        "fuel_type": "gas",
        "highway_mpg": 26,
        "make": "toyota",
        "model": "camry",
        "transmission": "a",
        "year": 1993
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
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hashFunction(key) {
        return Math.floor(key.charCodeAt(0) / this.size);
    }

    add(key, value) {
        // Hitung hash value dari kunci
        const index = this.hashFunction(key);

        // Cari node linked list pada index hash

        //let node = this.table[index]; // salah di sini, yg diinstansiasi harusnya pake class Node, bukan array table

        let node = new Node(key, value);

        if (node === null) {
            node = new Node(key, value);
            this.table[index] = node;
        } else {
            // Jika node sudah ada, tambahkan data ke linked list
            node.next = new Node(key, value);
        }
    }
}

const hashTable = new HashTable(6);

// Menambahkan data
hashTable.add("land rover", "range rover sport");
hashTable.add("land rover", "range rover evoque");
hashTable.add("land", "range rover evoque");

console.log(hashTable);