const movies = [
    {
        rank: 1,
        title: "The Shawshank Redemption",
        description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        image:
            "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@.V1_QL75_UX380_CR0,1,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
        genre: ["Drama"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@.V1_UY67_CR0,0,45,67_AL.jpg",
        rating: "9.3",
        id: "top1",
        year: 1994,
        imdbid: "tt0111161",
        imdb_link: "https://www.imdb.com/title/tt0111161",
    },
    {
        rank: 2,
        title: "The Godfather",
        description:
            "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        image:
            "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_QL75_UY562_CR8,0,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_QL75_UY562_CR8,0,380,562.jpg",
        genre: ["Crime", "Drama"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_UY67_CR1,0,45,67_AL.jpg",
        rating: "9.2",
        id: "top2",
        year: 1972,
        imdbid: "tt0068646",
        imdb_link: "https://www.imdb.com/title/tt0068646",
    },
    {
        rank: 3,
        title: "The Dark Knight",
        description:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        image:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.V1_QL75_UX380_CR0,0,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.V1_QL75_UX380_CR0,0,380,562.jpg",
        genre: ["Action", "Crime", "Drama"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.V1_UX67_CR0,0,67,98_AL.jpg",
        rating: "9.0",
        id: "top3",
        year: 2008,
        imdbid: "tt0468569",
        imdb_link: "https://www.imdb.com/title/tt0468569",
    },
    {
        rank: 4,
        title: "The Godfather Part II",
        description:
            "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        image:
            "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_QL75_UY562_CR7,0,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_QL75_UY562_CR7,0,380,562.jpg",
        genre: ["Crime", "Drama"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_UY67_CR1,0,45,67_AL.jpg",
        rating: "9.0",
        id: "top4",
        year: 1974,
        imdbid: "tt0071562",
        imdb_link: "https://www.imdb.com/title/tt0071562",
    },
    {
        rank: 5,
        title: "12 Angry Men",
        description:
            "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        image:
            "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@.V1_QL75_UX380_CR0,11,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@.V1_QL75_UX380_CR0,11,380,562.jpg",
        genre: ["Crime", "Drama"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@.V1_UX45_CR0,0,45,67_AL.jpg",
        rating: "9.0",
        id: "top5",
        year: 1957,
        imdbid: "tt0050083",
        imdb_link: "https://www.imdb.com/title/tt0050083",
    },
    {
        rank: 6,
        title: "Schindler's List",
        description:
            "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        image:
            "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@.V1_QL75_UX380_CR0,4,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@.V1_QL75_UX380_CR0,4,380,562.jpg",
        genre: ["Biography", "Drama", "History"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@.V1_UX45_CR0,0,45,67_AL.jpg",
        rating: "9.0",
        id: "top6",
        year: 1993,
        imdbid: "tt0108052",
        imdb_link: "https://www.imdb.com/title/tt0108052",
    },
    {
        rank: 7,
        title: "The Lord of the Rings: The Return of the King",
        description:
            "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        image:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_QL75_UX380_CR0,0,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_QL75_UX380_CR0,0,380,562.jpg",
        genre: ["Action", "Adventure", "Drama"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_UY67_CR0,0,45,67_AL.jpg",
        rating: "9.0",
        id: "top7",
        year: 2003,
        imdbid: "tt0167260",
        imdb_link: "https://www.imdb.com/title/tt0167260",
    },
    {
        rank: 8,
        title: "Pulp Fiction",
        description:
            "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        image:
            "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_QL75_UY562_CR3,0,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_QL75_UY562_CR3,0,380,562.jpg",
        genre: ["Crime", "Drama"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_UY67_CR0,0,45,67_AL.jpg",
        rating: "8.9",
        id: "top8",
        year: 1994,
        imdbid: "tt0110912",
        imdb_link: "https://www.imdb.com/title/tt0110912",
    },
    {
        rank: 9,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        description:
            "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        image:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@.V1_QL75_UX380_CR0,1,380,562.jpg",
        big_image:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@",
        genre: ["Action", "Adventure", "Drama"],
        thumbnail:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@.V1_UY67_CR0,0,45,67_AL.jpg",
        rating: "8.8",
        id: "top9",
        year: 2001,
        imdbid: "tt0120737",
        imdb_link: "https://www.imdb.com/title/tt0120737",
    },
];

class Link {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
    }

    insert(theLink) {
        let current = this.first;
        let previous = null;

        //gausah kondisi kedua
        while (current !== null) {
            previous = current;
            current = current.next;
        }

        if (previous === null) {
            theLink.next = this.first;
            this.first = theLink;
        } else {
            previous.next = theLink;
            theLink.next = current;
        }
    }

    displayList() {
        process.stdout.write("List (first-->last): ");
        let current = this.first;

        while (current !== null) {
            current.displayLink();
            current = current.next;
        }

        console.log("");
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        return key % this.size;
    }

    set(key, value) {
        const index = this.hash(key[0]);
        const theLink = new Link(value);

        this.table[index] = new LinkedList();

        this.table[index].insert(theLink);
    }

   

    getAllValuesByHashKey(hashTable, hashKey) {
        const index = hashTable.hash(hashKey);

        if (!hashTable.table[index]) {
            return [];
        }

        return hashTable.table[index].filter((entry) => entry.key === hashKey);
    }
}

const hashTable = new HashTable(100);

movies.forEach((movie) => {
    hashTable.set(movie.genre, movie);
});

console.log("masuk ke ouput")

const Output = hashTable.getAllValuesByHashKey(hashTable, "Drama");

console.log(Output);