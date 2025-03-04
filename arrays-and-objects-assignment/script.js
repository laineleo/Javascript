//Task 1
    //#1-2 instructions
        let book={
            title: "The Alchemist",
            author:"Paulo Coelho",
            pages: 200,
            isRead: true,
        };

        console.log(book.title);
        console.log(book.author);
        console.log(book.pages);
        console.log(book.isRead);

    //#3-4 instructions
    let book={
        title: "The Alchemist",
        author:"Paulo Coelho",
        pages: 200,
        isRead: true,
    };

    book.genre= "Fable";
    console.log(book);

//Task 2
    let movies= [
        {
            title: "Doctor Strange in the Multiverse of Madness",
            Director: "Sam Raimi",
            year: 2022
        },
        {
            title: "Spider-Man: No Way Home",
            director: "Jon Watts",
            year: 2021
        },
        {
            title: "Black Panther: Wakanda Forever",
            director: "Ryan Coogler",
            year: 2022
        }
    ];

    //#2 instruction
    console.log(movies[1].title);

    //#3 instruction
    movies.push({
        title: "Guardians of the Galaxy Vol. 3",
        director: "James Gunn",
        year: 2023
    });

    //#4 instruction
    movies[0].year= 2023;

    //#5 instruction
    console.log(movies);

//Task 3
    let student= {
        name: "Lalaine",
        age: 22,
        subjects: ['Math', 'English', 'Science']
    };
    //#2 instruction
    console.log(student.subjects[0]);

    //#3 instruction
    student.subjects.push('History');
    console.log(student.subjects);

    //#4 instruction
    console.log(student);

//Task 4
    let recipe= {
        name: "Pasta Salad",
        ingredients: [{
            name: "Pasta",
            quantity: "1 cup"
        }],
        isVegetarian: "false"
    };
    //#2 instruction
    recipe.ingredients.push({
        name: "Nestle Cream",
        quantity: "1 pc.",
    });
    console.log(recipe.ingredients);

    //#3 instruction
    console.log(recipe.ingredients[1]);

    //#4
    console.log(recipe);