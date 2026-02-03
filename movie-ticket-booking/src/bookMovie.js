import fs from "fs"
function bookMovie(req, res) {
    try {
        const { userId, movieIds } = req.body;

        if (!userId || !movieIds || movieIds.length === 0) {
            return res.status(400).send("Invalid booking data");
        }

        if (!fs.existsSync("users.json") || !fs.existsSync("movies.json")) {
            return res.status(404).send("Users or Movies not found");
        }

        const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
        const movies = JSON.parse(fs.readFileSync("movies.json", "utf-8"));

        const user = users.find(u => u.id === userId);
        if (!user) {
            return res.status(404).send("User not found");
        }

        let bookedMovies = [];
        let totalAmount = 0;

        for (let id of movieIds) {
            const movie = movies.find(m => m.movieId === id);
            if (movie) {
                bookedMovies.push(movie);
                totalAmount += movie.ticketPrice;
            }
        }

        let discount = 0;
        if (user.userType === "Standard") {
            discount = totalAmount * 0.05;
        } else if (user.userType === "VIP") {
            discount = totalAmount * 0.12;
        }

        const finalAmount = totalAmount - discount;

        let bookings = [];
        if (fs.existsSync("bookings.json")) {
            bookings = JSON.parse(fs.readFileSync("bookings.json", "utf-8"));
        }

        const booking = {
            bookingId: Date.now(),
            user: user.name,
            movies: bookedMovies,
            totalAmount,
            discount,
            payableAmount: finalAmount
        };

        bookings.push(booking);
        fs.writeFileSync("bookings.json", JSON.stringify(bookings, null, 2));

        res.status(200).json(booking);

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}

export default bookMovie;
