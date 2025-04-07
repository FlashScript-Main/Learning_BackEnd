// Root 👉🏻 "db" Folder 👉🏻 data.js


const movie1 = {
    name: "Movie #1",
    ratings: 4,
    money: 60000,
    genre: ["Comedy", "Drama"],
    isActive: true,
    comments: [
        {
            value: "First Comment of Movie #1",
            published: Date.now(),
        },
        {
            value: "Second Comment of Movie #1",
            published: Date.now(),
        },
    ],
};

const movie2 = {
    name: "Movie #2",
    ratings: 5,
    money: 70000,
    genre: ["Action", "Adventure"],
    isActive: true,
    comments: [
        {
            value: "First Comment of Movie #2",
            published: Date.now(),
        },
        {
            value: "Second Comment of Movie #2",
            published: Date.now(),
        },
    ],
};

const movie3 = {
    name: "Movie #3",
    ratings: 3,
    money: 50000,
    genre: ["Action", "Comedy"],
    isActive: false,
    comments: [
        {
            value: "First Comment of Movie #3",
            published: Date.now(),
        },
        {
            value: "Second Comment of Movie #3",
            published: Date.now(),
        },
    ],
};    


export { 
    movie1, 
    movie2,
    movie3
};