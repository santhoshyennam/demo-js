
var movies = [
    {
        "id": 1,
        "title": "Inception",
        "description": "A mind-bending heist movie where dreams become the battlefield.",
        "releaseDate": "2010-07-16T00:00:00.000Z",
        "duration": 174,
        "imageUrl": "1.jpeg",
        "cost": 87.94,
        "createdAt": "2023-11-10T01:45:03.000Z",
        "updatedAt": "2023-11-10T23:53:48.000Z",
        "genre_id": 1,
        "language_id": 1
    },
    {
        "id": 2,
        "title": "The Shawshank Redemption",
        "description": "A tale of hope and friendship in the backdrop of a prison.",
        "releaseDate": "1994-09-10T00:00:00.000Z",
        "duration": 134,
        "imageUrl": "2.jpeg",
        "cost": 54.05,
        "createdAt": "2023-11-10T01:45:11.000Z",
        "updatedAt": "2023-11-10T23:53:41.000Z",
        "genre_id": 2,
        "language_id": 1
    },
    {
        "id": 3,
        "title": "The Dark Knight",
        "description": "The Joker wreaks havoc in Gotham City, and Batman must stop him.",
        "releaseDate": "2008-07-18T00:00:00.000Z",
        "duration": 138,
        "imageUrl": "3.jpeg",
        "cost": 86.44,
        "createdAt": "2023-11-10T01:45:20.000Z",
        "updatedAt": "2023-11-10T23:53:58.000Z",
        "genre_id": 1,
        "language_id": 1
    },
    {
        "id": 4,
        "title": "The Godfather",
        "description": "A crime epic that follows the Corleone family's rise and fall.",
        "releaseDate": "1972-03-15T00:00:00.000Z",
        "duration": 145,
        "imageUrl": "4.jpeg",
        "cost": 50.04,
        "createdAt": "2023-11-10T01:45:27.000Z",
        "updatedAt": "2023-11-10T23:54:06.000Z",
        "genre_id": 3,
        "language_id": 1
    },
    {
        "id": 5,
        "title": "Pulp Fiction",
        "description": "Interwoven stories of crime, redemption, and the bizarre in Los Angeles.",
        "releaseDate": "1994-10-14T00:00:00.000Z",
        "duration": 159,
        "imageUrl": "5.jpeg",
        "cost": 70.88,
        "createdAt": "2023-11-10T01:45:33.000Z",
        "updatedAt": "2023-11-10T23:54:13.000Z",
        "genre_id": 3,
        "language_id": 1
    },
    {
        "id": 6,
        "title": "Forrest Gump",
        "description": "The life journey of a man with a low IQ but good intentions.",
        "releaseDate": "1994-07-06T00:00:00.000Z",
        "duration": 179,
        "imageUrl": "6.jpeg",
        "cost": 44.29,
        "createdAt": "2023-11-10T01:45:39.000Z",
        "updatedAt": "2023-11-10T23:54:19.000Z",
        "genre_id": 2,
        "language_id": 1
    },
    {
        "id": 7,
        "title": "The Matrix",
        "description": "A computer hacker discovers a dystopian truth about the world.",
        "releaseDate": "1999-03-31T00:00:00.000Z",
        "duration": 129,
        "imageUrl": "7.jpeg",
        "cost": 88.81,
        "createdAt": "2023-11-10T01:45:46.000Z",
        "updatedAt": "2023-11-10T23:54:27.000Z",
        "genre_id": 1,
        "language_id": 1
    },
    {
        "id": 8,
        "title": "Schindler's List",
        "description": "A German businessman saves Jews during the Holocaust.",
        "releaseDate": "1993-12-15T00:00:00.000Z",
        "duration": 132,
        "imageUrl": "8.jpeg",
        "cost": 91.16,
        "createdAt": "2023-11-10T01:45:52.000Z",
        "updatedAt": "2023-11-10T23:54:37.000Z",
        "genre_id": 4,
        "language_id": 1
    },
    {
        "id": 9,
        "title": "The Silence of the Lambs",
        "description": "An FBI agent seeks the help of a brilliant but insane serial killer.",
        "releaseDate": "1991-02-14T00:00:00.000Z",
        "duration": 123,
        "imageUrl": "9.jpeg",
        "cost": 89.37,
        "createdAt": "2023-11-10T01:45:59.000Z",
        "updatedAt": "2023-11-10T23:54:45.000Z",
        "genre_id": 3,
        "language_id": 1
    },
    {
        "id": 10,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "description": "A young hobbit, Frodo, must destroy a powerful ring to save Middle-earth.",
        "releaseDate": "2001-12-19T00:00:00.000Z",
        "duration": 183,
        "imageUrl": "10.jpeg",
        "cost": 73.39,
        "createdAt": "2023-11-10T01:46:06.000Z",
        "updatedAt": "2023-11-10T23:54:52.000Z",
        "genre_id": 5,
        "language_id": 1
    },
    {
        "id": 11,
        "title": "Interstellar",
        "description": "In a future where Earth is dying, a group of astronauts travels through a wormhole in search of a new home for humanity.",
        "releaseDate": "2014-11-07T00:00:00.000Z",
        "duration": 190,
        "imageUrl": "11.jpeg",
        "cost": 58.84,
        "createdAt": "2023-11-10T01:46:44.000Z",
        "updatedAt": "2023-11-10T23:59:00.000Z",
        "genre_id": 1,
        "language_id": 1
    },
    {
        "id": 12,
        "title": "Eternal Sunshine of the Spotless Mind",
        "description": "A couple undergoes a procedure to erase memories of each other after a tumultuous relationship.",
        "releaseDate": "2004-03-19T00:00:00.000Z",
        "duration": 150,
        "imageUrl": "12.jpeg",
        "cost": 94.01,
        "createdAt": "2023-11-10T01:46:55.000Z",
        "updatedAt": "2023-11-10T23:59:07.000Z",
        "genre_id": 2,
        "language_id": 1
    },
    {
        "id": 13,
        "title": "The Great Gatsby",
        "description": "A mysterious millionaire throws extravagant parties in 1920s New York, leading to tragedy.",
        "releaseDate": "2013-05-10T00:00:00.000Z",
        "duration": 176,
        "imageUrl": "13.jpeg",
        "cost": 73.55,
        "createdAt": "2023-11-10T01:47:02.000Z",
        "updatedAt": "2023-11-10T23:59:16.000Z",
        "genre_id": 2,
        "language_id": 1
    },
    {
        "id": 14,
        "title": "Avatar",
        "description": "A paraplegic marine is sent to the alien planet Pandora and becomes torn between following orders and protecting the world he feels is his home.",
        "releaseDate": "2009-12-18T00:00:00.000Z",
        "duration": 186,
        "imageUrl": "14.jpeg",
        "cost": 45.71,
        "createdAt": "2023-11-10T01:47:08.000Z",
        "updatedAt": "2023-11-10T23:59:23.000Z",
        "genre_id": 6,
        "language_id": 1
    },
    {
        "id": 15,
        "title": "Fight Club",
        "description": "An insomniac office worker and a soap salesman form an underground fight club that evolves into something much more.",
        "releaseDate": "1999-10-15T00:00:00.000Z",
        "duration": 149,
        "imageUrl": "15.jpeg",
        "cost": 87.89,
        "createdAt": "2023-11-10T01:47:15.000Z",
        "updatedAt": "2023-11-10T23:59:32.000Z",
        "genre_id": 3,
        "language_id": 1
    },
    {
        "id": 16,
        "title": "The Social Network",
        "description": "The founding of Facebook and the legal battles that followed among its creators.",
        "releaseDate": "2010-10-01T00:00:00.000Z",
        "duration": 179,
        "imageUrl": "16.jpeg",
        "cost": 82.33,
        "createdAt": "2023-11-10T01:47:20.000Z",
        "updatedAt": "2023-11-10T23:59:41.000Z",
        "genre_id": 7,
        "language_id": 1
    },
    {
        "id": 17,
        "title": "The Revenant",
        "description": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
        "releaseDate": "2015-12-25T00:00:00.000Z",
        "duration": 127,
        "imageUrl": "17.jpeg",
        "cost": 47.99,
        "createdAt": "2023-11-10T01:47:26.000Z",
        "updatedAt": "2023-11-10T23:59:51.000Z",
        "genre_id": 7,
        "language_id": 1
    },
    {
        "id": 18,
        "title": "The Grand Budapest Hotel",
        "description": "The misadventures of a hotel concierge and his protégé.",
        "releaseDate": "2014-03-28T00:00:00.000Z",
        "duration": 157,
        "imageUrl": "18.jpeg",
        "cost": 72.96,
        "createdAt": "2023-11-10T01:47:32.000Z",
        "updatedAt": "2023-11-10T23:59:58.000Z",
        "genre_id": 8,
        "language_id": 1
    },
    {
        "id": 19,
        "title": "Inglourious Basterds",
        "description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders is set in motion.",
        "releaseDate": "2009-08-21T00:00:00.000Z",
        "duration": 171,
        "imageUrl": "19.jpeg",
        "cost": 60.8,
        "createdAt": "2023-11-10T01:47:38.000Z",
        "updatedAt": "2023-11-11T00:00:07.000Z",
        "genre_id": 3,
        "language_id": 1
    },
    {
        "id": 20,
        "title": "The Departed",
        "description": "An undercover cop and a mole in the police force attempt to identify each other while infiltrating an Irish gang in Boston.",
        "releaseDate": "2006-10-06T00:00:00.000Z",
        "duration": 144,
        "imageUrl": "20.jpeg",
        "cost": 45.16,
        "createdAt": "2023-11-10T01:47:45.000Z",
        "updatedAt": "2023-11-11T00:00:21.000Z",
        "genre_id": 3,
        "language_id": 1
    },
    {
        "id": 21,
        "title": "La La Land",
        "description": "In modern-day Los Angeles, two aspiring artists, a musician, and an actress, meet and fall in love while pursuing their dreams.",
        "releaseDate": "2016-12-09T00:00:00.000Z",
        "duration": 144,
        "imageUrl": "21.jpeg",
        "cost": 63.37,
        "createdAt": "2023-11-10T01:48:24.000Z",
        "updatedAt": "2023-11-11T00:04:34.000Z",
        "genre_id": 8,
        "language_id": 2
    },
    {
        "id": 22,
        "title": "Pan's Labyrinth",
        "description": "In post-Civil War Spain, a young girl discovers a magical and mysterious labyrinth and encounters mythical creatures.",
        "releaseDate": "2006-10-15T00:00:00.000Z",
        "duration": 184,
        "imageUrl": "22.jpeg",
        "cost": 81.38,
        "createdAt": "2023-11-10T01:48:30.000Z",
        "updatedAt": "2023-11-11T00:04:40.000Z",
        "genre_id": 9,
        "language_id": 3
    },
    {
        "id": 23,
        "title": "Spirited Away",
        "description": "During her family's move to the suburbs, a young girl enters a mysterious, dreamlike world inhabited by spirits and magical creatures.",
        "releaseDate": "2001-07-20T00:00:00.000Z",
        "duration": 174,
        "imageUrl": "23.jpeg",
        "cost": 56.79,
        "createdAt": "2023-11-10T01:48:36.000Z",
        "updatedAt": "2023-11-11T00:04:47.000Z",
        "genre_id": 9,
        "language_id": 4
    },
    {
        "id": 24,
        "title": "Amélie",
        "description": "A whimsical and shy waitress decides to change the lives of those around her for the better.",
        "releaseDate": "2001-04-25T00:00:00.000Z",
        "duration": 143,
        "imageUrl": "24.jpeg",
        "cost": 59.8,
        "createdAt": "2023-11-10T01:48:42.000Z",
        "updatedAt": "2023-11-11T00:04:56.000Z",
        "genre_id": 8,
        "language_id": 2
    },
    {
        "id": 25,
        "title": "Crouching Tiger, Hidden Dragon",
        "description": "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man in the frontier of the nation.",
        "releaseDate": "2000-12-08T00:00:00.000Z",
        "duration": 183,
        "imageUrl": "25.jpeg",
        "cost": 88.66,
        "createdAt": "2023-11-10T01:48:49.000Z",
        "updatedAt": "2023-11-11T00:05:04.000Z",
        "genre_id": 10,
        "language_id": 4
    },
    {
        "id": 26,
        "title": "City of God",
        "description": "In the slums of Rio de Janeiro, two boys growing up in the same neighborhood take different paths: one becomes a photographer, the other a drug dealer.",
        "releaseDate": "2002-08-30T00:00:00.000Z",
        "duration": 178,
        "imageUrl": "26.jpeg",
        "cost": 43.87,
        "createdAt": "2023-11-10T01:48:55.000Z",
        "updatedAt": "2023-11-11T00:05:11.000Z",
        "genre_id": 3,
        "language_id": 5
    },
    {
        "id": 27,
        "title": "Oldboy",
        "description": "After being kidnapped and imprisoned for 15 years, a man is released and seeks revenge on his mysterious captor.",
        "releaseDate": "2003-11-21T00:00:00.000Z",
        "duration": 182,
        "imageUrl": "27.jpeg",
        "cost": 93.39,
        "createdAt": "2023-11-10T01:49:01.000Z",
        "updatedAt": "2023-11-11T00:05:18.000Z",
        "genre_id": 3,
        "language_id": 4
    },
    {
        "id": 28,
        "title": "Life is Beautiful",
        "description": "A Jewish man uses humor and imagination to protect his son from the dangers of a concentration camp during World War II.",
        "releaseDate": "1997-12-20T00:00:00.000Z",
        "duration": 112,
        "imageUrl": "28.jpeg",
        "cost": 55.33,
        "createdAt": "2023-11-10T01:49:06.000Z",
        "updatedAt": "2023-11-11T00:05:25.000Z",
        "genre_id": 7,
        "language_id": 3
    },
    {
        "id": 29,
        "title": "The Lives of Others",
        "description": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
        "releaseDate": "2006-03-23T00:00:00.000Z",
        "duration": 120,
        "imageUrl": "29.jpeg",
        "cost": 76.46,
        "createdAt": "2023-11-10T01:49:13.000Z",
        "updatedAt": "2023-11-11T00:05:32.000Z",
        "genre_id": 7,
        "language_id": 5
    },
    {
        "id": 30,
        "title": "Akira",
        "description": "A secret military project turns a biker gang member into a rampaging psychic psychopath who can only be stopped by two teenagers and a group of psychics.",
        "releaseDate": "1988-07-16T00:00:00.000Z",
        "duration": 180,
        "imageUrl": "30.jpeg",
        "cost": 56.34,
        "createdAt": "2023-11-10T01:49:20.000Z",
        "updatedAt": "2023-11-11T00:05:38.000Z",
        "genre_id": 6,
        "language_id": 4
    }
  ]
  function getMovies() {
    document.write("<div class='row'>")
    movies.map((movie) => {
        var description = movie.description
        if(description.length > 80) {
          description = description.substring(0,60)+"..."
        } 
        document.write("<div class='col-lg-3 col-sm-6 col-xs-1 col-md-4'>")
        document.write(`
            <div class="card mb-3" style="width: 18rem;">
                <img src="images/${movie.imageUrl}" class="card-img-top movieImage" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="movie.html?id=${movie.id}" class="btn btn-primary">Get More Details</a>
                </div>
            </div>
        `);
        document.write("</div>")
    });
    document.write("</div>")
}

  function getMovieById() {
    console.log("movie by id")
     // Get the query string from the current URL
     const queryString = window.location.search;

     // Create a URLSearchParams object from the query string
     const params = new URLSearchParams(queryString);

     // Get the value of a specific parameter by its name
     const movieId = params.get('id'); 
     for (let i = 0; i < movies.length; i++) {
        // Check if the current movie's id matches the provided movieId
        if (movies[i].id == movieId) {
            // If a match is found, display the movie details
            document.write(`<h1>Movie Name: ${movies[i].title}</h1>`)
            document.write(`<img src='images/${movies[i].imageUrl}' alt='...' width=400 height=400 />`)
            return; // Exit the function since the movie has been found
        }
    }
  }