import fs from "fs";

function createMovie(req, res) {
    try {
        const { movieId, name, ticketPrice } = req.body;

        if (!movieId || !name || !ticketPrice) {
            return res.status(400).send("All fields are required");
        }

        let movies = [];

        if (fs.existsSync("movies.json")) {
            movies = JSON.parse(fs.readFileSync("movies.json", "utf-8"));

            const isMovie = movies.find(m => m.movieId === movieId);
            if (isMovie) {
                return res.status(409).send("Movie already exists");
            }
        }

        const newMovie = {
            movieId,
            name,
            ticketPrice
        };

        movies.push(newMovie);
        fs.writeFileSync("movies.json", JSON.stringify(movies, null, 2));

        res.status(201).send("Movie created successfully");

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}

export default createMovie;
