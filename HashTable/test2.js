const dummy = [
    {
        make: "mitsubishi",
        model: "expo",
        city_mpg: 17,
        class: "midsize-large station wagon",
        combination_mpg: 19,
        cylinders: 4,
        displacement: 2.4,
        drive: "awd",
        fuel_type: "gas",
        highway_mpg: 22,
        transmission: "a",
        year: 1993
    },
    {
        make: "mitsubishi",
        model: "expo",
        city_mpg: 18,
        class: "midsize-large station wagon",
        combination_mpg: 20,
        cylinders: 4,
        displacement: 2.4,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 24,
        transmission: "a",
        year: 1993
    },
    {
        make: "mitsubishi",
        model: "expo",
        city_mpg: 17,
        class: "midsize-large station wagon",
        combination_mpg: 19,
        cylinders: 4,
        displacement: 2.4,
        drive: "awd",
        fuel_type: "gas",
        highway_mpg: 22,
        transmission: "m",
        year: 1993
    },
    {
        make: "mitsubishi",
        model: "expo",
        city_mpg: 19,
        class: "midsize-large station wagon",
        combination_mpg: 21,
        cylinders: 4,
        displacement: 2.4,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        transmission: "m",
        year: 1993
    },
    {
        make: "mitsubishi",
        model: "expo.lrv",
        city_mpg: 21,
        class: "midsize-large station wagon",
        combination_mpg: 23,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        transmission: "a",
        year: 1993
    },
    {
        make: "toyota",
        model: "corolla",
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 24,
        cylinders: 4,
        displacement: 1.6,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        transmission: "a",
        year: 1993
    },
    {
        make: "toyota",
        model: "corolla",
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.6,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 31,
        transmission: "m",
        year: 1993
    },
    {
        make: "toyota",
        model: "corolla",
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 25,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 30,
        transmission: "a",
        year: 1993
    },
    {
        make: "toyota",
        model: "corolla",
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 30,
        transmission: "m",
        year: 1993
    },
    {
        make: "toyota",
        model: "camry",
        city_mpg: 18,
        class: "midsize car",
        combination_mpg: 21,
        cylinders: 4,
        displacement: 2.2,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        transmission: "a",
        year: 1993
    },
    {
        make: 'land rover',
        model: 'defender 90',
        city_mpg: 18,
        class: 'standard sport utility vehicle',
        combination_mpg: 19,
        cylinders: 4,
        displacement: 2,
        drive: '4wd',
        fuel_type: 'gas',
        highway_mpg: 21,
        transmission: 'a',
        year: 2023
    },
    {
        make: 'kia',
        model: 'sportage fwd',
        city_mpg: 15,
        class: 'small sport utility vehicle',
        combination_mpg: 28,
        cylinders: 4,
        displacement: 2.5,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 32,
        transmission: 'a',
        year: 2023
    },
    {
        make: 'land rover',
        model: 'defender 90',
        city_mpg: 23,
        class: 'standard sport utility vehicle',
        combination_mpg: 19,
        cylinders: 4,
        displacement: 2,
        drive: '4wd',
        fuel_type: 'gas',
        highway_mpg: 21,
        transmission: 'a',
        year: 2023
    },
    {
        make: 'kia',
        model: 'sportage fwd',
        city_mpg: 25,
        class: 'small sport utility vehicle',
        combination_mpg: 28,
        cylinders: 4,
        displacement: 2.5,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 32,
        transmission: 'a',
        year: 2023
    },
    {
        make: "honda",
        model: "accord wagon",
        city_mpg: 18,
        class: "small station wagon",
        combination_mpg: 21,
        cylinders: 4,
        displacement: 2.2,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 24,
        transmission: "a",
        year: 1993
    },
    {
        make: "honda",
        model: "accord wagon",
        city_mpg: 20,
        class: "small station wagon",
        combination_mpg: 22,
        cylinders: 4,
        displacement: 2.2,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        transmission: "m",
        year: 1993
    },
    {
        make: "honda",
        model: "civic del sol",
        city_mpg: 25,
        class: "two seater",
        combination_mpg: 28,
        cylinders: 4,
        displacement: 1.5,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 33,
        transmission: "a",
        year: 1994
    },
    {
        make: "honda",
        model: "civic del sol",
        city_mpg: 30,
        class: "two seater",
        combination_mpg: 33,
        cylinders: 4,
        displacement: 1.5,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 37,
        transmission: "m",
        year: 1994
    },
    {
        make: "honda",
        model: "civic del sol",
        city_mpg: 23,
        class: "two seater",
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.6,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 30,
        transmission: "a",
        year: 1994
    }
]

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        return key % this.size;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = new Array();
        }

        this.table[index].push({ key, value });
    }

    get(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return null;
        }

        for (const entry of this.table[index]) {
            if (entry.key === key) {
                return entry.value;
            }
        }

        return null;
    }

    delete(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return;
        }

        for (let i = 0; i < this.table[index].length; i++) {
            const entry = this.table[index][i];

            if (entry.key === key) {
                this.table[index].splice(i, 1);
                return;
            }
        }
    }

    displayTable(hashTable, key) {
        const index = hashTable.hash(key);

        for (let i = 0; i < this.size; i++) {
            console.log(`Index ${i}:`);


            const value = hashTable.table[index].filter((entry) => entry.key === key)
            console.log(value)

            if (hashTable.table[index]) {
                let value = hashTable.table[index].filter((entry) => entry.key === key)
                console.log(value)

                // console.log(`  - Key: ${this.table[index].}, Value: ${value}`);

            } else {
                console.log('  - Empty');
            }
        }
    }

    getAllValuesByHashKey(hashTable, hashKey) {
        const index = hashTable.hash(hashKey);

        if (!hashTable.table[index]) {
            return [];
        }

        return hashTable.table[index].filter((entry) => entry.key === hashKey);
    }

}


const ht2 = new HashTable(20);

dummy.map((item) => {
    ht2.set(item.make, item);
})

console.log(ht2.table)

const data2 = ht2.getAllValuesByHashKey(ht2, 'honda');

console.log(data2.map((item) => item.value));



